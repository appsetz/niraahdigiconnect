'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Strategy-Driven, Always',
    desc: "We don't run random campaigns. Every strategy we create has a clear goal — brand awareness, quality leads, or sales. We track performance and make decisions based on data, not assumptions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Customized for Your Business',
    desc: "We don't believe in copy-paste marketing. Every business has a different audience, budget, and challenges. Our strategies are built specifically for you — not recycled templates.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Everything Under One Roof',
    desc: "Social media, Meta Ads, Google Ads, website development, SEO, GMB optimization, photography, and videography — you don't have to manage multiple agencies. We take complete responsibility.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Creativity That Converts',
    desc: "In a crowded digital space, boring content gets ignored. We create strong visuals, engaging reels, and ad creatives that not only look good — but actually drive conversions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Full Transparency',
    desc: "You receive clear reports with real insights. You'll always know what's working and how your investment is performing. No smoke and mirrors — just honest, measurable results.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Relationships That Last',
    desc: "We stay connected, responsive, and committed to your success. Most of our clients grow with us long-term because we genuinely care about their business outcomes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden"
      style={{ padding: '120px 24px 140px', background: 'var(--bg-main)' }}
    >
      {/* Background Text */}
      <motion.div
        className="section-bg-text"
        initial={{ opacity: 0, scale: 0.8, y: '-50%', x: '-50%' }}
        whileInView={{ opacity: 0.02, scale: 1, y: '-50%', x: '-50%' }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 'clamp(50px, 10vw, 160px)' }}
      >
        WHY US
      </motion.div>

      {/* Subtle green glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(16,185,129,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label text-[#10B981]">Why Choose Us</span>
            <h2
              className="font-display font-bold mt-4 uppercase leading-tight"
              style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', color: 'var(--text-1)' }}
            >
              We Don&apos;t Just <span style={{ color: 'var(--text-4)' }}>Market Brands.</span>
              <br />
              We Build Them.
            </h2>
            <p className="font-sans text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Today digital marketing is not just about posting content or running ads. Anyone can boost a post. But that does not build a brand.
            </p>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-7 transition-all duration-400"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-1)',
                borderRadius: '24px',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-[#10B981] mb-5 transition-all duration-300 group-hover:bg-[#10B981] group-hover:text-black"
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)',
                }}
              >
                {r.icon}
              </div>
              <h3 className="font-sans font-bold text-[17px] mb-3 leading-snug" style={{ color: 'var(--text-1)' }}>
                {r.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
          style={{
            background: 'rgba(16,185,129,0.04)',
            border: '1px solid rgba(16,185,129,0.15)',
            borderRadius: '28px',
            padding: '48px 32px',
          }}
        >
          <p className="font-display font-bold text-xl md:text-2xl lg:text-3xl mb-4 leading-snug" style={{ color: 'var(--text-1)' }}>
            If you want real growth, structured strategy, and measurable results —
            <span className="text-gradient"> we&apos;re the right partner.</span>
          </p>
          <p className="font-sans text-sm mb-8" style={{ color: 'var(--text-2)' }}>
            If you&apos;re looking for quick shortcuts, random boosting, or temporary hype — we&apos;re not for that.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans font-bold text-sm text-black bg-[#10B981] hover:bg-white transition-all duration-300 py-3.5 px-9 rounded-full shadow-[0_4px_24px_rgba(16,185,129,0.3)]"
          >
            Let&apos;s Build Together <span className="text-base">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
