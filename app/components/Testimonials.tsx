'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type Category = 'All' | 'GMB' | 'Logo' | 'Social Media' | 'Meta Ads' | 'Website' | 'Business Cards';

const allTestimonials = [
  // GMB
  {
    name: 'Nanda Construction',
    category: 'GMB' as Category,
    quote: 'After they optimized our Google My Business profile, we started appearing in local searches consistently. We now receive regular inquiry calls from property owners and developers directly through Google. Their strategic optimization and review management truly made a difference.',
  },
  {
    name: 'Curls n Spikes Salon',
    category: 'GMB' as Category,
    quote: 'Our salon was struggling to attract new local clients. After GMB optimization, our visibility improved drastically. We now appear among the top local results, and appointment calls have increased noticeably.',
  },
  {
    name: 'RAACK Dance Academy',
    category: 'GMB' as Category,
    quote: 'The GMB optimization has significantly improved our academy\'s local reach. Parents can now easily find us online, view our photos, and check class details. We\'ve seen a steady increase in inquiries for admissions.',
  },
  // Logo
  {
    name: 'Rimis Cakes',
    category: 'Logo' as Category,
    quote: 'They created a beautiful and elegant logo that perfectly represents our baking brand. It looks amazing on packaging, cake boxes, and social media. Our customers often compliment the branding. Truly creative work!',
  },
  {
    name: 'Mav Infra Logistics Pvt. Ltd.',
    category: 'Logo' as Category,
    quote: 'We wanted a professional and strong identity for our logistics business. The logo they delivered reflects speed, trust, and reliability. The design process was smooth, and the final result exceeded expectations.',
  },
  {
    name: 'Flowbay',
    category: 'Logo' as Category,
    quote: 'Our brand needed a modern and unique identity. The team understood our concept clearly and delivered a sleek, professional logo that fits perfectly with our brand vision.',
  },
  {
    name: 'Sunwin Power Solutions',
    category: 'Logo' as Category,
    quote: 'The logo perfectly represents sustainability and innovation. It gives our solar brand a professional and trustworthy image. We are extremely satisfied with the creativity and detailing.',
  },
  {
    name: 'MK Promoters',
    category: 'Logo' as Category,
    quote: 'We were looking for a bold and impactful logo that reflects strength and structure. The final design truly represents our construction brand and gives us a premium identity.',
  },
  // Business Cards
  {
    name: 'Mav Infra Logistics Pvt. Ltd.',
    category: 'Business Cards' as Category,
    quote: 'The business card design looks clean, professional, and premium. It creates a strong first impression when meeting clients. The layout and finishing guidance were excellent.',
  },
  {
    name: 'Flowbay',
    category: 'Business Cards' as Category,
    quote: 'Simple yet stylish design. The team ensured our brand identity was reflected perfectly in the card. We\'ve received positive feedback from partners and clients.',
  },
  {
    name: 'Sunwin Power Solutions',
    category: 'Business Cards' as Category,
    quote: 'The card design is modern and eye-catching. It clearly communicates our services and gives a professional image to our business.',
  },
  {
    name: 'MK Promoters',
    category: 'Business Cards' as Category,
    quote: 'Strong, bold, and professional — exactly what we wanted. The design aligns perfectly with our brand identity.',
  },
  // Social Media
  {
    name: 'Curls n Spikes',
    category: 'Social Media' as Category,
    quote: 'Our social media engagement improved drastically after they started managing our page. The content is trendy, creative, and attracts the right audience. We\'ve seen an increase in appointment bookings directly through Instagram.',
  },
  {
    name: 'Sriies Bakes',
    category: 'Social Media' as Category,
    quote: 'They beautifully showcased our products through creative posts and reels. Our follower base has grown steadily, and we now receive regular custom cake orders through social media.',
  },
  {
    name: 'RAACK Dance Academy',
    category: 'Social Media' as Category,
    quote: 'The team created engaging content that highlights our performances and classes. Enrollment inquiries increased within the first few months. Our page now looks professional and consistent.',
  },
  {
    name: 'PTD Builders',
    category: 'Social Media' as Category,
    quote: 'Construction projects were difficult to showcase before, but they presented our work in a very professional way. The branding and content strategy helped us attract serious clients.',
  },
  // Meta Ads
  {
    name: 'Pixel Photography',
    category: 'Meta Ads' as Category,
    quote: 'Their Meta ad campaigns helped us generate quality leads for event bookings. We received consistent inquiries at a reasonable cost per lead. The targeting strategy worked perfectly.',
  },
  {
    name: 'Sunwin Power Solutions',
    category: 'Meta Ads' as Category,
    quote: 'We saw a significant increase in installation inquiries after running ads with them. The campaigns were optimized regularly, and results kept improving month by month.',
  },
  {
    name: 'Raack Dance Academy',
    category: 'Meta Ads' as Category,
    quote: 'The ad campaign for new admissions brought excellent results. We received numerous inquiries and successfully filled multiple batches.',
  },
  {
    name: 'Zest and Beauty Salon',
    category: 'Meta Ads' as Category,
    quote: 'Our promotional campaign delivered more bookings than expected. The creatives were attractive, and the targeting was accurate.',
  },
  {
    name: 'Moni Makeup Artistry',
    category: 'Meta Ads' as Category,
    quote: 'As an independent makeup artist, I needed consistent leads. Their ad strategy helped me generate bridal and event bookings regularly. Very professional approach.',
  },
  {
    name: 'Sriies Bakes',
    category: 'Meta Ads' as Category,
    quote: 'The campaigns helped us reach more local customers and increase custom cake orders. We saw noticeable growth in inquiries within a short time.',
  },
  {
    name: 'SKC Imitation Jewellery',
    category: 'Meta Ads' as Category,
    quote: 'Our online sales improved after running ads with them. The creatives were attractive, and the audience targeting was spot on.',
  },
  // Website
  {
    name: 'Vriddhi Psychological Services',
    category: 'Website' as Category,
    quote: 'They developed a modern, responsive, and highly professional website. The design perfectly reflects our brand identity, and the navigation is smooth. Since the launch, we\'ve received positive feedback and a steady flow of inquiries.',
  },
  {
    name: 'Sunwin Power Solutions',
    category: 'Website' as Category,
    quote: 'From planning to launch, the entire website development process was smooth and well-organized. The loading speed, mobile responsiveness, and overall design quality exceeded our expectations.',
  },
  {
    name: 'Flowbay',
    category: 'Website' as Category,
    quote: 'Working with Niraah Digi Connect has been a great experience. Their team quickly understood our technical products and industry needs. Communication was smooth, deadlines were met, and we\'ve seen noticeable improvement in engagement and qualified inquiries.',
  },
];

