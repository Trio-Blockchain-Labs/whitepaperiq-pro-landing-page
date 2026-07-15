"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import HeroBackground from "@/components/three/HeroBackground";
import { CRITERIA_ITEMS } from "@/data/constants";
import RiskGaugeArc from "@/components/wallet-inspector/RiskGaugeArc";
import { riskStyle } from "@/components/wallet-inspector/riskStyles";
import { MOCK_WALLET_INSPECTOR } from "@/data/walletInspectorMock";
import { cn } from "@/lib/utils";

const WALLET_RISK_ITEMS = [
    {
        title: "Indirect Financial Crime",
        badge: "INDIRECT",
        badgeClass: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
        desc: "The wallet has transacted with addresses that have connections to financial crime networks.",
    },
    {
        title: "Indirect Stealing Attack",
        badge: "INDIRECT",
        badgeClass: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
        desc: "Transaction history includes counterparties linked to theft-related activities.",
    },
    {
        title: "Sanctioned Entities",
        badge: "CLEAR",
        badgeClass: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
        desc: "No direct involvement in any sanctioned activities or money laundering detected.",
    },
];

const TRENDING_CHIPS = [
    { label: "Bitcoin", symbol: "btc" },
    { label: "Ethereum", symbol: "eth" },
    { label: "Tether", symbol: "usdt" },
    { label: "BNB", symbol: "bnb" },
];

