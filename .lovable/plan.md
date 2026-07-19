## Findings (tested at 375 / 414 / 480 / 640 / 768)

- No horizontal overflow at any width.
- Hamburger toggles cleanly to a close (X) button; no console errors.
- All 6 sheet items render without clipping; hash links resolve correctly from `/team` routes.
- **One real issue:** sheet link rows are ~16 px tall — well under the 44 px WCAG / iOS minimum tap target. Fingers hit neighbors easily.

## Change

Update the mobile sheet in `src/components/Navigation.tsx` (lines 89–124):

- Replace the `gap-5` stack with each link as its own row: `py-3 min-h-[44px] flex items-center`, separated by a hairline `border-b border-gold/5` for visual rhythm.
- Apply the same 44 px min-height to the Investor Login link.
- Make the "Schedule Call" gold pill full-width (`w-full`, `inline-flex items-center justify-center`) with a top margin so it reads as a primary action rather than a floating tag.

No other files change. Desktop nav is untouched.