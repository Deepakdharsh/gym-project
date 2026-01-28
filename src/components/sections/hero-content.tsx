import React from 'react';

const HeroContent = () => {
  return (
    <section className="w-full bg-[#f9f9f9]">
      {/* Top Hairline Border */}
      <div className="w-full border-t border-[#8c6a48]" />

      <div className="container mx-auto px-[40px] py-[40px] md:py-[60px]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          
          {/* Main Headline */}
          <div className="max-w-[1000px]">
            <h1 className="text-[clamp(48px,10vw,120px)] font-[800] leading-[0.85] tracking-[-0.04em] text-black uppercase font-display">
              ASCEND HEIGHTS<br />
              CLIMBING GYM
            </h1>
          </div>

          {/* Subtags & CTA Section */}
          <div className="flex flex-col items-end gap-16 md:gap-[120px] self-stretch md:self-auto">
            {/* Tagline */}
            <div className="tagline text-black font-[700] text-[16px] tracking-[0.05em] uppercase whitespace-nowrap">
              BODY, CLIMB, ADVENTURE
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <a 
                href="#" 
                className="btn-primary bg-[#d93e08] text-white px-[32px] py-[12px] rounded-[50px] font-[700] text-[14px] uppercase tracking-[0.1em] transition-opacity duration-200 hover:opacity-90 inline-flex items-center justify-center min-w-[160px]"
              >
                JOIN NOW
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Hairline Border (Optional based on design system flow) */}
      <div className="w-full border-b border-[#8c6a48]" />
    </section>
  );
};

export default HeroContent;