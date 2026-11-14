import React from 'react';
import LeadForm from './LeadForm';

const audiences = [
  {
    title: 'Rights Holders',
    body: 'Artists, songwriters, producers, and publishers seeking valuation, liquidity, monetization, or strategic options for music assets.',
  },
  {
    title: 'Investors & Capital Partners',
    body: 'Institutions and private capital seeking access to qualified opportunities across music and entertainment assets.',
  },
];

const steps = [
  { num: '01', title: 'Confidential Submission', body: 'Share your catalog details in confidence. A mutual NDA is available before any data is exchanged.' },
  { num: '02', title: 'Royalty & Streaming Analysis', body: 'We review historical earnings, PRO and distributor statements, and streaming trends.' },
  { num: '03', title: 'Valuation & Offer Structuring', body: 'A bespoke valuation with flexible structures — full or partial sale, or liquidity options.' },
  { num: '04', title: 'Execution & Stewardship', body: 'We close efficiently and actively steward the catalog to protect its legacy.' },
];

const assetClasses = ['Master Recordings', 'Publishing & Writer’s Share', 'Neighboring Rights', 'Producer Royalties', 'Sync & Licensing'];

const RightsHolders = () => {
  return (
    <section id="rights-holders" className="py-20 md:py-28 lg:py-32 bg-background border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-start">
          <div className="md:col-span-5 lg:col-span-4 animate-fade-in">
            <span className="eyebrow-gold mb-6 block">For Music Rights Holders</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-6 text-balance">
              Your Music Has Value.{' '}
              <span className="italic text-gold">Let’s Unlock It.</span>
            </h2>
            <p className="text-foreground/60 italic leading-relaxed max-w-md text-base md:text-lg">
              You’ve built more than music—you’ve built an asset.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8 animate-fade-in animation-delay-200">
            <div className="space-y-6 text-foreground/70 leading-relaxed font-light max-w-2xl">
              <p>
                Ecka Holdings works with artists, songwriters, producers, publishers, and rights holders to evaluate and unlock the value of music catalogs, publishing interests, master recordings, and royalty streams.
              </p>
              <p>
                Whether you're considering a full or partial sale, exploring liquidity, or simply want to understand what your music assets may be worth, Ecka provides a strategic and confidential evaluation of the opportunity.
              </p>
            </div>

            {/* Capital highlight */}
            <div className="mt-12 border border-gold/25 bg-surface p-8 md:p-10 animate-fade-in animation-delay-300">
              <p className="font-display text-3xl md:text-4xl font-light tracking-tight mb-4">
                <span className="text-gold-highlight">$5M–$50M+</span> Capital Network
              </p>
              <p className="text-foreground/60 leading-relaxed font-light max-w-xl">
                Ecka works alongside a network of strategic capital partners with the capacity to deploy $5M–$50M+ across qualified music and entertainment opportunities.
              </p>
            </div>

            {/* Two-sided positioning */}
            <div className="mt-12 grid sm:grid-cols-2 gap-10 md:gap-12 pt-12 border-t border-gold/10">
              {audiences.map((a, i) => (
                <div key={a.title} className="animate-fade-in" style={{ animationDelay: `${400 + i * 150}ms` }}>
                  <div className="w-8 h-px bg-gold mb-6" />
                  <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight tracking-tight text-balance">
                    {a.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed font-light">{a.body}</p>
                </div>
              ))}
            </div>

            {/* Asset classes */}
            <div className="mt-12 pt-12 border-t border-gold/10">
              <h3 className="eyebrow-gold mb-6">Assets We Evaluate</h3>
              <div className="flex flex-wrap gap-3">
                {assetClasses.map(a => (
                  <span key={a} className="px-4 py-2 border border-gold/25 text-sm text-foreground/70 font-light">{a}</span>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mt-12 pt-12 border-t border-gold/10">
              <h3 className="eyebrow-gold mb-8">How We Evaluate Catalogs</h3>
              <ol className="grid sm:grid-cols-2 gap-8 md:gap-10 list-none p-0 m-0">
                {steps.map(st => (
                  <li key={st.num} className="grid grid-cols-[3rem_1fr] gap-4">
                    <span className="font-display text-3xl text-gold/70 leading-none">{st.num}</span>
                    <div>
                      <h4 className="font-display text-xl md:text-2xl mb-2 leading-tight">{st.title}</h4>
                      <p className="text-foreground/60 leading-relaxed font-light text-sm md:text-base">{st.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-12 font-display text-2xl md:text-3xl font-light italic leading-snug text-balance animate-fade-in animation-delay-500">
              You created the music. You built the value. Now let’s explore what’s possible.
            </p>

            <div className="mt-10 animate-fade-in animation-delay-700">
              <LeadForm mode="rights">
                <button className="w-full sm:w-auto whitespace-nowrap px-10 py-4 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors shadow-lg shadow-gold/10">
                  Evaluate My Music Assets
                </button>
              </LeadForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightsHolders;
