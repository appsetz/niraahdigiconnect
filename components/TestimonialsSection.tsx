'use client';

import React, { useEffect, useState } from 'react';
import { TestimonialsCarousel, Testimonial } from './TestimonialsCarousel';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    { text: 'After they optimized our Google My Business profile, we started appearing in local searches consistently. We now receive regular inquiry calls directly through Google.', highlight: 'Google My Business', image: 'https://i.pravatar.cc/150?img=11', name: 'Nanda Construction', role: 'Construction Business' },
    { text: 'They created a beautiful and elegant logo that perfectly represents our baking brand. It looks amazing on packaging and social media. Truly creative work!', highlight: 'logo design', image: 'https://i.pravatar.cc/150?img=12', name: 'Rimis Cakes', role: 'Bakery Store' },
    { text: 'Our social media engagement improved drastically. The content is trendy, creative, and attracts the right audience. We\'ve seen an increase in bookings through Instagram.', highlight: 'social media engagement', image: 'https://i.pravatar.cc/150?img=13', name: 'Curls n Spikes', role: 'Beauty Salon' },
    { text: 'Their Meta ad campaigns helped us generate quality leads for event bookings. We received consistent inquiries at a reasonable cost per lead.', highlight: 'Meta ad campaigns', image: 'https://i.pravatar.cc/150?img=14', name: 'Pixel Photography', role: 'Photography Studio' },
    { text: 'They developed a modern, responsive, and highly professional website. Since the launch, we\'ve received positive feedback and a steady flow of inquiries.', highlight: 'professional website', image: 'https://i.pravatar.cc/150?img=15', name: 'Vriddhi Psychological Services', role: 'Healthcare Provider' },
    { text: 'The logo for our logistics business reflects speed, trust, and reliability. The design process was smooth, and the result exceeded expectations.', highlight: 'trust and reliability', image: 'https://i.pravatar.cc/150?img=16', name: 'Mav Infra Logistics', role: 'Logistics Company' },
  ];

  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #0a2414 0%, #071a0d 100%)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(20px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-green inline-block animate-scaleIn">OUR TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6" style={{ color: '#f0fdf4' }}>
            What our{' '}
            <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              clients say
            </span>
          </h2>
        </div>

        <TestimonialsCarousel testimonials={testimonials.slice(0, 3)} speed={25} direction="left" cardHeight={220} />
        <TestimonialsCarousel testimonials={testimonials.slice(3, 6)} speed={30} direction="right" cardHeight={220} className="mt-6" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
