## Goal
Rebuild the `/team` page grid to match the selected "Editorial noir grid — uniform 3-up with visible bios" direction, keeping all existing content (9 members, real photos, real bios) and the existing bio Dialog.

## File
`src/pages/TeamDetails.tsx` (grid section only — header, Helmet, data, and Dialog markup preserved).

## Design commitments (from the picked prototype, locked)
- 3-column grid on `lg`, 2 on `md`, 1 on mobile. Column gap `12`, row gap `24`.
- Portrait: `aspect-[4/5]`, full-width in card, `grayscale` → colorized on hover over 700ms; subtle `scale-[1.03]` on hover.
- Gold hairline "offset frame": `absolute inset-0 border border-gold/20 translate-x-2 translate-y-2` behind the portrait, nudges further on hover.
- Text block below portrait, left-aligned: gold Cormorant name (`text-2xl`), tiny uppercase gold-muted role (`text-[10px] tracking-[0.2em]`), 3-line clamped bio in Karla body.
- Header: centered "Leadership" gold display, gold hairline divider, uppercase eyebrow "Stewards of Artistic Legacy". Replaces current "The Ecka Team." block.
- `Expand` icon appears top-right of the portrait on hover only.
- Entire portrait + name still trigger the existing bio Dialog. Dialog markup unchanged.

## Tokens
Use existing semantic tokens (`text-gold`, `bg-surface`, `text-foreground/70`, `font-display`). No hardcoded colors.

## Out of scope
Header nav, Helmet/SEO, footer, Dialog contents, team data, image positioning helpers — all preserved as-is.
