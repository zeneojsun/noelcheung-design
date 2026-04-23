import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { caseStudies } from "@/lib/case-studies";
import Link from "next/link";

export const metadata = {
  title: "Work — Noel Cheung",
  description: "Selected case studies from 15+ years of product design.",
};

export default function WorkIndex() {
  return (
    <>
      <Header />

      <main>
        <div className="max-w-site mx-auto px-6 md:px-12">
          <section className="pt-24 md:pt-32 pb-12 md:pb-16">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-6">
              Index — Work
            </p>
            <h1 className="display text-5xl md:text-7xl leading-[1.02] mb-8 max-w-3xl">
              Selected work from{" "}
              <em>fifteen years</em> of product design.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
              Case studies below range from deep writeups to short contextual
              notes. I write case studies slowly — they're worth doing well.
            </p>
          </section>

          <hr className="border-ink" />

          <section className="py-12 md:py-16">
            <div>
              {caseStudies.map((cs) => (
                <WorkCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          </section>

          <section className="py-16 md:py-20 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-3">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-4">
                A note on NDAs
              </p>
              <p className="text-lg text-ink leading-relaxed">
                Much of my most impactful work — particularly at HSBC, OKX,
                and Melco — involves material I cannot publicly share. If
                you're a hiring manager and want to see confidential work
                under NDA, please{" "}
                <Link
                  href="/#contact"
                  className="border-b border-rule hover:opacity-60 transition-colors"
                >
                  get in touch
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
