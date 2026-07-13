import IQBotWidget from "@/components/ui/IQBotWidget";

const IQBOT_STEPS = [
    { icon: "upload_file", title: "Submit", desc: "Submit a whitepaper or a token address" },
    { icon: "neurology", title: "Analyze", desc: "IQBot runs multi-layer AI analysis" },
    { icon: "fact_check", title: "Receive", desc: "Get a scored due-diligence report" },
];

function LiveBadge() {
    return (
        <div className="inline-flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-700/50">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            LIVE
        </div>
    );
}

export default function LiveFeatures() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-background-dark relative overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="absolute inset-0 grid-bg pointer-events-none" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#8c25f4]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-w-0 w-full">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <LiveBadge />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Now Shipping: <br />
                        <span className="gradient-text">IQ Bot</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                        No more waitlists. IQ Bot is live in production, running institutional-grade
                        analysis on every query.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    {/* ── IQ Bot AI — copy ── */}
                    <div className="max-w-md mx-auto lg:mx-0">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full orb-icon flex items-center justify-center">
                                    <span className="material-symbols-outlined text-2xl text-white">smart_toy</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">IQ Bot AI</h3>
                            </div>
                            <LiveBadge />
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed">
                            Natural language queries for complex on-chain data. Ask "Show me all wallets that bought &gt;$1M
                            in the last hour" and get instant results.
                        </p>

                        {/* 3-step how it works */}
                        <div className="grid grid-cols-3 gap-3">
                            {IQBOT_STEPS.map((step, i) => (
                                <div key={step.title} className="relative">
                                    <div className="feature-card-glass rounded-xl p-3 h-full">
                                        <div className="w-6 h-6 rounded-full bg-[#8c25f4] text-white text-[11px] font-bold flex items-center justify-center mb-2">
                                            {i + 1}
                                        </div>
                                        <span className="material-symbols-outlined text-lg text-[#8c25f4] mb-1 block">{step.icon}</span>
                                        <div className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">{step.title}</div>
                                        <div className="text-[10px] text-slate-400 leading-snug">{step.desc}</div>
                                    </div>
                                    {i < IQBOT_STEPS.length - 1 && (
                                        <span className="material-icons text-slate-300 dark:text-slate-700 text-sm absolute top-1/2 -right-2.5 -translate-y-1/2 hidden sm:block">
                                            chevron_right
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── IQ Bot AI — live embedded widget ── */}
                    <IQBotWidget />
                </div>
            </div>
        </section>
    );
}
