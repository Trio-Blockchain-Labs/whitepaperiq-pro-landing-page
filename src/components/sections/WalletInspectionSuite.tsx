import TiltCard from "@/components/ui/TiltCard";

export default function WalletInspectionSuite() {
    return (
        <section id="wallet-inspection" className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0 w-full">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        What Every Wallet Inspection Report Reveals
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400">
                        From AML exposure to fund-flow mapping — the same institutional-grade breakdown behind
                        every Wallet Inspector report, distilled into one dashboard.
                    </p>
                </div>

                {/* 4-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* ── 1. AML Risk Score ── */}
                    <TiltCard>
                        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-shadow duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 bg-rose-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
                                    <span className="material-symbols-outlined text-2xl">gpp_maybe</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">AML Risk Score</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    Every wallet gets a 0–100 AML score, flagging indirect ties to financial crime, theft or gambling networks.
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
                                            className="text-rose-500"
                                            cx="32" cy="32" r="28"
                                            fill="none" stroke="currentColor" strokeWidth="6"
                                            strokeDasharray="175.9" strokeDashoffset="137"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">
                                        22
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Medium Risk</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">22 / 100 score</div>
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                    {/* ── 2. Portfolio Breakdown ── */}
                    <TiltCard>
                        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-shadow duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 bg-violet-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-violet-600 dark:text-violet-400">
                                    <span className="material-symbols-outlined text-2xl">pie_chart</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Portfolio Breakdown</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    See exactly what a wallet holds today — token mix, top asset weighting and total USD value at a glance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-violet-500" />
                                        <span className="text-slate-600 dark:text-slate-300 font-medium">ETH</span>
                                    </div>
                                    <span className="font-mono font-bold text-slate-900 dark:text-white">99.996%</span>
                                </div>
                                <div className="flex items-center justify-between text-xs p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-violet-200 dark:bg-violet-300/40" />
                                        <span className="text-slate-600 dark:text-slate-300 font-medium">ZIK</span>
                                    </div>
                                    <span className="font-mono font-bold text-slate-500 dark:text-slate-400">0.004%</span>
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                    {/* ── 3. Transaction Volume ── */}
                    <TiltCard>
                        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-shadow duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 bg-sky-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-sky-600 dark:text-sky-400">
                                    <span className="material-symbols-outlined text-2xl">swap_horiz</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Transaction Volume</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    Full inbound / outbound history, sized and directioned, to reveal whether a wallet accumulates or distributes funds.
                                </p>
                            </div>
                            <div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-700 p-2 text-center">
                                        <div className="text-[10px] text-emerald-500 uppercase mb-1">Inbound</div>
                                        <div className="text-sm font-bold text-slate-900 dark:text-white">47</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-700 p-2 text-center">
                                        <div className="text-[10px] text-sky-500 uppercase mb-1">Outbound</div>
                                        <div className="text-sm font-bold text-slate-900 dark:text-white">53</div>
                                    </div>
                                </div>
                                <div className="mt-2 text-[10px] text-slate-400 text-center">100 transfers analyzed</div>
                            </div>
                        </div>
                    </TiltCard>

                    {/* ── 4. Counterparty Network ── */}
                    <TiltCard>
                        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-shadow duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 bg-amber-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                                    <span className="material-symbols-outlined text-2xl">share</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Counterparty Network</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                                    Rank every address a wallet has touched by volume, spotting concentration risk before it becomes a problem.
                                </p>
                            </div>
                            <div className="bg-amber-50/50 dark:bg-slate-900/50 rounded-lg p-3 border border-amber-100/50 dark:border-slate-700 mt-2">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Top Counterparty Share</span>
                                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">39.6%</span>
                                </div>
                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: "39.6%" }} />
                                </div>
                                <div className="mt-2 text-[10px] text-slate-400 text-center">100 counterparties · $64.5K volume</div>
                            </div>
                        </div>
                    </TiltCard>

                    {/* ── 5. Wallet Relationships ── */}
                    <TiltCard>
                        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-shadow duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 bg-indigo-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                                    <span className="material-symbols-outlined text-2xl">link</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Wallet Relationships</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    Trace the very first funding transaction to uncover shared ownership or operational links between wallets.
                                </p>
                            </div>
                            <div className="flex items-center justify-between text-xs p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons text-indigo-400 text-sm">north_east</span>
                                    <span className="text-slate-600 dark:text-slate-300 font-medium">quasarbuilder.eth</span>
                                </div>
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                                    First Funder
                                </span>
                            </div>
                        </div>
                    </TiltCard>

                    {/* ── 6. Risk Factors ── */}
                    <TiltCard>
                        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-shadow duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 bg-teal-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400">
                                    <span className="material-symbols-outlined text-2xl">rule</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Risk Factors</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    Every report weighs primary concerns against mitigating factors, so a single flag never tells the whole story.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs p-2 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500" />
                                        <span className="text-slate-600 dark:text-slate-300 font-medium">Primary Concerns</span>
                                    </div>
                                    <span className="font-mono font-bold text-slate-900 dark:text-white">4</span>
                                </div>
                                <div className="flex items-center justify-between text-xs p-2 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-teal-500" />
                                        <span className="text-slate-600 dark:text-slate-300 font-medium">Mitigating Factors</span>
                                    </div>
                                    <span className="font-mono font-bold text-slate-900 dark:text-white">4</span>
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                    {/* ── 7. AI Insights ── */}
                    <TiltCard>
                        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-shadow duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 bg-fuchsia-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-fuchsia-600 dark:text-fuchsia-400">
                                    <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">AI Insights</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    A plain-language summary distills every score, chart and flag into the one paragraph an analyst reads first.
                                </p>
                            </div>
                            <div className="bg-fuchsia-50/30 dark:bg-slate-900/50 rounded-lg p-3 border border-fuchsia-100/50 dark:border-slate-700">
                                <div className="space-y-2">
                                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full" />
                                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-5/6" />
                                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-4/6" />
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                    {/* ── 8. Related Wallets ── */}
                    <TiltCard>
                        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300/70 transition-shadow duration-300 group flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 bg-cyan-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 text-cyan-600 dark:text-cyan-400">
                                    <span className="material-symbols-outlined text-2xl">account_tree</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Related Wallets</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    Surface sibling addresses sharing a funding source or operational pattern with the wallet under review.
                                </p>
                            </div>
                            <div className="flex items-center justify-between text-xs p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons text-cyan-400 text-sm">device_hub</span>
                                    <span className="text-slate-600 dark:text-slate-300 font-medium">1 related wallet</span>
                                </div>
                                <span className="text-[10px] text-slate-400">via funding trace</span>
                            </div>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
