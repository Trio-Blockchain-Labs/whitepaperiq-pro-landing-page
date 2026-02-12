import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { PRICING_TIERS } from "@/data/constants";

export default function PricingSection() {
    return (
        <section id="pricing" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#8c25f4] font-bold text-sm uppercase tracking-wider">Pricing</span>
                    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
                        Choose Your Plan
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
                        Start free. Scale when ready.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {PRICING_TIERS.map((tier) => (
                        <Card
                            key={tier.name}
                            className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${tier.popular
                                    ? "border-2 border-[#8c25f4] shadow-xl shadow-[#8c25f4]/10"
                                    : "border-slate-200 dark:border-slate-700"
                                } bg-white dark:bg-slate-900`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                                    POPULAR
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">{tier.name}</CardTitle>
                                <CardDescription className="text-slate-500 dark:text-slate-400">{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-6">
                                    <span className="text-5xl font-extrabold text-slate-900 dark:text-white">{tier.price}</span>
                                    {tier.period && (
                                        <span className="text-slate-400 text-lg ml-1">{tier.period}</span>
                                    )}
                                </div>
                                <ul className="space-y-3">
                                    {tier.features.map((feat) => (
                                        <li key={feat} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                            <span className="material-icons text-[#8c25f4] text-base">check_circle</span>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className={`w-full py-3 rounded-lg font-semibold h-auto ${tier.popular
                                            ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-[#8c25f4]/25 hover:shadow-[#8c25f4]/40"
                                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                                        }`}
                                >
                                    {tier.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
