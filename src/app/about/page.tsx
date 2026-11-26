import type { Metadata } from 'next'
import { Boxes, Code2, Users, TrendingUp, ArrowRight } from 'lucide-react'
import VerticalPageLayout from '@/components/layout/VerticalPageLayout'
import DepthHeroHeader from '@/components/ui/DepthHeroHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TiltGlassCard from '@/components/ui/TiltGlassCard'
import JsonLd from '@/components/seo/JsonLd'
import { verticals } from '@/lib/verticals'
import { pageMeta } from '@/lib/seo-config'
import { entityGraph } from '@/lib/schema'

const ABOUT_GLOW = '#A595FF'

export const metadata: Metadata = pageMeta({ path: '/about' })

const iconMap = {
  'ai-labs': Boxes,
  engineering: Code2,
  'prudent-headhunterz': Users,
  growthdesk: TrendingUp,
}

export default function AboutPage() {
  return (
    <VerticalPageLayout showRouting={false}>
      <JsonLd data={entityGraph('/about')} />
      <DepthHeroHeader
        eyebrow="About · Govind Ashan, Founder"
        title={<>Govind Ashan</>}
        subtitle="Govind Ashan (also spelled Govind Ashaan) is the Founder & Managing Partner of AMC Venture & Tech Group (amcllp.co.in) and Ashans Management Consultancy LLP, founded in 2012. The software-engineer-turned-entrepreneur elevated a traditional consultancy into a modern technology holding and venture studio while preserving the amcllp.co.in domain and legal entity."
        crumbLabel="Back to the ecosystem"
        crumbHref="/"
        primaryCta={{ label: 'Work With Us', href: '/contact' }}
      />

      {/* Profile + why section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal className="space-y-4 text-white/45 leading-relaxed text-base md:text-lg">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Govind Ashan, Founder &amp; Managing Partner</h2>
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
