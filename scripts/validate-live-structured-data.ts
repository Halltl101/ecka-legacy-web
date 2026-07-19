/**
 * Live JSON-LD validator — crawls rendered public URLs and checks that the
 * structured data injected by react-helmet-async matches expectations.
 *
 * Runs against the deployed site (not local source). Used by the scheduled
 * post-deploy workflow to catch regressions that only surface once React
 * has hydrated in a real browser.
 *
 * Usage:
 *   BASE_URL=https://eckaholdings.com bun run validate:seo:live
 *
 * Requires Playwright's Chromium: `bunx playwright install --with-deps chromium`.
 */
import { chromium } from "playwright";
import { teamMembers } from "../src/data/team";

const BASE_URL = (process.env.BASE_URL || "https://eckaholdings.com").replace(/\/$/, "");

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

async function fetchJsonLd(page: any, url: string): Promise<any[]> {
  const response = await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
  if (!response || !response.ok()) {
    err(url, `HTTP ${response?.status() ?? "no-response"}`);
    return [];
  }
  // Wait for helmet to inject <script type="application/ld+json">
  await page
    .waitForSelector('script[type="application/ld+json"]', { timeout: 10_000 })
    .catch(() => err(url, "no <script type=application/ld+json> found after hydration"));

  const blocks: string[] = await page.$$eval(
    'script[type="application/ld+json"]',
    (nodes: Element[]) => nodes.map((n) => n.textContent || ""),
  );
  const parsed: any[] = [];
  for (const [i, raw] of blocks.entries()) {
    try {
      parsed.push(JSON.parse(raw));
    } catch (e) {
      err(url, `JSON-LD block[${i}] failed to parse: ${(e as Error).message}`);
    }
  }
  return parsed;
}

function findGraph(blocks: any[], requiredTypes: string[]): any | null {
  for (const ld of blocks) {
    const nodes = Array.isArray(ld?.["@graph"]) ? ld["@graph"] : [ld];
    const types = new Set(nodes.map((n: any) => n?.["@type"]));
    if (requiredTypes.every((t) => types.has(t))) return ld;
  }
  return null;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (compatible; EckaSEOMonitor/1.0; +https://eckaholdings.com)",
  });
  const page = await context.newPage();

  // ---- /team ----
  {
    const url = `${BASE_URL}/team`;
    const where = "/team";
    console.log(`→ ${url}`);
    const blocks = await fetchJsonLd(page, url);
    const ld = findGraph(blocks, ["AboutPage", "Organization", "BreadcrumbList"]);
    if (!ld) {
      err(where, "missing @graph with AboutPage + Organization + BreadcrumbList");
    } else {
      const nodes = ld["@graph"];
      const org = nodes.find((n: any) => n["@type"] === "Organization");
      const employees = Array.isArray(org?.employee) ? org.employee : [];
      if (employees.length !== teamMembers.length)
        err(where, `expected ${teamMembers.length} employees, got ${employees.length}`);
      employees.forEach((p: any, i: number) => validatePerson(`${where}#employee[${i}]`, p));
      const bc = nodes.find((n: any) => n["@type"] === "BreadcrumbList");
      if (bc) validateBreadcrumb(`${where}#breadcrumbs`, bc);
    }
  }

  // ---- /team/:slug ----
  for (const m of teamMembers) {
    const url = `${BASE_URL}/team/${m.slug}`;
    const where = `/team/${m.slug}`;
    console.log(`→ ${url}`);
    const blocks = await fetchJsonLd(page, url);
    const ld = findGraph(blocks, ["ProfilePage", "Person", "BreadcrumbList"]);
    if (!ld) {
      err(where, "missing @graph with ProfilePage + Person + BreadcrumbList");
      continue;
    }
    const nodes = ld["@graph"];
    const person = nodes.find((n: any) => n["@type"] === "Person");
    validatePerson(`${where}#person`, person);
    if (person?.name !== m.name)
      err(where, `Person.name mismatch: expected "${m.name}", got "${person?.name}"`);
    if (person?.jobTitle !== m.role)
      err(where, `Person.jobTitle mismatch: expected "${m.role}", got "${person?.jobTitle}"`);
    const bc = nodes.find((n: any) => n["@type"] === "BreadcrumbList");
    if (bc) validateBreadcrumb(`${where}#breadcrumbs`, bc);

    // canonical + og:url self-reference
    const canonical = await page
      .locator('link[rel="canonical"]')
      .first()
      .getAttribute("href")
      .catch(() => null);
    const ogUrl = await page
      .locator('meta[property="og:url"]')
      .first()
      .getAttribute("content")
      .catch(() => null);
    if (canonical && canonical !== url)
      err(where, `canonical mismatch: expected ${url}, got ${canonical}`);
    if (ogUrl && ogUrl !== url)
      err(where, `og:url mismatch: expected ${url}, got ${ogUrl}`);
  }

  await browser.close();

  const total = teamMembers.length + 1;
  if (issues.length === 0) {
    console.log(`\n✓ Live JSON-LD validation passed for ${total} routes on ${BASE_URL}.`);
    process.exit(0);
  } else {
    console.error(`\n✗ Live JSON-LD validation failed on ${BASE_URL} — ${issues.length} issue(s):\n`);
    for (const { where, message } of issues) console.error(`  [${where}] ${message}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error("Fatal error running live validator:", e);
  process.exit(2);
});
