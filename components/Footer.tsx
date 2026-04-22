import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-ink mt-12 pt-20 pb-10">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] px-3 py-2 border border-ink mb-8">
              <span className="avail-dot-pulse" />
              Open · Q2 2026
            </span>

            <p className="display text-4xl md:text-6xl leading-[1.05] mb-8">
              Have a system that needs{" "}
              <em>senior hands?</em>
            </p>

            <p className="text-base text-muted leading-relaxed mb-10 max-w-[48ch]">
              <span className="text-ink">
                Available for Staff / Lead Product Designer roles, design
                system consulting, and 0→1 engagements
              </span>{" "}
              — full-time, contract, or fractional. Based JST, working with
              teams across APAC, Europe, and North America.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-paper font-mono text-[12px] font-medium uppercase tracking-[0.12em] hover:bg-accent transition-colors"
              >
                {siteConfig.email} <span className="display text-base">→</span>
              </a>
              <a
                href={siteConfig.cal}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-ink font-mono text-[12px] font-medium uppercase tracking-[0.12em] hover:bg-ink hover:text-paper transition-colors"
              >
                Book a call ↗
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-4">
              Elsewhere
            </p>
            <ul className="space-y-2">
              {siteConfig.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm border-b border-transparent hover:border-accent hover:text-accent transition-colors"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-rule font-mono text-[11px] text-muted">
          <p>
            © {new Date().getFullYear()} Human For Human 合同会社 ·{" "}
            {siteConfig.location}
          </p>
          <p>Hand-built. Fraunces + Geist.</p>
        </div>
      </div>
    </footer>
  );
}
