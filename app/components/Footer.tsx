'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll progress for the bloom effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Transform values for bloom effect
  const bloomScale = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const bloomOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.7], [50, 0]);
  
  // Petal rotations
  const petalRotations = [
    useTransform(scrollYProgress, [0, 1], [-90, 0]),
    useTransform(scrollYProgress, [0, 1], [-90, 45]),
    useTransform(scrollYProgress, [0, 1], [-90, 90]),
    useTransform(scrollYProgress, [0, 1], [-90, 135]),
    useTransform(scrollYProgress, [0, 1], [-90, 180]),
    useTransform(scrollYProgress, [0, 1], [-90, 225]),
    useTransform(scrollYProgress, [0, 1], [-90, 270]),
    useTransform(scrollYProgress, [0, 1], [-90, 315]),
  ];

  return (
    <>
      {/* Flower Bloom CTA Section */}
      <section
        ref={sectionRef}
        id="contact"
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{
          padding: '100px 24px',
          background: 'linear-gradient(to bottom, var(--bg-surface) 0%, var(--bg-surface) 50%, var(--bg-main) 50%, var(--bg-main) 100%)',
          minHeight: '60vh',
        }}
      >
        {/* Blooming Background - Only upper half */}
        <motion.div
          className="absolute top-0 left-0 right-0"
          style={{
            height: '50%',
            scale: bloomScale,
            opacity: bloomOpacity,
            background: 'radial-gradient(ellipse at center bottom, var(--bg-main) 0%, var(--bg-main) 100%)',
            borderRadius: '0 0 50% 50%',
            transformOrigin: 'center bottom',
          }}
        />

        {/* Flower Petals - Bloom on scroll - Only in upper half */}
        <div className="absolute top-0 left-0 right-0 h-[50%] flex items-end justify-center pointer-events-none overflow-hidden">
          {/* Inner Petals */}
          {petalRotations.map((rotation, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: '300px',
                height: '300px',
                rotate: rotation,
                scale: bloomScale,
                opacity: bloomOpacity,
                transformOrigin: 'center center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50% 50% 50% 50%',
                  background: `linear-gradient(${i * 45}deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.05))`,
                }}
              />
            </motion.div>
          ))}
          
          {/* Outer ring petals */}
          {petalRotations.map((rotation, i) => (
            <motion.div
              key={`outer-${i}`}
              className="absolute"
              style={{
                width: '450px',
                height: '450px',
                rotate: rotation,
                scale: bloomScale,
                opacity: bloomOpacity,
                transformOrigin: 'center center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: `radial-gradient(ellipse at center, transparent 30%, rgba(16, 185, 129, 0.08) 50%, transparent 70%)`,
                  transform: `rotate(22.5deg)`,
                }}
              />
            </motion.div>
          ))}

          {/* Center bloom circle */}
          <motion.div
            className="absolute"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)',
              scale: bloomScale,
              opacity: bloomOpacity,
            }}
          />
        </div>

        {/* Content - Split between upper and lower */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col h-full justify-center">
          {/* Upper half - Ready To */}
          <motion.div 
            className="flex-1 flex items-end justify-center pb-32"
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
          >
            <h2
              className="font-display font-bold leading-[0.85] tracking-tight uppercase"
              style={{ 
                fontSize: 'clamp(48px, 10vw, 140px)',
                color: 'var(--text-1)',
              }}
            >
              Ready To
            </h2>
          </motion.div>

          {/* Lower half - Scale? + CTA */}
          <motion.div 
            className="flex-1 flex flex-col items-center justify-start pt-32"
            style={{
              opacity: contentOpacity,
            }}
          >
            <h2
              className="font-display font-bold leading-[0.85] tracking-tight uppercase mb-6"
              style={{ 
                fontSize: 'clamp(48px, 10vw, 140px)',
                background: 'linear-gradient(135deg, #10B981, #34D399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Scale?
            </h2>

            <p
              className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8"
              style={{ color: 'var(--text-2)' }}
            >
              Let&apos;s turn your vision into a digital reality.
            </p>

            <motion.a
              href="mailto:hello@niraahdigiconnect.com"
              className="inline-flex items-center justify-center font-sans font-bold text-sm tracking-wider uppercase rounded-full transition-all hover:shadow-[0_10px_40px_rgba(16,185,129,0.3)]"
              style={{ background: 'var(--text-1)', color: 'var(--bg-main)', padding: '20px 48px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              START A PROJECT 
              <span className="ml-3 text-lg">→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer - Same as before with light background */}
      <footer
        className="relative"
        style={{
          background: 'var(--bg-main)',
          padding: '60px 24px 40px',
          borderTop: '1px solid var(--border-1)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo Group */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 opacity-90 grayscale-[50%] hover:grayscale-0 transition-opacity">
              <img src="/images/logo.png" alt="Niraah Logo" width="140" />
            </div>
            {/* Copyright / Credit */}
            <div className="flex flex-col items-center md:items-start gap-1 md:gap-2 font-sans text-sm font-medium text-center md:text-left" style={{ color: 'var(--text-2)' }}>
              <p>Made With <span className="text-[#10B981]">💚</span></p>
              <p>© {new Date().getFullYear()} Niraah Digi Connect. All rights reserved.</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#10B981] transition-colors" style={{ color: 'var(--text-2)' }} aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="#" className="hover:text-[#10B981] transition-colors" style={{ color: 'var(--text-2)' }} aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="hover:text-[#10B981] transition-colors" style={{ color: 'var(--text-2)' }} aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="hover:text-[#10B981] transition-colors" style={{ color: 'var(--text-2)' }} aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}
