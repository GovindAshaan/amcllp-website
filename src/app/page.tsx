import Navbar from '@/components/ui/Navbar'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import Footer from '@/components/ui/Footer'
import GroupHeroSection from '@/components/sections/GroupHeroSection'
import OperatingCompaniesGrid from '@/components/sections/OperatingCompaniesGrid'
import AMCAdvantageSection from '@/components/sections/AMCAdvantageSection'
import ConversionRoutingForm from '@/components/sections/ConversionRoutingForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A13]">
      <ScrollProgressBar />
      <Navbar />
      <GroupHeroSection />
      <OperatingCompaniesGrid />
      <AMCAdvantageSection />
      <ConversionRoutingForm />
      <Footer />
    </main>
  )
}
