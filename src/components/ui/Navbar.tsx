'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#metrics', label: 'Metrics' },
  { href: '#talent-feed', label: 'Talent Feed' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Success Stories' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0F1A]/80 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-indigo-500/20 to-cyber-cyan-500/10 border border-electric-indigo-500/20 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all duration-300">
              <span className="text-xs font-bold text-electric-indigo-400">AM</span>
            </div>
            <span className={`text-lg font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              AMCLLP
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-white/50 hover:text-white hover:bg-white/[0.05]'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-white/[0.05]">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="btn-kinetic-primary px-5 py-2.5 text-sm gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Initiate Search</span>
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-white hover:bg-white/[0.05]' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0A0F1A]/95 backdrop-blur-xl border-b border-white/[0.05]"
          >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="block text-white/60 hover:text-white font-medium transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.03]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.05]">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="btn-kinetic-primary w-full justify-center py-3 gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Initiate Search</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
