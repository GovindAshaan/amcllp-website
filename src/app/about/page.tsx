import type { Metadata } from 'next'
import { Boxes, Code2, Users, TrendingUp, ArrowRight } from 'lucide-react'
import VerticalPageLayout from '@/components/layout/VerticalPageLayout'
import DepthHeroHeader from '@/components/ui/DepthHeroHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TiltGlassCard from '@/components/ui/TiltGlassCard'
import { verticals } from '@/lib/verticals'

const ABOUT_GLOW = '#A595FF'

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
      <DepthHeroHeader
        eyebrow="About Amc"
        title={<>We unify <span className="text-gradient-venture">Code, Talent, and Revenue</span> under one roof.</>}
        subtitle="Founded by software engineers turned serial entrepreneurs, AMC Venture & Tech Group elevates the parent brand from a traditional consultancy into a modern technology holding and venture studio, while preserving the amcllp.com domain and legal entity, Ashans Management Consultancy LLP (AMCLLP)."
        crumbLabel="Back to the ecosystem"
        crumbHref="/"
        primaryCta={{ label: 'Work With Us', href: '/contact' }}
      />

      {/* Why section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal className="space-y-4 text-white/45 leading-relaxed text-base md:text-lg">
            <p>
              Traditional vendors work in silos: software agencies don&apos;t understand customer acquisition,
              recruiters don&apos;t understand modern AI architectures, and marketing agencies don&apos;t understand
              product unit economics.
            </p>
            <p className="text-white/60">
              By uniting every vertical of the growth loop, we let each division reinforce the others. You scale
              faster, with less friction and far fewer dropped balls.
            </p>
            <a href="/contact" className="btn-kinetic-primary inline-flex px-6 py-3 text-sm gap-2 group mt-2">
              Work With Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </ScrollReveal>

          {/* Divisions recap */}
          <div className="space-y-3">
            {verticals.map((v) => {
              const Icon = iconMap[v.slug]
              return (
                <ScrollReveal key={v.slug} delay={v.slug === 'ai-labs' ? 0 : 0.05}>
                  <TiltGlassCard tint={ABOUT_GLOW}>
                    <a href={v.route} className="group flex items-center gap-4 p-5">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-electric-indigo-500/10 transition-colors">
                        <Icon className="w-5 h-5 text-white/60" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">{v.name}</p>
                        <p className="text-xs text-white/40">{v.tag}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/25 group-hover:text-white transition-all" />
                    </a>
                  </TiltGlassCard>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </VerticalPageLayout>
  )
}
