"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    category: 'CARDIO',
    title: 'ENDURANCE ZONE',
    description: 'High-energy cardio spaces designed to boost stamina, improve heart health, and maximize calorie burn.',
    image: '/pexels-tima-miroshnichenko-6388514.jpg',
  },
  {
    category: 'YOGA',
    title: 'YOGA FLOW',
    description: 'A refined space for recovery, flexibility, and mental clarity through guided yoga practice.',
    image: '/pexels-noe-de-angelis-299522260-13423698.jpg',
  },
  {
    category: 'BODY',
    title: 'STRENGTH ZONE',
    description: 'Purpose-built training zones and equipment designed to increase strength, endurance, and total body performance.',
    image: '/pexels-shuvalova-natalia-415991090-18723748.jpg',
  }
];

export default function FeaturesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-white w-full border-t border-black/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 w-full"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col border-black/10 ${index !== features.length - 1 ? 'md:border-r border-b md:border-b-0' : 'border-b md:border-b-0'
              }`}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full relative"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>

            {/* Content Container */}
            <div className="p-10 flex flex-col h-full bg-white group">
              <span className="text-[16px] font-bold uppercase tracking-[0.05em] text-black mb-4">
                {feature.category}
              </span>
              <h3 className="text-[42px] leading-[0.85] font-extrabold uppercase tracking-[-0.04em] text-black mb-6 group-hover:text-[#E4480B] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-black/80 font-medium">
                {feature.description}
              </p>

              <div className="mt-auto pt-10">
                <motion.a
                  whileHover={{ x: 10 }}
                  href="/services"
                  className="inline-flex items-center text-[14px] font-bold uppercase tracking-[0.1em] text-[#E4480B] hover:opacity-80 transition-opacity"
                >
                  LEARN MORE
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Border Divider */}
      <div className="w-full border-b border-black/10"></div>
    </section>
  );
}
