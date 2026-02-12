export default function RiskDetection() {
    return (
        <section id="features" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – Whitepaper document mock */}
                    <div className="relative">
                        <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-icons text-4xl text-[#8c25f4]">description</span>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Whitepaper Analysis</h3>
                                    <p className="text-sm text-slate-400">project_xyz_whitepaper.pdf</p>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p><span className="text-[#8c25f4] font-semibold">Section 3.2 — Tokenomics:</span></p>
                                <p className="pl-4 border-l-2 border-[#8c25f4]/20 italic">
                                    "The total supply is capped at 100,000,000 tokens with 40% allocated to the community via
                                    a 12-month linear vesting schedule. <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-1 rounded font-medium">Liquidity is locked</span> for 12 months..."
                                </p>
                                <p><span className="text-slate-400 font-semibold">Section 4.1 — Security:</span></p>
                                <p className="pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                                    "All smart contracts have undergone a comprehensive audit by..."
                                </p>
                            </div>
                        </div>

                        {/* Floating Mismatch Alert  */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-10 z-20 bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-red-200 dark:border-red-900/50 shadow-2xl shadow-red-500/10 max-w-xs animate-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                    <span className="material-icons text-red-500 text-sm">warning</span>
                                </span>
                                <span className="text-red-600 dark:text-red-400 font-bold text-sm">Mismatch Detected</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                Whitepaper claims <span className="font-semibold">"Liquidity Locked 12 Months"</span> but on-chain data shows liquidity is <span className="text-red-500 font-bold">UNLOCKED</span> in the deployer wallet.
                            </p>
                            <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                                <span className="material-icons text-xs">link</span>
                                0x7a250d5630...f049
                            </div>
                        </div>
                    </div>

                    {/* Right – Text */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-icons text-[#8c25f4] text-lg">shield</span>
                            <span className="text-[#8c25f4] font-bold text-sm uppercase tracking-wider">Risk Detection Engine</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            Whitepaper vs. <span className="gradient-text">Reality.</span>
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                            Our engine ingests whitepapers and cross-references every claim — from token supply and
                            vesting schedules to liquidity locks — against live on-chain data. If the whitepaper says
                            one thing and the blockchain shows another, you know instantly.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { text: "Automated claim extraction from PDF/Gitbook", icon: "task_alt" },
                                { text: "Real-time on-chain verification", icon: "task_alt" },
                                { text: "Mismatch severity scoring (High / Medium / Low)", icon: "task_alt" },
                            ].map((item) => (
                                <li key={item.text} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-icons text-emerald-500">{item.icon}</span>
                                    <span className="font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
