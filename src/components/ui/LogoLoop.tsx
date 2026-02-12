import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

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

    // Duplicate logos enough times to fill the viewport seamlessly
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

    const currentSpeed = isHovered && hoverSpeed !== undefined ? hoverSpeed : speed;

    // Calculate animation duration based on speed
    // We need to know the total width of one set of logos
    const singleSetCount = logos.length;

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationId: number;
        let lastTime: number | null = null;
        let offset = 0;

        // Measure the width of a single set
        const items = track.children;
        let singleSetWidth = 0;
        for (let i = 0; i < singleSetCount; i++) {
            if (items[i]) {
                singleSetWidth += (items[i] as HTMLElement).offsetWidth + gap;
            }
        }

        const animate = (time: number) => {
            if (lastTime === null) lastTime = time;
            const delta = (time - lastTime) / 1000; // seconds
            lastTime = time;

            const pxPerSecond = currentSpeed;
            if (direction === "left") {
                offset -= pxPerSecond * delta;
            } else {
                offset += pxPerSecond * delta;
            }

            // Reset offset when we've scrolled one full set width
            if (direction === "left" && offset <= -singleSetWidth) {
                offset += singleSetWidth;
            } else if (direction === "right" && offset >= singleSetWidth) {
                offset -= singleSetWidth;
            }

            track.style.transform = `translateX(${offset}px)`;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [currentSpeed, direction, gap, singleSetCount]);

    const fadeStyle: CSSProperties = fadeOut
        ? {
              maskImage: `linear-gradient(to right, transparent, black 10%, black 90%, transparent)`,
              WebkitMaskImage: `linear-gradient(to right, transparent, black 10%, black 90%, transparent)`,
          }
        : {};

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ height: logoHeight + 20, ...fadeStyle }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="marquee"
            aria-label={ariaLabel}
        >
            {/* Fade edges with solid color (alternative approach) */}
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

            {/* Track */}
            <div
                ref={trackRef}
                className="flex items-center will-change-transform"
                style={{ gap: `${gap}px`, height: logoHeight + 20 }}
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
                        />
                    ) : null;

                    const inner = (
                        <div
                            className={`flex items-center shrink-0 transition-transform duration-300 ${
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
    );
}
