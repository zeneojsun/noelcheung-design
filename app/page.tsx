import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp, Stagger, StaggerItem, HeroLine } from "@/components/Animate";

const focusItems = [
  { label: "Product systems",               desc: "Turning messy product surfaces into scalable, shippable systems." },
  { label: "Design systems",                desc: "Tokens, governance, adoption, and design-to-code workflows." },
  { label: "Fintech & crypto UX",           desc: "Trust, onboarding, compliance, and high-stakes transactions." },
  { label: "Agentic design infrastructure", desc: "Exploring how AI changes design systems and handoff." },
];

const workItems = [
  {
    index: "01",
    title: "OKX Lite — Design System",
    desc: "Built OKX Lite's design system from 0→1. Shipped the MVP in 4 months, established multi-brand token architecture across light/dark and 12 languages, and drove adoption across global product teams.",
    meta: "Design System Lead · Crypto · 2022–23",
    outcomes: ["95% team adoption", "1000+ components", "40% cost saving"],
    href: "/work/okx-lite",
  },
  {
    index: "02",
    title: "HSBC Wealth",
    desc: "A cross-market design system for wealth management products spanning 12 jurisdictions — enabling 40+ product teams to ship from a shared source of truth.",
    meta: "Senior Product Designer · Enterprise Fintech · 2021–22",
    outcomes: ["12 markets", "40+ product teams", "Unified component library"],
    href: "/work/hsbc-wealth",
  },
  {
    index: "03",
    title: "Melco Loyalty",
    desc: "Designed Melco's first member loyalty app from the ground up — a unified experience across gaming, hotel, dining, and retail — alongside the component system that powers it.",
    meta: "Product Designer · Hospitality · Mobile · 2019–21",
    outcomes: ["40% cost reduction", "2M+ loyalty members", "4 properties"],
    href: "/work/melco",
  },
  {
    index: "04",
    title: "A2UI — Agentic Design Research",
    desc: "Independent research into design-to-code workflows for non-deterministic AI systems — exploring correction UX, confidence states, and reviewable AI output.",
    meta: "Founder research · Design Engineering · 2024–present",
    outcomes: ["Tokens-to-code", "Correction UX", "AI-reviewable output"],
    href: "/work/a2ui",
  },
];

const writingItems = [
  { title: "Agentic Design Systems: what changes when AI sits between Figma and code", tag: "Draft" },
  { title: "Design systems are not component libraries",                               tag: "Draft" },
  { title: "What crypto onboarding gets wrong",                                        tag: "Draft" },
  { title: "Designing trust in high-stakes financial products",                        tag: "Draft" },
  { title: "Notes from building Human For Human in Japan",                             tag: "Draft" },
];

const careerItems = [
  {
    index: "01",
    title: "Fine Art & Visual Craft",
    desc: "Started with drawing, layout, branding, and visual communication.",
  },
  {
    index: "02",
    title: "UI, UX & Product Design",
    desc: "Moved from visual execution into interaction, usability, product thinking, and business-driven design.",
  },
  {
    index: "03",
    title: "Systems & Turnaround Work",
    desc: "Took on complex 0-to-1 and transformation projects, often helping teams clarify, fix, and ship products under pressure.",
  },
  {
    index: "04",
    title: "Coaching & AI-era Design",
    desc: "After mentoring hundreds of designers, building a practice around helping designers and teams adapt to a changing industry.",
  },
];

