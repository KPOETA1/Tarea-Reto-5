import { OrbitControls, Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Floor from "./models/Floor";
import Video from "./models/Video";
import Imagenes from "./models/Imagenes";

export default function Experience() {
  return (
    <>



      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />
      <Sky />
      <Video />
      <Imagenes />
      <Floor />
    </>
  );
}
