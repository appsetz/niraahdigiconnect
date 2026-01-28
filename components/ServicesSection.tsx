'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: '🎯',
      title: 'Meta Ads (Facebook & Instagram)',
      description: 'Lead generation & sales campaigns, funnel & audience strategy, creative direction, ongoing optimization & scaling',
      color: 'bg-yellow-100'
    },
    {
      icon: '📱',
      title: 'Social Media & Instagram Growth',
      description: 'Profile positioning, content & reel strategy, organic reach & engagement growth, insight-based improvements',
      color: 'bg-orange-100'
    },
    {
      icon: '📍',
      title: 'Google My Business',
      description: 'Profile setup & optimization, local visibility strategy, calls, visits & trust building',
      color: 'bg-blue-100'
    },
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Clean, conversion-focused websites, landing pages for ads, mobile-responsive design',
      color: 'bg-purple-100'
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
            We offer the best agency services for our customer
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            First effective deployment for your business powered by
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Meta Ads, strategy, and growth.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card transition-all duration-700 ${
                isVisible 
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