const categories: Category[] = ['All', 'GMB', 'Logo', 'Social Media', 'Meta Ads', 'Website', 'Business Cards'];

const categoryColors: Record<Category, string> = {
  'All': '#10B981',
  'GMB': '#10B981',
  'Logo': '#8B5CF6',
  'Social Media': '#F59E0B',
  'Meta Ads': '#3B82F6',
  'Website': '#EC4899',
  'Business Cards': '#06B6D4',
};

interface TestimonialCardProps {
  name: string;
  category: Category;
  quote: string;
  color: string;
}

function TestimonialCard({ name, category, quote, color }: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col justify-between p-6 shrink-0 w-[320px] md:w-[380px]"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-1)',
        borderRadius: '20px',
        backdropFilter: 'blur(20px)',
        minHeight: '220px',
      }}
    >
      {/* Stars */}
      <div>
        <div className="flex gap-0.5 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} style={{ color, fontSize: '13px' }}>★</span>
          ))}
        </div>
        <p className="font-sans text-sm leading-relaxed font-light" style={{ color: 'var(--text-1)' }}>
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author */}
      <div
        className="flex items-center gap-3 mt-5 pt-4"
        style={{ borderTop: '1px solid var(--border-1)' }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
          style={{ background: `${color}18`, border: `1px solid ${color}35`, color }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-sans font-bold text-[13px]" style={{ color: 'var(--text-1)' }}>{name}</p>
          <p className="font-sans text-[10px] uppercase tracking-widest mt-0.5" style={{ color }}>
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [isPaused, setIsPaused] = useState(false);

  const filtered = activeCategory === 'All'
    ? allTestimonials
    : allTestimonials.filter((t) => t.category === activeCategory);

  // Ensure enough cards for a seamless loop — triple if too few
  const repeated = filtered.length < 6
    ? [...filtered, ...filtered, ...filtered]
    : [...filtered, ...filtered];

  const color = categoryColors[activeCategory];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--bg-main)' }}
    >
      {/* Background Text */}
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
        <div className="mb-12 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label text-[#10B981]">Testimonials</span>
            <h2
              className="font-display font-bold mb-4 uppercase tracking-tight mt-4"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)', color: 'var(--text-1)' }}
            >
              Client <span style={{ color: 'var(--text-4)' }}>Stories</span>
            </h2>
            <p className="font-sans text-base max-w-xl mx-auto" style={{ color: 'var(--text-3)' }}>
              Real results from real businesses across every service we offer.
            </p>
          </motion.div>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 px-6"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-sans font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300"
              style={{
                background: activeCategory === cat ? categoryColors[cat] : 'var(--marquee-pill-bg)',
                color: activeCategory === cat ? '#fff' : 'var(--text-2)',
                border: `1px solid ${activeCategory === cat ? categoryColors[cat] : 'var(--border-1)'}`,
              }}
            >
              {cat}
              <span className="ml-1.5 opacity-60">
                ({cat === 'All' ? allTestimonials.length : allTestimonials.filter(t => t.category === cat).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* ── Scrolling Marquee ── */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 z-10 pointer-events-none"
            style={{ background: 'var(--fade-l)' }} />
          {/* Right fade */}
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 z-10 pointer-events-none"
            style={{ background: 'var(--fade-r)' }} />

          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex gap-5 py-4"
              style={{
                width: 'max-content',
                /* left-to-right: start shifted at -50% so first visible content is mid-set,
                   animate toward 0 so cards slide rightward, then loop seamlessly */
                animation: `testimonials-ltr ${filtered.length * 4}s linear infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {repeated.map((t, i) => (
                <TestimonialCard
                  key={`${t.name}-${i}`}
                  name={t.name}
                  category={t.category}
                  quote={t.quote}
                  color={color}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hover hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-sans text-[10px] uppercase tracking-widest mt-5"
          style={{ color: 'var(--text-3)' }}
        >
          Hover to pause
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-6 max-w-7xl mx-auto"
        >
          {[
            { value: '25+', label: 'Happy Clients' },
            { value: '6', label: 'Service Categories' },
            { value: '100%', label: 'Satisfaction Rate' },
            { value: '5★', label: 'Average Rating' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-6 px-4"
              style={{
                background: 'rgba(16,185,129,0.04)',
                border: '1px solid rgba(16,185,129,0.15)',
                borderRadius: '20px',
              }}
            >
              <p className="font-display font-bold text-3xl md:text-4xl text-[#10B981] mb-1">{stat.value}</p>
              <p className="font-sans text-xs uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
