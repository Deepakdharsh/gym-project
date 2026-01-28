import Header from "@/components/sections/Header";
import Classes from "@/components/sections/Classes";
import Footer from "@/components/sections/Footer";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow pt-[80px]">
        <Classes />
      </main>
      <Footer />
    </div>
  );
}
