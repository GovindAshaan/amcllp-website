import Navbar from '@/components/ui/Navbar'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import Footer from '@/components/ui/Footer'
import HeroSection from '@/components/sections/HeroSection'
import MetricsSection from '@/components/sections/MetricsSection'
import LiveTalentFeed from '@/components/sections/LiveTalentFeed'
import HorizontalMarketMap from '@/components/sections/HorizontalMarketMap'
import PainPointsSection from '@/components/sections/PainPointsSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import LeadFormSection from '@/components/sections/LeadFormSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A13]">
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <LiveTalentFeed />
      <HorizontalMarketMap />
      <PainPointsSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <LeadFormSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
