import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import typrscriptImg from '../assets/images/typescript.png'
import javascriptImg from '../assets/images/js.png'
import reactImg from '../assets/images/science.png'
import nodeImg from '../assets/images/node.png'
import React from 'react'

function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const [hovered, hover] = useState(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 1 : 0, 4, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
    </group>
  )
}

export function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url={nodeImg} scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url={nodeImg} scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url={nodeImg} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url={nodeImg} scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url={nodeImg} scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url={nodeImg} scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url={nodeImg} scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url={nodeImg} scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url={nodeImg} scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </Scroll>
  )
}
