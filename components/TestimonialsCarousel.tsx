"use client";

import React from "react";

export interface Testimonial {
    text: string;
    highlight?: string;
    image: string;
    name: string;
    role: string;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
    className?: string;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
    testimonials,
    className,
}) => {
    return (
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${className || ""}`}>
            {testimonials.map(({ text, highlight, name, role }, index) => (
                <div
                    key={index}
                    className="group p-6 sm:p-8 transition-all duration-300 hover:scale-105"
                    style={{
                        border: '1px solid #e5e7eb',
                        borderRadius: '20px',
                        backgroundColor: '#ffffff',
                    }}
                >
                    {/* Quote mark */}
                    <div style={{ fontSize: '32px', color: '#10b981', marginBottom: '12px' }}>
                        "
                    </div>

                    {/* Testimonial text */}
                    <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#333333' }}>
                        {highlight
                            ? text.split(highlight).map((part, idx, arr) => (
                                <React.Fragment key={idx}>
                                    {part}
                                    {idx !== arr.length - 1 && (
                                        <span style={{ color: '#10b981', fontWeight: 600 }}>
                                            {highlight}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))
                            : text}
                    </p>

                    {/* Client info */}
                    <div className="border-t border-gray-200 pt-4">
                        <div className="font-serif font-bold text-sm" style={{ color: '#000000' }}>
                            {name}
                        </div>
                        <div className="text-xs" style={{ color: '#999999' }}>
                            {role}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
