import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailsSection from '@/components/ServiceDetailsSection';

export default function MetaAdsPage() {
  const metaAdsTestimonials = [
    {
      text: 'Their Meta ad campaigns helped us generate quality leads for event bookings. We received consistent inquiries at a reasonable cost per lead.',
      highlight: 'consistent inquiries',
      image: 'https://i.pravatar.cc/150?img=14',
      name: 'Pixel Photography',
      role: 'Photography Studio'
    },
  ];

  return (
    <>
      <Header />
      <ServiceDetailsSection
        title="Meta Ads"
        icon="🎯"
        description="High-performance Facebook and Instagram ad campaigns engineered to maximize ROI, minimize cost per lead, with strategic targeting and scroll-stopping creatives."
        whatWeDo={[
          'Strategy & Audience Research',
          'Creative Development & Copy',
          'Campaign Setup & Launch',
          'Daily Monitoring & Optimization',
          'Cost Per Lead Reduction',
          'Performance Reporting',
        ]}
        problemsSolved={[
          'High cost per lead from inefficient ad spending',
          'Ads not reaching the right audience',
          'Low conversion rates despite traffic',
          'Unclear ROI from advertising',
          'Ad account management complexity',
          'Inconsistent performance metrics',
        ]}
        whatClientGain={[
          'Qualified leads at predictable cost',
          'Higher conversion rates',
          'Clear visibility into ad ROI',
          'Scalable advertising system',
          'Data-driven optimization',
          'Consistent revenue growth',
        ]}
        testimonials={metaAdsTestimonials}
      />
      <Footer />
    </>
  );
}
