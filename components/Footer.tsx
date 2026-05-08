import { ArrowUpRight, Mail, FileDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const services = [
  "Design Audit",
  "Design System Build",
  "0→1 Product Design",
  "Fractional Design Lead",
  "Product Turnaround",
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/noelcheung",
    external: true,
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "ADPList",
    href: "https://adplist.org/mentors/noel-cheung",
    external: true,
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14H9V9h2v7zm4 0h-2V9h2v7z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    external: true,
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    external: true,
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    external: true,
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4.006-.816zm-11.62-2.073c.232-.316 3.046-4.155 8.33-5.85.145-.048.293-.094.44-.138-.28-.632-.58-1.26-.898-1.87-5.14 1.54-10.12 1.476-10.57 1.468-.002.116-.003.23-.003.348 0 2.268.86 4.34 2.7 6.042zm-2.588-8.01c.46.008 4.73.048 9.56-1.256-1.714-3.046-3.555-5.607-3.82-5.98-2.896 1.366-5.05 3.975-5.74 7.236zm8.282-8.15c.277.39 2.127 2.95 3.824 6.054 3.645-1.367 5.185-3.44 5.37-3.7A10.044 10.044 0 0012 1.857c-1.17 0-2.296.2-3.337.562zm11.19 5.72c-.215.29-1.935 2.5-5.73 4.04.25.512.49 1.032.716 1.558.084.2.165.4.24.6 3.426-.43 6.828.26 7.17.33-.029-2.41-.86-4.63-2.4-6.528z" />
      </svg>
    ),
  },
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
                className="inline-flex items-center gap-2 h-12 rounded-full px-8 border border-rule font-mono text-base font-medium hover:border-ink hover:-translate-y-px transition-all duration-200"
              >
                Book a call
                <ArrowUpRight size={12} strokeWidth={2.5} className="flex-shrink-0" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center h-12 rounded-full px-8 bg-ink text-paper font-mono text-base font-medium hover:opacity-90 hover:-translate-y-px transition-all duration-200"
              >
                Email me
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-6">
              Elsewhere
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noreferrer" : undefined}
                  aria-label={s.label}
                  className="text-muted hover:text-ink transition-colors duration-150"
                >
                  {s.svg}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="text-muted hover:text-ink transition-colors duration-150"
              >
                <Mail size={16} />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Download CV"
                className="text-muted hover:text-ink transition-colors duration-150"
              >
                <FileDown size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-rule text-sm text-muted">
          <p>© {new Date().getFullYear()} noel cheung design</p>
          <p>Built with Claude.</p>
        </div>
      </div>
    </footer>
  );
}
