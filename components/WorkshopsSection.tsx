'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkshopsSection = () => {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a2414 0%, #050f08 100%)' }}
    >
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="badge-green">OUR SERVICES</span>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#f0fdf4' }}>
              Workshops &{' '}
              <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Practical Training
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-lg" style={{ color: '#bbf7d0' }}>
                We conduct result-oriented workshops designed for business owners, freelancers, students, and working professionals who want to generate real results using digital platforms — not just learn theory.
              </p>

              <ul className="space-y-4">
                {[
                  { num: '1.', title: 'Meta Ads Mastery', desc: 'Learn to create, launch, and optimize high-converting campaigns.' },
                  { num: '2.', title: 'Social Media Management', desc: 'Manage Instagram and Facebook pages strategically, not randomly.' },
                  { num: '3.', title: 'Google My Business Growth', desc: 'Rank locally and attract genuine customers through search and maps.' },
                  { num: '4.', title: 'Canva for Business', desc: 'Create professional, sales-driven content without depending on designers.' },
                ].map((item) => (
                  <li key={item.num} className="flex items-start gap-3">
                    <span className="font-bold mt-1 text-lg" style={{ color: '#4ade80' }}>{item.num}</span>
                    <div style={{ color: '#bbf7d0' }}>
                      <span className="font-bold" style={{ color: '#f0fdf4' }}>{item.title}</span> – {item.desc}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-4 space-y-3">
                <p className="text-base" style={{ color: '#bbf7d0' }}>
                  <strong style={{ color: '#f0fdf4' }}>Live practical implementation</strong> with real campaign setup and strategy clarity.
                </p>
                <p className="text-base" style={{ color: '#bbf7d0' }}>
                  Sessions structured from basics to advanced levels for <strong style={{ color: '#f0fdf4' }}>measurable results</strong>.
                </p>
              </div>
            </div>

            <button className="btn-primary mt-4">
              LEARN MORE
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right — Glass panel */}
          <div className="relative">
            <div
              className="rounded-3xl p-6 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(34,197,94,0.2)',
              }}
            >
              <div
                className="rounded-2xl aspect-video flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.08) 100%)' }}
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👥</div>
                  <div className="text-2xl font-bold" style={{ color: '#4ade80' }}>Team Collaboration</div>
                  <p className="mt-2 text-sm" style={{ color: '#86efac' }}>Hands-on workshops & training</p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #22c55e, transparent)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
