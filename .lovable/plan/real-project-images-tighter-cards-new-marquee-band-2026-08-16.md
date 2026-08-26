# Real project images, tighter cards, new marquee band

## 1. Replace the placeholder SVGs with your screenshots

Upload the three mockups to the CDN and use them in place of the abstract SVG illustrations inside each card's visual slot:

```text
Talos Care -> talos_card.png
PlayPal    -> playpal.png
CityLoop   -> cityloop_png.png
```

Each becomes an `<img>` filling the existing `work-visual` link, cropped to the same aspect ratio the SVGs used, with the same hover zoom, alternating left/right placement and rounded corners. The images already sit on the yellow background, which matches the reference screenshot's full-bleed visual panel. Alt text is added per project (the visual stops being `aria-hidden`).

## 2. Card layout to match the reference

The reference card is the same structure you already have, just tighter, so the changes are sizing only:

- Visual panel becomes full-bleed to the card edge on its side (no inner padding gap), as in the screenshot.
- Heading size reduced (roughly 1.5–2.0rem instead of 1.7–2.4rem) and body copy slightly smaller, so each card is shorter.
- Tightened vertical rhythm between tags, heading, paragraph, facts row and the "Read the full case study" link.
- Facts row (`case-metrics`) keeps its current accent-coloured value + mono caption style, matching the reference's metric row.

Colours, fonts and borders are adjusted to match the reference style (tag chips, heading weight, metric row and link underline as shown), while the hover lift and reveal animation stay as they are.

## 3. Tags limited to four

Each card shows the project-name chip plus exactly four tags:

```text
Talos Care  ·  Conversational AI · Human-Centered AI · UX Design · Accessibility
PlayPal     ·  UX Research · Usability Testing · UI Design · Prototyping
CityLoop    ·  UX Research · Product Design · Interaction Design · Accessibility
```

Wording stays verbatim from your list; only the extra tags are dropped.

## 4. Scrolling band colour

The moving skills band changes from orange to the dark treatment in your screenshot: near-black ink background, off-white text, and the `✳` separators recoloured individually in red / amber / green / mint so they alternate along the strip. Same speed, same rotation, same border, same words.

## Technical notes

- Images go through Lovable Assets (`.asset.json` pointers imported in `src/routes/index.tsx`); no binaries added to the repo.
- Card sizing changes live in `.work-card`, `.work-copy h3`, `.case-metrics` and a new `.work-visual img` rule in `src/portfolio.css`.
- Marquee restyle is confined to `.marquee` / `.marquee span::after`; the accent token stays orange everywhere else (buttons, links, metrics).
- README changelog gets one appended entry.

## Untouched

Nav, hero, About page, process and contact sections, footer, More projects strip, theme switching, all other orange accents.
