const IQBOT_STEPS = [
    { icon: "upload_file", title: "Submit", desc: "Submit a whitepaper or a token address" },
    { icon: "neurology", title: "Analyze", desc: "IQBot runs multi-layer AI analysis" },
    { icon: "fact_check", title: "Receive", desc: "Get a scored due-diligence report" },
];

const AML_STEPS = [
    { icon: "database", title: "Data Ingestion", desc: "On-chain + off-chain sources indexed in real time" },
    { icon: "filter_alt", title: "Pattern Screening", desc: "Heuristic & ML models flag suspicious behavior" },
    { icon: "report", title: "Risk Flagging", desc: "Entities scored and tagged by risk category" },
    { icon: "gavel", title: "Compliance Report", desc: "Audit-ready output for your compliance team" },
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
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-background-dark relative overflow-hidden">
            <div className="absolute inset-0 grid-bg pointer-events-none" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#8c25f4]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <LiveBadge />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Now Shipping: <br />
                        <span className="gradient-text">IQ Bot &amp; AML Detection</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                        No more waitlists. Both modules are live in production, running institutional-grade
                        analysis on every query.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* ── IQ Bot AI — LIVE ── */}
                    <div className="feature-card-glass rounded-2xl p-8 flex flex-col h-full">
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
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {IQBOT_STEPS.map((step, i) => (
                                <div key={step.title} className="relative">
                                    <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-100 dark:border-slate-800 shadow-sm h-full">
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

                        {/* Terminal-style chat */}
                        <div className="mt-auto bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-inner">
                            <div className="flex items-center gap-2 mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                                <span className="text-xs font-mono text-slate-400">IQ_Bot_v1.2.exe</span>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
                                    <div className="flex gap-2">
                                        <span className="material-icons text-[#8c25f4] text-xs mt-0.5">chat_bubble</span>
                                        <div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">User Query</div>
                                            <div className="text-xs text-slate-700 dark:text-slate-300">
                                                "Find wash trading patterns for Token X"
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#8c25f4]/5 dark:bg-[#8c25f4]/10 p-3 rounded-lg border border-[#8c25f4]/10">
                                    <div className="flex gap-2">
                                        <span className="material-icons text-[#8c25f4] text-xs mt-0.5">smart_toy</span>
                                        <div>
                                            <div className="text-[10px] text-[#8c25f4] font-bold uppercase mb-1">AI Response</div>
                                            <div className="text-xs text-slate-700 dark:text-slate-300">
                                                Analyzing 14,203 txns... Found 3 clusters with circular volume loops.{" "}
                                                <span className="underline decoration-dotted cursor-pointer hover:text-[#8c25f4]">View Graph</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── AML & Criminal Detection — LIVE ── */}
                    <div className="feature-card-glass rounded-2xl p-8 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                                <span className="material-icons text-sm">gavel</span>
                                Regulatory Grade
                            </div>
                            <LiveBadge />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">AML &amp; Criminal Detection</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                            Visualize illicit fund flows with our proprietary entity linking graph. Detect mixers,
                            sanctions evasion, and dark web associations instantly.
                        </p>

                        {/* Detection pipeline */}
                        <div className="space-y-2 mb-6">
                            {AML_STEPS.map((step, i) => (
                                <div key={step.title} className="flex items-center gap-3 bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold flex items-center justify-center shrink-0">
                                        {i + 1}
                                    </div>
                                    <span className="material-symbols-outlined text-base text-red-500 shrink-0">{step.icon}</span>
                                    <div className="min-w-0">
                                        <div className="text-xs font-bold text-slate-900 dark:text-white">{step.title}</div>
                                        <div className="text-[10px] text-slate-400 leading-snug truncate">{step.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dark graph visualization */}
                        <div className="mt-auto relative bg-slate-900 rounded-xl overflow-hidden h-48 border border-slate-700 shadow-inner group cursor-pointer">
                            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                            <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 250">
                                <defs>
                                    <filter id="glow2">
                                        <feGaussianBlur result="coloredBlur" stdDeviation="2.5" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <line x1="200" y1="125" x2="100" y2="80" stroke="#475569" strokeWidth="1" />
                                <line x1="200" y1="125" x2="300" y2="80" stroke="#ef4444" strokeWidth="2" className="node-connector" />
                                <line x1="200" y1="125" x2="150" y2="180" stroke="#475569" strokeWidth="1" />
                                <line x1="300" y1="80" x2="350" y2="50" stroke="#ef4444" strokeWidth="1" strokeDasharray="2" />

                                <circle cx="200" cy="125" r="20" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
                                <text x="200" y="129" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">Subject</text>

                                <circle cx="100" cy="80" r="12" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
                                <circle cx="150" cy="180" r="10" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />

                                <circle cx="300" cy="80" r="18" fill="#450a0a" stroke="#ef4444" strokeWidth="2" filter="url(#glow2)" />
                                <text x="300" y="84" textAnchor="middle" fill="#fca5a5" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Sanctioned</text>
                            </svg>

                            <div className="absolute bottom-3 left-3 bg-slate-800/90 backdrop-blur px-3 py-1.5 rounded-lg border border-red-500/30 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[10px] text-red-200 font-mono">ALERT: OFAC LINK DETECTED</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── PoR Engine — also live ── */}
                <div className="feature-card-glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex items-center gap-4 flex-1 w-full">
                        <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                            <span className="material-symbols-outlined text-2xl">verified_user</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">PoR Engine</h3>
                                <span className="bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 border border-teal-200 dark:border-teal-700/50">
                                    <span className="material-icons text-[10px]">check_circle</span> AUDIT-READY
                                </span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Real-time Proof of Reserves connecting directly to exchange cold wallets.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm w-full sm:w-64 shrink-0">
                        <div className="flex justify-between items-end mb-2">
                            <div className="text-xs text-slate-500 dark:text-slate-400">Solvency Ratio</div>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">104.2%</div>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div className="bg-gradient-to-r from-teal-500 to-emerald-400 h-2 rounded-full" style={{ width: "85%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
