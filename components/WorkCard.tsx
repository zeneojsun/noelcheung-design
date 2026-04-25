import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function WorkCard({ caseStudy, bare = false }: { caseStudy: CaseStudy; bare?: boolean }) {
  const { meta, badge, title, titleEm, role, body, href } = caseStudy;

  return (
    <Link
      href={href}
      className={`group block py-10 -mx-6 px-6 md:-mx-12 md:px-12 transition-colors duration-300 hover:bg-hover${bare ? "" : " border-b border-rule first:border-t-0"}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 md:gap-12">
        {/* Left: meta + title */}
        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-3">
            {badge && (
              <span className="inline-block border border-rule px-2 py-[2px] mr-2 rounded-sm">
                {badge}
              </span>
            )}
            {meta}
          </p>
          <h3 className="display text-2xl md:text-3xl leading-[1.15]">
            {title}{titleEm ? <em>{titleEm}</em> : null}
          </h3>
        </div>

        {/* Right: role + body + arrow */}
        <div className="flex flex-col">
          <p className="font-mono text-[12px] text-muted mb-2">{role}</p>
          <p className="text-[15px] leading-relaxed">{body}</p>
          <div className="flex justify-end mt-6">
            <span className="font-sans text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
