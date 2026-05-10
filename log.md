# Changelog — noelcheung.design

## Session 2 — 2026-05-08 / 09

### Button style
- CTA buttons updated to match reference: `h-12` (48px), `text-sm` (14px), `font-medium`
- "Book a call" — white bg, ink text, no border, inverts on hover
- "Email me" / "Get in touch" — stays dark (ink bg, paper text)

### HSBC logo
- Replaced placeholder SVG with official HSBC logo (diamond mark + wordmark, light variant)

### Homepage — 13-point update
1. "Case studies /" section label removed
2. Arrow removed from each case study row
3. Image placeholder (16:7 ratio) added above each case study card
4. Case study title changed to bold
5. Meta label moved below title, reduced to 10px
6. "See all works →" changed to "Learn more" outlined pill button
7. Stats: `+` suffix removed (`$300M`, `10`, `20`); text locked to 64px
8. Client logos: scrolling carousel replaced with static 6×2 grid
9. New **Services** section added below Engagements (same accordion layout)
10. Services left title: "How we work together"
11. Services list: Design Audit / Design System Build / 0→1 Product Design / Fractional Design Lead / Product Turnaround / UX Strategy · 0→1 Execution

### Newsletter section
- Added below Services
- Title + description + pill input with inline Subscribe button
- Shows confirmation message on submit
- Not yet wired to email provider (pending)

### Mentorship section
- Added below Newsletter
- Left: title "1:1 mentorship & coaching" + description + "Get in touch" underline link
- Right: two cards — Leadership Coaching + Design Mentorship
- Card style: white `bg-surface`, `rounded-2xl`, padded

---

## Session 1 — 2026-05-07 (approx)

### Font
- Switched from DM Sans + JetBrains Mono → **Satoshi** (via Fontshare CDN)
- Both `--font-sans` and `--font-mono` point to Satoshi

### Layout & spacing
- `max-w-site` updated to 1200px
- Container padding: `px-5 md:px-8 lg:px-12`
- Hero: `pt-[70px] pb-16`; eyebrow `mb-10`; description `mb-12`
- Section spacings locked: case studies `pt-12 pb-[112px]`, clients `pt-16 pb-24`, engagements `pt-16 pb-[120px]`

### Hero
- Headline changed from "I help" → "Noel helps"
- Title weight: `font-medium` → `font-semibold` (600)
- Eyebrow label moved below title
- Green availability dot removed from eyebrow

### Stats section (StatsSection.tsx)
- Rebuilt with Framer Motion: `useInView` scroll trigger, `animate()` count-up, staggered per block
- Labels moved above numbers
- Single "Get in touch" CTA replacing previous two-button layout

### Footer restructure
- Services list moved to right column
- Social icons moved below CTAs on left
- "Elsewhere" label removed
- "Built with Claude" removed
- CV / download icon removed
- Instagram removed
- X link → `x.com/zeneojsun`
- Behance added → `behance.net/zeneojsun`
- ADPList: text fallback "ADP" (official SVG unavailable on Simple Icons)
- Copyright updated → © 2026 Noel Cheung

---

## Pending / not done yet

- [ ] Newsletter not wired to email provider (Mailchimp / Resend / ConvertKit)
- [ ] ADPList logo — official SVG not available, using text fallback
- [ ] OKX Lite case study content is wrong (fabricated) — real content needed
- [ ] HSBC hire bullet in page.tsx is fabricated — Noel to replace with real narrative
- [ ] Social URLs in `lib/site-config.ts` — confirm all handles are correct
- [ ] `/public/cv.pdf` — upload real CV
- [ ] Confirm `hello@noelcheung.design` and `cal.com/noelcheung` are live
- [ ] OG image (`/public/og-image.png`) for social sharing
- [ ] Custom domain `noelcheung.design` not yet pointed to Vercel
- [ ] 5 old Vercel projects to delete (see CLAUDE.md)
- [ ] Analytics (Plausible / Fathom)
