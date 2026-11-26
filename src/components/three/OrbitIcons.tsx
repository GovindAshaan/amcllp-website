'use client'

import { Float } from '@react-three/drei'
import type { OrbitKey } from '@/lib/showcase-slides'

/* Procedural floating decorative 3D icons  -  no external model files. */

function CodeBrackets({ tint }: { tint: string }) {
  return (
    <group scale={0.5}>
      <mesh position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.06, 1, 0.06]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.6} color="#12101f" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[-0.3, 0.42, 0]}>
        <boxGeometry args={[0.34, 0.06, 0.06]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.2} color="#12101f" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[-0.3, -0.42, 0]}>
        <boxGeometry args={[0.34, 0.06, 0.06]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.2} color="#12101f" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[0.06, 1, 0.06]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.6} color="#12101f" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0.3, 0.42, 0]}>
        <boxGeometry args={[0.34, 0.06, 0.06]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.2} color="#12101f" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0.3, -0.42, 0]}>
        <boxGeometry args={[0.34, 0.06, 0.06]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.2} color="#12101f" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  )
}

function AIChip({ tint }: { tint: string }) {
  return (
    <group scale={0.7}>
      <mesh>
        <boxGeometry args={[0.8, 0.08, 0.6]} />
        <meshStandardMaterial color="#1a1a22" metalness={0.9} roughness={0.3} envMapIntensity={1.2} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[0.4, 0.02, 0.4]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={2.2} color="#ffffff" />
      </mesh>
      {[0, 1, 2, 3].map((i) => {
        const x = i < 2 ? -0.45 : 0.45
        const z = i % 2 === 0 ? -0.35 : 0.35
        return (
          <mesh key={i} position={[x, 0.05, z]}>
            <boxGeometry args={[0.05, 0.1, 0.05]} />
            <meshStandardMaterial color="#c9d4ff" metalness={0.9} roughness={0.2} />
          </mesh>
        )
      })}
    </group>
  )
}

function Document({ tint }: { tint: string }) {
  return (
    <group rotation={[0.2, 0.5, 0]} scale={0.7}>
      <mesh>
        <boxGeometry args={[0.55, 0.75, 0.05]} />
        <meshStandardMaterial color="#efeaff" metalness={0.1} roughness={0.4} envMapIntensity={1.2} />
      </mesh>
      {[0.2, 0.05, -0.1].map((y, i) => (
        <mesh key={y} position={[0, y, 0.04]}>
          <boxGeometry args={[0.34, 0.03, 0.01]} />
          <meshStandardMaterial emissive={tint} emissiveIntensity={1.4} color={i === 1 ? tint : '#8f86c9'} />
        </mesh>
      ))}
    </group>
  )
}

function DataNode({ tint }: { tint: string }) {
  return (
    <group scale={0.7}>
      <mesh>
        <octahedronGeometry args={[0.45, 0]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.9} color="#ffffff" metalness={0.3} roughness={0.25} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.6, 0.02, 10, 40]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1} color="#14121f" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  )
}

function APIConnector({ tint }: { tint: string }) {
  return (
    <group scale={0.7}>
      <mesh>
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshStandardMaterial color="#d9f5e6" metalness={0.95} roughness={0.2} emissive={tint} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.55, 0.2, 0]}>
        <sphereGeometry args={[0.2, 20, 20]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.8} color="#ffffff" />
      </mesh>
      <mesh position={[0.3, 0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.45, 8]} />
        <meshStandardMaterial color="#cfe8d8" metalness={0.8} roughness={0.25} />
      </mesh>
    </group>
  )
}

function Cloud({ tint }: { tint: string }) {
  return (
    <group scale={0.7}>
      {[
        [0, 0, 0],
        [0.5, -0.15, 0.1],
        [-0.5, -0.18, -0.1],
        [0.15, 0.3, 0.05],
      ].map((p, i) => (
        <mesh key={i} position={[p[0], p[1], p[2]]}>
          <sphereGeometry args={[i === 0 ? 0.34 : 0.26, 22, 22]} />
          <meshStandardMaterial color="#e9f7ef" metalness={0.5} roughness={0.3} emissive={tint} emissiveIntensity={0.4} transparent opacity={0.95} />
        </mesh>
      ))}
    </group>
  )
}

