"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export interface Testimonial {
    text: string;
    highlight?: string;
    image: string;
    name: string;
    role: string;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
    speed?: number;
    direction?: "left" | "right";
    cardHeight?: number;
    className?: string;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
    testimonials,
    speed = 20,
    direction = "left",
    cardHeight = 200,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setCarouselWidth(containerRef.current.scrollWidth / 2);
        }
    }, [testimonials]);

    const loopTestimonials = [...testimonials, ...testimonials];

    return (
        <div className={`overflow-hidden w-full ${className}`} ref={containerRef}>
            <motion.div
                animate={{
                    x: direction === "left" ? [0, -carouselWidth] : [-carouselWidth, 0],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex gap-6"
            >
                {loopTestimonials.map(({ text, highlight, image, name, role }, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="my-3 rounded-3xl p-5 flex-shrink-0 w-[320px] flex flex-col justify-between"
                        style={{
                            height: cardHeight,
                            background: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            border: '1px solid rgba(34,197,94,0.2)',
                        }}
                    >
                        <p className="text-sm leading-relaxed text-justify break-words whitespace-normal overflow-hidden" style={{ color: '#bbf7d0' }}>
                            {highlight
                                ? text.split(highlight).map((part, idx, arr) => (
                                    <React.Fragment key={idx}>
                                        {part}
                                        {idx !== arr.length - 1 && (
                                            <span style={{ color: '#4ade80', fontWeight: 600 }}>
                                                {highlight}
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))
                                : text}
                        </p>

                        <div className="flex items-center gap-3 mt-3">
                            <div className="flex flex-col">
                                <div className="font-semibold leading-tight" style={{ color: '#f0fdf4' }}>{name}</div>
                                <div className="text-sm opacity-70" style={{ color: '#86efac' }}>{role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
