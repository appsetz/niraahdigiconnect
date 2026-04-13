'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqData = [
  {
    q: 'How do I know which service is right for my business?',
    a: 'We understand your goals, audience, and current presence, then recommend the strategy that will deliver the best results for your growth stage. Every business is different, and we take the time to understand yours before recommending anything.',
  },
  {
    q: 'Do you offer customized marketing packages?',
    a: 'Yes. Every business is different, so we create tailored plans instead of one-size-fits-all packages. We assess your specific audience, budget, and challenges before building a strategy that fits your exact needs.',
  },
  {
    q: 'How soon can I expect results?',
    a: 'Paid campaigns (Meta Ads, Google Ads) can generate leads and inquiries quickly — often within the first few weeks. SEO and content strategies build stronger long-term growth over 3–6 months. We set clear expectations from day one.',
  },
  {
    q: 'Will I receive performance reports?',
    a: 'Absolutely. We provide clear, easy-to-understand reports showing progress, results, and key metrics so you always know what\'s working and where your investment is going. Transparency is one of our core values.',
  },
  {
    q: 'Do you handle both design and marketing?',
    a: 'Yes. From branding and websites to campaigns and media production, we provide end-to-end support for your business growth. You don\'t need to manage multiple agencies — we handle everything under one roof.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most business websites are completed within 2–4 weeks, depending on features and content readiness. E-commerce stores may take slightly longer depending on the number of products and integrations required.',
  },
  {
    q: 'Will my website be mobile-friendly and SEO-ready?',
    a: 'Yes. All our websites are built mobile-first, load fast, and are fully optimized for search engines like Google. We ensure your site meets current SEO best practices right from the start.',
  },
  {
    q: 'Do you also manage ads and social media campaigns?',
    a: 'Yes. We plan, create, and continuously optimize campaigns across the Meta ecosystem (Facebook & Instagram) and beyond. Our team handles everything from creative production to daily monitoring and reporting.',
  },
  {
    q: 'Can I update my website or content later myself?',
    a: 'Yes. We build user-friendly sites on platforms like WordPress so you can easily manage updates, add products, and post new content yourself — without needing technical knowledge.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply contact us for a free consultation, and we\'ll guide you through the next steps based on your business goals. There\'s no pressure — just a conversation to understand where you are and where you want to go.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
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
        style={{ fontSize: 'clamp(80px, 15vw, 240px)' }}
      >
        FAQ
      </motion.div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label text-[#10B981]">Got Questions?</span>
            <h2
              className="font-display font-bold mb-4 uppercase tracking-tight mt-4"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)', color: 'var(--text-1)' }}
            >
              We&apos;ve Got <span className="text-gradient">Answers</span>
            </h2>
            <p className="font-sans text-base max-w-lg mx-auto" style={{ color: 'var(--text-2)' }}>
              Everything you need to know before we start working together.
            </p>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqData.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen ? 'rgba(16, 185, 129, 0.06)' : 'var(--bg-card)',
                    border: `1px solid ${isOpen ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-1)'}`,
                    borderRadius: '20px',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-7 text-left cursor-pointer transition-colors"
                  >
                    <span className="flex gap-4 md:gap-5 items-start">
                      <span className="text-[#10B981] font-bold text-xs mt-1 whitespace-nowrap tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="font-sans font-semibold text-base md:text-lg leading-snug"
                        style={{ color: isOpen ? 'var(--text-1)' : 'var(--text-2)' }}
                      >
                        {faq.q}
                      </span>
                    </span>
                    <span
                      className="text-xl text-[#10B981] transition-transform duration-300 flex-shrink-0"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{
                      maxHeight: isOpen ? '400px' : '0',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-5 md:px-7 pb-6 pt-0 pl-[52px] md:pl-[68px]">
                      <p className="font-sans text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
                        {faq.a}
                      </p>
                    </div>
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
          style={{
            background: 'rgba(16,185,129,0.04)',
            border: '1px solid rgba(16,185,129,0.15)',
            borderRadius: '24px',
            padding: '40px 32px',
          }}
        >
          <p className="font-sans font-semibold text-lg mb-2" style={{ color: 'var(--text-1)' }}>
            Still have questions?
          </p>
          <p className="font-sans text-sm mb-6" style={{ color: 'var(--text-2)' }}>
            We&apos;re happy to talk through your specific situation with no pressure.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans font-bold text-sm text-black bg-[#10B981] hover:bg-white transition-all duration-300 py-3 px-8 rounded-full"
          >
            Talk to Us <span className="text-base">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
