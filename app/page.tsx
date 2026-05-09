import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import EngagementsAccordion from "@/components/EngagementsAccordion";
import Reveal from "@/components/Reveal";
import StatsSection from "@/components/StatsSection";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

const clients = [
  "OKX", "OSL", "Melco", "HSBC", "Generali",
  "HKJC", "Ralph Lauren", "Macy's", "Fung Group", "Eslite 誠品",
];

const services = [
  {
    n: "01",
    title: "Design Audit",
    body: "Focused diagnostic on an existing product — heuristics, flows, IA. Output is a prioritised remediation plan, not a generic findings deck.",
  },
  {
    n: "02",
    title: "Design System Build",
    body: "From token architecture to multi-brand governance. Shipped at OKX (1000+ components, 95% adoption) and Melco (40% cost saved).",
  },
  {
    n: "03",
    title: "0→1 Product Design",
    body: "Ambiguous brief, small team, hard deadline. I build foundations that hold up through scale — UX, IA, and a system that ships alongside v1.",
  },
  {
    n: "04",
    title: "Fractional Design Lead",
    body: "Embed part-time as senior design voice. Strategy, hiring, ops, and quality gating — without adding a full-time headcount.",
  },
  {
    n: "05",
    title: "Product Turnaround",
    body: "Rescue work. Root-cause analysis, reframing, fast execution. At HSBC India: shelved project → 7× submissions, full GDR approval.",
  },
  {
    n: "06",
    title: "Agentic AI Design",
    body: "Design infrastructure for AI-in-the-loop products. Confidence states, correction UX, reviewable output, and tokens as source of truth.",
  },
];

const mentorship = [
  {
    title: "Leadership Coaching",
    body: [
      "Leading designers and not sure if you're doing it right? Perhaps you're brand new to managing other managers?",
      "We'll work together to discover how you can become an expert manager and design leader, just like you became an expert designer.",
    ],
  },
  {
    title: "Design Mentorship",
    body: [
      "Looking to level up in your design career? Feeling stuck in your current role?",
      "We'll work together to identify strengths and weaknesses, unpacking feedback from your team, to build a plan that helps you make meaningful progress in your career.",
    ],
  },
];

const ArrowSvg = () => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 14, height: 14 }}>
    <path d="M3.5 10.5 10.5 3.5" /><path d="M4.5 3.5h6v6" />
  </svg>
);

