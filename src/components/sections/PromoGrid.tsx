"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PromoGrid: React.FC = () => {
  const images = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_2.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_3.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_4.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_6.png",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-t border-black/10">
      <div className="container mx-auto px-10">
        
        {/* Header Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8"
        >
          <div className="max-w-4xl">
            <motion.h2 variants={fadeInUp} className="text-[clamp(40px,8vw,80px)] font-[900] tracking-tighter leading-[0.85] uppercase text-black mb-6">
              REACH NEW <br /> HEIGHTS
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[18px] font-medium leading-relaxed text-black/60 max-w-xl">
              Our state-of-the-art facility offers over 20,000 square feet of climbing terrain, 
              designed for every skill level from absolute beginners to professional athletes.
            </motion.p>
          </div>
          
          <motion.div variants={fadeInUp} className="flex flex-col items-end gap-6 text-right self-stretch md:self-auto">
            <span className="text-[14px] font-black tracking-[0.05em] uppercase text-black">
              STRENGTH, SKILL, COMMUNITY
            </span>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#000000" }}
              whileTap={{ scale: 0.95 }}
              href="/services" 
              className="bg-[#E4480B] text-white px-10 py-4 font-black text-[14px] uppercase tracking-widest transition-all duration-300"
            >
              OUR SERVICES
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Promo Image Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        >
          
          {/* Main Large Feature Image */}
          <motion.div variants={fadeInUp} className="md:col-span-8 relative group overflow-hidden bg-[#F7F7F7]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full relative aspect-[16/9]"
            >
              <Image
                src={images[0]}
                alt="Climber on wall"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </motion.div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div variants={fadeInUp} className="relative group overflow-hidden bg-[#F7F7F7] aspect-[4/3]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                <Image
                  src={images[1]}
                  alt="Climbing grips details"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative group overflow-hidden bg-[#F7F7F7] aspect-[4/3]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                <Image
                  src={images[2]}
                  alt="Climbing gear"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <motion.div variants={fadeInUp} className="md:col-span-4 relative group overflow-hidden bg-[#F7F7F7] aspect-square md:aspect-auto h-[400px]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              <Image
                src={images[3]}
                alt="Fitness training area"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-8 relative group overflow-hidden bg-[#F7F7F7] h-[400px]">
             <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              <Image
                src={images[4]}
                alt="Community climbing area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </motion.div>
            <div className="absolute bottom-10 left-10 z-10">
               <span className="bg-white text-black px-6 py-2 font-black text-[12px] uppercase tracking-widest border border-black/5">
                 THE FACILITY
               </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default PromoGrid;
