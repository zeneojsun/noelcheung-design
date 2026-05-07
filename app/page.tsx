import Header from "@/components/Header";
import Footer from "@/components/Footer";

const focusItems = [
  { label: "Product systems",          desc: "Turning messy product surfaces into scalable, shippable systems." },
  { label: "Design systems",           desc: "Tokens, governance, adoption, and design-to-code workflows." },
  { label: "Fintech & crypto UX",      desc: "Trust, onboarding, compliance, and high-stakes transactions." },
  { label: "Agentic design infrastructure", desc: "Exploring how AI changes design systems and handoff." },
];

const workItems = [
  {
    title: "OKX Lite",
    desc: "Design System Lead — Global-ready design system for OKX Lite across light/dark, multi-brand, and 12 languages.",
    meta: "Design System Lead · Crypto · 2022–23",
    outcomes: "40% cost saving · 1000+ components · 95% adoption across teams",
    href: "/work/okx-lite",
  },
  {
    title: "HSBC Wealth",
    desc: "A cross-market design system for wealth products across 12 jurisdictions.",
    meta: "Senior Product Designer · Enterprise Fintech · Design Systems · 2021–22",
    outcomes: "12 markets · 40+ product teams · Shared source of truth",
    href: "/work/hsbc-wealth",
  },
  {
    title: "Melco Loyalty",
    desc: "A ground-up loyalty app redesign across gaming, hotel, dining, and retail.",
    meta: "Product Designer · Hospitality · Mobile · 2020",
    outcomes: "4 properties · 2M+ loyalty members · Unified member experience",
    href: "/work/melco",
  },
  {
    title: "Agentic AI / A2UI Research",
    desc: "Independent research on design-to-code workflows for non-deterministic systems.",
    meta: "Founder research · Design Engineering · 2024–Present",
    outcomes: "Tokens-to-code · Correction UX · Reviewable AI output",
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

const contactItems = [
  { label: "Email",       value: "hello@noelcheung.design",          href: "mailto:hello@noelcheung.design" },
  { label: "Book a call", value: "cal.com/noelcheung",               href: "https://cal.com/noelcheung" },
  { label: "LinkedIn",    value: "linkedin.com/in/noelcheung",       href: "https://www.linkedin.com/in/noelcheung" },
  { label: "Read.cv",     value: "read.cv/noelcheung",               href: "https://read.cv/noelcheung" },
  { label: "ADPList",     value: "adplist.org/mentors/noel-cheung",  href: "https://adplist.org/mentors/noel-cheung" },
  { label: "Download CV", value: "CV (PDF)",                         href: "/cv.pdf" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-site mx-auto px-5 sm:px-6">

        {/* ── INTRO ── */}
        <section className="pb-16 sm:pb-20" aria-label="Introduction">
          <p className="serif text-[22px] sm:text-[26px] leading-[1.4] tracking-[-0.005em] text-ink max-w-[54ch]">
            Noel Cheung is a product designer based in Japan. I design product systems for fintech,
            crypto, and enterprise teams, with a focus on design systems, 0→1 product work, and UX
            strategy.
          </p>
          <p className="text-[15px] leading-[1.7] text-ink-soft mt-8 max-w-[52ch]">
            I step into complex products, fix what&apos;s broken, and turn them into scalable systems
            so teams can move faster and ship with confidence.
          </p>
          <p className="text-[15px] leading-[1.65] text-muted mt-5">
            Previously across OKX, HSBC, Melco, OSL, HKJC, and other teams. Open to remote roles,
            consulting, and fractional work.
          </p>
        </section>

        {/* ── CURRENT FOCUS ── */}
        <section id="focus" className="pt-12 pb-16 border-t border-rule">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-2 mb-8">
            Current focus
          </h2>
          <ul>
            {focusItems.map((item) => (
              <li
                key={item.label}
                className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-8 py-4 border-b border-rule last:border-0"
              >
                <span className="text-[15px] text-ink">{item.label}</span>
                <span className="text-[15px] text-muted leading-[1.6]">{item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── SELECTED WORK ── */}
        <section id="work" className="pt-12 pb-16 border-t border-rule">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-2 mb-8">
            Selected work
          </h2>
          <ul>
            {workItems.map((item, i) => (
              <li key={item.title} className={`py-7 border-b border-rule last:border-0 ${i === 0 ? "pt-2" : ""}`}>
                <h3 className="text-[17px] tracking-[-0.01em] font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-[1.6]">{item.desc}</p>
                <p className="mt-3 text-[13px] text-muted">{item.meta}</p>
                <p className="mt-2 text-[13px] text-muted-2 leading-[1.6]">{item.outcomes}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── WRITING & NOTES ── */}
        <section id="writing" className="pt-12 pb-16 border-t border-rule">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-2 mb-8">
            Writing &amp; notes
          </h2>
          <ul>
            {writingItems.map((item) => (
              <li key={item.title} className="border-b border-rule last:border-0">
                <a
                  href="#"
                  className="flex items-baseline justify-between gap-6 py-4 transition-opacity hover:opacity-70"
                >
                  <span className="text-[15px] leading-[1.5] text-ink">{item.title}</span>
                  <span className="flex-shrink-0 text-[12px] uppercase tracking-[0.12em] text-muted-2">
                    {item.tag}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="pt-12 pb-16 border-t border-rule">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-2 mb-8">
            About
          </h2>
          <div className="space-y-5">
            <p className="text-[15px] leading-[1.7] text-ink-soft">
              I started in fine art and graphic design, then moved through visual design, UI, UX,
              product design, and design systems. That path shaped how I work today: I can move from
              messy strategy to detailed interface craft, and from component-level decisions to
              system-level adoption.
            </p>
            <p className="text-[15px] leading-[1.7] text-ink-soft">
              Today I work independently from Fukuoka through Human For Human 合同会社, helping teams
              design clearer products, stronger systems, and better ways of working.
            </p>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="pt-12 pb-16 border-t border-rule">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-2 mb-8">
            Contact
          </h2>
          <p className="text-[17px] leading-[1.55] text-ink mb-8 max-w-[60ch]">
            Have a product system, design system, or 0→1 product that needs senior hands?
          </p>
          <ul>
            {contactItems.map((item) => (
              <li key={item.label} className="border-b border-rule last:border-0">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid grid-cols-[110px_1fr_auto] sm:grid-cols-[140px_1fr_auto] items-baseline gap-4 py-3.5 group"
                >
                  <span className="text-[13px] uppercase tracking-[0.12em] text-muted-2">
                    {item.label}
                  </span>
                  <span className="text-[15px] text-ink group-hover:text-muted transition-colors duration-150 truncate">
                    {item.value}
                  </span>
                  <span className="text-[14px] text-muted-2 group-hover:text-ink group-hover:translate-x-0.5 transition-all duration-150">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

      </main>

      <Footer />
    </>
  );
}
