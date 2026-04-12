"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow-md border-b-2 border-[#E4480B] z-50 flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="text-xl font-black tracking-wide">
          FITNESS STUDIO<span className="text-[#E4480B]">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-bold uppercase">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact-us" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group ${
                isActive(item.href)
                  ? "text-[#E4480B]"
                  : "hover:text-[#E4480B]"
              }`}
            >
              {item.label}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#E4480B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Join Button Desktop */}
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}?text=Hello!%20I'm%20interested%20in%20joining%20FITNESS%20STUDIO%20Koorachundu.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#E4480B] text-white font-bold shadow hover:scale-105 transition-transform duration-300"
          >
            Join Now
          </a>
        </div>

        {/* Hamburger / Cancel Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Top Line */}
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>

          {/* Middle Line */}
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          {/* Bottom Line */}
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </nav>

      {/* MOBILE MENU (Under Navbar) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white flex flex-col items-center pt-16 gap-8 text-xl font-bold uppercase md:hidden z-40"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact-us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                // className={`relative group ${
                //   isActive(item.href)
                //     ? "text-[#E4480B]"
                //     : "hover:text-[#E4480B]"
                // }`}
                className={`relative group px-8 py-3 h-[50px] w-[80%] text-center transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-[#E4480B]/10 text-[#E4480B]"
                  : "bg-gray-100 hover:bg-[#E4480B]/10 hover:text-[#E4480B]"
              }`}
              >
                {item.label}
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#E4480B] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Join Button Mobile */}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}?text=Hello!%20I'm%20interested%20in%20joining%20FITNESS%20STUDIO%20Koorachundu.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-[#E4480B] text-white text-base font-bold shadow hover:scale-105 transition-transform duration-300"
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}