function Prism({ tint }: { tint: string }) {
  return (
    <group scale={0.8}>
      <mesh>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#cfe8d8" metalness={0.9} roughness={0.2} envMapIntensity={1.3} emissive={tint} emissiveIntensity={0.4} />
      </mesh>
      <mesh scale={[0.6, 0.6, 0.6]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial emissive="#ffffff" emissiveIntensity={1} color="#ffffff" transparent opacity={0.9} />
      </mesh>
    </group>
  )
}

function Briefcase({ tint }: { tint: string }) {
  return (
    <group scale={0.7}>
      <mesh>
        <boxGeometry args={[0.85, 0.6, 0.4]} />
        <meshStandardMaterial color="#f3c877" metalness={0.9} roughness={0.3} envMapIntensity={1.3} />
      </mesh>
      <mesh position={[0, 0.34, 0]}>
        <torusGeometry args={[0.18, 0.045, 10, 24, Math.PI]} />
        <meshStandardMaterial color="#f3c877" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.33, 0]}>
        <boxGeometry args={[0.55, 0.04, 0.32]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.4} color="#4a3412" />
      </mesh>
    </group>
  )
}

function Shield({ tint }: { tint: string }) {
  return (
    <group scale={0.7}>
      <mesh>
        <boxGeometry args={[0.5, 0.6, 0.06]} />
        <meshStandardMaterial color="#1be0a0" metalness={0.4} roughness={0.3} emissive={tint} emissiveIntensity={0.8} transparent opacity={0.95} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.03, 10, 40]} />
        <meshStandardMaterial emissive="#ffffff" emissiveIntensity={1.8} color="#ffffff" />
      </mesh>
    </group>
  )
}

function ArrowUp({ tint }: { tint: string }) {
  return (
    <group scale={0.7} rotation={[0, 0, -Math.PI / 3]}>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.8, 12]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.3} color="#3a260a" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.38, 0]}>
        <coneGeometry args={[0.22, 0.34, 20]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={2.2} color="#ffffff" metalness={0.6} roughness={0.25} />
      </mesh>
    </group>
  )
}

function ChatBubble({ tint }: { tint: string }) {
  return (
    <group scale={0.7} rotation={[0, 0.4, 0]}>
      <mesh>
        <sphereGeometry args={[0.45, 24, 24]} />
        <meshStandardMaterial color="#f2f4ff" metalness={0.2} roughness={0.3} emissive={tint} emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[0.6, 0.3, 0.1]}>
        <sphereGeometry args={[0.26, 20, 20]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.6} color="#ffffff" />
      </mesh>
    </group>
  )
}

function Dial({ tint }: { tint: string }) {
  return (
    <group scale={0.8}>
      <mesh>
        <cylinderGeometry args={[0.42, 0.42, 0.12, 32]} />
        <meshStandardMaterial color="#1a1f2e" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0.14, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.05, 0.3, 0.05]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={2.2} color="#ffffff" />
      </mesh>
      <mesh position={[0, 0.09, 0]}>
        <torusGeometry args={[0.28, 0.02, 10, 40]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1} color="#ffffff" />
      </mesh>
    </group>
  )
}

function Connector({ tint }: { tint: string }) {
  return (
    <group scale={0.7}>
      <mesh>
        <torusKnotGeometry args={[0.38, 0.12, 64, 12]} />
        <meshStandardMaterial color="#e9f7ef" metalness={1} roughness={0.25} envMapIntensity={1.4} emissive={tint} emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

function Ring({ tint }: { tint: string }) {
  return (
    <group scale={0.8}>
      <mesh>
        <torusGeometry args={[0.5, 0.05, 16, 64]} />
        <meshStandardMaterial emissive={tint} emissiveIntensity={1.8} color="#14306e" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  )
}

export function OrbitIcon({
  kind,
  tint,
  position,
  scale = 1,
}: {
  kind: OrbitKey
  tint: string
  position: [number, number, number]
  scale?: number
}) {
  return (
    <group position={position} scale={scale}>
      <Float speed={2.2} rotationIntensity={1.6} floatIntensity={1.8}>
        {kind === 'code' && <CodeBrackets tint={tint} />}
        {kind === 'chip' && <AIChip tint={tint} />}
        {kind === 'doc' && <Document tint={tint} />}
        {kind === 'node' && <DataNode tint={tint} />}
        {kind === 'api' && <APIConnector tint={tint} />}
        {kind === 'cloud' && <Cloud tint={tint} />}
        {kind === 'prism' && <Prism tint={tint} />}
        {kind === 'briefcase' && <Briefcase tint={tint} />}
        {kind === 'shield' && <Shield tint={tint} />}
        {kind === 'arrow' && <ArrowUp tint={tint} />}
        {kind === 'chat' && <ChatBubble tint={tint} />}
        {kind === 'dial' && <Dial tint={tint} />}
        {kind === 'connector' && <Connector tint={tint} />}
        {kind === 'ring' && <Ring tint={tint} />}
      </Float>
    </group>
  )
}