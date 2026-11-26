'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'
import type { SlideCenterpiece } from '@/lib/showcase-slides'

/* ------------------------------------------------------------------ */
/*  1 · Slide: Ashan AI Labs  -  glossy neural core + glowing torus ring  */
/* ------------------------------------------------------------------ */
function AICore({ tint }: { tint: string }) {
  const nodes = useRef<THREE.Group>(null)

  useFrame((_, dt) => {
    if (nodes.current) {
      nodes.current.rotation.y += dt * 0.5
      nodes.current.rotation.x = Math.sin(nodes.current.rotation.y * 1.5) * 0.15
    }
  })

  return (
    <group>
      {/* Glass transmission torus ring */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.1}>
        <mesh rotation={[Math.PI / 2.2, 0.2, 0]}>
          <torusGeometry args={[1.05, 0.16, 32, 90]} />
          <MeshTransmissionMaterial
            backside
            thickness={0.5}
            roughness={0.12}
            transmission={0.98}
            ior={1.42}
            chromaticAberration={0.45}
            distortion={0.35}
            color="#ffffff"
          />
        </mesh>
        {/* Secondary accelerating ring */}
        <mesh rotation={[0, Math.PI / 4, Math.PI / 1.7]}>
          <torusGeometry args={[1.2, 0.06, 24, 80]} />
          <meshStandardMaterial emissive={tint} emissiveIntensity={1.5} color="#14121f" metalness={0.4} roughness={0.3} />
        </mesh>
      </Float>

      {/* Glowing neural core */}
      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.9}>
        <mesh>
          <sphereGeometry args={[0.42, 48, 48]} />
          <meshPhysicalMaterial emissive={tint} emissiveIntensity={1.9} color="#12101f" metalness={0.6} roughness={0.15} clearcoat={1} clearcoatRoughness={0.1} />
        </mesh>
      </Float>

      {/* Orbiting data nodes */}
      <group ref={nodes}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 1.55 + (i % 2) * 0.4
          const y = Math.sin(angle * 2) * 0.55
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]} scale={[0.16, 0.16, 0.16]}>
              <icosahedronGeometry args={[1, 0]} />
              <meshStandardMaterial emissive={tint} emissiveIntensity={2.2} color="#ffffff" metalness={0.2} roughness={0.3} />
            </mesh>
          )
        })}
      </group>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  2 · Slide: Engineering  -  isometric modular server / architecture   */
