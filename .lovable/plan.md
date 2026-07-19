## Goal
Add per-route SEO + Open Graph metadata to the `/team` page (Leadership Team) so search engines and social crawlers see team-specific title, description, canonical, and OG/Twitter tags instead of the sitewide defaults.

## Approach
Use `react-helmet-async` (per the project's head-metadata pattern) so `/team` can override the static `index.html` tags for JS-executing crawlers, while `index.html` continues to serve as the fallback for non-JS social crawlers.

## Steps

1. **Install dependency**
   - `react-helmet-async`

2. **Wire the provider once** (`src/main.tsx`)
   - Wrap `<App />` in `<HelmetProvider>`.

3. **Add `<Helmet>` to `src/pages/TeamDetails.tsx`**
   Tags to set:
   - `<title>`: "Leadership Team — Ecka Holdings"
   - `<meta name="description">`: Short summary of the leadership team (music IP investment executives, catalog acquisitions, legal, finance).
   - `<link rel="canonical" href="https://ecka-legacy-web.lovable.app/team">`
   - `og:title`, `og:description`, `og:type=website`, `og:url` (self-referencing `/team`)
   - `og:image` + `twitter:image`: reuse the existing absolute-friendly logo/preview image already referenced in `index.html` (`/lovable-uploads/c1ce9ac2-cfcf-42dc-83b2-981a548ee073.png`), promoted to an absolute URL on `ecka-legacy-web.lovable.app`.
   - `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:url`
   - JSON-LD: `AboutPage` (or `Organization` with `employee` array) listing the 9 team members with `name` and `jobTitle` so search engines can associate the roster with the page.

4. **Leave `index.html` untouched**
   - Sitewide OG tags stay as fallback for non-JS social crawlers (LinkedIn, Slack, Facebook).

## Notes for the user
- Because this is a static SPA, per-route OG tags are only picked up by JS-executing crawlers (Googlebot). Non-JS social scrapers will still see the sitewide `index.html` preview when someone pastes a `/team` link. True per-route social previews require SSR.
- Social platforms cache previews — after publishing, forcing a refresh in each platform's link debugger is needed to see changes immediately.
