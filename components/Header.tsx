'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling down past the Splash intro (approx 90% of vh)
      if (window.scrollY > window.innerHeight * 0.9) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case they load midway
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 z-50 w-full px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-500 ease-in-out ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 sm:px-8 sm:py-4 rounded-full pointer-events-auto shadow-sm" style={{ border: '2px solid #000000', backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
        {/* Logo */}
        <Link href="#home" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <Image
            src="/images/Niraah logo with Text with out background.png"
            alt="Niraah"
            width={100}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {['HOME', 'SERVICES', 'ABOUT', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-black hover:text-green-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button 
            className="hidden md:flex px-7 py-2.5 text-sm font-medium transition-all hover:scale-105"
            style={{
              border: '2px solid #000000',
              borderRadius: '50px',
              color: '#000000',
            }}
          >
            Start Project →
          </button>
          
          {/* Mobile Menu */}
          <button className="md:hidden p-2" style={{ border: '1px solid #000000', borderRadius: '50%' }}>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
