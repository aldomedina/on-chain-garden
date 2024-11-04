import Character from "@/3D/components/Character";
import Floor from "@/3D/components/Floor";
import Lights from "@/3D/components/Lights";
import { TestSolid } from "@/3D/components/TestSolid";
import { Casa } from "@/3D/components/Casa";
import { keyboardMap } from "@/utils";
import { Grid, KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

const GardenScene = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 65,
        near: 0.1,
        far: 1000,
        position: [0, 0, -1],
      }}
      onPointerDown={(e: React.PointerEvent<HTMLDivElement>) => {
        //@ts-ignore
        e.target.requestPointerLock();
      }}
    >
      <Grid
        infiniteGrid
        followCamera
        sectionColor={"lightgray"}
        cellColor={"gray"}
        position={[0, -0.99, 0]}
      />
      <Lights />
      <Physics debug={false} timeStep="vary">
        <KeyboardControls map={keyboardMap}>
          <Character />
        </KeyboardControls>
        <Floor />
        {/* <TestSolid /> */}
        <Casa position={[0, -1, 0]} scale={[1.1, 1.1, 1.1]} />
      </Physics>
    </Canvas>
  );
};

export default GardenScene;
