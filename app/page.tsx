import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhoWeWorkWith from '@/components/WhoWeWorkWith'
import ServicesSection from '@/components/ServicesSection'
import ResultsSection from '@/components/ResultsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import WorkshopsSection from '@/components/WorkshopsSection'
import WhyNiraahSection from '@/components/WhyNiraahSection'
import TeamSection from '@/components/TeamSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhoWeWorkWith />
      <ServicesSection />
      <ResultsSection />
      <TestimonialsSection />
      <HowWeWorkSection />
      <WorkshopsSection />
      <WhyNiraahSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

