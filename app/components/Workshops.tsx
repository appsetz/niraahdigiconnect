'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const workshopsData = [
  {
    icon: '🎯',
    title: 'Meta Ads Mastery',
    subtitle: 'Basic to Advanced',
    desc: 'Learn how to create, launch, and optimize high-converting Meta (Facebook & Instagram) ad campaigns.',
    bullets: [
      'Understanding campaign objectives and ad funnel strategy',
      'Audience targeting for low cost per lead',
      'Creative structure that improves CTR and conversions',
      'Budget planning and scaling strategy',
      'Live campaign setup and optimization methods',
    ],
    audience: 'For those who want to generate leads, sales, or grow their personal brand using paid ads.',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    subtitle: 'Strategic, Not Random',
    desc: 'Learn how to manage Instagram and Facebook pages strategically, not randomly.',
    bullets: [
      'Content planning and calendar creation',
      'Positioning and branding clarity',
      'Reel strategy for reach and engagement',
      'Profile optimization for conversions',
      'Analytics understanding and growth tracking',
    ],
    audience: 'Ideal for freelancers, small business owners, and aspiring social media managers.',
  },
  {
    icon: '📍',
    title: 'Google My Business Strategy',
    subtitle: 'Rank Locally & Attract Customers',
    desc: 'Learn how to rank locally and attract genuine customers through Google search and maps.',
    bullets: [
      'Complete profile setup and optimization',
      'Keyword placement for local visibility',
      'Review management strategy',
      'Posting and update techniques',
      'Lead generation from local search',
    ],
    audience: 'Perfect for local businesses that want more calls, walk-ins, and inquiries.',
  },
  {
    icon: '🎨',
    title: 'Canva for Business',
    subtitle: 'Design Without a Designer',
    desc: 'Learn how to create professional, sales-driven content without depending on designers.',
    bullets: [
      'Designing high-converting social media posts',
      'Ad creatives that improve performance',
      'Branding consistency',
      'Carousel and reel cover design strategy',
      'Basic content psychology for sales',
    ],
    audience: 'Best suited for beginners, freelancers, and small business owners.',
  },
];

export default function Workshops() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="workshops"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: '160px 24px', background: 'var(--bg-main)' }}
    >
      {/* Background Text with Scroll Reveal */}
      <motion.div 
        className="section-bg-text"
        initial={{ opacity: 0, scale: 0.8, y: '-50%', x: '-50%' }}
        whileInView={{ opacity: 0.02, scale: 1, y: '-50%', x: '-50%' }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 'clamp(60px, 12vw, 200px)' }}
      >
        MASTERCLASSES
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Learn & Grow</span>
            <h2 className="font-display font-bold mb-6 leading-tight" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--text-1)' }}>
              Workshops & Practical<br />
              <span className="text-gradient">Training Programs</span>
            </h2>
            <p className="font-sans text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Result-oriented workshops designed for business owners, freelancers, students, and working professionals
              who want to generate real results — not just learn theory.
            </p>
          </motion.div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshopsData.map((ws, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card flex flex-col overflow-hidden transition-all duration-300"
                style={{
                  padding: '40px',
                  borderRadius: '32px',
                  background: isOpen ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-card)',
                  borderColor: isOpen ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-1)',
                  cursor: 'pointer',
                }}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {/* Header Row */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ background: 'var(--marquee-pill-bg)', border: '1px solid var(--border-1)' }}>
                    {ws.icon}
                  </div>
                  <span className="font-display font-bold text-5xl leading-none select-none" style={{ color: 'var(--border-2)' }}>
                    0{i + 1}
                  </span>
                </div>

                {/* Title and Accordion Toggle */}
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="font-sans font-bold text-2xl mb-1" style={{ color: 'var(--text-1)' }}>
                      {ws.title}
                    </h3>
                    <p className="font-sans font-medium text-sm text-[#10B981]">
                      {ws.subtitle}
                    </p>
                  </div>
                  <span className={`text-2xl text-[#10B981] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </div>

                {/* Expanded Content */}
                <div
                  className="transition-all duration-500 overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '800px' : '0',
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? '24px' : '0'
                  }}
                >
                  <p className="font-sans text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-2)' }}>
                    {ws.desc}
                  </p>
                  <p className="font-sans font-bold text-xs uppercase tracking-wider text-[#10B981] mb-4">
                    What you will gain:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {ws.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 items-start font-sans text-[15px]" style={{ color: 'var(--text-2)' }}>
                        <span className="text-[#10B981] mt-0.5 whitespace-nowrap">✦</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6" style={{ borderTop: '1px solid var(--border-1)' }}>
                    <p className="font-sans italic text-sm" style={{ color: 'var(--text-3)' }}>
                      {ws.audience}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
