'use client';

import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { TestimonialsCarousel, Testimonial } from './TestimonialsCarousel';

interface ServiceDetailsProps {
  title: string;
  icon: string;
  description: string;
  whatWeDo: string[];
  problemsSolved: string[];
  whatClientGain: string[];
  testimonials: Testimonial[];
}

const ServiceDetailsSection: React.FC<ServiceDetailsProps> = ({
  title,
  icon,
  description,
  whatWeDo,
  problemsSolved,
  whatClientGain,
  testimonials,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header with back button */}
      <div className="pt-28 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#services" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors mb-8">
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Service hero section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)' }}>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-6xl sm:text-7xl mb-6">{icon}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6 px-4" style={{ color: '#0f2817' }}>
              {title}
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4" style={{ color: '#166534' }}>
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Service details in three columns */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #dcfce7 0%, #f0fdf4 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* What We Do */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#0f2817' }}>
                What We Do
              </h2>
              <ul className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#22c55e' }} />
                    <span style={{ color: '#166534' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Problems We Solve */}
            <div className={`transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#0f2817' }}>
                Problems We Solve
              </h2>
              <ul className="space-y-4">
                {problemsSolved.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#22c55e' }} />
                    <span style={{ color: '#166534' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Clients Gain */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#0f2817' }}>
                What Clients Gain
              </h2>
              <ul className="space-y-4">
                {whatClientGain.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#22c55e' }} />
                    <span style={{ color: '#166534' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service-specific testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative" style={{ background: 'linear-gradient(180deg, #ecfdf5 0%, #dcfce7 100%)' }}>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0f2817' }}>
                What {title} Clients{' '}
                <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Say
                </span>
              </h2>
            </div>

            {testimonials.length > 0 && <TestimonialsCarousel testimonials={testimonials} />}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%)' }}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#0f2817' }}>
          Ready to grow with {title}?
        </h2>
        <Link href="/contact" className="btn-primary inline-flex">
          Get Started Today
        </Link>
      </section>
    </main>
  );
};

export default ServiceDetailsSection;
