import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "./ui/components/Navbar/Navbar";
import Footer from "./ui/components/Footer/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Speechify Landing Page",
  description:
    "The leading text to speech AI voice app with millions of downloads on Chrome, iOS, & Android. Also try our AI voice generator, voice cloning, dubbing & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header & Navigation Bar */}
        <Navbar />

        {children}

        {/* Footer */}
        {/* Expanded Footer */}
        <Footer />
      </body>
    </html>
  );
}
