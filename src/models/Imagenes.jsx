import { useVideoTexture, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

export default function Imagenes() {
  const PATH = "/static/textures/";

  const [randomNumber, setRandomNumber] = useState(1);

  const textureProps = useTexture({
    map: PATH + randomNumber + ".jpg",
  });

  const onHandleTextureChange = (event) => {
    setRandomNumber(Math.round(Math.random() * 1) + 1);
    textureProps.map = PATH + randomNumber + ".jpg";

    console.log(textureProps.map);
  };

  return (
    <mesh
      castShadow={true}
      receiveShadow={true}
      rotation={[0, 1, 0]}
      position={[2.9, 0.2, 5]}
      onPointerUp={onHandleTextureChange}
    >
      <boxGeometry args={[0, 3.5, 4.5]} />
      <meshStandardMaterial {...textureProps} toneMapped={false} />
    </mesh>
  );
}
