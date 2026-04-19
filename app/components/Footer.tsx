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

            <div className="flex flex-col sm:flex-row items-center gap-4">
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

              <motion.a
                href="https://wa.me/917603839337?text=Hi%20Niraah%2C%20I%27d%20like%20to%20start%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-sans font-bold text-sm tracking-wider uppercase rounded-full transition-all border-2"
                style={{ borderColor: '#25D366', color: '#25D366', padding: '18px 40px' }}
                whileHover={{ scale: 1.05, background: 'rgba(37,211,102,0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WHATSAPP US
              </motion.a>
            </div>
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
            <a href="#" className="hover:text-[#10B981] transition-colors" style={{ color: 'var(--text-2)' }} aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}
