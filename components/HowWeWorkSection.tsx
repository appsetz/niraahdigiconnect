'use client';

import React from 'react';

const HowWeWorkSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Brand & Goal Analysis',
      description: 'We start by understanding your brand, target audience, and business objectives to create a tailored strategy.',
      color: 'bg-blue-100'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Develop comprehensive marketing strategies based on data insights and industry best practices.',
      color: 'bg-yellow-100'
    },
    {
      number: '03',
      title: 'Execution & Optimization',
      description: 'Implement campaigns with continuous monitoring and optimization for maximum performance.',
      color: 'bg-green-100'
    },
    {
      number: '04',
      title: 'Tracking, Insights & Scaling',
      description: 'Analyze results, provide detailed insights, and scale successful campaigns for sustained growth.',
      color: 'bg-purple-100'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-yellow">OUR PROCESS</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-6">
            How we work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="service-card">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl font-bold text-gray-700">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;

