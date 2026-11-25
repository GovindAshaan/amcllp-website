import type { Metadata } from 'next'
import { FileText, Megaphone, MessageSquareText, TrendingUp } from 'lucide-react'
import VerticalPageLayout from '@/components/layout/VerticalPageLayout'
import VerticalHeroSection from '@/components/sections/VerticalHeroSection'
import ServicePillarsGrid from '@/components/sections/ServicePillarsGrid'
import VerticalCTASection from '@/components/sections/VerticalCTASection'
import { verticals } from '@/lib/verticals'

export const metadata: Metadata = {
  title: 'GrowthDesk | Performance Marketing & Funnel Engine',
  description:
    'GrowthDesk builds done-for-you customer acquisition infrastructure - direct-response funnels, algorithmic paid media, and automated follow-up systems.',
}

const vertical = verticals.find((v) => v.slug === 'growthdesk')!

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
      <VerticalHeroSection
        vertical={vertical}
        eyebrow="Full-Funnel Performance Marketing Engineered for Predictable Pipeline."
        subtext="GrowthDesk builds done-for-you customer acquisition infrastructure — combining direct-response funnels, algorithmic paid media, and automated follow-up systems."
        badgeIcon={<TrendingUp className="w-3.5 h-3.5" />}
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
        description="Get a free audit of your current funnels, paid channels, and follow-up automation — and a clear roadmap to more predictable revenue."
        cta="Book a Growth Audit"
      />
    </VerticalPageLayout>
  )
}
