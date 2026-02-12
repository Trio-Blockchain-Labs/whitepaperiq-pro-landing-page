import { GridScan } from '@/components/GridScan';

export default function Interlude() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden min-h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <GridScan
                    bloomSmoothing={1}
                    lineJitter={0}
                    sensitivity={0.1}
                    lineThickness={0.5}
                    linesColor="#e1d5d5ff"
                    gridScale={0.2}
                    scanColor="#FF9FFC"
                    scanOpacity={0.4}
                    bloomIntensity={0.1}
                    chromaticAberration={0}
                    noiseIntensity={0}
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pointer-events-none">
                <div className="inline-flex items-center gap-2 mb-6 text-[#8c25f4]">
                    <span className="h-px w-8 bg-[#8c25f4]/50" />
                    <span className="material-icons text-sm">auto_awesome</span>
                    <span className="h-px w-8 bg-[#8c25f4]/50" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                    Autonomous Intelligence. <br />
                    <span className="gradient-text">Institutional Depth.</span>
                </h2>
                <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
                    Eight integrated modules working together to give you the most comprehensive due diligence on any token.
                </p>
            </div>
        </section>
    );
}
