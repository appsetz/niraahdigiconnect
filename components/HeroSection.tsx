'use client';

import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import ViralFlowPath from './ViralFlowPath';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="animate-fadeInDown">
              <span className="badge-yellow inline-block">NIRAAH DIGI CONNECT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fadeInUp">
              Where Strategy Meets{' '}
              <span className="text-gray-400 block sm:inline">Measurable Growth</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl animate-fadeInUp stagger-2">
              We don’t sell random digital services. We build predictable systems that turn attention into revenue.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fadeInUp stagger-3">
              <button className="btn-primary w-full sm:w-auto justify-center">
                <Play size={18} fill="white" />
                VIEW RESULTS
              </button>
              <button className="btn-secondary w-full sm:w-auto justify-center">
                BOOK A CALL
              </button>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white rounded-2xl p-3 sm:p-4 shadow-lg animate-fadeInDown stagger-4 hover:scale-110 transition-transform duration-300">
                  <div className="text-xs sm:text-sm font-semibold text-gray-600">Company Budget</div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">$12.5</div>
                </div>

                {/* Person placeholder */}
                <div className="w-32 h-32 sm:w-48 sm:h-48 bg-yellow-400 rounded-full flex items-center justify-center text-5xl sm:text-6xl animate-float">
                  👤
                </div>

                {/* Decorative circles */}
                <div className="absolute top-1/2 left-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-500 rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-8 sm:bottom-12 right-8 sm:right-12 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-12 sm:mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'animate-fadeInUp stagger-5' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300 group-hover:scale-110 transform inline-block">12</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-2 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300 group-hover:scale-110 transform inline-block">5.6M+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-2 uppercase tracking-wide">Total Users</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300 group-hover:scale-110 transform inline-block">4.8</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-2 uppercase tracking-wide">Average Rating</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300 group-hover:scale-110 transform inline-block">80+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-2 uppercase tracking-wide">Professionals Team</div>
            </div>
          </div>
        </div>

        {/* Viral Flow Path Section */}
        <div className={`mt-20 sm:mt-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 animate-fadeInUp">
              How Your Brand Goes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-yellow-500">Viral</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp stagger-2">
              We transform your ideas into viral campaigns through our proven 4-stage process
            </p>
          </div>
          <ViralFlowPath />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

