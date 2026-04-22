export type CaseStudy = {
  num: string;
  slug: string;
  meta: string;
  badge?: string;
  title: string;
  titleEm: string; // italic/accent portion
  role: string;
  body: string;
  impact: { value?: string; label: string }[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    num: "01",
    slug: "a2ui",
    meta: "Independent research · 2024—Present · Agentic AI",
    badge: "Ongoing",
    title: "A2UI — design-to-code ",
    titleEm: "for non-deterministic systems.",
    role: "Founder · Design Engineering",
    body: "Ongoing research on what design-system infrastructure looks like when an AI agent sits between designer and codebase. The work lives in the gaps traditional DS tools don't handle: surfacing model confidence, designing review-able AI output, correction UX when the agent gets it wrong, and keeping the token system as the source of truth.",
    impact: [
      { value: "Zero", label: "manual handoff" },
      { label: "design tokens → production" },
      { value: "Open", label: "research" },
    ],
    href: "/work/a2ui",
  },
  {
    num: "02",
    slug: "okx-lite",
    meta: "OKX · 2022 · Design Systems",
    title: "OKX Lite — design system ",
    titleEm: "0→1, sole designer, 3 months.",
    role: "Design Systems Lead · Sole Designer",
    body: "Built OKX Lite's complete design system from scratch — concurrent with the MVP build. Foundation, component library, dark/light themes, governance model, and a 1,050-video async enablement layer. 98% adoption at rollout; 95% maintained a year later as the team scaled from 2 to 7 designers.",
    impact: [
      { value: "98%", label: "component adoption at rollout" },
      { value: "3mo", label: "zero to full system" },
      { value: "1→7", label: "team scaled, system held" },
    ],
    href: "/work/okx-lite",
  },
  {
    num: "03",
    slug: "hsbc-wealth",
    meta: "HSBC · 2021–22 · Enterprise Wealth",
    title: "HSBC Wealth — a cross-market design system ",
    titleEm: "holding 12 countries together.",
    role: "Senior Product Designer · Design Systems",
    body: "Built token architecture and component governance for HSBC's wealth platform across 12 jurisdictions — reconciling accessibility standards, right-to-left support, regulatory copy, and 40+ product teams working in parallel.",
    impact: [
      { value: "12", label: "markets" },
      { value: "40+", label: "product teams" },
      { label: "shared source-of-truth" },
    ],
    href: "/work/hsbc-wealth",
  },
  {
    num: "04",
    slug: "melco",
    meta: "Melco · 2020 · Hospitality",
    title: "Melco — unifying loyalty across ",
    titleEm: "four integrated resorts.",
    role: "Product Designer · 0→1 Mobile",
    body: "Ground-up redesign of the loyalty mobile app spanning gaming, hotel, dining, and retail across Melco's Asia properties. The hard part wasn't the interface — it was modelling a single member identity across four operationally separate businesses.",
    impact: [
      { value: "4", label: "properties" },
      { value: "2M+", label: "loyalty members" },
      { label: "unified across verticals" },
    ],
    href: "/work/melco",
  },
];
