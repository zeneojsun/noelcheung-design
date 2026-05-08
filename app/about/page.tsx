import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Noel Cheung",
  description:
    "Noel Cheung is a product designer with roots in fine art and graphic design, building at the intersection of design, coaching, systems thinking, and AI.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="max-w-site mx-auto px-5 sm:px-6">

        {/* Page header */}
        <section className="pt-14 sm:pt-20 pb-14 border-b border-rule">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-2 mb-6">
            About
          </p>
          <h1 className="serif text-[26px] sm:text-[34px] leading-[1.3] tracking-[-0.01em] text-ink max-w-[28ch]">
            Who is Noel?
          </h1>
          <p className="text-[15px] leading-[1.75] text-ink mt-8 max-w-[52ch]">
            Noel is a generalist designer with roots in fine art and graphic design.
          </p>
        </section>

        {/* Background */}
        <section className="pt-12 pb-14">
          <div className="space-y-5 max-w-[52ch]">
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              His early career began in visual design for retail and e-commerce, where he developed
              a strong eye for composition, communication, and brand expression. Over time, he moved
              from visual design into UI, interaction, UX, and eventually product design — shifting
              from retail into finance, fintech, and crypto.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              His design instincts were built through very different environments: from local
              production agencies, where speed and execution mattered, to large in-house corporate
              teams, where systems, process, governance, and scale became essential.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              What started as a visual-first practice gradually became a more systematic and
              business-aware design approach.
            </p>
          </div>
        </section>

        <div className="border-t border-rule" />

        {/* The shift */}
        <section className="pt-12 pb-14">
          <div className="space-y-5 max-w-[52ch]">
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              He expanded his thinking across computer science, HCI, usability, product management,
              UX strategy, and design systems. These disciplines became transferable tools that shaped
              how he approaches problems — not only as screens to design, but as systems to
              understand, fix, and improve.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              That mindset gave him the confidence to step outside his comfort zone and take on
              difficult projects: complex 0-to-1 digital transformation work where products were
              unclear, broken, delayed, or at risk.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              Over time, a practical design philosophy emerged.
            </p>
          </div>
          <div className="border-t border-rule mt-10 pt-10 space-y-2 max-w-[52ch]">
            <p className="serif text-[20px] sm:text-[22px] leading-[1.4] text-ink">
              Design should ship.
            </p>
            <p className="serif text-[20px] sm:text-[22px] leading-[1.4] text-ink">
              Design should create value.
            </p>
            <p className="serif text-[20px] sm:text-[22px] leading-[1.4] text-ink">
              Design should help the business move forward.
            </p>
          </div>
        </section>

        <div className="border-t border-rule" />

        {/* Mentoring → Coaching */}
        <section className="pt-12 pb-14">
          <div className="space-y-5 max-w-[52ch]">
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              In the last few years, Noel discovered mentoring almost by accident. Through a global
              mentorship platform, he found a vision he believed in deeply: helping other designers
              grow, avoid the mistakes he had made, and find their own path forward.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              He devoted a large amount of time and energy to that. But that commitment came with
              real cost. He gave too much, spent too much of his own resources, and slowly learned
              that contribution without limits can become unsustainable.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              That experience led him to coaching.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              He began learning how to support people more effectively, while also protecting his own
              energy. He started to understand that helping others succeed could become the foundation
              of a real business — not just a personal mission.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              At the same time, he faced a difficult truth. After spending so much time helping
              others, he found himself struggling too. He had been away from the job market for too
              long. He was helping designers find clarity while still searching for his own.
            </p>
          </div>
        </section>

        <div className="border-t border-rule" />

        {/* Now */}
        <section className="pt-12 pb-20">
          <div className="space-y-5 max-w-[52ch]">
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              So Noel started a company.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              The first version of the vision was simple: help designers succeed. But by the end of
              2025, the acceleration of AI changed everything. The design industry began shifting
              faster than expected. The old question — how can designers get better jobs — was no
              longer the right one. The new question became:
            </p>
            <p className="serif text-[17px] sm:text-[18px] leading-[1.5] text-ink italic max-w-[44ch]">
              How can designers stay relevant, adaptive, and valuable in a world being reshaped
              by AI?
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              That forced another pivot. His mission evolved from helping designers succeed in the
              old system, to helping designers adapt to the new one.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              Noel still believes that thinking shapes visual design. But he also understands that
              humans are no longer the only ones capable of generating ideas, interfaces, or systems.
              The future of design will not be human versus AI — it will be human thinking working
              with AI to create new forms of visual, product, and business value.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              For much of his life, Noel struggled to fully visualize the ideas in his head. Now,
              with AI, those ideas are becoming easier to express, test, and build.
            </p>
            <p className="text-[15px] leading-[1.75] text-ink-soft">
              His work now sits at the intersection of design, coaching, systems thinking, and AI.
            </p>
            <p className="text-[15px] leading-[1.75] text-muted">
              He is still learning. Still rebuilding. Still adapting. But that may be exactly
              the point.
            </p>
            <p className="text-[13px] leading-[1.6] text-muted-2 pt-1">
              Stay tuned.
            </p>
            <div className="border-t border-rule mt-8 pt-8">
              <a
                href="/cv"
                className="text-[13px] font-medium text-ink hover:text-muted transition-colors duration-200"
              >
                Read the full CV →
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
