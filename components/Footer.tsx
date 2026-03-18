'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#home" className="inline-block">
              <Image
                src="/images/Niraah logo with Text with out background.png"
                alt="Niraah Digi Connect"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </a>
            <p style={{ color: '#999999', fontSize: '14px', lineHeight: '1.6' }}>
              Strategy-first marketing agency building predictable systems to turn attention into revenue.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif font-bold text-sm" style={{ color: '#ffffff', marginBottom: '16px' }}>COMPANY</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{ color: '#999999', fontSize: '14px' }}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-serif font-bold text-sm" style={{ color: '#ffffff', marginBottom: '16px' }}>RESOURCES</h3>
            <ul className="space-y-3">
              {['FAQ', 'Case Studies', 'Resources', 'Help'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    style={{ color: '#999999', fontSize: '14px' }}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif font-bold text-sm" style={{ color: '#ffffff', marginBottom: '16px' }}>CONTACT</h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@niraah.com"
                className="flex items-start gap-3 group"
                style={{ color: '#999999' }}
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
                <span style={{ fontSize: '14px' }} className="group-hover:text-white transition-colors">
                  hello@niraah.com
                </span>
              </a>
              <div className="flex items-start gap-3" style={{ color: '#999999' }}>
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span style={{ fontSize: '14px' }}>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start gap-3" style={{ color: '#999999' }}>
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span style={{ fontSize: '14px' }}>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #333333', margin: '48px 0' }} />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p style={{ color: '#666666', fontSize: '12px' }}>
            © 2024 Niraah Digi Connect. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                style={{ color: '#666666', fontSize: '12px' }}
                className="hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
