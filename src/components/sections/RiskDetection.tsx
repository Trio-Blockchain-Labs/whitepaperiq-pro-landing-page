"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Link2, Database, FileText, ChevronDown, Hexagon, BarChart3, Users, Sparkles, MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";
import TrueFocus from "@/components/ui/TrueFocus";

type NodeId = "extract" | "verify" | "detect";

interface RiskNode {
    id: NodeId;
    label: string;
    icon: typeof Link2;
    short: string;
    body: string;
    x: number;
    y: number;
    iconWrap: string;
    ring: string;
    glow: string;
    haloShadow: string;
    border: string;
    accentText: string;
    accentBg: string;
    dot: string;
    line: string;
    lineActive: string;
}

// Design canvas for the desktop orbital diagram — the SVG viewBox and every
// node's percentage position are derived from this same box so the connecting
// lines always line up with the circles regardless of container width. Extra
// vertical room (vs. a tight 1:1 square) keeps the Verify card's expanded body
// from colliding with the Detect node below it.
const CANVAS = { w: 520, h: 780 };
const HUB = { x: 172, y: 380 };
// Radius the fast orbit-halo dots travel at — lines up with the solid inner
// ring (34% of canvas width) already drawn behind the hub.
const ORBIT_RADIUS = 88;

const NODES: RiskNode[] = [
    {
        id: "extract",
        label: "Extract",
        icon: Link2,
        short: "Extract key claims and data from the whitepaper.",
        body: "Our engine reads and understands whitepapers to identify tokenomics, vesting schedules, and all project commitments.",
        x: 332,
        y: 140,
        iconWrap: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
        ring: "ring-emerald-400/60",
        glow: "ring-2 ring-emerald-400 shadow-[0_0_14px_2px_rgba(16,185,129,0.55)] hover:shadow-[0_0_24px_6px_rgba(16,185,129,0.8)] hover:ring-emerald-300",
        haloShadow: "shadow-[0_0_0_8px_rgba(16,185,129,0.15)]",
        border: "border-emerald-200 dark:border-emerald-800",
        accentText: "text-emerald-600 dark:text-emerald-400",
        accentBg: "bg-emerald-50 dark:bg-emerald-900/20",
        dot: "fill-emerald-400",
        line: "stroke-emerald-200 dark:stroke-emerald-800",
        lineActive: "stroke-emerald-400",
    },
    {
        id: "verify",
        label: "Verify",
        icon: Database,
        short: "Verify claims against real-time on-chain data.",
        body: "We cross-check every extracted claim against live on-chain data — token contracts, liquidity pools, and wallet activity — pulled through real-time indexers and oracles.",
        x: 412,
        y: 380,
        iconWrap: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
        ring: "ring-blue-400/60",
        glow: "ring-2 ring-blue-400 shadow-[0_0_14px_2px_rgba(59,130,246,0.55)] hover:shadow-[0_0_24px_6px_rgba(59,130,246,0.8)] hover:ring-blue-300",
        haloShadow: "shadow-[0_0_0_8px_rgba(59,130,246,0.15)]",
        border: "border-blue-200 dark:border-blue-800",
        accentText: "text-blue-600 dark:text-blue-400",
        accentBg: "bg-blue-50 dark:bg-blue-900/20",
        dot: "fill-blue-400",
        line: "stroke-blue-200 dark:stroke-blue-800",
        lineActive: "stroke-blue-400",
    },
    {
        id: "detect",
        label: "Detect",
        icon: FileText,
        short: "Detect mismatches and hidden risks instantly.",
        body: "Any discrepancy is flagged instantly, from mismatched vesting schedules to contract-level red flags, and surfaced in a clear, actionable risk report.",
        x: 332,
        y: 660,
        iconWrap: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
        ring: "ring-red-400/60",
        glow: "ring-2 ring-red-400 shadow-[0_0_14px_2px_rgba(239,68,68,0.55)] hover:shadow-[0_0_24px_6px_rgba(239,68,68,0.8)] hover:ring-red-300",
        haloShadow: "shadow-[0_0_0_8px_rgba(239,68,68,0.15)]",
        border: "border-red-200 dark:border-red-800",
        accentText: "text-red-600 dark:text-red-400",
        accentBg: "bg-red-50 dark:bg-red-900/20",
        dot: "fill-red-400",
        line: "stroke-red-200 dark:stroke-red-800",
        lineActive: "stroke-red-400",
    },
];

