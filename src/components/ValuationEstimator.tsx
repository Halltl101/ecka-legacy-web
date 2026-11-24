import React, { useState } from 'react';
import LeadForm from './LeadForm';
import { estimate, royaltyBand, type Vintage, type Composition } from '@/lib/valuation';

const tiers = [50e3, 150e3, 500e3, 1.5e6, 3e6, 5e6];
const fmt = (n: number) => n >= 1e6 ? `$${(n / 1e6).toFixed(n >= 1e7 ? 0 : 1)}M` : `$${Math.round(n / 1e3)}K`;
const comps: { id: Composition; label: string; asset: string[] }[] = [
  { id: 'masters', label: 'Master Recordings', asset: ['Master Recordings'] },
  { id: 'publishing', label: 'Publishing', asset: ["Publishing / Writer's Share"] },
  { id: 'hybrid', label: 'Hybrid / Full Rights', asset: ['Master Recordings', "Publishing / Writer's Share"] },
];
const vintages: { id: Vintage; label: string; note: string }[] = [
  { id: 'evergreen', label: 'Evergreen', note: '10+ years' },
  { id: 'mid', label: 'Mid-Catalog', note: '3–10 years' },
  { id: 'contemporary', label: 'Contemporary', note: 'Under 3 years' },
];

const Chip = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button type="button" onClick={onClick} aria-pressed={active}
    className={`px-4 py-2.5 text-xs uppercase tracking-[0.15em] border transition-colors ${active ? 'border-gold bg-gold/10 text-gold' : 'border-gold/20 text-foreground/60 hover:border-gold/50'}`}>{children}</button>
);

const ValuationEstimator = () => {
  const [tier, setTier] = useState(2);
  const [comp, setComp] = useState<Composition>('publishing');
  const [vintage, setVintage] = useState<Vintage>('mid');
  const [partner, setPartner] = useState(false);
  const r = tiers[tier];
  const { multiple, value } = estimate(r, vintage, comp, partner ? 0.3 : 0);

  return (
    <div className="mt-12 border border-gold/25 bg-surface p-8 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--gold)/0.06)_0%,_transparent_60%)] pointer-events-none" />
      <div className="relative">
        <span className="eyebrow-gold block mb-3">Catalog Valuation Estimator</span>
        <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-8">What could your catalog be <span className="italic text-gold">worth?</span></h3>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label htmlFor="royalty-slider" className="eyebrow">Annual Net Royalties</label>
              <span className="font-display text-2xl text-gold">{fmt(r)}{tier === tiers.length - 1 ? '+' : ''}</span>
            </div>
            <input id="royalty-slider" type="range" min={0} max={tiers.length - 1} step={1} value={tier} onChange={e => setTier(+e.target.value)} className="w-full accent-[hsl(var(--gold))]" />
            <div className="flex justify-between text-[10px] text-foreground/40 mt-1 font-sans tabular-nums">{tiers.map(t => <span key={t}>{fmt(t)}</span>)}</div>
          </div>
          <div>
            <p className="eyebrow mb-3">Asset Composition</p>
            <div className="flex flex-wrap gap-2">{comps.map(c => <Chip key={c.id} active={comp === c.id} onClick={() => setComp(c.id)}>{c.label}</Chip>)}</div>
          </div>
          <div>
            <p className="eyebrow mb-3">Catalog Vintage</p>
            <div className="flex flex-wrap gap-2">{vintages.map(v => <Chip key={v.id} active={vintage === v.id} onClick={() => setVintage(v.id)}>{v.label} · {v.note}</Chip>)}</div>
          </div>
          <div>
            <p className="eyebrow mb-3">Deal Structure</p>
            <div className="flex flex-wrap gap-2">
              <Chip active={!partner} onClick={() => setPartner(false)}>100% Outright Sale</Chip>
              <Chip active={partner} onClick={() => setPartner(true)}>Partnership · Sell 70%</Chip>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gold/15" aria-live="polite">
          <p className="eyebrow mb-2">Indicative Range · {multiple[0].toFixed(1)}× – {multiple[1].toFixed(1)}× Net Royalties</p>
          <p className="font-display text-4xl md:text-6xl font-light text-gold-highlight tracking-tight">{fmt(value[0])} – {fmt(value[1])}</p>
          {partner && <p className="text-sm text-foreground/60 mt-2">Upfront capital while you retain 30% of future streaming and sync upside.</p>}
          <p className="text-xs text-foreground/40 mt-4 max-w-xl">Illustrative benchmark only, not an offer. Formal valuations require three years of royalty statements and are conducted under NDA.</p>
          <div className="mt-8">
            <LeadForm mode="rights" initial={{ royalties: royaltyBand(r), assets: comps.find(c => c.id === comp)!.asset }}>
              <button className="w-full sm:w-auto px-10 py-4 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors">Request Confidential Appraisal</button>
            </LeadForm>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ValuationEstimator;
