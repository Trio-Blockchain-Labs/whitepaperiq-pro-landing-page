import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type KeyboardEvent as ReactKeyboardEvent,
    type PointerEvent as ReactPointerEvent,
    type ReactNode,
} from "react";
import { ArrowLeftRight } from "lucide-react";

export interface DraggableSplitPanelProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    ariaLabel?: string;
    /** Tailwind height classes applied to the split container. */
    heightClassName?: string;
}

const PEEK_OFFSET = 8;
const PEEK_OUT_MS = 400;
const PEEK_BACK_MS = 1200;

export default function DraggableSplitPanel({
    leftContent,
    rightContent,
    defaultValue = 100,
    min = 0,
    max = 100,
    step = 5,
    ariaLabel = "Reveal wallet research tool",
    heightClassName = "h-[640px]",
}: DraggableSplitPanelProps) {
    const [value, setValue] = useState(defaultValue);
    const [isDragging, setIsDragging] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [hasPeeked, setHasPeeked] = useState(false);
    const [peekPhase, setPeekPhase] = useState<"out" | "back" | null>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    const containerRef = useRef<HTMLDivElement>(null);
    const hasInteractedRef = useRef(false);
    const peekTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    const clamp = useCallback((v: number) => Math.min(max, Math.max(min, v)), [min, max]);

    const clearPeekTimeouts = useCallback(() => {
        peekTimeoutsRef.current.forEach(clearTimeout);
        peekTimeoutsRef.current = [];
    }, []);

    const markInteracted = useCallback(() => {
        if (hasInteractedRef.current) return;
        hasInteractedRef.current = true;
        clearPeekTimeouts();
        setPeekPhase(null);
        setHasInteracted(true);
    }, [clearPeekTimeouts]);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setPrefersReducedMotion(media.matches);
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    // One-time "peek" nudge the first time the panel scrolls into view, so users
    // notice the divider is draggable before they ever touch it.
    useEffect(() => {
        if (prefersReducedMotion || hasInteractedRef.current) return;
        const node = containerRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0]?.isIntersecting || hasInteractedRef.current) return;
                observer.disconnect();

                const peekValue = clamp(defaultValue - PEEK_OFFSET);
                setPeekPhase("out");
                peekTimeoutsRef.current.push(
                    setTimeout(() => {
                        if (hasInteractedRef.current) return;
                        setValue(peekValue);
                    }, 50)
                );
                peekTimeoutsRef.current.push(
                    setTimeout(() => {
                        if (hasInteractedRef.current) return;
                        setPeekPhase("back");
                        setValue(defaultValue);
                    }, 50 + PEEK_OUT_MS)
                );
                peekTimeoutsRef.current.push(
                    setTimeout(() => {
                        setPeekPhase(null);
                        if (!hasInteractedRef.current) setHasPeeked(true);
                    }, 50 + PEEK_OUT_MS + PEEK_BACK_MS)
                );
            },
            { threshold: 0.4 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [prefersReducedMotion, defaultValue, clamp]);

    useEffect(() => clearPeekTimeouts, [clearPeekTimeouts]);

    const updateFromClientX = useCallback(
        (clientX: number) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            const pct = ((clientX - rect.left) / rect.width) * 100;
            setValue(clamp(pct));
        },
        [clamp]
    );

    const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
        markInteracted();
        e.currentTarget.setPointerCapture(e.pointerId);
        setIsDragging(true);
        updateFromClientX(e.clientX);
    };

    const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        updateFromClientX(e.clientX);
    };

    const handlePointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
        e.currentTarget.releasePointerCapture(e.pointerId);
        setIsDragging(false);
    };

    const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            markInteracted();
            setValue((v) => clamp(v - step));
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            markInteracted();
            setValue((v) => clamp(v + step));
        } else if (e.key === "Home") {
            e.preventDefault();
            markInteracted();
            setValue(min);
        } else if (e.key === "End") {
            e.preventDefault();
            markInteracted();
            setValue(max);
        }
    };

    const showPulse = hasPeeked && !hasInteracted && !prefersReducedMotion && !isDragging;

    const transition = isDragging
        ? "none"
        : peekPhase === "out"
        ? "clip-path 0.4s cubic-bezier(0.4,0,0.2,1), left 0.4s cubic-bezier(0.4,0,0.2,1)"
        : peekPhase === "back"
        ? "clip-path 1.2s cubic-bezier(0.22,1,0.36,1), left 1.2s cubic-bezier(0.22,1,0.36,1)"
        : "clip-path 0.3s ease, left 0.3s ease";

    return (
        <div ref={containerRef} className={`relative w-full ${heightClassName} select-none`}>
            {/* Clipped shell — holds both content layers; kept separate from the divider below so the
                handle's hit target is never sliced off by this wrapper's overflow-hidden at the extremes. */}
            <div className="absolute inset-0 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950">
                {/* Left layer — original Generate/Export/Decision content, revealed from the left up to the divider */}
                <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - value}% 0 0)`, transition }}
                >
                    {leftContent}
                </div>

                {/* Right layer — wallet search & analysis tool, revealed from the divider to the right edge */}
                <div
                    className="absolute inset-0 bg-slate-50 dark:bg-slate-900"
                    style={{ clipPath: `inset(0 0 0 ${value}%)`, transition }}
                >
                    {rightContent}
                </div>
            </div>

            {/* Divider line: purple gradient with a faint outer glow */}
            <div
                aria-hidden="true"
                className="absolute inset-y-0 z-10 -translate-x-1/2 w-[3px] rounded-full pointer-events-none transition-[opacity,box-shadow] duration-200"
                style={{
                    left: `${value}%`,
                    transition: transition.replace(/clip-path[^,]*,\s*/, ""),
                    background: "linear-gradient(180deg, rgba(124,58,237,0) 0%, rgba(124,58,237,0.65) 15%, #9F5CF0 50%, rgba(124,58,237,0.65) 85%, rgba(124,58,237,0) 100%)",
                    boxShadow: "0 0 10px rgba(124,58,237,0.45), 0 0 2px rgba(124,58,237,0.6)",
                }}
            />

            {/* Draggable handle + hit target */}
            <div
                role="slider"
                tabIndex={0}
                aria-label={ariaLabel}
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={Math.round(value)}
                aria-valuetext={`${Math.round(100 - value)}% wallet tool revealed`}
                aria-orientation="horizontal"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onKeyDown={handleKeyDown}
                onFocus={markInteracted}
                style={{ left: `${value}%`, transition, touchAction: "none" }}
                className="absolute inset-y-0 z-20 -translate-x-1/2 w-12 lg:w-11 flex items-center justify-center cursor-ew-resize group focus:outline-none"
            >
                {/* Hint pill — fades out for good after first interaction */}
                <div
                    aria-hidden={hasInteracted}
                    className={`absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 shadow-md border border-slate-200 dark:border-slate-700 pointer-events-none ${
                        hasInteracted ? "opacity-0" : "opacity-100"
                    } ${prefersReducedMotion ? "" : "transition-opacity duration-500"}`}
                >
                    <span className="text-[#7C3AED] mr-1">⟷</span>Drag to compare
                </div>

                {/* Looping attention pulse until the user interacts */}
                {showPulse && (
                    <span className="absolute w-12 h-12 lg:w-11 lg:h-11 rounded-full bg-[#7C3AED]/50 divider-pulse-ring pointer-events-none" />
                )}

                <div
                    className={`relative z-10 w-12 h-12 lg:w-11 lg:h-11 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 transition-transform duration-150 ${
                        isDragging ? "scale-105" : "scale-100 group-hover:scale-110"
                    } group-focus-visible:ring-4 group-focus-visible:ring-[#7C3AED]/40`}
                    style={{
                        background: "linear-gradient(135deg, #7C3AED 0%, #9F5CF0 100%)",
                        boxShadow: isDragging
                            ? "0 2px 8px rgba(124,58,237,0.55), inset 0 1px 3px rgba(0,0,0,0.25)"
                            : "0 6px 18px rgba(124,58,237,0.45)",
                    }}
                >
                    <ArrowLeftRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
            </div>
        </div>
    );
}
