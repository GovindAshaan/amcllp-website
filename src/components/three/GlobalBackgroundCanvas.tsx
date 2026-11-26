'use client'

import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../providers/ThemeProvider'
import { Centerpiece } from './Centerpieces'
import { OrbitIcon } from './OrbitIcons'

/* Deterministic ambient particle field. */
const PARTICLE_COUNT = 30
function buildParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const kind = i % 3
    const geo =
      kind === 0
        ? new THREE.IcosahedronGeometry(1, 0)
        : kind === 1
          ? new THREE.TetrahedronGeometry(1, 0)
          : new THREE.OctahedronGeometry(1, 0)
    return {
      id: i,
      geo,
      pos: [-14 + Math.random() * 28, -9 + Math.random() * 18, 2 - Math.random() * 6] as [number, number, number],
      scale: 0.06 + Math.random() * 0.12,
      speed: 1 + Math.random() * 2,
      rotInt: 0.4 + Math.random() * 0.8,
      floatInt: 0.6 + Math.random() * 1.2,
    }
  })
}

function useThemeRef() {
  const { theme } = useTheme()
  const ref = useRef(theme)
  ref.current = theme
  return ref
}

/* Full-screen color-shifting gradient backdrop (lerps toward the active route theme). */
function ThemeBackdrop() {
  const meshRef = useRef<THREE.Mesh>(null)
  const targetA = useRef(new THREE.Color())
  const targetB = useRef(new THREE.Color())
  const targetG = useRef(new THREE.Color())
  const themeRef = useThemeRef()
  const theme = themeRef.current

  useEffect(() => {
    targetA.current.set(themeRef.current.from)
    targetB.current.set(themeRef.current.to)
    targetG.current.set(themeRef.current.glow)
  }, [themeRef.current])

  useFrame((_, dt) => {
    const m = meshRef.current?.material as THREE.ShaderMaterial | undefined
    if (!m) return
    m.uniforms.uA.value.lerp(targetA.current, Math.min(dt * 2.6, 1))
    m.uniforms.uB.value.lerp(targetB.current, Math.min(dt * 2.6, 1))
    m.uniforms.uG.value.lerp(targetG.current, Math.min(dt * 2.6, 1))
    m.uniforms.uTime.value += dt
  })

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uA: { value: new THREE.Color(theme.from) },
          uB: { value: new THREE.Color(theme.to) },
          uG: { value: new THREE.Color(theme.glow) },
          uTime: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uA; uniform vec3 uB; uniform vec3 uG; uniform float uTime;
          varying vec2 vUv;
          void main() {
            vec2 p = vUv;
            vec3 base = mix(uA, uB, clamp(p.y * 1.4 - 0.2, 0.0, 1.0));
            vec3 col = base + (uG * smoothstep(0.85, 0.0, distance(p, vec2(0.5, 0.45))) * 0.22);
            col += vec3(0.035 * sin(p.x * 28.0 + uTime * 0.4) * sin(p.y * 18.0 - uTime * 0.3));
            gl_FragColor = vec4(col, 1.0);
          }
        `,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <mesh ref={meshRef} position={[0, 0, -7]}>
      <planeGeometry args={[48, 30]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}

/* Mouse-parallax rig; shrinks the featured hero object away on scroll. */
function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null)
  const featured = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      const p = state.pointer
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, p.x * 0.18, 0.04)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -p.y * 0.12, 0.04)
    }
    if (featured.current) {
      const h = Math.max(window.innerHeight || 800, 1)
      const t = Math.min(Math.max(window.scrollY / (h * 0.85), 0), 1)
      const s = 1 - t * 0.9
      featured.current.scale.setScalar(s)
      featured.current.position.y = -t * 1.6
      featured.current.position.z = t * 0.6
    }
  })

  return (
    <group ref={ref}>
      <group ref={featured}>{children}</group>
    </group>
  )
}

export default function GlobalBackgroundCanvas() {
  const { theme, isHome } = useTheme()
  const particles = useMemo(buildParticles, [])

  /* The home route owns its own immersive hero canvas; do not stack a second WebGL context. */
  if (isHome) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ThemeBackdrop />

        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 5]} intensity={1.2} />
        <pointLight position={[0, 0, 5]} intensity={1.1} color={theme.glow} />

        <Rig>
          <Centerpiece kind={theme.centerpiece} tint={theme.glow} />
          {theme.orbits.map((kind, i) => (
            <OrbitIcon
              key={`${kind}-${i}`}
              kind={kind}
              tint={theme.glow}
              position={
                [
                  [2.4, 1.1, -0.4],
                  [-2.6, 0.3, 0.1],
                  [1.7, -1.5, 0.6],
                  [-1.6, -1.1, 0.7],
                ][i % 4] as [number, number, number]
              }
              scale={0.9}
            />
          ))}
        </Rig>

        {/* Ambient geometric particles */}
        <group>
          {particles.map((p) => (
            <group key={p.id} position={p.pos}>
              <Float speed={p.speed} rotationIntensity={p.rotInt} floatIntensity={p.floatInt}>
                <mesh geometry={p.geo} scale={p.scale}>
                  <meshStandardMaterial
                    color={theme.glow}
                    emissive={theme.glow}
                    emissiveIntensity={0.7}
                    metalness={0.4}
                    roughness={0.35}
                    transparent
                    opacity={0.35}
                  />
                </mesh>
              </Float>
            </group>
          ))}
        </group>
      </Canvas>
    </div>
  )
}