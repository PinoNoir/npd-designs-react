import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { MeshDistortMaterial } from '@react-three/drei';

const Blob = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const hover = useRef(false);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={1.5}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[1, 8]} />
      <MeshDistortMaterial
        color="#8352FD"
        envMapIntensity={1.2}
        clearcoat={1.3}
        clearcoatRoughness={0.25}
        metalness={0.01}
        distort={0.4}
        speed={1}
        roughness={0.4}
        transmission={0.8}
        thickness={0.5}
        ior={1.5}
      />
    </mesh>
  );
};

export default Blob; 