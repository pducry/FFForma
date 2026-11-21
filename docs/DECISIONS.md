# Decisions

## 2026-11-21 — FormaSite 3 is a side project for creative resources

**Decision.** The new site is FormaSite 3. Forma is Pedro Julien's design side project, focused on creative resources: disruptive visuals, branding, and a bit of product. It is not a mentoring-first personal portfolio, and it is not a studio site with a price list. Mentoring and Cal.com stay as a small path on the contact page.

This supersedes the earlier decision on this branch that ffforma.design would stay the one-page personal portfolio.

**Why.** Pedro changed the positioning after that decision. The live one-pager was a portfolio with mentoring up front. FormaSite 3 borrows the structure of [VioCorp](https://viocorp.systems/work) (a short nav, a work index, a case per project, an experiments lab, an info page) and keeps Forma's own type, color, and voice. VioCorp's look is not the reference.

**Voice, for Pedro to pick.** Two lines are in the copy. Option A is the line the site uses until he chooses. Option B sits on the info page as the alternate.

- A. "Forma is a side project for disruptive visuals, brand systems, and the occasional product."
- B. "Make the mark. Then put it on something real."

**What a case may say.** The repo has images, one video, and two public links (Foracle, Artas). It does not have research notes, concept write-ups, or client facts. Case pages use the process outline (summary, research, concept, construction, brand system, application, renders) and mark every empty section as a placeholder for Pedro. Image sections are labeled as files on hand, without invented captions. The Objects strand is the same: a place for posters and apparel from his t-shirt store, with no product shots in the repo yet.

## 2026-11-21 — FormaSite 3 is a static Astro site, deployed by GitHub Actions

**Decision.** The multi-page site is Astro with static output. GitHub Actions builds it and deploys to Pages. `CNAME` stays `ffforma.design`.

This supersedes the earlier decision to avoid a build so the current "deploy from branch /" setting could stay.

**Why.** Pedro asked for separate pages per case, an experiments lab, info, and contact. A build is the straightforward way to share one layout across those pages. Pages for this repo currently publishes the `main` branch from `/`. After this change the root is source, not the built site, so the live domain breaks until Pages → Source is set to **GitHub Actions**.

## 2026-11-21 — The old image backup leaves the tree, not the history

**Decision.** `Imagens-antigas-backup/` is deleted in a normal commit so GitHub Pages stops serving it. History is not rewritten.

**Why.** The folder is about 22 MB, nothing on the site links to it, and a public Pages site was serving it anyway. Rewriting history would force a force-push to `main` and is not wanted. The files remain reachable from older commits.

## 2026-11-21 — Contact posts to Formspree, not to an inbox in the source

**Decision.** Cal.com stays the booking link, as a small contact path. A short note form posts to `https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID`. Pedro replaces that placeholder with a form id from Formspree. The id is not an email address, and no personal email is written into the source.

**Why.** The older `pducry/FFForma-site` form put a personal address in the page, which any visitor could read. A form endpoint does not. Until the placeholder is replaced, submit stays on the page and says the form is not connected.
