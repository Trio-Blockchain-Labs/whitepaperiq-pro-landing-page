import React, { CSSProperties } from 'react';

export interface GridScanProps {
    enableWebcam?: boolean;
    showPreview?: boolean;
    modelsPath?: string;
    sensitivity?: number;
    lineThickness?: number;
    linesColor?: string;
    scanColor?: string;
    scanOpacity?: number;
    gridScale?: number;
    lineStyle?: 'solid' | 'dashed' | 'dotted';
    lineJitter?: number;
    scanDirection?: 'top-down' | 'bottom-up' | 'pingpong';
    enablePost?: boolean;
    bloomIntensity?: number;
    bloomThreshold?: number;
    bloomSmoothing?: number;
    chromaticAberration?: number;
    noiseIntensity?: number;
    scanGlow?: number;
    scanSoftness?: number;
    scanPhaseTaper?: number;
    scanDuration?: number;
    scanDelay?: number;
    enableGyro?: boolean;
    scanOnClick?: boolean;
    snapBackDelay?: number;
    className?: string;
    style?: CSSProperties;
}

export declare const GridScan: React.FC<GridScanProps>;
