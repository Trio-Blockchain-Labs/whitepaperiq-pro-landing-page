export default function PDFReport() {
    return (
        <section id="pdf-report-section" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – Text */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8c25f4]/10 rounded-full mb-6">
                            <span className="material-icons text-[#8c25f4] text-sm">description</span>
                            <span className="text-[#8c25f4] font-bold text-xs uppercase tracking-wider">Professional Reporting</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            Generate, Export, <br />
                            <span className="gradient-text">Decision.</span>
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                            Transform complex on-chain and off-chain data into structured, professional reports.
                            Our PDF exports are the gold standard for VC and Exchange due diligence.
                        </p>

                        <ul className="space-y-5 mb-10">
                            {[
                                {
                                    icon: "shield",
                                    title: "Risk Factor Scoring",
                                    desc: "Automated red flags for high-risk wallet behaviors and contract vulnerabilities.",
                                },
                                {
                                    icon: "token",
                                    title: "Tokenomics Verification",
                                    desc: "Supply schedules and vesting cliffs visualized and cross-checked.",
                                },
                                {
                                    icon: "fact_check",
                                    title: "Entity Analysis",
                                    desc: "Deep dive into project entity structure, jurisdiction, and team background.",
                                },
                            ].map((item) => (
                                <li key={item.title} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#8c25f4]/10 flex items-center justify-center text-[#8c25f4] shrink-0 mt-0.5">
                                        <span className="material-icons text-lg">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <a
                                className="px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all inline-flex items-center gap-2"
                                href="/ethereum.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download Sample PDF
                                <span className="material-icons text-sm">download</span>
                            </a>
                        </div>
                    </div>

                    {/* Right – PDF Preview */}
                    <div className="order-1 lg:order-2 flex justify-center pdf-scroll-container relative">
                        {/* Blob decorations */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

                        <div className="relative w-full max-w-md mx-auto pdf-document bg-white dark:bg-slate-800 rounded-lg shadow-2xl overflow-hidden cursor-pointer group h-[600px] border border-slate-200 dark:border-slate-700">
                            {/* Hover overlay */}
                            <div className="absolute inset-0 z-20 flex items-end justify-center pb-8 pointer-events-none bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg scroll-icon-anim">
                                    <span className="material-icons text-sm">touch_app</span> Scroll to Preview
                                </div>
                            </div>

                            {/* PDF chrome bar */}
                            <div className="h-8 bg-slate-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600 flex items-center px-4 gap-2 sticky top-0 z-10">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-500" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-500" />
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono ml-auto">Whitepaper_IQ_BTC_Report.pdf</div>
                            </div>

                            {/* Scrollable PDF content */}
                            <div className="h-full overflow-y-auto custom-scrollbar bg-white dark:bg-slate-800 p-8 pb-20 select-none">
                                {/* PDF Header */}
                                <div className="flex justify-between items-start mb-10 border-b border-slate-100 dark:border-slate-700 pb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">WHITEPAPER</span>
                                            <span className="w-6 h-6 rounded bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-[#8c25f4]">
                                                <span className="material-icons text-sm">layers</span>
                                            </span>
                                        </div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">Bitcoin Analysis</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] text-slate-400">Date: January 30, 2026</div>
                                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Organization: Whitepaper IQ Team</div>
                                        <div className="text-[8px] text-slate-300 dark:text-slate-600 font-mono mt-1">Report ID: d067f2de-8035-438d</div>
                                    </div>
                                </div>

                                {/* Project Overview */}
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Project Overview</h2>
                                <div className="bg-purple-50/50 dark:bg-purple-900/10 rounded-xl p-6 border border-purple-100 dark:border-purple-800/30 mb-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-[#F7931A] flex items-center justify-center text-white shadow-sm">
                                            <span className="material-symbols-outlined text-2xl">currency_bitcoin</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Bitcoin</h3>
                                    </div>

                                    <div className="inline-block px-4 py-1.5 bg-emerald-400 text-white text-xs font-bold rounded-full mb-8 shadow-sm">
                                        RISK FACTOR: LOW
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Current Price", value: "$83,919.00" },
                                            { label: "Price Change 24h", value: "-0.67%" },
                                            { label: "Total Supply", value: "19,982,450" },
                                            { label: "Max Supply", value: "21,000,000" },
                                            { label: "Market Cap", value: "$1.68T" },
                                            { label: "Volume", value: "$80.52B" },
                                        ].map((stat) => (
                                            <div key={stat.label} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600">
                                                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">{stat.label}</div>
                                                <div className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Insights section */}
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                                    Insights &amp; Data Synthesis
                                </h2>
                                <div className="bg-purple-50/30 dark:bg-purple-900/10 rounded-xl p-6 border border-purple-50 dark:border-purple-800/20">
                                    <h3 className="text-sm font-bold text-purple-700 dark:text-purple-400 mb-3">Insight Summary</h3>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Bitcoin maintains its position as the dominant cryptocurrency with a $1.68T market cap,
                                        showing strong institutional support. However, on-chain metrics indicate potential
                                        short-term volatility.
                                    </p>
                                    <div className="mt-4 space-y-2">
                                        <div className="h-2 bg-slate-100 dark:bg-slate-600 rounded w-full" />
                                        <div className="h-2 bg-slate-100 dark:bg-slate-600 rounded w-5/6" />
                                        <div className="h-2 bg-slate-100 dark:bg-slate-600 rounded w-4/6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
