import React, { useEffect, useRef } from "react";
import { ContactShadows, Environment, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { StarWarModel } from "./model";
import { easing } from "maath";


gsap.registerPlugin(ScrollTrigger);

export default function StarWarDesign({ progress }) {
  const cameraRef = useRef(null);

  useFrame((state,delta) => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(2, 1, 0); // Keep camera focused on the model
  
  }
  });

  useEffect(() => {
    if (!cameraRef.current) return; // Ensure the camera exists

    const positions = [
      
    [0, 3, 10], //Side view
    [-7, 3, 0],
      
    ];

    const totalSegments = positions.length - 1; // Number of segments
    const segmentProgress = 1 / totalSegments; // Progress per segment
    let segmentIndex = Math.floor(progress / segmentProgress);

    // Clamp the index to avoid out-of-bounds errors
    segmentIndex = Math.max(0, Math.min(segmentIndex, totalSegments - 1));

    const percentage = (progress - segmentIndex * segmentProgress) / segmentProgress;

    // Get start and end positions safely
    const startPos = positions[segmentIndex];
    const endPos = positions[segmentIndex + 1];

    if (!startPos || !endPos) return; // Safety check

    // Interpolated values for smooth transition
    const x = startPos[0] + (endPos[0] - startPos[0]) * percentage;
    const y = startPos[1] + (endPos[1] - startPos[1]) * percentage;
    const z = startPos[2] + (endPos[2] - startPos[2]) * percentage;

    cameraRef.current.position.set(x, y, z); // Directly update position

  }, [progress]); // Re-run whenever `progress` changes



  return (
    <>

      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[0, 3, 10]} // Initial position
      />

      {/* Lighting Setup */}
       <ContactShadows scale={100} position={[0, -7.5, 0]} blur={1} far={100} opacity={0.85} />
      <ambientLight intensity={1} /> {/* Soft overall light */}
      <spotLight position={[0, 10, 10]} penumbra={1} castShadow angle={0.2} />
      <directionalLight
        position={[0, 1, 1]} // Light from the top-right
        intensity={2}
        castShadow // Enable shadows
        shadow-mapSize-width={2048} // Shadow quality
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[0, 100, 360]} // Light from the top-right
        intensity={2}
        castShadow // Enable shadows
        shadow-mapSize-width={2048} // Shadow quality
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[0, 0, 360]} // Light from the top-right
        intensity={2}
        castShadow // Enable shadows
        shadow-mapSize-width={2048} // Shadow quality
        shadow-mapSize-height={2048}
      />
      <pointLight
        position={[-10, 15, 15]} // Light from the left
        intensity={0.8}
        color="#ffcc99" // Warm light color
      />
      <spotLight
        position={[100, 10, 10]} // Light from above
        angle={0.3} // Cone angle
        intensity={2}
        penumbra={0.5} // Soft edges
        castShadow // Enable shadows
      />

      {/* Environment and Model */}
      <Environment preset="city" /> {/* Adds realistic environment lighting */}
      <StarWarModel rotation={[0.1, 1.5, 0.2]} />
    </>
  );
}