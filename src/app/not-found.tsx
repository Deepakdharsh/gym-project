"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, Dumbbell, Phone, ArrowLeft } from 'lucide-react';

// Note: Metadata must be in a separate file for client components
// Create a metadata.ts file if needed for static generation

export default function NotFound() {
    const quickLinks = [
        {
            icon: <Home size={20} />,
            label: "Home",
            href: "/",
            description: "Back to homepage"
        },
        {
            icon: <Dumbbell size={20} />,
            label: "Services",
            href: "/services",
            description: "View our classes"
        },
        {
            icon: <Phone size={20} />,
            label: "Contact",
            href: "/contact",
            description: "Get in touch"
        }
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
            <div className="max-w-4xl w-full">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-8"
                >
                    <h1 className="text-[180px] md:text-[280px] font-black leading-none text-black/5 select-none">
                        404
                    </h1>
                    <div className="relative -mt-24 md:-mt-40">
                        <h2 className="text-[32px] md:text-[56px] font-black uppercase tracking-tight text-black">
                            Page Not Found
                        </h2>
                        <div className="w-24 h-1 bg-[#E4480B] mx-auto mt-6"></div>
                    </div>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <p className="text-lg md:text-xl text-black/70 uppercase tracking-wider font-semibold mb-4">
                        Looks like you've wandered off the workout plan
                    </p>
                    <p className="text-sm md:text-base text-black/50 max-w-xl mx-auto">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track!
                    </p>
                </motion.div>

                {/* Quick Links Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
                >
                    {quickLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-[280px]"
                        >
                            <Link
                                href={link.href}
                                className="h-full block p-6 border-2 border-black/10 hover:border-[#E4480B] transition-all duration-300 hover:shadow-xl group bg-white"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-black/5 group-hover:bg-[#E4480B] flex items-center justify-center mb-3 transition-colors">
                                        <div className="text-black group-hover:text-white transition-colors">
                                            {link.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-bold uppercase tracking-wider text-sm mb-1 text-black">
                                        {link.label}
                                    </h3>
                                    <p className="text-xs text-black/50">{link.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E4480B] text-white font-bold uppercase text-sm tracking-wider hover:opacity-90 transition-opacity"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black text-black font-bold uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-all"
                    >
                        <Phone size={18} />
                        Contact Us
                    </Link>
                </motion.div>

                {/* Gym Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 pt-8 border-t-2 border-black/5 text-center"
                >
                    <p className="text-sm uppercase tracking-widest text-black/30 font-bold mb-2">
                        FITNESS STUDIO Koorachundu
                    </p>
                    <p className="text-xs text-black/40">
                        Balussery Rd, Kanthalad, Kerala 673527
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
