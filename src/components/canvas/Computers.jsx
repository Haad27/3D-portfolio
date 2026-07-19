import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Renders the 3D computer model
const Computers = ({ width }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const meshRef = useRef();

  // Smooth idle rotation sway animation (swings left & right at a calm pace)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.6) * 0.1;
    }
  });

  // Dynamically position/scale based on screen width to prevent text overlaps
  let scale = 0.73;
  let position = [0.8, -3.25, -1.5];

  if (width <= 500) {
    scale = 0.42;
    position = [-1.5, -2.0, -0.8];
  } else if (width <= 800) {
    scale = 0.55;
    position = [-1.8, -2.2, -0.9];
  } else if (width <= 1100) {
    scale = 0.65;
    position = [0.5, -2.8, -1.3];
  }

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.35} groundColor="gray" />
      <pointLight intensity={0.15} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={2048}
      />
      <directionalLight position={[5, 10, 7]} intensity={0.8} castShadow shadow-mapSize={2048} />
      <directionalLight position={[7, 30, 7]} intensity={0.8} castShadow shadow-mapSize={2048} />
      <directionalLight position={[15, 15, 7]} intensity={0.8} castShadow shadow-mapSize={2048} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="always" // Set to always so idle animation renders continuously
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers width={width} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
