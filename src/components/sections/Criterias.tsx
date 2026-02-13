import { CRITERIA_ITEMS } from "@/data/constants";

export default function Criterias() {
    return (
        <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        7-Criteria <span className="gradient-text">Intelligence Framework</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">
                        Every asset is evaluated across seven critical dimensions for a comprehensive risk profile.
                    </p>
                </div>

                {/* Radial layout – desktop */}
                <div className="hidden lg:block relative w-[760px] h-[760px] mx-auto">
                    {/* Center circle */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-gradient-to-br from-[#8c25f4] to-indigo-600 flex items-center justify-center shadow-xl shadow-[#8c25f4]/30 z-10 p-3">
                        <img
                            src="/maskot.png"
                            alt="IQ Mascot"
                            className="w-full h-full object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Connecting lines SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 720 720">
                        {CRITERIA_ITEMS.map((item, i) => {
                            const angle = (i * 360) / CRITERIA_ITEMS.length - 90;
                            const rad = (angle * Math.PI) / 180;
                            const r = 280;
                            const baseX = 360 + r * Math.cos(rad);
                            const baseY = 360 + r * Math.sin(rad);
                            const isLower =
                                item.title === "Problem & Solution" || item.title === "Applicability & Use Cases";
                            const isTopPair =
                                item.title === "Originality & Innovation" || item.title === "Market Potential";
                            const offsetX = isTopPair ? 16 : 0;
                            const offsetY = isLower ? 24 : isTopPair ? 12 : 0;
                            const x = baseX + offsetX;
                            const y = baseY + offsetY;
                            return (
                                <line
                                    key={i}
                                    x1="360" y1="360"
                                    x2={x} y2={y}
                                    stroke="currentColor"
                                    className="text-slate-200 dark:text-slate-700"
                                    strokeWidth="1"
                                    strokeDasharray="4"
                                />
                            );
                        })}
                    </svg>

                    {/* Criteria cards positioned radially */}
                    {CRITERIA_ITEMS.map((item, i) => {
                        const angle = (i * 360) / CRITERIA_ITEMS.length - 90;
                        const rad = (angle * Math.PI) / 180;
                        const r = 305;
                        const baseX = 360 + r * Math.cos(rad);
                        const baseY = 360 + r * Math.sin(rad);
                        const isLower =
                            item.title === "Problem & Solution" || item.title === "Applicability & Use Cases";
                        const isTopPair =
                            item.title === "Originality & Innovation" || item.title === "Market Potential";
                        const offsetX = isTopPair ? 16 : 0;
                        const offsetY = isLower ? 24 : isTopPair ? 12 : 0;
                        const x = baseX + offsetX;
                        const y = baseY + offsetY;
                        return (
                            <div
                                key={item.title}
                                className="absolute w-56 -translate-x-1/2 -translate-y-1/2"
                                style={{ left: `${x}px`, top: `${y}px` }}
                            >
                                <div
                                    className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center animate-float"
                                    style={{ animationDelay: `${i * 1}s`, animationDuration: `${6 + (i % 3)}s` }}
                                >
                                    <div className={`w-11 h-11 rounded-lg ${item.color} flex items-center justify-center mx-auto mb-3`}>
                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                    </div>
                                    <div className="text-[15px] font-bold text-slate-900 dark:text-white mb-1">{item.title}</div>
                                    <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile stacked layout */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {CRITERIA_ITEMS.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-md flex gap-4"
                        >
                            <div className={`w-14 h-14 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                                <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                            </div>
                            <div>
                                <div className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">{item.title}</div>
                                <div className="text-sm text-slate-400 leading-relaxed">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
