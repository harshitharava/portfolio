# Bring the orange back to the footer CTAs

## What happened
Nothing removed orange from the site at large — `--accent: #f4500c` (light) / `#ff6b2c` (dark) is still driving the hero button, the contact form button, the "Read next case study" buttons, eyebrows, and links.

The change is isolated to the new footer. When it was rebuilt to match the reference screenshot, it got its own hardcoded palette:

- `--footer-accent: #ff3b14` (the reference's red) on the "Drop an Email" pill
- outline pills bordered in cream `rgba(241, 236, 225, 0.35)`, not orange

So the footer CTAs read red/neutral instead of the portfolio orange.

## Fix
In `src/portfolio.css`, inside the `.footer` block:

- Point `--footer-accent` at the brand orange instead of the reference red, using a fixed orange (the footer stays dark in both themes, so it should not follow the theme variable): base `#f4500c`, hover `#d13f04`.
- Give the outline pills an orange identity on interaction: keep the calm cream border at rest, and switch border + text to the orange on hover/focus so all footer CTAs feel part of the same family.
- Keep everything else from the reference intact: dark `#211c17` background, cream type, thin divider rule, "No templates were harmed" bottom bar.

No component or content changes; footer markup stays as is.
