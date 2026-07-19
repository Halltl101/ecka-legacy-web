## Current state

The homepage (`src/pages/Index.tsx`) already does **not** include the Leadership/Team section. It renders: `Navigation → Hero → About → WhyPartner → Contact → Footer`. The `Team` component (`src/components/Team.tsx`) still exists in the codebase but isn't imported or rendered anywhere on `/`.

The full leadership page remains accessible at `/team` via the nav link.

## Options

1. **No-op** — nothing to remove; confirm and leave as is.
2. **Delete the unused component** — remove `src/components/Team.tsx` so it can't be re-added accidentally. `/team` (which uses `src/pages/TeamDetails.tsx`) is unaffected.

## Question

Which would you like? If you're seeing a Leadership section on the live site, it may be a cached view — try a hard refresh. If it still appears, let me know where (screenshot or section heading) so I can trace it.
