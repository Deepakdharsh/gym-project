import type { Metadata } from "next";
import "./globals.css";

import ErrorReporter from "@/components/ErrorReporter";
import SmoothScroll from "@/components/ui/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://fitnessstudiokoorachundu.com'),
  title: {
    default: "FITNESS STUDIO Koorachundu | Best Gym in Kerala | Fitness Center Balussery",
    template: "%s | FITNESS STUDIO Koorachundu"
  },
  description: "Join FITNESS STUDIO Koorachundu - Premier gym in Kerala offering state-of-the-art equipment, personal training, group classes, and expert fitness guidance. Located in Balussery Rd, Kanthalad. Call +91 90741 98396",
  keywords: [
    "gym in Koorachundu",
    "fitness center Kerala",
    "Balussery gym",
    "Kanthalad fitness studio",
    "personal training Kerala",
    "gym near me",
    "fitness classes Kozhikode",
    "weight training Calicut",
    "gym membership Kerala",
    "best gym in Kerala"
  ],
  authors: [{ name: "FITNESS STUDIO Koorachundu" }],
  creator: "FITNESS STUDIO Koorachundu",
  publisher: "FITNESS STUDIO Koorachundu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fitnessstudiokoorachundu.com",
    siteName: "FITNESS STUDIO Koorachundu",
    title: "FITNESS STUDIO Koorachundu | Best Gym in Kerala",
    description: "Premier fitness center in Koorachundu offering professional training, modern equipment, and personalized fitness programs. Join us today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FITNESS STUDIO Koorachundu - Best Gym in Kerala"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FITNESS STUDIO Koorachundu | Best Gym in Kerala",
    description: "Premier fitness center in Koorachundu offering professional training and modern equipment.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://fitnessstudiokoorachundu.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="c433bee3-8099-4ea8-801c-2a29545c0d97"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <WhatsAppButton />

      </body>
    </html>
  );
}
