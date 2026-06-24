# Dinusanth Surendran — Portfolio

A premium, fully self-contained single-file personal portfolio for Dinusanth Surendran, a software developer in Toronto, ON building production automation, deployment pipelines, and quantitative trading systems. Everything (HTML, CSS, JS) lives inline in `index.html`.

The design is a refined dark "engineer/quant" aesthetic: a deep ink near-black background with soft off-white text and a cool emerald/mint accent used sparingly for highlights, links, and a soft hero glow. Typography is fluid `clamp()` throughout (Fraunces display serif for headings + Inter for body), fully responsive from 375px to ultrawide. Motion is tasteful and accessibility-aware — a soft emerald hero glow over a masked grid, scroll-reveal fade/slide-ups (staggered via IntersectionObserver), a custom lerping cursor, magnetic buttons, pointer-tracking card glow, a sticky condensing header, and a faint grain overlay — all of which degrade gracefully and respect `prefers-reduced-motion` and touch devices. The only external resources are Google Fonts; everything else (icons, grain) is inline, so it works offline (minus fonts) and needs no build step.

Sections: Hero · About · Experience (timeline) · Projects · Skills · Education · Contact/Footer.

## Deploy

Drop this folder into Vercel or Netlify (drag-and-drop deploy) — no build step required. You can also just open `index.html` directly in a browser.

## Résumé

The "Download résumé" / footer "Résumé" buttons link to `./resume.pdf`. Add your real résumé as `resume.pdf` in this folder to enable the download.
