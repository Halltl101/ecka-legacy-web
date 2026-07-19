## Goal
Verify that the "Team" link in the site navigation routes to `/team` (the full Leadership Team page) from every page, on both desktop and mobile viewports.

## Approach
Drive the running preview at `http://localhost:8080` with Playwright — no code changes, read-only verification.

## Steps

1. **Enumerate routes** by reading `src/App.tsx` to get every public route (e.g., `/`, `/team`, and any others registered).

2. **Desktop check** (viewport 1280×1800): for each route
   - Navigate to the route.
   - Click the desktop nav "Team" link.
   - Assert `page.url()` ends with `/team` and the "The Ecka Team." heading is visible.
   - Screenshot to `/tmp/browser/team-nav/desktop_<route>.png`.

3. **Mobile check** (viewport 390×844, iPhone-ish): for each route
   - Navigate to the route.
   - Open the mobile menu (hamburger button).
   - Click the "Team" link inside the mobile sheet.
   - Assert same URL + heading.
   - Screenshot to `/tmp/browser/team-nav/mobile_<route>.png`.

4. **Report** back per route / per viewport: pass/fail, final URL, and any console errors captured during navigation.

## Notes
Read-only verification — no files edited. If a failure surfaces (e.g., a page uses a different Navigation component, or the mobile menu link is wrong), report the exact page and selector so a follow-up fix plan can be scoped.
