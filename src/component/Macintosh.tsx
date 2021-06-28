// import React, { useRef, useState, useMemo } from 'react';
// import { Canvas, ThreeEvent, useFrame, useLoader } from 'react-three-fiber';
// import React, { Suspense, useRef, useMemo } from 'react';
import React, { Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
// import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import macintoshTexture from '../assets/Mac.Tri.Baked_baseColor.png';
import MacintoshModel from './MacintoshAuto';

export const Macintosh = (props: any) => {
  // const mesh = useRef<THREE.Mesh>();

  // const macMesh = useLoader(GLTFLoader, 'macintosh.glb');

  // const [active, setActive] = useState(false);

  // useFrame(() => {
  //   if (!!mesh.current) {
  //     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  //   }
  // })

  // const texture = useMemo(() => new THREE.TextureLoader().load(macintoshTexture), []);

  return (
    <Suspense fallback={null}>
      <MacintoshModel />
    </Suspense>
  )
}