import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";

interface CharacterModel {
  isRuning: boolean;
}

export function CharacterModel({ isRuning }: CharacterModel) {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/low-polly-character-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (!actions["Running-01"]) return;
    if (isRuning) {
      actions["Running-01"].reset();
      actions["Running-01"].fadeIn(0.2);
      actions["Running-01"].play();
    } else {
      actions["Running-01"].fadeOut(0.1);
    }
  }, [isRuning]);

  return (
    <group
      ref={group}
      dispose={null}
      scale={[0.48, 0.48, 0.48]}
      position={[0, -0.62, 0]}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          //@ts-ignore
          geometry={nodes.Object_7.geometry}
          material={materials.m_body}
          //@ts-ignore
          skeleton={nodes.Object_7.skeleton}
          scale={0.02}
        />
        <skinnedMesh
          name="Object_8"
          //@ts-ignore
          geometry={nodes.Object_8.geometry}
          material={materials.m_face}
          //@ts-ignore
          skeleton={nodes.Object_8.skeleton}
          scale={0.02}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/low-polly-character-transformed.glb");
