import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Wireframe } from '@react-three/drei';

const CoreSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.5;
    meshRef.current.rotation.y = t * 0.3;
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 2]}>
      <MeshDistortMaterial 
        color="#00C6FF" 
        attach="material" 
        distort={0.3} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
        emissive="#00C6FF"
        emissiveIntensity={0.5}
        wireframe
      />
    </Icosahedron>
  );
};

const OuterWireframe = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = -t * 0.1;
    meshRef.current.rotation.y = -t * 0.2;
    // Scale pulse
    const scale = 1 + Math.sin(t * 2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Icosahedron ref={meshRef} args={[2.2, 1]}>
      <meshBasicMaterial color="#7F00FF" wireframe transparent opacity={0.3} />
    </Icosahedron>
  );
};

const HeroModel = () => {
  return (
    <div className="w-full h-[50vh] md:h-[70vh]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00F5A0" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00C6FF" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <CoreSphere />
          <OuterWireframe />
        </Float>
      </Canvas>
    </div>
  );
};

export default HeroModel;
