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
              15+ years of product design across fintech, crypto, hospitality,
              and enterprise. I step in to turn underperforming products into
              scalable systems, so your team can move faster and ship with
              confidence.
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
                Outcomes
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
              {cv.highlights.slice(0, 3).map((h, i) => (
                <div key={i} className="pt-5">
                  <p className="display text-[64px] md:text-[80px] leading-[1] tracking-tight mb-3 tabular-nums font-semibold">
                    {h.metric}
                  </p>
                  <p className="text-sm text-muted leading-snug">{h.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─────────────────────────────────────────────── CASE STUDIES */}
          <section id="work" className="py-16 md:py-20 border-t border-rule">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                Case studies
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
                Full index →
              </a>
            </div>
          </section>
        </div>

        {/* ─────────────────────────────────────────────── SELECTED CLIENTS (full-width carousel) */}
        <section className="py-16 md:py-20 border-t border-rule overflow-hidden">
          <div className="max-w-site mx-auto px-6 md:px-12 mb-10">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Selected clients
            </p>
          </div>

          <div className="logo-carousel-wrapper overflow-hidden">
            <div className="logo-carousel">
              {[...clientLogos, ...clientLogos].map((c, i) => (
                <div
                  key={`${c.slug}-${i}`}
                  className="flex-shrink-0 w-[120px] mx-6"
                  aria-hidden={i >= clientLogos.length ? true : undefined}
                >
                  <img
                    src={`/clients/logo-${c.slug}.svg`}
                    alt={i >= clientLogos.length ? "" : c.name}
                    width={120}
                    height={60}
                    className="w-full h-auto dark:invert opacity-50 hover:opacity-100 transition-opacity duration-300"
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
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-4">
                Engagements
              </p>
              <p className="display text-[28px] md:text-[36px] leading-[1.15] tracking-tight">
                Why companies reach out.
              </p>
            </div>

            <EngagementsAccordion />
          </section>

          {/* ─────────────────────────────────────────────── CAPABILITIES */}
          <section className="py-16 md:py-20 border-t border-rule">
            <div className="mb-12">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                Capabilities
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

          {/* ─────────────────────────────────────────────── ABOUT */}
          <section id="about" className="py-16 md:py-20 border-t border-rule">
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
