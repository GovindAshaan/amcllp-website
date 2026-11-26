import type { Metadata } from 'next'
import ShowcaseHero3D from '@/components/sections/ShowcaseHero3D'
import FounderSection from '@/components/sections/FounderSection'
import OperatingCompaniesGrid from '@/components/sections/OperatingCompaniesGrid'
import AMCAdvantageSection from '@/components/sections/AMCAdvantageSection'
import ConversionRoutingForm from '@/components/sections/ConversionRoutingForm'
import JsonLd from '@/components/seo/JsonLd'
import { pageMeta } from '@/lib/seo-config'
import { entityGraph } from '@/lib/schema'

export const metadata: Metadata = pageMeta({ path: '/' })

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A13]">
      <JsonLd data={entityGraph('/')} />
      <ShowcaseHero3D />
      <FounderSection />
      <OperatingCompaniesGrid />
      <AMCAdvantageSection />
      <ConversionRoutingForm />
    </main>
  )
}
