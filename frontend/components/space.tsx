"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";

const Space = () => {
  const ref = useRef<any>(null);

  const positions = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.2 * Math.cbrt(Math.random());

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Space />
    </Canvas>
  </div>
);

export default StarsCanvas;
