import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function WorkCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const { num, meta, badge, title, titleEm, role, body, impact, href } =
    caseStudy;

  return (
    <Link
      href={href}
      className="group block border-b border-rule first:border-t-0 py-10 md:py-10 px-0 md:-mx-12 md:px-12 -mx-6 px-6 transition-colors duration-500 hover:bg-ink hover:text-paper"
    >
      <div className="grid grid-cols-1 md:grid-cols-[32px_1.3fr_1.5fr_200px] gap-4 md:gap-10 items-baseline">
        <div className="font-mono text-[11px] font-medium tracking-wider text-muted transition-colors group-hover:text-paper/60">
          {num}
        </div>

        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-2 transition-colors group-hover:text-paper/60">
            {badge && (
              <span className="inline-block text-accent border border-accent/30 bg-accent/10 px-2 py-[2px] mr-2 rounded-sm group-hover:bg-accent group-hover:text-paper group-hover:border-accent transition-colors">
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
          <p className="font-mono text-[13px] text-muted mb-2 transition-colors group-hover:text-paper/60">
            {role}
          </p>
          <p className="text-[15px] leading-[1.55] transition-colors">
            {body}
          </p>
        </div>

        <div className="flex md:flex-col justify-between md:justify-start md:items-end gap-4">
          <div className="font-mono text-[11px] font-medium tracking-wide border-r-0 md:border-r-2 md:pr-3 border-l-2 md:border-l-0 pl-3 md:pl-0 border-accent leading-[1.5] text-left md:text-right transition-colors group-hover:border-paper">
            {impact.map((i, idx) => (
              <div key={idx}>
                {i.value && (
                  <strong className="font-semibold text-accent tabular group-hover:text-paper transition-colors">
                    {i.value}
                  </strong>
                )}
                {i.value && i.label && " "}
                {i.label}
              </div>
            ))}
          </div>
          <span className="display text-3xl leading-none transition-transform duration-500 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
