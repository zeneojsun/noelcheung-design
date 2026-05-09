import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "OKX Lite Design System — Noel Cheung",
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
        <article className="max-w-site mx-auto px-5 md:px-8 lg:px-14">

          {/* Breadcrumb */}
          <div style={{ paddingTop: 48, paddingBottom: 24, borderBottom: "1px solid var(--rule)" }}>
            <Link
              href="/work"
              className="eyebrow hover:text-accent transition-colors duration-200"
            >
              ← All work
            </Link>
          </div>

          {/* Case hero */}
          <section style={{ padding: "clamp(64px,9vw,96px) 0" }}>
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-2 flex flex-col gap-5">
                <CaseMeta label="Case" value={`№ ${cs.num}`} />
                <CaseMeta label="Year" value="2022–23" />
              </div>
              <div className="md:col-span-3 flex flex-col gap-5">
                <CaseMeta label="Role" value={cs.role} />
                <CaseMeta label="Status" value="Shipped" />
              </div>
              <div className="md:col-span-7">
                <p className="eyebrow mb-4">{cs.meta}</p>
                <h1 className="display" style={{ fontSize: "clamp(36px, 6vw, 80px)", marginBottom: 32 }}>
                  OKX Lite Design System.
                </h1>
                <p style={{ fontSize: 20, lineHeight: 1.6, color: "var(--ink)", opacity: 0.8, margin: 0 }}>
                  {cs.body}
                </p>
              </div>
            </div>

            {/* Impact band */}
            <div style={{
              marginTop: 64,
              paddingTop: 32,
              paddingBottom: 32,
              borderTop: "1px solid var(--rule)",
              borderBottom: "1px solid var(--rule)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            }}>
              {cs.impact.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0 16px",
                    borderRight: i < cs.impact.length - 1 ? "1px solid var(--rule)" : "none",
                  }}
                >
                  {stat.value && (
                    <p className="display tabular" style={{ fontSize: "clamp(28px, 4.5vw, 56px)", marginBottom: 8 }}>
                      {stat.value}
                    </p>
                  )}
                  <p className="eyebrow" style={{ marginTop: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Journey */}
          <section style={{ padding: "clamp(48px,6vw,64px) 0" }}>
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 md:col-start-3 flex flex-col gap-16">

                <div>
                  <h2 className="display" style={{ fontSize: "clamp(28px, 3.4vw, 40px)", marginBottom: 24 }}>
                    The Journey
                  </h2>
                  <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink)", opacity: 0.8, margin: 0 }}>
                    How we built a comprehensive design system from the ground up.
                  </p>
                </div>

                <Phase
                  num="01"
                  title="Audit & Alignment"
                  content="We began with a comprehensive audit of existing UI patterns and inconsistencies across the platform. This phase involved close collaboration with product teams to understand their needs and pain points. We established clear goals and metrics for the design system, ensuring alignment with business objectives and technical constraints."
                  outcome="Unified vision and roadmap"
                />
                <Phase
                  num="02"
                  title="System Build"
                  content="With a clear direction established, we created a comprehensive token architecture as the foundation of our system. We developed component libraries with careful attention to variants, states, and accessibility. This phase involved close collaboration with engineering to ensure technical feasibility and implementation efficiency."
                  outcome="1000+ components and patterns"
                />
                <Phase
                  num="03"
                  title="Rollout & Governance"
                  content="The final phase focused on driving adoption across teams through education, workshops, and support. We established a clear governance model with contribution guidelines, review processes, and maintenance procedures. We implemented feedback loops to continuously improve the system based on real-world usage."
                  outcome="95% adoption across teams"
                />
              </div>
            </div>
          </section>

          <hr style={{ border: 0, borderTop: "1px solid var(--rule)", margin: "0 0 0" }} />

          {/* Next case */}
          <section style={{ padding: "clamp(64px, 8vw, 96px) 0" }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Next case</p>
            <Link href={next.href} className="group block hover:opacity-70 transition-opacity">
              <h2 className="display" style={{ fontSize: "clamp(28px, 4.6vw, 56px)", margin: 0 }}>
                {next.title}{next.titleEm ? <em>{next.titleEm}</em> : null}{" "}
                <span style={{ display: "inline-block", transition: "transform 0.3s cubic-bezier(.19,1,.22,1)" }} className="group-hover:translate-x-2">
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

function CaseMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow" style={{ marginBottom: 4 }}>{label}</p>
      <p style={{ margin: 0, fontSize: 14 }}>{value}</p>
    </div>
  );
}

function Phase({ num, title, content, outcome }: {
  num: string; title: string; content: string; outcome: string;
}) {
  return (
    <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
        <span className="eyebrow">Phase {num}</span>
        <h3 className="display" style={{ margin: 0, fontSize: "clamp(22px, 2.6vw, 32px)" }}>{title}</h3>
      </div>
      <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink)", opacity: 0.8, marginBottom: 16 }}>{content}</p>
      <p className="eyebrow">Key outcome: {outcome}</p>
    </div>
  );
}
