"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles, MeshDistortMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

const R = 2;

// Lat/long wireframe like the globe in the logo
function GlobeLines() {
  const geometry = useMemo(() => {
    const pts = [];
    const seg = 96;
    for (let lat = -75; lat <= 75; lat += 15) {
      const phi = THREE.MathUtils.degToRad(lat);
      for (let i = 0; i < seg; i++) {
        const a = (i / seg) * Math.PI * 2;
        const b = ((i + 1) / seg) * Math.PI * 2;
        const r = Math.cos(phi) * R;
        const y = Math.sin(phi) * R;
        pts.push(Math.cos(a) * r, y, Math.sin(a) * r, Math.cos(b) * r, y, Math.sin(b) * r);
      }
    }
    for (let lon = 0; lon < 180; lon += 15) {
      const t = THREE.MathUtils.degToRad(lon);
      for (let i = 0; i < seg; i++) {
        const a = (i / seg) * Math.PI * 2;
        const b = ((i + 1) / seg) * Math.PI * 2;
        const p = (ang) => [Math.cos(ang) * Math.cos(t) * R, Math.sin(ang) * R, Math.cos(ang) * Math.sin(t) * R];
        pts.push(...p(a), ...p(b));
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#38bdf8" transparent opacity={0.28} />
    </lineSegments>
  );
}

function fibonacciPoints(n, radius) {
  const arr = new Float32Array(n * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = golden * i;
    arr.set([Math.cos(th) * r * radius, y * radius, Math.sin(th) * r * radius], i * 3);
  }
  return arr;
}

function GlobeDots() {
  const positions = useMemo(() => fibonacciPoints(1400, R * 1.005), []);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#7dd3fc" sizeAttenuation transparent opacity={0.9} />
    </points>
  );
}

// Glowing data arcs between random points on the sphere
function Arcs() {
  const arcs = useMemo(() => {
    const rand = () => new THREE.Vector3().randomDirection().multiplyScalar(R);
    return Array.from({ length: 10 }, () => {
      const a = rand();
      const b = rand();
      const mid = a.clone().add(b).normalize().multiplyScalar(R * 1.55);
      return new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(50);
    });
  }, []);
  const refs = useRef([]);
  useFrame((_, d) => {
    refs.current.forEach((l, i) => {
      if (l?.material) l.material.dashOffset -= d * (0.6 + (i % 3) * 0.2);
    });
  });
  return arcs.map((pts, i) => (
    <Line
      key={i}
      ref={(el) => (refs.current[i] = el)}
      points={pts}
      color={i % 2 ? "#38bdf8" : "#2563eb"}
      lineWidth={1.4}
      dashed
      dashSize={0.35}
      gapSize={0.25}
      transparent
      opacity={0.85}
    />
  ));
}

function Rings() {
  const a = useRef();
  const b = useRef();
  useFrame((_, d) => {
    a.current.rotation.z += d * 0.25;
    b.current.rotation.z -= d * 0.18;
  });
  return (
    <>
      <mesh ref={a} rotation={[Math.PI / 2.4, 0.3, 0]}>
        <torusGeometry args={[2.9, 0.012, 16, 200]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
      </mesh>
      <mesh ref={b} rotation={[Math.PI / 1.7, -0.5, 0]}>
        <torusGeometry args={[3.3, 0.008, 16, 200]} />
        <meshBasicMaterial color="#2563eb" transparent opacity={0.5} />
      </mesh>
      <Satellite radius={2.9} speed={0.6} tilt={[Math.PI / 2.4, 0.3, 0]} />
      <Satellite radius={3.3} speed={-0.4} tilt={[Math.PI / 1.7, -0.5, 0]} color="#7dd3fc" />
    </>
  );
}

function Satellite({ radius, speed, tilt, color = "#38bdf8" }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t) * radius, 0);
  });
  return (
    <group rotation={tilt}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function Globe() {
  const group = useRef();
  useFrame(({ pointer }, d) => {
    group.current.rotation.y += d * 0.12;
    // Ease toward the pointer for a subtle parallax tilt
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.25, 0.05);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.x * 0.3, 0.05);
  });
  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[R * 0.97, 64, 64]} />
        <MeshDistortMaterial color="#0b2a5c" emissive="#0a3d91" emissiveIntensity={0.6} roughness={0.2} metalness={0.8} distort={0.18} speed={1.5} transparent opacity={0.85} />
      </mesh>
      <mesh scale={1.18}>
        <sphereGeometry args={[R, 48, 48]} />
        <meshBasicMaterial color="#1e90ff" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
      <GlobeLines />
      <GlobeDots />
      <Arcs />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 11], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#38bdf8" />
      <pointLight position={[-6, -3, 2]} intensity={40} color="#2563eb" />
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
        <Globe />
        <Rings />
      </Float>
      <Sparkles count={120} scale={[12, 8, 6]} size={2.2} speed={0.4} color="#7dd3fc" />
      <Stars radius={60} depth={40} count={2500} factor={3} saturation={0} fade speed={0.6} />
    </Canvas>
  );
}
