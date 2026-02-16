import LogoLoop from "@/components/ui/LogoLoop";
import type { LogoItem } from "@/components/ui/LogoLoop";

const trustLogos: LogoItem[] = [
    {
        node: <span className="material-icons text-4xl text-slate-600 dark:text-slate-300">diamond</span>,
        title: "Arkham",
    },
    {
        node: <span className="material-icons text-4xl text-slate-600 dark:text-slate-300">incomplete_circle</span>,
        title: "CoinGecko",
    },
    {
        node: <span className="material-icons text-4xl text-slate-600 dark:text-slate-300">hub</span>,
        title: "Dune",
    },
    {
        node: <span className="material-icons text-4xl text-slate-600 dark:text-slate-300">token</span>,
        title: "Chainlink",
    },
    {
        node: <span className="material-icons text-4xl text-slate-600 dark:text-slate-300">analytics</span>,
        title: "Messari",
    },
    {
        node: <span className="material-icons text-4xl text-slate-600 dark:text-slate-300">security</span>,
        title: "CertiK",
    },
    {
        node: <span className="material-icons text-4xl text-slate-600 dark:text-slate-300">insights</span>,
        title: "Glassnode",
    },
];

export default function TrustLogos() {
    return (
        <section id="trust-logos" className="py-10 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-widest">
                    Powered by Intelligence From
                </p>
                <div className="relative overflow-hidden" style={{ height: 80 }}>
                    <LogoLoop
                        logos={trustLogos}
                        speed={80}
                        direction="left"
                        logoHeight={40}
                        gap={60}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="var(--trust-fade, #ffffff)"
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </section>
    );
}
