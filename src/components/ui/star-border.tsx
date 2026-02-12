import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type StarBorderProps<T extends ElementType = "button"> = {
    as?: T;
    color?: string;
    speed?: string;
    thickness?: number;
    className?: string;
    children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function StarBorder<T extends ElementType = "button">({
    as,
    className = "",
    color = "white",
    speed = "6s",
    thickness = 1,
    children,
    ...rest
}: StarBorderProps<T>) {
    const Component = as || "button";

    return (
        <Component
            className={`relative inline-block rounded-[20px] overflow-hidden ${className}`}
            style={{
                padding: `${thickness}px 0`,
                ...(rest as Record<string, unknown>).style,
            }}
            {...rest}
        >
            {/* Bottom gradient border */}
            <div
                className="absolute w-[300%] h-1/2 opacity-70 bottom-[-12px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            />
            {/* Top gradient border */}
            <div
                className="absolute w-[300%] h-1/2 opacity-70 top-[-12px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            />
            {/* Inner content */}
            <div className="relative border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-center px-4 py-1.5 rounded-[20px] z-[1]">
                {children}
            </div>
        </Component>
    );
}
