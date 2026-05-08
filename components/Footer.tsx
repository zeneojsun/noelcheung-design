import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const services = [
  "Design Audit",
  "Design System Build",
  "0→1 Product Design",
  "Fractional Design Lead",
  "Product Turnaround",
];

// ADPList not available on Simple Icons — using a minimal text badge
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/noelcheung",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "ADPList",
    href: "https://adplist.org/mentors/noel-cheung",
    text: "ADP",
  },
  {
    label: "X",
    href: "https://x.com/zeneojsun",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/zeneojsun",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-rule pt-10 pb-10">
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16 mb-[112px]">

          {/* Left: headline + CTAs + social */}
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-6">
              Contact /
            </p>

            <p className="font-sans font-medium text-[clamp(28px,4vw,40px)] leading-[1.15] tracking-tight mb-10">
              Have a project that needs a design diagnosis?
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a
                href={siteConfig.cal}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-14 rounded-full px-8 border border-rule font-mono text-base font-semibold hover:border-ink hover:-translate-y-px transition-all duration-200"
              >
                Book a call
                <ArrowUpRight size={12} strokeWidth={2.5} className="flex-shrink-0" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center h-14 rounded-full px-8 bg-ink text-paper font-mono text-base font-semibold hover:opacity-90 hover:-translate-y-px transition-all duration-200"
              >
                Email me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex flex-wrap gap-5 items-center">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-muted hover:text-ink transition-colors duration-150"
                >
                  {"svg" in s ? s.svg : (
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em]">
                      {s.text}
                    </span>
                  )}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="text-muted hover:text-ink transition-colors duration-150"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Right: services */}
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-4">
              How we work together
            </p>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i} className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-muted w-9 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")} /
                  </span>
                  <span className="text-[15px]">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-rule text-sm text-muted">
          <p>© 2026 Noel Cheung</p>
        </div>
      </div>
    </footer>
  );
}
