'use client';

import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack';
import './ui/ScrollStack.css';

const cards = [
  {
    number: '01',
    label: 'STRATEGY FIRST',
    title: 'Data-driven decisions, not guesswork',
    desc: 'Every strategy we create has a clear goal. Whether it\'s brand awareness, quality leads, or sales — we track performance and make decisions based on data, not assumptions.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    tag: 'Core Pillar',
  },
  {
    number: '02',
    label: 'CUSTOM SOLUTIONS',
    title: 'Built for your business, not copied from another',
    desc: 'Every business is different. Different audience. Different budget. Different challenges. So our strategies are customized specifically for your business, not copy-pasted.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    tag: 'Methodology',
  },
  {
    number: '03',
    label: 'ALL UNDER ONE ROOF',
    title: 'Every service you need, one team to trust',
    desc: 'Social media, Meta Ads, Google Ads, website development, SEO, GMB optimization, photography, and videography. You don\'t have to manage multiple agencies.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    tag: 'Capability',
  },
  {
    number: '04',
    label: 'CREATIVE CONVERSION',
    title: 'Content that looks good and converts',
    desc: 'In a crowded digital space boring content gets ignored. We create strong visuals, engaging reels, and ad creatives that not only look good but also convert.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    tag: 'Execution',
  },
];

export default function OurApproach() {
  return (
    <section id="our-approach" className="relative" style={{ background: 'var(--bg-main)' }}>

      {/* Section Header — sits above the scroll stack */}
      <div className="relative z-10 pt-20 md:pt-28 pb-0 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-block font-sans font-bold tracking-[0.25em] text-[11px] uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{
              color: '#10B981',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.2)',
            }}
          >
            Why Choose Us
          </span>
          <h2
            className="font-display font-bold uppercase tracking-tight"
            style={{
              fontSize: 'clamp(38px, 6vw, 80px)',
              lineHeight: 0.95,
              color: 'var(--text-1)',
            }}
          >
            Our{' '}
            <em className="not-italic" style={{ color: '#10B981' }}>
              Approach
            </em>
          </h2>
          <p
            className="font-sans mt-4 max-w-md mx-auto text-sm md:text-base"
            style={{ color: 'var(--text-2)' }}
          >
            Four principles that drive every campaign we run.
          </p>
        </motion.div>
      </div>

      {/* Scroll Stack */}
      <ScrollStack
        itemDistance={0}
        itemScale={0.04}
        itemStackDistance={16}
        stackPosition="20%"
        scaleEndPosition="10%"
        baseScale={0.88}
        blurAmount={1}
        useWindowScroll={true}
      >
        {cards.map((card) => (
          <ScrollStackItem key={card.number}>
            {/* Card shell */}
            <div
              className="w-full overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-1)',
                borderRadius: '24px',
                minHeight: '22rem',
              }}
            >
              {/* Green top bar */}
              <div style={{ height: '3px', background: 'linear-gradient(90deg, #10B981, #34D399 60%, transparent)' }} />

              <div className="flex flex-col md:flex-row h-full">
                {/* Left — number column */}
                <div
                  className="flex flex-col justify-between p-8 md:p-10 md:w-56 shrink-0"
                  style={{ borderRight: '1px solid var(--border-1)' }}
                >
                  <div>
                    <span
                      className="font-display font-bold block leading-none select-none"
                      style={{
                        fontSize: 'clamp(72px, 8vw, 108px)',
                        color: 'rgba(16,185,129,0.12)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {card.number}
                    </span>
                  </div>

                  <div className="mt-6 md:mt-auto">
                    <span
                      className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase block"
                      style={{ color: '#10B981' }}
                    >
                      {card.tag}
                    </span>
                  </div>
                </div>

                {/* Right — content */}
                <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
                  {/* Top */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <span
                        className="font-sans font-bold text-[10px] tracking-[0.22em] uppercase px-3 py-1 rounded-full"
                        style={{
                          color: 'var(--text-2)',
                          background: 'var(--marquee-pill-bg)',
                          border: '1px solid var(--border-1)',
                        }}
                      >
                        {card.label}
                      </span>

                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{
                          background: 'rgba(16,185,129,0.08)',
                          border: '1px solid rgba(16,185,129,0.2)',
                          color: '#10B981',
                        }}
                      >
                        {card.icon}
                      </div>
                    </div>

                    <h3
                      className="font-display font-bold leading-[1.05]"
                      style={{
                        fontSize: 'clamp(22px, 3vw, 38px)',
                        color: 'var(--text-1)',
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-6">
                    <p
                      className="font-sans text-sm md:text-base leading-relaxed max-w-lg"
                      style={{ color: 'var(--text-2)' }}
                    >
                      {card.desc}
                    </p>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 shrink-0 font-sans font-bold text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-full"
                      style={{
                        background: '#10B981',
                        color: '#fff',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Let's Talk
                      <span className="text-base leading-none">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
