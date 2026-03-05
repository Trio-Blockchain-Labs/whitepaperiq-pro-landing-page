export default function AboutUs() {
    return (
        <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-background-dark relative overflow-hidden">
            <div className="absolute inset-0 grid-bg pointer-events-none" />
            <div className="absolute top-32 left-0 w-80 h-80 bg-[#8c25f4]/15 rounded-full blur-3xl -z-0" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#8c25f4] font-bold text-sm uppercase tracking-wider">About Us</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                        Building the Standard for{" "}
                        <span className="gradient-text">Crypto Intelligence</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                        WhitepaperIQ operates under <span className="font-semibold text-slate-700 dark:text-slate-200">TriO Blockchain Labs</span> —
                        an institutional-grade crypto due diligence platform
                        that transforms how investors, regulators, and analysts evaluate
                        digital assets, replacing guesswork with verifiable, AI-powered insights.
                    </p>
                </div>

                {/* Highlight Cards */}
                <div className="mb-20 max-w-3xl mx-auto space-y-6">
                    {/* Finext Istanbul Award Banner */}
                    <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-amber-200/60 dark:border-amber-500/20 shadow-xl shadow-amber-500/10 p-8 overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl -z-0" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8c25f4]/10 rounded-full blur-2xl -z-0" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                    <span className="material-symbols-outlined text-4xl text-white">emoji_events</span>
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                                    <span className="material-icons text-sm">workspace_premium</span>
                                    Award Winner
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                    Finext Istanbul Finalist
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    WhitepaperIQ was recognized as a finalist at <span className="font-semibold text-slate-700 dark:text-slate-300">Finext Istanbul</span>,
                                    one of Turkey's premier fintech and innovation competitions. Our AI-powered due diligence
                                    approach earned an award for its unique contribution to institutional crypto analysis —
                                    validating our vision of bringing transparency and trust to digital asset markets.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Base & Farcaster Ecosystem Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Base */}
                        <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-blue-200/60 dark:border-blue-500/20 shadow-xl shadow-blue-500/10 p-6 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -z-0" />
                            <div className="relative z-10 flex items-center gap-5">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                        <span className="material-symbols-outlined text-2xl text-white">link</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                                        <span className="material-icons text-xs">language</span>
                                        On-Chain
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                        Live on Base
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        WhitepaperIQ is deployed as a mini app on the <span className="font-semibold text-slate-700 dark:text-slate-300">Base</span> network,
                                        bringing institutional-grade analysis directly on-chain.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Farcaster */}
                        <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-purple-200/60 dark:border-purple-500/20 shadow-xl shadow-purple-500/10 p-6 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl -z-0" />
                            <div className="relative z-10 flex items-center gap-5">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                        <span className="material-symbols-outlined text-2xl text-white">cast</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/50 text-purple-700 dark:text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                                        <span className="material-icons text-xs">hub</span>
                                        Social
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                        On Farcaster
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Available as a mini app on <span className="font-semibold text-slate-700 dark:text-slate-300">Farcaster</span>,
                                        enabling decentralized social discovery and crypto due diligence in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="max-w-3xl mx-auto feature-card-glass rounded-2xl p-8 md:p-10 transform transition-all hover:scale-[1.01]">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-[#8c25f4]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="material-symbols-outlined text-xl text-[#8c25f4]">flag</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Democratize institutional-quality crypto research — making transparent,
                                    data-driven analysis accessible to every investor, not just hedge funds.
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 dark:border-slate-700" />

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="material-symbols-outlined text-xl text-pink-500">visibility</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    A crypto ecosystem where every decision is driven by real data — where
                                    projects meet the same rigorous standards as public companies and bad actors
                                    are identified before they cause harm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
