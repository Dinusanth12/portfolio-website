# LinkedIn draft — portfolio rebuild

Draft only. Review, edit to taste, and post yourself — nothing here gets published automatically.

---

Rebuilt my portfolio site this week. The constraint I gave myself: no framework, no build step, no node_modules — just one `index.html` with everything inline.

A few specifics I'm actually proud of:

- The avatar's rotating ring and the featured project card's gradient border are driven by `@property` typed CSS custom properties animating a `conic-gradient()` — no canvas, no JS animation loop, just the browser's own compositor.
- The experience timeline draws itself in on scroll and the metrics count up once, using IntersectionObserver instead of a scroll-jank library.
- Résumé download link checks itself with a HEAD request on load and just hides if the file isn't there — no dead links, no 404s.
- Everything respects `prefers-reduced-motion` and works with no JS at all if it has to.

It's live at dinusanth-portfolio.vercel.app, deployed straight from that one file (had to add a `vercel.json` to stop Vercel from trying to auto-detect it as a Next.js app).

Also using it to point people at NexLane, the outreach platform I've been building — site generator, scheduling engine, Gmail OAuth sending, Stripe, all of it.

Small project, but a good reminder of how much the platform gives you for free before you reach for a framework.

---

Optional shorter/punchier alt version:

Spent the week rebuilding my portfolio as a single static HTML file — no React, no build step. Used `@property` + `conic-gradient()` for the animated avatar ring instead of canvas, IntersectionObserver for the scroll-drawn timeline, and a self-checking résumé link so it never 404s. Live at dinusanth-portfolio.vercel.app — also where I'm showcasing NexLane, the outreach platform I've been shipping.
