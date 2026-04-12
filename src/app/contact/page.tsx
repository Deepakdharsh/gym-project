import Header from "@/components/sections/Header";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";

export const metadata: Metadata = {
    title: "FITNESS STUDIO | Contact-us",
    description: `Get in touch with FITNESS STUDIO Koorachundu. Visit us at Balussery Rd, Koorachunde, Kanthalad, Kerala 673527. Call ${contactPhone} or WhatsApp us for membership inquiries and gym information.`,
    keywords: "contact gym Koorachundu, gym location Kerala, fitness studio address, Balussery gym contact, Kanthalad gym phone number",
    openGraph: {
        title: "Contact FITNESS STUDIO Koorachundu | Get in Touch",
        description: `Visit FITNESS STUDIO Koorachundu at Balussery Rd, Kanthalad or call ${contactPhone}. We're here to help with your fitness journey.`,
        url: "https://fitnessstudiokoorachundu.com/contact",
    }
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <main className="flex-grow pt-[60px] sm:pt-[70px] md:pt-[20px]">
                <ContactUs />
            </main>
            <Footer />
        </div>
    );
}
