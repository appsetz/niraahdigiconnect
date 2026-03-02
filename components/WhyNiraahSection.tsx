'use client';

import React from 'react';
import { Check } from 'lucide-react';

const WhyNiraahSection = () => {
  const reasons = [
    'Strategy-first approach',
    'Performance-focused execution',
    'Strong Meta Ads & organic growth experience',
    'Clear communication & accountability'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl aspect-square flex items-center justify-center">
                  <span className="text-5xl">👥</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg mt-8">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl aspect-square flex items-center justify-center">
                  <span className="text-5xl">💼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="badge-yellow">WHY CHOOSE US</span>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              We Build Digital Identities That Grow Businesses
            </h2>

            <p className="text-lg text-gray-700">
              At NIRAAH DIGI CONNECT, we don't just run random campaigns. We focus on building strong digital identities that deliver measurable results and actual business growth.
            </p>

            <div className="space-y-4">
              {[
                'Goal-oriented strategies (leads, sales, awareness)',
                'Highly customized plans specifically for your business',
                'All-in-one digital growth responsibility',
                'Creativity that converts through strong visuals',
                'Complete transparency with clear performance reports'
              ].map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-700">{reason}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary mt-6">
              BOOK A CONSULTATION
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNiraahSection;

