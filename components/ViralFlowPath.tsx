'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles, Zap, TrendingUp, Heart } from 'lucide-react';

const ViralFlowPath = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stages = [
    { id: 1, label: 'Idea', icon: Sparkles, color: 'from-purple-500 to-blue-500' },
    { id: 2, label: 'Implement', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { id: 3, label: 'Ad Goes Viral', icon: TrendingUp, color: 'from-cyan-500 to-green-500' },
    { id: 4, label: 'People Love It', icon: Heart, color: 'from-green-500 to-yellow-500' },
  ];

  return (
    <div className={`w-full py-12 sm:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* SVG Path with Elements Overlay */}
      <div className="relative w-full" style={{ minHeight: '300px' }}>
        {/* SVG Path Background */}
        <svg
          viewBox="0 0 1200 300"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full absolute inset-0"
        >
          {/* Animated dashed path */}
          <path
            d="M 50 150 Q 300 50, 550 150 T 1150 150"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="15,10"
            className="viral-path"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="25%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="75%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>

          {/* Glowing particles following the path */}
          <g className="viral-particles">
            <circle cx="50" cy="150" r="6" fill="#8B5CF6" className="viral-particle particle-1" />
            <circle cx="50" cy="150" r="6" fill="#3B82F6" className="viral-particle particle-2" />
            <circle cx="50" cy="150" r="6" fill="#06B6D4" className="viral-particle particle-3" />
          </g>
        </svg>

        {/* Stage Elements - Positioned on SVG */}
        <div className="absolute inset-0 w-full h-full">
          {/* Stage 1 - Idea (15% along path, lower left) */}
          <div
            className={`absolute transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              left: '8%',
              top: '55%',
              transform: 'translate(-50%, -50%)',
              transitionDelay: '0.1s'
            }}
          >
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg mb-2">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap">Idea</h3>
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-600">Stage 1</div>
              <p className="text-xs text-gray-600 text-center max-w-xs mt-1">Creative concepts with strategy</p>
            </div>
          </div>

          {/* Stage 2 - Implement (30% along path, upper curve peak) */}
          <div
            className={`absolute transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              left: '30%',
              top: '15%',
              transform: 'translate(-50%, -50%)',
              transitionDelay: '0.25s'
            }}
          >
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg mb-2">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap">Implement</h3>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">Stage 2</div>
              <p className="text-xs text-gray-600 text-center max-w-xs mt-1">Build with precision</p>
            </div>
          </div>

          {/* Stage 3 - Ad Goes Viral (65% along path, right side middle) */}
          <div
            className={`absolute transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              left: '65%',
              top: '38%',
              transform: 'translate(-50%, -50%)',
              transitionDelay: '0.4s'
            }}
          >
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 shadow-lg mb-2">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap">Ad Goes Viral</h3>
              <div className="text-xs font-semibold uppercase tracking-wider text-green-600">Stage 3</div>
              <p className="text-xs text-gray-600 text-center max-w-xs mt-1">Spread organically</p>
            </div>
          </div>

          {/* Stage 4 - People Love It (90% along path, lower right) */}
          <div
            className={`absolute transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              left: '92%',
              top: '52%',
              transform: 'translate(-50%, -50%)',
              transitionDelay: '0.55s'
            }}
          >
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-500 to-yellow-500 shadow-lg mb-2">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap">People Love It</h3>
              <div className="text-xs font-semibold uppercase tracking-wider text-yellow-600">Stage 4</div>
              <p className="text-xs text-gray-600 text-center max-w-xs mt-1">Engagement creates impact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Summary */}
      <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.8s' }}>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We guide your brand through a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-yellow-500">proven 4-stage viral flow</span>, turning your ideas into campaigns that people actually love and share.
        </p>
      </div>
    </div>
  );
};

export default ViralFlowPath;
