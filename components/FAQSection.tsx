'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How do I know which service is right for my business?",
            answer: "We understand your goals, audience, and current presence, then recommend the strategy that will deliver the best results for your growth stage."
        },
        {
            question: "Do you offer customized marketing packages?",
            answer: "Yes. Every business is different, so we create tailored plans instead of one-size-fits-all packages."
        },
        {
            question: "How soon can I expect results?",
            answer: "Paid campaigns can generate leads quickly, while SEO and content strategies build stronger long-term growth over time."
        },
        {
            question: "Will I receive performance reports?",
            answer: "Absolutely. We provide clear reports showing progress, results, and key metrics so you always know what’s working."
        },
        {
            question: "Do you handle both design and marketing?",
            answer: "Yes. From branding and websites to campaigns and media production, we provide end-to-end support for your business growth."
        },
        {
            question: "How long does it take to build a website?",
            answer: "Most business websites are completed within a few weeks, depending on features and content readiness."
        },
        {
            question: "Will my website be mobile-friendly and SEO-ready?",
            answer: "Yes. All our websites are optimized for performance, responsiveness, and visibility on platforms like Google."
        },
        {
            question: "Do you also manage ads and social media campaigns?",
            answer: "Yes. We plan, create, and optimize campaigns across platforms under the Meta ecosystem and beyond."
        },
        {
            question: "Can I update my website or content later myself?",
            answer: "Yes. We build user-friendly sites on platforms like WordPress so you can easily manage updates."
        },
        {
            question: "How do we get started?",
            answer: "Simply contact us for a consultation, and we’ll guide you through the next steps based on your business goals."
        }
    ];

    return (
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                    {/* Left Side - Heading */}
                    <div className="flex flex-col justify-start">
                        <span className="badge-yellow inline-block mb-6 w-fit">FAQS</span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            All Questions
                            <span className="block text-blue-600 mt-2">Answered</span>
                        </h2>
                        <p className="text-gray-600 mt-6 text-lg max-w-md leading-relaxed">
                            Find answers to everything you need to know about our services and how we can help your business grow.
                        </p>
                    </div>

                    {/* Right Side - FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
                            >
                                <button
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-base sm:text-lg text-gray-900 hover:bg-blue-50/50 transition-colors"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="pr-4">{faq.question}</span>
                                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                        {openIndex === index ? (
                                            <ChevronUp size={20} className="text-blue-600" />
                                        ) : (
                                            <ChevronDown size={20} className="text-gray-400" />
                                        )}
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 border-t border-gray-100 bg-blue-50/30 animate-fadeInDown">
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
