import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleNetwork() {
    const pointsRef = useRef<THREE.Points>(null);
    const linesRef = useRef<THREE.LineSegments>(null);

    const count = 80;
    const connectionDistance = 2.5;

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities: THREE.Vector3[] = [];
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
            velocities.push(
                new THREE.Vector3(
                    (Math.random() - 0.5) * 0.005,
                    (Math.random() - 0.5) * 0.005,
                    (Math.random() - 0.5) * 0.005
                )
            );
        }
        return { positions, velocities };
    }, []);

    const linePositions = useMemo(() => new Float32Array(count * count * 6), []);

    useFrame(() => {
        if (!pointsRef.current || !linesRef.current) return;
        const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            pos[i * 3] += particles.velocities[i].x;
            pos[i * 3 + 1] += particles.velocities[i].y;
            pos[i * 3 + 2] += particles.velocities[i].z;

            // Bounce
            for (let d = 0; d < 3; d++) {
                const limit = d === 0 ? 5 : d === 1 ? 4 : 3;
                if (Math.abs(pos[i * 3 + d]) > limit) {
                    if (d === 0) particles.velocities[i].x *= -1;
                    if (d === 1) particles.velocities[i].y *= -1;
                    if (d === 2) particles.velocities[i].z *= -1;
                }
            }
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Draw connections
        let lineIdx = 0;
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = pos[i * 3] - pos[j * 3];
                const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
                const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < connectionDistance) {
                    linePositions[lineIdx++] = pos[i * 3];
                    linePositions[lineIdx++] = pos[i * 3 + 1];
                    linePositions[lineIdx++] = pos[i * 3 + 2];
                    linePositions[lineIdx++] = pos[j * 3];
                    linePositions[lineIdx++] = pos[j * 3 + 1];
                    linePositions[lineIdx++] = pos[j * 3 + 2];
                }
            }
        }

        const lineGeom = linesRef.current.geometry;
        lineGeom.setAttribute(
            "position",
            new THREE.BufferAttribute(linePositions.slice(0, lineIdx), 3)
        );
        lineGeom.attributes.position.needsUpdate = true;
        lineGeom.setDrawRange(0, lineIdx / 3);
    });

    return (
        <>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={particles.positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial color="#8c25f4" size={0.06} transparent opacity={0.7} sizeAttenuation />
            </points>
            <lineSegments ref={linesRef}>
                <bufferGeometry />
                <lineBasicMaterial color="#8c25f4" transparent opacity={0.12} />
            </lineSegments>
        </>
    );
}

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }} style={{ background: "transparent" }}>
                <ParticleNetwork />
            </Canvas>
        </div>
    );
}
