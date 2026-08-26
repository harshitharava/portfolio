# Portfolio Polish

Replace the remaining Sasi contact details in Harshith Arava’s portfolio with clearly marked temporary placeholders for email, LinkedIn, canonical URL, and resume, without inventing personal information. 
my linkedin - https://www.linkedin.com/in/harshitharava/ 
my email - aravaharshith@gmail.com 
and remove the 'skills and tools' section entirely 
and about section should open in another page, not scroll down. it isnt a part of home page the footer needs to look like the attached photo with same colors for the light mode, with the same line and instead of medium, use behance 
my Behance link - https://www.behance.net/aravaharshith3

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3a26828b-e6f7-4d89-814e-d884019fdfe6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

---

## Changelog — Selected Work update (16 Aug 2026)

- Updated the **Selected Work** section on the homepage only; no other section, page, or styling was changed.
- Replaced the placeholder project cards (Lumen Health, TransitPay, Atlas) with the three real featured projects.
- Featured projects, in order: **01. Talos Care**, **02. PlayPal**, **03. CityLoop**.
- Added the exact case-study tags for each project:
  - Talos Care — Conversational AI · Human-Centered AI · UX Design · Figma · Accessibility · Conversation Design
  - PlayPal — UX Research · Usability Testing · UI Design · Information Architecture · Prototyping · Interaction Design
  - CityLoop — UX Research · Product Design · Interaction Design · Responsive Design · Accessibility · Design Systems
- Card copy is taken from the corresponding case-study documents; the metrics row now shows factual case-study details (role, duration, tools).
- Removed all fictional placeholder project content and fabricated metrics (73% day-30 retention, 4.8 App Store rating, 2.5× faster UI delivery, etc.).
- Case-study links are left as in-page placeholders until the real case-study pages exist.

## Changelog — Selected Work visuals & marquee (Aug 2026)

- Replaced the placeholder SVG illustrations on the three Selected Work cards with the real project mockups (Talos Care, PlayPal, CityLoop), served via Lovable Assets.
- Cards restyled to a tighter, full-bleed-visual layout: smaller heading and body copy, condensed facts row, no inner gutter on the image panel.
- Tags limited to four per card, plus the project-name chip.
- The scrolling skills band changed from orange to a dark ink band with off-white text and multi-coloured sparkle separators.

## Changelog — Featured card artwork & compact tags (16 Aug 2026)

- Updated the homepage Selected Work cards with the supplied Talos Care, PlayPal, and CityLoop artwork.
- Replaced the remaining placeholder card copy and fictional metrics with the three featured project entries.
- Each featured card now shows a compact set of four chips: the project name plus three relevant case-study tags.
- Kept the dark scrolling skills band with off-white text and multi-coloured sparkle separators.

## Changelog — About portraits (16 Aug 2026)

- Replaced the About-page gallery artwork with the two supplied portrait illustrations.
- Removed horizontal scrolling from the gallery; the dot controls now switch between the two images directly.

## Changelog — Additional design work (16 Aug 2026)

- Revamped the More Projects area as **A Few More Things I&apos;ve Made**.
- Removed the FieldKit, KindLoop, and Veda Research placeholders.
- Added MyTown, Phytives, and The Home Bakery in that order as additional design work, distinct from the primary featured UX projects.
- Added the supplied MyTown visual; the remaining cards retain their existing empty-image treatment until their project artwork is available.

## Changelog — "A Few More Things I've Made" (16 Aug 2026)

- Revamped the secondary projects section on the homepage; no other section was touched.
- Heading changed from **More Projects** to **A Few More Things I've Made**.
- Removed the placeholder projects FieldKit, KindLoop and Veda Research entirely (titles, tags, copy, artwork and links).
- Added three real projects from the Behance portfolio, in this order: **01. MyTown**, **02. Phytives**, **03. The Home Bakery**.
- Tags: MyTown — UX Research · UX Design · Interaction Design; Phytives — Brand Identity · Branding · Visual Design; The Home Bakery — Brand Identity · Branding · Packaging.
- Each card links to its verified Behance project page; no metrics or claims were invented.
- The section now reads as additional design work (branding and visual design) rather than a second set of primary UX case studies — Talos Care, PlayPal and CityLoop remain the featured UX work.
- Card image slots are left empty pending the real MyTown, Phytives and Home Bakery visuals.

---

## Maintenance convention

Every change to this project must be recorded in this file. Add a new
`## Changelog — <short title> (<date>)` section at the end describing what
changed, what was added or removed, and anything intentionally left as a
placeholder. Do not edit or rewrite earlier changelog entries.

---

## Changelog — Phytives & The Home Bakery card artwork (17 Aug 2026)

- Added the supplied brand-identity visuals to the two remaining empty cards in **A Few More Things I've Made** on the homepage; no other section, page, or styling was changed.
- New assets: `src/assets/phytives.png` and `src/assets/home bakery.png`.
- `src/routes/index.tsx` — the Phytives and The Home Bakery cards now use `<div className="mini-thumb">` with an `<img>`, replacing the `mini-thumb mini-thumb-empty` placeholder treatment.
- Alt text added: "Phytives brand identity visual" and "The Home Bakery brand identity visual".
- All three secondary cards (MyTown, Phytives, The Home Bakery) now carry real artwork; no empty image slots remain in this section.
- Card copy, tags, order, and links are unchanged. No metrics or claims were invented.

## Changelog — Static HTML preview (17 Aug 2026)

- Added `harshith-arava-portfolio-preview.html` as a build-free, single-file preview of the homepage and About page, for reviewing the design without running a dev server. It is a review artifact and is not part of the app or the build.
- The JSX is converted to plain HTML, `portfolio.css` is inlined, and images are embedded as compressed WebP data URIs.
- Clash Display, Satoshi, and JetBrains Mono are embedded as variable-font `@font-face` data URIs instead of loading from Fontshare and Google Fonts, so the preview renders with the correct typefaces offline. The app itself still loads the CDN faces declared in `src/routes/__root.tsx` — that file was not changed.
- Vanilla JS reproduces the theme toggle, nav scroll state, mobile menu, scroll reveals, About photo dots, and Home ↔ About navigation. The contact form does not submit, and Resume links remain placeholders, as in the source.

## Changelog — Talos Care case study (17 Aug 2026)

- Added the first real case-study page, **Talos Care**, at `/work/talos-care`, rebuilt in code from the supplied Figma PDF export and image assets.
- New route: `src/routes/work.talos-care.tsx`. Sections, in order: hero, project meta, My Contribution, Understanding the Problem, Why Conversational AI?, Existing Solutions (comparison table + Observation), Research, Research Findings, Research Insights, Design Constraints, Designing for Trust, Designing Conversations, The Experience, Reflection, and the closing statement band.
- New stylesheet: `src/talos-case-study.css`, scoped under `.tcs` and imported from `src/styles.css`.
- New assets in `src/assets/talos/`: `hero/talos-hero.png`, `contribution/talos-contribution.png`, `trust/talos-trust.png`, and six device screens in `experience/`.
- All copy is taken verbatim from the case-study document. Nothing was rewritten, condensed, or invented; the three research citations, the five-system comparison table, and both conversation scenarios appear exactly as designed.
- Design tokens were read from the PDF artboard rather than estimated: canvas `#f2eee3`, ink `#181510`, green `#386642`, pale-green cards `#dce4cf`, neutral panels `#e8e8d9`, pull-quote rule `#ff3b1f`. The artboard type scale (140 / 59 / 38 / 34 / 28pt on a 1728px frame) is reproduced with `clamp()` against a 1240px column.
- Typography uses the existing three families — Clash Display for section headings and the closing statement, Satoshi for body copy and sub-headings, JetBrains Mono for the hero tag pills and the TALOS/PATIENT speaker labels. No new typeface was introduced.
- The annotated trust composite is placed as a single exported image, as designed, with its three surrounding body blocks as live text.
- **The case-study palette is intentionally fixed and does not follow the site's light/dark theme**, so the page always reads as designed. In dark mode the nav and footer remain dark around a light page. A dark variant has not been built.
- The homepage Talos Care card now links to the case study instead of showing "Case study coming soon". PlayPal and CityLoop keep their placeholder labels until their case studies exist.
- `src/routeTree.gen.ts` was not edited by hand — the TanStack Router plugin regenerates it on the next `npm run dev` / `npm run build`, which registers the new route.
- The static preview (`harshith-arava-portfolio-preview.html`) now includes the case study as a third page, reachable from the homepage card. Verified with no horizontal overflow at 390px, 768px, and 1440px.

## Changelog — Talos Care footer scoping & asset quality (17 Aug 2026)

- `src/routes/__root.tsx` — the site footer ("That's the work. Here's the awkward reaching out part." plus the email / resume / Behance / LinkedIn buttons) was rendered by the root shell on every route, so it appeared beneath the Talos Care closing statement. The shell now reads the current pathname via `useRouterState` and skips `<SiteFooter />` for paths listed in `ROUTES_WITHOUT_SITE_FOOTER` (currently `/work/talos-care`). `SiteNav` is unchanged and still renders everywhere; the homepage, About page, and the other case-study routes keep the footer exactly as before.
- The Talos Care case study now ends on the dark closing statement, with no contact section, footer navigation, or additional content after it.
- The static preview mirrors this: the site footer is hidden while the case-study page is active and restored on the other pages.
- Preview asset quality: the hero, contribution, and trust composites were being re-encoded at reduced dimensions and WebP quality 74–78 for the preview file, which is what made the hero look soft. They are now embedded at native resolution (hero 1728px, trust 1262px, contribution 772px) at quality 88–92, and the device screens at quality 92. Preview file size rose to roughly 1.1 MB as a result. The project's own assets were never downscaled — only the preview build was.
- Note on the hero source: `src/assets/talos/hero/talos-hero.png` is 1728 × 927, exactly 1× for the 1728px Figma artboard. Displayed full-bleed it is sharp on standard displays but has no headroom on 2× screens; a 2× (3456px-wide) export would be needed for retina sharpness.

## Changelog — Talos Care visual-fidelity corrections (17 Aug 2026)

Corrections made after a section-by-section comparison against the case-study
PDF. Rather than estimating values, the artboard's vector geometry was extracted
(every rect's fill, corner radius and position, plus text sizes and line
leading) and the stylesheet was rebuilt from those numbers. No copy was changed.

**Measurement system.** `src/talos-case-study.css` was rewritten around `--u`,
one artboard point expressed in CSS pixels. The content column is locked to the
site's own `.wrap` width (1180px), so 1u = 1180/1544 = 0.7642px and every
artboard measurement M is written `calc(M * var(--u))`.

**Column alignment.** The case study was on a 1240px column while the nav uses
1180px, so the hero tag pills did not line up with the wordmark. Both now start
at the same x. The hero tag type was trimmed to 19.2u because JetBrains Mono
sets ~9% wider than the artboard's mono, which pushed the sixth pill onto a
second row.

**Card fills, borders and radii (all were wrong, now measured):**
- Why Conversational AI? — five cards are `#e8e8d9` with a 1pt ink border, radius 39. Previously green, borderless, radius 22.
- Design Constraints — four cards are `#e8e8d9` with a 1pt ink border, radius 39. Previously green and borderless.
- Research Insights — `#e8e3d7` with a 1pt **grey** (`#939393`) border, radius 58. Previously page-coloured with a dark border.
- Research Findings — a neutral `#e8e8d9` panel (radius 58) overlapping a taller green `#dce4cf` panel (radius 79), both bordered. Previously one card with two internal sections and no border.
- Existing Solutions — `#dce4cf`, 1pt ink border, radius 60, with `#939393` hairline column dividers and a header underline. Row pitch 132.
- Conversation cards — chat container radius 58, bubbles radius 30, note cards radius 79.

**Infographics rebuilt to match the artboard:**
- The literature-review graphic is three brackets — open-sided rounded squares (410×410, radius 46), cards 1 and 3 open at the top with a dot on the top-left, card 2 open at the bottom with a dot on the bottom-left. The previous closed boxes, invented connector line and staggered middle card were all wrong.
- Designing for Trust is now one composition: the annotated export placed at its artboard position (6.35% from the column edge, 81.9% wide) with the three text blocks positioned around it, instead of a three-column layout.
- Designing Conversations — the design-principle lists now sit inside their own bordered cards, and the TALOS / PATIENT labels are green (`#386642` in scenario 1, `#25673e` in scenario 2) rather than grey.

