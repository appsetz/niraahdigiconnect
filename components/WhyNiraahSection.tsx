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
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071a0d 0%, #0a2414 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Glass panels */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-4"
                style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', backdropFilter: 'blur(12px)' }}
              >
                <div
                  className="rounded-xl aspect-square flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(22,163,74,0.1))' }}
                >
                  <span className="text-5xl">👥</span>
                </div>
              </div>
              <div
                className="rounded-2xl p-4 mt-8"
                style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(74,222,128,0.2)', backdropFilter: 'blur(12px)' }}
              >
                <div
                  className="rounded-xl aspect-square flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(74,222,128,0.15), rgba(34,197,94,0.08))' }}
                >
                  <span className="text-5xl">💼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="badge-green">WHY CHOOSE US</span>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#f0fdf4' }}>
              We Build Digital Identities{' '}
              <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                That Grow Businesses
              </span>
            </h2>

            <p className="text-lg" style={{ color: '#bbf7d0' }}>
              At NIRAAH DIGI CONNECT, we don't just run random campaigns. We focus on building strong digital identities that deliver measurable results and actual business growth.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: 'linear-gradient(135deg, #16a34a, #22c55e)', boxShadow: '0 0 10px rgba(34,197,94,0.4)' }}
                  >
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-base" style={{ color: '#bbf7d0' }}>{reason}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary mt-6">
              BOOK A CONSULTATION →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNiraahSection;
