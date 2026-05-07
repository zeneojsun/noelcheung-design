import Header from "@/components/Header";
import Footer from "@/components/Footer";

const engagementItems = [
  {
    label: "Project is off-track",
    desc: "I find root causes fast, reset with stakeholders, and re-anchor the work. Broken briefs, missed milestones, and scope drift — I've seen them all.",
  },
  {
    label: "0→1 under pressure",
    desc: "I move from ambiguous brief to shippable system quickly, without cutting corners. OKX Lite: full design system MVP in 4 months, 95% adoption across global teams.",
  },
  {
    label: "Design system slowing teams",
    desc: "I audit what's broken, rebuild what needs to hold, and get teams onto a shared source of truth. Melco: 40% production cost reduction.",
  },
  {
    label: "Product needs to scale",
    desc: "I build multi-brand token architecture and governance that holds as teams, markets, and brands grow.",
  },
];

const workItems = [
  {
    title: "OKX Lite — Design System",
    desc: "Built OKX Lite's design system from 0→1. Shipped the MVP in 4 months, established multi-brand token architecture across light/dark and 12 languages, and drove adoption across global product teams.",
    meta: "Design System Lead · Crypto · 2022–23",
    outcomes: "95% team adoption · 1000+ components · 40% cost saving",
    href: "/work/okx-lite",
  },
  {
    title: "HSBC Wealth",
    desc: "A cross-market design system for wealth management products spanning 12 jurisdictions — enabling 40+ product teams to ship from a shared source of truth.",
    meta: "Senior Product Designer · Enterprise Fintech · 2021–22",
    outcomes: "12 markets · 40+ product teams · Unified component library",
    href: "/work/hsbc-wealth",
  },
  {
    title: "Melco Loyalty",
    desc: "Designed Melco's first member loyalty app from the ground up — a unified experience across gaming, hotel, dining, and retail — alongside the component system that powers it.",
    meta: "Product Designer · Hospitality · Mobile · 2019–21",
    outcomes: "40% production cost reduction · 2M+ loyalty members · 4 properties",
    href: "/work/melco",
  },
  {
    title: "A2UI — Agentic Design Research",
    desc: "Independent research into design-to-code workflows for non-deterministic AI systems — exploring correction UX, confidence states, and reviewable AI output.",
    meta: "Founder research · Design Engineering · 2024–present",
    outcomes: "Tokens-to-code · Correction UX · AI-reviewable output",
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
        <section className="pb-14 sm:pb-18" aria-label="Introduction">
          <p className="serif text-[22px] sm:text-[26px] leading-[1.4] tracking-[-0.005em] text-ink max-w-[54ch]">
            Noel Cheung is a product designer based in Japan. I help fintech and crypto teams{" "}
            <em>fix broken products and build the systems</em> that let them ship with confidence.
          </p>
          <p className="text-[15px] leading-[1.7] text-ink-soft mt-8 max-w-[52ch]">
            14 years across design systems, 0→1 products, and complex product turnarounds — at
            OKX, HSBC, Melco, OSL, HKJC, and other teams.
          </p>
          <p className="text-[15px] leading-[1.65] text-muted mt-5">
            Open to remote Staff / Lead roles, consulting, and fractional engagements.
          </p>
        </section>

        {/* ── USUALLY BROUGHT IN WHEN ── */}
        <section id="engagements" className="pt-12 pb-14 border-t border-rule">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-2 mb-8">
            Usually brought in when
          </h2>
          <ul>
            {engagementItems.map((item) => (
              <li
                key={item.label}
                className="grid sm:grid-cols-[220px_1fr] gap-1 sm:gap-8 py-4 border-b border-rule last:border-0"
              >
                <span className="text-[15px] text-ink">{item.label}</span>
                <span className="text-[15px] text-muted leading-[1.65]">{item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── SELECTED WORK ── */}
        <section id="work" className="pt-12 pb-14 border-t border-rule">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-2 mb-8">
            Selected work
          </h2>
          <ul>
            {workItems.map((item, i) => (
              <li
                key={item.title}
                className={`py-6 border-b border-rule last:border-0 ${i === 0 ? "pt-2" : ""}`}
              >
                <h3 className="text-[16px] tracking-[-0.01em] font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-[1.65]">{item.desc}</p>
                <p className="mt-3 text-[13px] text-muted">{item.meta}</p>
                <p className="mt-2 text-[13px] text-muted-2 leading-[1.6]">{item.outcomes}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── WRITING & NOTES ── */}
        <section id="writing" className="pt-12 pb-14 border-t border-rule">
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
        <section id="about" className="pt-12 pb-14 border-t border-rule">
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
              Today I work independently through Human For Human 合同会社, helping teams design
              clearer products, stronger systems, and better ways of working.
            </p>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="pt-12 pb-14 border-t border-rule">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted-2 mb-8">
            Contact
          </h2>
          <p className="text-[17px] leading-[1.55] text-ink mb-7 max-w-[52ch]">
            Have a product that needs rescue, a design system that needs building, or a 0→1
            project that needs senior hands?
          </p>
          <div className="mb-10">
            <a
              href="mailto:hello@noelcheung.design"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-[13px] tracking-[0.04em] hover:opacity-75 transition-opacity"
            >
              Request availability →
            </a>
          </div>
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
