'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const vh = window.innerHeight;
      
      // We start at scroll=100vh (after splash), so we offset thresholds by vh
      if (scroll < vh * 1.8) setActiveText(0);
      else if (scroll < vh * 2.6) setActiveText(1);
      else if (scroll < vh * 3.4) setActiveText(2);
      else setActiveText(3);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroTexts = [
    { line1: "We Generate", line2: "Qualified Leads" },
    { line1: "Data Driven", line2: "Meta Ads" },
    { line1: "Conversion", line2: "Focused Systems" },
    { line1: "Proven", line2: "Growth Strategies" }
  ];

  return (
    <>
      {/* 
        This wrapper dictates how long the user scrolls through the Hero Section.
        It prevents the StickyStackLayout from sliding up and covering the Hero until the Hero finishes animating.
      */}
      <div className="relative w-full" style={{ height: '400vh' }}>
        {/* Main Hero Section */}
        <section
          id="home"
          className="sticky top-0 w-full min-h-screen flex items-center justify-center overflow-visible pt-20"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #1a1a1a 100%)',
            zIndex: 10,
          }}
        >
          {/* Gradient overlay accents */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            <div
              className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
            <div className="flex flex-col items-center justify-center gap-12 py-20">
              {/* Main Typography - Serif, Large */}
              <div className="relative h-64 sm:h-80 flex items-center justify-center">
                {heroTexts.map((text, index) => (
                  <div
                    key={index}
                    className="absolute text-center transition-all duration-700"
                    style={{
                      opacity: activeText === index ? 1 : 0,
                      transform: activeText === index ? 'translateY(0)' : 'translateY(30px)',
                      pointerEvents: activeText === index ? 'auto' : 'none',
                    }}
                  >
                    <h1 
                      className="flex flex-col items-center justify-center font-serif font-bold leading-[1.2] tracking-tight"
                      style={{
                        fontSize: 'clamp(2.5rem, 10vw, 8rem)',
                        color: '#000000',
                      }}
                    >
                      <span className="whitespace-nowrap">{text.line1}</span>
                      <span 
                        className="whitespace-nowrap mt-2"
                        style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {text.line2}
                      </span>
                    </h1>
                  </div>
                ))}
              </div>

              {/* Subheading */}
              <div className="text-center max-w-2xl animate-fadeInUp">
                <p className="font-serif text-lg sm:text-xl" style={{ color: '#374151' }}>
                  For local businesses through data-driven marketing solutions
                </p>
              </div>

              {/* CTA Button */}
              <div className="animate-fadeInUp">
                <button 
                  className="px-8 sm:px-10 py-3 sm:py-4 font-serif text-lg transition-all hover:scale-105 flex items-center gap-3"
                  style={{
                    border: '2px solid #000000',
                    borderRadius: '50px',
                    color: '#000000',
                    backgroundColor: 'transparent',
                  }}>
                  Start your project
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
