## Goal
On `/team`, make each member's photo a clickable "expand" trigger that opens a modal (pop-up) with their full bio, name, role, and larger image.

## Changes

**`src/pages/TeamDetails.tsx`**
- Import shadcn `Dialog` (`Dialog`, `DialogContent`, `DialogTrigger`, `DialogHeader`, `DialogTitle`, `DialogDescription`) and the `Expand` icon from lucide-react.
- Wrap each member's circular image in a `DialogTrigger` button so clicking the photo opens the pop-up. Show a small expand icon overlay on hover to signal it's clickable, plus a `cursor-pointer` and subtle scale/ring on hover.
- The card's short bio text remains under the image as it is today (no other layout changes).
- `DialogContent` (dark theme to match site) shows: larger version of the member's photo, name, role in gold, and the full bio.

## Notes
- Uses the existing shadcn Dialog component already in the project — no new deps.
- No changes to routes, other pages, or bios.
