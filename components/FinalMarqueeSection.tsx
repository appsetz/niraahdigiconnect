'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FinalMarqueeSection = () => {
  const text = "NIRAAH DIGICONNECT";
  
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black py-20">
      
      {/* 3D Iridescent Blob Background Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 0.9, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-60 blur-[60px] md:blur-[100px]"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #a855f7 25%, #3b82f6 50%, #10b981 75%, #a855f7 100%)',
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Secondary overlaying blob for more depth */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.3, 0.8, 1.2],
            rotate: [360, 270, 180, 90, 0],
            x: [0, 50, -50, 25, 0],
            y: [0, -30, 40, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] opacity-40 blur-[80px] md:blur-[120px]"
          style={{
            background: 'linear-gradient(-45deg, #3b82f6 0%, #10b981 50%, #a855f7 100%)',
          }}
        />
      </div>

      {/* Left to Right Marquee */}
      <div className="relative z-10 w-full flex overflow-hidden whitespace-nowrap">
        <motion.div 
          className="flex gap-20 py-10"
          animate={{ x: ["0%", "-100%"] }} // Flows from Right to Left
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(6)].map((_, i) => (
            <span 
              key={i} 
              className="text-[12vh] md:text-[20vh] font-black tracking-tighter text-white uppercase italic selection:bg-emerald-500"
              style={{
                textShadow: '0 0 40px rgba(255,255,255,0.2)',
                lineHeight: 0.8
              }}
            >
              {text}
            </span>
          ))}
        </motion.div>
        
        {/* Same motion div duplicated for seamless wrap */}
        <motion.div 
          className="flex gap-20 py-10 absolute top-0 left-0 h-full items-center"
          aria-hidden="true"
          animate={{ x: ["100%", "0%"] }} // Flows from Right to Left (mirrored)
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          initial={{ x: "100%" }}
        >
          {[...Array(6)].map((_, i) => (
            <span 
              key={i} 
              className="text-[12vh] md:text-[20vh] font-black tracking-tighter text-white uppercase italic"
              style={{
                textShadow: '0 0 40px rgba(255,255,255,0.2)',
                lineHeight: 0.8
              }}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decorative center button as seen in reference */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="pointer-events-auto px-8 py-3 rounded-full border border-white/30 backdrop-blur-md bg-white/10 text-white font-bold flex items-center gap-3 group"
        >
          Explore Projects
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </div>
      
    </section>
  );
};

export default FinalMarqueeSection;
