import { RADIAL_ITEMS } from "@/data/constants";

export default function RadialCircle() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#8c25f4] font-bold text-sm uppercase tracking-wider">7-Criteria Framework</span>
                    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
                        Proprietary <span className="gradient-text">Assessment Model</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Every project is scored across 7 dimensions with verifiable data sources.
                    </p>
                </div>

                <div className="radial-container">
                    {/* Connecting Lines */}
                    {[
                        { width: 100, rotation: 0 },
                        { width: 120, rotation: 50 },
                        { width: 100, rotation: 100 },
                        { width: 90, rotation: 150 },
                        { width: 90, rotation: 210 },
                        { width: 100, rotation: 260 },
                        { width: 120, rotation: 310 },
                    ].map((line, i) => (
                        <div
                            key={`line-${i}`}
                            className="connecting-line"
                            style={{
                                width: `${line.width}px`,
                                height: "2px",
                                left: "50%",
                                transform: `rotate(${line.rotation}deg)`,
                            }}
                        />
                    ))}

                    {/* Central Hub */}
                    <div className="central-hub">
                        <div>
                            <div className="text-3xl">7</div>
                            <div className="text-xs font-medium opacity-80">Criteria</div>
                        </div>
                    </div>

                    {/* Radial Items */}
                    {RADIAL_ITEMS.map((item) => (
                        <div key={item.title} className={`radial-item ${item.pos}`}>
                            <div className="flex items-center gap-3 mb-2">
                                <span
                                    className={`material-icons p-2 rounded-lg text-lg ${item.color}`}
                                >
                                    {item.icon}
                                </span>
                                <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                            <div className="flex gap-1 mt-3">
                                {item.sources.map((source) => (
                                    <span
                                        key={source}
                                        className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-medium rounded"
                                    >
                                        {source}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
