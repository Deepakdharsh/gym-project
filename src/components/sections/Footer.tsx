import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 sm:pt-16 md:pt-24 lg:pt-[100px] pb-8 sm:pb-10 md:pb-[60px] border-t border-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-[60px]">
        {/* Top Section: Branding and Primary Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 sm:mb-20 md:mb-[80px] gap-y-10 md:gap-y-12">
          <div className="max-w-[400px]">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[800] leading-[1] tracking-tight text-primary mb-4 sm:mb-6">
              FITNESS STUDIO / GYM
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-foreground font-normal max-w-[320px]">
              More than a gym — a community built on strength, discipline, and consistent progress toward your goals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8 sm:gap-y-10 w-full md:w-auto">
            {/* Navigation Column */}
            <div>
              <span className="block text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest text-[#757575] mb-4 sm:mb-6">
                Navigation
              </span>
              <ul className="flex flex-col gap-3 sm:gap-4">
                <li><a href="/" className="nav-link inline-block text-[13px] sm:text-[14px]">Home</a></li>
                <li><a href="/services" className="nav-link inline-block text-[13px] sm:text-[14px]">Services</a></li>
                <li><a href="/contact" className="nav-link inline-block text-[13px] sm:text-[14px]">Contact-Us</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <span className="block text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest text-[#757575] mb-4 sm:mb-6">
                Connect
              </span>
              <ul className="flex flex-col gap-3 sm:gap-4">
                <li><a href="tel:+919074198396" className="text-[13px] sm:text-[14px] font-[600] uppercase tracking-wider hover:text-primary transition-colors">+91 90741 98396</a></li>
                <li><a href="mailto:info@fitnessstudio.com" className="text-[13px] sm:text-[14px] font-[600] uppercase tracking-wider hover:text-primary transition-colors break-all">info@fitnessstudio.com</a></li>
                <li className="flex gap-3 sm:gap-4 mt-2">
                  <a href="#" className="hover:text-primary transition-colors"><Facebook size={18} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
                </li>
              </ul>
            </div>

            {/* Hours/Location Column */}
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-[11px] sm:text-[12px] font-[600] uppercase tracking-widest text-[#757575] mb-4 sm:mb-6">
                Location
              </span>
              <p className="text-[13px] sm:text-[14px] font-[600] uppercase leading-[1.5] tracking-tight">
                Balussery Rd,<br />
                Koorachunde,<br />
                Kerala
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Credits */}
        <div className="pt-6 sm:pt-8 md:pt-10 border-t border-black/10 flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] text-[#757575] uppercase tracking-widest font-[600] text-center">
            © {new Date().getFullYear()} FITNESS STUDIO / GYM. ALL RIGHTS RESERVED.
          </p>
          {/* <div className="flex gap-8">
            <a href="#" className="text-[12px] text-[#757575] font-[600] uppercase tracking-widest hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] text-[#757575] font-[600] uppercase tracking-widest hover:text-black transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;