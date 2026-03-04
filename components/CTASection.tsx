'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
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
      style={{ background: 'linear-gradient(180deg, #050f08 0%, #020b05 100%)' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA glass card */}
        <div
          className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(34,197,94,0.25)',
          }}
        >
          {/* Inner gradient */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, transparent 60%)' }}
          />

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="badge-green">READY TO SCALE?</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#f0fdf4' }}>
                Let's discuss{' '}
                <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  your project
                </span>
              </h2>
              <p className="text-base sm:text-lg" style={{ color: '#bbf7d0' }}>
                Ready to scale your brand? Let's build growth that's measurable and sustainable.
              </p>
              <button className="btn-primary w-full sm:w-auto justify-center group">
                GET STARTED
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Right — Floating green orbs */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-64 sm:h-80">
                  {[
                    { size: 'w-16 h-16 sm:w-24 sm:h-24', pos: 'top-0 right-1/4', color: 'rgba(34,197,94,0.7)', delay: '0s' },
                    { size: 'w-14 h-14 sm:w-20 sm:h-20', pos: 'top-1/4 right-0', color: 'rgba(74,222,128,0.6)', delay: '0.5s' },
                    { size: 'w-20 h-20 sm:w-28 sm:h-28', pos: 'top-1/2 right-1/3', color: 'rgba(22,163,74,0.5)', delay: '1s' },
                    { size: 'w-12 h-12 sm:w-16 sm:h-16', pos: 'bottom-1/4 right-1/4', color: 'rgba(134,239,172,0.4)', delay: '1.5s' },
                    { size: 'w-14 h-14 sm:w-20 sm:h-20', pos: 'bottom-0 right-0', color: 'rgba(34,197,94,0.6)', delay: '2s' },
                  ].map((orb, i) => (
                    <div
                      key={i}
                      className={`absolute ${orb.size} ${orb.pos} rounded-full animate-float`}
                      style={{
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                        animationDelay: orb.delay,
                        filter: 'blur(2px)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
