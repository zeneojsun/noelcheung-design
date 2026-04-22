import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OKX Lite Design System — Noel Cheung",
  description:
    "Built OKX Lite's complete design system from scratch as sole designer — 98% adoption at rollout, 95% maintained a year later.",
};

export default function OKXLitePage() {
  return (
    <>
      <Header />

      <main>
        <article className="max-w-site mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="pt-12 pb-6 border-b border-rule">
            <Link
              href="/work"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted border-b border-transparent hover:border-accent hover:text-accent transition-colors"
            >
              ← All work
            </Link>
          </div>

          {/* Hero */}
          <section className="py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-2 space-y-4">
                <MetaItem label="Case" value="№ 02" />
                <MetaItem label="Year" value="2022" />
              </div>
              <div className="md:col-span-3 space-y-4">
                <MetaItem label="Role" value="Design Systems Lead · Sole Designer" />
                <MetaItem label="Status" value="Shipped → merged into OKX main" />
              </div>
              <div className="md:col-span-7">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent mb-4">
                  OKX · 2022 · Design Systems
                </p>
                <h1 className="display text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-8">
                  OKX Lite — design system{" "}
                  <em>0→1, sole designer, 3 months.</em>
                </h1>
                <p className="text-xl leading-relaxed text-ink/80">
                  Built OKX Lite&apos;s complete design system from scratch — concurrent with the
                  MVP build. Foundation, component library, dark/light themes, governance model,
                  and a 1,050-video async enablement layer. 98% adoption at rollout; 95%
                  maintained a year later as the team scaled from 2 to 7 designers.
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-ink py-8 gap-px">
              {[
                { value: "98%", label: "Component adoption at rollout" },
                { value: "95%", label: "Maintained one year later" },
                { value: "3mo", label: "Zero to full system" },
                { value: "1→7", label: "Team scaled, system held" },
              ].map((s, i) => (
                <div key={i} className="px-4 first:pl-0 md:border-r border-rule last:border-0">
                  <p className="display text-3xl md:text-5xl tabular leading-none mb-2">
                    {s.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Body */}
          <div className="grid md:grid-cols-12 gap-8 pb-24">
            <div className="md:col-span-8 md:col-start-3 space-y-20">

              {/* 01 Context */}
              <section>
                <SectionLabel>01 — Context</SectionLabel>
                <h2 className="display text-3xl md:text-4xl mb-6">
                  A new product. No system to inherit.
                </h2>
                <div className="space-y-4 text-lg leading-[1.7] text-ink/80">
                  <p>
                    OKX Lite was OKGroup&apos;s first platform targeting beginner crypto users
                    outside China — a sister product to OKX Pro, built for a completely
                    different audience. When the project launched, there was no design system,
                    no component library, no established patterns.
                  </p>
                  <p>
                    I was brought in as the sole design systems designer to build everything
                    from scratch — concurrent with the product team building the MVP.
                  </p>
                </div>
                <Pullquote>
                  Not adapting an existing system. Starting from a blank Figma file with a
                  product that didn&apos;t exist yet.
                </Pullquote>
              </section>

              {/* 02 Approach */}
              <section>
                <SectionLabel>02 — Approach</SectionLabel>
                <h2 className="display text-3xl md:text-4xl mb-6">
                  Align first. Build second.
                </h2>
                <div className="space-y-4 text-lg leading-[1.7] text-ink/80">
                  <p>
                    Before opening Figma, I interviewed every designer on the team to understand
                    their workflows, pain points, and expectations. I then presented to a 50+
                    person product org — designers, engineers, PMs — to align on what the system
                    would deliver and what it wouldn&apos;t.
                  </p>
                  <p>
                    The key decision: <strong className="text-ink">stay nimble</strong>. This was
                    an MVP. Over-engineering the system would slow the product down. I deliberately
                    scoped to what the team needed to ship — not what a mature design system would
                    eventually look like.
                  </p>
                </div>
              </section>

              {/* 03 The System */}
              <section>
                <SectionLabel>03 — The System</SectionLabel>
                <h2 className="display text-3xl md:text-4xl mb-6">What got built.</h2>
                <p className="text-lg leading-[1.7] text-ink/80 mb-10">
                  In 3 months, a complete DS ecosystem — not just a component library, but the
                  full operational infrastructure around it.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule border border-rule">
                  {deliverables.map((d, i) => (
                    <div key={i} className="bg-paper p-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent mb-3">
                        {d.num}
                      </p>
                      <h3 className="font-medium text-[16px] mb-2">{d.title}</h3>
                      <p className="text-[14px] leading-[1.65] text-ink/70">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 04 Challenge */}
              <section>
                <SectionLabel>04 — Challenge</SectionLabel>
                <h2 className="display text-3xl md:text-4xl mb-6">
                  Scaling the system without scaling the team.
                </h2>
                <div className="space-y-4 text-lg leading-[1.7] text-ink/80">
                  <p>
                    As OKX Lite grew from 2 to 7 designers and dozens of PMs, the DS team stayed
                    the same size: me. I reviewed every component contribution, maintained
                    governance, trained designers still building their UI foundations, and
                    continued supporting product work directly.
                  </p>
                  <p>
                    The most compressed moment: leadership decided OKX Lite needed a light mode.
                    No additional resource allocated. I mapped the entire colour system to the
                    new palette, then drove the full delivery pipeline — design review, product
                    review, developer handoff, QA coordination, and launch. Under 3 weeks.
                    With 2–3 developers. No project manager. No dedicated QA.
                  </p>
                </div>
                <Pullquote>
                  The system had to scale even when the team building it didn&apos;t. That&apos;s
                  the real test of whether you built the right thing.
                </Pullquote>
              </section>

              {/* 05 Enablement */}
              <section>
                <SectionLabel>05 — Enablement</SectionLabel>
                <h2 className="display text-3xl md:text-4xl mb-6">
                  Teaching the system. 1,050 videos.
                </h2>
                <div className="space-y-4 text-lg leading-[1.7] text-ink/80 mb-10">
                  <p>
                    A design system only works if people actually use it. With a team growing
                    faster than I could support 1-on-1, I built a parallel async education
                    layer — recording every component, every Figma workflow, every contribution
                    process, and bi-weekly DS updates as Loom videos.
                  </p>
                  <p>
                    Over time this became a searchable, self-serve knowledge base that let
                    designers onboard themselves — and freed me to keep building.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-px bg-rule border border-rule">
                  {[
                    {
                      label: "Format",
                      desc: "30 sec – 7 min per component. 25 min+ for audits and onboarding.",
                    },
                    {
                      label: "Coverage",
                      desc: "Every component documented. Tokens, contribution flow, bi-weekly updates.",
                    },
                    {
                      label: "Outcome",
                      desc: "Designers self-onboarded. Reduced repeat questions. Knowledge survived team turnover.",
                    },
                  ].map((x, i) => (
                    <div key={i} className="bg-paper p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent mb-3">
                        {x.label}
                      </p>
                      <p className="text-[13px] leading-[1.65] text-ink/70">{x.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 06 Results */}
              <section>
                <SectionLabel>06 — Results</SectionLabel>
                <h2 className="display text-3xl md:text-4xl mb-6">
                  98% adoption. System outlasted the platform.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule border border-rule mb-8">
                  {results.map((r, i) => (
                    <div key={i} className="bg-paper p-6">
                      <p className="display text-3xl md:text-4xl text-accent mb-2">{r.value}</p>
                      <p className="text-[14px] leading-[1.65] text-ink/70">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 07 Reflection */}
              <section>
                <SectionLabel>07 — Reflection</SectionLabel>
                <h2 className="display text-3xl md:text-4xl mb-6">What I&apos;d do differently.</h2>
                <div className="border-l-2 border-accent pl-6 py-1">
                  <p className="text-lg leading-[1.7] text-ink/80">
                    I&apos;d push harder — earlier — for resourcing commitments tied to product
                    team growth. A design system is infrastructure. When the product team scales
                    4×, the DS function needs to scale too. I learned to frame this not as a
                    designer&apos;s ask, but as a business risk argument: under-resourced
                    infrastructure creates compounding design debt that eventually slows the
                    whole org down.
                  </p>
                </div>
              </section>

            </div>
          </div>

          <hr className="border-rule my-8" />

          {/* Next case */}
          <section className="py-16 md:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-4">
              Next case
            </p>
            <Link href="/work/hsbc-wealth" className="group block">
              <h2 className="display text-3xl md:text-5xl leading-[1.1] group-hover:text-accent transition-colors">
                HSBC Wealth — a cross-market design system{" "}
                <em>holding 12 countries together.</em>{" "}
                <span className="inline-block group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </h2>
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent mb-6">
      {children}
    </p>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-1">
        {label}
      </p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-6 border-l-2 border-accent">
      <p className="display text-xl md:text-2xl leading-[1.35] italic">{children}</p>
    </blockquote>
  );
}

const deliverables = [
  {
    num: "01",
    title: "Foundation",
    desc: "Colour, typography, spacing, iconography — the base layer everything builds from.",
  },
  {
    num: "02",
    title: "Component Library",
    desc: "<20 core components with high product coverage. Scoped intentionally for MVP velocity.",
  },
  {
    num: "03",
    title: "Theme Library",
    desc: "Dark mode built-in from day one. Light mode delivered as a complete theme in under 3 weeks.",
  },
  {
    num: "04",
    title: "Governance Model",
    desc: "How new components get proposed, reviewed, and merged. Contribution protocol for the growing team.",
  },
  {
    num: "05",
    title: "Handoff Workflow",
    desc: "Design-to-engineering specs and async documentation. Built for remote, cross-timezone teams.",
  },
  {
    num: "06",
    title: "A11y + Localisation",
    desc: "Accessibility and localisation built into the foundation — not retrofitted after launch.",
  },
];

const results = [
  {
    value: "98%",
    desc: "Component adoption measured from usage data at initial rollout — across the full product team.",
  },
  {
    value: "95%",
    desc: "Adoption maintained one year later with minimal component detachment — system held without intervention.",
  },
  {
    value: "1→7",
    desc: "Design team scaled 7× while the system remained the single source of truth, maintained by one person.",
  },
  {
    value: "→ OKX",
    desc: "OKX Lite later merged into OKX main app. DS work informed group-level design system development.",
  },
];
