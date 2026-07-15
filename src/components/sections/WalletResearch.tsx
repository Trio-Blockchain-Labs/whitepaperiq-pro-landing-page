"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Zap, Link2, ShieldCheck, Eye } from "lucide-react";
import ScrollFloat from "@/components/ui/ScrollFloat";

const FEATURES = [
    { icon: Zap, label: "Real-time risk" },
    { icon: Link2, label: "35+ Chains" },
    { icon: ShieldCheck, label: "AML Screening" },
    { icon: Eye, label: "Visual Intelligence" },
];

// Node positions as fractions (0-1) of the map card, hand-placed over the
// continent blobs below so they read as North America, South America,
// Europe, Central/West Asia, East Asia and Australia.
const NODES = [
    { id: "na", x: 0.196, y: 0.42 },
    { id: "eu", x: 0.52, y: 0.39 },
    { id: "ea", x: 0.765, y: 0.36 },
    { id: "ma", x: 0.653, y: 0.516 },
    { id: "sa", x: 0.313, y: 0.722 },
    { id: "au", x: 0.806, y: 0.747 },
] as const;

const ARCS = [
    { from: "na", to: "eu", dur: 3.4, delay: 0 },
    { from: "eu", to: "ea", dur: 3.8, delay: 0.9 },
    { from: "ea", to: "ma", dur: 2.9, delay: 1.7 },
    { from: "sa", to: "na", dur: 4.1, delay: 0.4 },
    { from: "ma", to: "au", dur: 3.2, delay: 1.3 },
] as const;

const VB = { w: 1000, h: 500 };

function nodePoint(id: string) {
    const n = NODES.find((n) => n.id === id)!;
    return { x: n.x * VB.w, y: n.y * VB.h };
}

