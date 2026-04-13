'use client';

import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack';
import './ui/ScrollStack.css';

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

export default function OurApproach() {
  return (
    <section
      id="our-approach"
      className="relative"
      style={{ 
        background: 'var(--bg-main)',
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
      <div className="relative z-10 pt-20 md:pt-32 pb-8 px-6">
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
            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-7xl uppercase" style={{ color: 'var(--text-1)' }}>
              Our <span style={{ color: 'var(--text-4)' }}>Approach</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Scroll Stack Cards */}
      <ScrollStack
        itemDistance={100}
        itemScale={0.03}
        itemStackDistance={30}
        stackPosition="20%"
        scaleEndPosition="10%"
        baseScale={0.85}
        blurAmount={3}
      >
        {features.map((feature, i) => (
          <ScrollStackItem key={i} itemClassName="approach-card">
            <div 
              className="h-full relative overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-1)',
              }}
            >
              {/* Gradient orb */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${feature.color}15 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}05)`,
                        border: `1px solid ${feature.color}30`,
                        color: feature.color,
                      }}
                    >
                      <div className="scale-75">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <span className="font-sans font-bold tracking-[0.2em] text-[10px] block mb-1" style={{ color: 'var(--text-2)' }}>
                        {feature.category}
                      </span>
                      <span 
                        className="font-display font-bold text-xl"
                        style={{ color: feature.color, background: "rgba(0,0,0,0.02)" }}
                      >
                        {feature.number}
                      </span>
                    </div>
                  </div>
                  
                  <motion.a
                    href="#contact"
                    className="flex items-center gap-2 px-4 py-2 rounded-full font-sans font-bold text-[10px] tracking-wider uppercase"
                    style={{
                      background: 'var(--marquee-pill-bg)',
                      border: '1px solid var(--border-1)',
                      color: 'var(--text-2)',
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
                <h3 className="font-display font-bold leading-[0.95] tracking-tight mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: 'var(--text-1)' }}>
                  {feature.title}
                </h3>
                <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-2)' }}>
                  {feature.desc}
                </p>

                {/* Bottom decorative line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] rounded-full w-[30%]"
                  style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                />
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
