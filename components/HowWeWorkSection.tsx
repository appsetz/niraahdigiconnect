'use client';

import React from 'react';

const HowWeWorkSection = () => {
  const steps = [
    { number: '01', title: 'Audience & Offer Research', description: 'We deeply understand your target audience, their pain points, and the unique value your business offers. This foundation ensures all strategies are customer-focused.' },
    { number: '02', title: 'Content & Funnel Setup', description: 'We create compelling content and design conversion-focused funnels that guide prospects toward becoming qualified leads and customers.' },
    { number: '03', title: 'Traffic (Ads + Organic)', description: 'Deploy both paid ads (Meta, Google) and organic social media strategies to drive consistent, qualified traffic to your offers.' },
    { number: '04', title: 'Conversion & Optimization', description: 'Continuously monitor performance, test improvements, and optimize campaigns for better results, scaling what works.' },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #dcfce7 0%, #f0fdf4 100%)' }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)', filter: 'blur(30px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="badge-green">OUR PROCESS</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-6" style={{ color: '#0f2817' }}>
            How we{' '}
            <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              work
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="service-card">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(22,163,74,0.1))',
                    border: '1px solid rgba(34,197,94,0.3)',
                  }}
                >
                  <span className="text-2xl font-bold" style={{ color: '#16a34a' }}>{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0f2817' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#166534' }}>{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5"
                  style={{ background: 'linear-gradient(90deg, rgba(34,197,94,0.5), transparent)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
