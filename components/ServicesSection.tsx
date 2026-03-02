'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Turn your social media into a consistent source of visibility, trust, and qualified leads. Every action is backed by data and growth frameworks.',
      color: 'bg-orange-100'
    },
    {
      icon: '🎯',
      title: 'Meta Ads Management',
      description: 'High-performance campaigns engineered to maximize ROI and minimize cost per lead or sale. Strategic targeting and scroll-stopping creatives.',
      color: 'bg-yellow-100'
    },
    {
      icon: '🔍',
      title: 'Search Engine Optimization (SEO)',
      description: 'Rank higher on Google and get found by ready-to-buy customers. keyword strategy that targets real search intent, not vanity traffic.',
      color: 'bg-green-100'
    },
    {
      icon: '🌐',
      title: 'Website Design & Development',
      description: 'High-performance websites built to communicate your value clearly, guide visitors toward action, and support your overall marketing goals.',
      color: 'bg-purple-100'
    },
    {
      icon: '🛒',
      title: 'E-commerce Website Development',
      description: 'Develop high-performance online stores designed to showcase your products professionally, simplify the shopping journey, and maximize conversions.',
      color: 'bg-blue-100'
    },
    {
      icon: '🎨',
      title: 'Branding & Creative Design',
      description: 'Craft distinctive brand identities and creative assets that clearly communicate your value and make your business stand out.',
      color: 'bg-pink-100'
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Value-driven content that builds authority, educates, and nurtures your audience, positioning your business as the obvious choice.',
      color: 'bg-indigo-100'
    },
    {
      icon: '📍',
      title: 'Google Business Profile Optimization',
      description: 'Optimize and manage your business profile to improve local rankings, increase calls, and bring consistent local inquiries.',
      color: 'bg-sky-100'
    },
    {
      icon: '📇',
      title: 'Business Cards, Brochures & Branding Materials',
      description: 'Professional print materials that make your brand look credible, memorable, and polished - from concept to print.',
      color: 'bg-red-100'
    },
    {
      icon: '🎥',
      title: 'Media Production & Video Branding',
      description: 'Strategic video and visual content designed for business growth, brand positioning, and marketing performance.',
      color: 'bg-cyan-100'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-yellow inline-block animate-scaleIn">OUR SERVICES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 mb-4 px-4">
            Services Built for Measurable Growth
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We don’t sell random digital services. We build predictable systems that turn attention into revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card transition-all duration-700 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`icon-circle ${service.color} transition-transform duration-300 hover:rotate-12 hover:scale-110`}>
                <span className="text-2xl sm:text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-3 hover:text-yellow-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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

