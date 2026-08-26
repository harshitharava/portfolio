# Update Selected Work with the three real projects

## What happens first

The workspace currently holds a blank starter, not your site. Step one is to restore your uploaded project files (routes, styles, nav, footer, about page, case-study pages) exactly as they are in the zip, without any `.git` metadata. No design changes are made during this restore.

## Then: the Selected Work section only

Replace the three placeholder cards in `src/routes/index.tsx` with your real projects, in this order:

```text
01. Talos Care
02. PlayPal
03. CityLoop
```

For each card, keeping the existing `work-card` markup, classes, hover effects, reveal animation, and responsive behaviour untouched:

- **Tags** — the existing `case-tags` row, filled with your exact tags, verbatim, in the given order:
  - Talos Care: Conversational AI · Human-Centered AI · UX Design · Figma · Accessibility · Conversation Design
  - PlayPal: UX Research · Usability Testing · UI Design · Information Architecture · Prototyping · Interaction Design
  - CityLoop: UX Research · Product Design · Interaction Design · Responsive Design · Accessibility · Design Systems
- **Heading** — the case study's own subtitle (Talos Care: "Designing trustworthy AI conversations for sensitive healthcare disclosure"; PlayPal and CityLoop from their PDFs).
- **Description** — a short paragraph drawn from the case study's own introduction. Nothing invented.
- **Facts row** — the existing `case-metrics` block is reused for factual case-study details instead of numbers, e.g. Talos Care: Role UX Designer · Jan–May 2026 · Figma, Groq API, JS. Same for the other two from their PDFs. No fabricated statistics.
- **Visual** — the existing abstract SVG illustration slot is kept, recoloured neutrally per project. No new artwork, no PDF screenshots.
- **Link** — the "Read the full case study" link and the visual link both point at a reserved path (`/work/talos-care`, `/work/playpal`, `/work/cityloop`) left ready for real case-study pages. Since those pages do not exist yet, the links stay in place structurally but are non-navigating placeholders rather than broken routes.

Also updated in that section: the intro line under "Selected work." currently says "urban discovery, social experiences, and care technology" — it stays unless it no longer matches; no other copy is touched.

The "More projects" strip (FieldKit, KindLoop, Veda Research) stays exactly as it is, per your answer.

## Removed

All Lumen Health, TransitPay and Atlas card content and their invented metrics (73% day-30 retention, 4.8 App Store rating, 2.5× faster UI delivery, etc.) disappear from the homepage. Their standalone case-study route files are left in place, untouched, so nothing else breaks.

## Untouched

Navigation, hero, marquee, process section, contact section, footer, About page, fonts, theme switching, global CSS, and all contact details.

## README

A new changelog entry is appended (existing history preserved) noting: Selected Work updated, placeholders replaced, three featured projects Talos Care / PlayPal / CityLoop, exact case-study tags added, fictional project content and metrics removed.

## Verification

Load the homepage and confirm three cards in the right order, exact titles and tags, no fictional metrics, unchanged styling and animations, and that About still opens as its own page.
