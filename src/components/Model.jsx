import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Model({ url }) {
  const gltfRef = useRef();
  const [scale, setScale] = useState(12); // Set initial scale to 2 (200% bigger)

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      gltfRef.current.add(gltf.scene); // Add the glTF scene to the model's reference
    });
  }, [url]);

  useFrame(() => {
    gltfRef.current.rotation.y += 0.01; // Rotate the model on each frame
  });

  return (
    <group ref={gltfRef} scale={[scale, scale, scale]}>
      {/* The model will be scaled and rotated */}
    </group>
  );
}
