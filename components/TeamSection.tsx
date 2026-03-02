'use client';

import React from 'react';

const TeamSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            We are team with enthusiasm for communication
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your business has a story to tell and we're here to make it heard with META. Our team has the skills to make your brand stand out.
          </p>
          <button className="btn-primary mt-8">
            VIEW MORE
            <span>→</span>
          </button>
        </div>

        {/* Team Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👥</div>
                <div className="text-xl font-bold text-gray-700">Team Collaboration</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💼</div>
                <div className="text-xl font-bold text-gray-700">Professional Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
