/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 casa-4.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide, MeshStandardMaterial } from "three";

export function Casa(props) {
  const { nodes, materials } = useGLTF("/models/casa-4.glb");

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} position={[1, 0, -1]}>
        <meshStandardMaterial side={DoubleSide} />
      </mesh>
      <mesh geometry={nodes.Plane001.geometry} position={[1, 0, -1]}>
        <meshStandardMaterial side={DoubleSide} />
      </mesh>
      <mesh geometry={nodes.Plane002.geometry} position={[1, 0, -1]}>
        <meshStandardMaterial side={DoubleSide} />
      </mesh>
      <mesh geometry={nodes.Plane003.geometry} position={[1, 0, -1]}>
        <meshStandardMaterial side={DoubleSide} />
      </mesh>
      <mesh geometry={nodes.Plane004.geometry} position={[1, 0, -1]}>
        <meshStandardMaterial side={DoubleSide} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/casa-4.glb");