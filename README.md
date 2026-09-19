# Siddharth Selvaraj — Portfolio

Production-ready developer portfolio with case-study pages, built on the Next.js
App Router. Populated with real CV content. Every section is driven by a typed
data array, so editing it means changing `lib/`, not hunting through JSX.

## Still to fill in

These are the only placeholders left — nothing was invented to fill them:

| Where | What |
|---|---|
| `lib/site.ts` → `url` | Your real domain. `metadataBase` derives every absolute URL from it. |
| `lib/site.ts` → `socials` | GitHub / LinkedIn / Twitter. Any left as `""` renders no icon. |
| `lib/site.ts` → `companyUrl` | Optional. Empty renders the company as plain text. |
| `lib/posts.ts` | Empty array — the Writing section is hidden until you add an entry. |
| `public/resume.pdf` | Drop your CV here so the hero button works. |
| `public/projects/*.png` | Generated placeholders. Swap for real screenshots (16:10). |
| `app/layout.tsx` | Twitter `creator` handle, commented out. |

Project entries have `github`, `demo` and `stars` set to `null` because the work
is client-owned and not public — those links and the star badge simply do not
render. Set a real URL on any entry and it appears.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run typecheck
```

## Customise in four files

| File | Controls |
|---|---|
| `lib/site.ts` | Name, role, company, email, socials, hero intro, typing roles, stats |
| `lib/projects.ts` | Projects **and** their full case studies |
| `lib/skills.ts` | Skill groups shown in the icon grid |
| `lib/experience.ts` | Timeline entries |
| `lib/posts.ts` | Writing section cards |

Replace `/public/projects/*.png` with real screenshots (1200×750 or any 16:10),
and drop your CV at `/public/resume.pdf`.

## Components

| Component | Responsibility |
|---|---|
| `Nav` | Sticky header, hamburger menu under `md`, Escape-to-close, scroll lock |
| `Hero` | Heading, typing roles, CTAs, socials, terminal decoration |
| `TypingRoles` | Types/deletes roles; static under `prefers-reduced-motion` |
| `About` | Summary, stats, stack cloud, fun fact |
| `Skills` | Four-column labelled grid — no progress bars by design |
| `ProjectGrid` / `ProjectCard` | Responsive grid; image top, content bottom, lift on hover |
| `OpenSource` | Contribution graph, notable contributions, profile link |
| `Writing` | Three article cards with date and read time |
| `ExperienceTimeline` | Vertical timeline with a spine and current-role marker |
| `ContactCTA` / `ContactForm` | Email, response time, accessible form |
| `Section` | Shared section shell — semantic `<section>` + `aria-labelledby` |

### Card pattern

`ProjectCard` uses a **stretched-link**: the title anchor carries
`after:absolute after:inset-0`, so the whole card is one click target while the
repo and demo links sit at `relative z-10` and stay independently focusable.
Reuse that pattern for any new card rather than nesting anchors, which is
invalid HTML and breaks keyboard navigation.

## Case-study routing

Case studies live at `/work/[slug]`, rendered from the `caseStudy` object on each
project. `generateStaticParams` pre-renders all of them at build time (they appear
as `●  (SSG)` in build output) and `generateMetadata` gives each page its own
title, description, canonical URL and OG image.

Add a project by appending to the `projects` array — the route, the sitemap entry
and the card all follow automatically. Nothing else to register.

## Image optimization

Project images go through `next/image` with `fill` plus an explicit `sizes` so
the browser requests an appropriately scaled asset. `next.config.mjs` enables
AVIF and WebP. The first two cards get `priority` to avoid a lazy-load delay on
the largest contentful paint. For remote screenshots, add the host to
`images.remotePatterns`.

## SEO

- Title template, description and keywords targeting developer-portfolio queries
- OpenGraph + Twitter card metadata, per-case-study overrides
- JSON-LD `Person` schema in the root layout
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`

Set `site.url` to your real domain before deploying — `metadataBase` derives
every absolute URL from it.

## Accessibility

- Skip-to-content link, visible focus rings, semantic landmarks throughout
- Typing effect exposes the full role list to screen readers via `sr-only`,
  animated text is `aria-hidden`
- Hamburger uses `aria-expanded` / `aria-controls`; Escape closes it
- Form status announced with `role="status"` and `aria-live="polite"`
- `prefers-reduced-motion` collapses animation and smooth scroll globally

## Responsive breakpoints

Mobile-first. `sm` 640px, `md` 768px (nav switches to hamburger below this),
`lg` 1024px (hero and contact become two columns).

## Contact form

`ContactForm` is wired to a stubbed submit that resolves after 700ms. Replace it
with a real call:

```ts
await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
});
```

Then add `app/api/contact/route.ts` using Resend, Postmark, or Formspree.

## Deployment

**Vercel** — import the repo; zero configuration needed.

**Static hosting** (Netlify, GitHub Pages, S3) — the site is fully static, so add
`output: "export"` and `images: { unoptimized: true }` to `next.config.mjs`, then
`npm run build` and deploy `out/`. Note this trades away `next/image`
optimization.

## Theme

Committed dark theme with a phosphor-amber accent. Tokens live in
`tailwind.config.ts` (`ground`, `surface`, `raised`, `line`, `ink`, `muted`,
`amber`). For a light mode, add `darkMode: "class"`, define light values for those
same tokens, and toggle the class on `<html>` — no component changes required,
since nothing hardcodes a colour.
