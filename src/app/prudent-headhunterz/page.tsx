import type { Metadata } from 'next'
import { Crown, Code2, ClipboardCheck } from 'lucide-react'
import VerticalPageLayout from '@/components/layout/VerticalPageLayout'
import DepthHeroHeader from '@/components/ui/DepthHeroHeader'
import ServicePillarsGrid from '@/components/sections/ServicePillarsGrid'
import VerticalCTASection from '@/components/sections/VerticalCTASection'

export const metadata: Metadata = {
  title: 'Prudent Headhunterz | Executive Search & HR Consulting',
  description:
    'Prudent Headhunterz bridges technical depth and leadership assessment: premier executive search, technical hiring, and HR consulting for enterprises and funded startups.',
}

const pillars = [
  {
    icon: <Crown className="w-6 h-6" />,
    title: 'CXO & Leadership Search',
    description:
      'Targeted executive search for VP, Director, Engineering Head, and C-Suite mandates  -  built on over a decade of enterprise recruitment pedigree.',
    points: [
      'C-Suite & VP mandates',
      'Engineering & product leaders',
      'Direct access to top 0.1% talent',
    ],
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Technical & Product Hiring',
    description:
      'Deep candidate screening led by former software engineers  -  evaluating real architectural capability instead of surface-level resume keywords.',
    points: [
      'Engineer-led technical vetting',
      'Real architecture & systems assessment',
      'Cultural & seniority calibration',
    ],
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'HR Strategy & Offer Advisory',
    description:
      'Compensation benchmarking, retention frameworks, and talent mapping for scaling teams  -  so offers close and people stay.',
    points: [
      'Compensation benchmarking',
      'Retention frameworks',
      'Talent mapping for scale-ups',
    ],
  },
]

export default function PrudentHeadhunterzPage() {
  return (
    <VerticalPageLayout>
      <DepthHeroHeader
        eyebrow="Prudent Headhunterz · Executive Search & HR"
        title={<>Hire Leaders Who <span className="text-gradient-venture">Actually Run It.</span></>}
        subtitle="Prudent Headhunterz bridges the gap between technical depth and leadership assessment. We help enterprises and funded startups hire high-impact leaders without months of wasted interviews."
        crumbLabel="Back to the ecosystem"
        crumbHref="/"
        primaryCta={{ label: 'Submit a Hiring Mandate', href: '/contact' }}
        secondaryCta={{ label: 'Explore All Divisions', href: '/#routing' }}
      />
      <ServicePillarsGrid
        accentKey="emerald"
        pillars={pillars}
        eyebrow="Core Service Pillars"
        title="Leadership hiring grounded in real domain mastery."
      />

      <VerticalCTASection
        accentKey="emerald"
        eyebrow="Hiring now?"
        title="Let's find the leader who'll run it."
        description="Tell us about your next critical hire and our recruiters will build a tailored search shortlist within days, not months."
        cta="Submit a Hiring Mandate"
      />
    </VerticalPageLayout>
  )
}
