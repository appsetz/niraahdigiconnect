'use client';

import { motion } from 'framer-motion';

export default function BrandShowcase() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any
      }
    })
  };

  const words = ['Build', 'Your', 'Brand', 'With'];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden" style={{ background: '#000000' }}>
      {/* Background glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Big Static 3D N */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          {/* 3D N using CSS */}
          <div className="relative inline-block">
            <svg 
              width="280" 
              height="320" 
              viewBox="0 0 280 320" 
              className="md:w-[350px] md:h-[400px] lg:w-[420px] lg:h-[480px]"
            >
              {/* Back face - darkest */}
              <g transform="translate(20, 20)">
                {/* Left bar back */}
                <polygon 
                  points="0,0 50,0 50,280 0,280" 
                  fill="#065f46"
                />
                {/* Right bar back */}
                <polygon 
                  points="190,0 240,0 240,280 190,280" 
                  fill="#065f46"
                />
                {/* Diagonal back */}
                <polygon 
                  points="0,0 50,0 240,280 190,280" 
                  fill="#065f46"
                />
              </g>

              {/* Middle layer - medium */}
              <g transform="translate(10, 10)">
                {/* Left bar middle */}
                <polygon 
                  points="0,0 50,0 50,280 0,280" 
                  fill="#059669"
                />
                {/* Right bar middle */}
                <polygon 
                  points="190,0 240,0 240,280 190,280" 
                  fill="#059669"
                />
                {/* Diagonal middle */}
                <polygon 
                  points="0,0 50,0 240,280 190,280" 
                  fill="#059669"
                />
              </g>

              {/* Front face - brightest */}
              <g>
                {/* Left vertical bar */}
                <polygon 
                  points="0,0 50,0 50,280 0,280" 
                  fill="#10b981"
                />
                {/* Right vertical bar */}
                <polygon 
                  points="190,0 240,0 240,280 190,280" 
                  fill="#10b981"
                />
                {/* Diagonal */}
                <polygon 
                  points="0,0 50,0 240,280 190,280" 
                  fill="#10b981"
                />
              </g>

              {/* Highlight edges */}
              <g>
                <polygon 
                  points="0,0 50,0 50,10 0,10" 
                  fill="#34d399"
                />
                <polygon 
                  points="190,0 240,0 240,10 190,10" 
                  fill="#34d399"
                />
                <polygon 
                  points="0,0 10,0 10,280 0,280" 
                  fill="#34d399"
                />
              </g>
            </svg>

            {/* Glow effect behind N */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 60%)',
                filter: 'blur(40px)',
                zIndex: -1,
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        {/* Animated text below N */}
        <div className="mt-8">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
            {words.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white uppercase"
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block"
          >
            <span 
              className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              NIRAAH DIGI CONNECT
            </span>
            <motion.div
              className="absolute -inset-2 rounded-lg opacity-50"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                filter: 'blur(20px)',
                zIndex: -1,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-black text-lg uppercase tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Journey
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
