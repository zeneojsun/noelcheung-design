import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import EngagementsAccordion from "@/components/EngagementsAccordion";
import { cv } from "@/lib/cv";
import { caseStudies } from "@/lib/case-studies";

const clientLogos = [
  { name: "HSBC", slug: "hsbc" },
  { name: "OKX", slug: "okx" },
  { name: "Melco", slug: "melco" },
  { name: "Generali", slug: "generali" },
  { name: "HKJC", slug: "hkjc" },
  { name: "OSL", slug: "osl" },
  { name: "Hong Huan", slug: "hong-huan" },
  { name: "Garlican", slug: "garlican" },
  { name: "Ralph Lauren", slug: "ralph-lauren" },
  { name: "Macy's", slug: "macys" },
  { name: "Fung Group", slug: "fung-group" },
  { name: "Eslite 誠品", slug: "eslite" },
];

const outcomes = [
  { metric: "$300M+", label: "value saved across client projects" },
  { metric: "10+", label: "enterprise DX products shipped" },
  { metric: "20+", label: "clients served, from MNCs to startups" },
];

export default function Home() {
  const homepageCaseStudies = caseStudies.filter((c) => c.slug !== "a2ui");

  return (
    <>
      <Header />

      <main>
        {/* ── top container ── */}
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
              14+ years in design, focused on fintech and crypto. I step into
              complex products, fix what&apos;s broken, and turn them into scalable
              systems — so teams can move faster and ship with confidence.
            </p>

            <div className="rise rise-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium tracking-[0.02em] bg-ink text-paper hover:bg-ink/85 transition-colors"
              >
                Request availability
              </a>
            </div>
          </section>

          {/* ─────────────────────────────────────────────── OUTCOMES */}
          <section className="py-16 md:py-20 border-t border-rule">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                Outcomes /
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
              {outcomes.map((o, i) => (
                <div key={i} className="pt-5">
                  <p className="display text-[64px] md:text-[80px] leading-[1] tracking-tight mb-3 tabular-nums font-semibold">
                    {o.metric}
                  </p>
                  <p className="text-sm text-muted leading-snug">{o.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─────────────────────────────────────────────── CASE STUDIES */}
          <section id="work" className="py-16 md:py-20 border-t border-rule">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                Case studies /
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-0">
              {homepageCaseStudies.map((c) => (
                <WorkCard key={c.slug} caseStudy={c} bare />
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-muted hover:text-ink transition-colors"
              >
                See all works →
              </a>
            </div>
          </section>
        </div>

        {/* ─────────────────────────────────────────────── SELECTED CLIENTS (full-width carousel) */}
        <section className="py-16 md:py-20 border-t border-rule overflow-hidden">
          <div className="max-w-site mx-auto px-6 md:px-12 mb-10">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Selected clients /
            </p>
          </div>

          <div className="logo-carousel-wrapper overflow-hidden">
            <div className="logo-carousel">
              {[...clientLogos, ...clientLogos].map((c, i) => (
                <div
                  key={`${c.slug}-${i}`}
                  className="flex-shrink-0 flex items-center mx-12"
                  style={{ height: "40px" }}
                  aria-hidden={i >= clientLogos.length ? true : undefined}
                >
                  <img
                    src={`/clients/logo-${c.slug}.svg`}
                    alt={i >= clientLogos.length ? "" : c.name}
                    height={40}
                    className="h-10 w-auto brightness-0 opacity-40 dark:invert hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── bottom container ── */}
        <div className="max-w-site mx-auto px-6 md:px-12">

          {/* ─────────────────────────────────────────────── ENGAGEMENTS */}
          <section className="py-16 md:py-20 border-t border-rule">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
              {/* Left: label + headline */}
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-8">
                  Engagements /
                </p>
                <h2 className="display text-[28px] md:text-[36px] leading-[1.15] tracking-tight">
                  I&apos;m usually brought in<br />
                  <em>when:</em>
                </h2>
              </div>

              {/* Right: accordion */}
              <EngagementsAccordion />
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
