import type { Metadata } from "next";
import "./globals.css";

import ErrorReporter from "@/components/ErrorReporter";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ascend / Climbing Gym",
  description: "High-impact athletic climbing gym experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
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

      </body>
    </html>
  );
}
