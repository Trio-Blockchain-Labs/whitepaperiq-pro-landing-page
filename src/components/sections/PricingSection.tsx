import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { PRICING_PRO_PLAN, PRICING_GROUPS } from "@/data/constants";

type Billing = "monthly" | "annual";

function formatUsd(value: number) {
    return `$${value.toLocaleString("en-US")}`;
}

export default function PricingSection() {
    const [billing, setBilling] = useState<Billing>("monthly");

    return (
        <section id="pricing" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10">
                    <span className="text-[#8c25f4] font-bold text-sm uppercase tracking-wider">Pricing</span>
                    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
                        Choose Your Plan
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
                        From independent analysts to VASP-grade compliance teams.
                    </p>

                    {/* Billing toggle */}
                    <div className="relative inline-flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 mt-8 w-[300px]">
                        <span
                            aria-hidden="true"
                            className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-slate-900 dark:bg-white shadow-sm transition-transform duration-300 ease-out ${billing === "annual" ? "translate-x-full" : "translate-x-0"
                                }`}
                        />
                        <button
                            type="button"
                            onClick={() => setBilling("monthly")}
                            aria-pressed={billing === "monthly"}
                            className={`relative z-10 flex-1 py-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c25f4]/50 ${billing === "monthly" ? "text-white dark:text-slate-900" : "text-slate-500 dark:text-slate-400"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            type="button"
                            onClick={() => setBilling("annual")}
                            aria-pressed={billing === "annual"}
                            className={`relative z-10 flex-1 py-2 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c25f4]/50 ${billing === "annual" ? "text-white dark:text-slate-900" : "text-slate-500 dark:text-slate-400"
                                }`}
                        >
                            Annual
                            <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-400 text-white px-1.5 py-0.5 rounded-full">
                                Save 17%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pro User — individual plan */}
                <div className="mb-16 rounded-2xl border border-[#8c25f4]/20 bg-gradient-to-br from-[#8c25f4]/5 to-transparent dark:from-[#8c25f4]/10 p-8 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:items-center">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#8c25f4]/10 text-[#8c25f4] px-2 py-0.5 rounded-full">
                            {PRICING_PRO_PLAN.badge}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-3 mb-2">{PRICING_PRO_PLAN.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md mb-4">{PRICING_PRO_PLAN.description}</p>
                        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-[#8c25f4] text-base">bolt</span>
                                {PRICING_PRO_PLAN.credits}
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-icons text-[#8c25f4] text-base">add_circle</span>
                                {PRICING_PRO_PLAN.extraCredits}
                            </li>
                        </ul>
                    </div>
                    <div className="text-left lg:text-right shrink-0">
                        <div key={`pro-${billing}`} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                            <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                                {formatUsd(billing === "annual" ? PRICING_PRO_PLAN.annualMonthlyPrice : PRICING_PRO_PLAN.monthlyPrice)}
                            </span>
                            <span className="text-slate-400 text-lg ml-1">/mo</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 mb-4">
                            {billing === "annual"
                                ? `Billed ${formatUsd(PRICING_PRO_PLAN.annualTotal)} / year`
                                : "No commitment — cancel anytime"}
                        </p>
                        <Button className="px-8 py-3 rounded-lg font-semibold h-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200">
                            {PRICING_PRO_PLAN.cta}
                        </Button>
                    </div>
                </div>

                {/* Core Intelligence / Compliance & Shield groups */}
                {PRICING_GROUPS.map((group) => (
                    <div key={group.id} className="mb-16 last:mb-0">
                        <div className="mb-8 text-center max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{group.name}</h3>
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{group.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {group.tiers.map((tier) => (
                                <Card
                                    key={`${group.id}-${tier.name}`}
                                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${tier.popular
                                            ? "border-2 border-[#8c25f4] shadow-xl shadow-[#8c25f4]/10 scale-[1.03]"
                                            : "border-slate-200 dark:border-slate-700"
                                        } bg-white dark:bg-slate-900 flex flex-col h-full`}
                                >
                                    {tier.popular && (
                                        <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                                            POPULAR
                                        </div>
                                    )}
                                    <CardHeader>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#8c25f4]/10 text-[#8c25f4] px-2 py-0.5 rounded-full">
                                                {tier.credits}
                                            </span>
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">{tier.name}</CardTitle>
                                        <CardDescription className="text-slate-500 dark:text-slate-400">{tier.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div key={`${group.id}-${tier.name}-${billing}`} className="mb-1 animate-in fade-in slide-in-from-bottom-1 duration-300">
                                            <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                                                {formatUsd(billing === "annual" ? tier.annualMonthlyPrice : tier.monthlyPrice)}
                                            </span>
                                            <span className="text-slate-400 text-lg ml-1">/mo</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mb-6">
                                            {billing === "annual"
                                                ? `Billed ${formatUsd(tier.annualTotal)} / year`
                                                : "No commitment — cancel anytime"}
                                        </p>
                                        <ul className="space-y-3">
                                            {tier.features.map((feat) => (
                                                <li key={feat} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                                    <span className="material-icons text-[#8c25f4] text-base">check_circle</span>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        {tier.cta === "Contact Sales" ? (
                                            <Button
                                                className={`w-full py-3 rounded-lg font-semibold h-auto ${tier.popular
                                                        ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-[#8c25f4]/25 hover:shadow-[#8c25f4]/40"
                                                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                                                    }`}
                                                asChild
                                            >
                                                <a href="mailto:contact@whitepaperiq.com">
                                                    {tier.cta}
                                                </a>
                                            </Button>
                                        ) : (
                                            <Button
                                                className={`w-full py-3 rounded-lg font-semibold h-auto ${tier.popular
                                                        ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-[#8c25f4]/25 hover:shadow-[#8c25f4]/40"
                                                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                                                    }`}
                                            >
                                                {tier.cta}
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
