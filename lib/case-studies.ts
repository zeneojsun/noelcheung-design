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
    meta: "01 · OKGROUP · 2022–23 · 4 MONTHS · DESIGN SYSTEM · MOBILE",
    title: "OKX Lite Design System",
    role: "Product Design Lead",
    body: "Built OKX Lite's design system from scratch. Shipped MVP in 4 months with 95% adoption and 90%+ designer satisfaction.",
    impact: [
      { value: "40%", label: "cost saving" },
      { value: "1000+", label: "components" },
      { value: "95%", label: "adoption" },
      { label: "Governance model" },
    ],
    href: "/work/okx-lite",
  },
  {
    num: "02",
    slug: "hsbc-india",
    meta: "02 · HSBC · 2021–22 · 3 MONTHS · ONBOARDING · WEB + MOBILE",
    title: "HSBC India Onboarding",
    role: "Senior UX Consultant (via Zühlke)",
    body: "Rescued a shelved India onboarding project. Secured cross-regional GDR approval, eliminated all manual operations, and 7× user submissions.",
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
    meta: "03 · MELCO · 2019–21 · 3 MONTHS · DESIGN SYSTEM · MOBILE",
    title: "Melco Member App",
    role: "Senior UX Designer",
    body: "Designed Melco's first member loyalty app. Cut production cost by 40% and doubled team efficiency through a reusable system.",
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
