import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function WorkCard({ caseStudy, bare = false }: { caseStudy: CaseStudy; bare?: boolean }) {
  const { meta, badge, title, titleEm, role, body, href } = caseStudy;

  return (
    <Link
      href={href}
      className={`group block -mx-6 px-6 md:-mx-12 md:px-12 transition-colors duration-300 hover:bg-hover${bare ? "" : " border-b border-rule first:border-t-0"}`}
    >
      {/* Image placeholder */}
      <div className="w-full aspect-[16/7] bg-rule/40 rounded-lg mb-6 mt-8 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted/50">
            {title}{titleEm ?? ""}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 md:gap-12 pb-10">
        {/* Left: title + label */}
        <div>
          <h3 className="display text-2xl md:text-3xl leading-[1.15] font-bold mb-3">
            {title}{titleEm ? <em>{titleEm}</em> : null}
          </h3>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
            {badge && (
              <span className="inline-block border border-rule px-2 py-[2px] mr-2 rounded-sm">
                {badge}
              </span>
            )}
            {meta}
          </p>
        </div>

        {/* Right: role + body */}
        <div className="flex flex-col">
          <p className="font-mono text-[12px] text-muted mb-2">{role}</p>
          <p className="text-[15px] leading-relaxed">{body}</p>
        </div>
      </div>
    </Link>
  );
}
