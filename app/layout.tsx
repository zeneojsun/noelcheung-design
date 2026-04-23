import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const sansFont = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noel Cheung — Staff Product Designer · Fintech & Design Systems",
  description:
    "Independent product designer with 15+ years across fintech, crypto, and enterprise teams. Specializing in design systems, 0→1 execution, and agentic AI infrastructure.",
  authors: [{ name: "Noel Cheung" }],
  keywords: [
    "Product Designer",
    "Staff Designer",
    "Design Systems",
    "Fintech",
    "Crypto",
    "Agentic AI",
    "Noel Cheung",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noelcheung.design",
    title: "Noel Cheung — Staff Product Designer",
    description:
      "15+ years across fintech, crypto, and design systems. Currently independent from Fukuoka.",
    siteName: "Noel Cheung",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body>
        <div className="site-content min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
