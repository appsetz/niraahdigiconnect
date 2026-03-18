'use client';

import React, { useState } from 'react';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open for better visual impact

    const faqs = [
        { 
            question: 'How do I know which service is right for my business?', 
            answer: 'We understand your goals, audience, and current presence, then recommend the strategy that will deliver the best results for your growth stage.' 
        },
        { 
            question: 'Do you offer customized marketing packages?', 
            answer: 'Yes. Every business is different, so we create tailored plans instead of one-size-fits-all packages.' 
        },
        { 
            question: 'How soon can I expect results?', 
            answer: 'Paid campaigns can generate leads quickly, while SEO and content strategies build stronger long-term growth over time.' 
        },
        { 
            question: 'Will I receive performance reports?', 
            answer: 'Absolutely. We provide clear reports showing progress, results, and key metrics so you always know what\'s working.' 
        },
        { 
            question: 'Do you handle both design and marketing?', 
            answer: 'Yes. From branding and websites to campaigns and media production, we provide end-to-end support for your business growth.' 
        },
        { 
            question: 'How long does it take to build a website?', 
            answer: 'Most business websites are completed within a few weeks, depending on features and content readiness.' 
        },
        { 
            question: 'Will my website be mobile-friendly and SEO-ready?', 
            answer: 'Yes. All our websites are optimized for performance, responsiveness, and visibility on platforms like Google.' 
        },
    ];

    return (
        <section 
            id="faq" 
            className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left side: Heading & Description */}
                    <div className="lg:w-1/3 flex flex-col justify-start">
                        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#9ca3af' }}>
                            SUPPORT & INFO
                        </p>
                        <h2 className="font-serif font-bold mb-8 leading-tight text-black" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                            Common
                            <br />
                            <span style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Questions
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-sm">
                            Everything you need to know about our process, pricing, and how we help your brand grow.
                        </p>
                        
                        <div className="hidden lg:block p-8 rounded-[2rem] bg-gray-50 border border-gray-100 italic text-gray-500">
                             "We believe in total transparency. If your question isn't here, just reach out and we'll get you an answer within 24 hours."
                        </div>
                    </div>

                    {/* Right side: The Leaf-Style Stacked Cards FAQ */}
                    <div className="lg:w-2/3 space-y-6">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            
                            // Alternate colors for variety similar to the reference image
                            const colors = [
                                { main: '#ecfdf5', back1: '#f0fdf4', back2: '#dcfce7', label: 'Strategy' },
                                { main: '#fef2f2', back1: '#fff1f2', back2: '#fee2e2', label: 'Service' },
                                { main: '#f5f3ff', back1: '#ede9fe', back2: '#ddd6fe', label: 'Process' },
                                { main: '#f0f9ff', back1: '#e0f2fe', back2: '#bae6fd', label: 'Results' },
                                { main: '#fffbeb', back1: '#fef3c7', back2: '#fde68a', label: 'Support' }
                            ];
                            const colorSet = colors[index % colors.length];

                            return (
                                <div key={index} className="relative group perspective-[1000px]">
                                    {/* Background Stacked Layers */}
                                    <div 
                                        className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl md:rounded-[2.5rem] rounded-tr-[5rem] md:rounded-tr-[8rem] z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"
                                        style={{ backgroundColor: colorSet.back2, opacity: 0.5 }}
                                    />
                                    <div 
                                        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl md:rounded-[2.5rem] rounded-tr-[5rem] md:rounded-tr-[8rem] z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
                                        style={{ backgroundColor: colorSet.back1 }}
                                    />

                                    {/* Main Card */}
                                    <div 
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className={cn(
                                            "relative z-10 p-8 md:p-12 cursor-pointer transition-all duration-500",
                                            "rounded-2xl md:rounded-[2.5rem] rounded-tr-[5rem] md:rounded-tr-[8rem] border border-white/50 shadow-lg",
                                            isOpen ? "scale-[1.01]" : "hover:scale-[1.01]"
                                        )}
                                        style={{ backgroundColor: colorSet.main }}
                                    >
                                        <div className="flex justify-between items-start gap-6">
                                            <div className="flex-1">
                                                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 block" style={{ color: '#10b981' }}>
                                                    FAQ {index + 1} // {colorSet.label}
                                                </span>
                                                <h3 className="font-serif font-bold text-xl md:text-2xl lg:text-3xl text-black leading-tight">
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            
                                            <div 
                                                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 border border-black/5 shrink-0"
                                                style={{ 
                                                    backgroundColor: isOpen ? '#000000' : 'transparent',
                                                    color: isOpen ? '#ffffff' : '#000000'
                                                }}
                                            >
                                                <Plus size={24} className={cn("transition-transform duration-500", isOpen && "rotate-45")} />
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: "auto", opacity: 1, marginTop: 32 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed border-t border-black/5 pt-8">
                                                        "{faq.answer}"
                                                    </p>
                                                    
                                                    <div className="mt-8 flex flex-wrap items-center gap-4">
                                                        <button 
                                                            className="px-6 py-2.5 rounded-full border-2 border-black text-sm font-bold hover:bg-black hover:text-white transition-all flex items-center gap-2"
                                                        >
                                                            Get Started <ChevronRight size={16} />
                                                        </button>
                                                        <span className="text-xs font-medium text-gray-400">
                                                            Was this helpful?
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
