export type Vintage = 'evergreen' | 'mid' | 'contemporary';
export type Composition = 'masters' | 'publishing' | 'hybrid';
export const VINTAGE_MULTIPLES: Record<Vintage, [number, number]> = { evergreen: [10, 14], mid: [7, 10], contemporary: [4, 7] };
export const COMPOSITION_ADJ: Record<Composition, number> = { masters: -1, publishing: 0.5, hybrid: 0 };
export function estimate(royalties: number, vintage: Vintage, comp: Composition, retainedShare = 0) {
  const [lo, hi] = VINTAGE_MULTIPLES[vintage];
  const a = COMPOSITION_ADJ[comp] + (royalties < 250e3 ? -1.5 : royalties >= 3e6 ? 1 : 0);
  const sold = 1 - retainedShare;
  return { multiple: [lo + a, hi + a] as const, value: [royalties * (lo + a) * sold, royalties * (hi + a) * sold] as const };
}
export function royaltyBand(r: number) {
  if (r < 50e3) return 'Under $50K'; if (r < 250e3) return '$50K–$250K'; if (r < 1e6) return '$250K–$1M'; if (r < 5e6) return '$1M–$5M'; return '$5M+';
}
