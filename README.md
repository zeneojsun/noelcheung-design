# noelcheung.design

Personal portfolio for Noel Cheung — Staff Product Designer.

Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS.

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server (hot reload) |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Run Next.js linter |

---

## Site structure

```
/                  → Homepage (single-page with anchors)
  #work            → Case studies section
  #about           → About section  
  #contact         → Footer with hiring CTA

/work              → Full case study index
/work/a2ui         → A2UI (Agentic AI side project)
/work/okx-lite     → OKX Lite case study [template — port your HTML]
/work/hsbc-wealth  → HSBC Wealth [template]
/work/melco        → Melco loyalty [template]
```

## File organisation

```
app/
├── layout.tsx              → Fonts, metadata, site shell
├── globals.css             → Design tokens + animations + grain
├── page.tsx                → Homepage — all sections inline
├── work/
│   ├── page.tsx            → Case study index
│   └── [slug]/
│       └── page.tsx        → Dynamic case study route (template)

components/
├── Header.tsx              → Sticky blur nav
├── Footer.tsx              → Hiring CTA + socials
└── WorkCard.tsx            → Editorial row with ink-inversion hover

lib/
├── site-config.ts          → Nav, email, cal.com, clients, marquee items
└── case-studies.ts         → Typed case study data (single source)
```

---

## Adding a new case study

1. **Add entry to `lib/case-studies.ts`:**
   ```ts
   {
     num: "05",
     slug: "new-project",
     meta: "Client · 2026 · Industry",
     badge: "Ongoing",  // optional
     title: "Project title — ",
     titleEm: "italic emphasis portion.",
     role: "Your role",
     body: "One or two sentences on complexity + constraints + decisions.",
     impact: [
       { value: "+40%", label: "metric A" },
       { label: "qualitative outcome" },
     ],
     href: "/work/new-project",
   }
   ```

2. **Route auto-generates** — `/work/new-project` will work immediately with template shell via the dynamic `[slug]` route.

3. **Customise detail page** — edit `app/work/[slug]/page.tsx` to branch per slug, OR create `app/work/new-project/page.tsx` for a bespoke layout (Next.js will prefer the static route).

---

## Design system

`tailwind.config.ts` + `app/globals.css`.

| Token | Value | Use |
|---|---|---|
| `paper` | `#f4f1ea` | Background |
| `ink` | `#1a1815` | Primary text |
| `accent` | `#a8421e` | Rust accent (italic emphasis, highlights) |
| `muted` | `#6b655d` | Secondary text |
| `rule` | `#d8d3c8` | Borders, dividers |

**Typography:**
- Display — **Fraunces** (variable: `opsz`, `SOFT`, `WONK`)
- Body — **Geist**
- Mono — **Geist Mono**

All loaded via `next/font/google` for zero CLS.

**Availability signal:** `#2e7a45` green with pulse (WCAG AA compliant).

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Point `noelcheung.design` DNS at Vercel per their instructions.

### Other hosts

Any host supporting Next.js 15 (Netlify, Cloudflare Pages, self-hosted Node).

---

## Content review before shipping

1. ⚠️ **Replace fabricated HSBC narrative** in `app/page.tsx` (hire section bullet 02) with real "noticed/proposed/adopted" example.
2. ⚠️ **Verify client list** in `lib/site-config.ts` — remove any you didn't actually work with.
3. ⚠️ **Update CV PDF** at `/public/cv.pdf` (currently blank — needs upload).
4. ⚠️ **Social links** in `lib/site-config.ts` — replace LinkedIn/Read.cv/ADPList URLs with your actual handles.
5. ⚠️ **Email** — confirm `hello@noelcheung.design` is set up, or change in `lib/site-config.ts`.
6. ⚠️ **Cal.com link** — confirm `cal.com/noelcheung` is configured.

---

## Next steps

- [ ] Port OKX Lite case study content into `/work/okx-lite`
- [ ] Write A2UI case study with AI design-problem narrative
- [ ] Write HSBC Wealth case study
- [ ] Write Melco case study
- [ ] Add hero/thumbnail imagery to `/public`
- [ ] Analytics (Plausible or Fathom — privacy-respecting)
- [ ] `/public/og-image.png` for social sharing
- [ ] Configure domain + SSL on Vercel
