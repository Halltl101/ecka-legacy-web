import { expect, test } from 'bun:test';
import { monthlyCounts } from './monthly';

test('counts each form type into its month and skips months outside the range', () => {
  const rows = monthlyCounts(
    [{ created_at: '2026-10-15T12:00:00' }, { created_at: '2026-11-02T12:00:00' }, { created_at: '2026-08-01T12:00:00' }],
    [{ created_at: '2026-11-03T12:00:00', kind: 'general' }, { created_at: '2026-11-04T12:00:00', kind: 'rights' }],
    '2026-10', '2026-11',
  );
  expect(rows).toEqual([
    { month: '2026-10', newsletter: 1, intro: 0, catalog: 0 },
    { month: '2026-11', newsletter: 1, intro: 1, catalog: 1 },
  ]);
});

test('includes empty months across a year boundary', () => {
  expect(monthlyCounts([], [], '2026-12', '2027-01').map(r => r.month)).toEqual(['2026-12', '2027-01']);
});
