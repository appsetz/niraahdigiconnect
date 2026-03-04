'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { question: 'How do I know which service is right for my business?', answer: 'We understand your goals, audience, and current presence, then recommend the strategy that will deliver the best results for your growth stage.' },
        { question: 'Do you offer customized marketing packages?', answer: 'Yes. Every business is different, so we create tailored plans instead of one-size-fits-all packages.' },
        { question: 'How soon can I expect results?', answer: 'Paid campaigns can generate leads quickly, while SEO and content strategies build stronger long-term growth over time.' },
        { question: 'Will I receive performance reports?', answer: 'Absolutely. We provide clear reports showing progress, results, and key metrics so you always know what\'s working.' },
        { question: 'Do you handle both design and marketing?', answer: 'Yes. From branding and websites to campaigns and media production, we provide end-to-end support for your business growth.' },
        { question: 'How long does it take to build a website?', answer: 'Most business websites are completed within a few weeks, depending on features and content readiness.' },
        { question: 'Will my website be mobile-friendly and SEO-ready?', answer: 'Yes. All our websites are optimized for performance, responsiveness, and visibility on platforms like Google.' },
        { question: 'Do you also manage ads and social media campaigns?', answer: 'Yes. We plan, create, and optimize campaigns across platforms under the Meta ecosystem and beyond.' },
        { question: 'Can I update my website or content later myself?', answer: 'Yes. We build user-friendly sites on platforms like WordPress so you can easily manage updates.' },
        { question: 'How do we get started?', answer: 'Simply contact us for a consultation, and we\'ll guide you through the next steps based on your business goals.' },
    ];

    return (
        <section
            id="faq"
            className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #050f08 0%, #071a0d 100%)' }}
        >
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }}
            />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                    {/* Left — Heading */}
                    <div className="flex flex-col justify-start">
                        <span className="badge-green inline-block mb-6 w-fit">FAQS</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#f0fdf4' }}>
                            All Questions
                            <span
                                className="block mt-2"
                                style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                            >
                                Answered
                            </span>
                        </h2>
                        <p className="mt-6 text-lg max-w-md leading-relaxed" style={{ color: '#bbf7d0' }}>
                            Find answers to everything you need to know about our services and how we can help your business grow.
                        </p>
                    </div>

                    {/* Right — FAQ Items */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden transition-all duration-300"
                                style={{
                                    background: openIndex === index ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.04)',
                                    backdropFilter: 'blur(12px)',
                                    border: openIndex === index ? '1px solid rgba(74,222,128,0.4)' : '1px solid rgba(34,197,94,0.15)',
                                }}
                            >
                                <button
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-base sm:text-lg transition-colors"
                                    style={{ color: '#f0fdf4' }}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="pr-4">{faq.question}</span>
                                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                        <ChevronDown
                                            size={20}
                                            style={{
                                                color: openIndex === index ? '#4ade80' : '#86efac',
                                                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease, color 0.3s ease',
                                            }}
                                        />
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div
                                        className="px-5 sm:px-6 pb-5 sm:pb-6 animate-fadeInDown"
                                        style={{
                                            color: '#bbf7d0',
                                            borderTop: '1px solid rgba(34,197,94,0.15)',
                                            paddingTop: '12px',
                                        }}
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
