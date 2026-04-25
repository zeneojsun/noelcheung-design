import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "OKX Lite — Global-Ready Design System for OKX Lite. — Noel Cheung",
  description: "Led the end-to-end development of a scalable design system adopted across global markets — driving consistency, performance, and team efficiency.",
};

export default function OKXLitePage() {
  const cs = caseStudies.find((c) => c.slug === "okx-lite")!;
  const idx = caseStudies.findIndex((c) => c.slug === "okx-lite");
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <Header />

      <main>
        <article className="max-w-site mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="pt-12 pb-6 border-b border-rule">
            <Link
              href="/work"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted border-b border-transparent hover:opacity-60 transition-colors"
            >
              ← All work
            </Link>
          </div>

          {/* Case hero */}
          <section className="py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-2 space-y-4">
                <MetaItem label="Case" value={`№ ${cs.num}`} />
                <MetaItem label="Year" value="2022–23" />
              </div>
              <div className="md:col-span-3 space-y-4">
                <MetaItem label="Role" value={cs.role} />
                <MetaItem label="Status" value="Shipped" />
              </div>
              <div className="md:col-span-7">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-4">
                  {cs.meta}
                </p>
                <h1 className="display text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-8">
                  {cs.title}
                  <em>{cs.titleEm}</em>
                </h1>
                <p className="text-xl leading-relaxed text-ink/80">
                  {cs.body}
                </p>
              </div>
            </div>

            {/* Impact band */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-rule py-8 gap-px">
              {cs.impact.map((stat, i) => (
                <div
                  key={i}
                  className="px-4 first:pl-0 md:border-r border-rule last:border-0"
                >
                  {stat.value && (
                    <p className="display text-3xl md:text-5xl tabular leading-none mb-2">
                      {stat.value}
                    </p>
                  )}
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Journey */}
          <section className="py-12 md:py-16">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 md:col-start-3 space-y-16">
                <div>
                  <h2 className="display text-3xl md:text-4xl mb-6">The Journey</h2>
                  <p className="text-lg leading-relaxed text-ink/80 mb-8">
                    How we built a comprehensive design system from the ground up
                  </p>
                </div>

                <PhaseBlock
                  phase="01"
                  title="Audit & Alignment"
                  content="We began with a comprehensive audit of existing UI patterns and inconsistencies across the platform. This phase involved close collaboration with product teams to understand their needs and pain points. We established clear goals and metrics for the design system, ensuring alignment with business objectives and technical constraints."
                  outcome="Unified vision and roadmap"
                />

                <PhaseBlock
                  phase="02"
                  title="System Build"
                  content="With a clear direction established, we created a comprehensive token architecture as the foundation of our system. We developed component libraries with careful attention to variants, states, and accessibility. This phase involved close collaboration with engineering to ensure technical feasibility and implementation efficiency. We documented everything meticulously to support adoption."
                  outcome="1000+ components and patterns"
                />

                <PhaseBlock
                  phase="03"
                  title="Rollout & Governance"
                  content="The final phase focused on driving adoption across teams through education, workshops, and support. We established a clear governance model with contribution guidelines, review processes, and maintenance procedures. We implemented feedback loops to continuously improve the system based on real-world usage. This phase was critical for ensuring long-term sustainability."
                  outcome="95% adoption across teams"
                />
              </div>
            </div>
          </section>

          <hr className="border-rule my-8" />

          {/* Next case */}
          <section className="py-16 md:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-4">
              Next case
            </p>
            <Link href={next.href} className="group block">
              <h2 className="display text-3xl md:text-5xl leading-[1.1] group-hover:opacity-70 transition-colors">
                {next.title}
                <em>{next.titleEm}</em>{" "}
                <span className="inline-block group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </h2>
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-1">
        {label}
      </p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

function PhaseBlock({
  phase,
  title,
  content,
  outcome,
}: {
  phase: string;
  title: string;
  content: string;
  outcome: string;
}) {
  return (
    <div className="border-t border-rule pt-8">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          Phase {phase}
        </span>
        <h3 className="display text-2xl md:text-3xl">{title}</h3>
      </div>
      <p className="text-lg leading-relaxed text-ink/80 mb-4">{content}</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        Key outcome: {outcome}
      </p>
    </div>
  );
}