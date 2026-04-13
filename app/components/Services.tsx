'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const servicesData = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Social Media Management',
    tagline: 'That Actually Grows Your Business',
    desc: "Posting randomly on social media doesn't build a brand — strategy does. We don't just manage your social media, we turn it into a consistent source of visibility, trust, and qualified leads.",
    bullets: [
      'More brand credibility',
      'Higher engagement from real potential customers',
      'Consistent growth in reach and inquiries',
      'A professional presence that builds trust instantly',
    ],
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Meta Ads Management',
    tagline: 'That Turns Clicks Into Customers',
    desc: "Running ads on Facebook and Instagram isn't about boosting posts — it's about building a predictable customer acquisition system with maximum ROI and minimum wasted spend.",
    bullets: [
      'Strategic targeting to reach people most likely to buy',
      'High-converting ad creatives that stop the scroll',
      'Data-driven campaign optimization for consistent results',
      'Transparent reporting so you always know what\'s working',
    ],
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Search Engine Optimization',
    tagline: 'Be Visible Where Your Customers Search',
    desc: "Rank higher on Google and get found by ready-to-buy customers. Keyword strategy that targets real search intent, not vanity traffic — with measurable ranking progress.",
    bullets: [
      'Rank higher on Google for ready-to-buy customers',
      'On-page, technical, and content optimization',
      'Improve website authority and organic leads',
      'Data-driven tracking with measurable ranking progress',
    ],
  },
  {
    number: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" />
      </svg>
    ),
    title: 'Website Design & Development',
    tagline: 'That Turns Visitors Into Leads',
    desc: "Your website isn't just a digital brochure — it's the place where potential customers decide whether to trust your business or leave. We build high-performance websites that work like a 24/7 salesperson.",
    bullets: [
      'Strategic layout that guides visitors toward inquiry or purchase',
      'Modern, trust-building design aligned with your brand',
      'Fast-loading, mobile-optimized, SEO-ready development',
      'Easy-to-manage backend with scalable structure',
    ],
  },
  {
    number: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: 'E-commerce Development',
    tagline: 'That Turns Browsers Into Buyers',
    desc: "We develop high-performance online stores designed to showcase your products professionally, simplify the shopping journey, and maximize conversions on Shopify or WooCommerce.",
    bullets: [
      'User-friendly store design that builds buyer confidence',
      'Smooth checkout flow to reduce cart abandonment',
      'Mobile-optimized shopping experience',
      'Scalable platform setup ready for product and business growth',
    ],
  },
  {
    number: '06',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: 'Branding & Creative Design',
    tagline: 'That Makes Your Business Instantly Recognizable',
    desc: "Your brand is more than a logo — it's how people perceive your business, remember you, and decide whether to trust you. We craft brand identities that stand out in a crowded market.",
    bullets: [
      'Distinctive brand identity that builds recognition and trust',
      'Professional creatives aligned with your business positioning',
      'Consistent visual language across all marketing platforms',
      'Designs created to attract, engage, and convert',
    ],
  },
  {
    number: '07',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Content Marketing',
    tagline: 'That Builds Trust Before You Sell',
    desc: "Customers rarely buy from the first interaction — they buy when they trust your expertise. Strategic content positions your business as the obvious choice long before a sales conversation begins.",
    bullets: [
      'Value-driven content that builds authority in your niche',
      'Messaging aligned with your audience\'s search intent',
      'Consistent strategy to grow trust and visibility',
      'Content designed to support leads, SEO, and sales',
    ],
  },
  {
    number: '08',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Google Business Profile',
    tagline: 'That Brings You Local Customers',
    desc: "When people search for services near them, your Google Business Profile is often the first thing they see. We optimize and manage your listing to improve local rankings and increase inquiries.",
    bullets: [
      'Improved visibility in local search and map results',
      'Professionally optimized profile that builds instant trust',
      'Review and reputation strategy to strengthen credibility',
      'Ongoing updates to keep your listing active and competitive',
    ],
  },
  {
    number: '09',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Business Cards & Brochures',
    tagline: 'Your Brand Beyond the Screen',
    desc: "Your offline branding should be as strong as your online presence. We design and deliver professional print materials that make your brand look credible, memorable, and polished.",
    bullets: [
      'Custom-designed business cards & brochures',
      'Professional marketing and promotional materials',
      'Brand-consistent print designs that build trust',
      'High-quality printing with multiple finish options',
    ],
  },
  {
    number: '10',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: 'Media Production & Video',
    tagline: 'That Elevates Your Business Presence',
    desc: "Strong visuals shape how customers perceive your brand before they ever speak to you. We create strategic video and visual content designed for business growth and brand positioning.",
    bullets: [
      'Professional brand shoots that reflect your business identity',
      'Corporate videos that build credibility and trust',
      'Social media reels and ad creatives for engagement',
      'Website visuals that enhance professionalism and conversion',
    ],
  },
  {
    number: '11',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Workshops & Training Programs',
    tagline: 'Practical Skills. Real Results.',
    desc: "Result-oriented workshops for business owners, freelancers, students, and professionals who want to generate real results using digital platforms — not just learn theory.",
    bullets: [
      'Meta Ads Mastery — Basic to Advanced',
      'Social Media Management (SMM)',
      'Google My Business Growth Strategy',
      'Canva for Business & Content Creation',
    ],
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: '120px 24px 140px', background: 'var(--bg-main)' }}
    >
      {/* Background Text */}
      <motion.div
        className="section-bg-text"
        initial={{ opacity: 0, scale: 0.8, y: '-50%', x: '-50%' }}
        whileInView={{ opacity: 0.02, scale: 1, y: '-50%', x: '-50%' }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        SERVICES
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label uppercase tracking-[0.3em] text-xs font-bold text-[#10B981]">
              What We Do
            </span>
            <h2
              className="font-display font-bold mt-4 uppercase leading-tight"
              style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: 'var(--text-1)' }}
            >
              Our <span style={{ color: 'var(--text-4)' }}>Services</span>
            </h2>
            <p className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed" style={{ color: 'var(--text-2)' }}>
              End-to-end digital marketing solutions — everything your business needs to grow, under one roof.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {servicesData.map((s, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className="group cursor-pointer relative overflow-hidden transition-all duration-500"
                style={{
                  background: isExpanded ? 'rgba(16, 185, 129, 0.06)' : 'var(--bg-card)',
                  border: `1px solid ${isExpanded ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-1)'}`,
                  borderRadius: '28px',
                  padding: '32px',
                }}
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at top left, rgba(16,185,129,0.06) 0%, transparent 70%)',
                  }}
                />

                {/* Top Row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-[#10B981] transition-all duration-400 group-hover:bg-[#10B981] group-hover:text-black"
                    style={{
                      background: 'rgba(16,185,129,0.08)',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-[10px] tracking-widest" style={{ color: 'var(--text-4)' }}>
                      {s.number}
                    </span>
                    <span
                      className="text-[#10B981] text-xl transition-transform duration-300"
                      style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      +
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-sans font-bold mb-1 leading-tight"
                  style={{ fontSize: 'clamp(17px, 1.8vw, 20px)', color: 'var(--text-1)' }}
                >
                  {s.title}
                </h3>
                <p className="font-sans text-[#10B981] text-xs font-semibold tracking-wide mb-3">
                  {s.tagline}
                </p>

                {/* Description */}
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  {s.desc}
                </p>

                {/* Expandable Bullets */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isExpanded ? '300px' : '0',
                    opacity: isExpanded ? 1 : 0,
                    marginTop: isExpanded ? '20px' : '0',
                  }}
                >
                  <div
                    className="pt-4"
                    style={{ borderTop: '1px solid var(--border-1)' }}
                  >
                    <p className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-[#10B981] mb-3">
                      Key Benefits
                    </p>
                    <ul className="space-y-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 items-start font-sans text-[13px]" style={{ color: 'var(--text-2)' }}>
                          <span className="text-[#10B981] mt-0.5 flex-shrink-0">✔</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="font-sans text-sm mb-6" style={{ color: 'var(--text-3)' }}>
            Not sure which service fits your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans font-bold text-sm text-black bg-[#10B981] hover:bg-white transition-all duration-300 py-3 px-8 rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.3)]"
          >
            Get a Free Consultation <span className="text-base">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
