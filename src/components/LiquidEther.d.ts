import { FC } from "react";

interface LiquidEtherProps {
    mouseForce?: number;
    cursorSize?: number;
    isViscous?: boolean;
    viscous?: number;
    colors?: string[];
    autoDemo?: boolean;
    autoSpeed?: number;
    autoIntensity?: number;
    isBounce?: boolean;
    resolution?: number;
    iterationsViscous?: number;
    iterationsPoisson?: number;
    dt?: number;
    BFECC?: boolean;
    takeoverDuration?: number;
    autoResumeDelay?: number;
    autoRampDuration?: number;
    style?: React.CSSProperties;
    className?: string;
}

declare const LiquidEther: FC<LiquidEtherProps>;
export default LiquidEther;
