'use client';

import React from 'react';

const TeamSection = () => {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071a0d 0%, #050f08 100%)' }}
    >
      <div
        className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#f0fdf4' }}>
            We are a team with enthusiasm{' '}
            <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              for communication
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#bbf7d0' }}>
            Your business has a story to tell and we're here to make it heard with META. Our team has the skills to make your brand stand out.
          </p>
          <button className="btn-primary mt-8">
            VIEW MORE →
          </button>
        </div>

        {/* Team Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            { emoji: '👥', label: 'Team Collaboration' },
            { emoji: '💼', label: 'Professional Team' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(34,197,94,0.18)',
              }}
            >
              <div
                className="aspect-video flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(22,163,74,0.06) 100%)' }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <div className="text-xl font-bold" style={{ color: '#4ade80' }}>{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
