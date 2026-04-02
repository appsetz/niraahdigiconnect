'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

const features = [
  {
    category: 'CORE PILLAR',
    number: '01',
    title: 'STRATEGY FIRST',
    desc: 'Every strategy we create has a clear goal. Whether it\'s brand awareness, quality leads, or sales — we track performance and make decisions based on data, not assumptions.',
    color: '#10B981',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    category: 'METHODOLOGY',
    number: '02',
    title: 'CUSTOM SOLUTIONS',
    desc: 'Every business is different. Different audience. Different budget. Different challenges. So our strategies are customized specifically for your business, not copy-pasted.',
    color: '#10B981',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    category: 'CAPABILITY',
    number: '03',
    title: 'ALL UNDER ONE ROOF',
    desc: 'Social media, Meta Ads, Google Ads, website development, SEO, GMB optimization, photography, and videography. You don\'t have to manage multiple agencies.',
    color: '#10B981',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    category: 'EXECUTION',
    number: '04',
    title: 'CREATIVE CONVERSION',
    desc: 'In a crowded digital space boring content gets ignored. We create strong visuals, engaging reels, and ad creatives that not only look good but also convert.',
    color: '#10B981',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

// Individual card component with 3D tilt effect
function StackCard({ 
  feature, 
  index, 
  progress,
  totalCards,
}: { 
  feature: typeof features[0];
  index: number;
  progress: any;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  
  // Calculate card-specific transforms based on scroll progress
  // Ensure all values stay within [0, 1] range
  const segmentSize = 1 / (totalCards + 1);
  const cardStart = Math.min(index * segmentSize, 0.99);
  const cardPeak = Math.min(cardStart + segmentSize, 1);
  const cardEnd = Math.min(cardPeak + segmentSize * 0.5, 1);
  
  const y = useTransform(progress, [cardStart, cardPeak], [300, 0]);
  const scale = useTransform(progress, [cardStart, cardPeak, cardEnd], [0.85, 1, 0.92]);
  const opacity = useTransform(progress, [cardStart, Math.min(cardStart + 0.05, 1), cardPeak, cardEnd], [0, 1, 1, 0.6]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="absolute w-full max-w-4xl"
      style={{
        y,
        scale,
        opacity,
        zIndex: totalCards - index,
        top: `${index * 40}px`,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative overflow-hidden rounded-[24px] p-8 md:p-12"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformPerspective: 1000,
          background: '#000000',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(16, 185, 129, 0.1),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05)
          `,
        }}
      >
        {/* Gradient glow border effect */}
        <div 
          className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${feature.color}20, transparent 50%, ${feature.color}10)`,
          }}
        />
        
        {/* Animated gradient orb */}
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${feature.color}15 0%, transparent 70%)`,
          }}
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Top Row */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}05)`,
                  border: `1px solid ${feature.color}30`,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>
              <div>
                <span className="font-sans font-bold tracking-[0.2em] text-xs text-[rgba(255,255,255,0.5)] block mb-1">
                  {feature.category}
                </span>
                <span 
                  className="font-display font-bold text-2xl"
                  style={{ color: feature.color }}
                >
                  {feature.number}
                </span>
              </div>
            </div>
            
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
              whileHover={{
                background: feature.color,
                color: '#000',
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
            >
              DISCUSS
              <span className="text-sm">↗</span>
            </motion.a>
          </div>

          {/* Main Content */}
          <h3 
            className="font-display font-bold leading-[0.95] text-white tracking-tight mb-6"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            {feature.title}
          </h3>
          <p className="font-sans text-lg md:text-xl leading-relaxed text-[rgba(255,255,255,0.5)] max-w-2xl">
            {feature.desc}
          </p>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-full"
          style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '60%' : '30%' }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="relative"
      style={{ 
        background: 'linear-gradient(180deg, #000000 0%, #050505 50%, #0a0a0a 100%)',
      }}
    >
      {/* Background noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(52, 211, 153, 0.03) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-[#10B981] block mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white uppercase">
              Our <span className="text-white/30">Approach</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <div 
        className="relative px-6"
        style={{ height: `${features.length * 100 + 50}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-4xl mx-auto h-[600px]">
            {features.map((feature, i) => (
              <StackCard
                key={i}
                feature={feature}
                index={i}
                progress={scrollYProgress}
                totalCards={features.length}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-32" />
    </section>
  );
}
