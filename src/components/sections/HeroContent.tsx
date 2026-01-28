"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ children, className }: { children: string, className?: string }) => {
  const words = children.split(" ");
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.33, 1, 0.68, 1],
              delay: 0.4 + (i * 0.1)
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const HeroContent = () => {
  return (
    <section className="w-full bg-white">
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full border-t border-black/10 mx-0 origin-left"
      ></motion.div>

      <div className="container mx-auto px-10 pt-12 pb-32">
        <div className="grid grid-cols-12 items-start gap-4">
          
          {/* Main Headline Column */}
          <div className="col-span-12 lg:col-span-8">
            <h1 className="text-[#000000] font-[900] leading-[0.85] tracking-[-0.05em] uppercase m-0 p-0 text-[clamp(60px,10vw,140px)]">
              <SplitText>ASCEND HEIGHTS</SplitText>
            </h1>
            <h1 className="text-[#E4480B] font-[900] leading-[0.85] tracking-[-0.05em] uppercase m-0 p-0 text-[clamp(60px,10vw,140px)]">
              <SplitText>CLIMBING GYM</SplitText>
            </h1>
          </div>

          {/* Right Action Column */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end justify-between self-stretch pt-4 lg:pt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-[#000000] font-black text-[14px] uppercase tracking-[0.3em] mb-12 lg:mb-0"
            >
              BODY / CLIMB / ADVENTURE
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="mt-auto"
            >
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#000000" }}
                whileTap={{ scale: 0.95 }}
                href="/membership"
                className="inline-flex items-center justify-center bg-[#E4480B] text-white px-12 py-5 font-black uppercase tracking-widest text-[12px] transition-all duration-300 cursor-pointer"
              >
                JOIN THE COMMUNITY
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroContent;