const TRUST_ICONS = [
    { icon: Sparkles, label: "Funds" },
    { icon: BarChart3, label: "Analysts" },
    { icon: Users, label: "DAOs" },
    { icon: Hexagon, label: "Protocols" },
];

function nodePercent(node: { x: number; y: number }) {
    return { left: `${(node.x / CANVAS.w) * 100}%`, top: `${(node.y / CANVAS.h) * 100}%` };
}

export default function RiskDetection() {
    // Desktop hub: descriptions are hidden by default and only reveal on hover/focus
    // (hoveredId). A click "pins" a card open too, so touch users (no hover) and
    // anyone who wants it to stay put can still get there — clicking is real, not decorative.
    const [hoveredId, setHoveredId] = useState<NodeId | null>(null);
    const [pinnedId, setPinnedId] = useState<NodeId | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [pulseKey, setPulseKey] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    const diagramSvgRef = useRef<SVGSVGElement>(null);
    const diagramWrapRef = useRef<HTMLDivElement>(null);
    const [diagramInView, setDiagramInView] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setPrefersReducedMotion(media.matches);
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    // Native SMIL animations (orbit halo + traveling packets) are paused/resumed
    // as a group via the SVG root's own pause API when the diagram scrolls off-screen.
    useEffect(() => {
        const node = diagramWrapRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(([entry]) => setDiagramInView(!!entry?.isIntersecting), {
            threshold: 0.15,
        });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const svg = diagramSvgRef.current;
        if (!svg || prefersReducedMotion) return;
        if (diagramInView) svg.unpauseAnimations();
        else svg.pauseAnimations();
    }, [diagramInView, prefersReducedMotion]);

    const activeId = hoveredId ?? pinnedId;

    const revealHover = (id: NodeId) => {
        setHoveredId(id);
        setHasInteracted(true);
    };
    const clearHover = () => setHoveredId(null);

    const handleClick = (id: NodeId) => {
        setHasInteracted(true);
        setPulseKey((k) => k + 1);
        setPinnedId((cur) => (cur === id ? null : id));
    };

    const expandDuration = prefersReducedMotion ? "duration-0" : "duration-[250ms]";
    const showIdlePulse = !hasInteracted && !prefersReducedMotion;

    return (
        <section id="features" className="pt-24 pb-8 md:pb-10 bg-white dark:bg-slate-950 relative overflow-hidden flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text column */}
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="w-5 h-5 text-[#7C3AED] fill-[#7C3AED]/15" />
                            <span className="text-[#7C3AED] font-bold text-sm uppercase tracking-wider">Risk Detection Engine</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            <TrueFocus
                                sentence="Whitepaper Reality."
                                borderColor="#7C3AED"
                                glowColor="rgba(124, 58, 237, 0.6)"
                                blurAmount={4}
                                animationDuration={0.5}
                                pauseBetweenAnimations={1.2}
                                manualMode={prefersReducedMotion}
                            />
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
                            We compare what projects claim with what&apos;s really on-chain. Instantly spot
                            inconsistencies that others miss.
                        </p>

                        {/* Mobile / tablet — simplified colored accordion list (hub diagram hidden) */}
                        <div className="lg:hidden space-y-3 mb-10">
                            {NODES.map((node) => {
                                const isOpen = pinnedId === node.id;
                                const Icon = node.icon;
                                return (
                                    <div
                                        key={node.id}
                                        className={cn(
                                            "rounded-xl border bg-white dark:bg-slate-900 overflow-hidden transition-colors",
                                            isOpen ? node.border : "border-slate-200 dark:border-slate-800"
                                        )}
                                    >
                                        <button
                                            type="button"
                                            id={`${node.id}-trigger-m`}
                                            aria-expanded={isOpen}
                                            aria-controls={`${node.id}-panel-m`}
                                            onClick={() => handleClick(node.id)}
                                            className="w-full flex items-center gap-3 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 rounded-xl"
                                        >
                                            <span className={cn("w-11 h-11 shrink-0 rounded-full flex items-center justify-center", node.iconWrap)}>
                                                <Icon className="w-5 h-5" strokeWidth={2.25} />
                                            </span>
                                            <span className="flex-1 min-w-0">
                                                <span className="block font-bold text-slate-900 dark:text-white">{node.label}</span>
                                                <span className="block text-sm text-slate-500 dark:text-slate-400 truncate">{node.short}</span>
                                            </span>
                                            <ChevronDown
                                                className={cn(
                                                    "w-5 h-5 text-slate-400 shrink-0 transition-transform",
                                                    expandDuration,
                                                    isOpen && "rotate-180"
                                                )}
                                            />
                                        </button>
                                        <div
                                            id={`${node.id}-panel-m`}
                                            role="region"
                                            aria-labelledby={`${node.id}-trigger-m`}
                                            className={cn("grid transition-[grid-template-rows] ease-out", expandDuration, isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                                        >
                                            <div className="overflow-hidden">
                                                <p className={cn("px-4 pb-4 pl-[68px] text-sm leading-relaxed text-slate-600 dark:text-slate-300")}>
                                                    {node.body}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Trusted-by strip */}
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                                    Trusted by analysts, funds, and DAOs
                                </span>
                                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-8">
                                {TRUST_ICONS.map(({ icon: Icon, label }) => (
                                    <Icon
                                        key={label}
                                        aria-label={label}
                                        className="w-6 h-6 text-slate-300 dark:text-slate-700"
                                        strokeWidth={1.5}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop — orbital hub diagram */}
                    <div className="order-2 lg:order-1 hidden lg:block">
                        <p
                            className={cn(
                                "flex items-center justify-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 mb-3 transition-opacity duration-300",
                                hasInteracted ? "opacity-0" : "opacity-100"
                            )}
                        >
                            <MousePointerClick className="w-3.5 h-3.5" strokeWidth={2} />
                            Click a step to see how it works
                        </p>
                        <div
                            ref={diagramWrapRef}
                            className="relative w-full mx-auto"
                            style={{ maxWidth: CANVAS.w, aspectRatio: `${CANVAS.w} / ${CANVAS.h}` }}
                        >
                            {/* Connecting lines + hub-end glow dots */}
                            <svg
                                ref={diagramSvgRef}
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                viewBox={`0 0 ${CANVAS.w} ${CANVAS.h}`}
                            >
                                {NODES.map((node) => {
                                    const isActive = activeId === node.id;
                                    const dotX = HUB.x + (node.x - HUB.x) * 0.22;
                                    const dotY = HUB.y + (node.y - HUB.y) * 0.22;
                                    return (
                                        <g key={node.id}>
                                            <path
                                                id={`risk-path-${node.id}`}
                                                d={`M${HUB.x} ${HUB.y} L${node.x} ${node.y}`}
                                                fill="none"
                                                strokeWidth={isActive ? 2 : 1.5}
                                                className={cn("transition-all duration-300", isActive ? node.lineActive : node.line)}
                                            />
                                            <circle cx={dotX} cy={dotY} r={7} className={cn(node.dot, "opacity-20")} />
                                            <circle cx={dotX} cy={dotY} r={3.5} className={node.dot} />
                                        </g>
                                    );
                                })}

                                {/* Fast halo of dots orbiting the hub — one per node color */}
                                {!prefersReducedMotion && (
                                    <g>
                                        {NODES.map((node, i) => (
                                            <circle key={`orbit-${node.id}`} cx={HUB.x + ORBIT_RADIUS} cy={HUB.y} r={3.5} className={node.dot}>
                                                <animateTransform
                                                    attributeName="transform"
                                                    type="rotate"
                                                    from={`${i * 120} ${HUB.x} ${HUB.y}`}
                                                    to={`${i * 120 + 360} ${HUB.x} ${HUB.y}`}
                                                    dur="1.8s"
                                                    repeatCount="indefinite"
                                                />
                                            </circle>
                                        ))}
                                    </g>
                                )}

                                {/* Traveling packets — peel off the hub and follow each path in
                                    sequence (green, blue, red), chained via SMIL begin/end events
                                    so the loop runs forever without any JS timers. */}
                                {!prefersReducedMotion &&
                                    NODES.map((node, i) => {
                                        // Chain via the *animation* elements' ids (not the circle's) —
                                        // SMIL "id.end" event syncing only resolves against timed
                                        // elements, so this must point at the <animateMotion>, not its shape.
                                        const prevNode = NODES[(i + NODES.length - 1) % NODES.length];
                                        const motionId = `risk-packet-motion-${node.id}`;
                                        const prevMotionId = `risk-packet-motion-${prevNode.id}`;
                                        const beginValue = i === 0 ? `0s;${prevMotionId}.end+0.25s` : `${prevMotionId}.end+0.25s`;
                                        return (
                                            <circle key={node.id} r={5} className={node.dot} opacity={0}>
                                                <animateMotion id={motionId} dur="0.9s" begin={beginValue} fill="freeze">
                                                    <mpath href={`#risk-path-${node.id}`} />
                                                </animateMotion>
                                                <animate
                                                    attributeName="opacity"
                                                    values="0;1;1;0"
                                                    keyTimes="0;0.15;0.8;1"
                                                    dur="0.9s"
                                                    begin={beginValue}
                                                    fill="freeze"
                                                />
                                            </circle>
                                        );
                                    })}
                            </svg>

                            {/* Concentric rings behind the hub — width is a % of canvas width; aspectRatio
                                (not a matching height %) keeps them circular even though CANVAS isn't square. */}
                            <div
                                className="absolute rounded-full border border-dashed border-[#7C3AED]/25"
                                style={{ ...nodePercent(HUB), width: "44%", aspectRatio: "1 / 1", transform: "translate(-50%, -50%)" }}
                            />
                            <div
                                className="absolute rounded-full border border-[#7C3AED]/15"
                                style={{ ...nodePercent(HUB), width: "34%", aspectRatio: "1 / 1", transform: "translate(-50%, -50%)" }}
                            />
                            <div
                                className="absolute rounded-full bg-[#7C3AED]/10 blur-2xl"
                                style={{ ...nodePercent(HUB), width: "40%", aspectRatio: "1 / 1", transform: "translate(-50%, -50%)" }}
                            />

                            {/* Central shield hub */}
                            <div
                                className="absolute flex items-center justify-center rounded-full"
                                style={{
                                    ...nodePercent(HUB),
                                    width: "27%",
                                    aspectRatio: "1 / 1",
                                    transform: "translate(-50%, -50%)",
                                    background: "linear-gradient(135deg, #7C3AED 0%, #9F5CF0 100%)",
                                    boxShadow: "0 10px 30px rgba(124,58,237,0.35)",
                                }}
                            >
                                {!prefersReducedMotion && pulseKey > 0 && (
                                    <span
                                        key={pulseKey}
                                        className="absolute inset-0 rounded-full bg-[#7C3AED]/50 hub-pulse-ping"
                                        aria-hidden="true"
                                    />
                                )}
                                <Shield className="w-[38%] h-[38%] text-white relative z-10" strokeWidth={2} />
                            </div>

                            {/* Satellite nodes — description only reveals on hover/focus; a click pins it
                                open (for touch and anyone who wants it to stay). The nodes themselves stay
                                visibly clickable at all times via cursor, hover scale/glow and idle pulse. */}
                            {NODES.map((node) => {
                                const isActive = activeId === node.id;
                                const Icon = node.icon;
                                return (
                                    <button
                                        key={node.id}
                                        type="button"
                                        id={`${node.id}-trigger`}
                                        aria-expanded={isActive}
                                        aria-controls={`${node.id}-panel`}
                                        onMouseEnter={() => revealHover(node.id)}
                                        onMouseLeave={clearHover}
                                        onFocus={() => revealHover(node.id)}
                                        onBlur={clearHover}
                                        onClick={() => handleClick(node.id)}
                                        className={cn(
                                            "absolute z-10 flex items-center justify-center rounded-full cursor-pointer transition-[transform,box-shadow] duration-200 hover:scale-[1.08] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7C3AED]/50",
                                            node.iconWrap,
                                            node.glow,
                                            isActive && ["ring-4", node.ring]
                                        )}
                                        style={{
                                            ...nodePercent(node),
                                            width: "16%",
                                            aspectRatio: "1 / 1",
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    >
                                        {showIdlePulse && (
                                            <span className={cn("absolute inset-0 rounded-full node-pulse-ring", node.iconWrap)} aria-hidden="true" />
                                        )}
                                        {isActive && <span className={cn("absolute -inset-2 rounded-full", node.haloShadow)} aria-hidden="true" />}
                                        <Icon className="w-[42%] h-[42%] relative z-10" strokeWidth={2.25} />
                                    </button>
                                );
                            })}

                            {/* Extract card — upper left */}
                            <div
                                className={cn(
                                    "absolute left-0 top-0 w-[62%] transition-[opacity,transform]",
                                    expandDuration,
                                    activeId === "extract" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                                )}
                                onMouseEnter={() => revealHover("extract")}
                                onMouseLeave={clearHover}
                            >
                                <RiskCard node={NODES[0]} isActive={activeId === "extract"} />
                            </div>

                            {/* Verify card — middle right, below its node */}
                            <div
                                className={cn(
                                    "absolute right-0 transition-[opacity,transform]",
                                    expandDuration,
                                    activeId === "verify" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                                )}
                                style={{ top: "55%", width: "70%" }}
                                onMouseEnter={() => revealHover("verify")}
                                onMouseLeave={clearHover}
                            >
                                <RiskCard node={NODES[1]} isActive={activeId === "verify"} align="right" />
                            </div>

                            {/* Detect card — bottom left */}
                            <div
                                className={cn(
                                    "absolute left-0 bottom-0 w-[65%] transition-[opacity,transform]",
                                    expandDuration,
                                    activeId === "detect" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
                                )}
                                onMouseEnter={() => revealHover("detect")}
                                onMouseLeave={clearHover}
                            >
                                <RiskCard node={NODES[2]} isActive={activeId === "detect"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RiskCard({
    node,
    isActive,
    align = "left",
}: {
    node: RiskNode;
    isActive: boolean;
    align?: "left" | "right";
}) {
    return (
        <div
            id={`${node.id}-panel`}
            aria-labelledby={`${node.id}-trigger`}
            aria-hidden={!isActive}
            className={cn(
                "bg-white dark:bg-slate-900 rounded-xl border shadow-lg shadow-slate-900/5",
                node.border,
                align === "right" && "ml-auto"
            )}
        >
            <div className="flex items-center gap-2 px-4 pt-3">
                <span className={cn("w-2 h-2 rounded-full shrink-0", node.dot)} aria-hidden="true" />
                <div className="font-bold text-sm text-slate-900 dark:text-white">{node.label}</div>
            </div>
            <div className="px-4 pb-4 pt-1">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">{node.short}</p>
                <p className={cn("text-xs leading-relaxed", node.accentText)}>{node.body}</p>
            </div>
        </div>
    );
}
