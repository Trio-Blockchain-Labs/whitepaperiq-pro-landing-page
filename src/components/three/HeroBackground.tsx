import LiquidEther from "@/components/LiquidEther";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ pointerEvents: "none" }}>
            <LiquidEther
                mouseForce={20}
                cursorSize={160}
                isViscous={false}
                viscous={60}
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                isBounce
                resolution={0.75}
            />
        </div>
    );
}
