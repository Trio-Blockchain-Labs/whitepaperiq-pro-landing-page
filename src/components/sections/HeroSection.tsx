 "use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/three/HeroBackground";
import { CRITERIA_ITEMS } from "@/data/constants";

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState<"summary" | "financial">("summary");
    const riskBadges: Record<string, { label: string; className: string }> = {
        "Originality & Innovation": {
            label: "STRONG",
            className: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
        },
        "Market Potential": {
            label: "MATURE",
            className: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
        },
        "Financial Model": {
            label: "STABLE",
            className: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
        },
        "Problem & Solution": {
            label: "CLEAR",
            className: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
        },
        "Applicability & Use Cases": {
            label: "BROAD",
            className: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400",
        },
        "Security & Compliance": {
            label: "HIGH",
            className: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
        },
        "Market Strategy": {
            label: "ORGANIC",
            className: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
        },
    };

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
                    <Button
                        className="group relative px-8 py-3.5 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold shadow-xl shadow-[#8c25f4]/25 hover:shadow-[#8c25f4]/40 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden h-auto"
                        onClick={() => document.getElementById("trust-logos")?.scrollIntoView({ behavior: "smooth" })}
                    >
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
                                whitepaperiq.com/analysis/btc
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
                                        { label: "Current Supply", value: "21.0M" },
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

                            {/* Summary / Financial Card */}
                            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 mb-6 shadow-sm">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {activeTab === "summary" ? "Summary" : "Financial Overview"}
                                    </h3>
                                    <div className="flex gap-2">
                                        <button
                                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                                activeTab === "summary"
                                                    ? "bg-[#8c25f4]/10 text-[#8c25f4]"
                                                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                                            }`}
                                            onClick={() => setActiveTab("summary")}
                                        >
                                            Summary
                                        </button>
                                        <button
                                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                                activeTab === "financial"
                                                    ? "bg-[#8c25f4]/10 text-[#8c25f4]"
                                                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                                            }`}
                                            onClick={() => setActiveTab("financial")}
                                        >
                                            Financial
                                        </button>
                                    </div>
                                </div>
                                {activeTab === "summary" ? (
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Bitcoin maintains its position as the dominant cryptocurrency with a $1.68T market cap, but faces several concerning indicators. The asset is trading 33.4% below its recent ATH of $126K, showing significant price pressure. While institutional adoption through corporate treasuries ($95.8B) and government holdings ($52B) demonstrates growing legitimacy, the concentration of 15.1% of supply among top holders creates centralization risks. Exchange dominance by major CEXs like Binance and government holdings including hacker-controlled funds raise security concerns. The project shows strong development activity with 108 commits in 4 weeks and 846 contributors, indicating robust ongoing development. However, the lack of inflow/outflow data limits visibility into current market dynamics. Overall, Bitcoin remains fundamentally strong but faces near-term headwinds from price volatility and concentration risks.
                                    </p>
                                ) : (
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Bitcoin's financial metrics show mixed signals with concerning price action but strong fundamental positioning. Currently trading at $83,919, the asset is 33.4% below its recent ATH of $126,080, indicating significant correction pressure. However, the 123,657% gain from ATL of $67.81 demonstrates long-term value creation. Market cap of $1.68T with FDV ratio of 1.0 indicates no inflation risk, as Bitcoin's fixed 21M supply cap eliminates future dilution concerns. Short-term trends show weakness: -0.67% (24h), -5.96% (7d), -12.13% (14d), but longer-term performance remains challenged with -20.1% (1y). The $80.5B daily volume represents healthy liquidity at 4.8% of market cap. With 19.98M of 21M coins already mined, Bitcoin approaches full circulation, supporting scarcity value proposition despite current price pressures.
                                    </p>
                                )}
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
                                        {CRITERIA_ITEMS.map((item, index) => {
                                            const badge = riskBadges[item.title] ?? {
                                                label: "INFO",
                                                className: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
                                            };
                                            return (
                                                <div key={item.title} className="mb-4 last:mb-0">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600">
                                                                {index + 1}
                                                            </span>
                                                            <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                        <span className={`${badge.className} text-[10px] font-bold px-2 py-0.5 rounded`}>
                                                            {badge.label}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-slate-500 leading-relaxed pl-7">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            );
                                        })}
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
