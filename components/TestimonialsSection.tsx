'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      text: "This is my first time working with a marketing company and I had a fantastic experience. But I can say Niraah Digi Connect is the best. Todal! Highly recommend!",
      author: "Paul Soborin",
      role: "CEO at Company",
      rating: 5
    },
    {
      text: "This is my first time working with a marketing company and I had a fantastic experience. But I can say Niraah Digi Connect is the best. Todal! Highly recommend!",
      author: "Ravi Mehta",
      role: "Founder at Startup",
      rating: 5
    },
    {
      text: "Outstanding results! The team at Niraah helped us scale our business beyond our expectations. Their Meta Ads strategy was game-changing for our brand.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-yellow inline-block animate-scaleIn">OUR TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6">
            What our clients say
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex gap-4 sm:gap-6 overflow-hidden">
            {/* Current testimonial */}
            <div className={`min-w-full md:min-w-[calc(50%-12px)] transition-all duration-700 ease-out ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2">
                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 animate-pulse-slow">
                    👤
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex gap-2 mt-6">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setCurrentIndex(idx);
                          setTimeout(() => setIsAnimating(false), 500);
                        }
                      }}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        idx === currentIndex ? 'bg-yellow-400 w-8' : 'bg-gray-300 w-2 hover:w-4 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Second card visible on desktop */}
            <div className="hidden md:block min-w-[calc(50%-12px)]">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full opacity-70 hover:opacity-100 transform hover:-translate-y-2">
                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    👤
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg">
                      {testimonials[(currentIndex + 1) % testimonials.length].author}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonials[(currentIndex + 1) % testimonials.length].role}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonials[(currentIndex + 1) % testimonials.length].rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-blue-400 text-blue-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  "{testimonials[(currentIndex + 1) % testimonials.length].text}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft size={24} className="group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronRight size={24} className="group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

