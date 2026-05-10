import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export default function WorkCard({ caseStudy }: { caseStudy: CaseStudy; bare?: boolean }) {
  const { slug, meta, title, titleEm, body, href } = caseStudy;

  const accent = slug === "okx-lite" ? "okx"
               : slug === "hsbc-india" ? "hsbc"
               : slug === "melco" ? "melco"
               : "a2ui";

  return (
    <Link href={href} className="work-row with-thumb">
      <div className={`thumb frame case-${accent}`} data-label={slug} />

      <div>
        <h3 className="work-title">
          {title}{titleEm ? <em>{titleEm}</em> : null}
        </h3>
      </div>

      <div>
        <p className="work-body">{body}</p>
      </div>
    </Link>
  );
}
