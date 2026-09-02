# Harshith Arava — Portfolio

Personal portfolio site: home page, About page, and one case-study page per
project. Built with TanStack Start (React), deployed to GitHub Pages.

## Development

```sh
git clone <this-repository-url>
cd portfolio
npm i
npm run dev
```

`npm run build` produces a static export in `.output/public/`, which is what
GitHub Actions deploys. The live site is served under `/portfolio/`
(`https://harshitharava.github.io/portfolio/`), so `vite.config.ts`'s `base`
must stay `/portfolio/` and internal links must go through TanStack's
`<Link>`/`useNavigate` rather than raw `/`-rooted `href`s.

## Stack & structure

- **TanStack Start**, file-based routing — see `src/routes/README.md` for the
  routing conventions (`index.tsx` → `/`, `work.talos-care.tsx` →
  `/work/talos-care`, etc.). `routeTree.gen.ts` is auto-generated; never hand-edit it.
- **Deploy**: GitHub Actions builds and publishes `.output/public/` to GitHub
  Pages on every push to `main`.
- Originally scaffolded with [Lovable](https://lovable.dev); day-to-day
  development now happens directly in this repo, not through the Lovable
  editor. `src/lib/lovable-error-reporting.ts` is the one remaining piece of
  that integration.

## Case studies

Each project has its own route, its own scoped stylesheet, and its own
palette/typography sampled from that project's own source material — case
studies are **not** a shared design system, each one is meant to look like
its own thing.

| Case study | Route | Stylesheet |
| --- | --- | --- |
| Talos Care | `/work/talos-care` | `src/talos-case-study.css` |
| PlayPal | `/work/playpal` | `src/playpal-case-study.css` |
| CityLoop | `/work/cityloop` | `src/cityloop-case-study.css` |
| MyTown | `/work/mytown` | `src/mytown-case-study.css` |
| Infosys Gen AI | `/work/infosys` | `src/infosys-case-study.css` |
| Infosys Equinox | `/work/equinox` | `src/equinox-case-study.css` |
| Bosch BCW | `/work/bosch-bcw` | `src/bosch-bcw-case-study.css` |
| Phytives | `/work/phytives` | `src/phytives-case-study.css` |

Talos Care, PlayPal, CityLoop and MyTown are the four featured **Selected
Work** cards on the homepage; the other three appear in the "A Few More
Things I've Made" secondary row. `src/routes/work.fieldkit.tsx` also exists
but is not linked from the homepage or any other page — it's an orphaned
route from an earlier design iteration, left in place rather than deleted.

Phytives is a brand/packaging project, not a UX flow — its page skips the
research/persona sections the app case studies have and instead walks
About/Brief/Challenge copy, typography + color palette, stationery, and
packaging/campaign renders, matching Bosch BCW's lighter weight rather than
the full Figma-precise treatment of the app case studies.

## Conventions worth knowing before editing a case-study page

- **`--u` scaling unit.** Every case study defines `--u` as one point of its
  own source artboard, e.g. `min(0.833px, calc((100vw - 48px) / 1440))`,
  pinned to a fixed px value below the 1080px breakpoint. All spacing/type in
  that page is written `calc(N * var(--u))`, so it scales with the artboard
  instead of the viewport directly.
- **`ThemedImage`.** Where a composition has separate light/dark exports, a
  small component renders both `<img>`s and CSS shows exactly one via
  `display: none` on the hidden one (never `opacity`/`visibility`, so the
  hidden image never affects layout or briefly co-renders).
- **Mobile hero banners.** All seven case-study heroes use a purpose-cropped
  1149×1478 portrait export for narrow viewports, swapped in via
  `<picture><source media="(max-width: 760px)" srcSet={mobileImg} /><img
  src={desktopImg} /></picture>`. The mobile export usually bakes the title
  (and sometimes the wordmark) directly into the image — the matching HTML
  `<h1>` is `display: none` below 760px so it isn't duplicated. Any body copy
  that isn't baked into the image (a sub-headline, etc.) stays real text and
  needs its own color re-checked for both themes once it moves off the photo
  and onto the plain page background.
- **Site footer** only renders on the home page (`src/routes/__root.tsx`);
  every other route — About and all case studies — supplies its own ending
  and gets no footer.
- Recurring bug classes worth checking after any hero/layout change:
  CSS-specificity conflicts silently overriding a `display` toggle, a
  `<picture>` wrapper breaking a `> img` direct-child selector (use a
  descendant selector), an absolutely-positioned parent not reset to
  `static` on mobile even though its child was, and stale desktop-only
  spacing (e.g. nav-clearance padding) surviving once an element moves into
  normal mobile flow.

## Known gaps

- Infosys Gen AI and Infosys Equinox have no dark-mode asset exports; their
  photos render as-is in both themes by design.
- MyTown's mobile hero banner only has a light-mode export; it's used in
  both themes for now.
- `work.fieldkit.tsx` is unlinked (see above).

## Maintenance

This file should reflect the site's current state, not a full build log —
keep it accurate as things change rather than appending an entry per change.
For change history, use `git log`.
