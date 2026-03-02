'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-7xl mx-auto">
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
            <p className="text-gray-600 text-sm leading-relaxed">
              NIRAAH DIGI CONNECT is a strategy-first marketing agency that builds predictable systems to turn attention into revenue.
            </p>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 text-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email here"
                required
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300 group"
              >
                <Send size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Company Links */}
          <div className="animate-fadeInUp stagger-2">
            <h3 className="font-bold text-base sm:text-lg mb-4">COMPANY</h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              {['ABOUT US', 'CAREERS', 'SERVICES', 'BLOG'].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-yellow-600 hover:translate-x-2 inline-block transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="animate-fadeInUp stagger-3">
            <h3 className="font-bold text-base sm:text-lg mb-4">PRODUCT</h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              {['FEATURES', 'PRICING', 'NEWS', 'HELP DESK', 'SUPPORT'].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-yellow-600 hover:translate-x-2 inline-block transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp stagger-4">
            <h3 className="font-bold text-base sm:text-lg mb-4">CONTACT</h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Your business has a story to tell and we're here to make it heard.
              </p>
              <div className="space-y-3">
                <a href="mailto:hello@niraah.com" className="flex items-start gap-3 text-sm group hover:translate-x-2 transition-all duration-300">
                  <Mail size={18} className="text-gray-600 mt-1 group-hover:text-yellow-600 transition-colors flex-shrink-0" />
                  <span className="text-gray-600 group-hover:text-yellow-600 transition-colors break-all">
                    hello@niraah.com
                  </span>
                </a>
                <div className="flex items-start gap-3 text-sm group hover:translate-x-2 transition-all duration-300">
                  <Phone size={18} className="text-gray-600 mt-1 group-hover:text-yellow-600 transition-colors flex-shrink-0" />
                  <span className="text-gray-600 group-hover:text-yellow-600 transition-colors">+91 XXX XXX XXXX</span>
                </div>
                <div className="flex items-start gap-3 text-sm group hover:translate-x-2 transition-all duration-300">
                  <MapPin size={18} className="text-gray-600 mt-1 group-hover:text-yellow-600 transition-colors flex-shrink-0" />
                  <span className="text-gray-600 group-hover:text-yellow-600 transition-colors">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-600">
          <p className="text-center md:text-left">© 2026 Niraah Digi Connect. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#terms" className="hover:text-yellow-600 transition-all duration-300 relative group">
              Terms of Use
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#privacy" className="hover:text-yellow-600 transition-all duration-300 relative group">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

