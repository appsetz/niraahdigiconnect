'use client';

import { motion } from 'framer-motion';
import { ThreeDMarquee } from './ui/three-d-marquee';

// Niraah services - simple titles only
const niraahServices: string[] = [
  'Social Media Management',
  'Meta Ads',
  'Google Ads',
  'SEO Optimization',
  'Website Design',
  'E-commerce Development',
  'Brand Identity',
  'Content Marketing',
  'Video Production',
  'Google Business Profile',
  'Creative Design',
  'Media Production',
  'Business Cards',
  'Brochures & Print',
  'Workshops & Training',
  'Lead Generation',
  'Email Marketing',
  'Analytics & Reporting',
  'Influencer Marketing',
  'Reputation Management',
];

const summaryStats = [
  { number: '20+', label: 'Services' },
  { number: '100+', label: 'Projects' },
  { number: '50+', label: 'Happy Clients' },
];

const serviceHighlights = [
  'Social Media & Content Strategy',
  'Paid Advertising (Meta & Google)',
  'Website & E-commerce Development',
];

export default function PortfolioShowcase() {
  return (
    <section
      id="portfolio-showcase"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{ background: '#000000' }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.03) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile View */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-[#10B981]">
              What We Do
            </span>
            <h2 className="font-display font-bold text-3xl text-white mt-4 uppercase leading-tight">
              Full-Stack <span className="text-white/30">Digital Services</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ThreeDMarquee 
              items={niraahServices} 
              className="h-[350px] sm:h-[450px]"
            />
          </motion.div>
          
          {/* Mobile Stats */}
          <div className="flex justify-center gap-8 mt-8">
            {summaryStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="font-display font-bold text-2xl text-[#10B981]">
                  {stat.number}
                </div>
                <div className="font-sans text-xs text-white/40 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop View - Two Column Layout */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-16 xl:gap-24">
          
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-xl"
          >
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-[#10B981] block mb-4">
              What We Do
            </span>
            
            <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-6 leading-tight font-display uppercase">
              Full-Stack{' '}
              <span className="text-white/30">Digital Services</span>
            </h2>
            
            <p className="text-lg xl:text-xl text-gray-400 mb-8 leading-relaxed">
              From social media to SEO, ads to analytics, design to development — 
              we offer everything your brand needs to dominate the digital space.
            </p>

            <div className="space-y-4 mb-8">
              {serviceHighlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              {summaryStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="font-display font-bold text-3xl md:text-4xl text-[#10B981]">
                    {stat.number}
                  </div>
                  <div className="font-sans text-sm text-white/40 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-sm text-gray-500 italic"
            >
              🚀 One agency. Zero gaps.
            </motion.p>
          </motion.div>

          {/* Right Side - 3D Marquee */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-2xl"
          >
            <ThreeDMarquee 
              items={niraahServices} 
              className="h-[450px] xl:h-[520px] 2xl:h-[580px]"
            />
          </motion.div>
          
        </div>
      </div>

      {/* Bottom fade to black */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #000000, transparent)',
        }}
      />
    </section>
  );
}