/* ------------------------------------------------------------------ */
function ServerCube({ tint }: { tint: string }) {
  const led = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (led.current) led.current.rotation.y += dt * 0.12
  })

  return (
    <group>
      <group rotation={[0.55, 0.62, 0]}>
        {[0, 1, 2, 3].map((i) => {
          const size = 1.7 - i * 0.14
          return (
            <group key={i} position={[0, i * 0.5, 0]}>
              <RoundedBox args={[size, 0.42, size]} radius={0.06} smoothness={4}>
                <meshStandardMaterial color="#0e2a1c" metalness={0.9} roughness={0.28} envMapIntensity={1.2} />
              </RoundedBox>
              {/* emissive LED / data strip */}
              <mesh position={[0, 0.23, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.6, 0.05]} />
                <meshStandardMaterial emissive={tint} emissiveIntensity={2.4} color="#ffffff" />
              </mesh>
              <mesh position={[-0.55, 0.23, 0.55]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.22, 0.05]} />
                <meshStandardMaterial emissive={tint} emissiveIntensity={1.6} color="#ffffff" opacity={0.9} transparent />
              </mesh>
              {/* pillar columns */}
              <mesh position={[size / 2 - 0.12, -0.08, size / 2 - 0.12]}>
                <cylinderGeometry args={[0.06, 0.06, 0.28, 8]} />
                <meshStandardMaterial color="#d9f5e6" metalness={0.95} roughness={0.15} />
              </mesh>
              <mesh position={[-size / 2 + 0.12, -0.08, -size / 2 + 0.12]}>
                <cylinderGeometry args={[0.06, 0.06, 0.28, 8]} />
                <meshStandardMaterial color="#d9f5e6" metalness={0.95} roughness={0.15} />
              </mesh>
            </group>
          )
        })}
      </group>

      {/* spinning antenna node */}
      <group ref={led} position={[1.05, 1.15, 0]}>
        <mesh>
          <sphereGeometry args={[0.16, 24, 24]} />
          <meshStandardMaterial emissive={tint} emissiveIntensity={2} color="#ffffff" />
        </mesh>
      </group>
    </group>
  )
}
/* ------------------------------------------------------------------ */
/*  3 · Slide: Talent  -  interlocking gold leadership rings              */
/* ------------------------------------------------------------------ */
function GoldRings({ tint }: { tint: string }) {
  return (
    <group>
      <Float speed={1.6} rotationIntensity={0.45} floatIntensity={1.1}>
        <mesh rotation={[Math.PI / 2.35, 0.3, 0]}>
          <torusGeometry args={[1.05, 0.2, 24, 72]} />
          <meshStandardMaterial color="#d8a03e" metalness={1} roughness={0.22} envMapIntensity={1.3} />
        </mesh>
        <mesh rotation={[0.55, Math.PI / 3, 0.9]}>
          <torusGeometry args={[1.12, 0.2, 24, 72]} />
          <meshStandardMaterial color="#e0b253" metalness={1} roughness={0.26} envMapIntensity={1.3} />
        </mesh>
      </Float>

      {/* central leadership sphere */}
      <Float speed={2.4} rotationIntensity={0.2} floatIntensity={0.8}>
        <mesh>
          <sphereGeometry args={[0.4, 48, 48]} />
          <meshPhysicalMaterial emissive={tint} emissiveIntensity={1.3} color="#5a3a10" metalness={0.5} roughness={0.2} clearcoat={1} />
        </mesh>
      </Float>

      {/* upward chevrons */}
      {[-0.55, 0, 0.55].map((y, i) => (
        <mesh key={y} position={[0, y, 0.7]} scale={[0.85 - i * 0.18, 0.7 - i * 0.12, 1]}>
          <coneGeometry args={[0.14, 0.28, 4]} />
          <meshStandardMaterial emissive={tint} emissiveIntensity={i === 1 ? 2.2 : 1.2} color="#3a260a" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  4 · Slide: Growth  -  multi-stage funnel turbine with glow            */
/* ------------------------------------------------------------------ */
function FunnelTurbine({ tint }: { tint: string }) {
  const rings = [
    { r: 1.55, y: 0.95 },
    { r: 1.15, y: 0.35 },
    { r: 0.78, y: -0.3 },
    { r: 0.42, y: -0.95 },
  ]
  const flow = useRef<THREE.Mesh>(null)
  useFrame((_, dt) => {
    if (flow.current) flow.current.rotation.y += dt * 0.9
  })

  return (
    <group>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1}>
        {rings.map((ring, i) => (
          <mesh key={i} position={[0, ring.y, 0]}>
            <torusGeometry args={[ring.r, i === 0 ? 0.15 : 0.085, 16, 56]} />
            <meshStandardMaterial
              emissive={tint}
              emissiveIntensity={1.4 - i * 0.25}
              color={i % 2 ? '#0b1c3f' : '#14306e'}
              metalness={0.7}
              roughness={0.32}
            />
          </mesh>
        ))}

        {/* wireframe flow cone */}
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[1.0, 2.4, 36, 1, true]} />
          <meshStandardMaterial wireframe color="#9cc2ff" emissive={tint} emissiveIntensity={0.7} transparent opacity={0.55} />
        </mesh>

        {/* vertical energy column */}
        <mesh ref={flow} position={[0, 0.75, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 1.7, 10]} />
          <meshStandardMaterial emissive={tint} emissiveIntensity={2.6} color="#ffffff" />
        </mesh>
      </Float>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  5 · About / Contact  -  metallic slate core with violet-gold bands     */
/* ------------------------------------------------------------------ */
function ObsidianCore({ tint }: { tint: string }) {
  const spin = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (spin.current) spin.current.rotation.y += dt * 0.2
  })

  return (
    <group scale={0.92}>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.1}>
        <mesh rotation={[Math.PI / 2.15, 0.15, 0]}>
          <torusGeometry args={[1.1, 0.1, 28, 80]} />
          <meshStandardMaterial color="#5b6073" metalness={0.95} roughness={0.24} envMapIntensity={1.4} />
        </mesh>
        <mesh rotation={[0.7, Math.PI / 4, 0.5]}>
          <torusGeometry args={[1.2, 0.05, 20, 72]} />
          <meshStandardMaterial emissive={tint} emissiveIntensity={1.4} color="#14121f" metalness={0.6} roughness={0.3} />
        </mesh>
      </Float>

      {/* Reflective metallic sphere core */}
      <Float speed={2.4} rotationIntensity={0.25} floatIntensity={0.9}>
        <mesh>
          <sphereGeometry args={[0.5, 48, 48]} />
          <meshPhysicalMaterial color="#3b4152" metalness={0.95} roughness={0.18} clearcoat={1} clearcoatRoughness={0.08} />
        </mesh>
      </Float>

      {/* Orbiting violet-gold satellites */}
      <group ref={spin}>
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i / 5) * Math.PI * 2
          const r = 1.75 + (i % 2) * 0.25
          return (
            <mesh key={i} position={[Math.cos(angle) * r, Math.sin(angle * 2) * 0.4, Math.sin(angle) * r]} scale={[0.1, 0.1, 0.1]}>
              <sphereGeometry args={[0.7, 20, 20]} />
              <meshStandardMaterial emissive={tint} emissiveIntensity={1.8} color="#ffffff" metalness={0.4} roughness={0.3} />
            </mesh>
          )
        })}
      </group>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  Dispatcher                                                          */
/* ------------------------------------------------------------------ */
export function Centerpiece({ kind, tint }: { kind: SlideCenterpiece; tint: string }) {
  switch (kind) {
    case 'ai-core':
      return <AICore tint={tint} />
    case 'server-cube':
      return <ServerCube tint={tint} />
    case 'gold-rings':
      return <GoldRings tint={tint} />
    case 'funnel-turbine':
      return <FunnelTurbine tint={tint} />
    case 'obsidian-core':
      return <ObsidianCore tint={tint} />
    default:
      return null
  }
}