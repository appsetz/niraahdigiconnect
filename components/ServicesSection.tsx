'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    { 
      title: 'Social Media Management', 
      category: 'Engagement',
      description: 'We build vibrant, engaged communities around your brand by crafting tailored content strategies, actively managing your presence across platforms, and turning followers into loyal advocates.' 
    },
    { 
      title: 'Meta Ads Management', 
      category: 'Advertising',
      description: 'Laser-focused Facebook and Instagram ad campaigns designed to maximize ROI. We rely on data-driven targeting and continuous A/B testing to ensure your budget generates high-quality leads.' 
    },
    { 
      title: 'Search Engine Optimization (SEO)', 
      category: 'Discoverability',
      description: 'Dominate search results and capture organic traffic. We optimize your technical architecture, content, and authority to guarantee your target audience finds you exactly when they need you.' 
    },
    { 
      title: 'Website Design & Development', 
      category: 'Digital Presence',
      description: 'Strategic, high-performing websites meticulously engineered to perform as your best 24/7 salesperson. We combine stunning aesthetic design with seamless user experience.' 
    },
    { 
      title: 'E-commerce Website Development', 
      category: 'Sales',
      description: 'Robust, secure online storefronts optimized for maximum conversion. From smooth checkout flows to inventory management logic, we build platforms that scale alongside your sales.' 
    },
    { 
      title: 'Branding & Creative Design', 
      category: 'Identity',
      description: 'Forge an unforgettable visual identity. We craft compelling brand narratives, distinctive logos, and cohesive design systems that deeply resonate with your market and set you entirely apart.' 
    },
    { 
      title: 'Content Marketing', 
      category: 'Storytelling',
      description: 'Valuable, relevant content engineered to attract and retain a clearly defined audience. From authoritative blogs to engaging visuals, we position your brand as a true industry leader.'
    },
    { 
      title: 'Google Business Profile Optimization', 
      category: 'Local SEO',
      description: 'Capture highly motivated local intent. We aggressively optimize your GBP so your business immediately appears at the exact moment nearby customers are searching for your precise services.' 
    },
    { 
      title: 'Business Cards, Brochures & Branding Materials', 
      category: 'Print',
      description: 'Tangible brand experiences that leave a powerful lasting impression. High-quality physical marketing collateral designed to reflect the absolute premium nature of your business.' 
    },
    { 
      title: 'Media Production & Video Branding', 
      category: 'Production',
      description: 'Cinematic, compelling video content that stops thumbs and elevates your business presence. We handle scripting, filming, and editing to showcase your brand story in motion.' 
    },
    { 
      title: 'Workshops & Practical Training Programs', 
      category: 'Education',
      description: 'Empowering your team with actionable, cutting-edge marketing knowledge. Interactive sessions led by industry experts to build your internal capabilities and strategic confidence.' 
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section 
      id="services" 
      className="relative w-full min-h-screen py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
        
        {/* Top Text Content */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#9ca3af' }}>
            OUR CAPABILITIES
          </p>
          <h2 
            className="font-serif font-bold mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              color: '#000000',
            }}
          >
            What Niraah {' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Will Do
            </span>
          </h2>
          <p className="text-base sm:text-xl" style={{ color: '#6b7280' }}>
            We provide strategic services designed to generate qualified leads, elevate your brand presence, and accelerate your business growth through data-driven action.
          </p>
        </div>

        {/* Full-Screen 16:9 Stacked Cards Container */}
        <div className="w-full relative flex items-center justify-center perspective-[1000px] mb-20" style={{ height: '50vh', minHeight: '400px' }}>
          {services.map((service, index) => {
            // Calculate relative offset
            const offset = (index - activeIndex + services.length) % services.length;
            
            // Only show next 3 cards in stack to avoid visual clutter
            if (offset > 3 && offset !== services.length - 1) return null;

            const isCurrent = offset === 0;
            const isSlidingAway = offset === services.length - 1;

            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = services.length - offset;

            if (isSlidingAway) {
              // Animating out (up and fade slightly)
              translateY = -200;
              scale = 1.05;
              opacity = 0;
              zIndex = services.length + 1;
            } else {
              // Stack downwards
              translateY = offset * 30;
              scale = 1 - (offset * 0.05);
              opacity = 1 - (offset * 0.15);
            }

            return (
              <div
                key={index}
                className="absolute w-full max-w-5xl aspect-video transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top shadow-2xl"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: isCurrent ? 'auto' : 'none',
                }}
              >
                <div 
                  className="p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem] w-full h-[300px] sm:h-[450px] lg:h-[600px] flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #f3f4f6',
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                  }}
                >
                  <div className="flex-1">
                    <span 
                      className="inline-block px-4 py-2 text-xs sm:text-sm font-semibold rounded-full mb-6 sm:mb-10" 
                      style={{ 
                        backgroundColor: 'rgba(168, 85, 247, 0.1)',
                        color: '#9333ea'
                      }}
                    >
                      {service.category}
                    </span>
                    <h3 
                      className="font-serif font-bold leading-tight mb-4 sm:mb-6" 
                      style={{ 
                        color: '#000000',
                        fontSize: 'clamp(1.75rem, 4vw, 3.5rem)'
                      }}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Render description only if not heavily scaled away for performance & clarity */}
                    <p 
                      className="text-base sm:text-lg lg:text-xl max-w-4xl" 
                      style={{ 
                        color: '#4b5563', 
                        lineHeight: '1.6',
                        opacity: isCurrent ? 1 : 0.4,
                        transition: 'opacity 0.5s ease'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Interactive Button overlayed strictly on the active card */}
                  {isCurrent && (
                     <button
                        onClick={handleNext}
                        className="self-end p-5 sm:p-6 rounded-full transition-transform hover:scale-110 active:scale-95 group shadow-lg flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          color: '#ffffff'
                        }}
                     >
                        <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
                     </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
