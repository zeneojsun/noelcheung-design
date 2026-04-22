import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { siteConfig } from "@/lib/site-config";
import { caseStudies } from "@/lib/case-studies";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="max-w-site mx-auto px-6 md:px-12">
          {/* HERO */}
          <section className="pt-24 md:pt-32 pb-16 md:pb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rule font-mono text-[11px] font-medium tracking-[0.06em] text-muted mb-10 rise rise-1">
              <span className="avail-dot-pulse" />
              Open to Staff / Lead roles · Q2 2026
            </div>

            <h1 className="display text-[40px] md:text-[80px] leading-[1.08] tracking-[-0.03em] mb-8 max-w-[20ch] rise rise-2">
              I design <em>product systems</em> for fintech, crypto, and
              enterprise teams.
            </h1>

            <p className="text-lg md:text-xl leading-[1.55] max-w-[640px] mb-10 rise rise-3">
              <span className="font-medium">15+ years</span> across OKX, HSBC,
              Melco, and HKJC — spanning 0→1 product work, design systems at
              scale, and the cross-functional leadership that holds them
              together.
            </p>

            {/* Positioning strip */}
            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_2fr_1fr] border-y border-ink mt-14 rise rise-4">
              <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-rule">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted mb-2">
                  Role
                </p>
                <p className="display text-xl tracking-tight">
                  Staff / Lead Product Designer
                </p>
              </div>
              <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-rule">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted mb-2">
                  Focus
                </p>
                <p className="text-[15px] font-medium">
                  Design Systems · Fintech · 0→1 · AI-ready infrastructure
                </p>
              </div>
              <div className="p-5 md:p-6">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted mb-2">
                  Based
                </p>
                <p className="text-[15px] font-medium">Fukuoka, JP · Remote</p>
              </div>
            </div>
          </section>

          {/* CLIENT STRIP */}
          <section className="py-16 md:py-20">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-9 flex items-center gap-4">
              <span className="inline-block w-8 h-px bg-muted" />
              15 years · Selected clients
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
              {siteConfig.clients.map((c) => (
                <span
                  key={c}
                  className="display text-lg md:text-xl py-2 border-b border-rule hover:text-accent hover:border-accent transition-colors cursor-default"
                >
                  {c}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* MARQUEE — full bleed */}
        <div className="bg-ink border-y border-ink py-[18px] overflow-hidden">
          <div className="marquee-inner">
            {[...siteConfig.marqueeItems, ...siteConfig.marqueeItems].map(
              (item, i) => (
                <span
                  key={i}
                  className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-paper px-10 whitespace-nowrap flex items-center gap-10"
                >
                  {item}
                  <span className="inline-block w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0" />
                </span>
              )
            )}
          </div>
        </div>

        <div className="max-w-site mx-auto px-6 md:px-12">
          {/* WHY HIRE ME */}
          <section className="py-24 md:py-32 grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-12 md:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mb-6">
                § 01 — Engagements
              </p>
              <h2 className="display text-3xl md:text-5xl leading-[1.05]">
                I'm usually brought in{" "}
                <em>when:</em>
              </h2>
            </div>

            <ul>
              {hireItems.map((item, i) => (
                <li
                  key={i}
                  className={`grid grid-cols-[32px_1fr] gap-5 py-6 border-t border-rule ${
                    i === 0 ? "border-t-ink" : ""
                  }`}
                >
                  <span className="font-mono text-[11px] font-medium tracking-wide text-accent pt-1">
                    {item.num}
                  </span>
                  <div>
                    <p
                      className="display text-[22px] leading-[1.2] mb-2"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p className="text-[15px] leading-[1.6] text-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* WORK */}
          <section id="work" className="py-24 md:py-28">
            <div className="flex items-end justify-between mb-14 pb-6 border-b border-ink">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-3">
                  § 02 — Selected Work
                </p>
                <h2 className="display text-3xl md:text-5xl">Case studies.</h2>
              </div>
              <a
                href="/work"
                className="font-mono text-[12px] uppercase tracking-wider pb-[3px] border-b border-ink hover:text-accent hover:border-accent transition-colors"
              >
                Full index →
              </a>
            </div>

            <div>
              {caseStudies.map((cs) => (
                <WorkCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          </section>
        </div>

        {/* IMPACT BAND — full bleed dark */}
        <section className="bg-ink text-paper py-20 my-10">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10">
              {impactStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-ink p-8 md:p-8 text-center md:text-left"
                >
                  <div className="display text-[44px] md:text-[72px] leading-none mb-3 tabular">
                    {stat.value}
                    {stat.suffix && (
                      <sup className="display italic text-[0.5em] text-accent ml-[2px]">
                        {stat.suffix}
                      </sup>
                    )}
                  </div>
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-paper/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-site mx-auto px-6 md:px-12">
          {/* EXPERTISE */}
          <section className="py-24 md:py-28">
            <div className="flex items-end justify-between mb-14 pb-6 border-b border-ink">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-3">
                  § 03 — Capabilities
                </p>
                <h2 className="display text-3xl md:text-5xl">
                  Where I <em>operate.</em>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
              {expertise.map((x, i) => (
                <div key={i} className="bg-paper p-8 md:p-9">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-accent mb-4">
                    {x.tag}
                  </p>
                  <h3 className="display text-[22px] leading-[1.2] mb-3">
                    {x.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] mb-4">{x.body}</p>
                  <p className="font-mono text-[11px] text-muted pt-4 border-t border-rule">
                    {x.meta}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="py-24 md:py-32 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-3">
                § 04 — About
              </p>
              <h2 className="display text-3xl md:text-5xl leading-[1]">
                A long path,
                <br />
                deliberately taken.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-[1.6]">
              <p>
                I started in{" "}
                <em className="font-display italic text-accent">
                  fine art and graphic design
                </em>{" "}
                fifteen years ago, then moved through visual design, UI, UX,
                and product — eventually leading design systems at enterprise
                scale. Each step made the previous one more useful, not less.
              </p>
              <p className="text-muted">
                Today I work independently from Fukuoka, Japan, through my own
                company{" "}
                <span className="text-ink">Human For Human 合同会社</span>. Most
                of my recent work sits at the intersection of design systems
                and agentic AI — building the infrastructure that keeps human
                judgment in the loop when AI is doing the generating.
              </p>
              <p className="pt-2">
                <a
                  href="/about"
                  className="font-mono text-[12px] uppercase tracking-wider pb-[3px] border-b border-ink hover:text-accent hover:border-accent transition-colors"
                >
                  More about the path →
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

const hireItems = [
  {
    num: "01",
    title:
      "A product needs to go from <em class='font-display italic text-accent'>messy 0 to shippable 1.</em>",
    body: "No existing system, small team, ambiguous brief. Someone has to make the first hard calls and ship. Examples: OKX Lite, Melco's loyalty app.",
  },
  {
    num: "02",
    title: "A design system is slowing the org down, not speeding it up.",
    body: "When tokens, components, and governance have drifted out of sync with engineering, localisation, or compliance. At HSBC I noticed four markets were forking the component library for local compliance; I proposed splitting brand tokens from market tokens at the architecture level. Engineering adopted it, cutting localisation work by weeks per release.",
  },
  {
    num: "03",
    title:
      "A team needs a senior IC who can hold <em class='font-display italic text-accent'>craft and system</em> in the same hand.",
    body: "Most senior designers are strong in one; I've spent fifteen years moving between fine art, brand, UI, UX, and systems. That range is the thing I'm hired for.",
  },
  {
    num: "04",
    title:
      "AI is changing what design teams ship — and the infrastructure behind it.",
    body: "Agentic workflows are reshaping design-to-code, tokens-to-runtime, and what design infrastructure even means. I've been building and writing on this since 2024.",
  },
];

const impactStats = [
  { value: "15", suffix: "+", label: "Years in practice" },
  { value: "12", label: "Global markets shipped" },
  { value: "40", suffix: "+", label: "Teams shipped with" },
  { value: "100", label: "Top ADPList mentor" },
];

const expertise = [
  {
    tag: "01 — Systems",
    title: "Design Systems at scale",
    body: "Token architecture, component governance, cross-team adoption. Built systems used by 40+ product teams across 12 markets simultaneously.",
    meta: "Figma · Tokens Studio · Style Dictionary · Storybook",
  },
  {
    tag: "02 — Product",
    title: "Fintech & Crypto UX",
    body: "Complex financial flows, multi-jurisdictional compliance, trust design for high-stakes transactions, onboarding for novice users.",
    meta: "OKX Lite · HSBC Wealth · OSL · Generali",
  },
  {
    tag: "03 — 0→1",
    title: "Early-stage product work",
    body: "Translating fuzzy strategy into shippable product. Comfortable with ambiguity, small teams, and no existing system to lean on.",
    meta: "Melco · Hong Huan · Garlican · internal tools",
  },
  {
    tag: "04 — Agentic AI",
    title: "Designing for non-deterministic systems",
    body: "The hard problems in AI UX aren't 'what the button looks like' — they're confidence states, correction flows, trust calibration, and making AI outputs reviewable by design. I work on this inside live agentic pipelines.",
    meta: "Uncertainty states · Correction UX · MCP · Tokens-to-code",
  },
  {
    tag: "05 — Leadership",
    title: "IC-track design leadership",
    body: "Cross-functional alignment, design critiques, hiring calibration, bringing senior judgment without losing craft. Staff-track, not manager-track.",
    meta: "Critique · Roadmaps · Hiring · 1:1s",
  },
  {
    tag: "06 — Coaching",
    title: "Mentoring & career coaching",
    body: "ADPList Top 100 mentor. 1:1 coaching for designers growing from mid to senior or senior to staff. Portfolio critique, career navigation, craft deepening.",
    meta: "ADPList · cal.com/noelcheung · async reviews",
  },
];
