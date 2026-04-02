'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Goalzy Fintech',
    category: 'Finance / SaaS',
    image: '/images/images/goalzy.png',
    link: '#',
  },
  {
    title: 'Pocket Grocer',
    category: 'E-commerce / Delivery',
    image: '/images/images/pocketgrocer.png',
    link: '#',
  },
  {
    title: 'Splito Expense',
    category: 'Fintech / Utility',
    image: '/images/images/splito.png',
    link: '#',
  },
  {
    title: 'Sunwin Solar',
    category: 'CleanTech / Energy',
    image: '/images/images/sunwin.png',
    link: '#',
  },
  {
    title: 'Vriddhi Growth',
    category: 'EdTech / Business',
    image: '/images/images/vriddhi.png',
    link: '#',
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-20 md:py-32 bg-[#000000] overflow-hidden">
      {/* Background Text Reveal */}
      <motion.div 
        className="section-bg-text"
        initial={{ opacity: 0, scale: 0.8, y: '-50%', x: '-50%' }}
        whileInView={{ opacity: 0.02, scale: 1, y: '-50%', x: '-50%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        PORTFOLIO
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#10B981] font-sans font-bold tracking-widest text-xs uppercase mb-4 block"
            >
              Latest Case Studies
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-5xl md:text-7xl text-white leading-tight uppercase mb-6"
            >
              Selected <br /> <span className="text-white/40">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/50 font-sans text-lg leading-relaxed"
            >
              We transform ambitious ideas into world-class digital experiences. Explore our latest work and see how we&apos;ve helped our clients scale their impact.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="white-btn py-4 px-10 uppercase text-xs tracking-widest">
              Let&apos;s Work Together →
            </a>
          </motion.div>
        </div>

        {/* Dynamic Grid for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group cursor-pointer ${idx === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-white/5 bg-white/2 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white font-display text-2xl font-bold uppercase tracking-tight">{project.title}</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                     ↗
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <span className="text-white/40 font-sans text-sm font-medium tracking-wide uppercase">{project.category}</span>
                <span className="text-white/20 font-sans text-xs">2024</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Marquee Track (Using real images) */}
        <div className="relative mt-32">
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
           
           <div className="overflow-hidden">
             <motion.div
                className="flex items-center gap-8 whitespace-nowrap"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ width: 'fit-content' }}
              >
                {[...projects, ...projects].map((project, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[16/9] bg-white/5 min-w-[85vw] sm:min-w-[480px]">
                    <img src={project.image} alt="Project banner scroll" className="w-full h-full object-cover opacity-30 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
