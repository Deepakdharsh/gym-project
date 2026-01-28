import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-[100px] pb-[60px] border-t border-black">
      <div className="container mx-auto px-[20px] md:px-[60px]">
        {/* Top Section: Branding and Primary Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-[80px] gap-y-12">
          <div className="max-w-[400px]">
            <h2 className="text-[24px] font-[800] leading-[1] tracking-tight text-primary mb-6">
              ASCEND / CLIMBING GYM
            </h2>
            <p className="text-[16px] leading-[1.6] text-foreground font-normal max-w-[320px]">
              Push your limits and reach new heights at our state-of-the-art climbing facility. 
              Join our community of adventurers today.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-10">
            {/* Navigation Column */}
            <div>
              <span className="block text-[12px] font-[600] uppercase tracking-widest text-[#757575] mb-6">
                Navigation
              </span>
              <ul className="flex flex-col gap-4">
                <li><a href="/" className="nav-link inline-block">Home</a></li>
                <li><a href="/membership" className="nav-link inline-block">Membership</a></li>
                <li><a href="/rates" className="nav-link inline-block">Rates</a></li>
                <li><a href="/services" className="nav-link inline-block">Services</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <span className="block text-[12px] font-[600] uppercase tracking-widest text-[#757575] mb-6">
                Connect
              </span>
              <ul className="flex flex-col gap-4">
                <li><a href="tel:+11234567890" className="text-[14px] font-[600] uppercase tracking-wider hover:text-primary transition-colors">123-456-7890</a></li>
                <li><a href="mailto:info@ascendheights.com" className="text-[14px] font-[600] uppercase tracking-wider hover:text-primary transition-colors">info@ascend.com</a></li>
                <li className="flex gap-4 mt-2">
                  <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                </li>
              </ul>
            </div>

            {/* Hours/Location Column */}
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-[12px] font-[600] uppercase tracking-widest text-[#757575] mb-6">
                Location
              </span>
              <p className="text-[14px] font-[600] uppercase leading-[1.5] tracking-tight">
                500 Terry Francine Street<br />
                San Francisco, CA 94158<br />
                United States
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Credits */}
        <div className="pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#757575] uppercase tracking-widest font-[600]">
            © {new Date().getFullYear()} ASCEND HEIGHTS CLIMBING GYM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[12px] text-[#757575] font-[600] uppercase tracking-widest hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] text-[#757575] font-[600] uppercase tracking-widest hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;