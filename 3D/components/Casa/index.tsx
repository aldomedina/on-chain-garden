//@ts-nocheck

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 casa 4_11.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide, MeshStandardMaterial } from "three";

export function Casa(props) {
  const { nodes, materials } = useGLTF("/models/casa4_11.glb");
  const material = new MeshStandardMaterial({
    color: "white",
    side: DoubleSide,
  });
  return (
    <group {...props} dispose={null}>
      <group
        position={[5.037, 0.391, -5.29]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.001}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={[0.75, 0.75, 0.75]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial001.geometry}
            material={material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial002.geometry}
            material={material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial003.geometry}
            material={material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial004.geometry}
            material={material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial005.geometry}
            material={material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial006.geometry}
            material={material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
      <group>
        <mesh
          geometry={nodes.Plane.geometry}
          material={material}
          position={[1, 0, -1]}
        />
        <mesh
          geometry={nodes.Plane001.geometry}
          material={material}
          position={[1, 0, -1]}
        />
        <mesh
          geometry={nodes.Plane002.geometry}
          material={material}
          position={[1, 0, -1]}
        />
        <mesh
          geometry={nodes.Plane003.geometry}
          material={material}
          position={[1, 0, -1]}
        />
        <mesh
          geometry={nodes.Plane004.geometry}
          material={material}
          position={[1, 0, -1]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/casa4_11.glb");
