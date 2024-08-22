import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird1.glb";

export function Bird1() {
  const bird1Ref = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, bird1Ref);

  // Play the "Take 001" animation when the component mounts
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    bird1Ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (bird1Ref.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      bird1Ref.current.rotation.y = Math.PI;
    } else if (bird1Ref.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      bird1Ref.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (bird1Ref.current.rotation.y === 0) {
      // Moving forward
      bird1Ref.current.position.x += 0.01;
      bird1Ref.current.position.z -= 0.01;
    } else {
      // Moving backward
      bird1Ref.current.position.x -= 0.01;
      bird1Ref.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={bird1Ref} position={[8, 2, -8]} scale={[0.007, 0.007, 0.007]}>
      <primitive object={scene} />
    </mesh>
  );
}