function arcPath(fromId: string, toId: string) {
    const a = nodePoint(fromId);
    const b = nodePoint(toId);
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const offset = dist * 0.2;
    const nx = -dy / dist;
    const ny = dx / dist;
    const cx = mx + nx * offset;
    const cy = my + ny * offset;
    return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

export default function WalletResearch() {
    const mapRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setPrefersReducedMotion(media.matches);
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    useEffect(() => {
        const node = mapRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(([entry]) => setIsInView(!!entry?.isIntersecting), {
            threshold: 0.15,
        });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    // Native SMIL animations (animateMotion/animate) are paused/resumed as a group
    // via the SVG root's own pause API — cheaper than tearing the elements down.
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg || prefersReducedMotion) return;
        if (isInView) svg.unpauseAnimations();
        else svg.pauseAnimations();
    }, [isInView, prefersReducedMotion]);

    const arcDefs = useMemo(
        () => ARCS.map((arc, i) => ({ ...arc, id: `arc-${i}`, d: arcPath(arc.from, arc.to) })),
        []
    );

    const animate = !prefersReducedMotion;
    const fadeUp = (delay: number) =>
        animate
            ? {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.5 },
                transition: { duration: 0.4, delay, ease: "easeOut" as const },
            }
            : {};

    return (
        <section id="wallet-research" className="pt-8 md:pt-10 pb-24 bg-white dark:bg-slate-950 relative overflow-hidden flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-w-0 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left – copy */}
                    <div>
                        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 bg-[#7C3AED]/10 rounded-full mb-6">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#7C3AED] text-white text-[10px] font-extrabold uppercase tracking-wider">
                                New
                            </span>
                            <span className="text-[#7C3AED] font-bold text-sm">Wallet Intelligence</span>
                        </motion.div>

                        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
                            <ScrollFloat
                                as="span"
                                containerClassName="block"
                                textClassName="text-slate-900 dark:text-white"
                                animationDuration={1}
                                ease="back.inOut(2)"
                                scrollStart="center bottom+=50%"
                                scrollEnd="bottom bottom-=40%"
                                stagger={0.03}
                            >
                                Investigate any wallet
                            </ScrollFloat>
                            <ScrollFloat
                                as="span"
                                containerClassName="block"
                                textClassName="text-[#7C3AED]"
                                animationDuration={1}
                                ease="back.inOut(2)"
                                scrollStart="center bottom+=50%"
                                scrollEnd="bottom bottom-=40%"
                                stagger={0.03}
                            >
                                in seconds.
                            </ScrollFloat>
                        </h2>

                        <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
                            {FEATURES.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2">
                                    <Icon className="w-4 h-4 text-[#7C3AED]" strokeWidth={2.25} />
                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right – animated dotted world map */}
                    <div className="relative w-full">
                        {/* Faint, very slow radial drift behind the card for depth */}
                        <div
                            aria-hidden="true"
                            className={`absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_65%)] blur-3xl -z-10 ${animate ? "map-drift" : ""
                                }`}
                        />

                        <div
                            ref={mapRef}
                            className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#7C3AED]/10 shadow-lg"
                        >
                            <svg
                                ref={svgRef}
                                viewBox={`0 0 ${VB.w} ${VB.h}`}
                                className="w-full h-auto block text-[#7C3AED]/25 dark:text-[#7C3AED]/35"
                                role="img"
                                aria-label="Animated world map showing wallet data flowing between regions"
                            >
                                <defs>
                                    <pattern id="mapDots" width="11" height="11" patternUnits="userSpaceOnUse">
                                        <circle cx="1.3" cy="1.3" r="1.15" fill="currentColor" />
                                    </pattern>
                                    <mask id="continentMask">
                                        <rect width={VB.w} height={VB.h} fill="black" />
                                        <g fill="white">
                                            {/* North America */}
                                            <ellipse cx="170" cy="170" rx="95" ry="75" />
                                            <ellipse cx="210" cy="245" rx="55" ry="45" />
                                            {/* South America */}
                                            <ellipse cx="290" cy="340" rx="50" ry="95" transform="rotate(15 290 340)" />
                                            {/* Europe */}
                                            <ellipse cx="490" cy="150" rx="60" ry="45" />
                                            {/* Africa */}
                                            <ellipse cx="510" cy="270" rx="60" ry="95" />
                                            {/* Middle East / Central Asia */}
                                            <ellipse cx="590" cy="195" rx="55" ry="40" />
                                            {/* Asia */}
                                            <ellipse cx="760" cy="165" rx="150" ry="85" />
                                            <ellipse cx="830" cy="235" rx="65" ry="55" />
                                            {/* Australia */}
                                            <ellipse cx="835" cy="385" rx="58" ry="38" />
                                        </g>
                                    </mask>
                                    <radialGradient id="pulseGlow">
                                        <stop offset="0%" stopColor="#C4B5FD" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                                    </radialGradient>
                                </defs>

                                {/* Dotted continents */}
                                <rect width={VB.w} height={VB.h} fill="url(#mapDots)" mask="url(#continentMask)" />

                                {/* Base arcs — barely visible */}
                                <g fill="none" stroke="#7C3AED" strokeOpacity={0.15} strokeWidth={1.2}>
                                    {arcDefs.map((arc) => (
                                        <path key={arc.id} id={arc.id} d={arc.d} />
                                    ))}
                                </g>

                                {/* Node ripples (fire roughly on packet arrival) */}
                                {animate &&
                                    arcDefs.map((arc) => {
                                        const dest = nodePoint(arc.to);
                                        const rippleBegin = Math.max(arc.delay + arc.dur - 0.2, 0);
                                        return (
                                            <circle
                                                key={`ripple-${arc.id}`}
                                                cx={dest.x}
                                                cy={dest.y}
                                                r={4}
                                                fill="none"
                                                stroke="#7C3AED"
                                                strokeWidth={1.5}
                                                opacity={0}
                                            >
                                                <animate
                                                    attributeName="r"
                                                    values="4;16"
                                                    begin={`${rippleBegin}s`}
                                                    dur={`${arc.dur}s`}
                                                    repeatCount="indefinite"
                                                />
                                                <animate
                                                    attributeName="opacity"
                                                    values="0.6;0"
                                                    begin={`${rippleBegin}s`}
                                                    dur={`${arc.dur}s`}
                                                    repeatCount="indefinite"
                                                />
                                            </circle>
                                        );
                                    })}

                                {/* Traveling packets — a small comet trail of 3 fading dots per arc */}
                                {animate &&
                                    arcDefs.map((arc) =>
                                        [0, 0.09, 0.18].map((trailOffset, ti) => (
                                            <circle
                                                key={`${arc.id}-packet-${ti}`}
                                                r={2.6 - ti * 0.6}
                                                fill={ti === 0 ? "url(#pulseGlow)" : "#A78BFA"}
                                                opacity={1 - ti * 0.35}
                                            >
                                                <animateMotion
                                                    dur={`${arc.dur}s`}
                                                    begin={`${arc.delay + trailOffset}s`}
                                                    repeatCount="indefinite"
                                                    rotate="auto"
                                                >
                                                    <mpath href={`#${arc.id}`} />
                                                </animateMotion>
                                            </circle>
                                        ))
                                    )}

                                {/* Nodes */}
                                {NODES.map((n, i) => {
                                    const p = nodePoint(n.id);
                                    return (
                                        <g key={n.id} transform={`translate(${p.x} ${p.y})`}>
                                            <circle r={13} fill="#7C3AED" opacity={0.15} />
                                            <circle
                                                r={7}
                                                fill="#7C3AED"
                                                opacity={0.35}
                                                className={animate ? "node-breathe" : ""}
                                                style={
                                                    animate
                                                        ? { animationDelay: `${i * 0.5}s`, animationPlayState: isInView ? "running" : "paused" }
                                                        : undefined
                                                }
                                            />
                                            <circle r={3.5} fill="#7C3AED" />
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
