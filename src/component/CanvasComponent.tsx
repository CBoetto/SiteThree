import React from 'react';
import { Canvas } from '@react-three/fiber'
import { Macintosh } from './Macintosh';
// import { Box } from './BoxHtml';

export const CanvasComponent = () => {
  return (
    <Canvas>
      {/* <ambientLight intensity={0.5} />
      <pointLight position={[10,10,5]} />
      <pointLight position={[-10,-10,-10]} />
      <Box /> */}
      {/* <Box /> */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10,10,5]} />
      <pointLight position={[-10,-10,-10]} />
      <Macintosh />
      {/* <mesh>
              <boxGeometry />
      <meshStandardMaterial />
      </mesh> */}
    </Canvas>
  );
}
