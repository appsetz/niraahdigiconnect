'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';

const ResultsSection = () => {
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
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-yellow inline-block animate-scaleIn">RESULTS & INSIGHTS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 mb-4 px-4">
            Look at the insights we brought for our clients
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We show real performance, not inflated promises.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className={`service-card group transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-4 overflow-hidden rounded-xl">
              <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="text-center">
                  <TrendingUp className="mx-auto mb-3 text-green-600" size={32} />
                  <div className="text-4xl sm:text-5xl font-bold text-green-600 animate-pulse-slow">↑ 250%</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-2">Visibility Growth</div>
                </div>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">Increased Visibility</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Driven by insight-based content planning
            </p>
          </div>

          {/* Card 2 */}
          <div className={`service-card group transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-4 overflow-hidden rounded-xl">
              <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="text-center">
                  <Target className="mx-auto mb-3 text-orange-600" size={32} />
                  <div className="text-4xl sm:text-5xl font-bold text-orange-600 animate-pulse-slow">-40%</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-2">Cost Per Lead</div>
                </div>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">Optimized Ad Spend</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              With measurable lead generation
            </p>
          </div>

          {/* Card 3 */}
          <div className={`service-card group transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-4 overflow-hidden rounded-xl">
              <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="text-center">
                  <Users className="mx-auto mb-3 text-purple-600" size={32} />
                  <div className="text-4xl sm:text-5xl font-bold text-purple-600 animate-pulse-slow">95%</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-2">Success Rate</div>
                </div>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors duration-300">Real Implementation</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Real outcomes from workshop participants
            </p>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { value: '5.6M+', label: 'Total Reach' },
            { value: '12K+', label: 'Leads Generated' },
            { value: '80+', label: 'Active Campaigns' },
            { value: '4.8', label: 'Client Rating' }
          ].map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
              style={{ transitionDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-yellow-600 group-hover:scale-110 transform transition-all duration-300">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-2">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

