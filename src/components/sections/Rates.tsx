"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  duration?: string;
  features: string[];
  ctaText: string;
}

const pricingData: PricingTier[] = [
  {
    title: "Day Pass",
    price: "$25",
    duration: "Per Day",
    features: [
      "Full access to bouldering and ropes",
      "Complimentary locker use",
      "Valid for the entire day",
      "Gear rental not included"
    ],
    ctaText: "Get Day Pass"
  },
  {
    title: "Monthly Membership",
    price: "$85",
    duration: "Per Month",
    features: [
      "Unlimited climbing access",
      "10% discount on gear shop",
      "2 guest passes per month",
      "Free access to yoga classes"
    ],
    ctaText: "Join Now"
  },
  {
    title: "Annual Membership",
    price: "$850",
    duration: "Per Year",
    features: [
      "All monthly benefits included",
      "2 months free",
      "Free gear rental for first month",
      "Priority workshop booking"
    ],
    ctaText: "Go Annual"
  }
];

const Rates: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="rates" className="bg-white py-[100px] md:py-[150px] overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-24"
        >
          <span className="label-tag">Pricing & Plans</span>
          <h2 className="text-black text-[32px] md:text-[48px] font-bold uppercase tracking-tight leading-[0.9]">
            Membership Rates
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
            className="w-full h-px bg-black mt-8 origin-left"
          ></motion.div>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16"
        >
          {pricingData.map((tier, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="flex flex-col h-full border-t border-black pt-8 md:pt-10 group"
            >
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 tracking-tight">
                {tier.title}
              </h3>
              
              <div className="flex items-baseline mb-8">
                <span className="text-5xl md:text-6xl font-extrabold tracking-tighter">
                  {tier.price}
                </span>
                {tier.duration && (
                  <span className="ml-2 text-sm font-semibold uppercase text-[#757575] tracking-widest">
                    {tier.duration}
                  </span>
                )}
              </div>

              <ul className="flex-grow space-y-4 mb-12">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-sm md:text-base leading-relaxed">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-[#E4480B] rounded-full flex-shrink-0"></span>
                    <span className="text-[#000000]">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {index === 1 ? (
                  /* Primary CTA for the middle/featured card */
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#" 
                    className="flex items-center justify-center bg-[#E4480B] text-white w-full text-center py-4 rounded-full font-bold uppercase tracking-wider transition-opacity duration-300 hover:opacity-90"
                  >
                    {tier.ctaText}
                  </motion.a>
                ) : (
                  /* Secondary style for other cards */
                  <motion.a 
                    whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
                    whileTap={{ scale: 0.98 }}
                    href="#" 
                    className="inline-flex items-center justify-center w-full py-4 border-2 border-black rounded-full font-bold uppercase text-sm tracking-widest transition-all duration-300"
                  >
                    {tier.ctaText}
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Box */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-20 md:mt-32 p-8 md:p-12 bg-[#F5F5F5] rounded-[20px] md:rounded-[30px] flex flex-col md:row items-center justify-between gap-8 border border-transparent hover:border-black transition-all duration-500"
        >
          <div className="max-w-2xl">
            <h4 className="text-lg md:text-xl font-bold uppercase mb-2">Student & Senior Discounts</h4>
            <p className="text-[#757575] text-sm md:text-base leading-relaxed uppercase tracking-tight">
              We offer a 15% discount on all monthly and annual memberships for students, seniors (60+), and military personnel. Valid ID required at time of registration.
            </p>
          </div>
          <motion.a 
            whileHover={{ x: 5 }}
            href="#" 
            className="text-black font-bold uppercase text-sm tracking-widest underline underline-offset-4 hover:text-[#E4480B] transition-colors whitespace-nowrap"
          >
            Contact for details
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Rates;