**Full-width elements that were being constrained:**
- The design-question band spans 1397 of the 1544-unit column and breaks after "while"; it had been capped at 46 characters.
- The "Every interaction was intentionally designed…" pull quote spans 1484 units across two lines. It had been placed in a half-width column, wrapping to four. The "Honest conversations shouldn't begin with fear." quote is likewise full-width. The "Our goal was never to replace doctors with AI" quote stays two-column, as the artboard has it.

**Hero image quality.** The cause was the source, not the CSS: `talos-hero.png`
is 1728 × 927, exactly 1× for the artboard. The PDF embeds the underlying photo
at 4000 × 3000, so a text-free hero was rebuilt at 3456 × 1796 by compositing
both of its placements and verified against the PDF's own render. Added as
`src/assets/talos/hero/talos-hero-2x.jpg` (505 KB); the old 1× PNG is left in
place unused.

**The Experience.** Rebuilt as the artboard composition on a full-frame
container (`.tcs-frame`, width `1728u`) with the devices and pale green
backdrops absolutely positioned per step, so the backdrops bleed past the
content column as they bleed off the artboard. Devices are 386u wide (22% of
the frame) with asymmetric left/right placement per step, not a four-card grid.

**Known gaps, still open:**
- The supplied reference screenshots of the Experience section show the green backdrop as a rounded rectangle roughly 660 units tall with a ~58 radius, plus a circle behind the welcome device — the PDF in hand has a 454-tall capsule and no circle. The shape and height now follow the screenshots; the x-positions still come from the PDF. Exact placement needs the updated PDF.
- `.tcs-trust-support` sits at 20.5% rather than the artboard's 14.6%, because the exported composite bakes in a dashed arrow below the first annotation bubble that the artboard text clears by only 2 units.

**Responsive.** Reflow only. Below 1080px `--u` is pinned to 0.62px, the trust
composition and Experience bands become vertical sequences (the backdrop moving
behind the stacked devices), and multi-column groups collapse — every card
keeps its measured fill, border and radius. Verified with no horizontal
overflow at 390px, 834px and 1512px.

## Changelog — Talos Care verification against the PDF (17 Aug 2026)

The PDF re-supplied on this pass is byte-identical to the earlier one (same
checksum, same 1728 × 18286pt artboard), which confirmed the artboard
measurements already in `src/talos-case-study.css` are against the correct
source. Four section crops of the original file were used to verify placement
that vector extraction alone had left ambiguous.

- **The Experience backdrops reverted to the measured capsule.** The previous pass had reshaped them into a 660-tall rounded rectangle based on reference screenshots. Rendering the artboard's own step bands showed the PDF has a 454-tall capsule (radius = half its height) bleeding off the frame edge, with per-step offsets of 192 / 227 / 213 / 216. The capsule and those offsets are now restored. The two earlier screenshots still show a taller shape with a circle behind the welcome device, which does not appear anywhere in the PDF — if the Figma file has since changed, a fresh export will be needed.
- **Designing for Trust repositioned from the section crop.** Vertical scale was confirmed against a known landmark (the device top: crop y270 → artboard 10320, versus 10318 measured), then used to place the blocks: "Support different ways of expressing concerns" at 24% of the band (was 14.6%, which collided with the dashed arrow baked into the export) and "Keep users in control" at 72.5%. The band's aspect ratio was opened from 1544/1305 to 1544/1385 so the lowest annotation is no longer clipped.
- **Existing Solutions table inset inside its card.** The artboard runs the column dividers from y4677 to 5429 inside a card spanning 4623–5480, and the header hairline from x164 to 1547 inside a card spanning 94–1633 — so both stop short of the card edges. A `.tcs-table-scroll` wrapper (which the CSS expected but the markup never had) now provides that inset, with a `<colgroup>` setting the measured 18.9% / 40.2% column split.
- Verified against the crops: the five Why Conversational AI? cards, the Existing Solutions card, the Designing for Trust composition, and both Designing Conversations scenarios with their bullet cards.
- No copy changed. Re-checked at 390px, 834px and 1512px: no horizontal overflow, no console errors, no site footer on the case-study route.

## Changelog — Talos Care spacing, strokes and dark mode (17 Aug 2026)

- **Root cause of the spacing problems found.** `portfolio.css` applies `section { padding-block: clamp(76px, 10vw, 140px) }` to every `<section>`, which was stacking on top of the case study's own rhythm — it added 183u under the hero alone. `.tcs section { padding-block: 0 }` now neutralises it and `.tcs-section` supplies the measured spacing. Hero → intro heading is 120u, matching the artboard exactly.
- Gaps the section rhythm doesn't cover, added from the artboard: table → Observation 72u (`.tcs-observation`), advantage cards → "Our goal was never to replace doctors with AI" 50u.
- **Conversation scenario note cards fixed.** Rasterising the artboard showed the note card is 211u tall and sits flush against the chat card (borders at y12741/12742), not the 396u frame the vector layer reports — that rect is an invisible container. The card now hugs its bullets (38u/32u padding, no minimum height, no gap above), and the bullets use the artboard's tight leading.
- **Chat bubble widths corrected.** They were sized at 56%/54% of the card's *content* box rather than its full width, which made them ~50u narrower than the artboard and forced extra line wraps. Now 64%/62%, with the measured 38u gap between bubbles and a 739u card height.
- **All strokes are now `#939393`.** Card, table, bracket and chat borders were drawn in ink (`#181510`); every border, hairline and divider on the page now uses a single `--tcs-stroke` token set to the correct grey.
- **Dark mode added.** The case study no longer stays light when the site theme flips. `[data-theme="dark"] .tcs` re-maps the same palette roles onto the site's own dark tokens: the page takes `--bg`, text takes `--ink`, and the two card fills become raised surfaces that preserve their relationship (neutral `#241d15` vs green-tinted `#23301f`). The closing band inverts to `--surface-2` so it still reads as a change of register instead of vanishing into the page, and the hero pills and title stay cream because they sit on a photograph in both themes.
- The annotated trust export has dark dashed arrows baked into the PNG, which disappear on a dark page. A light halo on the artwork's alpha edges keeps them readable. A plate behind the image is not workable — the image box overlaps the three text blocks, which the artboard relies on being transparent there. A re-export with lighter arrows, or the arrows supplied as SVG, would be a cleaner fix.
- Verified in both themes at 390px, 834px and 1512px: no horizontal overflow, no console errors, and no site footer on the case-study route.

## Changelog — Talos Care section rhythm & Designing Conversations composition (17 Aug 2026)

**Root cause of the section collisions.** The previous pass added
`.tcs section { padding-block: 0 }` to neutralise `portfolio.css`'s global
`section` padding. That selector has specificity (0,1,1), which outranks both
`.tcs-section` and `.tcs-closing` at (0,1,0) — so it silently zeroed the case
study's *own* section padding as well. Every section ran straight into the next,
which is why "The Experience" sat directly beneath the Designing Conversations
composition. The reset is now written `.tcs :where(section)`; `:where()`
contributes no specificity, so it neutralises the global rule without
outranking the page's own spacing. Section padding raised to 53u per side,
which puts the measured transitions at ~87u against the artboard's ~92u average.
This was a layout-system fix, not per-element margins.

**Designing Conversations rebuilt as one composition.** The two scenarios were
independent columns, so each sized itself to its own content: the conversation
containers ended at different heights and the principle blocks started on
different lines. The section is now a three-row grid — label / conversation /
principles — with each scenario made transparent to it via `display: contents`
and its children assigned to a shared row. Both conversation containers
therefore share a height (812u) and both principle blocks start on the same
line, as on the artboard. Verified programmatically: no bubble escapes its
container, and no fixed height crops content — the row sizes to the taller
composition.

