import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react'
import Logo from './Logo'

const companyLinks = [
  { label: 'Group Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Govind Ashan', href: '/about#govind-ashan' },
  { label: 'Book a Strategy Call', href: '/contact' },
]

const verticalLinks = [
  { label: 'Ashan AI Labs', href: '/ai-labs' },
  { label: 'Ashan AI Engineering', href: '/engineering' },
  { label: 'Prudent Headhunterz', href: '/prudent-headhunterz' },
  { label: 'GrowthDesk', href: '/growthdesk' },
]

const productLinks = [
  { label: 'ScaleAIHub', href: 'https://scaleaihub.in', external: true },
  { label: 'BookFulfillment OS', href: '/ai-labs#bookfulfillment-os' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#070A13] border-t border-white/[0.04] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-electric-indigo-500/25 to-transparent" />
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-indigo-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="text-white/40 text-sm leading-relaxed mt-6 max-w-sm">
              An integrated technology and business acceleration house uniting
              <span className="text-white/70"> products, engineering, talent, and growth</span>
              under one roof. An Ashans Management Consultancy LLP (AMCLLP) enterprise.
            </p>
            <p className="text-white/30 text-xs mt-3">
              Founded by{' '}
              <a href="/about" className="text-white/60 hover:text-electric-indigo-400 transition-colors">
                Govind Ashan
              </a>{' '}
              · Govind Ashaan
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center hover:bg-electric-indigo-500/10 hover:border-electric-indigo-500/20 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-white/30 group-hover:text-electric-indigo-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/35 hover:text-white/80 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verticals */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Operating Companies</h4>
            <ul className="space-y-3">
              {verticalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/35 hover:text-white/80 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Flagship Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-white/35 hover:text-electric-indigo-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 mt-7 pt-5 border-t border-white/[0.05]">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white/30" />
                </div>
                <div>
                  <p className="text-[10px] text-white/20 tracking-wider uppercase mb-0.5">Email</p>
                  <a href="mailto:govind@amcllp.co.in" className="text-white/50 hover:text-white/80 transition-colors text-sm">
                    govind@amcllp.co.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white/30" />
                </div>
                <div>
                  <p className="text-[10px] text-white/20 tracking-wider uppercase mb-0.5">Location</p>
                  <span className="text-white/50 text-sm">New Delhi, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <p className="text-white/25 text-xs leading-relaxed max-w-2xl">
            © 2026 AMC Venture &amp; Tech Group  -  Operating Division of Ashans Management Consultancy LLP (AMCLLP). New
            Delhi, India.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-white/25 hover:text-white/50 transition-colors text-xs">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
