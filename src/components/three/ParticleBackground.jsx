import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ mouse, count = 3500 }) {
  const pointsRef = useRef();
  const { size } = useThree();

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#9A5B3F'),
      new THREE.Color('#69724D'),
      new THREE.Color('#B5794A'),
      new THREE.Color('#F8F1E7'),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * 8 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi) - 2;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.025) * 0.15;
    
    if (mouse.current) {
      pointsRef.current.rotation.y += mouse.current.x * 0.0003;
      pointsRef.current.rotation.x += mouse.current.y * 0.0003;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

function FloatingGeometry({ position, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.15;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.15, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.22} />
    </mesh>
  );
}

function Scene({ mouseRef }) {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
  const particleCount = isMobile ? 1200 : 3500;
  const geometries = useMemo(() => [
    { position: [2.5, 1, -1], color: '#9A5B3F', speed: 0.7 },
    { position: [-2.5, 0.5, -0.5], color: '#69724D', speed: 1.1 },
    { position: [1.5, -1.5, -1.5], color: '#B5794A', speed: 0.9 },
    { position: [-1.8, -1, -1], color: '#9A5B3F', speed: 0.6 },
    { position: [3, -0.5, -2], color: '#69724D', speed: 1.3 },
  ], []);

  return (
    <>
      <ParticleField mouse={mouseRef} count={particleCount} />
      {geometries.map((g, i) => (
        <FloatingGeometry key={i} {...g} />
      ))}
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 3, 3]} intensity={0.8} color="#9A5B3F" />
      <pointLight position={[-3, -3, -3]} intensity={0.55} color="#69724D" />
    </>
  );
}

export default function ParticleBackground({ mouseRef }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 70 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene mouseRef={mouseRef} />
    </Canvas>
  );
}
