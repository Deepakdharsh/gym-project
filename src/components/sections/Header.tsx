"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { User, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Boardman");

  const locations = ["Boardman", "Erie", "Youngstown", "Cleveland"];

  return (
    <motion.header 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-[80px] bg-white z-[100] border-b border-black/5"
    >
      <div className="container h-full flex items-center justify-between px-[40px] max-w-[1440px] mx-auto">
        
        {/* Branding - Left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center group">
            <span className="text-[18px] font-black tracking-[-0.02em] uppercase leading-none">
              <span className="text-[#000000]">ASCEND</span>
              <span className="mx-2 text-[#E4480B]">/</span>
              <span className="text-[#E4480B]">CLIMBING GYM</span>
            </span>
          </Link>
        </div>

        {/* Navigation Menu - Center */}
        <nav className="hidden md:flex items-center gap-[40px]">
          <Link 
            href="/" 
            className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#000000] border-b-2 border-[#E4480B] transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/membership" 
            className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#000000] hover:text-[#E4480B] transition-colors"
          >
            Membership
          </Link>
          <Link 
            href="/rates" 
            className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#000000] hover:text-[#E4480B] transition-colors"
          >
            Rates
          </Link>
          <Link 
            href="/services" 
            className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#000000] hover:text-[#E4480B] transition-colors"
          >
            Services
          </Link>
        </nav>

        {/* Info & Log In - Right */}
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <button 
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex items-center gap-2 border-r border-black/10 pr-6 mr-0 cursor-pointer group"
            >
              <MapPin size={14} className="text-[#E4480B]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-black/50 group-hover:text-black transition-colors">Location:</span>
              <span className="text-[11px] font-black uppercase text-black flex items-center gap-1">
                {currentLocation}
                <ChevronDown size={12} className={`transition-transform duration-300 ${isLocationOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>

            <AnimatePresence>
              {isLocationOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white border border-black/10 shadow-xl py-2 z-[110]"
                >
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setCurrentLocation(loc);
                        setIsLocationOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-[12px] font-bold uppercase tracking-widest hover:bg-[#F9F9F9] hover:text-[#E4480B] transition-colors"
                    >
                      {loc}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="flex items-center gap-2 group cursor-pointer bg-transparent border-none p-0 outline-none"
          >
            <div className="w-[20px] h-[20px] rounded-full bg-[#E4480B] flex items-center justify-center">
              <User size={12} strokeWidth={3} className="text-white" />
            </div>
            <span className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#000000] group-hover:text-[#E4480B] transition-colors">
              Log In
            </span>
          </motion.button>
        </div>

      </div>
    </motion.header>
  );
};

export default Header;
