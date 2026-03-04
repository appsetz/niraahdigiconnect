'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const WhoWeWorkWith = () => {
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

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #071a0d 0%, #050f08 100%)' }}
    >
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="badge-green inline-block animate-scaleIn">ABOUT</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#f0fdf4' }}>
              Who we{' '}
              <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                work with
              </span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#bbf7d0' }}>We work with:</p>

            <ul className="space-y-4">
              {['Brands', 'Personal brands', 'Coaches & institutes'].map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 text-base sm:text-lg group transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms`, color: '#bbf7d0' }}
                >
                  <CheckCircle
                    className="flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
                    size={20}
                    style={{ color: '#22c55e' }}
                  />
                  <span className="group-hover:text-green-400 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-base sm:text-lg font-semibold pt-4" style={{ color: '#f0fdf4' }}>
              We partner with clients serious about growth.
            </p>

            <button className="btn-primary mt-4 w-full sm:w-auto justify-center">
              LEARN MORE
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right — Glass dashboard card */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div
              className="rounded-3xl p-6 hover:scale-[1.02] transition-all duration-500"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(34,197,94,0.2)',
              }}
            >
              <div
                className="rounded-2xl p-4 sm:p-8 aspect-square flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(22,163,74,0.06) 100%)' }}
              >
                {/* Dashboard mockup */}
                <div
                  className="rounded-xl p-4 sm:p-6 w-full max-w-sm"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(34,197,94,0.25)',
                  }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs sm:text-sm font-semibold" style={{ color: '#86efac' }}>Recent activity</div>
                      <div className="text-xl sm:text-2xl font-bold animate-pulse-slow" style={{ color: '#4ade80' }}>$8.0</div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        { color: '#22c55e', label: 'New Project', sub: 'facebook.highspeedseo.com', val: '$8.0' },
                        { color: '#4ade80', label: 'Another Project', sub: 'instagram.com', val: '$5.5' },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: row.color }} />
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-medium truncate" style={{ color: '#f0fdf4' }}>{row.label}</div>
                            <div className="text-[10px] sm:text-xs truncate" style={{ color: '#86efac' }}>{row.sub}</div>
                          </div>
                          <div className="text-xs sm:text-sm font-semibold flex-shrink-0" style={{ color: '#4ade80' }}>{row.val}</div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 sm:pt-4" style={{ borderTop: '1px solid rgba(34,197,94,0.2)' }}>
                      <div className="flex items-center justify-between">
                        <div className="text-xs sm:text-sm" style={{ color: '#86efac' }}>Total value</div>
                        <div className="text-xl sm:text-2xl font-bold" style={{ color: '#22c55e' }}>$150</div>
                      </div>
                      <div className="mt-2">
                        <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#f0fdf4' }}>258</div>
                        <div className="text-[10px] sm:text-xs" style={{ color: '#86efac' }}>Active campaigns</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
