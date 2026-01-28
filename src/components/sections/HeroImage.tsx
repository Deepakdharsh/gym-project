"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const HeroImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const heroImages = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_1.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_2.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_3.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white overflow-hidden">
      <div className="container mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/7.5] overflow-hidden bg-black"
        >
          <motion.div
            style={{ y }}
            className="absolute -inset-y-32 inset-x-0"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentIndex]}
                  alt="Climber on a colorful indoor bouldering wall at Ascend Heights Climbing Gym"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Overlay gradient for better text readability and aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Slider Indicators */}
          <div className="absolute bottom-10 right-10 flex gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-12 h-1 transition-all duration-500 ${
                  i === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroImage;
