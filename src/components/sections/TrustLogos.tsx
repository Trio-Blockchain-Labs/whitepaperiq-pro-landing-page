import LogoLoop from "@/components/ui/LogoLoop";
import type { LogoItem } from "@/components/ui/LogoLoop";

const trustLogos: LogoItem[] = [
    {
        node: <img src="/arkham-logo.png" alt="Arkham Intelligence" className="h-9 w-9 rounded-lg object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
        title: "Arkham",
    },
    {
        node: <img src="/coingecko-logo.png" alt="CoinGecko" className="h-9 w-9 rounded-lg object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
        title: "CoinGecko",
    },
    {
        node: <img src="/defy-logo.png" alt="Defy" className="h-9 w-9 rounded-lg object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
        title: "Defy",
    },
    {
        node: <img src="/eachlabs-logo.png" alt="Each Labs" className="h-9 w-9 rounded-lg object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
        title: "Each Labs",
    },
    {
        node: <img src="/bybit-logo.png" alt="Bybit" className="h-9 w-auto rounded-lg object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />,
        title: "Bybit",
    },
    
];

export default function TrustLogos() {
    return (
        <section id="trust-logos" className="py-10 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-widest">
                    Our Partners
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
