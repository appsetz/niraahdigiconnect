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
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        width: 'calc(100% - 32px)',
        maxWidth: '1000px',
        padding: '0 8px 0 16px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '9999px',
        background: 'rgba(17, 17, 17, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
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
        <Image src="/images/logo.png" alt="Niraah Logo" width={120} height={40} className="object-contain" />
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
        className="lg:hidden flex items-center justify-center w-12 h-12 text-white rounded-full bg-white/5 border border-white/10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="lg:hidden"
          style={{
            position: 'fixed',
            top: '84px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100vw - 32px)',
            background: 'rgba(17,17,17,0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 24px',
            gap: '24px',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'var(--font-plus-jakarta), sans-serif',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '16px',
              background: '#10B981',
              color: '#fff',
              padding: '16px 40px',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '18px',
            }}
          >
            Let&apos;s Talk ✦
          </a>
        </div>
      )}
    </header>
  );
}
