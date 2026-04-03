"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // WhatsApp phone number (remove spaces and special chars for the link)
    const phoneNumber = "919074198396"; // +91 90741 98396
    const message = encodeURIComponent("Hello! I'm interested in joining FITNESS STUDIO Koorachundu. Can you provide more information?");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    const quickMessages = [
        "Membership inquiry",
        "Visit schedule",
        "Personal training info",
    ];

    const handleQuickMessage = (msg: string) => {
        const customMessage = encodeURIComponent(`Hello! I'd like to know about: ${msg}`);
        window.open(`https://wa.me/${phoneNumber}?text=${customMessage}`, '_blank');
        setIsOpen(false);
    };

    return (
        <>
            {/* Main WhatsApp Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-[999]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.3, type: "spring" }}
            >
                {/* Quick Messages Popup */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full right-0 mb-4 bg-white  shadow-2xl border border-black/10 overflow-hidden w-[280px]"
                        >
                            {/* Header */}
                            <div className="bg-[#25D366] p-4 text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white  flex items-center justify-center">
                                            <MessageCircle size={20} className="text-[#25D366]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm">FITNESS STUDIO</h3>
                                            <p className="text-xs opacity-90">Typically replies instantly</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-white/80 hover:text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Quick Messages */}
                            <div className="p-4">
                                <p className="text-xs text-black/60 uppercase font-bold tracking-wider mb-3">Quick Messages</p>
                                <div className="space-y-2">
                                    {quickMessages.map((msg, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            onClick={() => handleQuickMessage(msg)}
                                            className="w-full text-left px-4 py-3 bg-[#F5F5F5] hover:bg-[#25D366]/10  transition-colors text-sm font-medium text-black/80 border border-transparent hover:border-[#25D366]"
                                        >
                                            {msg}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Custom Message Button */}
                                <motion.a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white  font-bold text-sm hover:bg-[#22c55e] transition-colors"
                                >
                                    <MessageCircle size={16} />
                                    Start Chat
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-[#22c55e] transition-colors relative group"
                    aria-label="WhatsApp Chat"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} strokeWidth={2.5} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="whatsapp"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MessageCircle size={28} strokeWidth={2.5} fill="currentColor" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Pulse Animation */}
                    {!isOpen && (
                        <>
                            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E4480B] rounded-full border-2 border-white"></span>
                        </>
                    )}
                </motion.button>

                {/* Tooltip */}
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2  text-sm font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    >
                        Chat with us on WhatsApp!
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-black"></div>
                    </motion.div>
                )}
            </motion.div>
        </>
    );
};

export default WhatsAppButton;
