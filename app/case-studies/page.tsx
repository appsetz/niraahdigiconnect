'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Back button */}
        <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-0">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-12">
              <ArrowLeft size={20} />
              <span style={{ fontSize: '14px' }}>Back to Home</span>
            </Link>
          </div>
        </div>

        {/* Hero section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative" style={{ background: '#ffffff' }}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', color: '#000000', whiteSpace: 'pre-wrap' }}>
              Client
              <br />
              <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Case Studies
              </span>
            </h1>
            <p style={{ color: '#666666', fontSize: '16px', maxWidth: '600px', margin: '16px auto' }}>
              Real businesses, real results. Detailed performance data and measurable outcomes from our client projects.
            </p>
          </div>
        </section>

        {/* Content section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative" style={{ background: '#ffffff' }}>
          <div className="max-w-4xl mx-auto">
            <div
              className="p-8 sm:p-12"
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '20px',
                backgroundColor: '#f9fafb',
              }}
            >
              <h2 className="font-serif font-bold text-2xl sm:text-3xl mb-4" style={{ color: '#000000' }}>
                Coming Soon
              </h2>
              <p style={{ color: '#666666' }} className="text-base mb-6 leading-relaxed">
                We're preparing detailed case studies with real client data, performance metrics, and measurable outcomes. Each case study will showcase the exact strategies used and results achieved for different types of businesses.
              </p>
              <p style={{ color: '#666666' }} className="mb-8 text-base leading-relaxed">
                The case studies will be organized by service and industry, making it easy to find relevant examples for your business type.
              </p>
              <Link
                href="/"
                className="group inline-flex items-center gap-3 px-8 py-3 transition-all duration-300 hover:scale-105"
                style={{
                  border: '2px solid #000000',
                  borderRadius: '50px',
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Back to Home
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M1 8h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
