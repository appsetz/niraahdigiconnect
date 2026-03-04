'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'HOME', href: '#home' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'SERVICES', href: '#services' },
    { name: 'BLOG', href: '#blog' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    /* Outer wrapper — full-width fixed, transparent background */
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4">
      {/* ── Curved floating pill navbar ── */}
      <div
        className="w-full max-w-6xl transition-all duration-500"
        style={{
          background: isScrolled
            ? 'rgba(2, 11, 5, 0.95)'
            : 'rgba(5, 15, 8, 0.75)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          borderRadius: '999px',   /* full pill */
          boxShadow: isScrolled
            ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,197,94,0.15), 0 0 30px rgba(34,197,94,0.08)'
            : '0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(34,197,94,0.1)',
          padding: '10px 20px',
        }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center group flex-shrink-0">
            <Image
              src="/images/Niraah logo with Text with out background.png"
              alt="Niraah Digi Connect"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs lg:text-sm font-semibold tracking-wide transition-all duration-300 relative group whitespace-nowrap"
                style={{ color: '#bbf7d0' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#4ade80')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#bbf7d0')}
              >
                {item.name}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #22c55e, #4ade80)' }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="btn-primary text-xs lg:text-sm px-5 py-2 rounded-full"
            >
              GET STARTED →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full transition-colors duration-300"
            style={{ color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.08)' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} className="animate-scaleIn" /> : <Menu size={20} className="animate-scaleIn" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown — slides down below the pill */}
      <div
        className={`absolute top-full mt-2 left-4 right-4 md:hidden transition-all duration-500 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        style={{ maxWidth: '600px', margin: '8px auto 0' }}
      >
        <div
          className="py-5 px-6 rounded-3xl"
          style={{
            background: 'rgba(2, 11, 5, 0.97)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(34,197,94,0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}
        >
          <nav className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold hover:translate-x-2 transition-all duration-300 ${isMenuOpen ? 'animate-fadeInLeft' : ''
                  }`}
                style={{ color: '#bbf7d0', animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#4ade80')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#bbf7d0')}
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm text-center rounded-full py-2.5 px-6 animate-fadeInLeft mt-2"
              style={{ animationDelay: '280ms' }}
              onClick={() => setIsMenuOpen(false)}
            >
              GET STARTED →
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
