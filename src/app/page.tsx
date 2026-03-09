import Header from "@/components/sections/Header";
import HeroImage from "@/components/sections/HeroImage";
import QuoteSection from "@/components/sections/StatsSection";
import FeaturesGrid from "@/components/sections/features-grid";
import MissionSection from "@/components/sections/mission";
import GymFeatures from "@/components/sections/gym-features";
import PromoGrid from "@/components/sections/PromoGrid";
import Classes from "@/components/sections/Classes";
import Rates from "@/components/sections/Rates";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to FITNESS STUDIO Koorachundu - Your premier fitness destination in Kerala. Modern equipment, expert trainers, and personalized fitness programs. Start your fitness journey today!",
  keywords: "gym Koorachundu, fitness center Kerala, personal training, group classes, strength training, cardio equipment",
  openGraph: {
    title: "FITNESS STUDIO Koorachundu | Best Gym in Kerala",
    description: "Transform your fitness journey at FITNESS STUDIO Koorachundu. Professional trainers, modern facilities, flexible membership plans.",
    url: "https://fitnessstudiokoorachundu.com",
  }
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow pt-[60px] sm:pt-[70px] md:pt-[80px]">
        <HeroImage />
        <QuoteSection />
        <FeaturesGrid />
        <MissionSection />
        <GymFeatures />
        <PromoGrid />
        {/* <Classes /> */}
        {/* <Rates /> */}
      </main>
      <Footer />
    </div>
  );
}
