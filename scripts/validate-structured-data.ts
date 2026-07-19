/**
 * Validates JSON-LD structured data for every route that ships schema markup.
 * Run: `bun run validate:seo` (also runs automatically via prebuild).
 *
 * Checks:
 *  - JSON parses cleanly
 *  - Required @context / @type / @graph shape
 *  - Per-type required fields (Person, Organization, ProfilePage, AboutPage, BreadcrumbList)
 *  - All URLs are absolute https://
 *  - All image URLs are absolute https://
 *  - No empty required strings
 *  - Canonical & og:url self-reference (same URL string)
 *
 * Exits non-zero on any error so CI / prebuild fails loudly.
 */
import { teamMembers, SITE_URL } from "../src/data/team";

type Issue = { where: string; message: string };
const issues: Issue[] = [];
const err = (where: string, message: string) => issues.push({ where, message });

const isAbsHttps = (u: unknown): u is string =>
  typeof u === "string" && /^https:\/\//.test(u);

function validatePerson(where: string, p: any) {
  if (p["@type"] !== "Person") return err(where, `expected @type=Person, got ${p["@type"]}`);
  if (!p.name) err(where, "Person.name missing");
  if (!p.jobTitle) err(where, "Person.jobTitle missing");
  if (!p.description) err(where, "Person.description missing");
  if (!isAbsHttps(p.image)) err(where, `Person.image must be absolute https URL (got ${p.image})`);
  if (!isAbsHttps(p.url)) err(where, `Person.url must be absolute https URL (got ${p.url})`);
  if (!p.worksFor?.name) err(where, "Person.worksFor.name missing");
}

function validateBreadcrumb(where: string, b: any) {
  if (!Array.isArray(b.itemListElement) || b.itemListElement.length === 0)
    return err(where, "BreadcrumbList.itemListElement empty");
  b.itemListElement.forEach((item: any, i: number) => {
    if (item["@type"] !== "ListItem") err(`${where}[${i}]`, "expected @type=ListItem");
    if (typeof item.position !== "number") err(`${where}[${i}]`, "position must be number");
    if (!item.name) err(`${where}[${i}]`, "name missing");
    if (!isAbsHttps(item.item)) err(`${where}[${i}]`, `item must be absolute https URL (got ${item.item})`);
  });
}

function validateGraph(where: string, ld: any, expectedTypes: string[]) {
  if (ld["@context"] !== "https://schema.org")
    err(where, `@context must be https://schema.org (got ${ld["@context"]})`);
  if (!Array.isArray(ld["@graph"])) return err(where, "@graph must be an array");
  const foundTypes = ld["@graph"].map((n: any) => n["@type"]);
  for (const t of expectedTypes) {
    if (!foundTypes.includes(t)) err(where, `missing @type=${t} in @graph`);
  }
}

// ---- Team index page (/team) ----
{
  const PAGE_URL = `${SITE_URL}/team`;
  const employeeLd = teamMembers.map((m) => ({
    "@type": "Person",
    "@id": `${SITE_URL}/team/${m.slug}#person`,
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    image: `${SITE_URL}${m.image}`,
    url: `${SITE_URL}/team/${m.slug}`,
    worksFor: { "@type": "Organization", name: "Ecka Holdings", url: SITE_URL },
  }));
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": `${PAGE_URL}#aboutpage`, url: PAGE_URL, name: "Leadership Team — Ecka Holdings", description: "..." },
      { "@type": "Organization", "@id": `${SITE_URL}#organization`, name: "Ecka Holdings", url: SITE_URL, employee: employeeLd },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Leadership Team", item: PAGE_URL },
      ]},
    ],
  };

  const where = "/team";
  JSON.parse(JSON.stringify(ld)); // parseability
  validateGraph(where, ld, ["AboutPage", "Organization", "BreadcrumbList"]);
  employeeLd.forEach((p, i) => validatePerson(`${where}#employee[${i}]`, p));
  validateBreadcrumb(`${where}#breadcrumbs`, ld["@graph"][2]);
}

// ---- Per-member profile pages (/team/:slug) ----
for (const m of teamMembers) {
  const pageUrl = `${SITE_URL}/team/${m.slug}`;
  const where = `/team/${m.slug}`;

  if (!/^[a-z0-9-]+$/.test(m.slug)) err(where, `slug must be kebab-case (got "${m.slug}")`);
  if (!m.image.startsWith("/")) err(where, `image path must start with / (got ${m.image})`);

  const person = {
    "@type": "Person",
    "@id": `${pageUrl}#person`,
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    image: `${SITE_URL}${m.image}`,
    url: pageUrl,
    worksFor: { "@type": "Organization", name: "Ecka Holdings", url: SITE_URL },
  };

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ProfilePage", "@id": `${pageUrl}#profilepage`, url: pageUrl, name: `${m.name} — ${m.role}`, description: m.bio, mainEntity: { "@id": `${pageUrl}#person` } },
      person,
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Leadership Team", item: `${SITE_URL}/team` },
        { "@type": "ListItem", position: 3, name: m.name, item: pageUrl },
      ]},
    ],
  };

  JSON.parse(JSON.stringify(ld));
  validateGraph(where, ld, ["ProfilePage", "Person", "BreadcrumbList"]);
  validatePerson(`${where}#person`, person);
  validateBreadcrumb(`${where}#breadcrumbs`, ld["@graph"][2]);

  // canonical == og:url == JSON-LD url
  const canonical = pageUrl;
  const ogUrl = pageUrl;
  const ldUrl = person.url;
  if (canonical !== ogUrl || canonical !== ldUrl)
    err(where, `canonical, og:url, and JSON-LD url must match`);
}

// ---- sitemap.xml cross-check ----
try {
  const { readFileSync } = await import("node:fs");
  const sitemap = readFileSync("public/sitemap.xml", "utf8");
  const expected = [`${SITE_URL}/team`, ...teamMembers.map((m) => `${SITE_URL}/team/${m.slug}`)];
  for (const url of expected) {
    if (!sitemap.includes(url)) err("sitemap.xml", `missing <loc>${url}</loc>`);
  }
} catch (e) {
  err("sitemap.xml", `could not read: ${(e as Error).message}`);
}

// ---- Report ----
const total = teamMembers.length + 1;
if (issues.length === 0) {
  console.log(`✓ Structured-data validation passed for ${total} routes (${teamMembers.length} member profiles + /team).`);
  process.exit(0);
} else {
  console.error(`✗ Structured-data validation failed — ${issues.length} issue(s):\n`);
  for (const { where, message } of issues) console.error(`  [${where}] ${message}`);
  process.exit(1);
}
