'use client'

import { useRef, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'
import type { ShowcaseSlide } from '@/lib/showcase-slides'
import { Centerpiece } from './Centerpieces'
import { OrbitIcon } from './OrbitIcons'

/* Position ring for floating peripheral objects so they surround the centerpiece. */
const ORBIT_POSITIONS: [number, number, number][] = [
  [2.55, 0.95, -0.6],
  [-2.6, 0.35, -0.25],
  [2.95, -0.75, 0.2],
  [1.65, -1.55, 0.8],
  [-1.8, -1.35, 0.9],
  [-0.2, 2.0, -0.7],
  [0.35, -2.05, 0.55],
  [-2.95, -0.6, -0.4],
]

/* Mouse-parallax rig: the whole scene leans toward the pointer (depth-of-field feel). */
function Rig({ children }: { children: ReactNode }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    const p = state.pointer
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, p.x * 0.3, 0.05)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -p.y * 0.2, 0.05)
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, p.x * 0.25, 0.05)
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, -p.y * 0.18, 0.05)
  })
  return <group ref={ref}>{children}</group>
}

export function HeroScene({ slide }: { slide: ShowcaseSlide }) {
  const accent = slide.accent
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      {/* Lights */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <pointLight position={[0, 0, 6]} intensity={1.4} color={accent.glow} />
      <pointLight position={[-4, -3, 4]} intensity={0.9} color={accent.glow} />
      <pointLight position={[0, 4, -3]} intensity={0.7} color={accent.glow} />

      {/* Procedural studio environment (Lightformers only  -  zero external files), tinted by the active slide. */}
      <Environment resolution={256}>
        <Lightformer intensity={2.2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#ffffff" />
        <Lightformer intensity={1.4} rotation-x={Math.PI / 2} position={[-5, 5, 0]} scale={[10, 10, 1]} color="#ffffff" />
        <Lightformer intensity={1.4} rotation-x={Math.PI / 2} position={[5, 5, 0]} scale={[10, 10, 1]} color="#ffffff" />
        <Lightformer intensity={2.4} rotation-x={Math.PI} position={[0, -5, 5]} scale={[10, 10, 1]} color={accent.glow} />
      </Environment>

      <Rig>
        <Centerpiece kind={slide.centerpiece} tint={accent.glow} />
        {slide.orbit.map((kind, i) => (
          <OrbitIcon
            key={`${kind}-${i}`}
            kind={kind}
            tint={accent.glow}
            position={ORBIT_POSITIONS[i % ORBIT_POSITIONS.length]}
            scale={i % 3 === 0 ? 1.15 : 0.92}
          />
        ))}
      </Rig>
    </Canvas>
  )
}