import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Component to load the 3D model of the computer
const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="gray" />
      <pointLight intensity={1} />
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
        scale={isMobile ? 0.45 : 0.75}
        position={isMobile ? [-2.5, -2.5, -1.0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
const mediaQuery = window.matchMedia('(max-width: 800px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};


export default ComputersCanvas;
