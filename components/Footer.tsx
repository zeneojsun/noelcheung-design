import { siteConfig } from "@/lib/site-config";

const services = [
  "Design Audit",
  "Design System Build",
  "0→1 Product Design",
  "Fractional Design Lead",
  "Product Turnaround",
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-rule mt-12 pt-20 pb-10">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16 mb-16">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-8">
              Contact /
            </p>

            <p className="font-sans font-medium text-[clamp(28px,4vw,40px)] leading-[1.15] tracking-tight mb-8">
              Have a project that needs a design diagnosis?
            </p>

            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-5">
              How we work together
            </p>

            <ul className="mb-10 space-y-3">
              {services.map((service, i) => (
                <li key={i} className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-muted w-9 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")} /
                  </span>
                  <span className="text-[15px]">{service}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={siteConfig.cal}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-rule font-mono text-[12px] font-medium uppercase tracking-[0.12em] hover:bg-hover transition-colors"
              >
                Book a call ↗
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-paper font-mono text-[12px] font-medium uppercase tracking-[0.12em] hover:opacity-80 transition-opacity"
              >
                Email me →
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
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-rule font-mono text-[11px] text-muted">
          <p>© {new Date().getFullYear()} noel cheung design</p>
          <p>Built with Claude.</p>
        </div>
      </div>
    </footer>
  );
}
