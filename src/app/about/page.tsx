import type { Metadata } from 'next'
import { Boxes, Code2, Users, TrendingUp, ArrowRight, Compass } from 'lucide-react'
import VerticalPageLayout from '@/components/layout/VerticalPageLayout'
import { verticals } from '@/lib/verticals'

export const metadata: Metadata = {
  title: 'About | AMC Venture & Tech Group',
  description:
    'AMC Venture & Tech Group is an integrated technology and business acceleration house uniting products, engineering, talent, and growth under one roof.',
}

const iconMap = {
  'ai-labs': Boxes,
  engineering: Code2,
  'prudent-headhunterz': Users,
  growthdesk: TrendingUp,
}

export default function AboutPage() {
  return (
    <VerticalPageLayout showRouting={false}>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#070A13]">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-electric-indigo-500/10 rounded-full blur-[170px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-venture-cyan-500/8 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 geo-grid opacity-50" />

        <div className="container-custom relative z-10">
          <a href="/" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-6">
            ← Back to the ecosystem
          </a>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pane-light text-[11px] font-semibold tracking-widest uppercase text-white/50">
              <Compass className="w-3.5 h-3.5 text-electric-indigo-400" />
              About Amc
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-display font-bold text-white text-balance leading-tight">
              We unify <span className="text-gradient-venture">Code, Talent, and Revenue</span> under one roof.
            </h1>
            <p className="mt-5 text-white/45 text-lg max-w-2xl leading-relaxed">
              Founded by software engineers turned serial entrepreneurs, AMC Venture &amp; Tech Group elevates the
              parent brand from a traditional consultancy into a modern technology holding and venture studio — while
              preserving the amcllp.com domain and legal entity, Ashans Management Consultancy LLP (AMCLLP).
            </p>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="relative py-16 overflow-hidden bg-[#070A13]">
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-white/45 leading-relaxed text-base md:text-lg">
            <p>
              Traditional vendors work in silos: software agencies don&apos;t understand customer acquisition,
              recruiters don&apos;t understand modern AI architectures, and marketing agencies don&apos;t understand
              product unit economics.
            </p>
            <p className="text-white/60">
              By uniting every vertical of the growth loop, we let each division reinforce the others — so you scale
              faster, with less friction and far fewer dropped balls.
            </p>
            <a href="/contact" className="btn-kinetic-primary inline-flex px-6 py-3 text-sm gap-2 group mt-2">
              Work With Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Divisions recap */}
          <div className="space-y-3">
            {verticals.map((v) => {
              const Icon = iconMap[v.slug]
              return (
                <a
                  key={v.slug}
                  href={v.route}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-electric-indigo-500/10 transition-colors">
                    <Icon className="w-5 h-5 text-white/60" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{v.name}</p>
                    <p className="text-xs text-white/40">{v.tag}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/25 group-hover:text-white transition-all" />
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </VerticalPageLayout>
  )
}
