'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkshopsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="badge-yellow">OUR SERVICES</span>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Workshops & Practical Training Programs
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                We conduct result-oriented workshops designed for business owners, freelancers, students, and working professionals who want to generate real results using digital platforms — not just learn theory.
              </p>

              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">1.</span>
                  <div>
                    <span className="font-bold">Meta Ads Mastery</span> – Learn to create, launch, and optimize high-converting campaigns.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">2.</span>
                  <div>
                    <span className="font-bold">Social Media Management</span> – Manage Instagram and Facebook pages strategically, not randomly.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">3.</span>
                  <div>
                    <span className="font-bold">Google My Business Growth</span> – Rank locally and attract genuine customers through search and maps.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">4.</span>
                  <div>
                    <span className="font-bold">Canva for Business</span> – Create professional, sales-driven content without depending on designers.
                  </div>
                </li>
              </ul>

              <div className="pt-4 space-y-3">
                <p className="text-base text-gray-700">
                  <strong>Live practical implementation</strong> with real campaign setup and strategy clarity.
                </p>
                <p className="text-base text-gray-700">
                  Sessions structured from basics to advanced levels for <strong>measurable results</strong>.
                </p>
              </div>
            </div>

            <button className="btn-primary mt-4">
              LEARN MORE
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 shadow-xl">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                {/* Team working image placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👥</div>
                    <div className="text-2xl font-bold text-gray-700">Team Collaboration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;

