'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Marquee } from './ui/marquee';
import { useEffect, useRef, useState } from 'react';


export default function Hero() {
  const services = [
    'Social Media Management',
    'Meta Ads Management',
    'SEO',
    'Website Design & Development',
    'E-commerce Development',
    'Branding & Creative Design',
    'Content Marketing',
    'Google Business Profile',
    'Business Cards & Brochures',
    'Media Production & Video',
    'Workshops & Training',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any, // Cast to any or use string if necessary, but array is valid for cubic-bezier in many framer versions. Using string for safety.
      },
    },
  };
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const { scrollY } = useScroll();
  
  // Fade out video as we scroll down
  const videoOpacity = useTransform(scrollY, [0, 500], [0.4, 0]);
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && !hasStarted) {
        setHasStarted(true);
        videoRef.current?.play().catch(err => console.log("Video play blocked:", err));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasStarted]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] md:min-h-screen items-center justify-center pt-24 pb-20 md:pt-32 md:pb-48 overflow-hidden bg-[#000000]"
    >
      {/* Background Video with Scroll Trigger */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ opacity: videoOpacity, scale: videoScale }}
      >
        <video
          ref={videoRef}
          src="/videos/Graph_going_up_202604012241.mp4"
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        {/* Dark Emerald Tint Overlay */}
        <div className="absolute inset-0 bg-[#000000] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40" />
        <div className="absolute inset-0 bg-[rgba(16,185,129,0.05)]" />
      </motion.div>

      {/* Background Atmospheric Glows */}
      <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-[rgba(16,185,129,0.05)] to-transparent pointer-events-none z-0" />
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[rgba(16,185,129,0.03)] blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] bg-[rgba(16,185,129,0.02)] blur-[100px] rounded-full pointer-events-none z-0 rotate-12" />

      {/* Background Gradient Blobs (ONliti Style Atmosphere) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[5%] w-[40vw] h-[40vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] -right-[10%] w-[35vw] h-[35vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* Decorative Floating Elements (ONliti Style) */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[15%] opacity-20 pointer-events-none hidden lg:block z-10"
        style={{ width: '80px', height: '80px', border: '1px solid #10B981', borderRadius: '16px', transform: 'rotate(15deg)' }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-4xl text-[#10B981] font-display">N</span>
      </motion.div>

      {/* Subtle Atmospheric Keyboard/Key Decor (Reference Style) */}
      <div className="absolute inset-0 z-10 hidden lg:block pointer-events-none overflow-hidden max-w-[1600px] mx-auto opacity-30">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-[15%] left-[5%] p-12 rounded-[40px] border border-white/5 bg-white/2 backdrop-blur-3xl rotate-[-10deg]"
          style={{ width: '300px', height: '300px', background: 'rgba(255,255,255,0.01)' }}
        >
          <div className="w-full h-full border border-white/10 rounded-[24px] flex items-center justify-center">
            <span className="text-[120px] font-display font-bold text-white/20">✦</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-[20%] right-[3%] p-8 rounded-[32px] border border-white/5 bg-white/2 backdrop-blur-2xl rotate-[5deg]"
          style={{ width: '220px', height: '180px', background: 'rgba(255,255,255,0.01)' }}
        >
          <div className="w-full h-full border border-white/10 rounded-[16px] flex flex-col justify-end p-4">
             <div className="h-2 w-1/2 bg-white/20 rounded-full mb-2" />
             <div className="h-2 w-3/4 bg-white/10 rounded-full" />
          </div>
        </motion.div>

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
             style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)', filter: 'blur(100px)' }} />
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-20 flex max-w-5xl flex-col items-center text-center mt-12 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge / Subtitle */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 tracking-[0.2em] text-xs font-bold uppercase text-[rgba(255,255,255,0.4)] font-sans"
        >
          Digital Alchemy Since 2024
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 md:mb-8 font-display font-bold leading-[0.9] text-white px-2"
          style={{ fontSize: 'clamp(40px, 9vw, 120px)', textTransform: 'uppercase' }}
        >
          Your Brand
          <br />
          <span className="text-gradient">
            Weaponized.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="mb-8 md:mb-12 max-w-3xl text-balance text-base md:text-xl font-light text-[rgba(255,255,255,0.5)] font-sans mx-auto leading-relaxed px-4"
        >
          We don&apos;t sell random digital services. We build predictable systems
          that turn attention into revenue and scale your business effortlessly.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pb-16 md:pb-20 w-full px-6"
        >
          <a href="#services" className="white-btn w-full sm:w-auto flex items-center justify-center text-sm md:text-base py-3 px-6 md:py-4 md:px-8" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Explore Work <span className="ml-2">→</span>
          </a>
          <a href="#contact" className="outline-btn w-full sm:w-auto flex items-center justify-center text-sm md:text-base py-3 px-6 md:py-4 md:px-8" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Magic UI Marquee for Services */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[rgba(255,255,255,0.05)] bg-[#050505] z-30">
        <Marquee pauseOnHover className="[--duration:50s] py-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="mx-3 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-6 py-2 text-sm font-medium text-[rgba(255,255,255,0.6)] font-sans transition-colors hover:border-[#10B981] hover:text-[#10B981]"
            >
              {service}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
