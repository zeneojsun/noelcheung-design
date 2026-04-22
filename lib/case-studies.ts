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
    meta: "OKX · 2023 · Crypto & Fintech",
    title: "OKX Lite — a mobile-first entry point for ",
    titleEm: "first-time crypto users.",
    role: "Lead Product Designer · 0→1",
    body: "Led product design for OKX's onboarding and simplified-trading surface, targeting users new to crypto in emerging markets. Balanced regulatory constraints, a 12-language rollout, and a trading engine never designed for novice flows.",
    impact: [
      { value: "+38%", label: "activation" },
      { label: "among first-time users" },
      { value: "−52%", label: "time-to-first-trade" },
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
