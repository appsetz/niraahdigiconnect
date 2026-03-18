'use client';

import React from 'react';
import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

export default function TestimonialsSection() {
  const title = "What Our Clients Say";
  const description = "Real results from real clients who trusted us with their growth.";

  const testimonials = [
    { 
      text: 'After they optimized our Google My Business profile, we started appearing in local searches consistently. We now receive regular inquiry calls directly through Google.', 
      author: { name: 'Nanda Construction', handle: 'Construction Business', avatar: 'https://i.pravatar.cc/150?img=11' } 
    },
    { 
      text: 'They created a beautiful and elegant logo that perfectly represents our baking brand. It looks amazing on packaging and social media. Truly creative work!', 
      author: { name: 'Rimis Cakes', handle: 'Bakery Store', avatar: 'https://i.pravatar.cc/150?img=12' } 
    },
    { 
      text: 'Our social media engagement improved drastically. The content is trendy, creative, and attracts the right audience. We\'ve seen an increase in bookings through Instagram.', 
      author: { name: 'Curls n Spikes', handle: 'Beauty Salon', avatar: 'https://i.pravatar.cc/150?img=13' } 
    },
    { 
      text: 'Their Meta ad campaigns helped us generate quality leads for event bookings. We received consistent inquiries at a reasonable cost per lead.', 
      author: { name: 'Pixel Photography', handle: 'Photography Studio', avatar: 'https://i.pravatar.cc/150?img=14' } 
    },
    { 
      text: 'They developed a modern, responsive, and highly professional website. Since the launch, we\'ve received positive feedback and a steady flow of inquiries.', 
      author: { name: 'Vriddhi Psychological Services', handle: 'Healthcare Provider', avatar: 'https://i.pravatar.cc/150?img=15' } 
    },
    { 
      text: 'The logo for our logistics business reflects speed, trust, and reliability. The design process was smooth, and the result exceeded expectations.', 
      author: { name: 'Mav Infra Logistics', handle: 'Logistics Company', avatar: 'https://i.pravatar.cc/150?img=16' } 
    },
  ];

  return (
    <section className={cn(
      "bg-white text-black relative z-10 w-full overflow-hidden",
      "py-20 sm:py-32 px-0"
    )}>
      <div className="mx-auto flex w-full flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8 mb-8">
          <h2 className="font-serif font-bold text-center" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: '#000000', whiteSpace: 'pre-wrap' }}>
            What Our
            <br />
            <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Clients Say
            </span>
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-500 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
            {/* Exact Duplicate for seamless looping */}
            <div aria-hidden="true" className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`duplicate-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Fading left and right edges for smooth loop effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-white sm:block" />
        </div>
      </div>
    </section>
  )
}
