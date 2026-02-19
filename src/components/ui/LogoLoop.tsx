import { useMemo, useRef, useState, useEffect, type ReactNode, type CSSProperties } from "react";

export interface LogoItem {
    node?: ReactNode;
    src?: string;
    alt?: string;
    title?: string;
    href?: string;
}

interface LogoLoopProps {
    logos: LogoItem[];
    /** Pixels per second */
    speed?: number;
    /** Scroll direction */
    direction?: "left" | "right";
    /** Logo height in px */
    logoHeight?: number;
    /** Gap between logos in px */
    gap?: number;
    /** Speed on hover (0 = pause) */
    hoverSpeed?: number;
    /** Scale logos on hover */
    scaleOnHover?: boolean;
    /** Show fade-out gradient on edges */
    fadeOut?: boolean;
    /** Fade-out edge color (for gradient) */
    fadeOutColor?: string;
    /** Use custom render or default */
    useCustomRender?: boolean;
    /** Accessibility label */
    ariaLabel?: string;
}

export default function LogoLoop({
    logos,
    speed = 60,
    direction = "left",
    logoHeight = 40,
    gap = 48,
    hoverSpeed,
    scaleOnHover = false,
    fadeOut = false,
    fadeOutColor = "#ffffff",
    ariaLabel = "Logo carousel",
}: LogoLoopProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [setWidth, setSetWidth] = useState<number | null>(null);

    // Only duplicate logos twice (more efficient than 4x)
    // CSS animation will handle the seamless loop
    const duplicatedLogos = useMemo(() => [...logos, ...logos], [logos]);

    // Calculate animation duration based on speed
    // Duration = distance / speed (in seconds)
    // We'll measure the actual width and calculate duration dynamically
    useEffect(() => {
        const track = trackRef.current;
        if (!track || logos.length === 0) return;

        // Measure width of a single set of logos
        const items = track.children;
        if (items.length === 0) return;

        let width = 0;
        const singleSetCount = logos.length;
        for (let i = 0; i < singleSetCount && i < items.length; i++) {
            const item = items[i] as HTMLElement;
            width += item.offsetWidth + gap;
        }

        if (width > 0) {
            setSetWidth(width);
        }
    }, [logos.length, gap]);

    // Calculate animation duration: distance (px) / speed (px/s) = duration (s)
    const animationDuration = setWidth && speed > 0 ? `${setWidth / speed}s` : "20s";
    const hoverAnimationDuration = setWidth && hoverSpeed !== undefined && hoverSpeed > 0 
        ? `${setWidth / hoverSpeed}s` 
        : animationDuration;

    const fadeStyle: CSSProperties = fadeOut
        ? {
              maskImage: `linear-gradient(to right, transparent, black 10%, black 90%, transparent)`,
              WebkitMaskImage: `linear-gradient(to right, transparent, black 10%, black 90%, transparent)`,
          }
        : {};

    // CSS animation keyframes will be handled inline
    const animationName = direction === "left" ? "scroll-left" : "scroll-right";
    const animationStyle: CSSProperties = {
        animation: `${animationName} ${isHovered && hoverSpeed !== undefined ? hoverAnimationDuration : animationDuration} linear infinite`,
        animationPlayState: isHovered && hoverSpeed === 0 ? "paused" : "running",
    };

    return (
        <>
            {/* CSS Keyframes for animation - using 50% since we duplicate logos twice */}
            <style>{`
                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                @keyframes scroll-right {
                    from {
                        transform: translateX(-50%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
            `}</style>
            <div
                className="relative w-full overflow-hidden"
                style={{ height: logoHeight + 20, ...fadeStyle }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                role="marquee"
                aria-label={ariaLabel}
            >
                {/* Fade edges with solid color */}
                {fadeOut && fadeOutColor && (
                    <>
                        <div
                            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                            style={{
                                background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
                            }}
                        />
                        <div
                            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                            style={{
                                background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
                            }}
                        />
                    </>
                )}

                {/* Track with CSS animation */}
                <div
                    ref={trackRef}
                    className="flex items-center will-change-transform"
                    style={{ 
                        gap: `${gap}px`, 
                        height: logoHeight + 20,
                        ...animationStyle,
                    }}
                >
                    {duplicatedLogos.map((logo, i) => {
                        const content = logo.node ? (
                            <span
                                style={{ fontSize: logoHeight, lineHeight: 1 }}
                                className="flex items-center justify-center"
                            >
                                {logo.node}
                            </span>
                        ) : logo.src ? (
                            <img
                                src={logo.src}
                                alt={logo.alt || logo.title || ""}
                                style={{ height: logoHeight, width: "auto" }}
                                className="object-contain"
                                draggable={false}
                                loading="lazy"
                            />
                        ) : null;

                        const inner = (
                            <div
                                className={`group flex items-center shrink-0 transition-transform duration-300 ${
                                    scaleOnHover ? "hover:scale-110" : ""
                                }`}
                                style={{ height: logoHeight }}
                                title={logo.title}
                            >
                                {content}
                                {logo.title && (
                                    <span className="ml-2 font-bold text-lg font-display text-slate-700 dark:text-slate-300 whitespace-nowrap">
                                        {logo.title}
                                    </span>
                                )}
                            </div>
                        );

                        return logo.href ? (
                            <a
                                key={`${logo.title}-${i}`}
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 no-underline"
                            >
                                {inner}
                            </a>
                        ) : (
                            <div key={`${logo.title}-${i}`} className="shrink-0">
                                {inner}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
