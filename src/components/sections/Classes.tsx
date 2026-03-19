"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const classesData = [
  {
    title: "CARDIO",
    description: "Focus on short, challenging routes without ropes. Perfect for building strength and technique in a social environment.",
    image: "/pexels-tima-miroshnichenko-6388522.jpg",
    alt: "Bouldering session at Ascend Heights"
  },
  {
    title: "YOGA",
    description: "Improve flexibility, balance, and focus through guided yoga sessions suitable for all levels.",
    image: "/pexels-leticia-negale-2671210-4239238.jpg",
    alt: "People practicing yoga in a calm studio environment"
  },
  {
    title: "BODYBUILDING",
    description: "Build strength and muscle with structured training programs and proper guidance.",
    image: "/pexels-tima-miroshnichenko-5750626.jpg",
    alt: "Person lifting weights during a bodybuilding workout"
  },
  {
    title: "CALISTHENICS",
    description: "Train using bodyweight exercises to improve strength, control, and mobility.",
    image: "/pexels-tima-miroshnichenko-6389082.jpg",
    alt: "Person performing calisthenics exercises like pull-ups"
  },{
    title: "BOXING",
    description: "Learn boxing techniques, improve endurance, and build confidence through training sessions.",
    image: "/pexels-tima-miroshnichenko-5750819.jpg",
    alt: "Person training with boxing gloves and punching bag"
  }
];

const Classes = () => {
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="bg-background py-16 md:py-24 lg:py-[100px] overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <span className="label-tag">OUR SERVICES</span>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[0.9] tracking-[-0.02em] uppercase">
            CHOOSE YOUR<br />ADVENTURE
          </h2>
        </motion.div>

        {/* Classes Grid */}
        <div className="space-y-12 md:space-y-20 lg:space-y-32">
          {classesData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 lg:gap-24 items-center`}
            >
              {/* Image Container */}
              <motion.div
                variants={fadeInUp}
                className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </motion.div>
              </motion.div>

              {/* Content Container */}
              <motion.div
                variants={fadeInUp}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <h3 className="text-[36px] md:text-[48px] lg:text-[60px] font-extrabold leading-[0.9] tracking-tight mb-6 md:mb-8 uppercase">
                  {item.title}
                </h3>
                <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] text-foreground max-w-[480px] mb-6 md:mb-8 lg:mb-12">
                  {item.description}
                </p>
                <div>
                  {/* <motion.a 
                    whileHover={{ x: 10 }}
                    href="#membership" 
                    className="inline-flex items-center gap-2 font-bold uppercase text-[14px] tracking-widest border-b border-black pb-1 hover:text-primary hover:border-primary transition-colors duration-300"
                  >
                    LEARN MORE
                  </motion.a> */}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Extra Services Banner */}
        {/* <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-24 md:mt-40 pt-16 border-t border-black grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {[
            { id: "01", title: "GEAR RENTAL", text: "Full sets of climbing shoes, harnesses, and chalk bags available for all ages and sizes." },
            { id: "02", title: "YOGA & FITNESS", text: "Complement your climbing with targeted core, flexibility, and strength training classes." },
            { id: "03", title: "GUIDED TRIPS", text: "Take your skills to the real rock with our expert guides for outdoor excursions." }
          ].map((service, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <span className="label-tag text-primary">{service.id}</span>
              <h4 className="text-[20px] font-bold mb-4 uppercase">{service.title}</h4>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {service.text}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Classes;