'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#portfolio-showcase' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#our-approach' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-32px)] md:max-w-[1000px] px-4 md:px-4 py-0 h-16 md:h-[72px] flex items-center justify-between rounded-full border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
      style={{
        background: 'rgba(17, 17, 17, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
        className="group hover:opacity-80 transition-opacity"
      >
        <Image src="/images/logo.png" alt="Niraah Logo" width={100} height={32} className="object-contain md:w-[120px] md:h-[40px]" />
      </a>

      {/* Desktop Nav */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
        className="hidden lg:flex"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-sans font-medium text-sm transition-colors duration-300"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Let's Talk Button */}
      <a
        href="#contact"
        className="hidden lg:flex items-center justify-center font-sans font-medium text-sm text-white transition-colors py-2 px-6 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
      >
        Let&apos;s Talk ✦
      </a>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-white rounded-full bg-white/5 border border-white/10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="lg:hidden fixed top-[72px] md:top-[84px] left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] flex flex-col items-center justify-center p-8 gap-6 z-[99] rounded-[24px] border border-white/10"
          style={{
            background: 'rgba(17,17,17,0.95)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg md:text-xl font-semibold text-white/90 font-sans"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#10B981] text-white px-8 py-3 rounded-full font-bold text-base md:text-lg"
          >
            Let&apos;s Talk ✦
          </a>
        </div>
      )}
    </header>
  );
}
