'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const WhoWeWorkWith = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="badge-yellow inline-block animate-scaleIn">ABOUT</span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Who we work with
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We work with:
            </p>
            
            <ul className="space-y-4">
              {['Brands', 'Personal brands', 'Coaches & institutes'].map((item, index) => (
                <li 
                  key={item}
                  className={`flex items-center gap-3 text-base sm:text-lg text-gray-700 group transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <CheckCircle className="text-green-600 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" size={20} />
                  <span className="group-hover:text-green-700 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-base sm:text-lg text-gray-700 font-semibold pt-4">
              We partner with clients serious about growth.
            </p>

            <button className="btn-primary mt-4 w-full sm:w-auto justify-center">
              LEARN MORE
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Content - Image Card */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-4 sm:p-8 aspect-square flex items-center justify-center">
                {/* Dashboard mockup */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg w-full max-w-sm hover:scale-105 transition-transform duration-500">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs sm:text-sm font-semibold text-gray-600">Recent activity</div>
                      <div className="text-xl sm:text-2xl font-bold animate-pulse-slow">$8.0</div>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-medium truncate">New Project</div>
                          <div className="text-[10px] sm:text-xs text-gray-500 truncate">facebook.highspeedseo.com</div>
                        </div>
                        <div className="text-xs sm:text-sm font-semibold flex-shrink-0">$8.0</div>
                      </div>
                      
                      <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-medium truncate">Another Project</div>
                          <div className="text-[10px] sm:text-xs text-gray-500 truncate">instagram.com</div>
                        </div>
                        <div className="text-xs sm:text-sm font-semibold flex-shrink-0">$5.5</div>
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div className="text-xs sm:text-sm text-gray-600">Total value</div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">$150</div>
                      </div>
                      <div className="mt-2">
                        <div className="text-2xl sm:text-3xl font-bold">258</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">Active campaigns</div>
                      </div>
                    </div>
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

export default WhoWeWorkWith;

