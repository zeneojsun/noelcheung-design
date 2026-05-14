import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "OKX Lite Design System — Noel Cheung",
  description: "Built OKX Lite's design system from scratch — 98% adoption, 3 months, sole designer. Full DS ecosystem from token architecture to governance.",
};

const S = {
  // shared section wrapper
  section: {
    maxWidth: "calc(900px + clamp(20px, 4vw, 56px) * 2)",
    margin: "0 auto",
    padding: "clamp(64px,8vw,96px) clamp(20px,4vw,56px)",
    borderBottom: "1px solid var(--rule)",
  } as React.CSSProperties,

  sectionLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "var(--muted)",
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 28,
  } as React.CSSProperties,

  sectionH2: {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: "clamp(26px, 3.2vw, 40px)",
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
    marginBottom: 20,
  } as React.CSSProperties,

  body: {
    fontSize: 16,
    lineHeight: 1.75,
    color: "var(--muted)",
    maxWidth: "64ch",
  } as React.CSSProperties,
};

export default function OKXLitePage() {
  const next = caseStudies.find((c) => c.slug === "hsbc-india")!;

  return (
    <>
      <Header />

      <main>
        {/* ── SPLIT HERO ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 68px)" }}
          className="max-md:grid-cols-1 max-md:min-h-0">
          <div style={{
            padding: "clamp(48px,8vh,96px) clamp(20px,4vw,56px) clamp(48px,6vh,72px)",
            display: "flex", flexDirection: "column", justifyContent: "center",
            borderRight: "1px solid var(--rule)",
          }} className="max-md:border-r-0 max-md:border-b border-rule">
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 28 }}>
              Case Study · Design Systems · 2022–23
            </p>
            <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 72px)", marginBottom: 28 }}>
              OKX Lite<br /><em>Design System</em><br />0 → 1
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.3vw, 19px)", lineHeight: 1.6, color: "var(--muted)", maxWidth: "44ch", marginBottom: 28 }}>
              Built a complete design system for a brand new crypto platform — from zero — in 3 months. Sole designer. 98% adoption.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Design Systems", "0→1", "Crypto / Fintech", "Figma", "Cross-functional"].map((t) => (
                <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", padding: "5px 12px", border: "1px solid var(--rule)", borderRadius: 3, color: "var(--muted)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{
            background: "linear-gradient(135deg, #1a1815 0%, #2a2620 55%, #a8421e 130%)",
            display: "flex", alignItems: "flex-end",
            padding: "clamp(24px, 4vw, 48px)",
            minHeight: 260,
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,.4)" }}>
              OKX Lite — product UI
            </span>
          </div>
        </div>

        {/* ── METRICS STRIP ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
          className="max-sm:grid-cols-1">
          {[
            { num: "98%", label: "Component adoption\nat rollout" },
            { num: "3mo",  label: "Zero to full system\ndelivered" },
            { num: "1→7", label: "Design team scaled,\nsystem held" },
          ].map((m, i, arr) => (
            <div key={m.num} style={{
              padding: "clamp(28px,4vw,48px) clamp(24px,3vw,40px)",
              borderRight: i < arr.length - 1 ? "1px solid var(--rule)" : "none",
            }} className="max-sm:border-r-0 max-sm:border-b border-rule last:border-b-0">
              <p className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: .95, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums", marginBottom: 10 }}>
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
          <h2 className="display" style={S.sectionH2}>A new product.<br />No system to inherit.</h2>
          <p style={S.body}>OKX Lite was OKGroup&apos;s first platform targeting beginner crypto users outside China — a sister product to OKX Pro, but built for a completely different audience. When the project launched, there was no design system, no component library, no established patterns.</p>
          <p style={{ ...S.body, marginTop: 14 }}>I was brought in as the sole design systems designer to build everything from scratch — concurrent with the product team building the MVP.</p>
          <Pullquote>"Not adapting an existing system. Starting from a blank Figma file with a product that didn&apos;t exist yet."</Pullquote>
          <ImgBlock caption="OKX Lite — final product UI (dark mode, wallet view)" label="OKX Lite — wallet and exchange UI" />
        </div>

        {/* ── 02 APPROACH ── */}
        <div style={S.section}>
          <SectionLabel>02 — Approach</SectionLabel>
          <h2 className="display" style={S.sectionH2}>Align first.<br />Build second.</h2>
          <p style={S.body}>Before opening Figma, I interviewed every designer on the team to understand their workflows, pain points, and expectations. I then presented to a 50+ person product org — designers, engineers, PMs — to align on what the system would deliver and what it wouldn&apos;t.</p>
          <p style={{ ...S.body, marginTop: 14 }}>The key decision: <strong style={{ color: "var(--ink)", fontWeight: 500 }}>stay nimble.</strong> This was an MVP. Over-engineering the system would slow the product down. I deliberately scoped to what the team needed to ship, not what a mature DS would eventually look like.</p>
          <ImgBlock caption="DS workflow design — audit process, contribution flow, Today/Tomorrow architecture planning" label="DS workflow — audit process, contribution flow, architecture planning" />
        </div>

        {/* ── 03 THE SYSTEM ── */}
        <div style={S.section}>
          <SectionLabel>03 — The System</SectionLabel>
          <h2 className="display" style={S.sectionH2}>What got built.</h2>
          <p style={S.body}>In 3 months, I delivered a complete DS ecosystem — not just a component library, but the full operational infrastructure around it.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--rule)", margin: "32px 0" }}
            className="max-sm:grid-cols-1">
            {[
              { n: "01", title: "Foundation", desc: "Colour, typography, spacing, iconography — the base layer everything builds from." },
              { n: "02", title: "Component Library", desc: "<20 core components with high product coverage. Scoped intentionally for MVP velocity." },
              { n: "03", title: "Theme Library", desc: "Dark mode built-in from day one. Light mode delivered later in a 2–3 week sprint." },
              { n: "04", title: "Governance Flow", desc: "How new components get proposed, reviewed, and merged. Contribution protocol for the growing team." },
              { n: "05", title: "Handoff Workflow", desc: "Design-to-engineering process, specs, and async documentation. Built for remote, cross-timezone teams." },
              { n: "06", title: "A11y + Localisation", desc: "Accessibility and localisation built into the foundation — not retrofitted after launch." },
            ].map((d, i) => (
              <div key={d.n} style={{ padding: 24, borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--rule)" : "none", borderBottom: i < 3 ? "1px solid var(--rule)" : "none" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "var(--muted)", display: "block", marginBottom: 10 }}>{d.n}</span>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 15, letterSpacing: "-0.015em", marginBottom: 6 }}>{d.title}</p>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>

          <ImgBlock caption="Figma DS file architecture — Asset, Foundation, Backlog, Theme Library, Illustration Library, Sandbox, Task Logs + Async documentation" label="Figma DS file architecture" />
          <ImgBlock caption="Component backlog — bilingual naming (EN + 中文) · Sprint-scheduled delivery · Button, Checkbox, Switch, Segmented Control, Tag, Chip, Badge, Tabs, Input, Sheet, Skeleton and more" label="Component backlog — bilingual naming (EN + 中文)" />
        </div>

        {/* ── 04 CHALLENGE ── */}
        <div style={S.section}>
          <SectionLabel>04 — Challenge</SectionLabel>
          <h2 className="display" style={S.sectionH2}>Scaling the system<br />without scaling the team.</h2>
          <p style={S.body}>As OKX Lite grew from 2 to 7 designers and dozens of PMs, the DS team stayed the same size: me. I reviewed every component contribution, maintained governance, trained designers who were still building their UI foundations, and continued supporting product work directly.</p>
          <p style={{ ...S.body, marginTop: 14 }}>The most compressed moment: leadership decided OKX Lite needed a light mode. No additional resource allocated. I mapped the entire colour system to the new palette systematically — then drove the full delivery pipeline: design review, product review, developer handoff, QA coordination, and launch. Under 3 weeks. With 2–3 developers. No PM. No dedicated QA. Just end-to-end ownership.</p>
          <Pullquote>"The system had to scale even when the team building it didn&apos;t. That&apos;s the real test of whether you built the right thing."</Pullquote>
          <ImgBlock caption="Dark mode → Light mode · Complete theme delivered in under 3 weeks · Colour mapping across every component and screen" label="Dark mode → Light mode · Complete theme in under 3 weeks" />
        </div>

        {/* ── 05 ENABLEMENT ── */}
        <div style={S.section}>
          <SectionLabel>05 — Enablement</SectionLabel>
          <h2 className="display" style={S.sectionH2}>Teaching the system.<br /><em>1,050 videos.</em></h2>
          <p style={S.body}>A design system only works if people actually know how to use it. With a team growing faster than I could support 1-on-1, I built a parallel async education layer — recording every component, every Figma workflow, every contribution process, and bi-weekly DS updates as Loom videos.</p>
          <p style={{ ...S.body, marginTop: 14 }}>Component tutorials. Library walkthroughs. Audit recordings. Reminder videos for recurring questions. Over time this became a searchable, self-serve knowledge base that let designers onboard themselves — and freed me to keep building.</p>
          <Pullquote>"Not just built the system. Documented every part of it. 1,050 recordings. Solo. Because a system no one understands is just a Figma file."</Pullquote>
          <ImgBlock caption="Loom async video library — 1,050 recordings · Component tutorials, library walkthroughs, bi-weekly DS updates, contribution guides" label="Loom async library — 1,050 recordings" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--rule)", margin: "32px 0" }}
            className="max-sm:grid-cols-1">
            {[
              { label: "Format",   body: "Short clips (30sec–7min) per component or workflow. Long-form (25min+) for audits and onboarding." },
              { label: "Coverage", body: "Every component documented. Figma local library, tokens, contribution flow, bi-weekly updates." },
              { label: "Outcome",  body: "Designers self-onboarded. Reduced repeat questions. System knowledge survived team turnover." },
            ].map((c, i) => (
              <div key={c.label} style={{ padding: "20px 24px", borderRight: i < 2 ? "1px solid var(--rule)" : "none" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "var(--muted)", display: "block", marginBottom: 10 }}>{c.label}</span>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 06 RESULTS ── */}
        <div style={S.section}>
          <SectionLabel>06 — Results</SectionLabel>
          <h2 className="display" style={S.sectionH2}>98% adoption.<br />System outlasted the platform.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: "1px solid var(--rule)", margin: "32px 0" }}
            className="max-sm:grid-cols-1">
            {[
              { num: "98%",  label: "Component adoption measured from usage data at initial rollout — across the full product team." },
              { num: "95%",  label: "Adoption maintained one year later with minimal component detachment — system held without intervention." },
              { num: "1→7",  label: "Design team scaled 7× while system remained the single source of truth, maintained by one person." },
              { num: "→ OKX", label: "OKX Lite later merged into OKX main app. DS work informed group-level design system development." },
            ].map((r, i) => (
              <div key={r.num} style={{ padding: "28px 24px", borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none", borderBottom: i < 2 ? "1px solid var(--rule)" : "none" }}>
                <p className="display" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", letterSpacing: "-0.04em", lineHeight: .95, marginBottom: 10 }}>{r.num}</p>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 07 REFLECTION ── */}
        <div style={S.section}>
          <SectionLabel>07 — Reflection</SectionLabel>
          <h2 className="display" style={S.sectionH2}>What I&apos;d do differently.</h2>
          <div style={{ padding: "28px 32px", border: "1px solid var(--rule)", background: "var(--hover)", borderRadius: 4 }}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)" }}>
              I&apos;d push harder — earlier — for resourcing commitments tied to product team growth. A design system is infrastructure. When the product team scales 4×, the DS function needs to scale too. I learned to frame this not as a designer&apos;s ask, but as a business risk argument: under-resourced infrastructure creates compounding technical and design debt that eventually slows the whole org down.
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
    <p style={{
      fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
      letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)",
      display: "flex", alignItems: "center", gap: 14, marginBottom: 28,
    }}>
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

function ImgBlock({ caption, label }: { caption: string; label: string }) {
  return (
    <div style={{ margin: "32px 0", border: "1px solid var(--rule)", borderRadius: 4, overflow: "hidden" }}>
      <div style={{
        aspectRatio: "16/7", width: "100%",
        background: "linear-gradient(135deg, #1a1815 0%, #2a2620 55%, #a8421e 130%)",
        display: "flex", alignItems: "flex-end", padding: "16px 20px",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,.4)" }}>
          {label}
        </span>
      </div>
      <div style={{ padding: "12px 16px", borderTop: "1px solid var(--rule)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--muted)" }}>
        {caption}
      </div>
    </div>
  );
}
