import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Inter+Tight:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
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
