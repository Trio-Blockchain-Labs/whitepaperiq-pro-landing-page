# WhitePaper IQ – B2B Landing Page Implementation Plan

---

## Product Context

### What is WhitePaper IQ?

**WhitePaper IQ** is a **B2B SaaS platform** that provides **automated, institutional-grade crypto due diligence**. It's built for the people who deploy serious capital into crypto — **venture capital funds, hedge funds, exchanges, OTC desks, and regulatory bodies** — who need to vet tokens and projects before allocating millions.

### The Problem

Before listing a token or making an investment, institutions must perform exhaustive due diligence:

- Read 40+ page whitepapers and verify claims against reality
- Analyze on-chain wallet distribution for centralization risks
- Check exchange volumes for wash trading
- Screen for AML/sanctions exposure (OFAC, mixers, dark web)
- Assess team credibility, treasury health, and development activity

This process is **manual, slow (days/weeks), and error-prone**. A single missed red flag — like an "unlocked liquidity" that the whitepaper claims is locked — can mean millions in losses.

### The Solution

WhitePaper IQ **automates the entire due diligence pipeline** using AI + on-chain data:

1. **Ingest** a project's whitepaper (PDF/Gitbook), smart contracts, and social presence
2. **Cross-reference** every claim against live on-chain data (wallet balances, contract state, tx history)
3. **Score** the project across a **proprietary 7-criteria framework**
4. **Generate** a professional PDF report ready for investment committees

### Key Modules (as shown on the landing page)

| Module | Purpose |
|---|---|
| **Risk Detection Engine** | Detects mismatches between whitepaper claims and on-chain reality (e.g., "Liquidity Locked 12 Months" vs. actually unlocked in deployer wallet) |
| **IQ Bot AI** (Beta) | Natural language queries over on-chain data — "Show me wallets that bought >$1M in the last hour" |
| **AML & Criminal Detection** | Entity-linking graph to visualize illicit fund flows, mixer usage, sanctions evasion |
| **PoR Engine** | Real-time Proof-of-Reserves: connects to exchange cold wallets, generates solvency certificates |
| **Due Diligence Suite** | 8 sub-modules: Top Holders, Exchange Tracking, Institutional Holdings, Social & Dev Metrics, Smart Money Flows, Treasury Runway, Proof of Reserves, Price History |
| **7-Criteria Framework** | Tech & Innovation, Market Potential, Financial Model, Problem & Solution, Applicability, Security & Compliance, Market Strategy — each scored with sources |
| **PDF Report Export** | Professional, branded reports exportable for VC/exchange investment committees |

### Data Sources
Arkham (wallet intelligence), CoinGecko (market data), OpenAI (AI analysis), Dune (on-chain analytics)

### Pricing Model
- **Analyst** ($99/mo) — Solo researchers, angel investors; 10 reports/mo
- **Enterprise** (Custom) — Funds, exchanges; unlimited analysis, API, dedicated support

### Landing Page Purpose

This is a **B2B sales-oriented landing page** designed to:
1. Immediately demonstrate credibility via a live BTC analysis mockup in the hero
2. Show the risk detection value prop with a dramatic "mismatch alert" visual
3. Showcase advanced modules (IQ Bot, AML, PoR) for enterprise buyers
4. Present the exhaustive due diligence suite to prove depth
5. Visualize the 7-criteria framework to convey rigor
6. Display the professional PDF output to show deliverable quality
7. Convert visitors via pricing and "Book Demo" CTAs

---

## Technical Plan

### Project Setup

```bash
npx -y create-vite@latest ./ --template react-ts
npm install tailwindcss @tailwindcss/vite
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react
npx shadcn@latest init
npx shadcn@latest add button card sheet separator
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three
```

---

### Three.js Hero Background

A **particle network** animation behind the hero, evoking a blockchain/node graph:
- ~80 floating purple particles with faint connecting lines
- Gentle orbital drift via `@react-three/fiber`
- Positioned behind hero text via CSS `z-index`
- Reinforces the **on-chain data intelligence** brand identity

---

### shadcn/ui Components

| Component | Where | Why |
|---|---|---|
| `Button` | Navbar, Hero, Pricing, PDF section CTAs | Consistent interactive elements with variants |
| `Card` | Pricing tiers, Due Diligence feature cards | Structured layout with proper semantics |
| `Sheet` | Mobile navbar | Slide-over navigation on small screens |
| `Separator` | Footer, section transitions | Visual consistency |

---

### File Structure

```
src/
├── App.tsx
├── main.tsx
├── index.css                         # Tailwind + shadcn vars + custom CSS
├── lib/utils.ts                      # cn() utility
├── components/
│   ├── ui/                           # shadcn (auto-generated)
│   ├── three/HeroBackground.tsx      # R3F particle network
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TrustLogos.tsx
│       ├── RiskDetection.tsx
│       ├── InstitutionalFeatures.tsx
│       ├── Interlude.tsx
│       ├── DueDiligenceSuite.tsx
│       ├── RadialCircle.tsx
│       ├── PDFReport.tsx
│       └── PricingSection.tsx
└── data/constants.ts                 # All static content/data
```

---

### Component → Section Mapping

| Section | Component | Key Details |
|---|---|---|
| Fixed navbar | `Navbar` | Glass effect + `Sheet` mobile menu + `Button` CTAs |
| Hero + BTC mockup | `HeroSection` | Three.js particle bg + 3D browser frame with live analysis |
| Trust logos | `TrustLogos` | Arkham, CoinGecko, OpenAI, Dune — grayscale |
| Risk Detection | `RiskDetection` | PDF card + mismatch alert overlay (the "aha" moment) |
| Feature trio | `InstitutionalFeatures` | IQ Bot chat, AML graph SVG, PoR solvency bar |
| Mission statement | `Interlude` | "Autonomous Intelligence. Institutional Depth." |
| Due Diligence Suite | `DueDiligenceSuite` | 8 `Card`s with inline data widgets |
| 7-Criteria Circle | `RadialCircle` | CSS radial layout → stacked on mobile |
| PDF Report | `PDFReport` | Scrollable PDF mock with 3D perspective |
| Pricing | `PricingSection` | 2 `Card` tiers: Analyst + Enterprise |
| Footer | `Footer` | Brand + Product/Company/Legal columns + social |

---

## Verification Plan

1. `npm run dev` + `npx tsc --noEmit` — zero errors
2. Side-by-side visual comparison with `code.html`
3. Responsive check: 1440px / 768px / 375px
4. Dark mode, hover animations, Three.js background rendering
5. Mobile nav via Sheet, smooth scroll via anchor links
