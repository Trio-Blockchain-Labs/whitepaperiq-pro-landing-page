"use client";

import { Fragment, useEffect, useMemo, useRef, type ElementType, type ReactNode, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

export interface ScrollFloatProps {
    children: string;
    as?: ElementType;
    scrollContainerRef?: RefObject<HTMLElement | null>;
    containerClassName?: string;
    textClassName?: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
}

export default function ScrollFloat({
    children,
    as: Tag = "h2",
    scrollContainerRef,
    containerClassName = "",
    textClassName = "",
    animationDuration = 1,
    ease = "back.inOut(2)",
    scrollStart = "center bottom+=50%",
    scrollEnd = "bottom bottom-=40%",
    stagger = 0.03,
}: ScrollFloatProps) {
    const containerRef = useRef<HTMLElement>(null);

    // Characters are grouped per word (each word non-breaking) so the browser
    // can only wrap the line between words, never in the middle of one.
    const splitText: ReactNode = useMemo(() => {
        const text = typeof children === "string" ? children : "";
        const words = text.split(" ");
        return words.map((word, wordIndex) => (
            <Fragment key={wordIndex}>
                <span className="word">
                    {word.split("").map((char, charIndex) => (
                        <span className="char" key={charIndex}>
                            {char}
                        </span>
                    ))}
                </span>
                {wordIndex < words.length - 1 ? " " : null}
            </Fragment>
        ));
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const charElements = el.querySelectorAll<HTMLElement>(".char");

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            gsap.set(charElements, { opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1 });
            return;
        }

        const scroller = scrollContainerRef?.current ?? window;

        gsap.fromTo(
            charElements,
            {
                willChange: "opacity, transform",
                opacity: 0,
                yPercent: 120,
                scaleY: 2.3,
                scaleX: 0.7,
                transformOrigin: "50% 0%",
            },
            {
                duration: animationDuration,
                ease,
                opacity: 1,
                yPercent: 0,
                scaleY: 1,
                scaleX: 1,
                stagger,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: scrollStart,
                    end: scrollEnd,
                    scrub: true,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === el) trigger.kill();
            });
        };
    }, [children, scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

    return (
        <Tag ref={containerRef} className={`scroll-float ${containerClassName}`}>
            <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
        </Tag>
    );
}
