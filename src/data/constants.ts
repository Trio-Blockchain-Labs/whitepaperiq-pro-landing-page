export const NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "API", href: "#api" },
];

export const TRUST_LOGOS = [
    { icon: "diamond", name: "Arkham" },
    { icon: "incomplete_circle", name: "CoinGecko" },
    { icon: "psychology", name: "OpenAI" },
    { icon: "hub", name: "Dune" },
];

export const RADIAL_ITEMS = [
    { pos: "pos-1", icon: "memory", color: "bg-[#8c25f4]/10 text-[#8c25f4]", title: "Tech & Innovation", desc: "Uniqueness of technology compared to existing solutions.", sources: ["GitHub", "Whitepaper"] },
    { pos: "pos-2", icon: "language", color: "bg-blue-500/10 text-blue-500", title: "Market Potential", desc: "TAM analysis and growth capacity within sector.", sources: ["CoinGecko", "Messari"] },
    { pos: "pos-3", icon: "percent", color: "bg-emerald-500/10 text-emerald-500", title: "Financial Model", desc: "Revenue models, tokenomics, and sustainability.", sources: ["Tokenomics", "DefiLlama"] },
    { pos: "pos-4", icon: "lightbulb", color: "bg-amber-500/10 text-amber-500", title: "Problem & Solution", desc: "Validity of the problem and rationality of solution.", sources: ["Pitch Deck", "Competitor Analysis"] },
    { pos: "pos-5", icon: "hub", color: "bg-indigo-500/10 text-indigo-500", title: "Applicability", desc: "Real-world scenarios and use case breadth.", sources: ["Case Studies", "User Data"] },
    { pos: "pos-6", icon: "lock", color: "bg-red-500/10 text-red-500", title: "Security & Compliance", desc: "Technical audits, legal regulations, and risk screening.", sources: ["Certik", "KYC/AML"] },
    { pos: "pos-7", icon: "ads_click", color: "bg-cyan-500/10 text-cyan-500", title: "Market Strategy", desc: "Go-to-market execution and user adoption goals.", sources: ["Roadmap", "Socials"] },
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
