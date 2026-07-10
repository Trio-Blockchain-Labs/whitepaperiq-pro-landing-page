import {
    useCallback,
    useRef,
    useState,
    type KeyboardEvent as ReactKeyboardEvent,
    type PointerEvent as ReactPointerEvent,
    type ReactNode,
} from "react";

export interface DraggableSplitPanelProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    ariaLabel?: string;
    /** Tailwind height classes applied to the split container (desktop only). */
    heightClassName?: string;
}

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
    const containerRef = useRef<HTMLDivElement>(null);

    const clamp = useCallback((v: number) => Math.min(max, Math.max(min, v)), [min, max]);

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
            setValue((v) => clamp(v - step));
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            setValue((v) => clamp(v + step));
        } else if (e.key === "Home") {
            e.preventDefault();
            setValue(min);
        } else if (e.key === "End") {
            e.preventDefault();
            setValue(max);
        }
    };

    const transition = isDragging ? "none" : "clip-path 0.3s ease, left 0.3s ease";

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

            {/* Draggable divider */}
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
                style={{ left: `${value}%`, transition, touchAction: "none" }}
                className="absolute inset-y-0 z-20 -translate-x-1/2 w-8 flex items-center justify-center cursor-ew-resize group focus:outline-none"
            >
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-slate-300 dark:bg-slate-700 group-hover:bg-[#8c25f4] group-focus-visible:bg-[#8c25f4] transition-colors" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 shadow-lg flex items-center justify-center group-hover:border-[#8c25f4] group-focus-visible:border-[#8c25f4] group-focus-visible:ring-2 group-focus-visible:ring-[#8c25f4]/40 transition-colors">
                    <span className="material-icons text-slate-500 dark:text-slate-300 text-sm">code</span>
                </div>
            </div>
        </div>
    );
}
