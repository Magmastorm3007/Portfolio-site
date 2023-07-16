import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef,useEffect } from 'react';

export default function Model({ url }) {
  const gltfRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {    
      gltfRef.current.scene.add(gltf.scene);
    });
  }, [url]);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group ref={gltfRef} />
    </Canvas>
  );
}
