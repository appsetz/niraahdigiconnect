'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, ArrowLeft, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => { setIsVisible(true); }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitted(true);
        setIsSubmitting(false);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '12px 16px',
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(34,197,94,0.25)',
        color: '#f0fdf4',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    };

    return (
        <main className="min-h-screen" style={{ background: 'linear-gradient(160deg, #020b05 0%, #050f08 50%, #071a0d 100%)' }}>
            {/* Header */}
            <header
                className="fixed top-0 left-0 right-0 z-50 py-4"
                style={{
                    background: 'rgba(2,11,5,0.85)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(34,197,94,0.15)',
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/images/Niraah logo with Text with out background.png"
                                alt="Niraah Digi Connect"
                                width={140}
                                height={48}
                                className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center gap-2 transition-colors duration-300"
                            style={{ color: '#bbf7d0' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#4ade80')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#bbf7d0')}
                        >
                            <ArrowLeft size={20} />
                            <span className="hidden sm:inline font-medium">Back to Home</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <span className="badge-green inline-block animate-scaleIn">GET IN TOUCH</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6" style={{ color: '#f0fdf4' }}>
                            Let's Start a{' '}
                            <span style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Conversation
                            </span>
                        </h1>
                        <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: '#bbf7d0' }}>
                            Ready to scale your brand? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Contact Information */}
                        <div className={`lg:col-span-2 space-y-6 order-2 lg:order-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            {/* Contact Cards */}
                            <div
                                className="rounded-3xl p-6 sm:p-8"
                                style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', border: '1px solid rgba(34,197,94,0.2)' }}
                            >
                                <h3 className="text-xl font-bold mb-6" style={{ color: '#f0fdf4' }}>Contact Information</h3>
                                <div className="space-y-5">
                                    {[
                                        { href: 'mailto:hello@niraah.com', icon: <Mail size={20} />, label: 'Email us', value: 'hello@niraah.com' },
                                        { href: undefined, icon: <Phone size={20} />, label: 'Call us', value: '+91 XXX XXX XXXX' },
                                        { href: undefined, icon: <MapPin size={20} />, label: 'Location', value: 'India' },
                                        { href: undefined, icon: <Clock size={20} />, label: 'Business Hours', value: 'Mon – Sat: 10AM – 7PM' },
                                    ].map((item, i) => {
                                        const content = (
                                            <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
                                                <div
                                                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                                    style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80' }}
                                                >
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs" style={{ color: '#86efac' }}>{item.label}</p>
                                                    <p className="font-semibold" style={{ color: '#f0fdf4' }}>{item.value}</p>
                                                </div>
                                            </div>
                                        );
                                        return item.href ? <a key={i} href={item.href}>{content}</a> : <div key={i}>{content}</div>;
                                    })}

                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me/917603839337?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300"
                                    >
                                        <div
                                            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80' }}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs" style={{ color: '#86efac' }}>WhatsApp</p>
                                            <p className="font-semibold" style={{ color: '#f0fdf4' }}>+91 7603 839 337</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Response Card */}
                            <div
                                className="rounded-3xl p-6 sm:p-8"
                                style={{ background: 'linear-gradient(135deg, #16a34a, #22c55e)', boxShadow: '0 10px 40px rgba(34,197,94,0.3)' }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageCircle size={28} className="text-white" />
                                    <h3 className="text-xl font-bold text-white">Quick Response</h3>
                                </div>
                                <p className="text-green-100">
                                    We usually respond within 24 hours. For urgent inquiries, feel free to call us directly.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={`lg:col-span-3 order-1 lg:order-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div
                                className="rounded-3xl p-6 sm:p-10"
                                style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', border: '1px solid rgba(34,197,94,0.2)' }}
                            >
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div
                                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn"
                                            style={{ background: 'rgba(34,197,94,0.2)', border: '2px solid rgba(34,197,94,0.5)' }}
                                        >
                                            <Send size={36} style={{ color: '#4ade80' }} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3" style={{ color: '#f0fdf4' }}>Message Sent!</h3>
                                        <p className="mb-6" style={{ color: '#bbf7d0' }}>Thank you for reaching out. We'll get back to you soon.</p>
                                        <button
                                            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                                            className="btn-secondary"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-2xl font-bold mb-6" style={{ color: '#f0fdf4' }}>Send us a Message</h3>
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                {[
                                                    { label: 'Full Name *', name: 'name', type: 'text', required: true, placeholder: 'John Doe' },
                                                    { label: 'Email Address *', name: 'email', type: 'email', required: true, placeholder: 'john@example.com' },
                                                    { label: 'Phone Number', name: 'phone', type: 'tel', required: false, placeholder: '+91 XXXXX XXXXX' },
                                                    { label: 'Company Name', name: 'company', type: 'text', required: false, placeholder: 'Your Company' },
                                                ].map((field) => (
                                                    <div key={field.name}>
                                                        <label className="block text-sm font-medium mb-2" style={{ color: '#86efac' }}>{field.label}</label>
                                                        <input
                                                            type={field.type}
                                                            name={field.name}
                                                            value={(formData as Record<string, string>)[field.name]}
                                                            onChange={handleChange}
                                                            required={field.required}
                                                            placeholder={field.placeholder}
                                                            style={inputStyle}
                                                            onFocus={(e) => (e.target.style.borderColor = 'rgba(74,222,128,0.6)')}
                                                            onBlur={(e) => (e.target.style.borderColor = 'rgba(34,197,94,0.25)')}
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-2" style={{ color: '#86efac' }}>Service Interested In</label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    style={{ ...inputStyle }}
                                                >
                                                    <option value="" style={{ background: '#050f08' }}>Select a service</option>
                                                    <option value="meta-ads" style={{ background: '#050f08' }}>Meta Ads (Facebook & Instagram)</option>
                                                    <option value="social-media" style={{ background: '#050f08' }}>Social Media Management</option>
                                                    <option value="performance-marketing" style={{ background: '#050f08' }}>Performance Marketing</option>
                                                    <option value="brand-strategy" style={{ background: '#050f08' }}>Brand Strategy</option>
                                                    <option value="content-creation" style={{ background: '#050f08' }}>Content Creation</option>
                                                    <option value="other" style={{ background: '#050f08' }}>Other</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-2" style={{ color: '#86efac' }}>Your Message *</label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    placeholder="Tell us about your project or goals..."
                                                    style={{ ...inputStyle, resize: 'none' }}
                                                    onFocus={(e) => (e.target.style.borderColor = 'rgba(74,222,128,0.6)')}
                                                    onBlur={(e) => (e.target.style.borderColor = 'rgba(34,197,94,0.25)')}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="btn-primary w-full sm:w-auto justify-center"
                                                style={{ opacity: isSubmitting ? 0.6 : 1 }}
                                            >
                                                {isSubmitting ? <><span className="animate-spin">⏳</span> Sending...</> : <><Send size={18} /> Send Message</>}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer
                className="py-8 px-4 sm:px-6 lg:px-8"
                style={{ borderTop: '1px solid rgba(34,197,94,0.1)', color: '#86efac' }}
            >
                <div className="max-w-7xl mx-auto text-center text-sm">
                    <p>© 2026 Niraah Digi Connect. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
};

export default ContactPage;
