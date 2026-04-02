'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#portfolio-showcase' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#our-approach' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  // Handle scroll for sticky header elevation/blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Framer Motion variants config
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'tween' as const,
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as any,
      }
    },
    exit: { 
      x: '100%', 
      opacity: 0,
      transition: {
        type: 'tween' as const,
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1] as any,
      }
    }
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2, // slight delay so menu frames in first
      }
    }
  };

  const linkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] pointer-events-none flex justify-center">
        <div
          className={`pointer-events-auto relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isScrolled
              ? 'mt-4 md:mt-6 w-[calc(100%-32px)] max-w-[1000px] h-16 md:h-[72px] px-5 md:px-8 rounded-full bg-[rgba(17,17,17,0.85)] backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'
              : 'mt-0 w-full max-w-7xl h-20 md:h-28 px-6 md:px-8 rounded-none border-transparent bg-transparent'
          }`}
        >
          {/* Left: Logo */}
          <a
            href="#"
            className="group hover:opacity-80 transition-opacity relative z-[110]"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/images/logo.png" alt="Niraah Logo" width={140} height={40} className="object-contain w-[120px] md:w-[140px] h-auto" />
          </a>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans font-medium text-sm text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-[110]">
            {/* Desktop Primary CTA */}
            <a
              href="#contact"
              className="hidden lg:flex items-center justify-center font-sans font-semibold text-[13px] text-black bg-[#10B981] hover:bg-white transition-all duration-300 py-3 px-7 rounded-full shadow-[0_4px_14px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)]"
            >
              Get Started <span className="ml-[6px] text-base leading-none">→</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-full border border-white/10 text-white z-[110] relative overflow-hidden bg-white/5 backdrop-blur-md active:scale-95 transition-transform"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-5 h-[2px] bg-white block transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-5 h-[2px] bg-white block my-1 transition-all"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-5 h-[2px] bg-white block transition-all"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay & Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Screen Dark Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-[#000000]/70 backdrop-blur-sm z-[90] lg:hidden"
            />

            {/* Right Slide-in Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[min(280px,75vw)] bg-[#0A0A0A] border-l border-white/5 z-[100] p-6 pt-24 flex flex-col shadow-2xl lg:hidden"
            >
              <motion.nav 
                variants={linkContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-4"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    variants={linkVariants}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[20px] font-display font-medium text-white/80 hover:text-[#10B981] hover:pl-2 transition-all duration-300 border-b border-white/10 pb-3"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>

              <motion.div 
                variants={linkVariants}
                className="mt-auto pt-6 border-t border-white/10"
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-[#10B981] hover:bg-white text-black hover:text-black py-3 rounded-xl font-bold text-base shadow-[0_4px_15px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.3)] transition-all duration-300 transform active:scale-95"
                >
                  Get Started <span className="ml-[6px] text-lg leading-none font-medium">→</span>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
