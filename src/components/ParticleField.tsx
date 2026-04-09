'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 2000 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    });
  }

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const neonColors = [
      [0, 0.96, 1],      // cyan
      [0.62, 0, 1],      // purple
      [1, 0, 0.67],      // pink
      [0, 1, 0.53],      // green
    ];

    for (let i = 0; i < count; i++) {
      const r = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      const brightness = 0.3 + Math.random() * 0.7;
      colors[i * 3] = color[0] * brightness;
      colors[i * 3 + 1] = color[1] * brightness;
      colors[i * 3 + 2] = color[2] * brightness;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0002;
      mesh.current.rotation.y += 0.0003;
      mesh.current.rotation.x += mouse.current.y * 0.0005;
      mesh.current.rotation.y += mouse.current.x * 0.0005;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function FloatingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3;
      ring1.current.rotation.y = t * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.2;
      ring2.current.rotation.z = t * 0.15;
    }
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.25;
      ring3.current.rotation.z = -t * 0.1;
    }
  });

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[6, 0.015, 16, 100]} />
        <meshBasicMaterial color="#9d00ff" transparent opacity={0.2} />
      </mesh>
      <mesh ref={ring3} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[8, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ff00aa" transparent opacity={0.15} />
      </mesh>
    </>
  );
}

export default function ParticleField() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Particles count={2500} />
      <FloatingRings />
    </>
  );
}
