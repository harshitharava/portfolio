# Revamp the "More Projects" section

Only the secondary projects strip on the homepage changes. Selected Work, hero, nav, footer, about and all global styling stay exactly as they are.

## Heading

The eyebrow above the strip changes from "More projects" to "A Few More Things I've Made", and it stays visually subordinate to the "Selected work." headline so the hierarchy reads: main UX case studies first, additional design work second.

## Cards

The three placeholder cards (FieldKit, KindLoop, Veda Research) are removed completely — titles, tags, copy, inline SVG artwork and links. Three new cards take their place in the existing mini-card component, in this order:

1. **MyTown** — UX Research · UX Design · Interaction Design — "Rethinking how people discover and connect with their local community."
2. **Phytives** — Brand Identity · Branding · Visual Design — "A visual identity built to give a growing brand a clearer personality."
3. **The Home Bakery** — Brand Identity · Branding · Packaging — "A warmer, more distinctive identity for a homegrown bakery brand."

No metrics, no invented claims. Card size, radius, borders, type scale, spacing, hover lift, animation timing, responsive grid and theme behaviour are untouched.

## Images

You said you'll upload the MyTown, Phytives and Home Bakery visuals. Once attached, each is uploaded to the CDN and wired to its own card — no shared or substituted artwork. The thumbnail slot keeps its current 16:10 crop and hover zoom; the only CSS change is allowing an `<img>` (not just an inline `<svg>`) to fill and zoom in that slot, matching how the Selected Work visuals already work.

## Links

Verified Behance project URLs, each opening in a new tab:

- MyTown → behance.net/gallery/253672635/MyTown-UX-Case-Study
- Phytives → behance.net/gallery/181491991/Phytives-Branding-Redesign
- The Home Bakery → behance.net/gallery/181420943/The-Home-Bakery-Branding-Redesign

No dedicated case-study pages exist for these, so Behance is the destination.

## Technical notes

- `src/routes/index.tsx`: replace the three `<a class="mini-card">` blocks inside `.more-work` and update the eyebrow text.
- `src/portfolio.css`: extend the existing `.mini-thumb svg` rules to also cover `img` (object-fit cover, same hover scale). No other CSS touched.
- Assets stored as `.asset.json` pointers in `src/assets/`, imported the same way the Selected Work images are.
- `README.md`: append a new changelog entry covering the heading change, removed placeholders, added projects, order, and the section's repositioning as additional design work. Existing entries preserved.
