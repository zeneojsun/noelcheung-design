export type CaseStudy = {
  num: string;
  slug: string;
  meta: string;
  badge?: string;
  title: string;
  titleEm?: string;
  role: string;
  body: string;
  impact: { value?: string; label: string }[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    num: "01",
    slug: "okx-lite",
    meta: "OKGroup · 2022–23 · Design System · Mobile",
    title: "OKX Lite Design System.",
    role: "Product Design Lead",
    body: "Built OKX Lite's design system from scratch. Shipped MVP in 3 months with 98% adoption at rollout.",
    impact: [
      { value: "40%", label: "cost saving" },
      { value: "1000+", label: "components" },
      { value: "98%", label: "adoption" },
      { label: "Governance model" },
    ],
    href: "/work/okx-lite",
  },
  {
    num: "02",
    slug: "hsbc-india",
    meta: "HSBC · 2021 · Fintech · Mobile + Web",
    title: "HSBC India Wealth Account",
    role: "UXUI Design Lead (via Zühlke)",
    body: "Failed two HSBC Global Design Standard reviews. Rescued and shipped in 2 months.",
    impact: [
      { value: "2×", label: "failed reviews before I joined" },
      { value: "2mo", label: "full turnaround to ship" },
      { label: "Passed HSBC Global Design Standard" },
    ],
    href: "/work/hsbc-india",
  },
  {
    num: "03",
    slug: "melco",
    meta: "Melco · 2019–21 · Design System · Mobile",
    title: "Melco Member App Design System",
    role: "Design Systems Lead · Project Lead",
    body: "Led 0→1 design system across 3 resort brands. 1,000+ components. 40% time savings.",
    impact: [
      { value: "1,000+", label: "components" },
      { value: "40%", label: "time savings" },
      { value: "2×", label: "team efficiency" },
      { value: "3", label: "resort brands" },
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
