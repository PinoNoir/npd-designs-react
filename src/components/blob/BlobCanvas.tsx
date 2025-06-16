import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Blob from './Blob';
import styles from './Blob.module.css';

const BlobCanvas = () => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={true}
          minDistance={2}
          maxDistance={10}
          enablePan={false}
        />
        <Blob />
      </Canvas>
    </div>
  );
};

export default BlobCanvas; 