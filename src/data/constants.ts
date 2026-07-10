export const NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
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

export const PRICING_PRO_PLAN = {
    name: "Pro User",
    badge: "Individual",
    monthlyPrice: 120,
    annualMonthlyPrice: 100,
    annualTotal: 1200,
    description: "For independent analysts, VCs and legal professionals who need on-demand wallet & project research.",
    credits: "1,000 general credits included",
    extraCredits: "+1,000 extra credits for $150",
    cta: "Start Free Trial",
};

export const PRICING_GROUPS = [
    {
        id: "core",
        name: "Core Intelligence",
        description: "General-purpose research packages for teams scaling their on-chain investigation workflow.",
        tiers: [
            {
                name: "Tier 1",
                credits: "5,000 Credits",
                description: "For small teams starting to scale their on-chain investigations.",
                monthlyPrice: 599,
                annualMonthlyPrice: 500,
                annualTotal: 6000,
                popular: false,
                cta: "Start Free Trial",
                features: [
                    "5,000 research credits / mo",
                    "Live wallet & token risk scoring",
                    "Counterparty & fund-flow mapping",
                    "Downloadable PDF reports",
                    "Email support",
                ],
            },
            {
                name: "Tier 2",
                credits: "10,000 Credits",
                description: "For growing research teams that need more throughput and seats.",
                monthlyPrice: 849,
                annualMonthlyPrice: 700,
                annualTotal: 8400,
                popular: true,
                cta: "Start Free Trial",
                features: [
                    "10,000 research credits / mo",
                    "Everything in Tier 1",
                    "3 user seats included",
                    "Priority query queue",
                    "API access (beta)",
                ],
            },
        ],
    },
    {
        id: "compliance",
        name: "Compliance & Shield",
        description: "Chainalysis-integrated packages built for VASPs and exchanges — Kointra, Inveo, Bybit TR and similar institutions.",
        tiers: [
            {
                name: "Tier 1",
                credits: "5,000 Credits",
                description: "For VASPs beginning Chainalysis-integrated compliance workflows.",
                monthlyPrice: 799,
                annualMonthlyPrice: 700,
                annualTotal: 8400,
                popular: false,
                cta: "Contact Sales",
                features: [
                    "5,000 credits + Chainalysis-integrated screening",
                    "VASP-ready AML / KYT workflows",
                    "Sanctions & watchlist screening",
                    "Downloadable compliance reports",
                    "Priority support",
                ],
            },
            {
                name: "Tier 2",
                credits: "10,000 Credits",
                description: "For high-volume exchanges needing dedicated compliance coverage.",
                monthlyPrice: 1399,
                annualMonthlyPrice: 1200,
                annualTotal: 14400,
                popular: true,
                cta: "Contact Sales",
                features: [
                    "10,000 credits + Chainalysis-integrated screening",
                    "Everything in Tier 1",
                    "Dedicated compliance analyst",
                    "Custom risk rule sets",
                    "SLA-backed uptime",
                ],
            },
        ],
    },
];

export const TEAM_MEMBERS = [
    {
        name: "Tahsin Büyükyavuz",
        role: "Co-Founder & CEO",
        bio: "Blockchain strategist with expertise in crypto asset evaluation and institutional compliance.",
        icon: "rocket_launch",
        avatar: "/team-tahsin.png",
        linkedin: "https://www.linkedin.com/in/tahsin-b%C3%BCy%C3%BCkyavuz-trio-blockchain-labs/",
        twitter: "https://x.com/tahsinizm42",
    },
    {
        name: "Fatih Altınışık",
        role: "Software Engineer",
        bio: "Architecting scalable backend systems for real-time on-chain data indexing and AI pipelines.",
        icon: "terminal",
        avatar: "/team-fatih.png",
        linkedin: "https://www.linkedin.com/in/fatih-altinisik/",
        twitter: "https://x.com/fatihaltinisikk",
    },
    {
        name: "Kerem Kaya",
        role: "Front-End Developer",
        bio: "Building polished, performant interfaces that bring complex blockchain data to life.",
        icon: "code",
        avatar: "/team-kerem.png",
        linkedin: "https://www.linkedin.com/in/kerem-kaya-1574b0227/",
        twitter: "",
    },
    {
        name: "Azra Ülkebaş",
        role: "Business Development",
        bio: "Strategic partnerships lead with deep connections across exchanges and regulatory bodies.",
        icon: "handshake",
        avatar: "/team-azra.png",
        linkedin: "https://www.linkedin.com/in/azra-%C3%BClkeba%C5%9F-02ab2a284/",
        twitter: "https://x.com/UlkebasAzra",
    },
    {
        name: "F. Sude Genç",
        role: "Software Engineer",
        bio: "Contributing across the full stack with a focus on rapid iteration and quality assurance.",
        icon: "science",
        avatar: "/team-sude.png",
        linkedin: "https://www.linkedin.com/in/sude-genc-2290291b7/",
        twitter: "https://x.com/SudeGenc8607",
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
        { label: "About", href: "#about" },
        { label: "Team", href: "#team" },
        { label: "Contact", href: "mailto:contact@whitepaperiq.com" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/whitepaper-iq-privacy-policy.pdf", target: "_blank" },
        { label: "Terms of Service", href: "/whitepaper-iq-terms-and-conditions.pdf", target: "_blank" },
        { label: "Ad Policy", href: "/whitepaper-iq-ad-policy.pdf", target: "_blank" },
    ],
};
