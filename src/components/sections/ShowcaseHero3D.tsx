'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import { HeroScene } from '../three/HeroScene'
import { heroSlides } from '@/lib/showcase-slides'

export default function ShowcaseHero3D() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]
  const heroRef = useRef<HTMLElement>(null)
  const wheelAcc = useRef(0)

  /* Mouse parallax motion values (shared between giant text and the scene feel). */
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 60, damping: 18 })
  const sy = useSpring(py, { stiffness: 60, damping: 18 })
  const textX = useTransform(sx, [-1, 1], [14, -14])
  const textY = useTransform(sy, [-1, 1], [10, -10])

  const go = useCallback((i: number) => {
    setActive(((i % heroSlides.length) + heroSlides.length) % heroSlides.length)
  }, [])
  const next = useCallback(() => go(active + 1), [go, active])
  const prev = useCallback(() => go(active - 1), [go, active])

  /* Mouse parallax */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      px.set((e.clientX / window.innerWidth) * 2 - 1)
      py.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [px, py])

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(active + 1)
      else if (e.key === 'ArrowLeft') go(active - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, active])

  /* Wheel navigation  -  only while hovering the hero, never trap the user past the last slide. */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const el = heroRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom
      if (!inside || Math.abs(e.deltaY) < 24) return
      if (e.deltaY > 0) {
        if (active >= heroSlides.length - 1) return
        e.preventDefault()
        wheelAcc.current += e.deltaY
        if (wheelAcc.current > 110) {
          go(active + 1)
          wheelAcc.current = 0
        }
      } else {
        e.preventDefault()
        wheelAcc.current += e.deltaY
        if (wheelAcc.current < -110) {
          go(active - 1)
          wheelAcc.current = 0
        }
      }
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [go, active])

  return (
    <section ref={heroRef} id="home" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-white">
      {/* Full-bleed background: crossfading per-slide gradient */}
      <div className="absolute inset-0">
        {heroSlides.map((s, i) => (
          <motion.div
            key={s.id}
            className="absolute inset-0"
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.95, ease: 'easeInOut' }}
            style={{ background: `linear-gradient(135deg, ${s.accent.from} 0%, ${s.accent.to} 100%)` }}
          />
        ))}
      </div>

      {/* Ambient glow overlays synced to the active slide */}
      <div className="absolute inset-0 overflow-hidden">
        {heroSlides.map((s, i) => (
          <motion.div
            key={s.id}
            className="absolute inset-0"
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          >
            <div className="absolute -top-[14%] left-[6%] w-[46rem] h-[46rem] rounded-full blur-[150px]" style={{ backgroundColor: s.accent.glow, opacity: 0.26 }} />
            <div className="absolute bottom-[-18%] right-[2%] w-[40rem] h-[40rem] rounded-full blur-[140px]" style={{ backgroundColor: s.accent.glow, opacity: 0.2 }} />
            <div className="absolute top-[30%] right-[16%] w-[20rem] h-[20rem] rounded-full blur-[110px]" style={{ backgroundColor: s.accent.glow, opacity: 0.18 }} />
          </motion.div>
        ))}
      </div>

      {/* Subtle grid + vignette for depth */}
      <div className="absolute inset-0 bg-grid-white opacity-25" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 42%, transparent 32%, rgba(0,0,0,0.35) 100%)' }}
      />
      {/* Giant depth-layered typography (sits behind the 3D centrepiece, overlapping its middle letters) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.giantWord}
            initial={{ opacity: 0, scale: 1.06, filter: 'blur(7px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.94, filter: 'blur(7px)' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ x: textX, y: textY }}
            className="pointer-events-none select-none text-center leading-none font-bold uppercase tracking-tighter whitespace-nowrap font-display"
          >
            <span
              className="block"
              style={{ fontSize: 'clamp(4.5rem, 26vw, 23rem)', color: slide.accent.textHex, opacity: 0.09, filter: 'blur(3px)' }}
            >
              {slide.giantWord}
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(4.5rem, 26vw, 23rem)',
                marginTop: '-0.86em',
                WebkitTextStroke: `1.5px ${slide.accent.textHex}`,
                color: 'transparent',
                opacity: 0.9,
              }}
            >
              {slide.giantWord}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3D interactive scene */}
      <motion.div
        key={`scene-${slide.id}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease: 'easeOut', delay: 0.12 }}
        className="absolute inset-0 z-20"
      >
        <HeroScene slide={slide} />
      </motion.div>

      {/* Top ambient fade for the nav bar */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-10 pointer-events-none" />

      {/* Slide counter */}
      <div className="absolute right-6 sm:right-10 top-24 sm:top-28 z-30 text-right">
        <span className="block text-sm sm:text-base font-bold text-white/90 tracking-wide">{`0${slide.index}`}</span>
        <span className="block text-[10px] text-white/40 tracking-[0.25em] uppercase">/ 0{heroSlides.length}</span>
      </div>
      {/* Caption + CTA (bottom-left) */}
      <div className="absolute left-4 sm:left-10 lg:left-16 bottom-40 sm:bottom-10 md:bottom-14 z-30 max-w-xl pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-4"
          >
            <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
              <span className="inline-block w-8 h-px" style={{ backgroundColor: slide.accent.glow }} />
              {slide.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight text-balance max-w-md">
              {slide.caption}
            </h2>
            <a
              href={slide.ctaHref}
              className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[15px] text-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-0.5 group"
              style={{ background: `linear-gradient(135deg, ${slide.accent.glow} 0%, ${slide.accent.from} 100%)` }}
            >
              {slide.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left / right wheel-style navigation */}
      <button
        onClick={prev}
        aria-label="Previous vertical"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next vertical"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom thumbnail preview strip (clickable verticals) */}
      <div className="absolute inset-x-0 bottom-4 sm:bottom-6 z-30 px-4">
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:gap-3">
          {heroSlides.map((s, i) => {
            const isActive = active === i
            return (
              <button
                key={s.id}
                onClick={() => go(i)}
                className={cn(
                  'group relative flex items-center gap-2.5 rounded-full border px-4 py-2.5 backdrop-blur-md transition-all duration-300',
                  isActive
                    ? 'border-white/40 bg-white/15 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
                    : 'border-white/15 bg-white/[0.03] text-white/55 hover:text-white hover:border-white/30'
                )}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: s.accent.glow, boxShadow: isActive ? `0 0 12px ${s.accent.glow}` : undefined }}
                />
                <span className="text-xs sm:text-sm font-semibold tracking-wide">{s.shortName}</span>
                <span className="text-[10px] text-white/40">{`0${s.index}`}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Bottom-right micro CTA into the full ecosystem */}
      <a
        href="/about"
        className="hidden lg:inline-flex absolute right-10 bottom-6 z-30 items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white transition-colors"
      >
        See the whole ecosystem
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </section>
  )
}