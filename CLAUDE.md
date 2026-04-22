# CLAUDE.md

This file gives Claude Code the context it needs to help Noel work on this portfolio effectively.

---

## Who this is for

**Noel Cheung** — Independent Product Designer, 15+ years, based in Fukuoka, Japan.
Operating through Human For Human 合同会社. 
Target roles: **Staff / Lead Product Designer** at fintech, crypto, enterprise orgs (Kraken, Circle, Coinbase, RDX Works, etc.).

**Communication style:** Noel writes short, direct messages. Sometimes in Cantonese (be ready to switch). Prefers iterative/visual/action-oriented responses over lengthy explanations.

**Known pattern:** Noel starts many projects and sometimes struggles to finish. This portfolio has already been iterated ~6 times across multiple sessions. **The direction is locked.** Do not re-open foundational questions (typography, colour, structure). Help finish, don't re-explore.

---

## What this site is

A Next.js 15 (App Router) portfolio site for `noelcheung.design`. Single-page homepage with anchors + case study routes.

### Design decisions — LOCKED, do not relitigate

- **Palette:** Paper `#f4f1ea` · Ink `#1a1815` · Rust accent `#a8421e` · Muted `#6b655d` · Rule `#d8d3c8`
- **Typography:** Fraunces (variable, display) + Geist (body) + Geist Mono (mono) — all via `next/font/google`
- **Aesthetic:** Refined editorial minimalism. Warm paper background. Subtle noise grain overlay. Italic rust accents for emphasis. Generous whitespace.
- **Avail signal:** Green `#2e7a45` pulse (WCAG AA compliant). Do not change to rust.

### Things we've already tried and rejected

Do not suggest these, even if they seem relevant:

- Instrument Serif (too AI-cliché in 2026 portfolios)
- Dark mode with 3D orbs / Spline / crypto exchange aesthetic (wrong direction for staff IC)
- Quote-based "Design Philosophy" sections (Saul Bass / Steve Jobs quotes — junior signal)
- "Design Process / Life Cycle" checklist sections (bootcamp signal)
- Gemini-style marketing copy ("Orchestrating", "Democratizing", "Autonomous")
- Generic bootcamp HTML templates (Arial on black, Tilda CMS, etc.)
- Pill-tag "Focus areas" cards in hero (Framer template look)
- Fake UI mockups as case study visuals (red flag for hiring managers)
- Monogram icons (Ds/Ft/En) in expertise cards (startup-y)

---

## Current state (version 6.1 locked)

The homepage sections (in order):

1. **Hero** — availability badge + positioning headline + supporting bio + 3-col positioning strip (Role / Focus / Based)
2. **Client wall** — 12 client names in Fraunces display, hover rust
3. **Marquee** — dark band, skills ticker scrolling
4. **§ 01 Engagements** — "I'm usually brought in when" — 4 engagement patterns
5. **§ 02 Selected Work** — 4 case studies (A2UI → OKX → HSBC → Melco)
6. **Dark impact band** — 15+ years · 12 markets · 40+ teams · Top 100 ADPList mentor
7. **§ 03 Capabilities** — 6-card expertise grid
8. **§ 04 About** — bio + "more about the path" link
9. **Footer** — hiring CTA + social links

Routes:
- `/` — Homepage
- `/work` — Case study index
- `/work/[slug]` — Dynamic case study route (template shell)

---

## ⚠️ Pending tasks

### Critical before shipping

1. **OKX Lite case study content is WRONG in `lib/case-studies.ts`.**
   - Current framing: "mobile-first entry point for first-time crypto users" (onboarding angle — fabricated by Claude)
   - **Real content exists** at an old Vercel site: `v0-website-layout-recreation-git-main-zeneojsuns-projects.vercel.app`
   - **Real angle:** Design System Lead — Global-Ready Design System for OKX Lite
   - **Real impact:** 40% cost saving · 1000+ components · 95% adoption · Global multi-brand · Light/Dark theming · Governance model
   - **Real 3-phase Journey:** (1) Audit & Alignment → Unified vision and roadmap. (2) System Build → 1000+ components and patterns. (3) Rollout & Governance → 95% adoption across teams.
   - **Action:** Update `lib/case-studies.ts` OKX entry with design-system angle + build dedicated `/work/okx-lite/page.tsx` (not the dynamic template) with this real content.

