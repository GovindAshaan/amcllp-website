import Link from 'next/link'
import { GraduationCap, Briefcase, BookOpen, Building2, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

/* Server-rendered semantic Founder & Leadership block. The text here is plain
   HTML (not inside a Three.js Canvas) so search engines index it fully. */
export default function FounderSection() {
  const companies = [
    'Ashan AI Labs',
    'Ashan AI Engineering',
    'Prudent Headhunterz',
    'GrowthDesk',
    'ScaleAIHub',
    'BookFulfillment OS',
  ]
  const employers = ['Securiton AG', 'NEC India', 'Solveda']
  const books = ['The Job Offer Blueprint: How to Engineer a 3-10X Salary Jump', 'SME Operating System: Teams & Structure']

  return (
    <section id="founder" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-indigo-500/25 to-transparent" />

      <div className="container-custom relative z-10">
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-electric-indigo-400">Founder &amp; Leadership</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-display font-bold text-white text-balance leading-tight">Govind Ashan</h1>
          <h2 className="mt-2 text-xl md:text-2xl font-display font-semibold text-gradient-venture">
            Founder &amp; Managing Partner, AMC Venture &amp; Tech Group
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-start">
          {/* Bio */}
          <ScrollReveal className="lg:col-span-7 space-y-5 text-white/55 text-base md:text-lg leading-relaxed">
            <p>
              <strong className="text-white">Govind Ashan</strong> (also spelled <strong className="text-white">Govind Ashaan</strong>) is the
              Founder &amp; Managing Partner of{' '}
              <a href="https://www.amcllp.co.in" className="text-electric-indigo-400 hover:text-electric-indigo-300">
                AMC Venture &amp; Tech Group (amcllp.co.in)
              </a>{' '}
              and Ashans Management Consultancy LLP, founded in 2012. He is a Director at TDPro IT Services Pvt. Ltd. and
              the founder behind ScaleAIHub, BookFulfillment OS, Ashan AI Labs, Ashan AI Engineering, Prudent Headhunterz,
              and GrowthDesk.
            </p>
            <p>
              A software engineer turned serial entrepreneur, Govind spent six years as an engineer and senior lead at
              global companies (Securiton AG, NEC India, and Solveda) before launching his IT and recruitment ventures in
              New Delhi, India. He holds an Entrepreneurship &amp; Management program at IIT Delhi plus MCA and BCA from
              GGSIPU, and is the author of{' '}
              <em className="text-white/80">The Job Offer Blueprint: How to Engineer a 3-10X Salary Jump</em> and{' '}
              <em className="text-white/80">SME Operating System: Teams &amp; Structure</em>.
            </p>
            <p>
              Through AMC Venture &amp; Tech Group, Govind unifies products, engineering, talent, and growth under one
              technology holding and venture studio.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-electric-indigo-400 hover:text-electric-indigo-300 transition-colors group"
            >
              Read the full founder profile
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>

          {/* Credentials */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            <ScrollReveal className="space-y-4">
              <div className="glass-card p-5">
                <GraduationCap className="w-5 h-5 text-electric-indigo-400" />
                <h3 className="mt-3 text-sm font-semibold text-white">Engineering Pedigree</h3>
                <p className="text-xs text-white/45 mt-1">IIT Delhi, MCA &amp; BCA (GGSIPU)</p>
              </div>
              <div className="glass-card p-5">
                <Briefcase className="w-5 h-5 text-electric-indigo-400" />
                <h3 className="mt-3 text-sm font-semibold text-white">6 Years Engineering</h3>
                <ul className="text-xs text-white/45 mt-1">
                  {employers.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="space-y-4">
              <div className="glass-card p-5">
                <Building2 className="w-5 h-5 text-electric-indigo-400" />
                <h3 className="mt-3 text-sm font-semibold text-white">Founded Companies</h3>
                <ul className="text-xs text-white/45 mt-1">
                  {companies.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-5">
                <BookOpen className="w-5 h-5 text-electric-indigo-400" />
                <h3 className="mt-3 text-sm font-semibold text-white">Author</h3>
                <ul className="text-xs text-white/45 mt-1">
                  {books.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}