const TYPEWRITER_ITEMS: { text: string; mode: "project" | "wallet" }[] = [
    { text: "bitcoin", mode: "project" },
    { text: "0x7a3f****...****9c1b", mode: "wallet" },
    { text: "ethereum", mode: "project" },
    { text: "0x9e21****...****4f0a", mode: "wallet" },
    { text: "tether", mode: "project" },
    { text: "bc1qxy****...****8k2z", mode: "wallet" },
];
const TYPE_SPEED_MS = 80;
const DELETE_SPEED_MS = 40;
const HOLD_MS = 2000;

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState<"summary" | "financial">("summary");
    const [mode, setMode] = useState<"project" | "wallet">("project");
    const [searchValue, setSearchValue] = useState("");
    const [ghostText, setGhostText] = useState("");
    const [isUserActive, setIsUserActive] = useState(false);
    const [inputFocused, setInputFocused] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    const projectTabRef = useRef<HTMLButtonElement>(null);
    const walletTabRef = useRef<HTMLButtonElement>(null);

    const wallet = MOCK_WALLET_INSPECTOR;
    const risk = riskStyle(wallet.riskLevel);
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

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setPrefersReducedMotion(media.matches);
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    // Auto-typewriter demo: endlessly cycles through a few token names and masked
    // wallet addresses, syncing the toggle to whichever mode is being "typed". Stops
    // for good the moment the user takes control (focuses the input, clicks a tab,
    // or picks a chip).
    useEffect(() => {
        if (isUserActive || prefersReducedMotion) return;

        let cancelled = false;
        let timeoutId: ReturnType<typeof setTimeout>;
        const wait = (ms: number) =>
            new Promise<void>((resolve) => {
                timeoutId = setTimeout(resolve, ms);
            });

        const typeText = async (text: string) => {
            for (let i = 0; i <= text.length; i++) {
                if (cancelled) return;
                setGhostText(text.slice(0, i));
                await wait(TYPE_SPEED_MS);
            }
        };

        const deleteText = async (text: string) => {
            for (let i = text.length; i >= 0; i--) {
                if (cancelled) return;
                setGhostText(text.slice(0, i));
                await wait(DELETE_SPEED_MS);
            }
        };

        const loop = async () => {
            let index = 0;
            while (!cancelled) {
                const item = TYPEWRITER_ITEMS[index % TYPEWRITER_ITEMS.length];
                setMode(item.mode);
                await typeText(item.text);
                if (cancelled) return;
                await wait(HOLD_MS);
                if (cancelled) return;
                await deleteText(item.text);
                if (cancelled) return;
                index++;
            }
        };

        loop();

        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, [isUserActive, prefersReducedMotion]);

    const stopAutoAnimation = () => setIsUserActive(true);

    const handleToggleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        stopAutoAnimation();
        const next = mode === "project" ? "wallet" : "project";
        setMode(next);
        requestAnimationFrame(() => {
            (next === "project" ? projectTabRef : walletTabRef).current?.focus();
        });
    };

    const handleChipClick = (label: string) => {
        stopAutoAnimation();
        setMode("project");
        setSearchValue(label);
    };

    const showGhost = !searchValue && !isUserActive && !prefersReducedMotion;

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Three.js particle network */}
            <HeroBackground />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#8c25f4]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 min-w-0 w-full">

                {/* Wordmark */}
                <img src="/logo.png" alt="Whitepaper IQ" className="mx-auto mb-4 max-w-md md:max-w-lg w-full h-auto" />

                {/* Tagline */}
                <p className="max-w-xl mx-auto text-xl md:text-2xl text-slate-500 dark:text-slate-400">
                    The Intelligence Layer for Web3
                </p>

                {/* Segmented toggle: Project / Wallet */}
                <div
                    role="tablist"
                    aria-label="Search mode"
                    onKeyDown={handleToggleKeyDown}
                    className="relative inline-grid grid-cols-2 mt-8 mb-6 rounded-full bg-slate-100 dark:bg-slate-800 p-1"
                >
                    <motion.div
                        aria-hidden="true"
                        className="absolute inset-y-1 left-1 rounded-full bg-gradient-to-r from-violet-500 to-[#8c25f4]"
                        style={{ width: "calc(50% - 4px)" }}
                        animate={{ x: mode === "project" ? 0 : "100%" }}
                        transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 32 }}
                    />
                    <button
                        ref={projectTabRef}
                        type="button"
                        role="tab"
                        id="hero-tab-project"
                        aria-selected={mode === "project"}
                        tabIndex={mode === "project" ? 0 : -1}
                        onClick={() => {
                            stopAutoAnimation();
                            setMode("project");
                        }}
                        className={cn(
                            "relative z-10 flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors",
                            mode === "project" ? "text-white" : "text-slate-600 dark:text-slate-300"
                        )}
                    >
                        <span className="material-icons text-base">search</span>
                        Project
                    </button>
                    <button
                        ref={walletTabRef}
                        type="button"
                        role="tab"
                        id="hero-tab-wallet"
                        aria-selected={mode === "wallet"}
                        tabIndex={mode === "wallet" ? 0 : -1}
                        onClick={() => {
                            stopAutoAnimation();
                            setMode("wallet");
                        }}
                        className={cn(
                            "relative z-10 flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors",
                            mode === "wallet" ? "text-white" : "text-slate-600 dark:text-slate-300"
                        )}
                    >
                        <span className="material-icons text-base">account_balance_wallet</span>
                        Wallet
                    </button>
                </div>

                {/* Search bar */}
                <div className="relative mx-auto max-w-[600px] w-full">
                    <div className="absolute -inset-x-10 -top-16 h-32 bg-[#8c25f4]/20 blur-[80px] rounded-full pointer-events-none -z-10" />
                    <div
                        className={cn(
                            "relative rounded-full transition-all duration-200",
                            inputFocused ? "ring-2 ring-[#8c25f4] shadow-lg shadow-[#8c25f4]/20 scale-[1.01]" : "shadow-sm"
                        )}
                    >
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => {
                                setInputFocused(true);
                                stopAutoAnimation();
                            }}
                            onBlur={() => setInputFocused(false)}
                            placeholder="Search for any coin or token..."
                            aria-label="Search for any coin or token"
                            className={cn(
                                "w-full rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-6 pr-14 py-4 text-base text-slate-900 dark:text-white focus:outline-none",
                                showGhost ? "placeholder:text-transparent" : "placeholder:text-slate-400"
                            )}
                        />
                        {showGhost && (
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-0 left-6 flex items-center text-base text-slate-400"
                            >
                                {ghostText}
                                <span className="ml-0.5 inline-block w-px h-5 bg-slate-400 animate-pulse" />
                            </div>
                        )}
                        <span className="material-icons absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            search
                        </span>
                    </div>
                </div>

                {/* Trending Now */}
                <div className="mt-8">
                    <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-400 mb-3">
                        <span className="material-icons text-sm">trending_up</span>
                        Trending Now
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
                        {TRENDING_CHIPS.map((chip) => (
                            <button
                                key={chip.symbol}
                                type="button"
                                onClick={() => handleChipClick(chip.label)}
                                className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-700 dark:text-slate-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#8c25f4]/40 transition-all duration-150"
                            >
                                {chip.label} <span className="text-slate-400">${chip.symbol}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Preview card: swaps between Project (BTC) and Wallet analysis */}
                <motion.div layout={!prefersReducedMotion} className="mt-14 relative mx-auto max-w-6xl">
                    <AnimatePresence mode="wait" initial={false}>
                        {mode === "project" ? (
                            <motion.div
                                key="project"
                                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -24 }}
                                transition={{ duration: 0.3 }}
                                className="hero-3d-container"
                            >
                                <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                                    <div className="hero-shimmer" aria-hidden="true" />
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
                                                        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${activeTab === "summary"
                                                                ? "bg-[#8c25f4]/10 text-[#8c25f4]"
                                                                : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                                                            }`}
                                                        onClick={() => setActiveTab("summary")}
                                                    >
                                                        Summary
                                                    </button>
                                                    <button
                                                        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${activeTab === "financial"
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
                            </motion.div>
                        ) : (
                            <motion.div
                                key="wallet"
                                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -24 }}
                                transition={{ duration: 0.3 }}
                                className="hero-3d-container"
                            >
                                <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                                    <div className="hero-shimmer" aria-hidden="true" />
                                    {/* Browser Chrome */}
                                    <div className="h-10 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                                            <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                        </div>
                                        <div className="mx-auto bg-white dark:bg-slate-900 px-4 py-1 rounded text-xs text-slate-400 font-mono flex items-center gap-2 border border-slate-200 dark:border-slate-700 w-96 justify-center">
                                            <span className="material-icons text-[10px]">lock</span>
                                            whitepaperiq.com/analysis/wallet
                                        </div>
                                    </div>

                                    {/* Dashboard Content */}
                                    <div className="bg-slate-50 dark:bg-slate-950 p-6 w-full text-left">
                                        {/* Wallet Header */}
                                        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-[#8c25f4] flex items-center justify-center text-white shadow-sm">
                                                    <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                                                            {wallet.address.slice(0, 6)}…{wallet.address.slice(-4)}
                                                        </h2>
                                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded border ${risk.pill}`}>
                                                            {risk.label}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-slate-400 mt-1">Wallet Analysis · {wallet.chain}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <RiskGaugeArc score={wallet.amlScore} level={wallet.riskLevel} />
                                            </div>
                                        </div>

                                        {/* Summary Card */}
                                        <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 mb-6 shadow-sm">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Summary</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {wallet.aiSummary}
                                            </p>
                                        </div>

                                        {/* 3 Column Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {/* Top Counterparties */}
                                            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <span className="p-1.5 bg-purple-50 dark:bg-slate-800 rounded-md text-purple-600">
                                                        <span className="material-symbols-outlined text-lg">hub</span>
                                                    </span>
                                                    <h3 className="font-bold text-slate-900 dark:text-white">Top Counterparties</h3>
                                                </div>
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                                            <th className="text-left font-medium pb-2 pl-1">Address (Label)</th>
                                                            <th className="text-right font-medium pb-2">Volume</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                                        {wallet.counterparties.slice(0, 5).map((c) => (
                                                            <tr key={c.address} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                                <td className="py-2.5 pl-1">
                                                                    <div className="font-mono text-purple-600 dark:text-purple-400 text-xs">
                                                                        {c.address.slice(0, 6)}...{c.address.slice(-4)}
                                                                    </div>
                                                                    <div className="text-xs text-slate-400">
                                                                        {c.labels[0] ?? "Unlabeled"}
                                                                    </div>
                                                                </td>
                                                                <td className="text-right font-medium text-slate-700 dark:text-slate-300">
                                                                    ${c.totalVolumeUsd.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            {/* Token Balances */}
                                            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className="p-1.5 bg-purple-50 dark:bg-slate-800 rounded-md text-purple-600">
                                                            <span className="material-symbols-outlined text-lg">token</span>
                                                        </span>
                                                        <h3 className="font-bold text-slate-900 dark:text-white">Token Balances</h3>
                                                    </div>
                                                </div>
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                                            <th className="text-left font-medium pb-2 pl-1">Token</th>
                                                            <th className="text-right font-medium pb-2">Value</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                                        {wallet.balances.map((b) => (
                                                            <tr key={b.symbol} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                                <td className="py-3 pl-1 font-medium text-slate-700 dark:text-slate-300">{b.symbol}</td>
                                                                <td className="text-right font-bold text-purple-600 dark:text-purple-400">
                                                                    ${b.value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        <tr>
                                                            <td className="py-3 pl-1 font-medium text-slate-500 dark:text-slate-400">Behavioral Labels</td>
                                                            <td className="text-right text-xs text-slate-400">{wallet.labels.join(", ")}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            {/* AI Risk Assessment */}
                                            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-5 shadow-sm flex flex-col">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className="p-1.5 bg-purple-50 dark:bg-slate-800 rounded-md text-purple-600">
                                                            <span className="material-symbols-outlined text-lg">smart_toy</span>
                                                        </span>
                                                        <div>
                                                            <h3 className="font-bold text-slate-900 dark:text-white leading-tight">AI Risk Assessment</h3>
                                                            <p className="text-[10px] text-slate-400">Generated from AML score &amp; network</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-xs font-bold text-[#8c25f4] uppercase tracking-wider mb-3 mt-2">
                                                    Risk Factors
                                                </div>
                                                <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar max-h-[220px]">
                                                    {WALLET_RISK_ITEMS.map((item, index) => (
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
                                                                <span className={`${item.badgeClass} text-[10px] font-bold px-2 py-0.5 rounded`}>
                                                                    {item.badge}
                                                                </span>
                                                            </div>
                                                            <p className="text-xs text-slate-500 leading-relaxed pl-7">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