- Bubble placement is unchanged and follows the artboard: TALOS upper-left, PATIENT right, TALOS returning left, with the measured 38u spacing (the artboard's own gaps between the three bubbles are equal at 38u; the asymmetry is horizontal, via bubble width and alignment, not vertical).
- The scenario label now sits 12u above its container, per the artboard.
- Mobile: the grid collapses to a single column and the six children stack in source order — label, conversation, principles for scenario 1, then scenario 2 — so each scenario stays a complete composition with its principle block attached. The override needed matching specificity; at a lower weight the desktop row assignments won and the two scenarios painted on top of each other.
- No copy changed. Re-checked in both themes at 390px, 834px and 1512px: no horizontal overflow, no console errors, no site footer, and the closing statement remains the final element.

## Changelog — Talos Care conversation bubble proportions (17 Aug 2026)

Three measured differences remained between the rendered scenarios and the
artboard; all three came from bubble geometry rather than layout.

- **Scenario 2's TALOS bubbles are narrower than scenario 1's on the artboard** — 357u against 417u, in cards of the same 741u width. They were being rendered at the same width as scenario 1's, so their lines wrapped to two instead of three, which left the conversation container looking under-filled. Scenario 2's TALOS bubbles are now 55% of the card's content box (357u); scenario 1's stay at 64% (417u) and both PATIENT bubbles at 62% (403u).
- **Both principle blocks share a height on the artboard** (211u each, so scenario 2's carries more internal whitespace than its three lines need). They were sizing to their own content and ending at different depths; they now stretch to the shared row.
- **Bubble padding trimmed to hit the measured heights.** CSS line boxes carry leading that the artboard's text frames don't, so identical padding values rendered every bubble ~22u tall. Padding is now 26u top / 22u bottom with the speaker label on a 1.0 line-height and an 8u gap, which lands the bubbles at 152 / 152 / 266 and 190 / 152 / 228 against the artboard's 155 / 155 / 269 and 193 / 155 / 231 — and the conversation containers at exactly 739u, matching the artboard.

No copy changed. Verified in both themes at 390px, 834px and 1512px: every
bubble stays inside its container, no horizontal overflow, no console errors,
no site footer, closing statement still final.

## Changelog — Designing Conversations rebuilt from the artboard (17 Aug 2026)

Only this infographic changed; no other section, spacing, colour, type or asset
was touched.

The section had been built as a layout — a flex column that decided where the
bubbles went, with widths expressed as percentages. That is why it read as two
generic cards: CSS was determining the artwork. It is now placed from the
artboard's own coordinates instead.

Each conversation container is a stage of the artboard's size, and each bubble
is positioned absolutely at its measured coordinate inside it (relative to the
container's top-left):

| | container | TALOS | PATIENT | TALOS |
|---|---|---|---|---|
| Scenario 1 | 741 × 739 | 44, 43 — 417 × 155 | 299, 236 — 403 × 155 | 44, 429 — 417 × 269 |
| Scenario 2 | 741 × 728 | 40, 48 — 357 × 193 | 296, 275 — 403 × 155 | 40, 464 — 357 × 231 |

- The two scenarios are deliberately not normalised. Scenario 2's TALOS bubbles are 357 wide against scenario 1's 417, and its bubbles sit at different offsets. Each scenario has its own rules; nothing is derived from the other.
- Bubble widths are set explicitly, so the line breaks are the ones the artwork was drawn with rather than whatever the browser would choose. No `<br>` tags were added.
- The containers hold their drawn heights rather than collapsing around the text, which preserves the empty space on the right of each conversation and beneath the last bubble.
- The principle blocks keep their own borders and radii and hold their measured heights (211 and 217), so both end on the same line as on the artboard.
- Below 1080px the bubbles return to flow inside the same containers, keeping their left / right / left rhythm, their widths and both principle blocks. The scenarios stack as two complete compositions rather than becoming a mobile chat list.
- One regression caught while editing: the block replacement severed the grid row assignments, which briefly put scenario 1's principles in the top-right cell. Restored and re-verified.

Checked in both themes at 390px, 834px and 1512px: every bubble sits inside its
container, no overflow, no console errors, no site footer, closing statement
still final.

## Changelog — Selected Work card heights (17 Aug 2026)

- The three cards in **Selected Work** on the homepage no longer take their height from whichever artwork happens to be tallest. The PlayPal card was rendering ~90px taller than the Talos Care and CityLoop cards because its image has a squarer aspect than theirs.
- Cause: `.work-visual img` was `height: 100%` in normal flow, so the row sized to the image's intrinsic height rather than the other way round. The artwork is now absolutely positioned inside a relatively-positioned `.work-visual` (`inset: 0`, `object-fit: cover`), which takes it out of the flow, and `.work-card` carries `min-height: clamp(340px, 31vw, 470px)`. All three cards now measure the same at every desktop width; the artwork covers its half and crops rather than stretching the card.
- The redundant `min-height: 320px` on the artwork was removed — it fought the new sizing.
- Below 1020px, where the cards stack, `.work-card` drops its minimum and `.work-visual` takes `aspect-ratio: 16 / 11` so the image still has a height once it is no longer beside the copy.
- Only the Selected Work card sizing changed; card content, tags, copy, links, and every other section are untouched.

## Changelog — CityLoop case study added (17 Aug 2026)

Second case study, built from `cityloop.pdf` (1728 × 25584pt artboard) with the
supplied asset package. Same measured approach as Talos Care: `--u` is one
artboard point in CSS pixels and the content column is locked to the site's
`.wrap` width, so the page aligns with the nav.

**Route and wiring**
- New route `src/routes/work.cityloop.tsx` at `/work/cityloop`, with `src/cityloop-case-study.css` imported from `styles.css`.
- The homepage CityLoop card links to it; Talos Care keeps its link and PlayPal keeps its placeholder.
- `/work/cityloop` added to `ROUTES_WITHOUT_SITE_FOOTER`, so the homepage footer does not appear. The page ends on Reflection, as the PDF does.

**Assets** — copied verbatim to `src/assets/cityloop/`, folder names and filenames unchanged: `buttons/`, `contribution/`, `experience/`, `hero/`, `icons/`, `information architecture/`, `logos/`, `low fidelity screens/`, `user flow/`. Nothing renamed, nothing invented, no asset substituted.

**Finished artwork is placed, never rebuilt:** the hero photograph, contribution composition, information-architecture diagram, user-flow infographic, all six low-fidelity wireframes, and all nine experience compositions are the supplied exports at native resolution with `width: 100%; height: auto`. The icon, button and logo SVGs are used as supplied.

**Sections, in the PDF's order:** hero with tag pills; title, intro and project meta (Role, Duration, Tools, Platform); My Contribution; Understanding the Problem; Research with the method table and Observation; Understanding Our Users with both personas and the five-stage User Journey table; Research Findings and Design Outcome; Design Principles; Information Architecture with Key Design Decisions; Platform Journey; Low Fidelity Exploration with Key Explorations, Discovery Experience, Detail Experience and Responsive Exploration; The Experience with Context Aware Discovery, Category Based Discovery, Seamless Booking Experience and Responsive Experience; Design System & Accessibility; Reflection with Challenges and Key Takeaways. All copy is verbatim from the PDF.

**CityLoop keeps its own identity:** measured palette (`#1c1c1c` ink, `#d95f30` accent, `#efd9c8` / `#ffd7c1` warm fills, `#939393` / `#b6b6b6` strokes) and its own typefaces — Kanit for headings, DM Sans for body, embedded rather than substituted. The portfolio's Clash Display and Satoshi are not used on this page.

**Responsive:** below 1080px the grids reduce and below 760px they stack; the user-flow infographic scrolls horizontally rather than being redrawn or shrunk to illegibility. Verified with no horizontal overflow at 390px, 834px and 1512px, no console errors, and all 39 images loading.

**Notes for the next pass**
- The hero export is the photograph only; the "CityLoop" wordmark is drawn over it on the artboard. It is currently placed from `logos/logo-orange color.svg`, which is the lowercase logomark rather than the heavier "CityLoop" wordmark shown in the PDF hero.
- Two bugs found and fixed during the build: the preview's shared image map made the CityLoop hero render the Talos artwork (both routes name the import `heroImage`), and `.cl-hero-media img` was matching the wordmark as well as the photograph, stretching it to the hero's aspect ratio.

## Changelog — CityLoop fidelity corrections (18 Aug 2026)

- **Hero wordmark** is now set as type in the case study's own display face (Kanit, 140u, accent `#d95f30` with a `#1c1c1c` offset) rather than placing `logo-orange color.svg`, matching how the Talos Care hero title is handled. The logo assets remain in use in the Design System section, where the artboard uses them.
- **Intro headline** raised to the artboard's 80pt (it had been set at the 59pt heading size).
- **Understanding the Problem** rebuilt to the artboard's two-column arrangement: the red-ruled pull quote heads the left column with the "Whether it's a spontaneous evening…" paragraph beneath it, and both "Our research revealed…" and "This gap presented an opportunity…" sit in the right column.
- **Research method table** now carries its `#efd9c8` fill with a `#b6b6b6` hairline and radius 60; it had been an outline-only card.
- **Personas** are two boxes per persona, as on the artboard — a description card (radius 60) and a separate Design Impact card (radius 79), both `#efd9c8` with hairline borders, laid out on shared grid rows so the two columns align.
- **User Journey table** rebuilt with the artboard's colours, which carry the meaning: one rounded card (radius 60, `#efd9c8`) with the label column a shade deeper (`#e7cdb8`), the PAIN POINTS row in `#fec5bb` (label `#fbb0a3`) and the SCOPE row in `#dce4cf` (label `#cdd9c0`), divided by page-coloured hairlines. The stage bar above is `#fae1dd` at radius 30 with the accent triangles between stages.
- **Research Findings** cards take the measured radius 39 with hairline borders, and **Design Outcome** now sits in its own `#ffd7c1` box (radius 40) instead of running as loose text.
- Mobile: the persona columns and the stage bar stack instead of overflowing. Verified in both themes with no horizontal overflow at 390px, 834px and 1512px, and no console errors.

## Changelog — CityLoop correction pass (18 Aug 2026)

- **The Experience section was already present and complete** — heading, "Transforming research into a cohesive product experience", and all four subsections in order: Context Aware Discovery, Category Based Discovery, Seamless Booking Experience, Responsive Experience, with their supplied compositions and PDF copy. Verified by listing the rendered headings. Nothing was removed or restored; if it appeared missing, it was below the Low Fidelity Exploration section in a build before the phone-scale fix.
- **Primary Persona now uses the supplied export** (`src/assets/cityloop/personas/cityloop-primary_persona.png`, 2306 × 1497, covering both Sofia Lehtinen and Mika Rainio with their Design Impact blocks). The HTML reconstruction of the persona cards was removed entirely — no parallel text version remains beside the image, and the image is placed uncropped and unedited.
- **Key Explorations rebuilt to the artboard**: four 355 × 355 brackets at radius 40 with alternating open sides and a dot on the open corner — blocks 1 and 3 open at the top, 2 and 4 at the bottom — the same treatment the artboard uses for its other four-up explanation groups. They had been rendered as filled generic cards.
- **One phone scale across the case study.** The artboard places every mobile mockup at 335 units wide regardless of how much whitespace its export carries, so a `.cl-phones` rule now sets that width for the Discovery Experience, Detail Experience, Context Aware Discovery, Category Based Discovery and Seamless Booking screens. All thirteen phones measure identically instead of being sized by their own PNG dimensions.
- Reflow: the brackets go to two columns below 1080px and one below 760px. Verified with no horizontal overflow at 390px, 834px and 1512px, every image loading, no console errors, and no homepage footer.

## Changelog — CityLoop Experience section replaced with finished exports (18 Aug 2026)

- `src/assets/cityloop/experience/` was replaced wholesale with the new export package. The nine previous files are gone; the five now in use are, exactly: `cityloop-Context-Aware Discovery.png`, `cityloop-Category-Based Discovery.png`, `cityloop-Seamless Booking Experience 1.png`, `cityloop-Seamless Booking Experience 2.png`, `cityloop-Responsive Experience.png`.
- **These are complete Figma compositions.** The phone mockups, pointer lines, annotation bubbles and their explanatory text are all inside the PNGs. Nothing around them is rebuilt in HTML or CSS.
- **The previous implementation was removed.** It had the phones as bare screenshots with the annotation copy lifted out into cards beside and beneath them — twelve such blocks across the four subsections. All of them are deleted, so no duplicate explanation appears anywhere near the artwork. The only prose that remains in the section is the section-level copy that sits outside the artwork on the artboard: the "Transforming research into a cohesive product experience" line and the one-paragraph introduction to each subsection.
- Section structure is unchanged: The Experience → Context Aware Discovery → Category Based Discovery → Seamless Booking Experience (both images, in sequence) → Responsive Experience.
- Each composition renders at `width: 100%; height: auto`, uncropped and undistorted — verified programmatically that every rendered aspect ratio matches its source at 390px, 834px and 1512px.
- The `.cl-phones` 335-unit rule applies only to the bare device screens in Discovery Experience and Detail Experience; the Experience compositions are sized as whole artworks, since cropping them to match phone scale would break the composed relationship between phone, pointer and bubble.
- No other CityLoop section was touched. No console errors, no horizontal overflow, no homepage footer.

## Changelog — CityLoop dark-mode legibility (18 Aug 2026)

The dark-mode palette was inverting text on surfaces whose colours are fixed by
the artboard, which left several blocks unreadable.

- **User Journey table.** The row colours carry the meaning of the table, so they stay exactly as drawn — `#efd9c8` body, `#e7cdb8` label column, `#fec5bb` PAIN POINTS, `#dce4cf` SCOPE. The type on them now switches back to `#1c1c1c` in dark mode instead of inheriting the light `--cl-ink`, which had made it near-invisible. The stage bar (`#fae1dd`) gets the same treatment.
- **Icon set.** The icons are drawn in ink and disappeared against the dark panel. They now sit on a light `#f2eee3` plate in dark mode rather than being recoloured, which would alter the artwork.
- **Logo samples.** `.cl-logo-dark` was using `var(--cl-ink)`, which flips to cream in dark mode — so the "For dark background" sample was showing a light logo on a light plate. Both samples are now hardcoded to the artboard's colours (`#1c1c1c` plate for the light logo, `#f2eee3` plate for the orange one), since they are palette specimens rather than themed surfaces.
- Swept both themes at 390px, 834px and 1512px for text whose luminance is within 0.3 of its background: none remaining. No console errors, no overflow.

## Changelog — CityLoop palette and icon panel (18 Aug 2026)

- **The colour palette was wrong.** It had been eight swatches assembled from the page's own tokens. The artboard actually shows fourteen: a seven-step accent ramp (`#fdedeb`, `#f9c5bc`, `#f68e74`, `#d95f30`, `#a14421`, `#6c2b13`, `#3b1406`) above a seven-step neutral ramp (`#d7dfd8`, `#b0b7b1`, `#8b918c`, `#686c68`, `#464947`, `#282a28`, `#101110`), each 76 units square with a 1pt `#b6b6b6` border, laid out seven per row. All fourteen are now read from the artboard rather than guessed.
- **The light plate behind the icons is gone.** It was added last pass on the assumption that the icons were drawn in ink and would disappear on a dark page. They are drawn in the accent orange (`#d95f30`), which reads on either background, so the plate was unnecessary and looked like a white box sitting in the dark layout.
- The icon library is now laid out eight per row, as on the artboard; below 760px the icons and both palette ramps go to four per row rather than overflowing.
- Verified in both themes at 390px, 834px and 1512px: no horizontal overflow, no console errors.

## Changelog — CityLoop Seamless Booking Experience 1 replaced (18 Aug 2026)

- `src/assets/cityloop/experience/cityloop-Seamless Booking Experience 1.png` swapped for a new export at the same filename (1665 × 1652, up from 1985 × 1652). No other file in the Experience set changed, and no other section was touched.
- Displayed at `width: 100%; height: auto` as before; verified the rendered aspect ratio matches the new source exactly and no horizontal overflow at 390px, 834px or 1512px.

## Changelog — CityLoop Experience image scale correction (18 Aug 2026)

- The new Seamless Booking Experience 1 export is close to square (1665 × 1652, aspect 1.008) compared with its siblings (aspect 1.4–2.05). Since every Experience composition renders at the column's full width, a near-square image renders far taller than a wide one — this one worked out to 1171px versus 577–843px for the others, which is why its phones looked oversized next to Context Aware Discovery and Category Based Discovery.
- Fixed by capping this one composition's rendered width on screens ≥761px (`max-width: 66%`, `max-height: 820u`, centred) rather than the full column. The image is scaled down as a whole — nothing is cropped and nothing is stretched — so the phone-to-bubble relationship inside the export is untouched. Rendered heights across the five Experience images now run 843 / 754 / 628 / 578 / 575px, instead of 843 / 754 / **1171** / 578 / 575.
- Below 761px the image returns to full width like the others, since the disparity reads as less jarring at mobile scale and a percentage cap there would make an already-small image too small to read.
- No other Experience asset or section changed. Verified no horizontal overflow at 390px, 834px and 1512px.

## Changelog — CityLoop Experience dark-mode assets (18 Aug 2026)

- Added `src/assets/cityloop/experience-dark/`, the theme-specific counterparts to the five Experience compositions. Light-mode assets in `experience/` are unchanged.
- New `ThemedExperienceImage` component (`src/routes/work.cityloop.tsx`) renders both the light and dark export for each composition; CSS shows exactly one at a time via `display: none` on the hidden one (not opacity or visibility), so the two are never both visible, never crossfade, and the hidden image claims no layout space.
- Mapping used:
  - `cityloop-Context-Aware Discovery-dark.png` → Context Aware Discovery
  - `cityloop-Category-Based Discovery-dark.png` → Category Based Discovery
  - `cityloop-Seamless Booking Experience 1-dark.png` → Seamless Booking Experience (first image)
  - `cityloop-Responsive Experience-dark.png` → Responsive Experience
- **Filename discrepancy, flagged rather than silently resolved:** the fifth file is named `cityloop-Seamless Booking Experience 3-dark.png`. No light-mode "3" exists — the light set only has "1" and "2". Its pixel dimensions (2164 × 1059) match `cityloop-Seamless Booking Experience 2.png` exactly, so it is used as that image's dark counterpart. Worth confirming the export was named correctly on your end.
- No CSS filter, drop-shadow, glow, or recreated annotation was used anywhere — the dark assets are the finished compositions supplied, displayed as-is.
- The `.cl-figure-exp-compact` sizing rule (Seamless Booking Experience 1) applies equally to both the light and dark image, since both share the same dimensions — phone scale is identical in both themes, confirmed at 633px rendered width in both.
- Verified in both themes at 390px, 834px and 1512px: no horizontal overflow, no console errors, exactly one image visible per composition per theme.

## Changelog — CityLoop User Journey replaced with supplied asset (18 Aug 2026)

- The hand-built User Journey table (stage bar + four-row HTML table with manually matched colours) was replaced with the supplied finished export, `src/assets/cityloop/user journey/cityloop-user-journey.png` (2304 × 1795), displayed whole at `width: 100%; height: auto`.
- Removed: the `.cl-journey`, `.cl-journey-stages`, `.cl-row-pain` and `.cl-row-scope` CSS (including their dark-mode overrides) and the corresponding table markup in `work.cityloop.tsx`. Nothing else in Understanding Our Users changed — the two persona boxes above it are untouched.
- Because it is now a fixed image rather than CSS-coloured HTML, it renders identically in both themes — confirmed by screenshot comparison. This also removes the class of dark-mode legibility bug fixed for this table in an earlier pass, since there is no longer any themed text-on-fill to get wrong.
- Verified no horizontal overflow at 390px, 834px and 1512px, and all CityLoop images still load.

## Changelog — CityLoop dark-mode assets for Primary Persona, User Flow, User Journey (18 Aug 2026)

- Added the three new dark-mode exports, in their own folders exactly as supplied: `src/assets/cityloop/personas dark/cityloop-primary persona-dark.png`, `src/assets/cityloop/User journey dark/cityloop-user-journey-dark.png`, `src/assets/cityloop/user flow dark/cityloop-user-flow-dark.png`. All three match their light-mode counterpart's pixel dimensions exactly.
- The light/dark image-pair helper used for the Experience section (previously `ThemedExperienceImage`) is generalised to `ThemedImage` and reused for these three, rather than writing a second copy of the same switching logic. Behaviour is identical: both images render, exactly one is shown via `display: none` on the hidden one, never both, never a crossfade.
- **A real bug surfaced and fixed during this pass:** generalising the CSS selector from `.cl-figure-exp .cl-exp-dark` to a bare `.cl-exp-dark` dropped its specificity below the page's own `.cl img { display: block }` reset, so in the rebuilt version *both* the light and dark image were visible simultaneously for Persona, Journey and Flow (Experience kept working only because its old, more specific selector was still in place by coincidence of edit order). Fixed by scoping the rule to `.cl figure .cl-exp-dark` / `.cl figure .cl-exp-light`, which every `ThemedImage` usage sits inside and which reliably outranks the reset. Verified programmatically post-fix: all eight themed figures (five Experience compositions plus Persona, Journey, Flow) show exactly one image in each theme, with identical rendered dimensions between themes (no layout shift on toggle).
- No section, spacing, or typography changed. No CSS filter, shadow, or HTML recreation was used on any of the three — the supplied PNGs are shown directly, `width: 100%; height: auto`, in their existing figures.
- Verified in both themes at 390px, 834px and 1512px: no horizontal overflow, no console errors. Also re-checked the Talos Care case study, unaffected by this CSS scoping change, at desktop width.

## Changelog — CityLoop User Journey dark asset replaced (18 Aug 2026)

- `src/assets/cityloop/User journey dark/cityloop-user-journey-dark.png` swapped for a new export at the same filename and identical dimensions (2304 × 1795). No code changes required — the existing `ThemedImage` light/dark switching already points at this path.
- No other file or section changed. Verified no horizontal overflow in dark mode at 390px, 834px and 1512px, and no console errors.

## Changelog — CityLoop spacing rhythm and Experience phone-scale precision pass (18 Aug 2026)

Precision adjustment only — no content, colours, typography, section order, or
assets changed. Every value below was measured against its established
sibling rather than chosen freely.

**Spacing normalization.** Auditing every `margin-top` in the stylesheet
showed two consistent tiers already in use almost everywhere, with a handful
of values that had drifted from them:

- *Tier A — heading → primary content block* (established at 44u by `.cl-grid`, `.cl-table`, `.cl-personas`, `.cl-system`): `.cl-outcome` was the one outlier at 48u, now 44u.
- *Tier B — label/paragraph → following visual* (established at 40u by `.cl-brackets`, `.cl-figure-personas`, `.cl-screens`): `.cl-figure` (48u), `.cl-figure-journey` (30u) and `.cl-figure-exp` (36u) had each drifted independently; all three are now 40u.
- The "Key Explorations" wrapper in Low Fidelity Exploration used an inline 48u, but it's the same transition (paragraph → new h3 subsection) as `.cl-exp-heading` and `.cl-observation`, both already 72u — corrected to 72u.
- The Responsive Exploration figure had `style={{ marginTop: 0 }}` as a hand-tuned workaround for the old 48u default overshooting past its label. With `.cl-figure` now at 40u — matching the label's own 34u margin-bottom closely enough that they collapse to a consistent gap — the override was removed rather than left in as dead code.

**Experience phone-scale consistency.** Context Aware Discovery (843px) and
Category Based Discovery (754px) still rendered noticeably taller than
Seamless Booking Experience 1 (already capped to 628px in an earlier pass),
Seamless Booking Experience 2 (578px) and Responsive Experience (575px) —
a 1.47× spread. Added two new proportional caps (`.cl-figure-exp-cap-a` at
74% max-width for Context Aware, `.cl-figure-exp-cap-b` at 84% for Category
Based), active only ≥761px, using the same non-destructive technique as the
existing `.cl-figure-exp-compact` rule: the whole composition scales down
as a unit, nothing is cropped, and aspect ratio is preserved exactly
(verified programmatically). This brought the five Experience heights to
624 / 633 / 628 / 578 / 575px — a 1.10× spread.

**Confirmed already correct, left unchanged:** the Low Fidelity Exploration
phone widths were already perfectly uniform (257px rendered, all via the
existing `.cl-phones` rule) — that reference scale was not touched. The
Discovery/Detail Experience grids' equal-column, equal-gap layout was also
already consistent and was not restructured.

Verified in both themes at 390px, 834px and 1512px: no horizontal overflow,
no console errors. Talos Care spot-checked and confirmed unaffected, since
every change in this pass was scoped to `cityloop-case-study.css` and
`work.cityloop.tsx`.

## Changelog — CityLoop Low Fidelity Exploration: real gaps re-measured from the PDF (19 Aug 2026)

The previous precision pass normalized spacing against *other* CityLoop
sections' established tiers, on the assumption those tiers held throughout
the page. They didn't — this section has its own rhythm, and the earlier
pass's 72u guess for the "Key Explorations" gap, along with a structural bug
in how the phones were laid out, produced the loose, inconsistent spacing
flagged in these screenshots. This pass re-measured every relevant gap
directly from `cityloop.pdf`'s own coordinates rather than reusing values
from elsewhere on the page.

**Root cause of the phone spacing (the main complaint).** `.cl-screens` was
`display: grid` with `repeat(3, 1fr)` / `repeat(2, 1fr)` columns spanning the
full 1180px content width, while the images inside were fixed at 335u wide
by the separate `.cl-phones` rule. That combination stretches each grid
column far wider than the phone it contains, so the visible gap between
phones was whatever whitespace was left over in each column — much larger
than intended, and it grew or shrank with viewport width rather than staying
constant. The artboard actually places the phones as a tight group, 50 units
apart, centered as a block within the column (measured directly from the
image `xref` placements in the PDF, not estimated). `.cl-screens` is now
`display: flex; justify-content: center` with an explicit `column-gap` of
50u, so the phones sit at their true artboard spacing regardless of column
width. Confirmed by measurement: the rendered gap is now exactly 38px at
desktop (50u × 0.766), where it was previously a viewport-dependent value
several times larger.

**Other gaps in this section, re-measured against the PDF and corrected:**

| Transition | Was | Now (measured) |
|---|---|---|
| Intro paragraphs → "Key Explorations" h3 | 72u | 57u |
| Key Explorations cards → "Discovery Experience" label | ~50u (label's own default) | 74u |
| Phone row → its captions | 16u | 32u |
| "Discovery Experience" row → "Detail Experience" label | ~50u | 87u |
| "Detail Experience" row → "Responsive Exploration" label | ~50u | 138u |
| Desktop-wireframe image → its caption | 20u | 25u |

The 87u/138u pair is not a typo: the PDF genuinely gives Responsive
Exploration more breathing room before it than Detail Experience gets, since
it's the section's closing element before the major jump into "The
Experience." Confirmed by rendering both transitions from the PDF side by
side rather than assuming they should match.

Implementation note: the two gaps that come *before* a `.cl-section-label`
(87u and 138u) are set as `margin-bottom` on the preceding block
(`.cl-screens-3` / `.cl-screens-2`) rather than as the label's own
`margin-top`, since the label class is shared with Primary Persona and User
Journey elsewhere on the page — margin-collapsing lets the larger of the two
values win without touching those other, correctly-spaced instances.

Verified in both themes at 390px, 834px and 1512px: no horizontal overflow,
no console errors. Talos Care spot-checked and unaffected, since every
change in this pass is scoped to `.cl-screens*`, `.cl-brackets`,
`.cl-figure figcaption`, and one inline style in `work.cityloop.tsx`.

## Changelog — CityLoop Experience: phone size matched to the Low Fidelity reference (19 Aug 2026)

**Root cause found rather than approximated.** Measured the actual phone
silhouette width in each Experience source PNG (via pixel-difference edge
detection against each image's background, cross-checked visually) rather
than continuing to guess at proportional caps. Every composition —
Context Aware Discovery, Category Based Discovery, both Seamless Booking
Experience images — embeds the *same* phone mockup component at a fixed
456px, regardless of the composition's own canvas size or how much
annotation whitespace surrounds it. The previous caps (66%/74%/84%) had
been tuned to equalise each *composition's* overall rendered height, which
is a different thing from equalising the *phone* inside it — a wide,
whitespace-heavy composition and a tight one can have the same overall
height while their embedded phones are very different sizes. That mismatch
is what made the phones look inconsistent across Context Aware Discovery,
Category Based Discovery and Seamless Booking Experience in these
screenshots, even after the previous height-equalising pass.

**Fix:** each composition's cap is now computed so its embedded 456px phone
renders at the same width already established in Low Fidelity Exploration
(335u ≈ 257px at desktop) — the scale confirmed as the reference. Verified
by measurement after rebuilding:

| Composition | Cap | Achieved phone width | Target |
|---|---|---|---|
| Context Aware Discovery | 81.0% | 256.5px | 256.6px |
| Seamless Booking Experience 1 | 79.4% | 256.8px | 256.6px |
| Seamless Booking Experience 2 | 100% (ceiling) | 248.8px | 256.6px |
| Category Based Discovery | 100% (ceiling) | 233.5px | 256.6px |

Context Aware Discovery and Seamless Booking Experience 1 now match the
reference essentially exactly. Seamless Booking Experience 2 gets to 97% of
it. Category Based Discovery — two phones plus generous side-bubble padding
baked into one 2306px-wide export — physically cannot reach the reference
scale inside a 1180px column without exceeding it; 100% width is its
ceiling, landing at 233px, the closest achievable without cropping,
distorting, or overflowing the layout. Removed the old `cl-figure-exp-cap-b`
class (an 84% cap that was, by this math, making Category Based Discovery's
phones *smaller* than its own practical maximum) and the `-compact`
variant's leftover `max-height` limit, which no longer applies now sizing is
driven by the measured phone ratio rather than a composition-height guess.

Also re-checked the vertical rhythm between the Experience subsections after
this fix: the margin-top between `.cl-figure-exp` instances was already a
consistent 40u (confirmed by measurement, e.g. 40u exactly between the two
Seamless Booking Experience images), so much of the "spacing feels wrong"
impression in the screenshots reads as a side effect of the phone-size
mismatch — differently-scaled compositions stacked with identical numeric
margins read as uneven even when the margin itself is consistent. With
phone scale now matched, the section reads as one coherent, evenly-weighted
sequence.

Low Fidelity Exploration itself — the stated reference — was not touched.

Verified in both themes at 390px, 834px and 1512px: no horizontal overflow,
no console errors. Talos Care spot-checked and unaffected.

## Changelog — CityLoop Experience: shipped a stale preview build (19 Aug 2026)

You were right that the spacing was still wrong, and the cause was mine but
not the one I expected. Measuring the last-shipped preview file directly
showed the gap between each Experience subsection heading (Context Aware
Discovery, Category Based Discovery, Seamless Booking Experience, Responsive
Experience) was rendering at **0px** — not 40u, not 72u, actually zero,
because the shipped CSS still had `.cl-exp-heading { margin-top: calc(72 *
var(--u)); }` with no compound selector, which the page's generic `.cl h3 {
margin: 0 0 20u; }` shorthand rule was overriding (its `margin-top: 0` won
because `.cl-exp-heading` alone has lower specificity than `.cl h3`).

The project's actual source file already had the correct fix —
`.cl h3.cl-exp-heading { margin-top: calc(57 * var(--u)); }`, matching the
57u rhythm established in Low Fidelity Exploration, with the compound
selector giving it enough specificity to actually beat the generic shorthand
— but that fix had not made it into the last preview build I shipped. This
turn's fix was rebuilding and shipping the current source, not further
source changes. Confirmed by inspecting the shipped file directly before and
after rebuilding: the gap between every Experience subsection is now exactly
57u, matching Low Fidelity Exploration as intended.

Verified in both themes at 390px, 834px and 1512px: no horizontal overflow,
no console errors. Talos Care spot-checked and unaffected.

## Changelog — Sitewide grain texture (19 Aug 2026)

Added a subtle grain texture across the whole site, per reference: near-
invisible over body copy, more pronounced on hero/cover art.

- **One shared texture, two strengths.** `.site-grain` is a `position: fixed`, full-viewport, `pointer-events: none` layer at 3.5% opacity, rendered once in the root shell (`src/routes/__root.tsx`) so it covers the homepage, About, and both case studies without being added per-section. `.grain-strong` is the same tile at 10% opacity, placed as an absolutely-positioned overlay inside each hero/cover container specifically: the homepage hero, Talos Care's hero photo, and CityLoop's hero photo.
- **The texture itself: a small embedded bitmap, not an SVG filter.** First attempt used an SVG `feTurbulence` filter (no separate image asset, scales losslessly) — but measured zero pixel variance once composited at these opacities; the filter's default output is too pale and partially-transparent to survive dilution to 3.5–10%. Replaced with a 128×128 black-speckle PNG (per-pixel alpha, generated once and embedded as base64 in `portfolio.css`, ~30KB) — the standard, reliable technique for this effect, verified with real measured contrast at both opacity levels.
- **Dark-mode handling.** Black speckle on a near-black background is close to invisible by design (correct alpha-compositing behaviour, not a bug), so `[data-theme="dark"]` inverts the grain to white speckle via `filter: invert(1)` — cheaper than shipping a second tile. This inversion is scoped to `.site-grain` and the *homepage* hero only (`.hero .grain-strong`), since that's the one hero whose background actually goes dark with the toggle. Talos Care and CityLoop's hero photos stay the same light-mid tone in both themes — consistent with how the rest of their artwork already ignores the site toggle — so their grain correctly stays black-speckle regardless of theme; inverting it there was tried and confirmed wrong (verified: white-on-light-photo was just as invisible as the original black-on-black problem, in the opposite direction).
- `prefers-reduced-motion` and `prefers-contrast: more` disable the grain entirely.
- Verified across all 4 pages (Home, About, Talos Care, CityLoop) × 3 breakpoints (390/834/1512) × both themes — 24 combinations, no horizontal overflow, no console errors in any. Also confirmed the overlay never blocks clicks (`pointer-events: none`), tested by navigating through nav links with it active.

## Changelog — CityLoop hero asset replaced (19 Aug 2026)

- `src/assets/cityloop/hero/cityloop-hero.png` swapped for a new export at the same filename (3456 × 2174, was 3456 × 2242). No code changes needed — same import path, same `<img>` usage.
- The new export's aspect ratio (1.5897) matches the hero container's CSS `aspect-ratio: 1728 / 1087` almost exactly, so it now renders with no cropping at all; the previous file's slightly different ratio (1.5415) meant `object-fit: cover` was trimming a hair off the top/bottom.
- No other file or section changed. Verified no horizontal overflow at 390px, 834px and 1512px in both themes, no console errors, sitewide grain still renders correctly over the new image.

## Changelog — CityLoop: Design Principles fill, User Journey spacing (19 Aug 2026)

- **Design Principles cards had no background fill.** They were built on `.cl-card-outline` (border only), when the PDF confirms they're filled `#efd9c8` with a `#b6b6b6` border — the same treatment as `.cl-card`, used for Research Findings and elsewhere on the page. Switched the four cards to `.cl-card`. Checked whether this should ripple further: the six panels in Design System & Accessibility (Icons, Color Palette, Buttons, Spacing, Typography, Logo) also use `.cl-card-outline`, but the PDF confirms those are genuinely outline-only there — no fill behind them — so they were left untouched. `.cl-card`'s fill token is already theme-aware, so Design Principles now themes correctly in dark mode along with everything else.
- **Gap before "User Journey" widened.** The Primary Persona section is now one dense image (replacing four lighter HTML cards in an earlier pass), so the label's default 50u margin-top read as tight next to it, even though that number matches the original PDF's own (lighter) card layout. Added an 80u margin-bottom to `.cl-figure-personas` specifically — consistent with how other heavy visual blocks on this page (Key Explorations' cards, the phone rows) already carry their own extra margin-bottom rather than relying on the label's default. Confirmed by measurement: the gap is now exactly 80u.
- Verified in both themes at 390px, 834px and 1512px: no horizontal overflow, no console errors. Confirmed the six Design System panels still render outline-only, unaffected by the Design Principles fix.

## Changelog — PlayPal case study added and rebuilt to match the PDF (20–21 Aug 2026)

Third case study, added at `/work/playpal`. Unlike Talos Care and CityLoop, this one went through two structural passes: an initial build patterned on CityLoop's generic layout system, then a full rebuild once it was clear the brief called for a page that matches `playpal.pdf` specifically — its own colours, its own compositions, its own typographic choices — rather than reusing another case study's design system with PlayPal's copy dropped in. Everything below reflects the current, corrected state.

**Route, stylesheet, assets.** `src/routes/work.playpal.tsx` at `/work/playpal`, styles scoped under `.pp` in `src/playpal-case-study.css`, imported from `styles.css`. Assets in `src/assets/playpal/`: `hero/`, `contribution/`, `personas/`, `user-journey/`, `application-structure/`, `early-design-exploration/`, `design-foundations/`, `experience/`, `reflection/` — light-mode and dark-mode exports side by side where both exist, matching the PDF's own folder structure. `/work/playpal` added to `ROUTES_WITHOUT_SITE_FOOTER`; the page ends on Reflection with no site footer, same as Talos Care and CityLoop. The homepage PlayPal card links here instead of "Case study coming soon."

**Palette and type sampled from the PDF, not reused from CityLoop.** Background `#f1ece1`, ink `#171512`, blue `#2877fe`, yellow `#ffc107`/`#fed766`, card yellow `#ffebaf` (Research Method, Design Principles), card tan `#f5ebcb` (Key Research Insights), quote accent `#ff3b1f`. Headings use the portfolio's own Clash Display/Satoshi rather than the PDF's Zalando Sans — confirmed as the intended direction over matching the PDF's typeface choice — except the Design Foundations section, which documents PlayPal's own product typeface (Zalando Sans) as a literal specimen and correctly stays as such.

**A real sitewide bug found and fixed here, then fixed at the source for CityLoop and Talos Care too.** Card and bracket headings (Design Principles, Key Research Insights, the literature-review brackets) were rendering in Clash Display, which doesn't hold up at small sizes. Root cause: `.cl h3` in `cityloop-case-study.css` incorrectly set the display face for *all* h3 usage, including card headings — a bug that predates this case study. PlayPal's own `.pp h3` had copied that same wrong pattern. Talos Care's `.tcs h3` was already correct (body face, weight 700). Both `.pp h3` and `.cl h3` now match Talos Care's convention: Satoshi Bold. A second, related bug — card-heading font sizes set in `rem` (root-relative, ~16px) rather than `em` (relative to the section's own ~20px base) — made headings render *smaller* than their body copy in `.pp-bracket h3`, `.pp-insight h3`, and `.pp-card h3`; all three now use `em` and read larger than their surrounding text, as intended.

**Structural corrections made against direct pixel comparison with the PDF**, not estimated:
- Hero: full-bleed photo (was incorrectly inset with visible page margin and rounded corners on all sides, unlike every other case-study hero on the site); tags overlaid at `top: 8%` of the photo, matching CityLoop's own tag positioning — they had been placed at a small fixed pixel offset that put them underneath the sticky nav bar, invisible despite otherwise-correct markup.
- Hero wordmark: is not two differently-coloured word halves ("Play" blue, "Pal" yellow) as first built — it's the whole word "PlayPal" in blue with a full yellow duplicate offset behind it, the same `text-shadow`-offset technique CityLoop's own hero title already uses. Corrected to `color: var(--pp-blue); text-shadow: calc(14 * var(--u)) calc(12 * var(--u)) 0 var(--pp-yellow);`, and sized to `calc(140 * var(--u))` at weight 600 to match CityLoop's and Talos Care's hero title formula (it had been rendering at roughly half that size).
- Content column widened to CityLoop's 1180px `.pp-wrap` (had been set to 1440px, so the page didn't align with the shared nav), and base font size raised from a flat 17px to `calc(24 * var(--u))` — CityLoop's own formula on PlayPal's `--u` scale — since the flat value read visibly smaller than CityLoop's body copy at the same viewport.
- Literature review ("Our literature review focused on three areas") rebuilt as the PDF's alternating open-top/open-bottom bracket shapes, replacing plain cards.
- Research Method card rebuilt as one filled card with the four fields (Method, Participants, Format, Outcome) as a 2×2 grid rather than four stacked full-width rows, per the PDF composition — more compact, less scrolling.
- Application Structure moved to a two-column layout (copy left, diagram right in a yellow panel) instead of a centered single column.
- Design Foundations: added a real two-column intro (title/lede/paragraph left, hero photo right, matching the supplied reference layout) above the existing panel grid; the Typography panel's "Aa" specimen was vertically misaligned against the "Zalando Sans / Font Family" label next to it (`align-items: baseline` was baselining against the label block's *last* line rather than its first) — now `align-items: center`, which reads correctly.
- Design Foundations panel grid rebuilt as an actual design-system reference — real colour-palette swatches sampled from the PDF (`#2877fe`/`#0150d7`/`#0e67ff`/`#5291fe`/`#7babfc` primary ramp, `#ffc107`/`#fed766`/`#ffcd3d`/`#c89700`/`#9d7700` secondary ramp), real typography specimens, and the supplied Buttons/Components/Logo artwork — replacing four generic description panels from the first pass.
- Reflection section reordered: "Reflection" heading → "What I Learned" → "Challenges"/"Next Steps" two-column block → the finished-artwork collage image, which was originally placed first. Copy for these three blocks corrected to the PDF's exact wording (had been paraphrased).
- Removed five orphaned placeholder case studies — KindLoop, Veda, TransitPay, Atlas Design System, Lumen Health — which were leftover routes from an earlier design iteration, reachable only through two disconnected "next case study" chains with no path in from the homepage or any of the three real case studies. FieldKit's own "next case study" link (which had pointed at the now-deleted KindLoop) was removed rather than repointed, since FieldKit itself has no inbound link either and remains an orphaned route by the same standard — flagged rather than silently deleted, since it wasn't explicitly named for removal.

**The Experience section went through three iterations before landing on the current approach.** First pass: one combined caption paragraph above each full-width phone image, CityLoop-style. Second pass, at the PDF's direction: text flanking both sides of the phone in a three-column CSS grid, built from PDF-transcribed copy split into the same left/right groupings shown in the reference screenshots — this is geometrically incompatible with matching CityLoop's phone render size in the same 1180px column (the supplied PNGs' phone-to-canvas ratio doesn't leave room for both full-size side text and a full-size phone), a trade-off surfaced and confirmed rather than resolved silently; the grid's side columns were later found to be set to `1fr`, which stretches to fill all available space and was pushing the captions far from the phone with large dead gaps — fixed to `minmax(200px, 260px)` with `justify-content: center` on the group. Third and current pass: replaced with a new set of ten Experience assets (five screens × light/dark) supplied with the callout bubbles *and* their explanatory paragraphs baked directly into the composition, positioned exactly as in the PDF — removing the need for the CSS grid approximation entirely. Each subsection is now a heading plus one full-width image. Trade-off worth knowing: since the caption text is now part of a flat image, it scales down with the phone on narrow viewports rather than staying at a fixed readable size — layout and stacking still work correctly on mobile, just at a smaller reading size than real HTML text would give.

No changes were made to Talos Care's content, CityLoop's content, or any homepage/About copy in this pass — only the two sitewide bugs noted above (`.cl h3`, which also touches CityLoop) and PlayPal's own route, stylesheet, and assets. Verified in both themes at 390px and 1512px across every section listed above; no horizontal overflow, no console errors, and CityLoop spot-checked after the shared `h3` fix and confirmed otherwise unaffected.

## Changelog — Resume file wired, hero CTA fixed, marquee resized (22 Aug 2026)

- **Resume placeholder replaced with the real file.** Added `public/harshith-arava-resume.pdf`, served at the site root as `/harshith-arava-resume.pdf` (Vite serves `public/` unprocessed). All three "Resume" / "Download resume" links — desktop nav, mobile nav, and the footer pill — previously pointed at `#resume-placeholder` with a "swap for the real resume file URL" comment; all three now point at the real file with a `download="Harshith-Arava-Resume.pdf"` attribute, so clicking downloads the PDF directly rather than navigating to it. Verified: `GET /harshith-arava-resume.pdf` returns 200 with `content-type: application/pdf`, and the `download` attribute + filename are present on all three links.
- **Homepage "View my work" button fixed.** It already carried `href="#work"` pointing at the correct `id="work"` section, but as a plain `<a>` rather than the router-aware `<Link to="/" hash="work">` the nav's own "Work" link uses — which is what made it read as inert. Switched to the same `Link` component, so it now behaves identically to the nav link (confirmed: click moves `window.scrollY` from 0 to 816 and updates the URL to `/#work`, landing on the Selected Work section).
- **Skills marquee text set to 1.5×.** `.marquee span` font-size raised from `1.05rem` to `1.575rem`; `.marquee` vertical padding raised from `14px` to `21px` in the same proportion, so the bar doesn't read as cramped around the larger text. The `::after` spark icon is `em`-sized off the span, so it scaled automatically. Nothing else about the marquee (colours, spark rotation, scroll speed, rotation/scale transform) was touched. Verified at 390px and 1512px: animation still runs continuously, no vertical clipping, no horizontal overflow.
- No other section, route, or asset changed in this pass.

## Changelog — PlayPal headlines set to Clash Display Bold (22 Aug 2026)

`.pp h1, .pp h2` (and the more specific `.pp h1.pp-hero-title` override, which was still hard-coding the old value and would otherwise have won the cascade) changed from `font-weight: 600` to `700`. Fontshare was only loading Clash Display at 500/600 sitewide, so setting 700 without more would have rendered as browser-synthesized fake-bold rather than the real cut — added `700` to the Clash Display weight list in the shared Fontshare `<link>` in `__root.tsx` (`clash-display@500,600` → `clash-display@500,600,700`), which is loaded once for the whole site, so Talos Care and CityLoop also gain access to real Bold if they choose to use it later, though neither currently does. Scoped narrowly to genuine headline elements — the "Work hard. Play harder…" hero title and every `h2` section heading (My Contribution, Understanding the Problem, Design Principles, etc.). Left untouched: the "PlayPal" hero wordmark and the "How do we reduce the effort…" pull-statement, both still at 600 — deliberately, since neither is a heading semantically and the request was specifically about headline weight. Verified via computed style in the browser that `.pp h1.pp-hero-title` and `.pp h2` both report `font-weight: 700` with `font-family` correctly listing `"Clash Display"` first, and confirmed the served page's font `<link>` requests weight 700. Could not visually confirm the real Bold glyphs render correctly, since this sandbox has no route to Fontshare's CDN to fetch the actual font file — same limitation noted earlier in this document; the CSS and font-loading request are both correct, so this should render as true Bold in any browser with normal internet access.

## Changelog — Skills marquee band padding reverted (22 Aug 2026)

Correction to the previous marquee pass: "make the text bigger" was read as license to also enlarge the band's own vertical padding proportionally (`14px` → `21px`), which wasn't asked for — the request was about the text specifically, not the band. `.marquee` padding reverted to `14px 0`; `.marquee span` stays at the enlarged `1.575rem` from the previous pass. Confirmed by screenshot at 1440px: band height now comes only from the larger text's own line-height, no added padding bulk, no clipping top or bottom.

## Changelog — MyTown case study reviewed, fixed and wired up (22 Aug 2026)

Fourth case study, at `/work/mytown`. Note on provenance: a substantially complete MyTown implementation already existed in the tree before this pass — a 782-line `src/routes/work.mytown.tsx`, a 753-line `src/mytown-case-study.css` already imported from `styles.css`, and all 25 supplied assets already imported under `src/assets/mytown/`. It built cleanly and the router had already generated the route. So this pass was a review-and-fix against the supplied `MyTown.pdf` and asset set, not a build from scratch.

**Assets.** All 25 supplied files (15 light, 10 dark) verified present and copied to `src/assets/mytown/` under the PDF's own folder structure — `hero/`, `problem/`, `research/`, `journey-mapping/`, `information-architecture/`, `design-system/`, `experience/`. Every light/dark pair was confirmed to share identical pixel dimensions, so theme switching causes no layout shift. The asset set is deliberately asymmetric: `mytown-hero.png`, `mytown-hero-phones.png`, `mytown-buttons.png`, `mytown-form-controls.png` and `mytown-information-architecture.png` have no dark export and correctly render the light file in both themes, with no filter, inversion or generated replacement.

**Palette and structure taken from the PDF, not from another case study.** Sampled directly off the rendered PDF and the supplied logo: cream `#f2ece2` (every section below the hero), hero sky `#b6cede → #c4d7e3`, orange `#ff844b` and navy `#2b5b85` (both read straight out of `mytown-logo.png`), neutral card `#e7e7e4` for the Problem / Design Response pairs, and the same `#ff3b1f` pull-quote accent the other case studies use. Headings use the portfolio's own Clash Display / Satoshi; the PDF's own Nunito Round appears only as a literal specimen inside the Design System section, which is what that section documents.

**Bugs found and fixed:**
- **Hero layout was broken.** It positioned the tag row, logo/headline lockup and phone row as absolutely-positioned layers at percentage offsets over the hero plate. Percentage-offset layers don't reserve space for each other, so the phone row rode up over the logo and headline, and the tag row sat underneath the sticky nav. Rebuilt as normal vertical flow with the plate as the section background (`object-fit: cover`), so the plate stretches to whatever height the stacked content needs. Top padding raised to `calc(150 * var(--u))` at both desktop and mobile so the tag row clears the nav — the mobile case needed its own value, since the first two tags were still tucked under the nav at 390px after the desktop fix.
- **Duplicated content.** "The challenge wasn't the lack of information. It was knowing where to start." was set as an HTML pull-quote *and* is already typeset inside `mytown-problem.png`, where the PDF places it — so it appeared twice on the page. Removed the HTML copy.
- **Dark-mode hero contrast.** The hero keeps its light sky in dark mode (correct — no dark plate was supplied, same as Talos Care's and CityLoop's hero artwork), but the headline inherited the flipped `--mt-ink` and washed out against the pale sky. Pinned the hero, its `h1` and the tag pills to light-mode ink in dark mode. Separately, the supplied `mytown-logo-dark.png` uses a **light-blue** wordmark (`#55a6ec`) intended for a dark surface, which is wrong against MyTown's light sky — so the hero uses the light logo in both themes and `mytown-logo-dark.png` is intentionally not imported, with a comment in the route explaining why rather than leaving it looking like an oversight.
- **Site footer.** Added `/work/mytown` to `ROUTES_WITHOUT_SITE_FOOTER`; the page ends on Reflection with no closing CTA of its own, matching Talos Care, CityLoop and PlayPal.

**Homepage.** MyTown already had a mini-card in the "A few more things I've made" row. Per the brief's "do not redesign the card / do not duplicate" rule — and confirmed with the user rather than assumed — it stays a mini-card and simply became clickable, gaining a "Read the case study →" link styled with the existing `.text-link` class. The only supporting CSS added is a `margin-top` on `.mini-body .text-link`, which affects nothing else since MyTown is the only mini-card carrying a link.

**One diagnostic worth recording.** Midway through verification the page started rendering completely unstyled. This looked like a CSS bug but wasn't: the preview server was serving a stale SSR bundle referencing `styles-B3NKNfa-.css` while the freshly built client had emitted `styles-B6aNnHPv.css`, so the stylesheet 404'd. A full `rm -rf dist .vite node_modules/.vite` and rebuild resolved it, and server/client hashes were confirmed to match afterwards. Worth knowing before chasing a phantom styling regression.

Verified: `/work/mytown` returns 200 and so do `/`, `/about`, `/work/playpal`, `/work/cityloop`, `/work/talos-care` and `/work/fieldkit` (no regressions); the homepage card navigates through to the right page; the site footer is correctly absent; `tsc --noEmit` is clean apart from the three pre-existing `about.tsx` errors that predate this work; and there is no horizontal overflow at 390px. Hero, Understanding the Problem, Research Journey, From Research to Solution, Information Architecture, Design System, The Experience and Reflection were each compared against the corresponding region of the PDF in both light and dark mode.

## Changelog — MyTown hero shadow artifact and stage-caption alignment fixed (23 Aug 2026)

Two real bugs found from user-reported screenshots, not asset or content changes.

**"White ovals" under each phone.** `mytown-hero-phones.png` bakes in a soft drop-shadow under each phone — a gradient from black bezel fading through greys to near-white over its last ~35px — but the fade is **fully opaque** (alpha stays 255 throughout, confirmed by sampling), not real alpha transparency. It was authored assuming the phones sit on a white background. MyTown's ground is cream (`#f2ece2`), so the fade doesn't disappear into it the way it was designed to; it sits on top as a visible pale smudge, which is what read as a stray "white oval." Fixed with `clip-path: inset(0 0 3% 0)` on `.mt-hero-phones`, trimming the fade off before it starts and leaving a clean flat bottom edge on each phone. Confirmed by pixel-sampling the source file at the exact coordinates the artifact appeared at (fully opaque, fading 0→251 in the R/G/B channels across rows 918–951 of 954) before choosing the fix, rather than guessing.

**Stage captions ("Arrival" / "Orientation" / "Essential Tasks" / "Support & Community") didn't line up under their phones.** Root cause: the caption row lived inside the page's usual `.mt-wrap` (capped at 1180px, centred in the viewport), while `.mt-hero-phones` is `width: 86%` of the *full-bleed* hero with no 1180px cap — different width, different centring, so the two could never align regardless of how even the phone spacing itself was. (For reference, the phones are close to evenly spaced — measured centres at 11.6%, 37.4%, 62.9%, 88.4% of the image width — so the grid math itself was never the problem.) Split the stage row out of `.mt-wrap` into its own `.mt-stages-band`, sized and centred identically to `.mt-hero-phones` (86%, uncapped, same value on the 760px breakpoint where phones go to 100%). The `.mt-meta` row that used to share that wrapper moved into its own proper `.mt-wrap`, so it's unaffected and still lines up with the rest of the page's content column.

Verified in both themes at 1440px and 390px: captions sit under their phones, no shadow artifact, no horizontal overflow, and `.mt-meta` still aligns with the page's other sections.

## Changelog — MyTown hero shadow fix corrected: mask fade instead of hard clip (24 Aug 2026)

The previous fix for the shadow smudge (`clip-path: inset(0 0 3% 0)` on `.mt-hero-phones`) was itself a regression, caught from a follow-up screenshot: each phone's bottom corner is genuinely **curved**, not a flat edge, so a straight horizontal clip cut through that curve at a different point on the left and right side of each phone. The result was worse than the original bug — jagged grey bezel fragments left hanging at the sides where the cut sliced through mid-curve, with the phone's actual bottom content missing above it.

Replaced with a `mask-image` fade instead of a geometric clip: `linear-gradient(to bottom, black 0%, black 96%, transparent 99.5%)`, with the `-webkit-` prefix for Safari. A mask doesn't care where the bezel curve sits — it fades opacity smoothly over the last ~3.5% of the image regardless of the underlying shape, so nothing gets cut unevenly. The crisp black bezel above the fade zone (everything up to 96%) stays fully intact; only the trailing shadow smudge dissolves to transparent, letting the actual cream page background show through cleanly instead of the mismatched opaque fade.

Verified at 1440px in both themes and at 390px: phone bottoms are complete with no jagged edges, no white/grey smudge, no cut-off content, and no horizontal overflow.

## Changelog — MyTown hero rebuilt around a new composite asset; two real CSS bugs found and fixed (24 Aug 2026)

User supplied two new hero assets (`mytown-hero-full.png` / `mytown-hero-full-dark.png`) that supersede the previous `mytown-hero.png` (background plate) + `mytown-hero-phones.png` (phone row) + the HTML `.mt-stages` captions entirely. The new assets bake the sky, skyline, all four phones, and the "Arrival / Orientation / Essential Tasks / Support & Community" captions with their connecting arrows into one continuous composition, already positioned exactly where the PDF places them. This replaces the whole hero implementation, not just the images.

**How the new asset actually works, confirmed by sampling rather than assumed:**
- The image is **genuinely semi-transparent throughout** — the sky sits at ~30% alpha everywhere (not just below the phones), confirmed by sampling both files. This is why the "dark" export only recolours the caption text and changes nothing else: the sky doesn't need a separate dark version, because it naturally blends with whatever page background sits behind it — pale blue over the light theme's cream page, a deeper muted blue over the dark theme's near-black one. This is the asset's own built-in dark mode for the sky.
- The caption strip below the phones is real alpha transparency (not a solid fill), so the actual page background shows through there too — which is why the dark export needs lighter caption text: it's designed to sit on the dark theme's own dark page background, not a fixed sky colour.
- The shadow baked in under each phone has the same characteristic as the previous asset: it fades to **opaque** near-white rather than true transparency (alpha stays 255 throughout the fade, confirmed by sampling), so it would show as a pale smudge against the transparent-then-page-coloured area below it — worse in dark mode, where an opaque near-white tail would sit starkly against the near-black page. Fixed the same way as before: a `mask-image` fade (`black 0% → black 85.3% → transparent 87.9%`, jumping back to `black 88.6% → black 100%` so the fully-opaque caption text right after is unaffected) rather than a hard clip, for the same reason as the earlier fix — the phone corners are curved, and a mask handles that gracefully where a geometric clip doesn't.

**Two real CSS bugs found during verification, both now fixed:**
1. **Specificity conflict silently defeated the light/dark image toggle.** `.mt-hero-photo img.mt-img-light, .mt-hero-photo img.mt-img-dark { display: block; ... }` (two classes + a tag) had *higher* specificity than the toggle rule `.mt-hero-photo .mt-img-dark { display: none; }` (two classes only), so the toggle's `display: none` never actually applied — both the light and dark images rendered simultaneously, stacked on top of each other in normal flow. Most visible on mobile as a duplicated hero (tags/logo/headline overlapping a small version of the whole image, with a second full-size copy below it). Fixed by removing `display` from the sizing rule entirely and letting the toggle rules own that property exclusively, with an explicit `display: block` added for the light-mode default (previously implicit and technically unset).
2. **Text-flip contrast regression, caused by properly understanding bug/behaviour above.** An earlier fix had forced the headline and tags to stay dark-ink in dark mode, reasoning (at the time) that the sky stayed a fixed light colour regardless of theme. Once the alpha-transparency behaviour above was understood, that assumption no longer held — the sky really does darken in dark mode — so forcing dark text against it left the subtitle in particular close to illegible. Both now use the theme's own light ink (`var(--mt-ink)` / `var(--mt-ink-soft)`) in dark mode instead.

**Mobile-specific fix.** At narrow widths the tag row wraps to 2–3 lines, and combined with the logo/headline block, needs more vertical room than the image's sky region reliably provides once wrapped — absolute-positioning the overlay over the image (as desktop does) let it spill down over the phones. Below 760px the overlay drops out of absolute positioning and becomes a normal-flow block sitting *above* the image instead (via `order: -1` on a flex column), so it can never overlap regardless of how much the tags wrap. Its background reuses the image's own sky colour at the same ~30% alpha the image itself uses (`rgba(57, 148, 225, 0.3)` over the page background), rather than a separately hand-tuned colour, so it blends into the page the same way the image does in both themes automatically.

Verified in both themes at 1440px and 390px: no image duplication, no overlap, tags/headline/subtitle all legible against the (now correctly darker) dark-mode sky, phone shadows fade cleanly, captions sit on the real page background in both themes, and no horizontal overflow.

## Changelog — MyTown hero assets refreshed; three real bugs found from user report (24 Aug 2026)

**New hero assets.** User supplied refined versions of `mytown-hero-full.png` / `mytown-hero-full-dark.png`. Diffed pixel-for-pixel against the previous versions: only the shadow region under the phones changed (y 85.8%–87.6%). The shadow now uses genuine alpha transparency (fading to alpha 0) instead of fading to opaque near-white, so the `mask-image` fade added in the previous pass is now largely redundant there — left in place since it's harmless (fading an already-transparent region has no visible effect) and removing it risked no benefit for the small chance of missing an edge case.

**Bug 1 — hero text didn't align with the phones below it.** Real layout bug, not a wording or font issue. The tags/logo/headline sat inside the page's standard `.mt-wrap` (1180px capped, centred), while the hero photo is full-bleed edge-to-edge like every other case-study hero. Measured the phones' actual position in the source image directly (alpha-sampling a row through the phone bezels): they sit inset by ~6.05% on each side of the image, not wherever the 1180px cap happens to land at a given viewport width. `.mt-hero-rail` changed from `.mt-wrap` to a dedicated `width: 87.9%; margin-inline: auto` matching that measured inset, so the tags/logo/headline now start at the same left edge as the phones underneath them at any viewport width, rather than only coincidentally lining up at one specific width.

**Bug 2 — homepage MyTown card: thumbnail and text visually split apart.** Root cause: invalid HTML. The whole card was `<Link to="/work/mytown">` (renders as `<a>`), wrapping both the thumbnail and the body — but the body also contained a second, separate `<Link to="/work/mytown">Read the case study →</Link>` nested inside it. Nested `<a>` tags aren't valid HTML; browsers recover by closing the outer tag early wherever the inner one starts, which was silently breaking the card into two disconnected boxes. Fixed by converting the inner "Read the case study" link to a plain `<span>` — the whole card was already clickable (per the earlier decision to keep it as a mini-card rather than promote it to a featured one), so the nested link was redundant as well as invalid. Verified via DOM inspection: zero `<a>` elements now nested inside `a.mini-card`, and clicking anywhere on the card still navigates to `/work/mytown` correctly.

**Bug 3 — dark-mode logo was nearly invisible.** Following on from the earlier discovery that the hero photo's sky is genuinely semi-transparent and darkens in dark mode (not a fixed light colour): the logo had been deliberately pinned to the light/navy version in both themes, reasoned at the time as correct because "the sky stays light." Once that assumption was corrected for the headline text, the same fix was missed on the logo. Confirmed the bug directly by cropping the logo area out of the last dark-mode screenshot — the navy wordmark was barely distinguishable from the darkened sky behind it. Now uses `ThemedImage` to swap to the supplied `mytown-logo-dark.png` (light-blue wordmark, designed for a dark surface) in dark mode, matching the same logic already applied to the headline and tags.

Verified all three fixes together at 1440px (light and dark) and 390px: logo/headline/tags align with the phone row in both themes, the dark-mode wordmark is clearly legible, the homepage card renders as one connected unit with a working full-card link, and there is no horizontal overflow on mobile.

## Changelog — MyTown hero: logo blur/oversizing fixed, alignment reverted to match nav (24 Aug 2026)

User reported the "MYTOWN" wordmark had a blurred/ghosted bottom edge, the logo looked oversized, and the whole hero content block (tags, logo, headline) sat too far left, not aligned with "Harshith Arava" in the nav — unlike every other case study.

**Root cause of the blur and oversizing: a single CSS selector, one bug causing both symptoms.** `.mt-hero-photo img.mt-img-light, .mt-hero-photo img.mt-img-dark` (added when fixing the shadow-fade under the phones) is a *descendant* selector — it matches any `img` with those classes anywhere inside `.mt-hero-photo`, at any nesting depth. The hero photo's own images are direct children, but the logo — nested inside `.mt-hero-photo > .mt-hero-overlay > .mt-hero-rail > .mt-hero-head > .mt-hero-logo-wrap > img` — also carries the `.mt-img-light`/`.mt-img-dark` classes (from the shared `ThemedImage` component) and matched too:
- The rule's `width: 100%` beat the logo's own `.mt-hero-logo-wrap img { width: calc(260 * var(--u)) }` on specificity, so the logo rendered at its uncapped native size (416px) instead of the intended ~217px — the "extremely big" logo.
- The rule's shadow-fade `mask-image` (meant only for the phones' drop shadow) applied to the logo too, fading its bottom ~12% to transparent — the blurred/ghosted "MYTOWN" text.

Fixed by changing the selector to a *direct-child* combinator (`.mt-hero-photo > img.mt-img-light`), which matches only the hero photo's own images and correctly excludes the logo, since it isn't a direct child. Confirmed via computed styles in the browser: the logo now reports `mask-image: none` and renders at the CSS-specified size rather than its native pixel dimensions.

**Alignment reverted from the previous pass's photo-measured 87.9% width back to the standard `.mt-wrap`.** The previous session measured the phones' actual inset in the supplied image (~6.05% each side) and matched the hero rail to that, reasoning it should align with the phones below it. The user corrected this: the hero content should align with the nav's "Harshith Arava" — i.e., with the rest of the site — not with an image asset's internal composition. Confirmed `.wrap` (nav) and `.mt-wrap` (every other section, every other case study) share an identical definition, so reverting `.mt-hero-rail` to `.mt-wrap` makes the hero align with literally everything else on the site, at the cost of no longer lining up with the phones — the right trade-off per explicit direction.

**Logo resized to match the PDF's actual proportions, not guessed.** Measured the logo's height against the two-line headline's height directly off the same PDF render used elsewhere in this project (357px logo vs. 299px headline at identical render scale → a 1.194:1 ratio) and solved for the CSS multiplier that reproduces that ratio at this site's own type scale, landing on `calc(216 * var(--u))` (down from `260 * var(--u))`, with the mobile breakpoint's logo size scaled down by the same proportion (166 from 200).

Verified: nav's "Harshith Arava" and the hero tags now report an identical `getBoundingClientRect().left` (130px) in the browser; the logo's computed `mask-image` is `none` and its rendered size (179.9 × 122px) matches the PDF-derived target; confirmed in both themes at 1440px and at 390px with no horizontal overflow.

## Changelog — MyTown Experience phone sizing and hero centering (25 Aug 2026)

**Experience section phone sizes were genuinely inconsistent.** The four compositions aren't at the same scale: "Getting Started" and "Building Community" show 3 phones on a 1701px-wide canvas, while "Finding Reliable Support" and "Exploring the City" show 4 phones on a 2301px canvas — but the individual phone mockup is close to the same absolute size across all four (measured ~567px vs ~575px within the source files, checked by isolating each composition's opaque content span). `.mt-figure-exp img { width: 100% }` scaled every canvas to the same container width regardless of this difference, so the 4-phone images' phones rendered roughly 25% smaller than the 3-phone images'. Matches the same problem CityLoop's Experience section solves with per-composition `max-width` percentages: added a `.mt-figure-exp-narrow` modifier (applied to the two 3-phone compositions) capping them to `max-width: 73.9%` — the ratio between the two canvas widths (1701/2301) — so every image is scaled by the same factor and every phone lands at a consistent size. Confirmed by screenshot comparison: phone width difference between compositions dropped from ~25% to ~10%.

**Hero content re-centered, reversing the previous pass's nav-alignment fix.** Explicitly confirmed with the user before making this change, since it directly reverses a fix from the prior session (aligning the hero with "Harshith Arava" in the nav). `.mt-hero-rail` changed from `width: min(1180px, ...)` (matching `.mt-wrap`) to a narrower `width: min(720px, ...)` centered column with `text-align: center`; `.mt-hero-tags` gained `justify-content: center`; `.mt-hero-head` changed from a horizontal grid (logo left, headline right, stretched to fill the column) to a centered vertical flex stack (logo above headline, both centered) — a horizontal side-by-side pairing doesn't read as "centered" the way a stacked, symmetric composition does. Mobile's now-redundant grid-specific overrides for `.mt-hero-head` were cleaned up since the base is already centered and stacked.

Verified in both themes at 1440px and 390px: hero content is horizontally centered as a group, phone sizes across all four Experience compositions are visibly consistent, and there is no horizontal overflow.

## Changelog — MyTown hero tags reverted to their own row (25 Aug 2026)

Centering the logo/headline in the previous pass had pulled the tags into the same narrower 720px block, since all three shared one `.mt-hero-rail` container. At wide viewports the tags — six pills that used to comfortably fit in one row across the full ~1180px width — now wrapped to two rows inside the narrower column, visibly moving and reflowing them from where they'd been. Flagged by the user directly from a screenshot.

Split the tags out into their own `.mt-hero-tags-row`, using the page's normal-width `.mt-wrap` (matching the nav, matching where they sat before any of the centering work), sitting above `.mt-hero-rail` — which now holds only the logo/headline/subtitle in their centered 720px block. `justify-content: center` (added when the tags were still sharing the centered block) removed from `.mt-hero-tags`, restoring its original left-aligned single-row layout. The sticky-nav-clearance top padding moved from `.mt-hero-rail` to `.mt-hero-tags-row`, since that's the first element in flow now.

Verified at the exact viewport width from the user's screenshot (1706px, where the wrapping was most visible): tags render in one row at their original position; logo and headline stay centered below, unaffected. Also confirmed in dark mode and at 390px, where tags still wrap (unavoidable at that width) but remain left-aligned rather than centered.

## Changelog — Fifth case study: Infosys Gen AI Web Application; homepage mini-cards became a scroll carousel (25 Aug 2026)

New case study at `/work/infosys`, from a much shorter source deck than the other four (4 pages: hero, About/Brief/Challenge, two user-journey flowcharts, a Web Screens gallery — no research writeup, no persona cards, no "My Contribution" or "Reflection" section in the source). Per direction, none of that missing content was invented; the page is intentionally shorter than the other four case studies rather than padded out to match their length.

**Metadata supplied directly by the user** rather than inferred: Role — Graphic Designer, Duration — 2 Months, Team — Solo, Platform — Adobe XD. The PDF itself has no Role/Duration/Team/Platform block, only a tag list (UI / UX Design, Figma, Design Systems, UX Research, Customer Persona, Design Thinking), which became the hero's tag row instead, matching the convention every other case study already uses for its own skill tags.

**Assets**: 11 supplied files — 2 composed hero/monitor mockups (Sign In for the page hero, Dashboard for the Web Screens section) and 9 flat screen states (Sign In, Sign Up, Dashboard base, Dashboard + AI Chat ×2, Dashboard + Nudge dropdown, Dashboard + AI Nudges ×3) — exactly matching the PDF's own 9-image screens grid. No dark-mode exports exist for this project at all; every image renders as-is in both themes, same as the "light asset, no dark equivalent" convention used elsewhere, except here it applies to the *entire* asset set rather than a handful of files.

**Flowcharts built in HTML/CSS**, per explicit confirmation, since no diagram image was supplied for either the Nudge User Journey or the AI Chatbot Journey — only step-by-step text in the PDF. Reproduces the PDF's exact box labels, sequence, and the chatbot flow's pre-configured/non-pre-configured query branch. Colours sampled directly from the supplied screens rather than guessed: Infosys blue `#007cc2` (sidebar/header, sampled exactly), AI panel purple `#963596`.

**Three real layout bugs found and fixed during verification, all confirmed with before/after screenshots:**
1. The chatbot flow's "non pre-configured query" branch box was stretching to match its taller sibling column instead of sizing to its own content — a CSS grid row stretching two unequal-height flex columns to the same height. Fixed with `align-items: start` on the branch grid and `flex: 0 0 auto` on boxes inside a branch column.
2. On mobile, every flowchart box ballooned to a large fixed height with a lot of dead space around centered text. Root cause: `.ig-flow-box`'s `flex: 1 1 200px` — correct for the desktop horizontal rows, where it lets boxes share row width evenly — becomes a *height* basis once the row switches to `flex-direction: column` at the mobile breakpoint, and `flex-grow: 1` then stretched every box to fill the column's height. Fixed by resetting to `flex: 0 0 auto` at that breakpoint.
3. Also mobile-only: the branch column's own down arrows (already correct `↓` characters) were getting hit by the same `rotate(90deg)` meant for the horizontal rows' `→` characters, turning them into left arrows. Scoped the rotation to exclude `.ig-flow-branch-col .ig-flow-arrow`.

**Homepage mini-card row converted to a horizontal scroll carousel**, per explicit confirmation, covering all four mini-cards (MyTown, Phytives, The Home Bakery, plus the new Infosys card) rather than only accommodating the new one — and keeping the existing mini-card visual style (thumbnail + category tag + title + description) rather than redesigning to match the user's portrait-photo reference images, which were a layout/interaction reference, not a visual-redesign brief. `.more-work` changed from a static 3-column grid to `display: flex` with `overflow-x: auto`, `scroll-snap-type: x mandatory`, and a thin scrollbar; `.mini-card` gained an explicit `flex: 0 0 clamp(260px, 30vw, 340px)` so it sizes correctly outside a grid. Two now-dead mobile media-query rules (`grid-template-columns` overrides for a grid that no longer exists) were removed. Infosys added as a fourth clickable card, following the same pattern established for MyTown's own card in an earlier pass (whole card wrapped in one `<Link>`, with a plain `<span>` rather than a second nested link for the "Read the case study" text, avoiding the invalid-nested-anchor bug fixed earlier).

Verified: all 8 routes (including the two changed today) return 200 with no regressions; `tsc --noEmit` clean apart from the pre-existing `about.tsx` errors; the carousel's `scrollWidth`/`clientWidth`/`scrollLeft` behave correctly and clamp to the real content bounds; clicking the Infosys card navigates to `/work/infosys`; confirmed in both themes at 1440px and at 390px (no horizontal overflow) for both the case study and the homepage carousel.

## Changelog — Infosys hero and About/Brief/Challenge refinements (26 Aug 2026)

Four user-requested changes to the Infosys Gen AI case study, all confirmed with screenshots.

**Hero image enlarged.** `.ig-hero-figure img` had no explicit width, so it displayed at its own natural pixel size (1725px source, but rendering well under its available grid column at typical viewport widths) rather than actually filling the space available to it. Added `width: 100%` so it scales to fill its column, and widened that column from a roughly even 0.95fr/1.05fr split to 0.85fr/1.15fr in the image's favour.

**Fixed a wrapping regression the above caused.** Narrowing the text column to make room for the bigger image pushed "Infosys Gen AI" from one line onto two ("Infosys Gen" / "AI"), breaking mid-phrase. Measured the actual pixel width the phrase needs at its rendered font (531px) against the new column's available width (484px) using a canvas text-measurement script rather than guessing, then reduced the headline's `font-size` clamp just enough (max `4.1rem` → `3.7rem`) to fit cleanly on one line again at the new column width, matching the user's own reference screenshot.

**Hero subtitle changed from centred to left-aligned, full width.** Previously constrained to `max-width: 640px` and centred under the whole hero grid — read as an oddly narrow, centred paragraph floating in the middle of a wide page. Now `max-width: none; text-align: left`, spanning the same width as everything else on the page.

**Hero tags replaced** with the user's supplied list — UX Design, Service Design, Information Architecture, UI Design, Prototyping — replacing the original six pulled from the PDF (UI / UX Design, Figma, Design Systems, UX Research, Customer Persona, Design Thinking).

**About the project / The brief / The challenge restructured.** Previously a two-column grid (label left, copy right) with a divider line between each row, and the label styled as a plain bold `.ig h3` in the body face. Per direction to match the treatment already given to "User Journeys," each label is now: the display face (Clash Display), sized as a clear standalone heading, sitting *above* its paragraph in a single stacked column — matching how "User Journeys" (h2) sits above its own content, and how each flow's own label sits above its flow box. The divider lines are gone; spacing between the three now comes from padding alone. The now-redundant mobile-only `.ig-info-row` grid override was removed along with it, since the base layout is no longer a grid to override.

Verified in both themes at 1440px and at 390px: headline reads as two clean lines ("Infosys Gen AI" / "Web Application") with no mid-word wrap, hero image is visibly larger, subtitle spans the full width left-aligned, the three section headings read as clear display-face headers with no divider lines, and the five new tags render correctly. All 8 site routes confirmed still returning 200 with no regressions; `tsc --noEmit` clean apart from the pre-existing `about.tsx` errors.
