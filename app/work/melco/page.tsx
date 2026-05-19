import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Melco Member App Design System — Noel Cheung",
  description: "Led 0→1 design system across 3 resort brands. 1,000+ components. 40% time savings.",
};

const S = {
  section: {
    maxWidth: "calc(900px + clamp(20px, 4vw, 56px) * 2)",
    margin: "0 auto",
    padding: "clamp(64px,8vw,96px) clamp(20px,4vw,56px)",
    borderBottom: "1px solid var(--rule)",
  } as React.CSSProperties,
  sectionLabel: {
    fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase" as const,
    color: "var(--muted)", display: "flex", alignItems: "center",
    gap: 14, marginBottom: 28,
  } as React.CSSProperties,
  sectionH2: {
    fontFamily: "var(--font-display)", fontWeight: 500,
    fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.025em",
    lineHeight: 1.1, marginBottom: 20,
  } as React.CSSProperties,
  body: {
    fontSize: 16, lineHeight: 1.75, color: "var(--muted)", maxWidth: "64ch",
  } as React.CSSProperties,
};

const HERO_GRADIENT = "linear-gradient(135deg, #0e3b34 0%, #1f6e5f 100%)";

export default function MelcoPage() {
  const next = caseStudies.find((c) => c.slug === "a2ui")!;

  return (
    <>
      <Header />
      <main>
        {/* ── SPLIT HERO ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--rule)", marginTop: 24 }}
          className="max-md:grid-cols-1">
          <div style={{
            padding: "clamp(48px,8vh,96px) clamp(20px,4vw,56px) clamp(48px,6vh,72px)",
            display: "flex", flexDirection: "column", justifyContent: "center",
            borderRight: "1px solid var(--rule)",
          }} className="max-md:border-r-0 max-md:border-b border-rule">
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 28 }}>
              Case Study · Design Systems · 2019–21
            </p>
            <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 72px)", marginBottom: 28 }}>
              Melco<br /><em>Member App</em><br />Design System
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.6, color: "var(--muted)", maxWidth: "44ch", marginBottom: 28 }}>
              Led a 0→1 design system for Melco&apos;s member app — spanning three resort brands, 1,000+ components, and a team of 4 designers. Delivered 40% time savings and 2× work efficiency.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Design Systems", "Project Lead", "0→1", "Hospitality / Gaming", "APAC"].map((t) => (
                <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", padding: "5px 12px", border: "1px solid var(--rule)", borderRadius: 3, color: "var(--muted)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{ background: HERO_GRADIENT, display: "flex", alignItems: "flex-end", padding: "clamp(24px, 4vw, 48px)", minHeight: 260 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,.4)" }}>
              Melco member app — brand identity
            </span>
          </div>
        </div>

        {/* ── METRICS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
          className="max-sm:grid-cols-2">
          {[
            { num: "1000+", label: "Reusable components\ndelivered" },
            { num: "40%",   label: "Time & resource\nsavings" },
            { num: "2×",    label: "Team work\nefficiency" },
            { num: "3",     label: "Resort brands\nserved" },
          ].map((m, i, arr) => (
            <div key={m.num} style={{
              padding: "clamp(24px,3vw,40px) clamp(20px,2.5vw,36px)",
              borderRight: i < arr.length - 1 ? "1px solid var(--rule)" : "none",
            }} className="max-sm:even:border-r-0 max-sm:border-b border-rule">
              <p className="display" style={{ fontSize: "clamp(28px, 4vw, 56px)", lineHeight: .95, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums", marginBottom: 10 }}>
                {m.num}
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── 01 CONTEXT ── */}
        <div style={S.section}>
          <SectionLabel>01 — Context</SectionLabel>
          <h2 className="display" style={S.sectionH2}>One app.<br />Three resort brands.<br />No system.</h2>
          <p style={S.body}>Melco Resorts operates three flagship properties in Macau — City of Dreams, Studio City, and Altira. Their member app needed to serve guests across all three brands, in multiple languages across the APAC region, with a consistent and premium experience throughout.</p>
          <p style={{ ...S.body, marginTop: 14 }}>No design system existed. The team was building features without a shared language, creating inconsistency and duplicating effort. As project lead, I was brought in to fix this from the ground up.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--rule)", margin: "32px 0" }}
            className="max-sm:grid-cols-1">
            {[
              { name: "City of Dreams", sub: "Flagship · Cotai Strip" },
              { name: "Studio City",    sub: "Entertainment resort" },
              { name: "Altira",         sub: "Boutique luxury" },
            ].map((b, i) => (
              <div key={b.name} style={{ padding: "20px 24px", borderRight: i < 2 ? "1px solid var(--rule)" : "none", textAlign: "center" }}
                className="max-sm:border-r-0 max-sm:border-b border-rule last:border-b-0 max-sm:text-left">
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15, letterSpacing: "-0.015em", marginBottom: 4 }}>{b.name}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--muted)" }}>{b.sub}</p>
              </div>
            ))}
          </div>

          <ImgBlock gradient={HERO_GRADIENT} label="Melco member app overview — 1,000+ reusable components · holistic brand system" caption="Overview — 1,000+ reusable components · Best-in-class usability · Holistic brand system across all three resorts" />
        </div>

        {/* ── 02 APPROACH ── */}
        <div style={S.section}>
          <SectionLabel>02 — Approach</SectionLabel>
          <h2 className="display" style={S.sectionH2}>Full lifecycle.<br />Nothing outsourced.</h2>
          <p style={S.body}>This wasn&apos;t a component library handoff — it was a full design system engagement from strategy to evaluation. I led every phase with a team of 4 designers and 2 developers across 12 months.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid var(--rule)", margin: "32px 0" }}
            className="max-sm:grid-cols-2">
            {[
              { phase: "Phase 1", title: "Discover", desc: "Ideation · Audit · IA · User interviews" },
              { phase: "Phase 2", title: "Build",    desc: "Design system · Components · Templates · Implementation" },
              { phase: "Phase 3", title: "Launch",   desc: "Education · Team enablement · QA · Ship" },
              { phase: "Phase 4", title: "Evaluate", desc: "Metrics · Adoption · Continuous improvement" },
            ].map((p, i) => (
              <div key={p.phase} style={{ padding: 20, borderRight: i < 3 ? "1px solid var(--rule)" : "none", borderBottom: "1px solid var(--rule)" }}
                className="max-sm:even:border-r-0">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 8 }}>{p.phase}</span>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14, letterSpacing: "-0.01em", marginBottom: 6 }}>{p.title}</p>
                <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <ImgBlock gradient={HERO_GRADIENT} label="Melco Design System — colour tokens, typography, component library" caption="Melco Design System — colour system, typography scale, component architecture · Project Lead · 12 months · 4 designers + 2 developers" />
        </div>

        {/* ── 03 THE WORK ── */}
        <div style={S.section}>
          <SectionLabel>03 — The Work</SectionLabel>
          <h2 className="display" style={S.sectionH2}>Four contribution<br />areas.</h2>
          <p style={S.body}>The engagement covered the full breadth of what a design system needs to do — not just components, but the product experiences built on top of them.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: "1px solid var(--rule)", margin: "32px 0" }}
            className="max-sm:grid-cols-1">
            {[
              { label: "Foundation",      title: "Melco Design System",          desc: "Led all aspects of the design language system from scratch — research, planning, execution, evaluation. From UXUI to product development, systematised the design solution across all three resort brands." },
              { label: "Transformation",  title: "Before / After — Limo Booking", desc: "Redesigned Melco's premium limousine booking experience. Enabled the team to build stunning design leveraging the system — holistic brand personality spread across the entire app." },
              { label: "Personalisation", title: '"How To" Experience',           desc: "Optimised user flow and pattern behaviour for each feature. Personalised across multiple languages for the APAC region — Chinese, English, and beyond." },
              { label: "Scalability",     title: "Template in Solution",          desc: "Defined the latest UI solution and built it into reusable page templates to guide designers and developers. Improved work efficiency and design consistency across all features." },
            ].map((d, i) => (
              <div key={d.label} style={{ padding: 24, borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none", borderBottom: i < 2 ? "1px solid var(--rule)" : "none" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 10 }}>{d.label}</span>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15, letterSpacing: "-0.015em", marginBottom: 6 }}>{d.title}</p>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{d.desc}</p>
              </div>
            ))}
          </div>

          <ImgBlock gradient={HERO_GRADIENT} label="Melco limo booking — before and after redesign · personalised APAC how-to experience" caption={'Limo booking before/after · Personalised “How To” experience across APAC languages'} />
          <ImgBlock gradient={HERO_GRADIENT} label="Melco limo booking redesign — Explore the Best of Melco · vehicle class selection" caption="Limo booking redesign — Melco Premium Limousine Service · Vehicle class selection · Personal data flow" />
        </div>

        {/* ── 04 RESULTS ── */}
        <div style={S.section}>
          <SectionLabel>04 — Results</SectionLabel>
          <h2 className="display" style={S.sectionH2}>1,000+ components.<br />40% faster.<br />2× efficient.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: "1px solid var(--rule)", margin: "32px 0" }}
            className="max-sm:grid-cols-1">
            {[
              { num: "1,000+", label: "Reusable components consolidated into one holistic design language system — pattern behaviour, design principles, and UXUI all unified." },
              { num: "40%",    label: "Time and resource savings measured after system adoption — teams building faster with less duplication across all three resort brands." },
              { num: "2×",     label: "Work efficiency improvement — designers and developers building from the same system, aligned on patterns, not reinventing them." },
              { num: "3",      label: "City of Dreams, Studio City, and Altira — all served by a single design system with multi-language support across the APAC region." },
            ].map((r, i) => (
              <div key={r.num} style={{ padding: "28px 24px", borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none", borderBottom: i < 2 ? "1px solid var(--rule)" : "none" }}>
                <p className="display" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", letterSpacing: "-0.04em", lineHeight: .95, marginBottom: 10 }}>{r.num}</p>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 05 REFLECTION ── */}
        <div style={S.section}>
          <SectionLabel>05 — Reflection</SectionLabel>
          <h2 className="display" style={S.sectionH2}>What leading a DS<br />team actually means.</h2>
          <div style={{ padding: "28px 32px", border: "1px solid var(--rule)", background: "var(--hover)", borderRadius: 4 }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)" }}>
              Leading a design system with 4 designers is a fundamentally different challenge from building one solo. The hardest part isn&apos;t the components — it&apos;s keeping the team&apos;s design decisions coherent over 12 months across three distinct brand identities. The discipline that made it work was treating design principles as non-negotiable constraints, not guidelines. When everyone builds from the same principles, the system stays coherent even as individual features diverge. Evaluation isn&apos;t the end of a project — it&apos;s the start of the next iteration.
            </p>
          </div>
        </div>

        {/* ── NEXT CASE ── */}
        <div style={{ maxWidth: "calc(900px + clamp(20px,4vw,56px) * 2)", margin: "0 auto", padding: "clamp(64px,8vw,96px) clamp(20px,4vw,56px)", borderTop: "1px solid var(--rule)" }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Next case</p>
          <Link href={next.href} className="group block hover:opacity-70 transition-opacity">
            <h2 className="display" style={{ fontSize: "clamp(28px, 4.6vw, 56px)", margin: 0 }}>
              {next.title}<em>{next.titleEm}</em>{" "}
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </h2>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
      {children}
      <span style={{ flex: "0 0 48px", height: 1, background: "var(--rule)", display: "block" }} />
    </p>
  );
}

function ImgBlock({ gradient, caption, label }: { gradient: string; caption: string; label: string }) {
  return (
    <div style={{ margin: "32px 0", border: "1px solid var(--rule)", borderRadius: 4, overflow: "hidden" }}>
      <div style={{ aspectRatio: "16/7", width: "100%", background: gradient, display: "flex", alignItems: "flex-end", padding: "16px 20px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.4)" }}>{label}</span>
      </div>
      <div style={{ padding: "12px 16px", borderTop: "1px solid var(--rule)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--muted)" }}>
        {caption}
      </div>
    </div>
  );
}
