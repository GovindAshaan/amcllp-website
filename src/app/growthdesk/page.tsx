import type { Metadata } from 'next'
import { FileText, Megaphone, MessageSquareText } from 'lucide-react'
import VerticalPageLayout from '@/components/layout/VerticalPageLayout'
import DepthHeroHeader from '@/components/ui/DepthHeroHeader'
import ServicePillarsGrid from '@/components/sections/ServicePillarsGrid'
import VerticalCTASection from '@/components/sections/VerticalCTASection'
import JsonLd from '@/components/seo/JsonLd'
import { pageMeta } from '@/lib/seo-config'
import { innerPageGraph } from '@/lib/schema'

export const metadata: Metadata = pageMeta({ path: '/growthdesk' })

const pillars = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'High-Converting Landing Pages & Webinar Funnels',
    description:
      'Persuasive copywriting and rapid funnel deployment designed to maximize visitor-to-lead and lead-to-buyer conversion.',
    points: [
      'Direct-response landing pages',
      'Webinar & B2B acquisition funnels',
      'Rapid deployment & testing',
    ],
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Paid Acquisition (Meta & Google Ads)',
    description:
      'Structured creative testing, audience architecture, and ROAS-focused campaign management across Meta and Google.',
    points: [
      'Creative testing frameworks',
      'Audience architecture',
      'ROAS-focused management',
    ],
  },
  {
    icon: <MessageSquareText className="w-6 h-6" />,
    title: 'Omnichannel Lead Automation',
    description:
      'Automated WhatsApp, email, and CRM sequences that nurture prospects and book qualified sales calls around the clock.',
    points: [
      'Automated WhatsApp & email sequences',
      'CRM sync & scoring',
      '24/7 qualification & booking',
    ],
  },
]

export default function GrowthDeskPage() {
  return (
    <VerticalPageLayout>
      <JsonLd data={innerPageGraph('/growthdesk', 'GrowthDesk')} />
      <DepthHeroHeader
        eyebrow="GrowthDesk · Performance Marketing Engine"
        title={<>Predictable Pipeline, <span className="text-gradient-venture">Engineered for ROI.</span></>}
        subtitle="GrowthDesk builds done-for-you customer acquisition infrastructure combining direct-response funnels, algorithmic paid media, and automated follow-up systems."
        crumbLabel="Back to the ecosystem"
        crumbHref="/"
        primaryCta={{ label: 'Book a Growth Audit', href: '/contact' }}
        secondaryCta={{ label: 'Explore All Divisions', href: '/#routing' }}
      />
      <ServicePillarsGrid
        accentKey="amber"
        pillars={pillars}
        eyebrow="Core Service Pillars"
        title="A repeatable revenue engine, engineered to convert."
      />

      <VerticalCTASection
        accentKey="amber"
        eyebrow="Ready to scale acquisition?"
        title="Let's turn ad spend into qualified pipeline."
        description="Get a free audit of your current funnels, paid channels, and follow-up automation, and a clear roadmap to more predictable revenue."
        cta="Book a Growth Audit"
      />
    </VerticalPageLayout>
  )
}
