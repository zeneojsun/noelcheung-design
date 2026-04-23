import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function WorkCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { num, meta, badge, title, titleEm, role, body, impact, href } =
    caseStudy;

  return (
    <Link
      href={href}
      className="group block border-b border-rule first:border-t-0 py-10 px-0 md:-mx-12 md:px-12 -mx-6 px-6 transition-colors duration-300 hover:bg-hover"
    >
      <div className="grid grid-cols-1 md:grid-cols-[32px_1.3fr_1.5fr_200px] gap-4 md:gap-10 items-baseline">
        <div className="font-mono text-[11px] font-medium tracking-wider text-muted">
          {num}
        </div>

        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-2">
            {badge && (
              <span className="inline-block border border-rule px-2 py-[2px] mr-2 rounded-sm text-muted">
                {badge}
              </span>
            )}
            {meta}
          </p>
          <h3 className="display text-2xl md:text-3xl leading-[1.15]">
            {title}
            <em>{titleEm}</em>
          </h3>
        </div>

        <div>
          <p className="font-mono text-[13px] text-muted mb-2">{role}</p>
          <p className="text-[15px] leading-[1.55]">{body}</p>
        </div>

        <div className="flex md:flex-col justify-between md:justify-start md:items-end gap-4">
          <div className="font-mono text-[11px] font-medium tracking-wide border-l-2 md:border-l-0 md:border-r-2 pl-3 md:pl-0 md:pr-3 border-rule leading-[1.5] text-left md:text-right">
            {impact.map((i, idx) => (
              <div key={idx}>
                {i.value && (
                  <strong className="font-semibold tabular">{i.value}</strong>
                )}
                {i.value && i.label && " "}
                {i.label}
              </div>
            ))}
          </div>
          <span className="font-sans text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
