'use client';

import React, { useEffect, useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import ViralFlowPath from './ViralFlowPath';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #020b05 0%, #050f08 50%, #071a0d 100%)' }}
    >
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full animate-orb-float"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <div
          className="absolute top-1/3 right-0 w-80 h-80 rounded-full animate-orb-float"
          style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)', filter: 'blur(50px)', animationDelay: '1.5s' }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full animate-orb-float"
          style={{ background: 'radial-gradient(circle, rgba(22,163,74,0.15) 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '3s' }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="animate-fadeInDown">
              <span className="badge-green inline-block">NIRAAH DIGI CONNECT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fadeInUp" style={{ color: '#f0fdf4' }}>
              Where Strategy Meets{' '}
              <span
                className="block sm:inline"
                style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e, #86efac)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                Measurable Growth
              </span>
            </h1>

            <p className="text-base sm:text-lg max-w-xl animate-fadeInUp stagger-2" style={{ color: '#bbf7d0' }}>
              We don't sell random digital services. We build predictable systems that turn attention into revenue.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fadeInUp stagger-3">
              <button className="btn-primary w-full sm:w-auto justify-center">
                <Play size={18} fill="white" />
                VIEW RESULTS
              </button>
              <button className="btn-secondary w-full sm:w-auto justify-center">
                BOOK A CALL
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 animate-fadeInUp stagger-4">
              {[
                { value: '5.6M+', label: 'Total Reach' },
                { value: '12K+', label: 'Leads Generated' },
                { value: '4.8★', label: 'Client Rating' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-xl font-bold" style={{ color: '#4ade80' }}>{item.value}</div>
                  <div className="text-xs mt-1 uppercase tracking-wide" style={{ color: '#86efac' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content — Glass visual panel */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main glass hero card */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden animate-green-glow"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34,197,94,0.25)',
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, transparent 60%)', borderRadius: '24px' }}
              />

              {/* Central orb */}
              <div className="flex items-center justify-center py-8">
                <div className="relative">
                  <div
                    className="w-40 h-40 sm:w-56 sm:h-56 rounded-full animate-orb-float flex items-center justify-center"
                    style={{
                      background: 'radial-gradient(circle, rgba(34,197,94,0.35) 0%, rgba(22,163,74,0.15) 60%, transparent 100%)',
                      boxShadow: '0 0 60px rgba(34,197,94,0.3), 0 0 120px rgba(34,197,94,0.1)',
                    }}
                  >
                    <div
                      className="w-24 h-24 sm:w-36 sm:h-36 rounded-full flex items-center justify-center text-5xl sm:text-6xl"
                      style={{
                        background: 'rgba(34,197,94,0.15)',
                        border: '1px solid rgba(74,222,128,0.4)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      🌿
                    </div>
                  </div>
                  {/* Orbit ring */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed animate-pulse-slow"
                    style={{ borderColor: 'rgba(74,222,128,0.25)', transform: 'scale(1.3)' }}
                  />
                </div>
              </div>

              {/* Floating stat chips */}
              <div
                className="absolute top-6 right-6 rounded-xl px-4 py-2 text-right animate-fadeInDown stagger-4"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(34,197,94,0.3)',
                }}
              >
                <div className="text-xs" style={{ color: '#86efac' }}>Revenue Growth</div>
                <div className="text-xl font-bold" style={{ color: '#4ade80' }}>↑ 250%</div>
              </div>

              <div
                className="absolute bottom-6 left-6 rounded-xl px-4 py-2 animate-fadeInUp stagger-5"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(34,197,94,0.3)',
                }}
              >
                <div className="text-xs" style={{ color: '#86efac' }}>Active Campaigns</div>
                <div className="text-xl font-bold" style={{ color: '#4ade80' }}>80+</div>
              </div>
            </div>

            {/* Stats bar below hero card */}
            <div
              className="mt-6 rounded-2xl p-5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(34,197,94,0.15)',
              }}
            >
              <div className="grid grid-cols-3 gap-4 divide-x" style={{ borderColor: 'rgba(34,197,94,0.2)' }}>
                {[
                  { value: '12', label: 'Yrs Experience' },
                  { value: '5.6M+', label: 'Total Users' },
                  { value: '80+', label: 'Team' },
                ].map((s) => (
                  <div key={s.label} className="text-center px-2">
                    <div className="text-2xl font-bold" style={{ color: '#22c55e' }}>{s.value}</div>
                    <div className="text-xs mt-1 uppercase tracking-wide" style={{ color: '#86efac' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Viral Flow Path Section */}
        <div
          className={`mt-24 sm:mt-36 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fadeInUp" style={{ color: '#f0fdf4' }}>
              How Your Brand Goes{' '}
              <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e, #86efac)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Viral
              </span>
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto animate-fadeInUp stagger-2" style={{ color: '#bbf7d0' }}>
              We transform your ideas into viral campaigns through our proven 4-stage process
            </p>
          </div>
          <ViralFlowPath />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
