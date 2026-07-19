/**
 * Prerender per-route static HTML so social crawlers (LinkedIn, Slack,
 * Facebook, X) — which do NOT execute JavaScript — see full metadata
 * instead of the sitewide fallback in index.html.
 *
 * Strategy: after `vite build`, take the built `dist/index.html`, replace
 * its <head> tags with route-specific title/description/canonical/og:*
 * /twitter:* /JSON-LD, and write the result to:
 *
 *   dist/team/index.html
 *   dist/team/<slug>/index.html   (one per team member)
 *
 * GitHub Pages serves these files directly for `/team` and `/team/<slug>`
 * requests, so crawlers get the correct <head> with zero JS execution.
 * React hydrates on top for real users — no visible difference.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { teamMembers, SITE_URL } from "../src/data/team";

const DIST = "dist";
const template = readFileSync(join(DIST, "index.html"), "utf8");

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

type Meta = {
  title: string;
  description: string;
  canonical: string;
  ogType: "website" | "profile";
  image: string;
  jsonLd: unknown;
  extra?: Record<string, string>; // e.g. profile:first_name
};

function renderHead(meta: Meta): string {
  const {
    title,
    description,
    canonical,
    ogType,
    image,
    jsonLd,
    extra = {},
  } = meta;
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const url = escapeHtml(canonical);
  const img = escapeHtml(image);
  const extras = Object.entries(extra)
    .map(([k, v]) => `    <meta property="${k}" content="${escapeHtml(v)}" />`)
    .join("\n");
  return [
    `    <title>${t}</title>`,
    `    <meta name="description" content="${d}" />`,
    `    <link rel="canonical" href="${url}" />`,
    ``,
    `    <meta property="og:title" content="${t}" />`,
    `    <meta property="og:description" content="${d}" />`,
    `    <meta property="og:type" content="${ogType}" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:image" content="${img}" />`,
    extras,
    ``,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${t}" />`,
    `    <meta name="twitter:description" content="${d}" />`,
    `    <meta name="twitter:image" content="${img}" />`,
    `    <meta name="twitter:url" content="${url}" />`,
    ``,
    `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  ]
    .filter((l) => l !== "")
    .join("\n");
}

/**
 * Replace the head tags in the built template with route-specific ones.
 * We strip every existing <title>, <meta name="description">, <link rel="canonical">,
 * every og:* / twitter:*, and any inline JSON-LD, then splice the new block
 * back in just before </head>. Other head tags (charset, viewport, favicon,
 * built stylesheets/scripts) are preserved verbatim.
 */
function renderPage(meta: Meta): string {
  let html = template;
  html = html.replace(/\n?\s*<title>[\s\S]*?<\/title>/g, "");
  html = html.replace(
    /\n?\s*<meta\s+name=["'](?:description|author|twitter:[^"']+)["'][^>]*>/g,
    "",
  );
  html = html.replace(/\n?\s*<meta\s+property=["'](?:og:[^"']+|profile:[^"']+)["'][^>]*>/g, "");
  html = html.replace(/\n?\s*<link\s+rel=["']canonical["'][^>]*>/g, "");
  html = html.replace(
    /\n?\s*<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/g,
    "",
  );

  const injected = `\n${renderHead(meta)}\n  `;
  return html.replace("</head>", `${injected}</head>`);
}

function writePage(routePath: string, meta: Meta) {
  const outPath = join(DIST, routePath, "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, renderPage(meta), "utf8");
  console.log(`  ✓ ${routePath}/index.html`);
}

// ---- /team ----
{
  const canonical = `${SITE_URL}/team`;
  const title = "Leadership Team | Ecka Holdings";
  const description =
    "Meet the Ecka Holdings leadership team — music-industry, legal, and financial executives leading a global intellectual property portfolio.";
  const meta: Meta = {
    title,
    description,
    canonical,
    ogType: "website",
    image: `${SITE_URL}/lovable-uploads/c1ce9ac2-cfcf-42dc-83b2-981a548ee073.png`,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "AboutPage", "@id": `${canonical}#aboutpage`, url: canonical, name: title, description },
        {
          "@type": "Organization",
          "@id": `${SITE_URL}#organization`,
          name: "Ecka Holdings",
          url: SITE_URL,
          employee: teamMembers.map((m) => ({
            "@type": "Person",
            "@id": `${SITE_URL}/team/${m.slug}#person`,
            name: m.name,
            jobTitle: m.role,
            description: m.bio,
            image: `${SITE_URL}${m.image}`,
            url: `${SITE_URL}/team/${m.slug}`,
            worksFor: { "@type": "Organization", name: "Ecka Holdings", url: SITE_URL },
          })),
        },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Leadership Team", item: canonical },
        ]},
      ],
    },
  };
  writePage("team", meta);
}

// ---- /team/<slug> ----
for (const m of teamMembers) {
  const canonical = `${SITE_URL}/team/${m.slug}`;
  const image = `${SITE_URL}${m.image}`;
  const title = `${m.name} — ${m.role} | Ecka Holdings`;
  const description = m.bio;
  const [firstName, ...rest] = m.name.split(" ");
  const meta: Meta = {
    title,
    description,
    canonical,
    ogType: "profile",
    image,
    extra: {
      "profile:first_name": firstName,
      "profile:last_name": rest.join(" "),
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfilePage",
          "@id": `${canonical}#profilepage`,
          url: canonical,
          name: title,
          description,
          mainEntity: { "@id": `${canonical}#person` },
        },
        {
          "@type": "Person",
          "@id": `${canonical}#person`,
          name: m.name,
          jobTitle: m.role,
          description: m.bio,
          image,
          url: canonical,
          worksFor: { "@type": "Organization", name: "Ecka Holdings", url: SITE_URL },
        },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Leadership Team", item: `${SITE_URL}/team` },
          { "@type": "ListItem", position: 3, name: m.name, item: canonical },
        ]},
      ],
    },
  };
  writePage(`team/${m.slug}`, meta);
}

console.log(`\n✓ Prerendered ${teamMembers.length + 1} routes with crawler-ready metadata.`);
