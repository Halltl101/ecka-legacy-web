## Goal

Cut homepage density from 5 heavy sections down to 4 focused ones without losing institutional weight or any live content — everything trimmed still exists on dedicated pages or the Team detail page.

## Target structure

```text
Current:  Hero → About → WhyPartner → Team (full) → Contact
Proposed: Hero → Philosophy → Team teaser → Contact
```

## Changes

### 1. New `Philosophy` section (replaces `About` + `WhyPartner` on the homepage)

Single section that folds the strongest pieces of both together:

- Section header + intro paragraph (from About).
- The Traditional vs Ecka comparison block (kept — it's the sharpest differentiator).
- One row of the 5 capability icons (Global, Data-Driven, etc.) as a quiet footer strip.
- **Removed from homepage:** the 3 investment-philosophy pillar cards (Mission/Stewardship/Growth) and the 3 differentiator cards (they duplicate points already made by the comparison). These can move to a future `/approach` page later if desired — no content is deleted from the repo in this pass, just unmounted from the homepage.

### 2. New compact `TeamTeaser` (replaces the full `Team` section)

- Short headline + one-line intro.
- Horizontal strip of ~6 leadership avatars (photo + name only, no bios, no role cards).
- Single gold CTA button → `/team` ("Meet the full team").
- Removes the 3 leadership group cards and the Board of Directors icon grid from the homepage. The full Team detail page (`/team`) already carries all of that.

### 3. Contact section

Unchanged.

### 4. Spacing pass

Reduce vertical padding between sections from `py-28 lg:py-36` to `py-20 lg:py-28` so the tighter page still breathes without feeling stretched.

## Files touched

- `src/pages/Index.tsx` — swap section imports/order.
- `src/components/Philosophy.tsx` — **new**, composed from existing About intro + WhyPartner comparison + capability strip.
- `src/components/TeamTeaser.tsx` — **new**, avatar strip + CTA to `/team`.
- `src/components/About.tsx`, `src/components/WhyPartner.tsx`, `src/components/Team.tsx` — left in the repo untouched so nothing is lost; simply no longer rendered on `/`.

## Out of scope

- Team detail page (`/team`) — no changes.
- Navigation, footer, Hero, Contact — no changes.
- Colors, typography, imagery — no changes.
- No new routes in this pass. If we later want dedicated `/approach` or `/portfolio` pages for the trimmed content, that's a follow-up.
