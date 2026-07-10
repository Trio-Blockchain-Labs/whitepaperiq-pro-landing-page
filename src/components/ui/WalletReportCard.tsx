export interface WalletFlag {
    label: string;
    severity: "high" | "medium" | "low";
}

export interface WalletReportCardProps {
    /** "full" = large marketing mockup, "compact" = condensed preview for embedded tools */
    variant?: "full" | "compact";
    address?: string;
    riskScore?: number;
    riskLabel?: string;
    flags?: WalletFlag[];
    /**
     * Optional real report screenshot. When provided it renders above the mockup data
     * so a real screenshot can accompany (or later replace) the generated preview.
     */
    imageSrc?: string;
    onViewFullReport?: () => void;
    className?: string;
}

const DEFAULT_FLAGS: WalletFlag[] = [
    { label: "Mixer exposure", severity: "high" },
    { label: "Sanctions proximity", severity: "high" },
    { label: "High-velocity transfers", severity: "medium" },
];

const SEVERITY_STYLES: Record<WalletFlag["severity"], string> = {
    high: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400",
    medium: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400",
    low: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400",
};

const SEVERITY_ICON: Record<WalletFlag["severity"], string> = {
    high: "error",
    medium: "warning",
    low: "check_circle",
};

function riskColor(score: number) {
    if (score >= 70) return { ring: "#ef4444", text: "text-red-600 dark:text-red-400", label: "High Risk" };
    if (score >= 40) return { ring: "#f59e0b", text: "text-amber-600 dark:text-amber-400", label: "Medium Risk" };
    return { ring: "#10b981", text: "text-emerald-600 dark:text-emerald-400", label: "Low Risk" };
}

function RiskGauge({ score, size, textClass }: { score: number; size: number; textClass: string }) {
    const radius = size / 2 - 6;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;
    const { ring } = riskColor(score);

    return (
        <div className="relative shrink-0" style={{ width: size, height: size }}>
            <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-slate-100 dark:text-slate-700"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={ring}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 0.6s ease" }}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`font-bold ${textClass}`} style={{ fontSize: size * 0.28 }}>
                    {score}
                </span>
            </div>
        </div>
    );
}

export default function WalletReportCard({
    variant = "full",
    address = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    riskScore = 78,
    riskLabel,
    flags = DEFAULT_FLAGS,
    imageSrc,
    onViewFullReport,
    className = "",
}: WalletReportCardProps) {
    const { text, label } = riskColor(riskScore);
    const resolvedLabel = riskLabel ?? label;
    const truncated = `${address.slice(0, 6)}...${address.slice(-4)}`;
    const isCompact = variant === "compact";

    if (imageSrc) {
        return (
            <div className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 overflow-hidden ${className}`}>
                <img src={imageSrc} alt="Wallet intelligence report" className="w-full h-auto object-contain" />
            </div>
        );
    }

    return (
        <div
            className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 ${isCompact ? "p-4" : "p-6"} ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="w-8 h-8 rounded-lg bg-[#8c25f4]/10 flex items-center justify-center text-[#8c25f4] shrink-0">
                        <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                    </span>
                    <div className="min-w-0">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Wallet Intelligence</div>
                        <div className="text-xs font-mono text-slate-700 dark:text-slate-300 truncate">{truncated}</div>
                    </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-900 dark:bg-white text-white dark:text-slate-900 shrink-0">
                    Live
                </span>
            </div>

            {/* Gauge + summary */}
            <div className="flex items-center gap-4 mb-4">
                <RiskGauge score={riskScore} size={isCompact ? 56 : 76} textClass={text} />
                <div>
                    <div className={`font-bold ${isCompact ? "text-sm" : "text-base"} ${text}`}>{resolvedLabel}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Risk score out of 100</div>
                </div>
            </div>

            {/* Flags */}
            <div className={`space-y-2 ${isCompact ? "mb-3" : "mb-5"}`}>
                {(isCompact ? flags.slice(0, 2) : flags).map((flag) => (
                    <div
                        key={flag.label}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium ${SEVERITY_STYLES[flag.severity]}`}
                    >
                        <span className="material-icons text-sm">{SEVERITY_ICON[flag.severity]}</span>
                        {flag.label}
                    </div>
                ))}
            </div>

            {/* CTA */}
            <button
                type="button"
                onClick={onViewFullReport}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all ${isCompact ? "text-xs py-2" : "text-sm py-3"}`}
            >
                View full report
                <span className="material-icons text-sm">arrow_forward</span>
            </button>
        </div>
    );
}
