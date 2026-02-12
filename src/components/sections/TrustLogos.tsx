import { TRUST_LOGOS } from "@/data/constants";

export default function TrustLogos() {
    return (
        <section className="py-10 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-widest">
                    Powered by Intelligence From
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale">
                    {TRUST_LOGOS.map((logo) => (
                        <div key={logo.name} className="flex items-center gap-2">
                            <span className="material-icons text-2xl">{logo.icon}</span>
                            <span className="font-bold text-xl font-display">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
