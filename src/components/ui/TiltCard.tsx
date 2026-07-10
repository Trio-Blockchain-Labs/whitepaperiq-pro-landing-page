import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const springValues = { damping: 30, stiffness: 100, mass: 2 };

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    rotateAmplitude?: number;
    scaleOnHover?: number;
}

export default function TiltCard({
    children,
    className = "",
    rotateAmplitude = 8,
    scaleOnHover = 1.02,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
        rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
    }

    return (
        <div
            ref={ref}
            className={`h-full [perspective:800px] motion-reduce:[perspective:none] ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
                className="h-full motion-reduce:!transform-none"
            >
                {children}
            </motion.div>
        </div>
    );
}
