'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, ArrowLeft, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setSubmitted(true);
        setIsSubmitting(false);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4">
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
                            className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300"
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
                        <span className="badge-yellow inline-block animate-scaleIn">GET IN TOUCH</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6">
                            Let's Start a <span className="text-yellow-500">Conversation</span>
                        </h1>
                        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                            Ready to scale your brand? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Contact Information */}
                        <div className={`lg:col-span-2 space-y-8 order-2 lg:order-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            {/* Contact Cards */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <a href="mailto:hello@niraah.com" className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-300">
                                            <Mail size={22} className="text-yellow-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email us</p>
                                            <p className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">hello@niraah.com</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                                            <Phone size={22} className="text-green-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Call us</p>
                                            <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">+91 XXX XXX XXXX</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                                            <MapPin size={22} className="text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Location</p>
                                            <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">India</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500 transition-colors duration-300">
                                            <Clock size={22} className="text-purple-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Business Hours</p>
                                            <p className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Mon - Sat: 10AM - 7PM</p>
                                        </div>
                                    </div>

                                    <a
                                        href="https://wa.me/917603839337?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">WhatsApp</p>
                                            <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">+91 7603 839 337</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Response Card */}
                            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-6 sm:p-8 text-white shadow-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageCircle size={28} />
                                    <h3 className="text-xl font-bold">Quick Response</h3>
                                </div>
                                <p className="opacity-90">
                                    We usually respond within 24 hours. For urgent inquiries, feel free to call us directly.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={`lg:col-span-3 order-1 lg:order-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn">
                                            <Send size={36} className="text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                                        <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
                                            }}
                                            className="btn-secondary"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="John Doe"
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="john@example.com"
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+91 XXXXX XXXXX"
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        placeholder="Your Company"
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 bg-white"
                                                >
                                                    <option value="">Select a service</option>
                                                    <option value="meta-ads">Meta Ads (Facebook & Instagram)</option>
                                                    <option value="social-media">Social Media Management</option>
                                                    <option value="performance-marketing">Performance Marketing</option>
                                                    <option value="brand-strategy">Brand Strategy</option>
                                                    <option value="content-creation">Content Creation</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    placeholder="Tell us about your project or goals..."
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 resize-none"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="btn-primary w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="animate-spin">⏳</span>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send size={18} />
                                                        Send Message
                                                    </>
                                                )}
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
            <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-t">
                <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
                    <p>© 2026 Niraah Digi Connect. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
};

export default ContactPage;
