import Header from "@/components/sections/Header";
import Classes from "@/components/sections/Classes";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FITNESS STUDIO | Services",
  description: "Explore our fitness services and classes at FITNESS STUDIO Koorachundu. Personal training, group classes, strength training, cardio workouts, yoga, and specialized fitness programs for all levels.",
  keywords: "gym classes Kerala, personal training Koorachundu, group fitness, strength training, cardio classes, yoga Kerala, fitness programs",
  openGraph: {
    title: "Fitness Services & Classes | FITNESS STUDIO Koorachundu",
    description: "Professional fitness services and diverse class offerings at FITNESS STUDIO Koorachundu. Expert trainers, modern equipment.",
    url: "https://fitnessstudiokoorachundu.com/services",
  }
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow pt-[60px] sm:pt-[70px] md:pt-[20px]">
        <Classes />
      </main>
      <Footer />
    </div>
  );
}
