import { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { COUNTERPARTY_PALETTE, type Counterparty } from "@/data/walletInspectorMock";

function shortAddr(a: string) {
    return `${a.slice(0, 6)}…${a.slice(-4)}`;
}

function fmtUsd(n: number) {
    return `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

interface CounterpartyFanoutProps {
    sourceAddress: string;
    data: Counterparty[];
}

export default function CounterpartyFanout({ sourceAddress, data }: CounterpartyFanoutProps) {
    const [hovered, setHovered] = useState<{ index: number; x: number; y: number } | null>(null);
    const holderRef = useRef<HTMLDivElement>(null);

    // Bars/links live in a fixed-coordinate SVG (left column); labels render as normal
    // HTML text in a separate column so typography never gets distorted by SVG scaling.
    const barsSvgW = 300;
    const barX = 120;
    const barW = 170;
    const sourceX = 16;
    const minBarH = 9;
    const maxBarH = 30;
    const barGap = 6;

    const maxVol = data[0]?.totalVolumeUsd ?? 1;
    const minVol = data[data.length - 1]?.totalVolumeUsd ?? 1;
    const scaleHeight = (v: number) => {
        if (maxVol === minVol) return (minBarH + maxBarH) / 2;
        const t = (Math.sqrt(v) - Math.sqrt(minVol)) / (Math.sqrt(maxVol) - Math.sqrt(minVol));
        return minBarH + t * (maxBarH - minBarH);
    };

    const heights = data.map((c) => scaleHeight(c.totalVolumeUsd));
    const totalHeight = heights.reduce((a, h) => a + h + barGap, 0) + barGap;
    const ys: number[] = [];
    let cursor = barGap;
    heights.forEach((h) => {
        ys.push(cursor + h / 2);
        cursor += h + barGap;
    });
    const sourceY = totalHeight / 2;

    const handleMove = (index: number) => (e: ReactMouseEvent) => {
        const box = holderRef.current?.getBoundingClientRect();
        if (!box) return;
        setHovered({ index, x: e.clientX - box.left + 14, y: e.clientY - box.top - 10 });
    };

    return (
        <div ref={holderRef} className="relative flex gap-2" style={{ height: totalHeight }}>
            <svg viewBox={`0 0 ${barsSvgW} ${totalHeight}`} width={barsSvgW} height={totalHeight} className="shrink-0">
                {data.map((c, i) => {
                    const y = ys[i];
                    const midX = (sourceX + barX) / 2;
                    const d = `M ${sourceX} ${sourceY} C ${midX} ${sourceY}, ${midX} ${y}, ${barX} ${y}`;
                    return (
                        <path
                            key={`link-${c.address}`}
                            d={d}
                            fill="none"
                            stroke={COUNTERPARTY_PALETTE[i % COUNTERPARTY_PALETTE.length]}
                            strokeWidth={1.5}
                            opacity={0.5}
                        />
                    );
                })}

                <text x={sourceX} y={sourceY - 10} className="fill-slate-900 dark:fill-white" fontSize="11" fontWeight={700}>
                    {shortAddr(sourceAddress)}
                </text>
                <circle cx={sourceX} cy={sourceY} r={4} fill="#8c25f4" />

                {data.map((c, i) => {
                    const h = heights[i];
                    const y = ys[i] - h / 2;
                    return (
                        <rect
                            key={`bar-${c.address}`}
                            x={barX}
                            y={y}
                            width={barW}
                            height={h}
                            rx={Math.min(6, h / 2)}
                            fill={COUNTERPARTY_PALETTE[i % COUNTERPARTY_PALETTE.length]}
                            className="cursor-pointer transition-[filter] hover:brightness-110"
                            onMouseMove={handleMove(i)}
                            onMouseLeave={() => setHovered(null)}
                        />
                    );
                })}
            </svg>

            <div className="relative flex-1 min-w-0">
                {data.map((c, i) => (
                    <a
                        key={`label-${c.address}`}
                        href={c.explorerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute left-0 right-0 -translate-y-1/2 truncate text-[11px] font-mono text-slate-500 dark:text-slate-400 hover:text-[#8c25f4] hover:underline"
                        style={{ top: ys[i] }}
                    >
                        {shortAddr(c.address)}
                        {c.labels.length ? `  ·  ${c.labels[0]}` : ""}
                    </a>
                ))}
            </div>

            {hovered && (
                <div
                    className="absolute pointer-events-none bg-slate-900 text-white text-[11px] leading-relaxed rounded-md px-2.5 py-1.5 shadow-lg whitespace-nowrap z-10"
                    style={{ left: hovered.x, top: hovered.y }}
                >
                    <b className="font-mono">{shortAddr(data[hovered.index].address)}</b>
                    {data[hovered.index].labels.length ? ` · ${data[hovered.index].labels.join(", ")}` : ""}
                    <br />
                    Volume: <b>{fmtUsd(data[hovered.index].totalVolumeUsd)}</b> · Interactions: <b>{data[hovered.index].interactionCount}</b>
                </div>
            )}
        </div>
    );
}
