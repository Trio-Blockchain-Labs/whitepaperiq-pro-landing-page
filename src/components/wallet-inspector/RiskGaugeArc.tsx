import type { RiskLevel } from "@/data/walletInspectorMock";
import { RISK_STYLES } from "./riskStyles";

interface RiskGaugeArcProps {
    score: number;
    level: RiskLevel;
}

export default function RiskGaugeArc({ score, level }: RiskGaugeArcProps) {
    const style = RISK_STYLES[level];
    const pathLength = 100;
    const dash = Math.max(0, Math.min(100, score));

    return (
        <div className="flex items-center gap-4 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shrink-0">
            <div className="relative w-[92px] h-[52px]">
                <svg viewBox="0 0 120 68" className="w-full h-full">
                    <path
                        d="M10,62 A50,50 0 0 1 110,62"
                        fill="none"
                        stroke="currentColor"
                        className="text-slate-100 dark:text-slate-700"
                        strokeWidth="10"
                        strokeLinecap="round"
                        pathLength={pathLength}
                    />
                    <path
                        d="M10,62 A50,50 0 0 1 110,62"
                        fill="none"
                        stroke={style.stroke}
                        strokeWidth="10"
                        strokeLinecap="round"
                        pathLength={pathLength}
                        strokeDasharray={`${dash} ${pathLength}`}
                        style={{ transition: "stroke-dasharray 500ms ease" }}
                    />
                </svg>
                <div className="absolute inset-x-0 bottom-0 text-center font-mono text-lg font-bold text-slate-900 dark:text-white">
                    {score}
                </div>
            </div>
            <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">AML Score</span>
                <span className="text-[11px] text-slate-400">out of 100</span>
            </div>
        </div>
    );
}
