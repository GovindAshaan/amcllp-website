import ShowcaseHero3D from '@/components/sections/ShowcaseHero3D'
import OperatingCompaniesGrid from '@/components/sections/OperatingCompaniesGrid'
import AMCAdvantageSection from '@/components/sections/AMCAdvantageSection'
import ConversionRoutingForm from '@/components/sections/ConversionRoutingForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A13]">
      <ShowcaseHero3D />
      <OperatingCompaniesGrid />
      <AMCAdvantageSection />
      <ConversionRoutingForm />
    </main>
  )
}
