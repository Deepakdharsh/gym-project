import Header from "@/components/sections/Header";
import HeroImage from "@/components/sections/HeroImage";
import HeroContent from "@/components/sections/HeroContent";
import FeaturesGrid from "@/components/sections/features-grid";
import MissionSection from "@/components/sections/mission";
import GymFeatures from "@/components/sections/gym-features";
import PromoGrid from "@/components/sections/PromoGrid";
import Classes from "@/components/sections/Classes";
import Rates from "@/components/sections/Rates";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow pt-[80px]">
        <HeroImage />
        <HeroContent />
        <FeaturesGrid />
        <MissionSection />
        <GymFeatures />
        <PromoGrid />
        <Classes />
        <Rates />
      </main>
      <Footer />
    </div>
  );
}
