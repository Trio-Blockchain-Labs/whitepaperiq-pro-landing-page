export default function InstitutionalFeatures() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-background-dark relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 grid-bg pointer-events-none" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#8c25f4]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        The Next Frontier of <br />
                        <span className="gradient-text">Institutional Intelligence</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                        Advanced modules designed for high-frequency trading desks and regulatory bodies.
                    </p>
                </div>

                {/* 3-column staggered grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* ── IQ Bot AI ── */}
                    <div className="feature-card-glass rounded-2xl p-8 transform transition-all hover:scale-[1.02] flex flex-col h-full lg:mt-8">
                        {/* Orb icon */}
                        <div className="mb-8 relative flex justify-center">
                            <div className="w-20 h-20 rounded-full orb-icon flex items-center justify-center relative animate-pulse">
                                <span className="material-symbols-outlined text-4xl text-white">smart_toy</span>
                            </div>
                            <div className="absolute -bottom-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                                BETA ACCESS
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 text-center">IQ Bot AI</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-center mb-8 text-sm leading-relaxed">
                            Natural language queries for complex on-chain data. Ask "Show me all wallets that bought &gt;$1M
                            in the last hour" and get instant results.
                        </p>

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

                    {/* ── AML & Criminal Detection (elevated center card) ── */}
                    <div className="feature-card-glass rounded-2xl p-8 transform transition-all hover:scale-[1.02] flex flex-col h-full lg:-mt-8 shadow-2xl shadow-[#8c25f4]/10 z-10 border-[#8c25f4]/20">
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="material-icons text-sm">gavel</span>
                                Regulatory Grade
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">AML &amp; Criminal Detection</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                Visualize illicit fund flows with our proprietary entity linking graph. Detect mixers,
                                sanctions evasion, and dark web associations instantly.
                            </p>
                        </div>

                        {/* Dark graph visualization */}
                        <div className="mt-auto relative bg-slate-900 rounded-xl overflow-hidden h-64 border border-slate-700 shadow-inner group cursor-pointer">
                            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                            <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 250">
                                <defs>
                                    <filter id="glow">
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

                                {/* Subject node */}
                                <circle cx="200" cy="125" r="20" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
                                <text x="200" y="129" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">Subject</text>

                                {/* Clean nodes */}
                                <circle cx="100" cy="80" r="12" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
                                <circle cx="150" cy="180" r="10" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />

                                {/* Sanctioned node with glow */}
                                <circle cx="300" cy="80" r="18" fill="#450a0a" stroke="#ef4444" strokeWidth="2" filter="url(#glow)" />
                                <text x="300" y="84" textAnchor="middle" fill="#fca5a5" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Sanctioned</text>
                            </svg>

                            {/* Alert overlay */}
                            <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur px-3 py-1.5 rounded-lg border border-red-500/30 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[10px] text-red-200 font-mono">ALERT: OFAC LINK DETECTED</span>
                            </div>
                        </div>
                    </div>

                    {/* ── PoR Engine ── */}
                    <div className="feature-card-glass rounded-2xl p-8 transform transition-all hover:scale-[1.02] flex flex-col h-full lg:mt-8">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400">
                                <span className="material-symbols-outlined text-2xl">verified_user</span>
                            </div>
                            <div className="bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 border border-teal-200 dark:border-teal-700/50">
                                <span className="material-icons text-[10px]">check_circle</span> AUDIT-READY
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">PoR Engine</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                            Real-time Proof of Reserves (PoR) engine that connects directly to exchange cold wallets.
                            Generate solvency certificates on demand.
                        </p>

                        {/* Solvency widget */}
                        <div className="mt-auto bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="flex justify-between items-end mb-2">
                                <div className="text-xs text-slate-500 dark:text-slate-400">Solvency Ratio</div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">104.2%</div>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-4 overflow-hidden">
                                <div className="bg-gradient-to-r from-teal-500 to-emerald-400 h-2 rounded-full" style={{ width: "85%" }} />
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-center">
                                <div className="bg-slate-50 dark:bg-slate-800 rounded p-2 border border-slate-100 dark:border-slate-700/50">
                                    <div className="text-[10px] text-slate-400 uppercase">Liabilities</div>
                                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">$4.2B</div>
                                </div>
                                <div className="bg-teal-50 dark:bg-teal-900/10 rounded p-2 border border-teal-100 dark:border-teal-900/20">
                                    <div className="text-[10px] text-teal-600 dark:text-teal-400 uppercase">Assets</div>
                                    <div className="text-sm font-bold text-teal-700 dark:text-teal-300">$4.4B</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
