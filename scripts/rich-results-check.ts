/**
 * Rich Results Test-style validator.
 *
 * Google's Rich Results Test has no public API, so this script mirrors the
 * published requirements from https://developers.google.com/search/docs/appearance/structured-data
 * for every rich result type this site emits, and checks each route's JSON-LD
 * against them. Runs at predeploy so failures block the build.
 *
 * Reference specs used:
 *  - Person / Organization (About page):        /appearance/structured-data/organization
 *  - Person (Profile page):                     /appearance/structured-data/profile-page
 *  - Breadcrumb:                                /appearance/structured-data/breadcrumb
 */
import { teamMembers, SITE_URL } from "../src/data/team";

type Severity = "error" | "warning";
type Issue = { where: string; severity: Severity; message: string };
const issues: Issue[] = [];
const fail = (where: string, message: string) =>
  issues.push({ where, severity: "error", message });
const warn = (where: string, message: string) =>
  issues.push({ where, severity: "warning", message });

const isAbsHttps = (u: unknown): u is string =>
  typeof u === "string" && /^https:\/\/[^\s]+$/.test(u);
const isNonEmpty = (s: unknown): s is string =>
  typeof s === "string" && s.trim().length > 0;

// ---- Google rich-result requirements ----------------------------------------

/** Google Organization rich result: required = name, url. Recommended = logo, sameAs. */
function checkOrganization(where: string, org: any) {
  if (org["@type"] !== "Organization")
    return fail(where, `expected @type=Organization, got ${org["@type"]}`);
  if (!isNonEmpty(org.name)) fail(where, "Organization.name is required");
  if (!isAbsHttps(org.url))
    fail(where, `Organization.url must be an absolute https URL (got ${org.url})`);
  if (!org.logo) warn(where, "Organization.logo recommended by Google");
  if (!org.sameAs) warn(where, "Organization.sameAs recommended (social/wiki URLs)");
}

/** Google Person (profile page) rich result: required = name; recommended = image, jobTitle, description, url, worksFor, sameAs. */
function checkPerson(where: string, p: any, opts: { requireImage?: boolean } = {}) {
  if (p["@type"] !== "Person")
    return fail(where, `expected @type=Person, got ${p["@type"]}`);
  if (!isNonEmpty(p.name)) fail(where, "Person.name is required");
  // Google requires image for profile page rich results
  if (opts.requireImage && !isAbsHttps(p.image))
    fail(where, `Person.image must be an absolute https URL (got ${p.image})`);
  if (!isNonEmpty(p.jobTitle)) warn(where, "Person.jobTitle recommended");
  if (!isNonEmpty(p.description)) warn(where, "Person.description recommended");
  if (!isAbsHttps(p.url))
    fail(where, `Person.url must be an absolute https URL (got ${p.url})`);
  if (!p.worksFor?.name) warn(where, "Person.worksFor.name recommended");
}

/** Google Breadcrumb requirements: itemListElement with position, name, item (URL). */
function checkBreadcrumb(where: string, b: any) {
  if (b["@type"] !== "BreadcrumbList")
    return fail(where, `expected @type=BreadcrumbList, got ${b["@type"]}`);
  if (!Array.isArray(b.itemListElement) || b.itemListElement.length === 0)
    return fail(where, "BreadcrumbList.itemListElement must be a non-empty array");

  const positions = new Set<number>();
  b.itemListElement.forEach((item: any, i: number) => {
    const at = `${where}[${i}]`;
    if (item["@type"] !== "ListItem") fail(at, "expected @type=ListItem");
    if (typeof item.position !== "number") fail(at, "position must be a number");
    else {
      if (item.position !== i + 1)
        fail(at, `position must be 1-indexed sequential (got ${item.position}, expected ${i + 1})`);
      if (positions.has(item.position))
        fail(at, `duplicate position ${item.position}`);
      positions.add(item.position);
    }
    if (!isNonEmpty(item.name)) fail(at, "name is required");
    // Last crumb may omit item per Google, but we always include it — validate when present.
    if (item.item !== undefined && !isAbsHttps(item.item))
      fail(at, `item must be an absolute https URL (got ${item.item})`);
  });
}

