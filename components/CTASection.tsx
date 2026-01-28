'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Let's discuss your project
            </h2>

            <p className="text-base sm:text-lg text-gray-700">
              Ready to scale your brand? Let's build growth that's measurable and sustainable.
            </p>

            <button className="btn-primary w-full sm:w-auto justify-center group">
              GET STARTED
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right - Decorative Illustration */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center justify-center">
              {/* Abstract connection illustration */}
              <div className="relative w-full h-64 sm:h-80">
                {/* Circles representing connections */}
                <div className="absolute top-0 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-full animate-float"></div>
                <div className="absolute top-1/4 right-0 w-14 h-14 sm:w-20 sm:h-20 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-yellow-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-orange-300 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-0 right-0 w-14 h-14 sm:w-20 sm:h-20 bg-yellow-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" style={{ zIndex: -1 }}>
                  <path d="M 100 50 Q 200 100 300 150" stroke="#FFC107" strokeWidth="2" fill="none" className="animate-pulse-slow" />
                  <path d="M 150 100 Q 250 150 350 200" stroke="#F59E0B" strokeWidth="2" fill="none" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                  <path d="M 200 150 Q 300 200 400 250" stroke="#FFC107" strokeWidth="2" fill="none" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

