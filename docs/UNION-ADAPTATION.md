# Union adaptation

This branch (`formasite3-union`) restyles FormaSite 3 toward [union.design](https://union.design). It starts from `cursor/portfolio-structure-7672` and does not replace that branch. Nothing here is meant to be merged, and the GitHub Pages workflow still deploys only from `main`.

## Run it locally

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`.

## Structure

```
/                     Index. One scroll: a display line, then each case.
/#ffforma             001
/#combustion          002
/#pace                003
/#foracle             004
/#artas               005
/#objects             006  No product photos. Text only.
/research/            The six experiments, dated and tagged.
/experiments/<slug>/  The original interactive pages, unchanged.
/information/         Existing lines only.
/inquire/             Four-step form.
/contact/             Cal.com. No email address.
/legal/               States that legal text is not in the repo.
/work/<case>/         Redirects to /#<case>
/work/                Redirects to /
/work/objects/        Redirects to /#objects
/info/                Redirects to /information/
/experiments/         Redirects to /research/
```

The header is fixed in three zones: logo and Forma, Index / Research / Information, and a live label (`001 FFForma / Images on file · 2026`) that follows the case under a line 42% down the viewport. The footer is fixed: © 2026 Forma, a local clock with its UTC offset and a black status dot, Inquire, then EN/PT, Legal, and Contact.

## What changed

- The page is white (`#fff` / `#fafafa`), text is `#111`, secondary text is `#999`, and image tiles sit on `#f2f2f2`. There is no chartreuse and no theme toggle.
- Type is Inter at 10px, with Helvetica Neue / Helvetica / Arial behind it. The word Forma in the first screen is the one larger display moment. Captions on images are Geist Mono, uppercase.
- Cases are sections of the index, not separate pages. Each image carries a white `001` badge. The outer margin and the gap between modules are 5px. Pictures are not cropped: see Image grids.
- Modules fade and un-blur as they enter, unless the visitor prefers reduced motion.
- The year in the header is the site year 2026. The repo does not record a launch year per case.
- The only lines used as voice are ones already on the site: “Form Follows Function.” and “Design, Engineered.” No new signature was written.
- Inquire posts to `https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID`. The id is still a placeholder. Step 1 is services (Creative Direction, Brand, Product, Website, Others). Next stays grey until a service is chosen. Then details, budget and timeline as empty fields, then a message. Nothing is sent while the placeholder is in place.

## Image grids

`src/lib/frames.ts` reads each file at build time (`image-size` for stills, the mp4 track header for the video) and writes `width` and `height` on the element so the layout does not jump. The video size does not depend on ffprobe, which the Pages runner does not have. Case media does not use `object-fit: cover`, and tiles are not locked to a 4:5 box.

The packer looks at the aspect ratio:

- Wide (1.45 and up): the first frame of a case is full-bleed. Later wide frames share a justified row of two or three.
- Portraits: a pair, side by side.
- Squares: a row of three.
- One small file (longest side under 1000px) on its own: centered on light grey, contained.
- Anything mixed that is left: a justified row. Each cell’s flex-grow is its aspect ratio, so the row shares one height and fills the width. `object-fit: contain` is only there if a cell is larger than the picture.
- Below 700px every row becomes a single column. The picture stays full width and keeps its ratio.

Every still currently in the repo is 16:9, either 800×450 or 1440×810. `foracle-mobile.jpg` is 1440×810 as well, so it is not treated as a portrait. The Artas file is a 480×272 video.

- **FFForma.** Full-bleed, then two justified rows of three. Seven wide frames, so the opener is a hero and the rest fill even rows.
- **Combustion.** Full-bleed, a justified row of three, then a justified pair. Six wide frames; the last two would not fill a row of three.
- **Pace.** Full-bleed, four justified rows of three, then a justified pair. Fifteen wide frames, same rule.
- **Foracle.** Full-bleed, then two justified rows of three. Seven wide frames, including the one named mobile.
- **Artas.** One small video, centered on light grey at 480×272, so it is not scaled up into a fake hero.
- **Objects.** No images in the repo. The section stays a text note.

## What is left

- Replace `REPLACE_WITH_FORMSPREE_ID` in `src/pages/inquire.astro` with a Formspree form id. Do not put an email address in the source.
- Case process notes (research, concept, construction, system) are not on the page. They are not in the repo, and this layout is the image scroll.
- Objects has no posters or shirts to show.
- Legal has no policy text.
- The six experiment tools keep their own pages and their own dark screens.
- Do not merge this branch, and do not point GitHub Pages at it. `.github/workflows/pages.yml` uploads and deploys only when the ref is `main` and the event is not a pull request.
