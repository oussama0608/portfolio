import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { canUseWebGL } from "../../utils/webgl";
import CanvasFallbackBoundary from "./CanvasFallbackBoundary";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [webglReady, setWebglReady] = useState(false);

  useEffect(() => {
    setWebglReady(canUseWebGL());
  }, []);

  if (!webglReady) {
    return <EarthFallback />;
  }

  return (
    <CanvasFallbackBoundary fallback={<EarthFallback />}>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 1.5]}
        gl={{ preserveDrawingBuffer: false, powerPreference: "low-power" }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </CanvasFallbackBoundary>
  );
};

const EarthFallback = () => (
  <div className='w-full h-full min-h-[300px] flex items-center justify-center'>
    <div className='w-[260px] h-[260px] rounded-full green-pink-gradient opacity-40 blur-2xl' />
  </div>
);

export default EarthCanvas;
