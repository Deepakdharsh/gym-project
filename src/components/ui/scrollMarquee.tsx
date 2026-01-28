"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';

interface ScrollingMarqueeProps {
  text: string[];
  speed?: number;
  backgroundColor?: string;
  textColor?: string;
  outline?: boolean;
}

const ScrollingMarquee: React.FC<ScrollingMarqueeProps> = ({ 
  text, 
  speed = 100, 
  backgroundColor = "bg-black", 
  textColor = "text-white",
  outline = false
}) => {
  return (
    <div className={`w-full py-6 md:py-10 ${backgroundColor} overflow-hidden border-y border-black/10`}>
      <Marquee speed={speed} gradient={false}>
        {text.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className={`text-[clamp(40px,8vw,100px)] font-black uppercase tracking-tighter px-10 ${outline ? 'text-transparent stroke-white stroke-2' : textColor}`}
                  style={outline ? { WebkitTextStroke: '1px rgba(255,255,255,0.3)' } : {}}>
              {item}
            </span>
            <div className="w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#E4480B] mx-4" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingMarquee;