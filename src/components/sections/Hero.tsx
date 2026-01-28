import React from 'react';
import Image from 'next/image';

/**
 * Hero Section
 * 
 * Features a full-width panoramic image of a climber,
 * followed by a large bold headline "ASCEND HEIGHTS CLIMBING GYM",
 * a secondary label, and an orange "JOIN NOW" call-to-action button.
 */
const Hero = () => {
  return (
    <section className="bg-white overflow-hidden">
      {/* Full-width panoramic background image container */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_1.png"
          alt="Climber on a bouldering wall at Ascend Heights Climbing Gym"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Hero Content Section */}
      <div className="container py-8 md:py-12">
        {/* Horizontal Divider */}
        <div className="w-full border-t border-black mb-6 md:mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-6">
          {/* Main Headline */}
          <div className="md:col-span-8">
            <h1 className="text-black font-extrabold leading-[0.9] tracking-tighter uppercase break-words">
              ASCEND HEIGHTS
              <br />
              CLIMBING GYM
            </h1>
          </div>

          {/* Label and CTA Button */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end md:justify-start">
            <span className="text-[12px] font-bold tracking-[0.1em] text-black uppercase mb-auto pt-1 md:pt-4">
              BODY, CLIMB, ADVENTURE
            </span>
            
            <div className="mt-8 md:mt-24">
              <a
                href="#join"
                className="bg-[#D93E0B] hover:bg-[#B03209] text-white px-[36px] py-[14px] rounded-full text-[14px] font-extrabold uppercase tracking-wider transition-colors duration-300 inline-flex items-center justify-center whitespace-nowrap"
              >
                JOIN NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        h1 {
          font-size: clamp(48px, 10vw, 120px);
        }
        .container {
          padding-left: clamp(20px, 5vw, 60px);
          padding-right: clamp(20px, 5vw, 60px);
        }
      `}</style>
    </section>
  );
};

export default Hero;