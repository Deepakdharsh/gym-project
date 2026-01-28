"use client";

import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

/**
 * Footer Component
 * 
 * Clones the footer section including:
 * - Contact information
 * - Gym location
 * - Social media links
 * - Newsletter subscription form
 * 
 * Styles are based on the precision requirements:
 * - Background: #F9F9F9
 * - Border/Divider: #8C6A48 (1px solid)
 * - Primary Accent: #D93E08 (Orange)
 * - Typography: Helvetica Neue / Inter (bold, uppercase for headings)
 */
const Footer = () => {
  return (
    <footer className="w-full bg-[#f9f9f9] border-t border-[#8c6a48] pt-20 pb-10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Logo and Brand Section */}
          <div className="md:col-span-3">
            <div className="flex flex-col gap-4">
              <span className="brand-logo text-[#d93e08] font-bold text-[18px] tracking-[0.05em] uppercase">
                ASCEND /<br />CLIMBING GYM
              </span>
              <p className="text-[14px] leading-relaxed text-black/70 mt-4 max-w-[200px]">
                Elevating your movement, one hold at a time. Join the community.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3">
            <h4 className="text-[16px] font-bold uppercase tracking-[0.05em] mb-6 text-black">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-[14px]">
              <p className="text-black">123 Ascent Way, Peak District</p>
              <p className="text-black">Boulder, CO 80301</p>
              <a href="tel:1234567890" className="hover:text-[#d93e08] transition-colors">
                (123) 456-7890
              </a>
              <a href="mailto:info@ascendgym.com" className="hover:text-[#d93e08] transition-colors">
                info@ascendgym.com
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="md:col-span-2">
            <h4 className="text-[16px] font-bold uppercase tracking-[0.05em] mb-6 text-black">
              Hours
            </h4>
            <div className="flex flex-col gap-2 text-[14px]">
              <div className="flex justify-between">
                <span>Mon-Fri</span>
                <span>6am - 10pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sat-Sun</span>
                <span>8am - 8pm</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-4">
            <h4 className="text-[16px] font-bold uppercase tracking-[0.05em] mb-6 text-black">
              Stay in the Loop
            </h4>
            <form 
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="text-[13px] uppercase font-semibold text-black/60">
                Subscribe to our newsletter
              </label>
              <div className="flex border-b border-[#8c6a48] pb-2">
                <input 
                  type="email" 
                  id="newsletter-email"
                  placeholder="Email Address" 
                  className="bg-transparent border-none outline-none flex-grow text-[14px] py-1 placeholder:text-black/40"
                  required
                />
                <button 
                  type="submit" 
                  className="text-[#d93e08] font-bold text-[14px] uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Social and Copyright */}
        <div className="border-t border-[#8c6a48] pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6">
            <a href="#" className="text-black hover:text-[#d93e08] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-black hover:text-[#d93e08] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-black hover:text-[#d93e08] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-black hover:text-[#d93e08] transition-colors">
              <Youtube size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[12px] uppercase tracking-wider font-semibold text-black/60">
            <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <span>© 2024 ASCEND CLIMBING GYM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;