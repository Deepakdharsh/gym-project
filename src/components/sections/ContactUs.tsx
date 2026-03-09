"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

interface ContactInfo {
    icon: React.ReactNode;
    title: string;
    detail: string;
    subDetail?: string;
    isWhatsApp?: boolean;
    link?: string;
}

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const contactInfo: ContactInfo[] = [
        {
            icon: <Phone size={24} className="text-[#E4480B]" />,
            title: "Phone",
            detail: "+91 90741 98396",
            subDetail: "Mon-Sat 6am-10pm",
            link: "tel:+919074198396"
        },
        {
            icon: <MessageCircle size={24} className="text-[#E4480B]" />,
            title: "WhatsApp",
            detail: "+91 90741 98396",
            subDetail: "Chat with us instantly",
            // isWhatsApp: true,
            link: "https://wa.me/919074198396?text=Hello!%20I'm%20interested%20in%20joining%20FITNESS%20STUDIO%20Koorachundu."
        },
        {
            icon: <MapPin size={24} className="text-[#E4480B]" />,
            title: "Location",
            detail: "Koorachundu, Kerala 673527",
            subDetail: "FITNESS STUDIO"
        },
        {
            icon: <Clock size={24} className="text-[#E4480B]" />,
            title: "Hours",
            detail: "Mon-Sat: 6am - 10am and 5pm - 10pm"
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="contact" className="bg-white py-12 sm:py-16 md:py-24 lg:py-[100px] overflow-hidden">
            <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 md:px-[40px]">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-10 sm:mb-12 md:mb-16 lg:mb-24"
                >
                    <span className="label-tag">Get In Touch</span>
                    <h2 className="text-black text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold uppercase tracking-tight leading-[0.9]">
                        Contact Us
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                        className="w-full h-px bg-black mt-4 sm:mt-6 md:mt-8 origin-left"
                    ></motion.div>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20"
                >
                    {contactInfo.map((info, index) => {
                        const CardContent = (
                            <>
                                <div className="mb-3 sm:mb-4">{info.icon}</div>
                                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-black/50 mb-2">
                                    {info.title}
                                </h3>
                                <p className="text-sm sm:text-base font-bold text-black mb-1">{info.detail}</p>
                                {info.subDetail && (
                                    <p className="text-xs text-black/60">{info.subDetail}</p>
                                )}
                            </>
                        );

                        return info.link ? (
                            <motion.a
                                key={index}
                                href={info.link}
                                target={info.isWhatsApp ? "_blank" : undefined}
                                rel={info.isWhatsApp ? "noopener noreferrer" : undefined}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`p-6 border-2  transition-all duration-300 hover:shadow-xl cursor-pointer ${info.isWhatsApp
                                    ? 'border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/5'
                                    : 'border-black/10 hover:border-[#E4480B]'
                                    }`}
                            >
                                {CardContent}
                            </motion.a>
                        ) : (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="p-6 border-2 border-black/10 transition-all duration-300 hover:shadow-xl hover:border-[#E4480B]"
                            >
                                {CardContent}
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Contact Form */}
                {false && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="bg-[#F9F9F9] p-8 md:p-12  border-2 border-black/5"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Send us a message</h3>
                        <p className="text-black/60 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-black/70 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border-2 border-black/10  focus:border-[#E4480B] focus:outline-none transition-colors text-black placeholder-black/40"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-black/70 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border-2 border-black/10  focus:border-[#E4480B] focus:outline-none transition-colors text-black placeholder-black/40"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-widest text-black/70 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border-2 border-black/10  focus:border-[#E4480B] focus:outline-none transition-colors text-black placeholder-black/40"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-widest text-black/70 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border-2 border-black/10  focus:border-[#E4480B] focus:outline-none transition-colors text-black"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="membership">Membership Inquiry</option>
                                        <option value="general">General Question</option>
                                        <option value="classes">Classes & Programs</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-black/70 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border-2 border-black/10  focus:border-[#E4480B] focus:outline-none transition-colors text-black placeholder-black/40 resize-none"
                                    placeholder="Tell us how we can help you..."
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto px-12 py-4 bg-[#E4480B] text-white font-bold uppercase tracking-widest  hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                            >
                                <Send size={18} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                )}

                {/* Map Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mt-20"
                >
                    <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Find Us</h3>
                        <p className="text-black/60">Visit our location in Koorachundu, Kerala</p>
                    </div>

                    <div className="relative w-full h-[400px] md:h-[500px]  overflow-hidden border-2 border-black/10 hover:border-[#E4480B] transition-all duration-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.0842827385744!2d75.8413626!3d11.5385625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6650001320b4d%3A0x9f2a7d5bc6d5fb41!2sFITNESS%20STUDIO%20Koorachundu!5e0!3m2!1sen!2sin!4v1738138675000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Fitness Studio Location Map"
                        />
                    </div>

                    {/* Location Details Below Map */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-[#F9F9F9] ">
                        <div>
                            <h4 className="text-lg font-bold uppercase mb-4 flex items-center gap-2">
                                <MapPin size={20} className="text-[#E4480B]" />
                                Main Location
                            </h4>
                            <p className="text-black/80 mb-2 font-semibold">FITNESS STUDIO Koorachundu</p>
                            <p className="text-black/80 mb-2">Balussery Rd, Koorachunde</p>
                            <p className="text-black/80 mb-4">Kanthalad, Kerala 673527</p>
                            <a
                                href="https://www.google.com/maps/place/FITNESS+STUDIO+Koorachundu/@11.5385625,75.8413626,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba6650001320b4d:0x9f2a7d5bc6d5fb41!8m2!3d11.5385625!4d75.8439375!16s%2Fg%2F11xmm2n9z_?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#E4480B] font-bold uppercase text-sm hover:underline"
                            >
                                Get Directions →
                            </a>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold uppercase mb-4">Contact Information</h4>
                            <div className="space-y-3 text-black/80">
                                <p className="flex items-start gap-2">
                                    <Phone size={16} className="text-[#E4480B] mt-1" />
                                    <span>+91 90741 98396</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <Mail size={16} className="text-[#E4480B] mt-1" />
                                    <span>info@fitnessstudio.com</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <Clock size={16} className="text-[#E4480B] mt-1" />
                                    <span>Mon-Sat: 6am - 10am and 5pm - 10pm</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
