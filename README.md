# Dinusanth Surendran — Portfolio

A premium, fully self-contained single-file personal portfolio for Dinusanth Surendran, a software developer in Toronto, ON building production automation, deployment pipelines, and quantitative trading systems. Everything (HTML, CSS, JS) lives inline in `index.html`.

The design is a refined dark "engineer/quant" aesthetic: a deep ink near-black background with soft off-white text and a cool emerald/mint accent used sparingly for highlights, links, and a soft hero glow. Typography is fluid `clamp()` throughout (Fraunces display serif for headings + Inter for body), fully responsive from 375px to ultrawide. Motion is tasteful and accessibility-aware — a soft emerald hero glow over a masked grid, scroll-reveal fade/slide-ups (staggered via IntersectionObserver), a custom lerping cursor, magnetic buttons, pointer-tracking card glow, a sticky condensing header, and a faint grain overlay — all of which degrade gracefully and respect `prefers-reduced-motion` and touch devices. The only external resources are Google Fonts; everything else (icons, grain) is inline, so it works offline (minus fonts) and needs no build step.

Sections: Hero · About · Experience (timeline) · Projects · Skills · Education · Contact/Footer.

## Deploy

Drop this folder into Vercel or Netlify (drag-and-drop deploy) — no build step required. You can also just open `index.html` directly in a browser.

## Résumé

The "Download résumé" / footer "Résumé" buttons link to `./resume.pdf`. Add your real résumé as `resume.pdf` in this folder to enable the download. If the file isn't present, a small script HEAD-checks it on load and hides the download links instead of leaving a dead link.

## Run locally

No build step, no dependencies. Either:

- Open `index.html` directly in a browser, or
- Serve the folder so the résumé fetch check behaves like production: `npx serve .` (or `python -m http.server`) from this directory, then visit the printed localhost URL.

## Status / version history

Last updated: **2026-07-07**. Live at [dinusanth-portfolio.vercel.app](https://dinusanth-portfolio.vercel.app/), deployed from this repo via Vercel (static, no framework/build — see `vercel.json`).

| Date | Change |
| --- | --- |
| 2026-07-07 | "Awwwards-level" pass: hero line-reveal + parallax, avatar orbit ring, scroll-drawn timeline with count-up metrics, skills marquee, 3D tilt/sheen project cards with a full-width featured NexLane card, mobile nav overlay, scroll-spy nav, copy-email toast, perf cleanup (single scroll listener/rAF) — still one static file |
| 2026-06-25 | Avatar added to hero, placed side-by-side with name (responsive) |
| 2026-06-24 | v2 rewrite: ink + emerald visual direction, updated résumé (RBC Capital Markets), NexLane added as a featured project, `vercel.json` added to force static deploy (fixes a Next.js auto-detection error on Vercel) |

Everything ships as a single `index.html` — there is no package manager, dependency, or build tooling to keep current. "Version" here just means "state of that one file," tracked through normal commits.
