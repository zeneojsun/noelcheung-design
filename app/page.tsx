import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { cv } from "@/lib/cv";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="max-w-site mx-auto px-6 md:px-12">
          {/* ─────────────────────────────────────────────── HERO */}
          <section className="pt-24 md:pt-32 pb-16 md:pb-20">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-10 flex items-center gap-3 rise rise-1">
              <span className="avail-dot-pulse" />
              {cv.tagline}
            </p>

            <h1 className="display text-[48px] md:text-[80px] font-bold leading-[1.05] tracking-[-0.03em] mb-10 max-w-[18ch] rise rise-2">
              I help teams fix and launch products that actually work.
            </h1>

            <p className="text-lg md:text-xl leading-[1.6] max-w-[640px] mb-10 rise rise-3 text-muted">
              Recent years focus on fintech and crypto. I step in to turn
              underperforming products into scalable systems, so your team
              can move faster and ship with confidence.
            </p>

            <div className="rise rise-4">
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-ink text-paper hover:bg-ink/85 transition-colors"
              >
                Request availability →
              </a>
            </div>
          </section>

          {/* ─────────────────────────────────────────────── OUTCOMES */}
          <section className="py-16 md:py-20 border-t border-rule">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                01 — Outcomes
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
              {cv.highlights.slice(0, 3).map((h, i) => (
                <div key={i} className="border-t border-rule pt-5">
                  <p className="display text-[64px] md:text-[80px] leading-[1] tracking-tight mb-3 tabular-nums font-semibold">
                    {h.metric}
                  </p>
                  <p className="text-sm text-muted leading-snug">{h.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─────────────────────────────────────────────── WORK */}
          <section id="work" className="py-16 md:py-20 border-t border-rule">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                02 — Case studies
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-0">
              {caseStudies.map((c) => (
                <WorkCard key={c.slug} caseStudy={c} />
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-muted hover:text-ink transition-colors"
              >
                Full index →
              </a>
            </div>
          </section>

          {/* ─────────────────────────────────────────────── WHAT I DO */}
          <section className="py-16 md:py-20 border-t border-rule">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                03 — Engagements
              </p>
            </div>

            <ol className="space-y-10">
              {[
                {
                  n: "01",
                  title: "A project is off-track, or flagged as non-viable.",
                  body: "Rescue work. Root cause analysis, reframing, and fast execution. At HSBC India, I turned a shelved project into a regional success with 7× submission increase and full GDR approval.",
                },
                {
                  n: "02",
                  title: "A product needs to go from 0 to shippable 1.",
                  body: "Small teams, ambiguous brief, hard deadlines. Build the foundations that hold up through scale — like OKGroup's full design system, shipped and adopted at 95% within four months.",
                },
                {
                  n: "03",
                  title: "A design system is slowing the team down, not speeding them up.",
                  body: "Token architecture, multi-brand governance, cross-team adoption. At Melco, I led a team of 7 to build the company's first design system — 1000+ components, 40% production cost saved.",
                },
                {
                  n: "04",
                  title: "AI is reshaping what design teams ship — and nobody has a clean answer.",
                  body: "Agentic workflows, design-to-code, tokens-to-runtime. I've been building and writing on this since 2024 — including A2UI, ongoing research on design infrastructure for agentic systems.",
                },
              ].map((item) => (
                <li
                  key={item.n}
                  className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-8 border-t border-rule pt-6"
                >
                  <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium leading-[1.35] mb-3 max-w-[50ch]">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted leading-[1.6] max-w-[58ch]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ─────────────────────────────────────────────── CAPABILITIES */}
          <section className="py-16 md:py-20 border-t border-rule">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                04 — Capabilities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
              {cv.expertise.map((e, i) => {
                const [title, rest] = e.split(" — ");
                return (
                  <div key={i} className="border-t border-rule pt-5">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-3 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-base font-medium leading-[1.35] mb-2">
                      {title}
                    </h3>
                    {rest ? (
                      <p className="text-sm text-muted leading-[1.5]">{rest}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ─────────────────────────────────────────────── CLIENTS */}
          <section className="py-16 md:py-20 border-t border-rule">
            <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                05 — Selected clients
              </p>
              <div>
                <p className="text-sm text-muted leading-[1.7]">
                  {siteConfig.clients.join(" · ")}
                </p>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────── ABOUT */}
          <section id="about" className="py-16 md:py-20 border-t border-rule">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                06 — About
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
