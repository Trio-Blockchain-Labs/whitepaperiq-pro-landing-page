import LiquidEther from "@/components/LiquidEther";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ pointerEvents: "none" }}>
            <LiquidEther
                mouseForce={12}
                cursorSize={50}
                isViscous={true}
                viscous={50}
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                autoSpeed={0.1}
                autoIntensity={1}
                isBounce
                resolution={0.3}
                iterationsViscous={5}
                iterationsPoisson={5}
            />
        </div>
    );
}
