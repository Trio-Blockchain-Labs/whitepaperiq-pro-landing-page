import type { ComponentPropsWithoutRef, ElementType, ReactNode, CSSProperties } from "react";

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
    const { style, ...restProps } = rest as { style?: CSSProperties };

    return (
        <Component
            className={`relative inline-block rounded-[20px] overflow-hidden ${className}`}
            style={{
                padding: `${thickness}px 0`,
                ...(style || {}),
            }}
            {...restProps}
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
            <div className="relative border border-slate-50/30 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 text-center px-4 py-1.5 rounded-[20px] z-[1]">
                {children}
            </div>
        </Component>
    );
}
