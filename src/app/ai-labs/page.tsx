import type { Metadata } from 'next'
import { Boxes, FileText, GraduationCap, BookOpen } from 'lucide-react'
import VerticalPageLayout from '@/components/layout/VerticalPageLayout'
import VerticalHeroSection from '@/components/sections/VerticalHeroSection'
import ProductShowcase from '@/components/sections/ProductShowcase'
import { verticals } from '@/lib/verticals'

export const metadata: Metadata = {
  title: 'Ashan AI Labs | AI Product Studio - ScaleAIHub & BookFulfillment OS',
  description:
    'Ashan AI Labs is the proprietary R&D and SaaS venture arm of AMC Venture & Tech Group - home of ScaleAIHub, the AI career and placement operating system, and BookFulfillment OS, a multi-tenant publishing engine.',
}

const vertical = verticals.find((v) => v.slug === 'ai-labs')!

const products = [
  {
    eyebrow: 'Product 01 · Career Intelligence',
    name: 'ScaleAIHub',
    tagline: 'The AI Career & Placement Operating System',
    description:
      'Built for mid-to-senior professionals and university placement cells, ScaleAIHub combines 12 autonomous AI modules—including ATS Sniper, 4-Round Interview Simulator, LinkedIn & Naukri Optimizers, and a Counter-Offer Decision Engine—to help candidates engineer high-impact career jumps.',
    features: [
      'ATS Sniper',
      '4-Round Interview Simulator',
      'LinkedIn & Naukri Optimizers',
      'Counter-Offer Decision Engine',
    ],
    cta: 'Launch ScaleAIHub ↗',
    href: 'https://scaleaihub.in',
    external: true,
  },
  {
    eyebrow: 'Product 02 · Publishing Engine',
    name: 'BookFulfillment OS',
    tagline: 'Multi-Tenant Publishing Automation',
    description:
      'Engineered for book coaches, ghostwriting agencies, and publishing houses. Featuring The Manuscript Mint and Cover Mint, BookFulfillment OS turns raw book outlines into Amazon KDP-ready manuscripts, chapter-wise audiobooks, and print-ready cover wraps inside a white-label multi-tenant workspace.',
    features: [
      'The Manuscript Mint',
      'Cover Mint',
      'KDP-Ready Output',
      'White-Label Multi-Tenant Workspace',
    ],
    cta: 'Book a BookFulfillment OS Walkthrough →',
    href: '/contact',
    external: false,
  },
]

export default function AILabsPage() {
  return (
    <VerticalPageLayout>
      <VerticalHeroSection
        vertical={vertical}
        eyebrow="Building Commercial AI Software That Solves Real Bottlenecks."
        badgeIcon={<Boxes className="w-3.5 h-3.5" />}
      />
      <ProductShowcase
        accentKey="indigo"
        products={products}
        eyebrow="Flagship Products"
        title="Commercial AI platforms, engineered in-house."
        subtitle="Ashan AI Labs identifies high-friction workflows in career mobility and digital publishing, then engineers autonomous software platforms to automate them."
      />
    </VerticalPageLayout>
  )
}
