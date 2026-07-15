import { memo } from "react";
import LiquidEther from "@/components/LiquidEther";

// Hoisted to a stable module-level reference on purpose: LiquidEther's setup
// effect depends on `colors` by reference, and HeroSection re-renders every
// 40-80ms while its typewriter animation runs. An inline array literal here
// would be a brand-new reference on every one of those re-renders, tearing
// down and recreating the entire WebGL context/shaders/simulation dozens of
// times per second instead of once.
const LIQUID_ETHER_COLORS = ["#5227FF", "#FF9FFC", "#B19EEF"];

function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ pointerEvents: "none" }}>
            <LiquidEther
                mouseForce={12}
                cursorSize={50}
                isViscous={true}
                viscous={50}
                colors={LIQUID_ETHER_COLORS}
                autoSpeed={0.1}
                autoIntensity={1}
                isBounce
                resolution={0.2}
                iterationsViscous={3}
                iterationsPoisson={3}
            />
        </div>
    );
}

// No props, so this trivially skips re-rendering (and re-touching the
// LiquidEther subtree) whenever HeroSection re-renders for unrelated reasons.
export default memo(HeroBackground);
