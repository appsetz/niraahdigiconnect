'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';

const ResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setIsVisible(true); }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: TrendingUp,
      value: '↑ 250%',
      metric: 'Visibility Growth',
      title: 'Increased Visibility',
      desc: 'Driven by insight-based content planning',
      color: '#22c55e',
    },
    {
      icon: Target,
      value: '-40%',
      metric: 'Cost Per Lead',
      title: 'Optimized Ad Spend',
      desc: 'With measurable lead generation',
      color: '#4ade80',
    },
    {
      icon: Users,
      value: '95%',
      metric: 'Success Rate',
      title: 'Real Implementation',
      desc: 'Real outcomes from workshop participants',
      color: '#86efac',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #050f08 0%, #071a0d 100%)' }}
    >
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-green inline-block animate-scaleIn">RESULTS & INSIGHTS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 mb-4 px-4" style={{ color: '#f0fdf4' }}>
            Real Results for{' '}
            <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Real Clients
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ color: '#bbf7d0' }}>
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
                className={`service-card group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className="mb-4 overflow-hidden rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px', padding: '24px' }}
                >
                  <div className="text-center">
                    <Icon className="mx-auto mb-3" size={32} style={{ color: card.color }} />
                    <div className="text-4xl sm:text-5xl font-bold animate-pulse-slow" style={{ color: card.color }}>{card.value}</div>
                    <div className="text-xs sm:text-sm mt-2" style={{ color: '#bbf7d0' }}>{card.metric}</div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#f0fdf4' }}>{card.title}</h3>
                <p className="text-xs sm:text-sm" style={{ color: '#bbf7d0' }}>{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Metrics */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: '5.6M+', label: 'Total Reach' },
            { value: '12K+', label: 'Leads Generated' },
            { value: '80+', label: 'Active Campaigns' },
            { value: '4.8★', label: 'Client Rating' },
          ].map((metric, index) => (
            <div
              key={metric.label}
              className="text-center p-4 sm:p-6 rounded-xl group cursor-pointer transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(34,197,94,0.15)',
                transitionDelay: `${(index + 5) * 100}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,222,128,0.4)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.15)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              <div className="text-2xl sm:text-3xl font-bold group-hover:scale-110 transform transition-all duration-300" style={{ color: '#22c55e' }}>
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm mt-2" style={{ color: '#86efac' }}>{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
