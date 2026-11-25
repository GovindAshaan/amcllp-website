import type { Metadata } from 'next'
import { Boxes, Bot, Puzzle, Code2 } from 'lucide-react'
import VerticalPageLayout from '@/components/layout/VerticalPageLayout'
import VerticalHeroSection from '@/components/sections/VerticalHeroSection'
import ServicePillarsGrid from '@/components/sections/ServicePillarsGrid'
import VerticalCTASection from '@/components/sections/VerticalCTASection'
import { verticals } from '@/lib/verticals'

export const metadata: Metadata = {
  title: 'Ashan AI Engineering | Custom AI Software & SaaS Development',
  description:
    'Ashan AI Engineering partners with founders and enterprise teams to architect, build, and deploy custom AI applications, scalable SaaS platforms, and autonomous workflow infrastructure.',
}

const vertical = verticals.find((v) => v.slug === 'engineering')!

const pillars = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Multi-Tenant SaaS & MVP Engineering',
    description:
      'Full-stack web applications with role-based access, subscription billing, superadmin controls, and cloud deployment on modern stacks.',
    points: [
      'Role-based access & superadmin controls',
      'Subscription billing & metering',
      'Cloud deployment on modern stacks',
    ],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'Agentic AI & Voice Automation',
    description:
      'Autonomous outbound/inbound AI voice calling agents, SIP trunking pipelines, RAG knowledge systems, and self-hosted open-source LLM workflows.',
    points: [
      'Outbound/inbound AI voice agents',
      'SIP trunking pipelines',
      'RAG knowledge systems & self-hosted LLMs',
    ],
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: 'Custom Extensions & Workflow Orchestration',
    description:
      'Human-in-the-loop Chrome extensions, n8n automation pipelines, and deep API integrations across CRMs and internal tools.',
    points: [
      'Human-in-the-loop Chrome extensions',
      'n8n automation pipelines',
      'Deep API integrations across CRMs',
    ],
  },
]

export default function EngineeringPage() {
  return (
    <VerticalPageLayout>
      <VerticalHeroSection
        vertical={vertical}
        eyebrow="Custom AI Software Engineering Built for Production, Not Just Demos."
        subtext="Ashan AI Engineering partners with founders and enterprise teams to architect, build, and deploy custom AI applications, scalable SaaS platforms, and autonomous workflow infrastructure."
        badgeIcon={<Boxes className="w-3.5 h-3.5" />}
      />
      <ServicePillarsGrid
        accentKey="cyan"
        pillars={pillars}
        eyebrow="Core Service Pillars"
        title="From architecture to deployment, owned end-to-end."
      />

      <section className="relative py-10 md:py-14 overflow-hidden bg-[#070A13]">
        <div className="container-custom z-10 relative">
          <div className="rounded-2xl border border-venture-cyan-500/20 bg-venture-cyan-500/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-white/60 text-sm max-w-xl">
              <span className="text-white font-semibold">No bloated agency overhead.</span> Built by engineers with deep
              enterprise pedigree — you get production-grade systems without the agency markup.
            </p>
            <a href="/contact" className="btn-kinetic px-6 py-3 text-sm gap-2 border border-venture-cyan-500/30 text-venture-cyan-400 hover:bg-venture-cyan-500/10">
              Scope Your Engineering Project →
            </a>
          </div>
        </div>
      </section>

      <VerticalCTASection
        accentKey="cyan"
        eyebrow="Ready to build?"
        title="Let's scope your next AI system."
        description="Tell us about the operational bottleneck you want automated and our engineers will map the architecture, timeline, and investment."
        cta="Book a Strategy Call"
      />
    </VerticalPageLayout>
  )
}
