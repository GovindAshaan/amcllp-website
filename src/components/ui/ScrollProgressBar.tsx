'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-electric-indigo-500 via-cyber-cyan-400 to-electric-indigo-500 z-[60] origin-left shadow-[0_0_10px_rgba(99,102,241,0.3)]"
      style={{ scaleX }}
    />
  )
}
