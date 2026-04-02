'use client';

import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Social Media Strategy',
    desc: "We don't just post. We build predictable systems that turn attention into revenue and scale your brand effortlessly.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Precision Paid Ads',
    desc: 'High-performance Meta and Google campaigns designed for maximum ROI and measurable customer acquisition.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Organic Growth (SEO)',
    desc: 'Dominating search results for high-intent keywords that bring ready-to-buy customers to your doorstep.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Digital Architecture',
    desc: 'Bespoke website design and e-commerce development focused on conversion and seamless user experience.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: '160px 24px', background: '#000000' }}
    >
      {/* Background Text with Scroll Reveal */}
      <motion.div 
        className="section-bg-text"
        initial={{ opacity: 0, scale: 0.8, y: '-50%', x: '-50%' }}
        whileInView={{ opacity: 0.02, scale: 1, y: '-50%', x: '-50%' }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        EXPERTISE
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label uppercase tracking-[0.3em] text-xs font-bold text-[#10B981]">Strategic Solutions</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl text-white mt-4 uppercase">Our <span className="text-white/30">Expertise</span></h2>
          </motion.div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% ' }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card flex flex-col justify-between p-10 md:p-14 group cursor-pointer"
              style={{
                background: 'rgba(10,10,10,0.4)',
                borderRadius: '40px',
                border: '1px solid rgba(255,255,255,0.05)',
                minHeight: '400px',
              }}
            >
              <div className="flex justify-between items-start mb-16">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-[#10B981] transition-all duration-500 group-hover:bg-[#10B981] group-hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {s.icon}
                </div>
                <div className="text-white/20 group-hover:text-white transition-colors duration-500 text-3xl transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-6 uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[rgba(255,255,255,0.4)] font-sans text-lg md:text-xl leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
