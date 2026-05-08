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
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
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
