'use client';

import React, { useEffect, useState } from 'react';
import { TestimonialsCarousel, Testimonial } from './TestimonialsCarousel';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      text: "After they optimized our Google My Business profile, we started appearing in local searches consistently. We now receive regular inquiry calls directly through Google.",
      highlight: "Google My Business",
      image: "https://i.pravatar.cc/150?img=11",
      name: "Nanda Construction",
      role: "Construction Business"
    },
    {
      text: "They created a beautiful and elegant logo that perfectly represents our baking brand. It looks amazing on packaging and social media. Truly creative work!",
      highlight: "logo design",
      image: "https://i.pravatar.cc/150?img=12",
      name: "Rimis Cakes",
      role: "Bakery Store"
    },
    {
      text: "Our social media engagement improved drastically. The content is trendy, creative, and attracts the right audience. We've seen an increase in bookings through Instagram.",
      highlight: "social media engagement",
      image: "https://i.pravatar.cc/150?img=13",
      name: "Curls n Spikes",
      role: "Beauty Salon"
    },
    {
      text: "Their Meta ad campaigns helped us generate quality leads for event bookings. We received consistent inquiries at a reasonable cost per lead.",
      highlight: "Meta ad campaigns",
      image: "https://i.pravatar.cc/150?img=14",
      name: "Pixel Photography",
      role: "Photography Studio"
    },
    {
      text: "They developed a modern, responsive, and highly professional website. Since the launch, we’ve received positive feedback and a steady flow of inquiries.",
      highlight: "professional website",
      image: "https://i.pravatar.cc/150?img=15",
      name: "Vriddhi Psychological Services",
      role: "Healthcare Provider"
    },
    {
      text: "The logo for our logistics business reflects speed, trust, and reliability. The design process was smooth, and the result exceeded expectations.",
      highlight: "trust and reliability",
      image: "https://i.pravatar.cc/150?img=16",
      name: "Mav Infra Logistics",
      role: "Logistics Company"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-yellow inline-block animate-scaleIn">OUR TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6">
            What our clients say
          </h2>
        </div>

        {/* Testimonials Carousel - Row 1 */}
        <TestimonialsCarousel
          testimonials={testimonials.slice(0, 3)}
          speed={25}
          direction="left"
          cardHeight={220}
        />

        {/* Testimonials Carousel - Row 2 (opposite direction) */}
        <TestimonialsCarousel
          testimonials={testimonials.slice(3, 6)}
          speed={30}
          direction="right"
          cardHeight={220}
          className="mt-6"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
