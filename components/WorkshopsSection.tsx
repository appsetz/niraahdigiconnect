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
              Online Workshops & Skill Training
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 font-semibold">
                We offer training in:
              </p>
              
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-600">•</span> Social Media Management
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600">•</span> Meta Ads (Facebook & Instagram)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600">•</span> Google My Business
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600">•</span> Video Editing
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600">•</span> Poster & Creative Editing
                </li>
              </ul>

              <div className="pt-4 space-y-3">
                <p className="text-base text-gray-700">
                  <strong>Execution-focused training</strong> built on real campaigns, not theory.
                </p>
                <p className="text-base text-gray-700">
                  Live online training with recordings and <strong>MSME-recognized certification</strong>
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

