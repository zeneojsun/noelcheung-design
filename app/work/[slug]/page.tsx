import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Not found" };
  return {
    title: `${cs.title}${cs.titleEm} — Noel Cheung`,
    description: cs.body,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <Header />

      <main>
        <article className="max-w-site mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="pt-12 pb-6 border-b border-rule">
            <Link
              href="/work"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted border-b border-transparent hover:border-accent hover:text-accent transition-colors"
            >
              ← All work
            </Link>
          </div>

          {/* Case hero */}
          <section className="py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-2 space-y-4">
                <MetaItem label="Case" value={`№ ${cs.num}`} />
                <MetaItem label="Year" value={cs.meta.split(" · ")[1] ?? ""} />
              </div>
              <div className="md:col-span-3 space-y-4">
                <MetaItem label="Role" value={cs.role} />
                <MetaItem
                  label="Status"
                  value={cs.badge ?? "Shipped"}
                />
              </div>
              <div className="md:col-span-7">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent mb-4">
                  {cs.meta}
                </p>
                <h1 className="display text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-8">
                  {cs.title}
                  <em>{cs.titleEm}</em>
                </h1>
                <p className="text-xl leading-relaxed text-ink/80">
                  {cs.body}
                </p>
              </div>
            </div>

            {/* Impact band */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-ink py-8 gap-px">
              {cs.impact.map((stat, i) => (
                <div
                  key={i}
                  className="px-4 first:pl-0 md:border-r border-rule last:border-0"
                >
                  {stat.value && (
                    <p className="display text-3xl md:text-5xl tabular leading-none mb-2">
                      {stat.value}
                    </p>
                  )}
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Placeholder body — ready for content port */}
          <section className="py-12 md:py-16">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 md:col-start-3 space-y-10">
                <PlaceholderBlock title="Context">
                  This is the case study shell. Drop your written content, screenshots, diagrams, and decisions here — or paste existing HTML from a separate file.
                </PlaceholderBlock>

                <PlaceholderBlock title="Problem & constraints">
                  What made this hard? What were you optimising for, and what were you giving up? Show the tradeoffs senior hiring managers want to see.
                </PlaceholderBlock>

                <PlaceholderBlock title="Approach">
                  Walk through the key design decisions. Don't list the process — show the thinking that shaped the outcome.
                </PlaceholderBlock>

                <PlaceholderBlock title="Outcome & what I learned">
                  Quantitative where possible, qualitative where not. What did you take from this into the next engagement?
                </PlaceholderBlock>
              </div>
            </div>
          </section>

          <hr className="border-rule my-8" />

          {/* Next case */}
          <section className="py-16 md:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-4">
              Next case
            </p>
            <Link href={next.href} className="group block">
              <h2 className="display text-3xl md:text-5xl leading-[1.1] group-hover:text-accent transition-colors">
                {next.title}
                <em>{next.titleEm}</em>{" "}
                <span className="inline-block group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </h2>
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-1">
        {label}
      </p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

function PlaceholderBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="display text-3xl md:text-4xl mb-6">{title}</h2>
      <p className="text-lg leading-relaxed text-ink/80">{children}</p>
    </div>
  );
}
