'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqData = [
  {
    q: 'How do I know which service is right for my business?',
    a: 'We understand your goals, audience, and current presence, then recommend the strategy that will deliver the best results for your growth stage.',
  },
  {
    q: 'Do you offer customized marketing packages?',
    a: 'Yes. Every business is different, so we create tailored plans instead of one-size-fits-all packages.',
  },
  {
    q: 'How soon can I expect results?',
    a: 'Paid campaigns can generate leads quickly, while SEO and content strategies build stronger long-term growth over time.',
  },
  {
    q: 'Will I receive performance reports?',
    a: 'Absolutely. We provide clear reports showing progress, results, and key metrics so you always know what\'s working.',
  },
  {
    q: 'Do you handle both design and marketing?',
    a: 'Yes. From branding and websites to campaigns and media production, we provide end-to-end support for your business growth.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most business websites are completed within a few weeks, depending on features and content readiness.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
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
        style={{ fontSize: 'clamp(80px, 15vw, 240px)' }}
      >
        FAQ
      </motion.div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-white mb-6 uppercase tracking-tight" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
              Got Questions?<br />
              <span className="text-gradient">We Got Answers</span>
            </h2>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen ? 'rgba(16, 185, 129, 0.03)' : 'rgba(10, 10, 10, 0.5)',
                    border: `1px solid ${isOpen ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '24px',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left cursor-pointer transition-colors"
                  >
                    <span className="flex gap-4 md:gap-6 items-start">
                      <span className="text-[#10B981] font-bold text-sm mt-1 whitespace-nowrap">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`font-sans font-bold text-lg md:text-xl ${isOpen ? 'text-white' : 'text-[rgba(255,255,255,0.8)]'}`}>
                        {faq.q}
                      </span>
                    </span>
                    <span 
                      className="text-2xl text-[#10B981] transition-transform duration-300 flex-shrink-0"
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
                    <div className="px-6 md:px-8 pb-8 pt-0 pl-16 md:pl-20">
                      <p className="font-sans text-[rgba(255,255,255,0.6)] text-[16px] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
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
