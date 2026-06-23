'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { Check, Calendar, MessageCircle } from 'lucide-react'
import CTAButton from '../ui/CTAButton'
import AnimatedText from '../ui/AnimatedText'
import MagneticButton from '../ui/MagneticButton'
import FloatingParticles from '../ui/FloatingParticles'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left - rect.width / 2) / 20
    const y = (e.clientY - rect.top - rect.height / 2) / 20
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center gradient-navy overflow-hidden"
    >
      {/* Floating Particles Background */}
      <FloatingParticles count={40} color="#C8A24D" className="z-10" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <motion.div style={{ y, opacity, scale }} className="container-custom relative z-20 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold mb-6 border border-gold-500/30 backdrop-blur-sm">
                Empowering Growth. Engineering Success.
              </span>
            </motion.div>

            <div className="mb-6">
              <AnimatedText
                text="Build High-Performing Teams That"
                className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15]"
                type="words"
                tag="h1"
                delay={0.3}
              />
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] block mt-1"
              >
                <span className="text-gold-400">Drive Business Growth</span>
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-xl"
            >
              Executive Search, Leadership Hiring, Talent Acquisition, and Workforce Consulting for Ambitious Organizations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <MagneticButton strength={0.4}>
                <CTAButton href="#contact" variant="primary" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </CTAButton>
              </MagneticButton>
              <MagneticButton strength={0.4}>
                <a
                  href="https://wa.me/919873512552?text=Hello%20AMCLLP,%20I%20would%20like%20to%20discuss%20our%20hiring%20requirements."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-500 px-10 py-4 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Talk on WhatsApp
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 text-sm text-navy-200"
            >
              {['Executive Search Specialists', 'Leadership Hiring Experts', 'Pan-India Talent Network'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0"
                  >
                    <Check className="w-3 h-3 text-gold-400" />
                  </motion.div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            style={{ x: springX, y: springY }}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, type: 'spring' }}
              style={{ perspective: '1000px' }}
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-700/10 border border-gold-500/20 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gold-500/40 to-gold-600/20 border border-gold-500/30 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-2xl shadow-gold-500/30">
                      <span className="text-6xl font-bold text-white">AM</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges with parallax */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/20"
                >
                  <p className="text-xs text-white/70 font-medium">Placements</p>
                  <p className="text-xl font-bold text-white">500+</p>
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/20"
                >
                  <p className="text-xs text-white/70 font-medium">Client Satisfaction</p>
                  <p className="text-xl font-bold text-white">95%</p>
                </motion.div>
                <motion.div
                  animate={{ y: [-8, 8, -8], x: [5, -5, 5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/20"
                >
                  <p className="text-xs text-white/70 font-medium">Industries</p>
                  <p className="text-xl font-bold text-white">15+</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gold-400"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
