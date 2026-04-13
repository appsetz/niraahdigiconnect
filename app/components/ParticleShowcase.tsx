'use client';

import { motion } from 'framer-motion';
import { ParticleTextEffect } from './ui/particle-text-effect';

// Agency-related words for the particle effect
const agencyWords = [
  "NIRAAH",
  "GROWTH",
  "STRATEGY", 
  "DIGITAL",
  "SUCCESS",
  "SCALE",
  "BRAND",
  "IMPACT",
  "RESULTS",
  "DOMINATE"
];

export default function ParticleShowcase() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center py-20 lg:py-0"
      style={{ background: 'var(--bg-main)' }}
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <span className="uppercase tracking-[0.3em] text-xs font-bold text-[#10B981]">
            What Drives Us
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-4 uppercase" style={{ color: 'var(--text-1)' }}>
            Our <span style={{ color: 'var(--text-4)' }}>Core Values</span>
          </h2>
        </motion.div>

        {/* Particle Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1 flex items-center justify-center w-full"
        >
          <ParticleTextEffect 
            words={agencyWords}
            className="w-full max-w-7xl mx-auto"
          />
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm mt-6"
          style={{ color: 'var(--text-3)' }}
        >
          Words that define our mission • Auto-cycling every 3 seconds
        </motion.p>
      </div>
    </section>
  );
}
