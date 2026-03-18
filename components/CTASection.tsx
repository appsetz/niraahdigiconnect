'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative" style={{ background: '#ffffff' }}>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', color: '#000000', whiteSpace: 'pre-wrap' }}>
          Ready to Grow
          <br />
          <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Your Brand?
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg" style={{ color: '#666666', maxWidth: '600px', margin: '0 auto' }}>
          Let's build measurable, sustainable growth strategies tailored to your business. Start your free strategy call today.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <button
            className="group inline-flex items-center gap-3 px-8 py-4 transition-all duration-300 hover:scale-105"
            style={{
              border: '2px solid #000000',
              borderRadius: '50px',
              color: '#000000',
              backgroundColor: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
            }}
          >
            Start Free Strategy Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Gradient accent bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>
    </section>
  );
};

export default CTASection;
