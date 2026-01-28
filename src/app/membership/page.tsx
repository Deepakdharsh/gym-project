import Header from "@/components/sections/Header";
import Rates from "@/components/sections/Rates";
import Footer from "@/components/sections/Footer";

export default function MembershipPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-grow pt-[80px]">
        <Rates />
      </main>
      <Footer />
    </div>
  );
}
