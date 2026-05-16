import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "HSBC India Wealth Account — Noel Cheung",
  description: "Failed two HSBC Global Design Standard reviews. Rescued, redesigned, and shipped in 2 months.",
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

const HERO_GRADIENT = "linear-gradient(135deg, #bb1432 0%, #6b0d1d 100%)";

export default function HSBCIndiaPage() {
  const next = caseStudies.find((c) => c.slug === "melco")!;

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
              Case Study · UX/UI Design · 2021
            </p>
            <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 72px)", marginBottom: 28 }}>
              HSBC India<br /><em>Wealth Account</em><br />Turnaround
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.6, color: "var(--muted)", maxWidth: "44ch", marginBottom: 28 }}>
              A shelved product that failed two rounds of HSBC Global Design Standard review. Rescued, redesigned, and shipped in 2 months.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Fintech", "Turnaround", "UX/UI", "Mobile + Web", "3rd Party Integration"].map((t) => (
                <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", padding: "5px 12px", border: "1px solid var(--rule)", borderRadius: 3, color: "var(--muted)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{ background: HERO_GRADIENT, display: "flex", alignItems: "flex-end", padding: "clamp(24px, 4vw, 48px)", minHeight: 260 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,.4)" }}>
              HSBC India — investment screen, wealth management
            </span>
          </div>
        </div>

        {/* ── METRICS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
          className="max-sm:grid-cols-2">
          {[
            { num: "2×",   label: "Failed HSBC Global\nDesign Standard reviews" },
            { num: "2mo",  label: "Full turnaround\nto ship" },
            { num: "6mo",  label: "UXUI lead\nengagement" },
            { num: "✓",    label: "Passed HSBC Global\nDesign Standard" },
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
          <h2 className="display" style={S.sectionH2}>Failed twice.<br />Project at risk.</h2>
          <p style={S.body}>HSBC India&apos;s Open Wealth Account project — allowing Indian customers to open wealth management accounts and access ICICI equity trading — had stalled. Two rounds of HSBC Global Design Standard review had failed: the UI didn&apos;t meet HSBC&apos;s global standards, and the third-party ICICI flow was incomplete.</p>
          <p style={{ ...S.body, marginTop: 14 }}>Without passing the review, the product couldn&apos;t launch. The project was at risk of being shelved entirely. I was brought in as UXUI lead to rescue it.</p>
          <Pullquote>&ldquo;Two failed reviews. Incomplete third-party flow. A tight deadline. The kind of brief that tells you exactly what needs to happen.&rdquo;</Pullquote>
          <ImgBlock gradient={HERO_GRADIENT} label="Role: UXUI Design Lead · 6 months · Wireframe → Visual → Testing → Development → Launch" caption="Role: UXUI Design Lead · 6 months · Wireframe → Visual → Testing → Development → Launch · Passed HSBC Global Design Standard" />
        </div>

        {/* ── 02 APPROACH ── */}
        <div style={S.section}>
          <SectionLabel>02 — Approach</SectionLabel>
          <h2 className="display" style={S.sectionH2}>Diagnose first.<br />Then fix both problems.</h2>
          <p style={S.body}>Two distinct problems required two distinct approaches — run in parallel to hit the deadline.</p>

          <div style={{ display: "flex", flexDirection: "column", border: "1px solid var(--rule)", margin: "32px 0" }}>
            {[
              { num: "Problem 01", title: "UI not meeting HSBC Global Design Standard", desc: "Aligned with internal HSBC designers to understand exactly where the UI fell short. Audited every screen against the standard, then fine-tuned systematically — typography, spacing, component usage, interaction patterns. No guesswork." },
              { num: "Problem 02", title: "Incomplete ICICI third-party flow",           desc: "Embedded directly with the tech team to understand the vendor bottleneck — what ICICI's API could and couldn't support, where the handoff broke down. Designed a complete end-to-end flow accounting for all edge cases: eligibility checking, account creation, error states, and equity trading entry." },
              { num: "Process",    title: "Review → Due diligence → Present → Finalise → Ship", desc: "2–4 weeks of design work, followed by rigorous review, due diligence, and a big product group presentation. Finalised across both mobile and web. Delivered click prototype, UX journey map, and final deck with PM. Then QA and ship." },
            ].map((s, i, arr) => (
              <div key={s.num} style={{ padding: 24, borderBottom: i < arr.length - 1 ? "1px solid var(--rule)" : "none", display: "grid", gridTemplateColumns: "100px 1fr", gap: 24, alignItems: "start" }}
                className="max-sm:grid-cols-1 max-sm:gap-2">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", paddingTop: 3 }}>{s.num}</span>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15, letterSpacing: "-0.015em", marginBottom: 6 }}>{s.title}</p>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <ImgBlock gradient={HERO_GRADIENT} label="HSBC India IOWA flow — entry point, eligibility, ICICI redirection, account creation, equity trading" caption="IN IOWA complete UX flow — Entry point → Eligibility checking → ICICI redirection → Account creation + equity trading · All error states and edge cases covered" />
        </div>

        {/* ── 03 THE WORK ── */}
        <div style={S.section}>
          <SectionLabel>03 — The Work</SectionLabel>
          <h2 className="display" style={S.sectionH2}>End-to-end.<br />Nothing left incomplete.</h2>
          <p style={S.body}>The deliverables covered the full product lifecycle — not just screens, but the complete artefact set needed to get a complex, multi-party financial product through review and into production.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--rule)", margin: "32px 0" }}
            className="max-sm:grid-cols-1">
            {[
              { label: "Design",   title: "UI redesign",          desc: "Full visual overhaul to meet HSBC Global Design Standard. Every screen audited and rebuilt." },
              { label: "UX",       title: "Complete ICICI flow",   desc: "End-to-end third-party integration flow including all error states, eligibility paths, and edge cases." },
              { label: "Delivery", title: "Full artefact set",     desc: "Click prototype, UX journey map, final deck, mobile + web specs. QA support through to launch." },
            ].map((d, i) => (
              <div key={d.label} style={{ padding: 24, borderRight: i < 2 ? "1px solid var(--rule)" : "none" }} className="max-sm:border-r-0 max-sm:border-b border-rule last:border-b-0">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 10 }}>{d.label}</span>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15, letterSpacing: "-0.015em", marginBottom: 6 }}>{d.title}</p>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>

          <ImgBlock gradient={HERO_GRADIENT} label="HSBC India — investment screen · Wealth Management · ICICI equity trading integration" caption="Final product — Investment screen · Wealth Management Account · ICICI equity trading integration · Wealth insights feed" />
        </div>

        {/* ── 04 RESULTS ── */}
        <div style={S.section}>
          <SectionLabel>04 — Results</SectionLabel>
          <h2 className="display" style={S.sectionH2}>Third review.<br />Passed.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: "1px solid var(--rule)", margin: "32px 0" }}
            className="max-sm:grid-cols-1">
            {[
              { num: "Passed",   label: "HSBC Global Design Standard — on the third review, after two prior failures before I joined." },
              { num: "2mo",      label: "Full turnaround from brief to ship — UI redesign, complete ICICI flow, review, QA, and launch." },
              { num: "Shipped",  label: "Product launched across mobile and web. Indian customers could open wealth accounts and access ICICI equity trading." },
              { num: "Complete", label: "Every deliverable covered — click prototype, journey map, final deck, specs, QA. Nothing left for others to finish." },
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
          <h2 className="display" style={S.sectionH2}>What made it work.</h2>
          <div style={{ padding: "28px 32px", border: "1px solid var(--rule)", background: "var(--hover)", borderRadius: 4 }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)" }}>
              The project had failed twice because it was treated as a design problem alone. The ICICI integration wasn&apos;t a UX issue — it was a technical constraint that hadn&apos;t been surfaced properly. Going directly to the tech team to understand the vendor bottleneck was the decision that unlocked the whole flow. When design and engineering speak the same language about constraints, the solution becomes obvious. The lesson: on complex financial products, the UX lead needs to be inside the technical conversation, not waiting for a brief.
            </p>
          </div>
        </div>

        {/* ── NEXT CASE ── */}
        <div style={{ maxWidth: "calc(900px + clamp(20px,4vw,56px) * 2)", margin: "0 auto", padding: "clamp(64px,8vw,96px) clamp(20px,4vw,56px)", borderTop: "1px solid var(--rule)" }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Next case</p>
          <Link href={next.href} className="group block hover:opacity-70 transition-opacity">
            <h2 className="display" style={{ fontSize: "clamp(28px, 4.6vw, 56px)", margin: 0 }}>
              {next.title}{" "}
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

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: "32px 0", padding: "24px 28px", borderLeft: "2px solid var(--ink)", background: "var(--hover)" }}>
      <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(16px, 1.6vw, 20px)", letterSpacing: "-0.02em", lineHeight: 1.45, fontStyle: "italic", color: "var(--ink)" }}>
        {children}
      </p>
    </div>
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
