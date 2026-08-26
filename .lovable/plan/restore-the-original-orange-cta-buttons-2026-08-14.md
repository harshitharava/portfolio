# Restore the original orange CTA buttons

## What actually broke
Your zip's CSS defines the brand orange as `--accent: #f4500c` and every CTA uses it (`.btn-primary`, eyebrows, links, hover borders).

The React project's shadcn theme layer in `src/styles.css` also defines a variable called `--accent` — a pale slate grey `oklch(0.968 0.007 247.896)`. Because `portfolio.css` is imported at the top of `styles.css`, the shadcn `:root` block comes later and wins. The live "View my work" button currently computes to that grey, not orange. Same collision on `--radius` (your 22px pill radius vs shadcn's 0.625rem).

So nothing intentionally changed the color — two stylesheets are fighting over the same variable names.

## Fix
Namespace the portfolio tokens so they can't be clobbered, in `src/portfolio.css` only:

- Rename the colliding tokens: `--accent` -> `--pf-accent`, `--radius` -> `--pf-radius`, `--radius-sm` -> `--pf-radius-sm` (in both the `:root` and `[data-theme="dark"]` blocks).
- Update every `var(--accent)` / `var(--radius)` / `var(--radius-sm)` reference in `portfolio.css` to the new names. Non-colliding tokens (`--accent-deep`, `--accent-soft`, `--accent-contrast`, `--ink*`, `--line*`) stay as they are.
- Leave `src/styles.css` and the shadcn tokens untouched, so shadcn UI components keep working.
- The footer keeps the orange accent it just got.

## Verify
Reload the homepage and confirm the "View my work" button computes to `#f4500c`, matching the reference screenshot, and that pill radii, eyebrow labels, and link underlines are orange again in both light and dark mode.
