"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Environment, Lightformer, PresentationControls, ContactShadows } from "@react-three/drei";

function Knot() {
  const ref = useRef();
  useFrame((_, d) => {
    ref.current.rotation.x += d * 0.2;
    ref.current.rotation.y += d * 0.3;
  });
  return (
    <mesh ref={ref} scale={0.9}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <meshStandardMaterial color="#1e90ff" metalness={1} roughness={0.12} envMapIntensity={1.4} />
    </mesh>
  );
}

function Shape({ position, children, speed = 2, color, wobble }) {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position}>
        {children}
        {wobble ? (
          <MeshWobbleMaterial color={color} factor={0.4} speed={1.5} metalness={0.7} roughness={0.2} />
        ) : (
          <MeshDistortMaterial color={color} distort={0.35} speed={2} metalness={0.8} roughness={0.15} />
        )}
      </mesh>
    </Float>
  );
}

export default function ShowcaseScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 5]} intensity={2} color="#7dd3fc" />
      <pointLight position={[-4, -2, 3]} intensity={50} color="#2563eb" />
      {/* Studio reflections built in-scene: no HDR download, so nothing can fail or stall on the network */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={4} color="#ffffff" position={[0, 5, -6]} scale={[10, 2, 1]} />
        <Lightformer form="rect" intensity={3} color="#7dd3fc" position={[-6, 1, 0]} rotation-y={Math.PI / 2} scale={[8, 3, 1]} />
        <Lightformer form="rect" intensity={3} color="#2563eb" position={[6, -1, 0]} rotation-y={-Math.PI / 2} scale={[8, 3, 1]} />
        <Lightformer form="ring" intensity={2} color="#38bdf8" position={[0, 0, 6]} scale={4} />
      </Environment>
      <PresentationControls global polar={[-0.4, 0.4]} azimuth={[-0.8, 0.8]} snap>
        <Float speed={1.5} rotationIntensity={0.4}>
          <Knot />
        </Float>
        <Shape position={[-2.6, 1.3, -1]} color="#38bdf8">
          <icosahedronGeometry args={[0.55, 1]} />
        </Shape>
        <Shape position={[2.7, -1.2, -0.5]} color="#2563eb" speed={2.5}>
          <sphereGeometry args={[0.5, 64, 64]} />
        </Shape>
        <Shape position={[2.4, 1.6, -1.5]} color="#7dd3fc" wobble>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
        </Shape>
        <Shape position={[-2.3, -1.5, 0]} color="#1d4ed8" wobble speed={1.8}>
          <torusGeometry args={[0.4, 0.16, 32, 64]} />
        </Shape>
      </PresentationControls>
      <ContactShadows position={[0, -2.6, 0]} opacity={0.5} scale={12} blur={2.5} far={4} color="#1e90ff" />
    </Canvas>
  );
}
