'use client';

import React from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';

const ResultsSection = () => {
  const cards = [
    {
      icon: TrendingUp,
      value: '250%',
      metric: 'Visibility Growth',
      desc: 'Driven by insight-based content planning',
    },
    {
      icon: Target,
      value: '-40%',
      metric: 'Cost Per Lead',
      desc: 'With measurable lead generation',
    },
    {
      icon: Users,
      value: '95%',
      metric: 'Success Rate',
      desc: 'Real outcomes from implementations',
    },
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 sm:mb-20 space-y-3">
          <h2 className="font-serif font-bold" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', color: '#000000', whiteSpace: 'pre-wrap' }}>
            Real Results for
            <br />
            <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Real Clients
            </span>
          </h2>
          <p style={{ color: '#666666', fontSize: '16px' }}>
            We show real performance, not inflated promises.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group p-8 transition-all duration-300 hover:scale-105"
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={28} style={{ color: '#10b981' }} />
                </div>

                {/* Metric value */}
                <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#000000', marginBottom: '8px' }}>
                  {card.value}
                </div>

                {/* Metric label */}
                <div style={{ color: '#10b981', fontSize: '12px', fontWeight: '600', marginBottom: '12px' }}>
                  {card.metric}
                </div>

                {/* Description */}
                <p style={{ color: '#666666', fontSize: '14px' }}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
