'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const HowWeWorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Grow the path dash array offset based on scroll
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    { 
      number: '01', 
      title: 'Audience & Offer Research', 
      description: 'We deeply understand your target audience, their pain points, and the unique value your business offers. This foundation ensures all strategies are customer-focused.' 
    },
    { 
      number: '02', 
      title: 'Content & Funnel Setup', 
      description: 'We create compelling content and design conversion-focused funnels that guide prospects toward becoming qualified leads and customers.' 
    },
    { 
      number: '03', 
      title: 'Traffic (Ads + Organic)', 
      description: 'Deploy both paid ads (Meta, Google) and organic social media strategies to drive consistent, qualified traffic to your offers.' 
    },
    { 
      number: '04', 
      title: 'Conversion & Optimization', 
      description: 'Continuously monitor performance, test improvements, and optimize campaigns for better results, scaling what works.' 
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-white z-10 overflow-hidden w-full min-h-screen flex flex-col justify-center" 
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto relative w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-20 sm:mb-32 space-y-3 relative z-10 w-full">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#9ca3af' }}>
            OUR PROCESS
          </p>
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: '#000000', whiteSpace: 'pre-wrap' }}>
            How We
            <br />
            <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Work
            </span>
          </h2>
        </div>

        {/* The Zig-Zag Layout */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* 
            SVG Path Background 
            Hidden on very small screens, drawn dynamically on medium+
          */}
          <div className="absolute inset-0 hidden md:block w-full h-full pointer-events-none z-0" style={{ left: '50%', transform: 'translateX(-50%)' }}>
            <svg 
              className="w-full h-full absolute" 
              viewBox="0 0 1000 1200" 
              preserveAspectRatio="none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Faint background track */}
              <path 
                d="M500,0 C500,100 800,150 800,300 C800,450 200,450 200,600 C200,750 800,750 800,900 C800,1050 500,1100 500,1200" 
                stroke="#f3f4f6" 
                strokeWidth="4" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* The animated animated drawing line */}
              <motion.path 
                d="M500,0 C500,100 800,150 800,300 C800,450 200,450 200,600 C200,750 800,750 800,900 C800,1050 500,1100 500,1200" 
                stroke="#10b981" 
                strokeWidth="6" 
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  pathLength: pathLength
                }}
              />
            </svg>
          </div>

          {/* Steps */}
          <div className="relative z-10 space-y-16 md:space-y-32">
            {steps.map((step, index) => {
              // Determine if this step should sit on the left or the right side
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* The visible card content */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div 
                      className="group p-8 sm:p-10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative w-full max-w-md"
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '30px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
                      }}
                    >
                      {/* Floating Step Number */}
                      <div 
                        className="absolute -top-6 -left-6 w-16 h-16 rounded-full flex items-center justify-center font-serif text-2xl font-bold"
                        style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          color: '#ffffff',
                          boxShadow: '0 10px 20px rgba(16,185,129,0.3)',
                          border: '4px solid #ffffff'
                        }}
                      >
                        {step.number}
                      </div>

                      <h3 className="font-serif font-bold text-xl sm:text-2xl mb-4 mt-2" style={{ color: '#000000' }}>
                        {step.title}
                      </h3>
                      <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.7' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for the other side of the zig-zag layout (to force alignment) */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
