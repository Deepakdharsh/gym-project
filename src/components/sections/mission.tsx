"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Zap } from 'lucide-react';

const SplitText = ({ children, className }: { children: string, className?: string }) => {
  const words = children.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1] as any, // OutExpo
              delay: i * 0.08
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

const MissionSection: React.FC = () => {
  const itemVariants: any = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="bg-white w-full pt-12 sm:pt-16 md:pt-24 lg:pt-32 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 border-t border-black/5">
      <div className="container mx-auto max-w-[1440px]">
        <div className="overflow-hidden mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-[48px] sm:text-[64px] md:text-[100px] lg:text-[140px] xl:text-[160px] font-[900] leading-[0.8] tracking-[-0.05em] uppercase text-black">
            <SplitText>OUR MISSION</SplitText>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="col-span-12 lg:col-span-5 flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <span className="text-[12px] sm:text-[14px] font-[900] uppercase tracking-[0.3em] text-[#E4480B] mb-6 sm:mb-8 block">
                Philosophy
              </span>
              <p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] leading-[1.3] text-black font-bold tracking-tight mb-8 sm:mb-10">
                At Fitness Studio, our mission is simple:<br />
                to help people build stronger bodies, healthier minds, and more confident lives.
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] text-black/60 font-medium mb-10 sm:mb-12">
                We believe fitness is not about quick fixes or temporary motivation—it's about creating sustainable habits that last a lifetime.
                Every workout, every program, and every interaction is designed to move our members closer to their goals, one step at a time.
              </p>

              <div>
                <motion.a
                  whileHover={{ scale: 1.02, backgroundColor: "#E4480B" }}
                  whileTap={{ scale: 0.98 }}
                  href="/services"
                  className="inline-block bg-black text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 font-black uppercase tracking-widest text-[11px] sm:text-[12px] transition-colors"
                >
                  LEARN MORE
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="col-span-12 lg:col-span-7"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/4] md:aspect-[16/10] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src="/gettyimages-3238896-612x612.jpg"
                  alt="Climber on a bouldering wall showing the gym's vibrant culture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 mt-20 sm:mt-24 md:mt-32 border-t border-black/10">
          {[
            {
              icon: <Dumbbell size={28} strokeWidth={2.5} />,
              title: "PRECISION GEAR",
              text: "Experience seamless workouts on top-tier equipment engineered for safety and maximum biomechanical efficiency."
            },
            {
              icon: <Users size={28} strokeWidth={2.5} />,
              title: "EXPERT TRAINERS",
              text: "Our trainers focus on form and functional movement to ensure you see results that actually last."
            },
            {
              icon: <Zap size={28} strokeWidth={2.5} />,
              title: "PRIME RECOVERY",
              text: "Premium recovery and nutrition services to ensure you leave the gym feeling better than you arrived."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.5,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1] as any
              }}
              className="col-span-12 md:col-span-4 group relative overflow-hidden p-8 sm:p-10 md:p-12 border-b md:border-b-0 md:border-r border-black/10 last:border-r-0 hover:bg-black/70 transition-colors duration-700 ease-in-out"
            >
              {/* Decorative Number */}
              <span className="absolute top-8 right-8 text-[60px] md:text-[80px] font-black text-black/5 group-hover:text-white/5 transition-all duration-700 select-none pointer-events-none group-hover:-translate-y-2">
                0{idx + 1}
              </span>

              <div className="relative z-10 group-hover:-translate-y-2 transition-transform duration-700 ease-in-out">
                <div className="text-[#E4480B] mb-8 group-hover:scale-110 transition-transform duration-700 origin-left">
                  {item.icon}
                </div>

                <div className="w-10 h-[2px] bg-[#E4480B] mb-6 group-hover:w-20 transition-all duration-700" />

                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-[900] uppercase mb-4 text-black group-hover:text-white transition-colors duration-700 tracking-tight leading-tight">
                  {item.title}
                </h3>

                <p className="text-[14px] sm:text-[15px] leading-[1.6] text-black/50 group-hover:text-white/60 transition-colors duration-700 font-medium max-w-[280px]">
                  {item.text}
                </p>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E4480B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