const contactItems = [
  { label: "Email",       value: "hello@noelcheung.design",         href: "mailto:hello@noelcheung.design" },
  { label: "Book a call", value: "cal.com/noelcheung",              href: "https://cal.com/noelcheung" },
  { label: "LinkedIn",    value: "linkedin.com/in/noelcheung",      href: "https://www.linkedin.com/in/noelcheung" },
  { label: "Read.cv",     value: "read.cv/noelcheung",              href: "https://read.cv/noelcheung" },
  { label: "ADPList",     value: "adplist.org/mentors/noel-cheung", href: "https://adplist.org/mentors/noel-cheung" },
  { label: "Download CV", value: "CV (PDF)",                        href: "/cv.pdf" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-site mx-auto px-5 sm:px-6">

        {/* ── INTRO ── */}
        <section className="pt-14 sm:pt-20 pb-20 sm:pb-28" aria-label="Introduction">
          <HeroLine
            index={0}
            as="p"
            className="serif text-[26px] sm:text-[34px] leading-[1.35] tracking-[-0.01em] text-ink max-w-[22ch]"
          >
            Noel Cheung is a product designer based in Japan. I design product systems for fintech,
            crypto, and enterprise teams, with a focus on design systems, 0→1 product work, and UX
            strategy.
          </HeroLine>

          <HeroLine
            index={1}
            as="p"
            className="text-[15px] sm:text-[16px] leading-[1.75] text-ink-soft mt-10 max-w-[50ch]"
          >
            I step into complex products, fix what&apos;s broken, and turn them into scalable systems
            so teams can move faster and ship with confidence.
          </HeroLine>

          <HeroLine
            index={2}
            as="p"
            className="text-[14px] leading-[1.65] text-muted mt-5 max-w-[50ch]"
          >
            Previously across OKX, HSBC, Melco, OSL, HKJC, and other teams. Open to remote roles,
            consulting, and fractional work.
          </HeroLine>
        </section>

        {/* ── CURRENT FOCUS ── */}
        <section id="focus" className="pt-14 pb-20 border-t border-rule">
          <FadeUp>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-2 mb-10">
              Current focus
            </h2>
          </FadeUp>
          <Stagger className="divide-y divide-rule">
            {focusItems.map((item) => (
              <StaggerItem key={item.label}>
                <div className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-10 py-5">
                  <span className="text-[14px] text-ink">{item.label}</span>
                  <span className="text-[14px] text-muted leading-[1.65]">{item.desc}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ── SELECTED WORK ── */}
        <section id="work" className="pt-14 pb-20 border-t border-rule">
          <FadeUp>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-2 mb-10">
              Selected work
            </h2>
          </FadeUp>
          <ul className="divide-y divide-rule">
            {workItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="work-card group block py-8 relative overflow-hidden"
                >
                  {/* hover accent line */}
                  <span
                    className="work-card-line absolute left-0 top-0 h-full w-[2px] bg-ink"
                    aria-hidden="true"
                  />

                  <div className="pl-0 group-hover:pl-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-[11px] tabular-nums text-muted-2 font-mono tracking-[0.04em]">
                        {item.index}
                      </span>
                      <h3 className="text-[16px] tracking-[-0.015em] font-medium text-ink group-hover:text-ink transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[14px] text-ink-soft leading-[1.7] max-w-[52ch] mb-4">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                      <span className="text-[12px] text-muted">{item.meta}</span>
                      <span className="hidden sm:block text-muted-2 text-[11px]">·</span>
                      <span className="flex gap-3 flex-wrap">
                        {item.outcomes.map((o) => (
                          <span
                            key={o}
                            className="text-[11px] uppercase tracking-[0.1em] text-muted-2 bg-surface px-2 py-0.5 rounded-sm"
                          >
                            {o}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── WRITING & NOTES ── */}
        <section id="writing" className="pt-14 pb-20 border-t border-rule">
          <FadeUp>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-2 mb-10">
              Writing &amp; notes
            </h2>
          </FadeUp>
          <Stagger className="divide-y divide-rule">
            {writingItems.map((item) => (
              <StaggerItem key={item.title}>
                <a
                  href="#"
                  className="flex items-baseline justify-between gap-6 py-4 group transition-opacity hover:opacity-60"
                >
                  <span className="text-[15px] leading-[1.5] text-ink">{item.title}</span>
                  <span className="flex-shrink-0 text-[11px] uppercase tracking-[0.14em] text-muted-2">
                    {item.tag}
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ── ORIGIN ── */}
        <section id="about" className="pt-14 pb-20 border-t border-rule">
          <FadeUp>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-2 mb-10">
              Origin
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h3 className="serif text-[22px] sm:text-[26px] leading-[1.3] tracking-[-0.01em] text-ink mb-8 max-w-[28ch]">
              Who is Noel?
            </h3>
            <div className="space-y-5 max-w-[52ch]">
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                Noel started in fine art and graphic design.
              </p>
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                His early career was visual: layout, branding, e-commerce, retail, production, and
                aesthetics. Over time, he moved from visual design into UI, interaction, UX, product
                design, and design systems — shifting from retail into finance, fintech, and crypto.
              </p>
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                That path changed how he thinks.
              </p>
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                He became less interested in making isolated screens and more interested in how
                products, teams, systems, and businesses actually work. Across agencies, corporate
                teams, fintech products, and crypto platforms, he built a design approach shaped by
                visual craft, usability, product thinking, HCI, business needs, and scalable systems.
              </p>
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                Good design is not only about how something looks. It is about helping people
                understand the problem, make better decisions, and ship work that creates real value.
              </p>
              <p className="pt-2">
                <a
                  href="/about"
                  className="text-[13px] font-medium text-ink hover:text-muted transition-colors duration-200"
                >
                  Read full story →
                </a>
              </p>
            </div>
          </FadeUp>
        </section>

        {/* ── CAREER ARC ── */}
        <section className="pt-14 pb-20 border-t border-rule">
          <FadeUp>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-2 mb-10">
              A generalist path, shaped by change
            </h2>
          </FadeUp>
          <Stagger className="divide-y divide-rule">
            {careerItems.map((item) => (
              <StaggerItem key={item.index}>
                <div className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-10 py-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[11px] tabular-nums text-muted-2 font-mono tracking-[0.04em]">
                      {item.index}
                    </span>
                    <span className="text-[14px] text-ink">{item.title}</span>
                  </div>
                  <span className="text-[14px] text-muted leading-[1.65]">{item.desc}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="pt-14 pb-20 border-t border-rule">
          <FadeUp>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-2 mb-10">
              Philosophy
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h3 className="serif text-[22px] sm:text-[26px] leading-[1.3] tracking-[-0.01em] text-ink mb-8 max-w-[32ch]">
              Design should move things forward.
            </h3>
            <div className="space-y-5 max-w-[52ch]">
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                Good design is not only about making things look better.
              </p>
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                It is about helping teams understand the problem, make better decisions, and move
                toward a result. Design should be clear, useful, scalable, and connected to
                business value.
              </p>
              <div className="border-t border-rule mt-4 pt-8 space-y-2">
                <p className="serif text-[18px] sm:text-[20px] leading-[1.4] text-ink">
                  Design should ship.
                </p>
                <p className="serif text-[18px] sm:text-[20px] leading-[1.4] text-ink">
                  Design should create value.
                </p>
                <p className="serif text-[18px] sm:text-[20px] leading-[1.4] text-ink">
                  Design should help people move forward.
                </p>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ── CURRENT DIRECTION ── */}
        <section className="pt-14 pb-20 border-t border-rule">
          <FadeUp>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-2 mb-10">
              Current direction
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h3 className="serif text-[22px] sm:text-[26px] leading-[1.3] tracking-[-0.01em] text-ink mb-8 max-w-[34ch]">
              Helping designers adapt to the AI era.
            </h3>
            <div className="space-y-5 max-w-[52ch]">
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                For the last few years, Noel has helped designers with portfolio direction, interview
                preparation, career clarity, and design confidence.
              </p>
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                But the problem has changed.
              </p>
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                The old question was: <em>how can designers get better jobs?</em> The new question
                is: <em>how can designers stay valuable when the rules of design are changing?</em>
              </p>
              <p className="text-[15px] leading-[1.75] text-ink-soft">
                Noel is now building a design and coaching practice focused on helping designers and
                teams adapt to the AI era — while staying grounded in craft, thinking, systems, and
                human judgment.
              </p>
              <p className="text-[15px] leading-[1.75] text-muted">
                This is where his portfolio, coaching work, and startup direction begin to connect.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="pt-14 pb-20 border-t border-rule">
          <FadeUp>
            <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-2 mb-10">
              Contact
            </h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="text-[15px] leading-[1.75] text-ink-soft mb-10 max-w-[46ch]">
              Open to remote roles, consulting, and fractional work.
            </p>
          </FadeUp>
          <Stagger className="divide-y divide-rule">
            {contactItems.map((item) => (
              <StaggerItem key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid grid-cols-[110px_1fr_auto] sm:grid-cols-[140px_1fr_auto] items-baseline gap-4 py-3.5 group"
                >
                  <span className="text-[12px] uppercase tracking-[0.14em] text-muted-2">
                    {item.label}
                  </span>
                  <span className="text-[14px] text-ink group-hover:text-muted transition-colors duration-200 truncate">
                    {item.value}
                  </span>
                  <span className="text-[13px] text-muted-2 group-hover:text-ink group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

      </main>

      <Footer />
    </>
  );
}
