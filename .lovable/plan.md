## Goal

Elevate every page of ecka­holdings.com to feel like a private members' library — velvet-black, gold-foil, culturally reverent — so the visual language matches the thesis: an IP investment firm preserving culturally significant music and entertainment works while delivering exceptional returns.

## Locked design tokens (Classical Prestige)

Applied globally so every page inherits the same feel — no one-off overrides.

- Background: `#0d0d0d` (primary) / `#1a1a1a` (elevated panels)
- Text: `#f5f5f0` (cream) with `/70` and `/60` opacity for supporting copy
- Gold accents: `#C9A84C` (primary gold), `#F0D78C` (highlight gold), gold `/10`–`/20` for hairline dividers
- Heading font: **Cormorant Garamond** (light + italic for display)
- Body / UI font: **Karla**
- Eyebrow labels: `text-[10px]` / `text-xs`, `tracking-[0.3em]`, uppercase, gold or cream/50
- Buttons: solid gold `#C9A84C` on black text, or gold-hairline outline; letter-spaced uppercase
- Motion: fade-and-rise on section reveal, gold underline draw on links, gentle backdrop-blur on sticky nav — no bounce, no glow, no purple

## Page-by-page changes

**Global / Navigation (`src/components/Navigation.tsx`)**
- Sticky, backdrop-blurred bar with gold hairline bottom border
- "ECKA HOLDINGS" wordmark in Cormorant Garamond, gold, wide tracking (logo image kept, reduced)
- Nav links: uppercase, `tracking-[0.2em]`, hover to `#F0D78C`
- Right side: text "Investor Login" link + gold-filled "Schedule Call" pill
- Mobile: same treatment, hamburger opens a full-screen noir sheet

**Hero (`src/components/Hero.tsx`)**
- Centered composition (replaces current split layout)
- Gold eyebrow: "Intellectual Property Investment Firm"
- Massive Cormorant italic headline: *Turning Assets to* **Legacy.** (Legacy in `#F0D78C`)
- Subhead: the thesis sentence, max-w-2xl, `/70` cream
- Two CTAs centered: gold-filled "Schedule Intro Call" + gold-outline "Investor Login" (keeps existing routing/forms)
- Subtle radial gold glow behind the composition; hero imagery moves down into an editorial band later (not in the hero itself)

**Stats Ribbon (new band under Hero, still in `Hero.tsx`)**
- Full-width `#1a1a1a` band with gold `/20` top and bottom hairlines
- Three columns divided by vertical gold hairlines: $400M+ / 15 Years+ / Worldwide
- Numerals in Cormorant `text-5xl` `#F0D78C`; labels in tiny tracked uppercase cream/50

**About / Thesis (`src/components/About.tsx`)**
- Editorial two-column: oversized Cormorant heading left, thesis paragraph + numbered pillars (01 / 02 / 03) right
- Existing about imagery moves here, treated with a subtle gold overlay and a gold hairline frame

**Why Partner (`src/components/WhyPartner.tsx`)**
- 1/3 + 2/3 layout: heading + italic pull-quote on the left, "Meet the team →" gold link
- Right: 2×2 grid of pillars (Capital Preservation, Cultural Stewardship, Strategic Optimization, Global Access — Domestic & International: Europe, Africa, Asia, LATAM). Each pillar: gold uppercase eyebrow + short cream/70 body
- Existing partnership image moves into an asymmetric feature block above the grid

**Team teaser (`src/components/Team.tsx`)**
- Reworked as a single editorial card: Atlanta skyline image with a gold hairline frame, gold eyebrow "Leadership", Cormorant headline, and an unmissable gold-outline "Meet the team →" button (keeps existing `/team` route)

**Team Details (`src/pages/TeamDetails.tsx`)**
- Same nav + footer, same tokens
- Grid of member cards on `#1a1a1a` with gold hairline borders, gold hover ring
- Names in Cormorant, roles in tracked gold uppercase, click still opens the bio Dialog (kept as-is)

**Contact (`src/components/Contact.tsx`)**
- Centered "Inquire for Partnership" Cormorant headline
- Single centered gold-outline "Schedule Intro Call" card (already centered — restyled to match)
- LeadForm restyled with cream inputs on `#1a1a1a`, gold focus ring

**Footer (`src/components/Footer.tsx`)**
- Three-column: brand mark + short mission blurb / Navigation links / Social (LinkedIn + Instagram) as gold-hairline circular icons
- Bottom rule with tiny tracked uppercase "© 2025 ECKA Holdings Corp. All rights reserved. | Turning Assets to Legacy."

## Technical section

- **`src/index.css`**: add Google Fonts import for Cormorant Garamond + Karla; define semantic HSL tokens: `--background`, `--foreground`, `--surface`, `--gold`, `--gold-highlight`, `--hairline`; add utility classes for eyebrow labels and gold hairline dividers.
- **`tailwind.config.ts`**: register the new tokens as colors (`background`, `foreground`, `surface`, `gold`, `gold-highlight`, `hairline`) and add `fontFamily.display` (Cormorant Garamond) and `fontFamily.sans` (Karla) so components use `font-display` / `font-sans` instead of arbitrary values. Keep shadcn's existing token set intact.
- Replace hardcoded colors (`bg-black`, `text-white`, `#C9A34C`, `#1A1A1A`, etc.) across the touched components with the new semantic tokens so the palette stays consistent and dark-mode-safe.
- No route changes, no data changes, no removal of existing behavior: LeadForm, TeamDetails Dialog, Carta Investor Login URL, mailto, LinkedIn/Instagram links, favicon, and OG metadata all preserved.
- After the refresh, capture the home + `/team` pages with Playwright and diff against the prototype to confirm composition, hierarchy, and gold usage match.

## Out of scope

- No new pages, no CMS, no backend changes
- No new copy beyond section eyebrows already shown in the prototype
- No animation library added — CSS transitions + existing Tailwind keyframes only