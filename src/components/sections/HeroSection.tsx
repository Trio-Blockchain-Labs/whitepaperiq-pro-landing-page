import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/three/HeroBackground";

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Three.js particle network */}
            <HeroBackground />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#8c25f4]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">


                {/* Heading */}
                <img src="/logo.png" alt="Whitepaper IQ" className="mx-auto mb-2 max-w-md md:max-w-lg lg:max-w-xl w-full h-auto" />

                <a
                    href="https://trioblockchainlabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mx-auto mb-8 text-sm font-medium italic tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-[#8c25f4] transition-colors"
                >
                    Powered by TriO Blockchain Labs
                </a>

                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400">
                    AI-driven risk analysis for funds, VCs, and exchanges. Detect fraud, wash trading, and
                    tokenomics mismatches before you deploy capital.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="group relative px-8 py-3.5 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold shadow-xl shadow-[#8c25f4]/25 hover:shadow-[#8c25f4]/40 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden h-auto">
                        <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:bg-white/10 transition-colors" />
                        <span className="relative flex items-center gap-2">
                            Explore
                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </span>
                    </Button>

                    <Button
                        variant="outline"
                        className="px-8 py-3.5 rounded-lg border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all h-auto"
                        onClick={() => {
                            document.getElementById('pdf-report-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        View Sample Report
                    </Button>
                </div>

                {/* Browser Mockup */}
                <div className="mt-20 relative mx-auto max-w-6xl hero-3d-container">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                        {/* Browser Chrome */}
                        <div className="h-10 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                            </div>
                            <div className="mx-auto bg-white dark:bg-slate-900 px-4 py-1 rounded text-xs text-slate-400 font-mono flex items-center gap-2 border border-slate-200 dark:border-slate-700 w-96 justify-center">
                                <span className="material-icons text-[10px]">lock</span>
                                app.whitepaperiq.com/analysis/btc-021
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="bg-slate-50 dark:bg-slate-950 p-6 w-full text-left">
                            {/* Token Header */}
                            <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#F7931A] flex items-center justify-center text-white shadow-sm">
                                        <span className="material-symbols-outlined text-2xl">currency_bitcoin</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                                Bitcoin <span className="text-slate-500 font-normal text-lg">(BTC)</span>
                                            </h2>
                                            <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded flex items-center">
                                                <span className="material-icons text-[10px] mr-1">trending_down</span> 0.67%
                                            </span>
                                        </div>
                                        <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white mt-1">
                                            $83,919.00
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-8 text-sm">
                                    {[
                                        { label: "24h Volume", value: "$80.5B" },
                                        { label: "Market Cap", value: "$1.68T" },
                                        { label: "FDV", value: "$1.68T" },
                                        { label: "Current Supply", value: "20.0M" },
                                    ].map((stat) => (
                                        <div key={stat.label}>
                                            <div className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wide mb-1">
                                                {stat.label}
                                            </div>
                                            <div className="font-bold text-slate-900 dark:text-white text-lg">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Summary Card */}
                            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 mb-6 shadow-sm">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Summary</h3>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 bg-[#8c25f4]/10 text-[#8c25f4] text-xs font-medium rounded-full">
                                            Summary
                                        </button>
                                        <button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-medium rounded-full">
                                            Financial
                                        </button>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Bitcoin maintains its position as the dominant cryptocurrency with a $1.68T market cap, but
                                    faces several concerning indicators. The asset is trading 33.4% below its recent ATH of $126K,
                                    showing significant price pressure. While institutional adoption through corporate treasuries
                                    ($95.8B) and government holdings ($52B) demonstrates growing legitimacy, the concentration of
                                    15.1% of supply among top holders creates centralization risks.
                                </p>
                            </div>

                            {/* 3 Column Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Top 100 Holders */}
                                <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="p-1.5 bg-purple-50 dark:bg-slate-800 rounded-md text-purple-600">
                                            <span className="material-symbols-outlined text-lg">group</span>
                                        </span>
                                        <h3 className="font-bold text-slate-900 dark:text-white">Top 100 Holders</h3>
                                    </div>
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                                <th className="text-left font-medium pb-2 pl-1">Address (Label)</th>
                                                <th className="text-right font-medium pb-2">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                            {[
                                                { addr: "34xp4v...wseo", label: "Cold Wallet", value: "$20.9B" },
                                                { addr: "3M219K...xRP6", label: "Cold Wallet", value: "$12.9B" },
                                                { addr: "bc1ql4...59v2", label: "Cold Wallet", value: "$11.8B" },
                                                { addr: "bc1qgd...vw97", label: "Cold Wallet", value: "$10.9B" },
                                                { addr: "bc1qja...27a4", label: "Bitcoin Reserves", value: "$8.1B" },
                                            ].map((row) => (
                                                <tr key={row.addr} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                    <td className="py-2.5 pl-1">
                                                        <div className="font-mono text-purple-600 dark:text-purple-400 text-xs">{row.addr}</div>
                                                        <div className="text-xs text-slate-400">({row.label})</div>
                                                    </td>
                                                    <td className="text-right font-medium text-slate-700 dark:text-slate-300">{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Exchanges */}
                                <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 bg-purple-50 dark:bg-slate-800 rounded-md text-purple-600">
                                                <span className="material-symbols-outlined text-lg">swap_horiz</span>
                                            </span>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Exchanges</h3>
                                        </div>
                                    </div>
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                                <th className="text-left font-medium pb-2 pl-1">Exchange</th>
                                                <th className="text-right font-medium pb-2">24h Vol</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                            {[
                                                { name: "BTCC", vol: "$3.0B" },
                                                { name: "Biconomy.com", vol: "$3.0B" },
                                                { name: "Binance", vol: "$3.0B" },
                                                { name: "Websea", vol: "$2.8B" },
                                                { name: "Crypto.com", vol: "$1.9B" },
                                            ].map((row) => (
                                                <tr key={row.name} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                    <td className="py-3 pl-1 font-medium text-slate-700 dark:text-slate-300">{row.name}</td>
                                                    <td className="text-right font-bold text-purple-600 dark:text-purple-400">{row.vol}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Detailed Report */}
                                <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-5 shadow-sm flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 bg-purple-50 dark:bg-slate-800 rounded-md text-purple-600">
                                                <span className="material-symbols-outlined text-lg">description</span>
                                            </span>
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white leading-tight">Detailed Report</h3>
                                                <p className="text-[10px] text-slate-400">Deep-dive technical audit</p>
                                            </div>
                                        </div>
                                        <button className="bg-[#B9388B] hover:bg-[#a02c76] text-white text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1 transition-colors">
                                            <span className="material-icons text-sm">download</span> Export PDF
                                        </button>
                                    </div>
                                    <div className="text-xs font-bold text-[#B9388B] uppercase tracking-wider mb-3 mt-2">
                                        7 Criteria Risk Assessment
                                    </div>
                                    <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar max-h-[220px]">
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600">1</span>
                                                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">Tech &amp; Innovation</span>
                                                </div>
                                                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">GOOD</span>
                                            </div>
                                            <p className="text-xs text-slate-500 leading-relaxed pl-7">
                                                Bitcoin represents the foundational blockchain technology with SHA-256 Proof of Work consensus achieving unparalleled security and decentralization.
                                            </p>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600">2</span>
                                                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">Market Health</span>
                                                </div>
                                                <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded">CAUTION</span>
                                            </div>
                                            <p className="text-xs text-slate-500 leading-relaxed pl-7">
                                                Significant drawdown from ATH suggests market cycle pressure. Volatility remains high relative to traditional assets.
                                            </p>
                                        </div>
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
