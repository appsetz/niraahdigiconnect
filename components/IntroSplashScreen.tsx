'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroSplashScreen = () => {
  const { scrollY } = useScroll();
  
  // Hide the splash screen once it's completely covered by the Hero section (100vh)
  // We use a small buffer to ensure it's fully gone
  const opacity = useTransform(scrollY, [0, 800, 1000], [1, 1, 0]);
  const pointerEvents = useTransform(scrollY, (latest) => latest > 900 ? 'none' : 'auto');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3    // Initial delay
      }
    }
  };

  const slowTransition = { duration: 2.5, ease: [0.22, 1, 0.36, 1] as const };

  const topSubtitleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: slowTransition }
  };

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: slowTransition }
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: slowTransition }
  };

  return (
    <motion.section 
      style={{ opacity, pointerEvents: pointerEvents as any }}
      className="w-full h-screen bg-white flex flex-col justify-center items-center sticky top-0 z-0 px-4"
    >
      <motion.div 
        className="flex flex-col items-center justify-center text-center mt-[-10vh] md:mt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={topSubtitleVariant}
          className="font-serif tracking-wide mb-6 sm:mb-8 text-black"
          style={{
            fontSize: 'clamp(1rem, 3.2vw, 1.8rem)',
            fontWeight: 500,
          }}
        >
          The Marketing Agency
        </motion.h2>

        <h1
          className="font-serif leading-none flex flex-col items-center"
          style={{
            fontSize: 'clamp(3.5rem, 13vw, 12rem)',
            fontWeight: 500,
            color: '#10b981', // Solid premium green
            letterSpacing: '-0.02em'
          }}
        >
          <motion.span variants={leftVariant}>NIRAAH</motion.span>
          <motion.span variants={rightVariant}>DIGICONNECT</motion.span>
        </h1>
      </motion.div>
    </motion.section>
  );
};

export default IntroSplashScreen;
