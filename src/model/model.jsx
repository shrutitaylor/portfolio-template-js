import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';

export function StarWarModel(props) {
  const { nodes, materials } = useGLTF('/portfolio-template-js/lego_star_wars_iii_clone_trooper.glb');
  const groupRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      groupRef.current.position,
      { y: 1 }, // Start below the scene
      { y: 0, duration: 2, ease: 'power3.out' }
    )
    gsap.fromTo(
      groupRef.current.scale,
      { x: 0, y: 1, z: 0 }, // Start from zero scale
      { x: 12, y: 12, z: 12, duration: 2, ease: 'back.out(1.7)' }
    )
  }, []);

  return (
    <group scale={12}  ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.mat_154}
        position={[-0.016, 0.313, 0.172]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['mat_147.001']}
        position={[-0.077, 0.205, 0.057]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['mat_151.001']}
        position={[-0.028, 0.205, 0.119]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['mat_148.001']}
        position={[0.013, 0.205, 0.159]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['mat_144.001']}
        position={[-0.001, 0.249, 0.154]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['mat_144.001']}
        position={[-0.017, 0.18, 0.134]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['mat_139.001']}
        position={[-0.013, 0.291, 0.153]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['mat_141.001']}
        position={[-0.011, 0.057, 0.129]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.mat_192}
        position={[-0.026, 0.288, 0.118]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.mat_165}
        position={[-0.024, 0.303, 0.12]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.mat_161}
        position={[-0.006, 0.109, 0.138]}
        rotation={[1.688, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.mat_159}
        position={[-0.079, 0.241, 0.06]}
        rotation={[1.688, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/portfolio-template-js/lego_star_wars_iii_clone_trooper.glb');
