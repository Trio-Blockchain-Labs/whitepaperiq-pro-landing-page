interface BalanceDonutProps {
    /** 0-100 */
    percent: number;
    symbol: string;
}

export default function BalanceDonut({ percent, symbol }: BalanceDonutProps) {
    const r = 44;
    const circumference = 2 * Math.PI * r;
    const filled = (Math.min(100, Math.max(0, percent)) / 100) * circumference;

    return (
        <div className="relative w-[132px] h-[132px] mx-auto shrink-0">
            <svg viewBox="0 0 108 108" className="w-full h-full -rotate-90">
                <circle cx="54" cy="54" r={r} fill="none" stroke="currentColor" className="text-slate-100 dark:text-slate-700" strokeWidth="14" />
                <circle
                    cx="54"
                    cy="54"
                    r={r}
                    fill="none"
                    stroke="#8c25f4"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={`${filled} ${circumference}`}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono text-base font-bold text-slate-900 dark:text-white">{percent.toFixed(percent < 1 ? 3 : 1)}%</span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide mt-0.5">{symbol}</span>
            </div>
        </div>
    );
}
