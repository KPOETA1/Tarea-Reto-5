import { useVideoTexture } from "@react-three/drei";
import React, { useRef, useState } from "react";

export default function Video() {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const props = {
    start: playVideo,
    sound: true,
    loop: false,
    muted: false,
  };

  const texture = useVideoTexture("/static/sid.mp4", props);
  const onHandleVideoPlay = (event) => {
    setPlayVideo(!playVideo);
  };

  return (
    <>
      <mesh
        castShadow={true}
        receiveShadow={true}
        position={[-2.8, 0, 5]}
        onPointerUp={onHandleVideoPlay}
        rotation={[0, 5.5, 0]}
      >
        <boxGeometry args={[0.09, 3.5, 4.5]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </>
  );
}
