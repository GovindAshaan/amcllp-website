import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

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
    <footer className="bg-navy-500 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Overview */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">AMCLLP</h3>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              Ashans Management Consultancy LLP is a premier executive search and talent acquisition partner, helping ambitious organizations build high-performing leadership teams across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-400 hover:bg-gold-500 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-400 hover:bg-gold-500 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-400 hover:bg-gold-500 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-400 hover:bg-gold-500 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-navy-200 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-navy-200 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@amcllp.co.in" className="text-navy-200 hover:text-white transition-colors text-sm">
                  info@amcllp.co.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+910000000000" className="text-navy-200 hover:text-white transition-colors text-sm">
                  +91-00000-00000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-navy-200 text-sm">
                  India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0 text-sm font-bold">W</span>
                <a href="https://www.amcllp.co.in" className="text-navy-200 hover:text-white transition-colors text-sm">
                  www.amcllp.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-300 text-sm">
            © {new Date().getFullYear()} Ashans Management Consultancy LLP. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-navy-300 hover:text-white transition-colors text-sm">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
