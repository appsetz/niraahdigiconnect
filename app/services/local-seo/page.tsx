import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailsSection from '@/components/ServiceDetailsSection';

export default function LocalSEOPage() {
  const localSeoTestimonials = [
    {
      text: 'After they optimized our Google My Business profile, we started appearing in local searches consistently. We now receive regular inquiry calls directly through Google.',
      highlight: 'Google My Business',
      image: 'https://i.pravatar.cc/150?img=11',
      name: 'Nanda Construction',
      role: 'Construction Business'
    },
  ];

  return (
    <>
      <Header />
      <ServiceDetailsSection
        title="Local SEO"
        icon="📍"
        description="Rank higher on Google Maps and local searches to get found by ready-to-buy customers in your area with strategic optimization and proven local SEO tactics."
        whatWeDo={[
          'Google Business Profile Optimization',
          'Local Citation Building',
          'Location-Specific Keyword Strategy',
          'Review Generation & Management',
          'Local Content Creation',
          'Local Backlink Building',
        ]}
        problemsSolved={[
          'Not showing up in Google Maps for local searches',
          'Competitors ranking higher for local keywords',
          'Inconsistent business information online',
          'Few customers finding you through local search',
          'Lack of reviews and social proof',
          'Unclear messaging for local audience',
        ]}
        whatClientGain={[
          'Higher ranking in Google Maps & local search',
          'Regular inquiry calls from local searches',
          'More customer reviews and ratings',
          'Consistent business information everywhere',
          'Increased local brand visibility',
          'Qualified leads from ready-to-buy customers',
        ]}
        testimonials={localSeoTestimonials}
      />
      <Footer />
    </>
  );
}
