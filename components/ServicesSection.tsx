'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    { icon: '📱', title: 'Social Media Management', description: 'Turn your social media into a consistent source of visibility, trust, and qualified leads. Every action is backed by data and growth frameworks.' },
    { icon: '🎯', title: 'Meta Ads Management', description: 'High-performance campaigns engineered to maximize ROI and minimize cost per lead or sale. Strategic targeting and scroll-stopping creatives.' },
    { icon: '🔍', title: 'Search Engine Optimization', description: 'Rank higher on Google and get found by ready-to-buy customers. Keyword strategy that targets real search intent, not vanity traffic.' },
    { icon: '🌐', title: 'Website Design & Development', description: 'High-performance websites built to communicate your value clearly, guide visitors toward action, and support your overall marketing goals.' },
    { icon: '🛒', title: 'E-commerce Development', description: 'Develop high-performance online stores designed to showcase your products professionally, simplify the shopping journey, and maximize conversions.' },
    { icon: '🎨', title: 'Branding & Creative Design', description: 'Craft distinctive brand identities and creative assets that clearly communicate your value and make your business stand out.' },
    { icon: '✍️', title: 'Content Marketing', description: 'Value-driven content that builds authority, educates, and nurtures your audience, positioning your business as the obvious choice.' },
    { icon: '📍', title: 'Google Business Profile', description: 'Optimize and manage your business profile to improve local rankings, increase calls, and bring consistent local inquiries.' },
    { icon: '📇', title: 'Branding Materials', description: 'Professional print materials that make your brand look credible, memorable, and polished — from concept to print.' },
    { icon: '🎥', title: 'Media Production & Video', description: 'Strategic video and visual content designed for business growth, brand positioning, and marketing performance.' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setIsVisible(true); }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #071a0d 0%, #050f08 100%)' }}
    >
      {/* Ambient bg glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-green inline-block animate-scaleIn">OUR SERVICES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 mb-4 px-4" style={{ color: '#f0fdf4' }}>
            Services Built for{' '}
            <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Measurable Growth
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ color: '#bbf7d0' }}>
            We don't sell random digital services. We build predictable systems that turn attention into revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="icon-circle transition-transform duration-300 hover:rotate-12 hover:scale-110">
                <span className="text-2xl sm:text-3xl">{service.icon}</span>
              </div>
              <h3
                className="text-base sm:text-lg font-bold mb-3 transition-colors duration-300"
                style={{ color: '#f0fdf4' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#4ade80')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#f0fdf4')}
              >
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#bbf7d0' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="btn-primary">
            LEARN MORE
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
