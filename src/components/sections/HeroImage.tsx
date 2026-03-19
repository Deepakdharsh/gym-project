// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const HeroImage = () => {
//   return (
//     <section className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-black overflow-hidden relative">
//       <div className="w-full h-full flex items-center relative">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/istockphoto-1215493509-612x612.jpg"
//             alt="Professional gym training with battle ropes"
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover object-center brightness-[0.4]"
//           />
//           {/* Gradient overlay for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

//           {/* Diagonal Line Accent */}
//           <div className="absolute top-0 left-[45%] w-[2px] h-full bg-[#E4480B] opacity-60 transform -skew-x-[20deg] hidden sm:block" />
//           <div className="absolute top-0 left-[85%] w-[1px] h-full bg-[#E4480B] opacity-30 transform -skew-x-[20deg] hidden md:block" />
//         </div>

//         {/* Content Overlay */}
//         <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
//           <div className="max-w-[900px]">
//             {/* Main Heading */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="flex flex-col"
//             >
//               <h1 className="text-white font-[900] leading-[0.85] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] tracking-tighter uppercase italic">
//                 ELEVATE YOUR
//               </h1>
//               <h1 className="font-[900] leading-[0.85] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] tracking-tighter uppercase italic mt-1 sm:mt-2">
//                 <span className="text-[#E4480B] drop-shadow-[0_0_15px_rgba(228,72,11,0.5)]">FITNESS</span>{" "}
//                 <span className="text-white">GAME</span>
//               </h1>
//             </motion.div>

//             {/* Tagline */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-4 sm:mt-6 tracking-wide pl-2 border-l-4 border-[#E4480B] ml-0 sm:ml-2"
//             >
//               Personalized training programs built for real results
//             </motion.p>

//             {/* CTA Button - Skewed */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="mt-6 sm:mt-8 md:mt-12"
//             >
//               <motion.a
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "#c2410c",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="https://wa.me/919074198396?text=Hello!%20I'm%20interested%20in%20joining%20FITNESS%20STUDIO%20Koorachundu."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block"
//               >
//                 <div className="bg-[#E4480B] text-white px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 transform -skew-x-[20deg] hover:shadow-[0_0_30px_rgba(228,72,11,0.6)] transition-all duration-300">
//                   <span className="block transform skew-x-[20deg] font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase italic tracking-wider">
//                     Start Today
//                   </span>
//                 </div>
//               </motion.a>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroImage;


"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <section className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-black overflow-hidden relative">
      <div className="w-full h-full flex items-center justify-center sm:justify-start relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/new-landing-page-image.png"
            alt="Professional gym training with battle ropes"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1] sm:brightness-[1] md:brightness-[1]"
          />

          {/* Responsive Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 sm:from-black/90 via-black/50 sm:via-black/60 to-transparent" />

          {/* Diagonal Line Accent */}
          <div className="absolute top-0 left-[45%] w-[2px] h-full bg-[#E4480B] opacity-60 transform -skew-x-[20deg] hidden sm:block" />
          <div className="absolute top-0 left-[85%] w-[2px] h-full bg-[#E4480B] opacity-30 transform -skew-x-[20deg] hidden md:block" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="max-w-[900px] text-center sm:text-left mx-auto sm:mx-0">
            
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center sm:items-start"
            >
              <h1 className="text-white font-[900] leading-[0.85] text-[34px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] tracking-tighter uppercase italic">
                ELEVATE YOUR
              </h1>
              <h1 className="font-[900] leading-[0.85] text-[34px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-[80px] tracking-tighter uppercase italic mt-1 sm:mt-2">
                <span className="text-[#E4480B] drop-shadow-[0_0_15px_rgba(228,72,11,0.5)]">
                  FITNESS
                </span>{" "}
                <span className="text-white">GAME</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-4 sm:mt-6 tracking-wide pl-0 sm:pl-2 border-l-0 sm:border-l-4 border-[#E4480B]"
            >
              Personalized training programs built for real results
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 sm:mt-8 md:mt-12 flex justify-center sm:justify-start"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#c2410c",
                }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919074198396?text=Hello!%20I'm%20interested%20in%20joining%20FITNESS%20STUDIO%20Koorachundu."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-[#E4480B] text-white px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 transform -skew-x-[20deg] hover:shadow-[0_0_30px_rgba(228,72,11,0.6)] transition-all duration-300">
                  <span className="block transform skew-x-[20deg] font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase italic tracking-wider">
                    Start Today
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;