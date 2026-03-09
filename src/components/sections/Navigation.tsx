"use client";

import React from "react";
import Link from "next/link";
import { UserCircle2 } from "lucide-react";

const Navigation = () => {
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT-US", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-black">
      <div className="container flex items-center justify-between h-[72px] px-[20px] md:px-[60px]">
        {/* Logo / Branding */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-[14px] font-[800] tracking-tighter text-[#d93e0b] leading-tight uppercase"
          >
            ASCEND / <br className="md:hidden" />
            <span className="md:ml-1">CLIMBING GYM</span>
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center justify-center flex-grow gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link text-[14px] font-semibold text-black hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Profile / Log In */}
        <div className="flex items-center">
          <Link
            href="/login"
            className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wide text-black hover:text-primary transition-colors duration-300"
          >
            <UserCircle2 className="w-6 h-6 text-[#d93e0b]" strokeWidth={1.5} />
            <span className="hidden sm:inline">Log In</span>
          </Link>

          {/* Mobile Menu Trigger Placeholder (if needed, but design focuses on desktop structure) */}
          <button className="ml-4 md:hidden p-2 text-black">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;