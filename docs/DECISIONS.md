# Decisions

## 2026-11-21 — FFForma stays a personal portfolio

**Decision.** [ffforma.design](https://ffforma.design) stays Pedro Julien's personal portfolio and mentoring page. It does not become a studio site, and it does not grow a price list, package menu, or a "hire the studio" offer.

**Why.** That is what is live today: one column of selected work, six experiments, a short mentorship note, and a Cal.com booking link. The intro was already rewritten away from studio language and toward a design-engineering portfolio. A studio site would need offers, rates, a process, and a client list this page does not have, and it would compete with [pedrojulien.com](https://www.pedrojulien.com), which the intro already links to.

**What this rules out.** Case-study pages written to sell a service, public pricing, and a contact form whose job is to qualify studio leads. Mentoring can still sit next to "Book a call," including a short briefing form, because mentoring is already part of the page.

## 2026-11-21 — Keep the site plain, and split the homepage into files

**Decision.** Do not migrate to Astro or any other multi-page framework. The homepage stays one page. Its CSS lives in `css/site.css` and its behavior in `js/` (`i18n.js`, `theme.js`, `cal.js`, `ascii-egg.js`, `work.js`). The six experiments stay the standalone pages they already are.

**Why.** Selected work is a hover gallery, not written case studies. Mentorship is two paragraphs. Separate pages per project would invent content and change the composition. The experiments are already their own documents.

A build step was considered and skipped. GitHub Pages for this repo publishes the `main` branch from `/` (legacy branch source, custom domain `ffforma.design`). Shipping only source that needs a build would take the live site down until the Pages source was switched to GitHub Actions. Static files at the repository root keep the current setting working, with no owner action required on merge.

## 2026-11-21 — The old image backup leaves the tree, not the history

**Decision.** `Imagens-antigas-backup/` is deleted in a normal commit so GitHub Pages stops serving it. History is not rewritten.

**Why.** The folder is about 22 MB, nothing on the site links to it, and a public Pages site was serving it anyway. Rewriting history would force a force-push to `main` and is not wanted. The files remain reachable from older commits.

## 2026-11-21 — Mentoring brief goes to Formspree, not to an inbox in the source

**Decision.** Cal.com stays the way to book a call. Under it, a short mentoring brief posts to `https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID`. Pedro replaces that placeholder with a form id from Formspree. The id is not an email address, and no personal email is written into the HTML, CSS, or JS.

**Why.** The older `pducry/FFForma-site` form put a personal address in the page, which any visitor could read. A form endpoint does not. Until the placeholder is replaced, submit does nothing except say the form is not connected and point back at the booking link.
