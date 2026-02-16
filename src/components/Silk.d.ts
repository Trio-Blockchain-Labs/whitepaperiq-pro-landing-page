import { FC } from "react";

interface SilkProps {
    speed?: number;
    scale?: number;
    color?: string;
    noiseIntensity?: number;
    rotation?: number;
}

declare const Silk: FC<SilkProps>;
export default Silk;
