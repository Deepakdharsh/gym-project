"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StatsSection = () => {
  const [capacity, setCapacity] = useState(65);
  
  // Simulate dynamic capacity changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCapacity(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return Math.min(Math.max(next, 40), 95);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Bouldering Problems", value: "250+", sub: "Updated Weekly" },
    { label: "Wall Height", value: "55ft", sub: "Top Rope & Lead" },
    { label: "Community Members", value: "1.2k", sub: "Active Climbers" },
  ];

  return (
    <section className="bg-black text-white py-24 px-10 border-y border-white/10 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          
          {/* Dynamic Gym Capacity */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col border-l-2 border-[#E4480B] pl-8"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#E4480B] mb-2">Live Gym Capacity</span>
            <div className="flex items-baseline gap-2">
              <span className="text-[64px] font-black leading-none">{capacity}%</span>
              <div className={`w-3 h-3 rounded-full ${capacity > 85 ? 'bg-red-500 animate-pulse' : 'bg-green-500'} mb-2`} />
            </div>
            <p className="text-white/50 text-[14px] font-medium mt-2">Currently {capacity < 80 ? 'Perfect for Training' : 'Vibrant & Busy'}</p>
          </motion.div>

          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">{stat.label}</span>
              <span className="text-[48px] font-black leading-none uppercase">{stat.value}</span>
              <p className="text-white/30 text-[14px] font-medium mt-2">{stat.sub}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;