import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import {
  Decal, Float, Icosahedron, OrbitControls, Preload, useTexture
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    // the float is  the property that makes the ball float and roatate
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* the moving ball */}
        <icosahedronGeometry args={[1, 1]} />

        {/* now cutomzing those balls  */}
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position = {[0,0,1]}
        rotation = {[2* Math.PI ,0,6.25]}
        flatShading
        map={decal}>

        </Decal>
    </mesh>
    </Float >
  );
};

const BallCanvas = ({ icon  , name}) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} 
               />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
