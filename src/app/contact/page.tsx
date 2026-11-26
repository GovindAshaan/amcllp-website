import type { Metadata } from 'next'
import DepthHeroHeader from '@/components/ui/DepthHeroHeader'
import ContactFormSection from '@/components/sections/ContactFormSection'
import JsonLd from '@/components/seo/JsonLd'
import { pageMeta } from '@/lib/seo-config'
import { innerPageGraph } from '@/lib/schema'

export const metadata: Metadata = pageMeta({ path: '/contact' })

export default function ContactPage() {
  return (
    <>
      <JsonLd data={innerPageGraph('/contact', 'Contact')} />
      <DepthHeroHeader
        eyebrow="Contact Govind Ashan · Book a strategy call"
        title={<>Book a <span className="text-gradient-venture">Strategy Call</span></>}
        subtitle="Govind Ashan and the AMC Venture & Tech Group team route you to the right division fast. Tell us what you are scaling next and a specialist will reach out within one business day."
        crumbLabel="Back to the ecosystem"
        crumbHref="/"
      />
      <ContactFormSection />
    </>
  )
}