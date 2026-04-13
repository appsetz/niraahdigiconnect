'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

/* ── Sun icon ── */
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

/* ── Moon icon ── */
function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const navLinks = [
    { label: 'Work', href: '#portfolio-showcase' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#our-approach' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0, opacity: 1,
      transition: { type: 'tween' as const, duration: 0.4, ease: [0.25, 1, 0.5, 1] as any },
    },
    exit: {
      x: '100%', opacity: 0,
      transition: { type: 'tween' as const, duration: 0.3, ease: [0.25, 1, 0.5, 1] as any },
    },
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const linkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] pointer-events-none flex justify-center">
        <div
          className={`pointer-events-auto relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isScrolled
              ? 'mt-4 md:mt-6 w-[calc(100%-32px)] max-w-[1000px] h-16 md:h-[72px] px-5 md:px-8 rounded-full backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.18)]'
              : 'mt-0 w-full max-w-7xl h-20 md:h-28 px-6 md:px-8 rounded-none border-transparent bg-transparent'
          }`}
          style={isScrolled ? {
            background: 'var(--header-pill-bg)',
            border: '1px solid var(--header-pill-border)',
          } : {}}
        >
          {/* Logo */}
          <a href="#" className="group hover:opacity-80 transition-opacity relative z-[110]" onClick={() => setMenuOpen(false)}>
            <Image src="/images/logo.png" alt="Niraah Logo" width={140} height={40} className="object-contain w-[120px] md:w-[140px] h-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans font-medium text-sm hover:text-[#10B981] transition-all duration-300"
                style={{ color: 'var(--text-2)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle + CTA + Hamburger */}
          <div className="flex items-center gap-3 relative z-[110]">

            {/* ── Theme Toggle Button ── */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                background: isDark ? 'rgba(16,185,129,0.12)' : 'rgba(0,0,0,0.07)',
                border: '1px solid var(--border-1)',
                color: isDark ? '#10B981' : '#555',
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden lg:flex items-center justify-center font-sans font-semibold text-[13px] text-white bg-[#10B981] hover:bg-[#059669] transition-all duration-300 py-3 px-7 rounded-full shadow-[0_4px_14px_rgba(16,185,129,0.3)]"
            >
              Get Started <span className="ml-[6px] text-base leading-none">→</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full z-[110] relative overflow-hidden backdrop-blur-md active:scale-95 transition-transform"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{
                background: 'var(--hamburger-btn-bg)',
                border: '1px solid var(--hamburger-btn-border)',
                color: 'var(--hamburger-color)',
              }}
            >
              {(['top', 'mid', 'bot'] as const).map((pos) => (
                <motion.span
                  key={pos}
                  animate={
                    pos === 'top' ? (menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }) :
                    pos === 'mid' ? (menuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }) :
                    (menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 })
                  }
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`w-5 h-[2px] block ${pos === 'mid' ? 'my-1' : ''}`}
                  style={{ background: 'var(--hamburger-color)' }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 backdrop-blur-sm z-[90] lg:hidden"
              style={{ background: 'rgba(0,0,0,0.5)' }}
            />

            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[min(280px,75vw)] z-[100] p-6 pt-24 flex flex-col shadow-2xl lg:hidden"
              style={{
                background: 'var(--mobile-menu-bg)',
                borderLeft: '1px solid var(--mobile-link-border)',
              }}
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
                    className="text-[20px] font-display font-medium hover:text-[#10B981] hover:pl-2 transition-all duration-300 pb-3"
                    style={{
                      color: 'var(--text-2)',
                      borderBottom: '1px solid var(--mobile-link-border)',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>

              {/* Mobile theme toggle row */}
              <motion.div variants={linkVariants} className="mt-6 flex items-center justify-between">
                <span className="font-sans text-sm" style={{ color: 'var(--text-3)' }}>
                  {isDark ? 'Dark mode' : 'Light mode'}
                </span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
                  style={{
                    background: isDark ? 'rgba(16,185,129,0.12)' : 'rgba(0,0,0,0.06)',
                    border: '1px solid var(--border-1)',
                    color: isDark ? '#10B981' : '#555',
                  }}
                  aria-label="Toggle theme"
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </button>
              </motion.div>

              <motion.div
                variants={linkVariants}
                className="mt-auto pt-6"
                style={{ borderTop: '1px solid var(--mobile-link-border)' }}
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-[#10B981] hover:bg-[#059669] text-white py-3 rounded-xl font-bold text-base shadow-[0_4px_15px_rgba(16,185,129,0.25)] transition-all duration-300 active:scale-95"
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
