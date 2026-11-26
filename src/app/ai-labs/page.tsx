import type { Metadata } from 'next'
import VerticalPageLayout from '@/components/layout/VerticalPageLayout'
import DepthHeroHeader from '@/components/ui/DepthHeroHeader'
import ProductShowcase from '@/components/sections/ProductShowcase'
import JsonLd from '@/components/seo/JsonLd'
import { pageMeta } from '@/lib/seo-config'
import { innerPageGraph } from '@/lib/schema'

export const metadata: Metadata = pageMeta({ path: '/ai-labs' })

const products = [
  {
    eyebrow: 'Product 01 · Career Intelligence',
    name: 'ScaleAIHub',
    tagline: 'The AI Career & Placement Operating System',
    description:
      'Built for mid-to-senior professionals and university placement cells, ScaleAIHub combines 12 autonomous AI modules including ATS Sniper, 4-Round Interview Simulator, LinkedIn and Naukri Optimizers, and a Counter-Offer Decision Engine to help candidates engineer high-impact career jumps.',
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
      <JsonLd data={innerPageGraph('/ai-labs', 'Ashan AI Labs')} />
      <DepthHeroHeader
        eyebrow="Ashan AI Labs · AI Product Studio"
        title={<>Autonomous AI, <span className="text-gradient-venture">Built to Eliminate Bottlenecks.</span></>}
        subtitle="Our internal venture lab designs, builds, and scales production-grade AI software for high-impact commercial markets, including career mobility and digital publishing."
        crumbLabel="Back to the ecosystem"
        crumbHref="/"
        primaryCta={{ label: 'Explore ScaleAIHub', href: '/ai-labs#scaleaihub' }}
        secondaryCta={{ label: 'Explore All Divisions', href: '/#routing' }}
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
