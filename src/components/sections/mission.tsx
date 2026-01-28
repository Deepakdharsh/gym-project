"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
              duration: 1,
              ease: [0.33, 1, 0.68, 1],
              delay: i * 0.05
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
  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-[#f9f9f9] w-full py-32 px-10 border-t border-black/5">
      <div className="container mx-auto max-w-[1440px]">
        <div className="overflow-hidden mb-16">
          <h2 className="text-[clamp(60px,12vw,160px)] font-[900] leading-[0.8] tracking-[-0.05em] uppercase text-black">
            <SplitText>OUR MISSION</SplitText>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-10 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="col-span-12 lg:col-span-5 flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <span className="text-[14px] font-[900] uppercase tracking-[0.3em] text-[#E4480B] mb-8 block">
                Philosophy
              </span>
              <p className="text-[22px] md:text-[26px] leading-[1.3] text-black font-bold tracking-tight mb-10">
                At Ascend Heights, we believe climbing is more than just a sport—it's a path to personal growth,
                physical strength, and community connection.
              </p>
              <p className="text-[16px] leading-[1.7] text-black/60 font-medium mb-12">
                Our mission is to provide an inclusive, high-energy environment where climbers of all levels
                can challenge themselves and find their peak. Whether you're a first-timer or a seasoned pro,
                we deliver the space and support you need to reach higher.
              </p>

              <div>
                <motion.a
                  whileHover={{ scale: 1.02, backgroundColor: "#E4480B" }}
                  whileTap={{ scale: 0.98 }}
                  href="/services"
                  className="inline-block bg-black text-white px-12 py-5 font-black uppercase tracking-widest text-[12px] transition-colors"
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
            <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_2.png"
                  alt="Climber on a bouldering wall showing the gym's vibrant culture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-10 mt-32 border-t border-black/10 pt-16">
          {[
            { title: "Community First", text: "We foster a supportive environment where every member is encouraged to share knowledge and celebrate each other's success." },
            { title: "Expert Guidance", text: "Our certified instructors provide world-class training to help you develop technique, endurance, and mental focus." },
            { title: "Dynamic Routes", text: "Our routesetters create fresh challenges weekly, ensuring there is always something new to test your limits." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="col-span-12 md:col-span-4 group"
            >
              <div className="w-12 h-1 bg-black mb-8 group-hover:w-full transition-all duration-700 ease-in-out" />
              <h3 className="text-[28px] font-[900] uppercase mb-6 text-black tracking-tighter">{item.title}</h3>
              <p className="text-[15px] leading-[1.6] text-black/50 font-medium">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

