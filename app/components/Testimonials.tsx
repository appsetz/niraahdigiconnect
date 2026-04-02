'use client';

import { motion } from 'framer-motion';

const featuredTestimonials = [
  {
    name: 'Nanda Construction',
    category: 'Google My Business',
    quote: 'After they optimized our GMB profile, we started appearing in local searches consistently. We receive regular inquiry calls from property owners.',
  },
  {
    name: 'Rimis Cakes',
    category: 'Logo Design',
    quote: 'They created a beautiful and elegant logo that perfectly represents our baking brand. It looks amazing on packaging and social media.',
  },
  {
    name: 'Sriies Bakes',
    category: 'Social Media',
    quote: 'They beautifully showcased our custom cakes through high-quality posts and reels. Our followers have grown steadily, and inquiries have increased.',
  },
  {
    name: 'Pixel Photography',
    category: 'Meta Ads',
    quote: 'The Meta ad campaigns generated consistent inquiries for weddings and events. The targeting was precise, and the cost per lead was very reasonable.',
  },
  {
    name: 'Vriddhi Psychological Services',
    category: 'Website',
    quote: 'They developed a modern, responsive, and highly professional website. Since the launch, we\'ve received positive feedback and a steady flow of inquiries.',
  },
  {
    name: 'Mav Infra Logistics Pvt. Ltd.',
    category: 'Business Cards',
    quote: 'The business card design is clean, well-structured, and highly professional. Clients have appreciated the design quality and premium feel.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 bg-[#000000] overflow-hidden"
    >
      {/* Background Text with Scroll Reveal */}
      <motion.div 
        className="section-bg-text"
        initial={{ opacity: 0, scale: 0.8, y: '-50%', x: '-50%' }}
        whileInView={{ opacity: 0.02, scale: 1, y: '-50%', x: '-50%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 'clamp(50px, 9vw, 160px)' }}
      >
        REVIEWS
      </motion.div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="mb-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label text-[#10B981]">Testimonials</span>
            <h2 className="font-display font-bold text-white mb-6 uppercase tracking-tight mt-4" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
              Client <span className="text-white/40">Feedback</span>
            </h2>
          </motion.div>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="relative">
          {/* Side Gradients for fading effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 px-10"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ width: 'fit-content' }}
            >
              {[...featuredTestimonials, ...featuredTestimonials].map((t, i) => (
                <div
                  key={i}
                  className="glass-card flex flex-col justify-between p-3 md:p-10 w-[55vw] md:w-[450px] min-h-[130px] md:min-h-[380px] shrink-0"
                  style={{
                    background: 'rgba(11,11,11,0.6)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-[#10B981] text-[10px] md:text-lg">★</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="font-sans text-[11px] md:text-xl text-[rgba(255,255,255,0.85)] leading-snug md:leading-relaxed font-light mb-2 md:mb-8">
                      &rdquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2 md:gap-4 pt-2 md:pt-6 border-t border-[rgba(255,255,255,0.05)]">
                    <div 
                      className="w-5 h-5 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-white bg-[#111111] border border-[rgba(255,255,255,0.1)] text-[8px] md:text-sm"
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-sans font-bold text-white text-[9px] md:text-sm">{t.name}</p>
                      <p className="font-sans text-[7px] md:text-[10px] uppercase tracking-widest text-[#10B981] mt-0.5">
                        {t.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
