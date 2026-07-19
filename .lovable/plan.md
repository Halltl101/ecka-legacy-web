## Plan: Circular team portraits

Update `src/pages/TeamDetails.tsx` to render each team member's photo as a circular headshot instead of a square.

### Changes
1. **Grid card portrait** (currently a 144px square with a gold-bordered box)
   - Change the outer `<div>` and `<button>` from `w-36 h-36` square to `w-40 h-40 rounded-full`.
   - Add `rounded-full` to the inner `overflow-hidden` wrapper and drop the hard square border in favor of a full ring: `ring-1 ring-gold/30 group-hover:ring-gold ring-offset-4 ring-offset-surface`.
   - Keep the hover expand-icon overlay but round it (`rounded-full`) so it matches the new shape.

2. **Dialog portrait** (bio modal header, currently 160px square)
   - Change the wrapper to `rounded-full` with the same gold ring treatment for consistency.

3. **Preserve per-person tuning**
   - Keep `getImageStyle()` as-is so Alex Benton and Ric Aliberte's manual `objectPosition` / `scale` values continue to apply inside the circular crop.

### Out of scope
- No changes to the images themselves, the grid layout, bios, or any other page.
