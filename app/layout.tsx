import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

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

const serifFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noel Cheung — Product Designer",
  description:
    "Product designer based in Fukuoka, Japan. Product systems, design systems, fintech & crypto UX, and AI-ready design infrastructure.",
  authors: [{ name: "Noel Cheung" }],
  keywords: [
    "Product Designer",
    "Design Systems",
    "Fintech",
    "Crypto",
    "Noel Cheung",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noelcheung.design",
    title: "Noel Cheung — Product Designer",
    description:
      "Product systems, design systems, fintech & crypto UX, and AI-ready design infrastructure. Based in Fukuoka, Japan.",
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
      className={`${sansFont.variable} ${monoFont.variable} ${serifFont.variable}`}
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
