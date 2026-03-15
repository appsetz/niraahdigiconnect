import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailsSection from '@/components/ServiceDetailsSection';

export default function WebsiteConversionPage() {
  const websiteTestimonials = [
    {
      text: 'They developed a modern, responsive, and highly professional website. Since the launch, we\'ve received positive feedback and a steady flow of inquiries.',
      highlight: 'professional website',
      image: 'https://i.pravatar.cc/150?img=15',
      name: 'Vriddhi Psychological Services',
      role: 'Healthcare Provider'
    },
  ];

  return (
    <>
      <Header />
      <ServiceDetailsSection
        title="Website Conversion Systems"
        icon="🌐"
        description="High-performance websites built to clearly communicate your value, guide visitors toward action, and convert browsers into qualified leads and customers."
        whatWeDo={[
          'Website Strategy & Planning',
          'Responsive Design & Development',
          'Clear Value Communication',
          'Conversion Funnel Optimization',
          'CTA & Lead Capture Setup',
          'Performance & SEO Optimization',
        ]}
        problemsSolved={[
          'Website that doesn\'t clearly communicate value',
          'Poor user experience frustrating visitors',
          'Low conversion rates (visitors → leads)',
          'Website looks unprofessional or outdated',
          'No clear path for prospects to take action',
          'Expensive hosting with poor performance',
        ]}
        whatClientGain={[
          'Professional, modern website design',
          'Clear messaging that resonates with audience',
          'Higher conversion rates (visitors → leads)',
          'Mobile-friendly and fast-loading site',
          'Ongoing inquiries from website visitors',
          'Easy to update and maintain content',
        ]}
        testimonials={websiteTestimonials}
      />
      <Footer />
    </>
  );
}
