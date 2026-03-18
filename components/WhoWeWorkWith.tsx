'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhoWeWorkWith = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', color: '#000000', whiteSpace: 'pre-wrap' }}>
              Who We
              <br />
              <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Work With
              </span>
            </h2>

            <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8' }}>
              We partner with brands and businesses serious about sustainable, measurable growth.
            </p>

            {/* List */}
            <ul className="space-y-4">
              {['Established Brands', 'Personal Brands', 'Coaches & Institutes', 'E-commerce Businesses'].map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <CheckCircle size={20} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ color: '#333333', fontSize: '15px' }}>{item}</span>
                </li>
              ))}
            </ul>

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
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M1 8h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Right — Simple visual accent */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96">
              {/* Gradient boxes */}
              <div
                className="absolute top-10 left-0 w-32 h-32 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              />
              <div
                className="absolute bottom-20 right-10 w-40 h-40 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                }}
              />
              <div
                className="absolute top-1/2 right-0 w-24 h-24 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
