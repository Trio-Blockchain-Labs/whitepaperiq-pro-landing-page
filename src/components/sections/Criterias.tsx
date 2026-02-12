import { CRITERIA_ITEMS } from "@/data/constants";

export default function Criterias() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
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
                <div className="hidden lg:block relative w-[720px] h-[720px] mx-auto">
                    {/* Center circle */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-gradient-to-br from-[#8c25f4] to-indigo-600 flex items-center justify-center shadow-xl shadow-[#8c25f4]/30 z-10">
                        <div className="text-center text-white">
                            <span className="material-icons text-3xl">hub</span>
                            <div className="text-xs font-bold mt-1 tracking-wider">IQ SCORE</div>
                        </div>
                    </div>

                    {/* Connecting lines SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 720 720">
                        {CRITERIA_ITEMS.map((_, i) => {
                            const angle = (i * 360) / CRITERIA_ITEMS.length - 90;
                            const rad = (angle * Math.PI) / 180;
                            const r = 270;
                            const x = 360 + r * Math.cos(rad);
                            const y = 360 + r * Math.sin(rad);
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
                        const r = 290;
                        const x = 360 + r * Math.cos(rad);
                        const y = 360 + r * Math.sin(rad);
                        return (
                            <div
                                key={item.title}
                                className="absolute w-52 -translate-x-1/2 -translate-y-1/2"
                                style={{ left: `${x}px`, top: `${y}px` }}
                            >
                                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
                                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mx-auto mb-3`}>
                                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    </div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">{item.title}</div>
                                    <div className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile stacked layout */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CRITERIA_ITEMS.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-md flex gap-4"
                        >
                            <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</div>
                                <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
