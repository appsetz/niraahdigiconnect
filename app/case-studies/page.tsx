'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Header with back button */}
        <div className="pt-28 px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/#services" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors mb-8">
              <ArrowLeft size={20} />
              <span>Back to Services</span>
            </Link>
          </div>
        </div>

        {/* Hero section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)' }}>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6 px-4" style={{ color: '#0f2817' }}>
                Client{' '}
                <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Case Studies
                </span>
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4" style={{ color: '#166534' }}>
                Real businesses, real results. Detailed performance data and measurable outcomes from our client projects.
              </p>
            </div>
          </div>
        </section>

        {/* Case studies content */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #dcfce7 0%, #f0fdf4 100%)' }}>
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div
                className="rounded-2xl p-8 sm:p-12"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(22,163,74,0.2)',
                }}
              >
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#0f2817' }}>
                  Coming Soon
                </h2>
                <p style={{ color: '#166534' }} className="text-lg mb-6">
                  We're preparing detailed case studies with real client data, performance metrics, and measurable outcomes. Each case study will showcase the exact strategies used and results achieved for different types of businesses.
                </p>
                <p style={{ color: '#166534' }} className="mb-8">
                  The case studies will be organized by service and industry, making it easy to find relevant examples for your business type.
                </p>
                <Link href="/" className="btn-primary inline-flex">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
