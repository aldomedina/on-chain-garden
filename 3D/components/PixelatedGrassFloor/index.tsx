import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";
import grass from "@/assets/images/grass.jpg";
export default function Floor() {
  const texture = useTexture(grass.src);
  texture.wrapS = texture.wrapT = RepeatWrapping;

  return (
    <RigidBody type="fixed">
      <mesh receiveShadow position={[0, -1.25, 0]}>
        <boxGeometry args={[300, 0.5, 300]} />
        <meshStandardMaterial
          map={texture}
          map-repeat={[240, 240]}
          color="#333"
        />
      </mesh>
    </RigidBody>
  );
}
