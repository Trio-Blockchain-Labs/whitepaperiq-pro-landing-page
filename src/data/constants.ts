export const NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
];

export const TRUST_LOGOS = [
    { icon: "diamond", name: "Arkham" },
    { icon: "incomplete_circle", name: "CoinGecko" },
    { icon: "psychology", name: "OpenAI" },
    { icon: "hub", name: "Dune" },
];

export const CRITERIA_ITEMS = [
    { icon: "memory", color: "bg-[#8c25f4]/10 text-[#8c25f4]", title: "Originality & Innovation", desc: "The uniqueness of the technology or approach offered by the project and the level of innovation it brings compared to existing solutions are evaluated." },
    { icon: "language", color: "bg-blue-500/10 text-blue-500", title: "Market Potential", desc: "The size of the target market, its growth capacity, and the project's potential market share are analyzed." },
    { icon: "percent", color: "bg-emerald-500/10 text-emerald-500", title: "Financial Model", desc: "The project's revenue models, token economy (tokenomics), and sustainable financial structure are examined." },
    { icon: "lightbulb", color: "bg-amber-500/10 text-amber-500", title: "Problem & Solution", desc: "The reality of the problem defined by the project and the effectiveness and rationality of the solution it offers are questioned." },
    { icon: "hub", color: "bg-indigo-500/10 text-indigo-500", title: "Applicability & Use Cases", desc: "The applicability of the presented technology to real-world scenarios and the breadth of its use cases are evaluated." },
    { icon: "lock", color: "bg-red-500/10 text-red-500", title: "Security & Compliance", desc: "The project's compliance with technical security standards and its level of compliance with legal regulations (along with risk screening) is analyzed." },
    { icon: "ads_click", color: "bg-cyan-500/10 text-cyan-500", title: "Market Strategy", desc: "The project's market entry plan, competitive strategy, and user adoption goals are examined." },
];

export const PRICING_TIERS = [
    {
        name: "Pro",
        badge: "B2C",
        price: "$99",
        period: "/month",
        description: "For professional individual analysts who need deep-dive research and advanced data access.",
        cta: "Start Free Trial",
        popular: false,
        features: [
            "50 queries per month",
            "Live Top Holders data",
            "Social media activity tracking",
            "Exchange & Institutional Holdings",
            "Advanced AI-powered analysis",
            "Downloadable PDF reports",
        ],
    },
    {
        name: "Enterprise",
        badge: "B2B",
        price: "$499",
        period: "/month",
        description: "Built for Crypto Asset Service Providers (CASPs) and institutional research teams.",
        cta: "Contact Sales",
        popular: true,
        features: [
            "100 queries per month",
            "3 user licenses included",
            "Turkish language support",
            "CMB-indexed AI analysis engine",
            "Trained on institutional listing workflows",
            "Enterprise-grade compliance tools",
        ],
    },
    {
        name: "Enterprise Pro",
        badge: "B2B",
        price: "$999+",
        period: "/month",
        description: "Tailored solutions for large-scale exchanges and investment funds with maximum flexibility.",
        cta: "Contact Sales",
        popular: false,
        features: [
            "Unlimited queries",
            "Full API access",
            "Custom-branded UI & AI model",
            "Live data tracking & real-time charts",
            "Branded PDF report templates",
            "Dedicated account manager",
        ],
    },
];

export const FOOTER_LINKS = {
    product: [
        { label: "Risk Detection Engine", href: "#features" },
        { label: "Due Diligence Suite", href: "#due-diligence" },
        { label: "7-Criteria Circle", href: "#how-it-works" },
        { label: "Professional Reports", href: "#pdf-report-section" },
    ],
    company: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/whitepaper-iq-privacy-policy.pdf", target: "_blank" },
        { label: "Terms of Service", href: "/whitepaper-iq-terms-and-conditions.pdf", target: "_blank" },
        { label: "Ad Policy", href: "/whitepaper-iq-ad-policy.pdf", target: "_blank" },
    ],
};
