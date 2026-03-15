import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailsSection from '@/components/ServiceDetailsSection';

export default function SocialMediaPage() {
  const smmTestimonials = [
    {
      text: 'Our social media engagement improved drastically. The content is trendy, creative, and attracts the right audience. We\'ve seen an increase in bookings through Instagram.',
      highlight: 'social media engagement',
      image: 'https://i.pravatar.cc/150?img=13',
      name: 'Curls n Spikes',
      role: 'Beauty Salon'
    },
  ];

  return (
    <>
      <Header />
      <ServiceDetailsSection
        title="Social Media Management"
        icon="📱"
        description="Turn your social media into a consistent source of visibility, trust, and qualified leads with strategic content planning and community engagement backed by data-driven growth frameworks."
        whatWeDo={[
          'Content Strategy & Planning',
          'Content Creation & Design',
          'Daily Posting & Scheduling',
          'Community Engagement & Response',
          'Performance Analysis & Insights',
          'Growth Optimization',
        ]}
        problemsSolved={[
          'Inconsistent posting leading to low engagement',
          'No clear content strategy or messaging',
          'Time-consuming manual content management',
          'Low follower growth and reach',
          'Difficulty converting followers to customers',
          'Lack of performance visibility',
        ]}
        whatClientGain={[
          'Consistent daily engagement from target audience',
          'Professional, on-brand content',
          'Increased followers and reach',
          'More qualified inquiries via social',
          'Time savings with outsourced management',
          'Clear performance metrics and insights',
        ]}
        testimonials={smmTestimonials}
      />
      <Footer />
    </>
  );
}
