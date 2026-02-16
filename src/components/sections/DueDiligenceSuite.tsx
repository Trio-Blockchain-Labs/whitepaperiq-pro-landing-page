export default function DueDiligenceSuite() {
    return (
        <section id="due-diligence" className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Comprehensive Due Diligence Suite
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400">
                        Everything you need to vet a crypto asset, consolidated into a single institutional dashboard.
                    </p>
                </div>

                {/* 4-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* ── 1. Top Holders ── */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group">
                        <div className="w-10 h-10 bg-purple-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                            <span className="material-symbols-outlined text-2xl">group_work</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Top Holders</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                            Analyze wallet clusters and uncover hidden connections between top holders to detect centralization risks.
                        </p>
                        <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-100 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                                </span>
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Cluster Detected</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-red-500 to-red-400 w-[65%] rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                            </div>
                        </div>
                    </div>

                    {/* ── 2. Exchange Tracking ── */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                            <span className="material-symbols-outlined text-2xl">bar_chart</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Exchange Tracking</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                            Real-time volume analysis across CEXs and DEXs. Identify wash trading patterns instantly.
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-700 p-2 text-center">
                                <div className="text-[10px] text-slate-400 uppercase mb-1">Binance</div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white">45%</div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-700 p-2 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-red-50 dark:bg-red-900/10 opacity-50" />
                                <div className="text-[10px] text-red-500 uppercase mb-1 relative z-10">Wash</div>
                                <div className="text-sm font-bold text-red-600 relative z-10">12%</div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-700 p-2 text-center">
                                <div className="text-[10px] text-slate-400 uppercase mb-1">Other</div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white">43%</div>
                            </div>
                        </div>
                    </div>

                    {/* ── 3. Institutional Holdings ── */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group">
                        <div className="w-10 h-10 bg-emerald-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                            <span className="material-symbols-outlined text-2xl">assured_workload</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Institutional Holdings</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                            Track smart money from corporate treasuries and government seized assets for high-trust signals.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons text-slate-400 text-sm">business</span>
                                    <span className="text-slate-600 dark:text-slate-300 font-medium">MicroStrategy</span>
                                </div>
                                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">190K BTC</span>
                            </div>
                            <div className="flex items-center justify-between text-xs p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons text-slate-400 text-sm">flag</span>
                                    <span className="text-slate-600 dark:text-slate-300 font-medium">US Govt</span>
                                </div>
                                <span className="font-mono font-bold text-slate-600 dark:text-slate-400">207K BTC</span>
                            </div>
                        </div>
                    </div>

                    {/* ── 4. Social & Dev Metrics ── */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group">
                        <div className="w-10 h-10 bg-cyan-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-cyan-500">
                            <span className="material-symbols-outlined text-2xl">hub</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Social &amp; Dev Metrics</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                            Correlate GitHub commit frequency with Twitter sentiment to gauge real development activity.
                        </p>
                        <div>
                            <div className="text-[10px] text-slate-400 uppercase mb-2 font-bold tracking-wider">GitHub Activity</div>
                            <div className="flex gap-1 items-end h-8">
                                {[
                                    { bg: "bg-cyan-200 dark:bg-cyan-900/50", h: "40%" },
                                    { bg: "bg-cyan-300 dark:bg-cyan-800/50", h: "70%" },
                                    { bg: "bg-cyan-400 dark:bg-cyan-700/50", h: "50%" },
                                    { bg: "bg-cyan-500 dark:bg-cyan-600/50", h: "90%" },
                                    { bg: "bg-cyan-600 dark:bg-cyan-500/50", h: "60%" },
                                    { bg: "bg-cyan-300 dark:bg-cyan-800/50", h: "45%" },
                                    { bg: "bg-cyan-400 dark:bg-cyan-700/50", h: "80%" },
                                    { bg: "bg-cyan-500 dark:bg-cyan-600/50", h: "30%" },
                                    { bg: "bg-cyan-200 dark:bg-cyan-900/50", h: "65%" },
                                    { bg: "bg-cyan-600 dark:bg-cyan-500/50", h: "85%" },
                                    { bg: "bg-cyan-400 dark:bg-cyan-700/50", h: "55%" },
                                    { bg: "bg-cyan-300 dark:bg-cyan-800/50", h: "40%" },
                                ].map((bar, i) => (
                                    <div
                                        key={i}
                                        className={`w-1/12 ${bar.bg} rounded-sm hover:bg-cyan-400 transition-colors`}
                                        style={{ height: bar.h }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── 5. Smart Money Flows ── */}
                    <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 bg-indigo-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-indigo-500">
                                <span className="material-symbols-outlined text-2xl">waves</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Smart Money Flows</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                Follow the whales. Visualize inflow/outflow from known "smart money" wallet addresses.
                            </p>
                        </div>
                        <div className="bg-indigo-50/50 dark:bg-slate-900/50 rounded-lg p-3 border border-indigo-100/50 dark:border-slate-700 relative h-16 overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 opacity-30">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                                    <path d="M0,20 Q25,35 50,20 T100,20" fill="none" stroke="#6366f1" strokeWidth="2" />
                                    <path d="M0,25 Q25,40 50,25 T100,25" fill="none" stroke="#818cf8" strokeWidth="2" style={{ opacity: 0.6 }} />
                                </svg>
                            </div>
                            <div className="relative z-10 flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold text-sm bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded backdrop-blur-sm shadow-sm">
                                <span className="material-icons text-xs">arrow_upward</span>
                                <span>+$12.4M Net Flow</span>
                            </div>
                        </div>
                    </div>

                    {/* ── 6. Treasury Runway ── */}
                    <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 bg-orange-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-orange-500">
                                <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Treasury Runway</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                Assess project longevity based on current treasury assets and burn rate calculations.
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <div className="relative w-16 h-16">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        className="text-slate-100 dark:text-slate-700"
                                        cx="32" cy="32" r="28"
                                        fill="none" stroke="currentColor" strokeWidth="6"
                                    />
                                    <circle
                                        className="text-orange-500"
                                        cx="32" cy="32" r="28"
                                        fill="none" stroke="currentColor" strokeWidth="6"
                                        strokeDasharray="175.9" strokeDashoffset="44"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">18 Mo</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Runway Remaining</div>
                            </div>
                        </div>
                    </div>

                    {/* ── 7. Proof of Reserves ── */}
                    <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="w-10 h-10 bg-teal-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-teal-500">
                                    <span className="material-symbols-outlined text-2xl">verified_user</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Proof of Reserves</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed max-w-sm">
                                    On-chain verification of asset backing and solvency ratios.
                                </p>
                            </div>
                        </div>
                        <div className="bg-teal-50/50 dark:bg-slate-900/50 rounded-lg p-3 border border-teal-100/50 dark:border-slate-700 mt-2">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Collateral Ratio</span>
                                <span className="text-xs font-bold text-teal-600 dark:text-teal-400">112%</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                                <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: "100%" }} />
                            </div>
                            <div className="mt-2 text-[10px] text-slate-400 text-center">Last audited: 2h ago</div>
                        </div>
                    </div>

                    {/* ── 8. Price History Insights ── */}
                    <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="w-10 h-10 bg-pink-50 dark:bg-slate-700 rounded-lg flex items-center justify-center text-pink-500">
                                <span className="material-symbols-outlined text-2xl">ssid_chart</span>
                            </div>
                            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-lg px-2.5  pb-0 text-center shadow-sm w-auto min-w-[120px]">
                                <div className="text-[9px] text-slate-400 uppercase tracking-wide mb-0.5">Volatility Index</div>
                                <div className="text-base font-bold text-slate-900 dark:text-white flex items-baseline justify-center gap-1">
                                    42.5 <span className="text-[10px] font-normal text-red-500">High</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                            Price History Insights
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                            Deep analysis of historical volatility and drawdown periods correlated with major market events.
                        </p>
                        <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-lg h-24 relative overflow-hidden border border-slate-100 dark:border-slate-700 mt-4">
                            <div className="absolute top-2 right-2 flex gap-2 text-[10px] text-slate-400 font-medium">
                                <span>30D Trend</span>
                            </div>
                            <svg className="absolute bottom-0 left-0 right-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 60">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,60 L0,45 L30,42 L60,55 L90,25 L120,28 L150,15 L180,35 L210,32 L240,48 L270,20 L300,50 L300,60 Z"
                                    fill="url(#chartGradient)"
                                />
                                <path
                                    d="M0,45 L30,42 L60,55 L90,25 L120,28 L150,15 L180,35 L210,32 L240,48 L270,20 L300,50"
                                    fill="none" stroke="#ec4899" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