export default function Home() {
  const homepageCaseStudies = caseStudies.filter((c) => c.slug !== "a2ui");

  return (
    <>
      <Header />

      <main>
        {/* ─────────────────────────────────────── HERO */}
        <section id="top" className="hero">
          <div className="max-w-site mx-auto px-5 md:px-8 lg:px-14">

            <h1 className="display rise rise-1" style={{ fontSize: "clamp(48px, 8.2vw, 124px)", marginBottom: "clamp(24px, 3vh, 40px)", maxWidth: "14ch", letterSpacing: "-0.035em" }}>
              Noel helps teams <em>fix</em> and launch products that actually <em>work.</em>
            </h1>

            <p className="rise rise-2" style={{ maxWidth: "56ch", fontSize: "clamp(17px, 1.45vw, 22px)", lineHeight: 1.5, color: "var(--ink)", marginBottom: "clamp(36px, 5vh, 64px)" }}>
              Fifteen years across fintech, crypto, and enterprise teams. I step into complex products, fix what&apos;s broken, and turn them into scalable systems — so teams can move faster and ship with confidence.
            </p>

            <div className="hero-meta-row rise rise-3">
              <div className="meta-cell">
                <span className="eyebrow k">Role</span>
                <span className="v">Fractional Lead / Solo Designer</span>
              </div>
              <div className="meta-cell">
                <span className="eyebrow k">Focus</span>
                <span className="v">DX · 0→1 · Design systems · AI · Quick turnarounds</span>
              </div>
              <div className="meta-cell">
                <span className="eyebrow k">Based</span>
                <span className="v">Remote · Japan</span>
              </div>
            </div>

            <StatsSection />

            <div className="cta-row rise rise-5">
              <a href={siteConfig.cal} target="_blank" rel="noreferrer" className="btn btn-primary">
                Book a call <span className="arrow"><ArrowSvg /></span>
              </a>
              <a href="#work" className="btn btn-ghost">
                See work
              </a>
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────── WORK */}
        <section id="work" className="section">
          <div className="max-w-site mx-auto px-5 md:px-8 lg:px-14">
            <Reveal>
              <div className="sec-head">
                <div>
                  <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>Selected Work</span>
                  <h2 className="display" style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 44px)" }}>
                    Things I&apos;ve <em>built</em>, fixed, and shipped.
                  </h2>
                </div>
              </div>
            </Reveal>

            <div className="work-list">
              {homepageCaseStudies.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 90}>
                  <WorkCard caseStudy={cs} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={homepageCaseStudies.length * 90}>
              <a href="/work" className="see-all">See all work →</a>
            </Reveal>
          </div>
        </section>

        {/* ─────────────────────────────────────── CLIENTS */}
        <section className="clients-section">
          <div className="max-w-site mx-auto px-5 md:px-8 lg:px-14">
            <Reveal>
              <span className="eyebrow" style={{ display: "block", marginBottom: "clamp(32px, 4vh, 48px)" }}>
                Clients I&apos;ve served
              </span>
            </Reveal>
            <Reveal delay={120}>
              <div className="clients-grid">
                {clients.map((c, i) => (
                  <div key={i} className="client-cell">{c}</div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─────────────────────────────────────── ENGAGEMENTS */}
        <section id="engagements" className="section">
          <div className="max-w-site mx-auto px-5 md:px-8 lg:px-14">
            <div className="engage-grid">
              <Reveal>
                <div>
                  <span className="eyebrow" style={{ display: "block", marginBottom: 24 }}>Engagements</span>
                  <h2 className="display" style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 44px)" }}>
                    I&apos;m usually<br />brought in <em>when:</em>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <EngagementsAccordion />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── SERVICES */}
        <section id="services" className="section">
          <div className="max-w-site mx-auto px-5 md:px-8 lg:px-14">
            <div className="engage-grid">
              <Reveal>
                <div>
                  <span className="eyebrow" style={{ display: "block", marginBottom: 24 }}>How we work together</span>
                  <h2 className="display" style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 44px)" }}>
                    Services <em>I</em><br />offer.
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="services-grid">
                  {services.map((it) => (
                    <div key={it.n} className="service-cell">
                      <p className="eyebrow service-num">{it.n}</p>
                      <h3 className="service-title">{it.title}</h3>
                      <p className="service-body">{it.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────── MENTORSHIP */}
        <section id="mentorship" className="section">
          <div className="max-w-site mx-auto px-5 md:px-8 lg:px-14">
            <div className="mentorship-grid">
              <Reveal>
                <div>
                  <span className="eyebrow" style={{ display: "block", marginBottom: 24 }}>Service</span>
                  <h2 className="display" style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 44px)" }}>
                    1:1 mentorship<br />&amp; <em>coaching</em>
                  </h2>
                  <p style={{ margin: "24px 0 28px", maxWidth: "26ch", fontSize: 16, lineHeight: 1.55, color: "var(--muted)" }}>
                    Together, we unpack how you can grow to the next level in your career.
                  </p>
                  <a href="#contact" className="btn btn-primary">
                    Book a call <span className="arrow"><ArrowSvg /></span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="mentorship-cards">
                  {mentorship.map((it) => (
                    <div key={it.title} className="mentorship-card">
                      <h3 className="mentorship-card-title">{it.title}</h3>
                      {it.body.map((p, i) => (
                        <p key={i} className="mentorship-card-body">{p}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
