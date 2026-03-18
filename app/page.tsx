import Header from '@/components/Header'
import IntroSplashScreen from '@/components/IntroSplashScreen'
import HeroSection from '@/components/HeroSection'
import StickyStackLayout from '@/components/StickyStackLayout'
import WhoWeWorkWith from '@/components/WhoWeWorkWith'
import ServicesSection from '@/components/ServicesSection'
import ResultsSection from '@/components/ResultsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import WorkshopsSection from '@/components/WorkshopsSection'
import WhyNiraahSection from '@/components/WhyNiraahSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import FinalMarqueeSection from '@/components/FinalMarqueeSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <IntroSplashScreen />
      <HeroSection />
      
      {/* Sections utilizing the new scrolling sticky stack wrapper effect */}
      <StickyStackLayout>
        <ServicesSection />
        <WhoWeWorkWith />
        <ResultsSection />
        <TestimonialsSection />
      </StickyStackLayout>

      <HowWeWorkSection />
      <WorkshopsSection />
      <WhyNiraahSection />
      <FAQSection />
      <CTASection />
      <FinalMarqueeSection />
      <Footer />
    </main>
  )
}

