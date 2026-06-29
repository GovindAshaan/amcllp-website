import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Success Stories', href: '#testimonials' },
  ],
  services: [
    { label: 'Executive Search', href: '#services' },
    { label: 'Leadership Hiring', href: '#services' },
    { label: 'Talent Acquisition', href: '#services' },
    { label: 'HR Consulting', href: '#services' },
    { label: 'RPO', href: '#services' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#070A13] border-t border-white/[0.03] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-electric-indigo-500/20 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Company Overview - wider column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-indigo-500/20 to-cyber-cyan-500/10 border border-electric-indigo-500/20 flex items-center justify-center">
                <span className="text-xs font-bold text-electric-indigo-400">AM</span>
              </div>
              <span className="text-lg font-bold text-white">AMCLLP</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed mb-6 max-w-sm">
              India's elite talent acquisition partner for the nation's most ambitious organizations.
              We place the top 0.1% of Indian technical and leadership talent.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github, Globe].map((Icon, i) => (
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

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/25 hover:text-white/70 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/25 hover:text-white/70 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Contact</h4>
            <ul className="space-y-4">
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
                  <Phone className="w-4 h-4 text-white/30" />
                </div>
                <div>
                  <p className="text-[10px] text-white/20 tracking-wider uppercase mb-0.5">Phone</p>
                  <a href="tel:+910000000000" className="text-white/50 hover:text-white/80 transition-colors text-sm">
                    +91-00000-00000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white/30" />
                </div>
                <div>
                  <p className="text-[10px] text-white/20 tracking-wider uppercase mb-0.5">Location</p>
                  <span className="text-white/50 text-sm">India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/15 text-xs">
            © {new Date().getFullYear()} Ashans Management Consultancy LLP. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-white/15 hover:text-white/40 transition-colors text-xs">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
