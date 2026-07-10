import { useState } from "react";
import WalletReportCard from "@/components/ui/WalletReportCard";
import WalletInspectorDialog from "@/components/wallet-inspector/WalletInspectorDialog";

const CAPABILITIES = [
    { icon: "speed", text: "Automated wallet risk scoring, updated in real time" },
    { icon: "route", text: "Transaction pattern analysis across chains and hops" },
    { icon: "gpp_maybe", text: "Exposure screening against sanctioned & high-risk entities" },
    { icon: "hub", text: "Counterparty mapping to reveal hidden wallet clusters" },
];

export default function WalletResearch() {
    const [reportOpen, setReportOpen] = useState(false);

    return (
        <section id="wallet-research" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg pointer-events-none" />
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#8c25f4]/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – Copy */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8c25f4]/10 rounded-full mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c25f4] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8c25f4]" />
                            </span>
                            <span className="text-[#8c25f4] font-bold text-xs uppercase tracking-wider">New — Wallet Research</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            Investigate any wallet. <br />
                            <span className="gradient-text">Instantly.</span>
                        </h2>

                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                            WhitepaperIQ can now perform full on-chain wallet analysis &mdash; risk scoring,
                            transaction pattern analysis, exposure to sanctioned and high-risk entities, and
                            counterparty mapping &mdash; then generate a downloadable wallet intelligence report
                            in seconds.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {CAPABILITIES.map((item) => (
                                <li key={item.text} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-8 h-8 rounded-lg bg-[#8c25f4]/10 flex items-center justify-center text-[#8c25f4] shrink-0">
                                        <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                    </span>
                                    <span className="font-medium pt-1">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#pdf-report-section"
                            className="px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all inline-flex items-center gap-2"
                        >
                            Try Wallet Research
                            <span className="material-icons text-sm">arrow_forward</span>
                        </a>
                    </div>

                    {/* Right – Wallet report mockup */}
                    <div className="relative max-w-md mx-auto w-full">
                        <div className="absolute -top-6 -left-6 z-20 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl border-2 border-[#8c25f4]/30 shadow-2xl shadow-[#8c25f4]/10 flex items-center gap-2">
                            <span className="material-icons text-[#8c25f4] text-sm">bolt</span>
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Report generated in 4.2s</span>
                        </div>

                        {/*
                            Illustrative mockup below. If a real wallet-report screenshot is provided,
                            pass it via the `imageSrc` prop to swap it in without touching layout.
                        */}
                        <WalletReportCard
                            variant="full"
                            address="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
                            riskScore={78}
                            flags={[
                                { label: "Mixer exposure", severity: "high" },
                                { label: "Sanctions proximity", severity: "high" },
                                { label: "High-velocity transfers", severity: "medium" },
                            ]}
                            onViewFullReport={() => setReportOpen(true)}
                        />
                    </div>
                </div>
            </div>

            <WalletInspectorDialog open={reportOpen} onOpenChange={setReportOpen} />
        </section>
    );
}
