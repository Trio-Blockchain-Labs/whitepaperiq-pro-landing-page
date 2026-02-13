export const NAV_LINKS = [
    { label: "Features", href: "#features" },
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
        name: "Analyst",
        price: "$99",
        period: "/month",
        description: "Perfect for solo researchers and angel investors.",
        cta: "Get Started",
        popular: false,
        features: ["10 Deep-Dive Reports / mo", "Basic Risk Scoring", "Standard Support"],
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For funds, exchanges, and institutional teams.",
        cta: "Contact Sales",
        popular: true,
        features: ["Unlimited Analysis", "API Access", "Dedicated Account Manager", "Custom Risk Parameters"],
    },
];

export const FOOTER_LINKS = {
    product: [
        { label: "Features", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Changelog", href: "#" },
    ],
    company: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
    ],
    legal: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Security", href: "#" },
    ],
};
