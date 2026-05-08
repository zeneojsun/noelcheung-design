import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import EngagementsAccordion from "@/components/EngagementsAccordion";
import ServicesAccordion from "@/components/ServicesAccordion";
import NewsletterForm from "@/components/NewsletterForm";
import Reveal from "@/components/Reveal";
import StatsSection from "@/components/StatsSection";
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
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">

          {/* ─────────────────────────────────────────────── HERO */}
          <section className="pt-[70px] pb-16">
            <h1 className="display text-[48px] md:text-[80px] font-semibold leading-[1.05] tracking-[-0.03em] mb-3 max-w-[18ch] rise rise-1">
              Noel helps teams fix and launch products that actually work
            </h1>

            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-10 flex items-center gap-3 rise rise-2">
              {cv.tagline}
            </p>

            <p className="text-lg md:text-xl leading-[1.6] max-w-[640px] mb-12 rise rise-3 text-muted">
              14+ years in design, focused on fintech and crypto. I step into
              complex products, fix what&apos;s broken, and turn them into scalable
              systems — so teams can move faster and ship with confidence.
            </p>

            <StatsSection />
          </section>

          {/* ─────────────────────────────────────────────── CASE STUDIES */}
          <section id="work" className="pt-12 pb-[112px] border-t border-rule">
            <div className="grid md:grid-cols-1 gap-0">
              {homepageCaseStudies.map((c, i) => (
                <Reveal key={c.slug} delay={i * 90}>
                  <WorkCard caseStudy={c} bare />
                </Reveal>
              ))}
            </div>

            <Reveal delay={homepageCaseStudies.length * 90}>
              <div className="mt-10">
                <a
                  href="/work"
                  className="inline-flex items-center h-12 rounded-full px-8 border border-rule font-mono text-sm font-medium text-ink hover:bg-ink hover:text-paper hover:-translate-y-px transition-all duration-200"
                >
                  Learn more
                </a>
              </div>
            </Reveal>
          </section>
        </div>

        {/* ─────────────────────────────────────────────── SELECTED CLIENTS (static grid) */}
        <section className="pt-16 pb-24 border-t border-rule">
          <Reveal>
            <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12 mb-10">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                Clients I&apos;ve served /
              </p>
            </div>
          </Reveal>

          <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10">
              {clientLogos.map((c) => (
                <div key={c.slug} className="flex items-center justify-center h-10">
                  <img
                    src={`/clients/logo-${c.slug}.svg`}
                    alt={c.name}
                    height={40}
                    className="h-10 w-auto brightness-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── bottom container ── */}
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">

          {/* ─────────────────────────────────────────────── ENGAGEMENTS */}
          <section className="pt-16 pb-[120px] border-t border-rule">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
              {/* Left: label + headline */}
              <Reveal>
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-6">
                    Engagements /
                  </p>
                  <h2 className="display text-[28px] md:text-[36px] leading-[1.15] tracking-tight">
                    I&apos;m usually brought in<br />
                    <em>when:</em>
                  </h2>
                </div>
              </Reveal>

              {/* Right: accordion */}
              <Reveal delay={100}>
                <EngagementsAccordion />
              </Reveal>
            </div>
          </section>

          {/* ─────────────────────────────────────────────── SERVICES */}
          <section className="pt-16 pb-[120px] border-t border-rule">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
              {/* Left: label + headline */}
              <Reveal>
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-6">
                    Services /
                  </p>
                  <h2 className="display text-[28px] md:text-[36px] leading-[1.15] tracking-tight">
                    How we work<br />
                    <em>together</em>
                  </h2>
                </div>
              </Reveal>

              {/* Right: accordion */}
              <Reveal delay={100}>
                <ServicesAccordion />
              </Reveal>
            </div>
          </section>

          {/* ─────────────────────────────────────────────── NEWSLETTER */}
          <section className="pt-16 pb-[120px] border-t border-rule">
            <Reveal>
              <h2 className="display text-[22px] font-semibold leading-[1.2] mb-3">
                Newsletter
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-8 max-w-[480px]">
                Exclusive, newsletter-only content once a month. No spam, no nonsense.
              </p>
              <NewsletterForm />
            </Reveal>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
