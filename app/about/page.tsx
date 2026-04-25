import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cv } from "@/lib/cv";

export const metadata: Metadata = {
  title: "About — Noel Cheung",
  description:
    "Product Designer with 15+ years of experience across fintech, crypto, and complex digital products — specialising in UX strategy, scalable design systems, and design operations.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <div className="max-w-site mx-auto px-6 md:px-12">
          <section className="pt-24 md:pt-32 pb-16 md:pb-20">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                About
              </p>
            </div>

            <div className="max-w-[60ch] space-y-5 text-base leading-[1.7] text-muted">
              {cv.profile
                .split("\n\n")
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i} className={i === 0 ? "text-ink" : undefined}>
                    {para.trim()}
                  </p>
                ))}
              <p className="pt-4">
                <a
                  href="/cv"
                  className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink hover:opacity-60 transition-opacity"
                >
                  Read the full CV →
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
