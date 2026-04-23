export type CaseStudy = {
  num: string;
  slug: string;
  meta: string;
  badge?: string;
  title: string;
  titleEm: string;
  role: string;
  body: string;
  impact: { value?: string; label: string }[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    num: "01",
    slug: "okgroup",
    meta: "OKGroup · 2022–23 · Design Systems",
    title: "OKGroup — design system ",
    titleEm: "0→1 in 4 months.",
    role: "Product Design Lead · Design Systems",
    body: "Built OKGroup's design system from scratch — token architecture, multi-brand component libraries, interaction guidelines. Enabled MVP launch within 4 months. 95% adoption rate; 90%+ user satisfaction in post-launch survey.",
    impact: [
      { value: "95%", label: "adoption rate" },
      { value: "4mo", label: "zero to full system" },
      { label: "90%+ post-launch satisfaction" },
    ],
    href: "/work/okgroup",
  },
  {
    num: "02",
    slug: "hsbc-india",
    meta: "HSBC · 2021–22 · Wealth · India",
    title: "HSBC India Wealth — ",
    titleEm: "turnaround from non-viable.",
    role: "Senior UX Consultant (via Zühlke)",
    body: "Transformed a project flagged as non-viable into a regional success. Secured cross-regional GDR approval and launched a product previously without funding or endorsement from the company. 100% of manual operations eliminated.",
    impact: [
      { value: "7×", label: "submission increase" },
      { value: "100%", label: "manual ops eliminated" },
      { label: "AUM target USD 67M by 2026" },
    ],
    href: "/work/hsbc-india",
  },
  {
    num: "03",
    slug: "melco",
    meta: "Melco · 2019–21 · Design Systems",
    title: "Melco — first design system, ",
    titleEm: "1000+ components.",
    role: "Senior UX Designer · Design Systems",
    body: "Led a team of 7 to build Melco's first company-wide design system from scratch. Saved 40% in production cost, doubled team efficiency. The system became the model adopted by other product teams across the company.",
    impact: [
      { value: "40%", label: "production cost saved" },
      { value: "2×", label: "team efficiency" },
      { value: "1000+", label: "components" },
    ],
    href: "/work/melco",
  },
  {
    num: "04",
    slug: "a2ui",
    meta: "Independent research · 2024–Present · Agentic AI",
    badge: "Research",
    title: "A2UI — design infrastructure ",
    titleEm: "for agentic systems.",
    role: "Personal Research Project",
    body: "Ongoing research on what design-system infrastructure looks like when an AI agent sits between designer and codebase — surfacing model confidence, designing reviewable AI output, correction UX, and keeping the token system as the source of truth.",
    impact: [
      { value: "Open", label: "research" },
      { label: "design tokens → production" },
      { label: "correction UX patterns" },
    ],
    href: "/work/a2ui",
  },
];
