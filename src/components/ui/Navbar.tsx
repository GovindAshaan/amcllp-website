'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, CalendarClock, Link as LinkIcon } from 'lucide-react'
import { cn } from '@/lib/cn'
import Logo from './Logo'

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/engineering', label: 'Ashan AI Engineering' },
  { href: '/prudent-headhunterz', label: 'Prudent Headhunterz' },
  { href: '/growthdesk', label: 'GrowthDesk' },
  { href: '/about', label: 'About' },
]

const aiLabsItems = [
  { href: '/ai-labs#scaleaihub', label: 'ScaleAIHub', external: 'https://scaleaihub.in', desc: 'AI Career & Placement OS' },
  { href: '/ai-labs#bookfulfillment-os', label: 'BookFulfillment OS', desc: 'Multi-Tenant Publishing' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [labOpen, setLabOpen] = useState(false)
  const [mobileLabOpen, setMobileLabOpen] = useState(false)
  const labRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleOuterClick = (e: MouseEvent) => {
      if (labRef.current && !labRef.current.contains(e.target as Node)) {
        setLabOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOuterClick)
    return () => document.removeEventListener('mousedown', handleOuterClick)
  }, [])

  const linkClass = () =>
    cn(
      'px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300',
      'text-white/55 hover:text-white hover:bg-white/[0.05]'
    )

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#0A0F1A]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setLabOpen(false)} className={linkClass()}>
                {link.label}
              </a>
            ))}

            {/* Ashan AI Labs dropdown */}
            <div
              ref={labRef}
              className="relative"
              onMouseEnter={() => setLabOpen(true)}
              onMouseLeave={() => setLabOpen(false)}
            >
              <a href="/ai-labs" className={cn(linkClass(), 'inline-flex items-center gap-1')} onClick={() => setLabOpen(false)}>
                Ashan AI Labs
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-300', labOpen && 'rotate-180')} />
              </a>
              <AnimatePresence>
                {labOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 pt-3 w-72"
                  >
                    <div className="p-2 rounded-2xl bg-[#0B101C]/95 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                      {aiLabsItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.external && item.href.startsWith('/ai-labs#') ? item.external : item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="group flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-electric-indigo-500/10 transition-colors"
                        >
                          <span className="flex items-center gap-1.5 text-sm font-medium text-white/90 group-hover:text-white">
                            {item.label}
                            {item.external && <LinkIcon className="w-3 h-3 text-electric-indigo-400" />}
                          </span>
                          <span className="text-xs text-white/35">{item.desc}</span>
                        </a>
                      ))}
                      <div className="h-px bg-white/[0.06] my-1.5 mx-3" />
                      <a
                        href="/ai-labs"
                        className="block px-3 py-2 text-xs font-medium text-electric-indigo-400 hover:text-electric-indigo-300"
                      >
                        Explore the AI Labs →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="ml-4 pl-4 border-l border-white/[0.06] flex items-center">
              <a href="/contact" onClick={() => setLabOpen(false)} className="btn-kinetic-primary px-5 py-2.5 text-sm gap-2">
                <CalendarClock className="w-4 h-4" />
                <span>Book Strategy Call</span>
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
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
            className="lg:hidden bg-[#0A0F1A]/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-1">
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/70 hover:text-white font-medium transition-colors py-2.5 px-3 rounded-lg hover:bg-white/[0.03]"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile AI Labs */}
              <div>
                <button
                  onClick={() => setMobileLabOpen(!mobileLabOpen)}
                  className="w-full flex items-center justify-between text-white/70 hover:text-white font-medium transition-colors py-2.5 px-3 rounded-lg hover:bg-white/[0.03]"
                >
                  Ashan AI Labs
                  <ChevronDown className={cn('w-4 h-4 transition-transform', mobileLabOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {mobileLabOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 py-1">
                        {aiLabsItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.external && item.href.startsWith('/ai-labs#') ? item.external : item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-white/60 hover:text-electric-indigo-400 text-sm font-medium py-2 px-3 rounded-lg hover:bg-electric-indigo-500/5"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4 mt-2 border-t border-white/[0.06]">
                <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-kinetic-primary w-full justify-center py-3 gap-2">
                  <CalendarClock className="w-4 h-4" />
                  <span>Book Strategy Call</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

