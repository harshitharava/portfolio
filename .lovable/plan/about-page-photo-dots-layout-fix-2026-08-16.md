# About page: photo dots + layout fix

## What changes

1. **Dot navigation under the photos** — replace the "Scroll →" hint with a row of small dots, one per image, matching the reference: muted grey dots, the active one filled in the accent colour. Dots update as you swipe/scroll the photo strip, and clicking a dot snaps to that photo.

2. **Mobile text no longer slides under the photo** — on phones the photo block is currently pinned in place while the text scrolls past it. It will scroll normally with the page, so the layout matches the correct mobile screenshot.

3. **Desktop stays as-is** — photos beside the text, pinned while the story scrolls (the layout in about_layout.png).

## Technical notes

- `src/routes/about.tsx`: keep the photos in an array, add `useRef` on `.about-scroller` plus a `useState` active index driven by a scroll listener (nearest child by scroll position). Render a `.about-dots` list of buttons with `aria-label` per photo; click calls `scrollTo` on the scroller. Remove the `.about-scroll-hint` paragraph.
- `src/portfolio.css`: add `.about-dots` (flex, centered, 8px gap) and `.about-dot` (8px circle, `--line-strong` background, `--pf-accent` when `.is-active`, no border, pointer cursor, focus-visible ring).
- In the `max-width: 760px` media query, add `.about-photos { position: static; }` next to the existing `.about-portrait` rule — that sticky rule is what makes the text run under the image on mobile.
