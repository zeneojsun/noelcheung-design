import { ArrowUpRight } from "lucide-react";
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
    <footer id="contact" className="border-t border-rule pt-10 pb-10">
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16 mb-[112px]">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-6">
              Contact /
            </p>

            <p className="font-sans font-medium text-[clamp(28px,4vw,40px)] leading-[1.15] tracking-tight mb-10">
              Have a project that needs a design diagnosis?
            </p>

            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-4">
              How we work together
            </p>

            <ul className="mb-12 space-y-3">
              {services.map((service, i) => (
                <li key={i} className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-muted w-9 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")} /
                  </span>
                  <span className="text-[15px]">{service}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={siteConfig.cal}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-12 rounded-full px-6 border border-rule font-mono text-[12px] font-medium hover:border-ink hover:-translate-y-px transition-all duration-200"
              >
                Book a call
                <ArrowUpRight size={12} strokeWidth={2.5} className="flex-shrink-0" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center h-12 rounded-full px-6 bg-ink text-paper font-mono text-[12px] font-medium hover:opacity-90 hover:-translate-y-px transition-all duration-200"
              >
                Email me
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