2. **Hire section bullet 02 has FABRICATED HSBC narrative.**
   - Current text: "At HSBC I noticed four markets were forking the component library for local compliance; I proposed splitting brand tokens from market tokens..."
   - **This is invented by Claude.** Noel must replace with a real "noticed X, proposed Y, adopted Z" narrative before shipping.
   - Location: `app/page.tsx`, `hireItems` array, item 02.

3. **Client list verification in `lib/site-config.ts`** — confirm all 12 clients are real engagements.

4. **Social URLs in `lib/site-config.ts`** — currently placeholder handles, need real.

5. **`/public/cv.pdf`** needs to be uploaded.

6. **Email + cal.com links** — confirm `hello@noelcheung.design` and `cal.com/noelcheung` configured.

### Pending case studies (can ship without, but better with)

- **A2UI** detail page — Noel's agentic AI side project. Needs real design-problem narrative (confidence states, correction UX, trust calibration). Currently uses dynamic template.
- **HSBC Wealth** detail page — design system at scale. Uses dynamic template.
- **Melco** detail page — loyalty app 0→1. Uses dynamic template.

### Post-ship

- Analytics (Plausible / Fathom — privacy respecting, not GA)
- `/public/og-image.png` for social sharing
- Deploy to Vercel with custom domain `noelcheung.design`

---

## Old Vercel sites to delete

Noel has 5 old Vercel projects that should be deleted before deploying this one (avoid SEO confusion + stale content):

1. `v0-fork-of-consultant-website` — placeholder consultant template
2. `my-site-git-main-zeneojsuns-projects` — fake DesignMentor testimonials
3. `my-website-8avv6vxen-zeneojsuns-projects` — same as #2 with tweaks
4. `nextjs-eight-flax-82` — create-next-app default
5. `v0-case-study-page-ten` — ACME/TechCorp placeholder

**Keep** #6: `v0-website-layout-recreation-git-main-zeneojsuns-projects` until OKX content is ported to new site, then delete.

---

## How to help Noel well

1. **Ship-focused, not explore-focused.** This portfolio has been in the works for 18+ months. The job is to finish and deploy, not to re-open decisions.
2. **Direct, concise responses.** Noel writes short messages; match that.
3. **Cantonese-friendly.** Noel sometimes switches language; follow their lead.
4. **Flag fabricated content.** If you generate specific metrics / client narratives / quotes, explicitly warn Noel to verify before shipping. Never let fabricated detail get to an interview.
5. **Push back constructively.** If Noel brings a new aesthetic reference (crypto exchange, dark mode, new fonts) that would restart the work, remind them of the pattern and the locked direction. Tough love > enablement.
6. **Run commands freely.** Local env is set up. `npm run dev`, `npm run build`, `vercel deploy` are all available. Use them.

---

## File map

```
app/
  layout.tsx              Root layout — fonts, metadata
  globals.css             Design tokens + animations + grain
  page.tsx                Homepage — all sections inline
  work/
    page.tsx              Case study index
    [slug]/page.tsx       Dynamic case study template

components/
  Header.tsx              Sticky blur nav
  Footer.tsx              Hiring CTA + socials
  WorkCard.tsx            Editorial row with ink-inversion hover

lib/
  site-config.ts          Nav, email, cal, clients, marquee items
  case-studies.ts         Typed case study data (single source)
```

---

## Priority order for next session

1. Port OKX Lite real content (design system angle) → `lib/case-studies.ts` + `app/work/okx-lite/page.tsx`
2. Have Noel replace fabricated HSBC hire bullet with real example
3. Configure social URLs + upload CV
4. Deploy to Vercel
5. Delete 5 old Vercel projects
6. Send to 5 humans for feedback (2 hiring managers, 2 senior designer peers, 1 mentor)
7. Iterate based on human feedback — not AI references