/** ProfilePage requirements: mainEntity referencing a Person. */
function checkProfilePage(where: string, pp: any, graph: any[]) {
  if (pp["@type"] !== "ProfilePage")
    return fail(where, `expected @type=ProfilePage, got ${pp["@type"]}`);
  if (!isAbsHttps(pp.url))
    fail(where, `ProfilePage.url must be an absolute https URL (got ${pp.url})`);
  if (!isNonEmpty(pp.name)) warn(where, "ProfilePage.name recommended");
  const mainId = pp.mainEntity?.["@id"];
  if (!mainId) return fail(where, "ProfilePage.mainEntity.@id required");
  const target = graph.find((n) => n["@id"] === mainId);
  if (!target) fail(where, `ProfilePage.mainEntity references missing @id "${mainId}"`);
  else if (target["@type"] !== "Person")
    fail(where, `ProfilePage.mainEntity must reference a Person (got ${target["@type"]})`);
}

function checkAboutPage(where: string, ap: any) {
  if (ap["@type"] !== "AboutPage")
    return fail(where, `expected @type=AboutPage, got ${ap["@type"]}`);
  if (!isAbsHttps(ap.url))
    fail(where, `AboutPage.url must be an absolute https URL (got ${ap.url})`);
  if (!isNonEmpty(ap.name)) warn(where, "AboutPage.name recommended");
}

// ---- Route simulators (must mirror what the pages emit) ---------------------

function buildTeamIndexLd() {
  const PAGE_URL = `${SITE_URL}/team`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": `${PAGE_URL}#aboutpage`, url: PAGE_URL, name: "Leadership Team — Ecka Holdings", description: "Meet the Ecka Holdings leadership team." },
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
        { "@type": "ListItem", position: 2, name: "Leadership Team", item: PAGE_URL },
      ]},
    ],
  };
}

function buildMemberLd(m: (typeof teamMembers)[number]) {
  const pageUrl = `${SITE_URL}/team/${m.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ProfilePage", "@id": `${pageUrl}#profilepage`, url: pageUrl, name: `${m.name} — ${m.role}`, description: m.bio, mainEntity: { "@id": `${pageUrl}#person` } },
      {
        "@type": "Person",
        "@id": `${pageUrl}#person`,
        name: m.name,
        jobTitle: m.role,
        description: m.bio,
        image: `${SITE_URL}${m.image}`,
        url: pageUrl,
        worksFor: { "@type": "Organization", name: "Ecka Holdings", url: SITE_URL },
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Leadership Team", item: `${SITE_URL}/team` },
        { "@type": "ListItem", position: 3, name: m.name, item: pageUrl },
      ]},
    ],
  };
}

// ---- Run --------------------------------------------------------------------

function runChecks(where: string, ld: any, expected: { profile?: boolean } = {}) {
  if (ld["@context"] !== "https://schema.org")
    fail(where, `@context must be https://schema.org (got ${ld["@context"]})`);
  const graph: any[] = Array.isArray(ld["@graph"]) ? ld["@graph"] : [];
  if (graph.length === 0) return fail(where, "@graph is empty");

  for (const node of graph) {
    switch (node["@type"]) {
      case "Organization":
        checkOrganization(`${where}#organization`, node);
        if (Array.isArray(node.employee))
          node.employee.forEach((e: any, i: number) =>
            checkPerson(`${where}#employee[${i}]`, e, { requireImage: true }),
          );
        break;
      case "Person":
        checkPerson(`${where}#person`, node, { requireImage: expected.profile });
        break;
      case "BreadcrumbList":
        checkBreadcrumb(`${where}#breadcrumbs`, node);
        break;
      case "ProfilePage":
        checkProfilePage(`${where}#profilepage`, node, graph);
        break;
      case "AboutPage":
        checkAboutPage(`${where}#aboutpage`, node);
        break;
      default:
        warn(where, `unknown @type in graph: ${node["@type"]}`);
    }
  }
}

runChecks("/team", buildTeamIndexLd());
for (const m of teamMembers) {
  runChecks(`/team/${m.slug}`, buildMemberLd(m), { profile: true });
}

// ---- Report -----------------------------------------------------------------

const errors = issues.filter((i) => i.severity === "error");
const warnings = issues.filter((i) => i.severity === "warning");
const routes = teamMembers.length + 1;

if (warnings.length) {
  console.warn(`⚠ ${warnings.length} rich-result warning(s):`);
  for (const { where, message } of warnings) console.warn(`  [${where}] ${message}`);
}
if (errors.length === 0) {
  console.log(`✓ Rich Results-style checks passed for ${routes} routes.`);
  process.exit(0);
} else {
  console.error(`\n✗ Rich Results-style checks failed — ${errors.length} error(s):\n`);
  for (const { where, message } of errors) console.error(`  [${where}] ${message}`);
  process.exit(1);
}
