"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GymFeatures = () => {
  const features = [
    {
      title: "CLIMB",
      description: "Experience world-class bouldering and sport climbing routes designed for all skill levels, from beginners to elite athletes.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_2.png",
      alt: "Close-up of vibrant climbing holds on a grey wall texture"
    },
    {
      title: "COMMUNITY",
      description: "Join a vibrant ecosystem of climbers. Our gym is more than just a facility; it's a place to connect, learn, and grow together.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_3.png",
      alt: "Spacious gym interior with climbing walls and social areas"
    },
    {
      title: "TRAINING",
      description: "Elevate your performance with our dedicated training zone, featuring campus boards, hangboards, and specialized fitness equipment.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_5.png",
      alt: "Climber's hands reaching for colored holds on a training wall"
    }
  ];

  return (
    <section className="bg-white py-[100px]">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-baseline mb-[60px] border-b border-black/10 pb-4"
        >
          <h2 className="text-[48px] font-[800] uppercase tracking-tighter leading-[0.9] text-black">
            OUR FACILITY
          </h2>
          <span className="text-[12px] font-[700] uppercase tracking-[1px] text-black mt-4 md:mt-0">
            SPACE, POWER, PRECISION
          </span>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                >
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-[24px] font-[900] uppercase tracking-tighter text-black">
                  {feature.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-black/80 font-normal">
                  {feature.description}
                </p>
                <div className="pt-2">
                  <a 
                    href="/services" 
                    className="text-[14px] font-[700] uppercase tracking-[0.5px] text-[#E4440C] border-b-2 border-transparent hover:border-[#E4440C] transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Detail Section */}
        <div className="mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-black/10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 pr-0 lg:pr-16"
          >
            <span className="text-[12px] font-[700] uppercase tracking-[1px] text-black mb-6 block">
              STATE-OF-THE-ART EQUIPMENT
            </span>
            <h2 className="text-[48px] font-[800] uppercase tracking-tighter leading-[0.9] text-black mb-8">
              BEYOND THE <br /> VERTICAL
            </h2>
            <p className="text-[18px] leading-[1.6] text-black font-normal mb-10 max-w-xl">
              Our 15,000 sq ft facility is designed with the modern climber in mind. We provide the tools, you provide the drive. From our high-friction wall textures to our competition-grade route setting, every detail is optimized for your climbing progression.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/membership"
              className="inline-block bg-[#E4440C] text-white px-[35px] py-[15px] font-[700] uppercase text-[14px] hover:opacity-85 transition-opacity"
            >
              Explore Our Routes
            </motion.a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[400px] lg:h-auto min-h-[500px] overflow-hidden"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_4.png"
              alt="Gym interior view showing the scale of the climbing walls"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GymFeatures;
