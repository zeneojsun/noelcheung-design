import type { Metadata } from "next";
import { cv } from "@/lib/cv";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: `${cv.name} — CV`,
  description: cv.profile.split("\n")[0],
};

export default function CVPage() {
  return (
    <>
      <Header />
      <main id="cv-content" className="max-w-[960px] mx-auto px-8 py-16 text-[var(--ink)]">

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-[var(--rule)]">
          <h1 className="text-[32px] font-medium tracking-tight leading-none mb-1">{cv.name}</h1>
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--muted)] mb-4">{cv.tagline}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-1 font-mono text-[12px] text-[var(--muted)]">
            <span>{cv.contact.email}</span>
            <span>{cv.contact.phone}</span>
            <span>{cv.contact.location}</span>
            <span>{cv.contact.availability}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-10">

            {/* Profile */}
            <section>
              <SectionLabel>Profile</SectionLabel>
              <div className="space-y-3 text-[15px] leading-[1.65] text-[var(--ink)]">
                {cv.profile.trim().split("\n\n").map((p, i) => (
                  <p key={i}>{p.trim()}</p>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <SectionLabel>Experience</SectionLabel>
              <div className="space-y-8">
                {cv.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between mb-1 gap-4">
                      <div>
                        <span className="font-medium text-[15px]">{exp.role}</span>
                        <span className="text-[var(--muted)] text-[14px]"> · {exp.company}</span>
                        {exp.subtitle && (
                          <span className="text-[var(--muted)] text-[13px]"> — {exp.subtitle}</span>
                        )}
                      </div>
                      <span className="font-mono text-[11px] text-[var(--muted)] whitespace-nowrap">{exp.period}</span>
                    </div>
                    {exp.bullets && (
                      <ul className="mt-2 space-y-1">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="text-[14px] leading-[1.6] text-[var(--muted)] pl-3 border-l border-[var(--rule)]">
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.engagements && (
                      <ul className="mt-2 space-y-1">
                        {exp.engagements.map((e, j) => (
                          <li key={j} className="text-[14px] leading-[1.6] text-[var(--muted)] pl-3 border-l border-[var(--rule)]">
                            <span className="text-[var(--ink)] font-medium">{e.client}</span> — {e.work}
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.recognition && (
                      <p className="mt-2 text-[13px] leading-[1.6] text-[var(--muted)] pl-3 border-l border-[var(--rule)]">
                        {exp.recognition}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Early career */}
            <section>
              <SectionLabel>Earlier</SectionLabel>
              <div className="space-y-3">
                {cv.early_career.map((e, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto] gap-4 items-baseline">
                    <div>
                      <span className="text-[14px] font-medium">{e.role}</span>
                      <span className="text-[var(--muted)] text-[13px]"> · {e.company}</span>
                      <p className="text-[13px] text-[var(--muted)] leading-[1.5] mt-0.5">{e.note}</p>
                    </div>
                    <span className="font-mono text-[11px] text-[var(--muted)] whitespace-nowrap">{e.period}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right column */}
          <div className="space-y-8">

            {/* Highlights */}
            <section>
              <SectionLabel>Highlights</SectionLabel>
              <div className="space-y-4">
                {cv.highlights.map((h, i) => (
                  <div key={i} className="border-l-2 border-[var(--rule)] pl-3">
                    <div className="font-mono text-[18px] font-medium tabular-nums leading-none">{h.metric}</div>
                    <div className="text-[13px] leading-[1.5] text-[var(--ink)] mt-0.5">{h.label}</div>
                    <div className="text-[12px] leading-[1.4] text-[var(--muted)] mt-0.5">{h.detail}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionLabel>Education</SectionLabel>
              <div className="space-y-3">
                {cv.education.map((e, i) => (
                  <div key={i}>
                    <div className="text-[14px] font-medium">{e.program}</div>
                    <div className="text-[13px] text-[var(--muted)]">{e.institution} · {e.year}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools */}
            <section>
              <SectionLabel>Tools</SectionLabel>
              <div className="space-y-3 text-[13px]">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] block mb-1">Design</span>
                  <span className="text-[var(--ink)]">{cv.tools.product_design.join(", ")}</span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] block mb-1">Systems</span>
                  <span className="text-[var(--ink)]">{cv.tools.design_systems.join(", ")}</span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] block mb-1">Engineering</span>
                  <span className="text-[var(--ink)]">{cv.tools.engineering.join(", ")}</span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] block mb-1">AI Workflow</span>
                  <span className="text-[var(--ink)]">{cv.tools.ai_workflow}</span>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <SectionLabel>Languages</SectionLabel>
              <div className="space-y-1">
                {cv.languages.map((l, i) => (
                  <div key={i} className="text-[13px]">{l}</div>
                ))}
              </div>
            </section>

            {/* Expertise */}
            <section>
              <SectionLabel>Expertise</SectionLabel>
              <div className="space-y-1">
                {cv.expertise.map((e, i) => (
                  <div key={i} className="text-[13px] leading-[1.5]">{e}</div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Download link */}
        <div className="mt-12 pt-8 border-t border-[var(--rule)]">
          <a
            href="/cv.pdf"
            className="font-mono text-[12px] uppercase tracking-[0.08em] border-b border-current pb-[2px] hover:opacity-60 transition-opacity"
          >
            Download PDF ↓
          </a>
        </div>

      </main>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)] mb-4">
      {children}
    </p>
  );
}
