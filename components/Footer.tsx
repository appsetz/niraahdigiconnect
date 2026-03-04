'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: '#020b05',
        borderTop: '1px solid rgba(34,197,94,0.15)',
      }}
    >
      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(20px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-4 animate-fadeInUp">
            <a href="#home" className="flex items-center group w-fit">
              <Image
                src="/images/Niraah logo with Text with out background.png"
                alt="Niraah Digi Connect"
                width={140}
                height={48}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-sm leading-relaxed" style={{ color: '#86efac' }}>
              NIRAAH DIGI CONNECT is a strategy-first marketing agency that builds predictable systems to turn attention into revenue.
            </p>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 text-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email here"
                required
                className="flex-1 px-4 py-2.5 rounded-full text-sm focus:outline-none transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(34,197,94,0.25)',
                  color: '#f0fdf4',
                }}
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(74,222,128,0.6)'; }}
                onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(34,197,94,0.25)'; }}
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #16a34a, #22c55e)', boxShadow: '0 0 15px rgba(34,197,94,0.3)' }}
              >
                <Send size={16} className="text-white" />
              </button>
            </form>
          </div>

          {/* Company Links */}
          <div className="animate-fadeInUp stagger-2">
            <h3 className="font-bold text-base sm:text-lg mb-4" style={{ color: '#f0fdf4' }}>COMPANY</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {['ABOUT US', 'CAREERS', 'SERVICES', 'BLOG'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:translate-x-2 inline-block transition-all duration-300 relative group"
                    style={{ color: '#86efac' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#4ade80')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#86efac')}
                  >
                    {item}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{ background: 'linear-gradient(90deg, #22c55e, #4ade80)' }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="animate-fadeInUp stagger-3">
            <h3 className="font-bold text-base sm:text-lg mb-4" style={{ color: '#f0fdf4' }}>PRODUCT</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {['FEATURES', 'PRICING', 'NEWS', 'HELP DESK', 'SUPPORT'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:translate-x-2 inline-block transition-all duration-300 relative group"
                    style={{ color: '#86efac' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#4ade80')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#86efac')}
                  >
                    {item}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{ background: 'linear-gradient(90deg, #22c55e, #4ade80)' }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp stagger-4">
            <h3 className="font-bold text-base sm:text-lg mb-4" style={{ color: '#f0fdf4' }}>CONTACT</h3>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: '#86efac' }}>
                Your business has a story to tell and we're here to make it heard.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:hello@niraah.com"
                  className="flex items-start gap-3 text-sm group hover:translate-x-2 transition-all duration-300"
                  style={{ color: '#86efac' }}
                >
                  <Mail size={18} className="mt-1 flex-shrink-0 group-hover:text-green-400 transition-colors" />
                  <span className="group-hover:text-green-400 transition-colors break-all">hello@niraah.com</span>
                </a>
                <div className="flex items-start gap-3 text-sm group hover:translate-x-2 transition-all duration-300" style={{ color: '#86efac' }}>
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <span>+91 XXX XXX XXXX</span>
                </div>
                <div className="flex items-start gap-3 text-sm group hover:translate-x-2 transition-all duration-300" style={{ color: '#86efac' }}>
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm"
          style={{ borderTop: '1px solid rgba(34,197,94,0.1)', color: '#4ade80' }}
        >
          <p className="text-center md:text-left" style={{ color: '#86efac' }}>
            © 2026 Niraah Digi Connect. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            {['Terms of Use', 'Privacy Policy'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="relative group transition-all duration-300"
                style={{ color: '#86efac' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#4ade80')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#86efac')}
              >
                {link}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #22c55e, #4ade80)' }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
