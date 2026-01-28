import React from 'react';

const HeroHeadline = () => {
  return (
    <section className="bg-white">
      {/* Horizontal Divider - Bronze Color */}
      <div className="w-full border-t border-[#8B5E3C]" />
      
      <div className="container mx-auto px-10 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          
          {/* Main Headline - Left Side */}
          <div className="max-w-[800px]">
            <h1 
              className="text-black leading-[0.9] tracking-[-0.04em] font-black uppercase break-words"
              style={{ fontSize: 'clamp(60px, 10vw, 120px)' }}
            >
              ASCEND HEIGHTS<br />
              CLIMBING GYM
            </h1>
          </div>

          {/* Tagline and CTA - Right Side */}
          <div className="flex flex-col items-end lg:pt-4 text-right">
            <div 
              className="text-black font-bold uppercase tracking-[1px] mb-8 lg:mb-20"
              style={{ fontSize: '12px' }}
            >
              BODY, CLIMB, ADVENTURE
            </div>
            
            <a 
              href="#"
              className="btn-primary inline-flex items-center justify-center bg-[#E4440C] text-white rounded-full px-[35px] py-[15px] font-bold uppercase text-[14px] transition-opacity hover:opacity-85"
            >
              JOIN NOW
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroHeadline;