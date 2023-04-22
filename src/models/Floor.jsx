import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import suelo from './suelo.jpg'

export default function Floor() {
  const floorRef = useRef();
  const [floorTexture] = useLoader(TextureLoader, [suelo]);

  return (
    <mesh ref={floorRef} receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[15, 15]} />
      <meshStandardMaterial map={floorTexture} roughness={1} metalness={0} />
    </mesh>
  );
}
