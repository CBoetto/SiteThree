import React, { useState } from 'react';
import { Html } from '@react-three/drei';

export const Box = () => {

  const [hidden, setVisible] = useState(false);

  const htmlStyle = {
    transition: 'all 0.2s',
    opacity: hidden ? 0 : 1,
    transform: `scale(${hidden ? 0.5 : 1})`
  }

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
      <Html
        style={htmlStyle}
        distanceFactor={1.5}
        position={[0, 0, 0.51]}
        transform
        occlude
        onOcclude={setVisible as (visible: boolean) => null}
      >
        <span>Test HTML</span>
      </Html>

    </mesh>
  )
}