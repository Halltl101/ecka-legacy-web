export type MonthRow = { month: string; newsletter: number; intro: number; catalog: number };

/** Buckets dated items into calendar months (YYYY-MM, local time) between from and to, inclusive. */
export function monthlyCounts(
  news: { created_at: string }[],
  subs: { created_at: string; kind: string }[],
  from: string,
  to: string,
): MonthRow[] {
  const rows = new Map<string, MonthRow>();
  const [fy, fm] = from.split('-').map(Number);
  const [ty, tm] = to.split('-').map(Number);
  for (let y = fy, m = fm; y < ty || (y === ty && m <= tm); m === 12 ? (y++, m = 1) : m++) {
    const key = `${y}-${String(m).padStart(2, '0')}`;
    rows.set(key, { month: key, newsletter: 0, intro: 0, catalog: 0 });
  }
  const key = (d: string) => { const t = new Date(d); return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}`; };
  news.forEach(n => { const r = rows.get(key(n.created_at)); if (r) r.newsletter++; });
  subs.forEach(s => { const r = rows.get(key(s.created_at)); if (r) s.kind === 'rights' ? r.catalog++ : r.intro++; });
  return [...rows.values()];
}
