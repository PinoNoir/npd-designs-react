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
      // Smooth rotation
      mesh.current.rotation.z = clock.getElapsedTime() * 0.1;
      
      // Smooth scale transition on hover
      const targetScale = hover.current ? 1.8 : 1.5;
      mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
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
        envMapIntensity={hover.current ? 1.5 : 1.2}
        clearcoat={hover.current ? 1.5 : 1.3}
        clearcoatRoughness={hover.current ? 0.2 : 0.25}
        metalness={0.01}
        distort={hover.current ? 0.6 : 0.4}
        speed={hover.current ? 1.5 : 1}
        roughness={0.4}
        transmission={0.8}
        thickness={0.5}
        ior={1.5}
      />
    </mesh>
  );
};

export default Blob; 