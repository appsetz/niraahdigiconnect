'use client';

import React from 'react';
import { Check } from 'lucide-react';

const WhyNiraahSection = () => {
  const reasons = [
    'Goal-oriented strategies (leads, sales, awareness)',
    'Highly customized plans specifically for your business',
    'All-in-one digital growth responsibility',
    'Creativity that converts through strong visuals',
    'Complete transparency with clear performance reports',
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left — Content */}
          <div className="space-y-8">
            <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', color: '#000000', whiteSpace: 'pre-wrap' }}>
              We Build Digital
              <br />
              <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Identities That Grow
              </span>
            </h2>

            <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', maxWidth: '500px' }}>
              We don't run random campaigns. We focus on building strong digital identities that deliver measurable results and actual business growth.
            </p>

            {/* Reasons list */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: '#10b981' }}
                  >
                    <Check size={12} className="text-white" />
                  </div>
                  <p style={{ color: '#333333', fontSize: '14px' }}>{reason}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="group inline-flex items-center gap-3 px-8 py-3 transition-all duration-300 hover:scale-105 mt-4"
              style={{
                border: '2px solid #000000',
                borderRadius: '50px',
                color: '#000000',
                backgroundColor: '#ffffff',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              Book Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M1 8h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Right — Visual accent */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96">
              {/* Gradient accent boxes */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNiraahSection;
