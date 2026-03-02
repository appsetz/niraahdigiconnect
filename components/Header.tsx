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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-white/98 backdrop-blur-md shadow-lg py-3'
      : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <Image
              src="/images/Niraah logo with Text with out background.png"
              alt="Niraah Digi Connect"
              width={140}
              height={48}
              className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg">
              GET STARTED
              <span className="text-yellow-400 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="animate-scaleIn" />
            ) : (
              <Menu size={24} className="animate-scaleIn" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-4 border-t mt-4">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium text-gray-700 hover:text-yellow-600 hover:translate-x-2 transition-all duration-300 ${isMenuOpen ? 'animate-fadeInLeft' : ''
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 animate-fadeInLeft text-center"
                style={{ animationDelay: '250ms' }}
                onClick={() => setIsMenuOpen(false)}
              >
                GET STARTED →
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

