"use client";

import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24 border-y border-black/10">
      <div className="container mx-auto px-6 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6 md:mb-8">
            <span className="text-[#E4480B] text-[40px] md:text-[48px] lg:text-[64px] leading-none">"</span>
          </div>

          <h2 className="text-[24px] md:text-[32px] lg:text-[42px] font-[900] leading-[1.2] text-[#000000] uppercase tracking-tight mb-6 md:mb-8">
            Your body can stand almost anything. It's your mind that you have to convince.
          </h2>

          <div className="w-12 md:w-16 h-1 bg-[#E4480B] mx-auto mb-4 md:mb-6"></div>

          <p className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-[#666666]">
            Start Your Journey Today
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;