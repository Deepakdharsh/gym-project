import Image from 'next/image';

/**
 * HeroImage Component
 * 
 * Clones the large panoramic hero image section showing a climber on a colorful bouldering wall.
 * Features:
 * - Full-width bleed
 * - Precise aspect ratio matching the reference design
 * - Sharp edges (no rounded corners)
 * - Section divider at the bottom as per high-level design
 */
const HeroImage = () => {
  // Asset from the provided list
  const heroImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c433bee3-8099-4ea8-801c-2a29545c0d97-wix-com/assets/images/images_1.png";

  return (
    <section 
      className="w-full relative overflow-hidden bg-white"
      aria-label="Hero Action Image"
    >
      <div className="w-full relative">
        {/* 
          The reference image has a wide panoramic aspect ratio. 
          Based on visual inspection of the screenshot, it spans 100% width and has a height 
          that creates a specific cinematic frame. In Next.js, we use a relative container 
          with an aspect-ratio or a fixed height to maintain this across viewports.
        */}
        <div className="relative w-full aspect-[1920/540] md:aspect-[1920/520] lg:aspect-[1920/510]">
          <Image
            src={heroImageUrl}
            alt="Climber on a colorful bouldering wall"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ 
              display: 'block'
            }}
          />
        </div>
      </div>

      {/* 
          Section divider mentioned in the high-level design: 
          "Solid Line, 1px height, #8B5E3C color; spans full container width."
          In the screenshot, there is a thin bronze/brown line separating the image from the headline below.
      */}
      <div className="w-full px-[40px]">
        <hr 
          className="border-none h-[1px]" 
          style={{ backgroundColor: '#8B5E3C' }} 
        />
      </div>
    </section>
  );
};

export default HeroImage;