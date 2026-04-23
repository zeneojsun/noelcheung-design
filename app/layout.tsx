import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const sansFont = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noel Cheung — Product Designer · Fintech & Design Systems",
  description:
    "Product designer with 15+ years across fintech, crypto, and complex digital products. Specialising in design systems, 0→1 execution, and turnarounds.",
  authors: [{ name: "Noel Cheung" }],
  keywords: [
    "Product Designer",
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
    title: "Noel Cheung — Product Designer",
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
      suppressHydrationWarning
      className={`${sansFont.variable} ${monoFont.variable}`}
    >
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
