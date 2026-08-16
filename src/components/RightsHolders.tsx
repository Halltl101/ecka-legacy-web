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
                <span className="text-gold-highlight">$10M+</span> Capital Network
              </p>
              <p className="text-foreground/60 leading-relaxed font-light max-w-xl">
                Ecka works alongside a network of strategic capital partners with the capacity to deploy $10M+ across qualified music and entertainment opportunities.
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

            <p className="mt-12 font-display text-2xl md:text-3xl font-light italic leading-snug text-balance animate-fade-in animation-delay-500">
              You created the music. You built the value. Now let’s explore what’s possible.
            </p>

            <div className="mt-10 animate-fade-in animation-delay-700">
              <LeadForm>
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
