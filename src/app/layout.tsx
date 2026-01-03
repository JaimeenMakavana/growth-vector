import type { Metadata } from "next";
import { Instrument_Serif, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/home-page-components/header/Header";
import FloatingInfoButton from "@/components/home-page-components/floating-info/FloatingInfoButton";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growth Vector - Strategic Growth Solutions",
  description:
    "We accelerate business growth through data-driven strategies, AI automation, and performance marketing. Your vector to exponential growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${instrumentSerif.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <FloatingInfoButton />
      </body>
    </html>
  );
}
