import React from 'react';
import masterTapes from '@/assets/master-tapes.jpg';

const pillars = [
  {
    title: 'Capital Preservation',
    body: 'Established, cash-flowing catalogs with low correlation to broader market volatility.',
  },
  {
    title: 'Cultural Stewardship',
    body: 'Ensuring the long-term integrity and visibility of iconic music catalogs for future generations.',
  },
  {
    title: 'Strategic Optimization',
    body: 'Leveraging deep industry networks to enhance royalty collection and licensing opportunities.',
  },
  {
    title: 'Global Access',
    body: 'Domestic and international reach across Europe, Africa, Asia, and LATAM — capturing worldwide streaming and sync value.',
  },
];

const proofPoints = [
  {
    title: '10+ Years Deal Experience',
    body: 'Leadership with a proven track record across M&A, IP, and entertainment — including Queen\u2019s $1.27B catalog sale.',
  },
  {
    title: 'Proprietary Access',
    body: 'Exclusive access to undervalued catalogs through artist-first terms and deep industry relationships.',
  },
  {
    title: 'Global Scalability',
    body: 'Domestic and international expansion focus with cross-border capabilities in Europe, Africa, Asia, and LATAM.',
  },
];

const WhyPartner = () => {
  return (
    <section id="why-partner" className="py-20 md:py-28 lg:py-32 bg-surface border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header row: 4/12 + 8/12 */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-start mb-16 md:mb-20">
          <div className="md:col-span-5 lg:col-span-4 animate-fade-in md:sticky md:top-28">

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-6 text-balance">
              Our <span className="italic text-gold">Approach.</span>
            </h2>
            <p className="text-foreground/60 italic leading-relaxed max-w-md text-base md:text-lg mb-8">
              We believe in the enduring value of artistic expression — and the financial potential of its lifecycle.
            </p>
            <a href="#team" className="gold-link">
              Meet the team
              <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-x-14 md:gap-y-14">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="animate-fade-in"
                style={{ animationDelay: `${200 + i * 120}ms` }}
              >
                <h3 className="eyebrow-gold mb-4" style={{ color: 'hsl(var(--gold-highlight))' }}>
                  {p.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed font-light max-w-sm">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial image */}
        <div className="mb-16 md:mb-20 relative animate-fade-in animation-delay-500">
          <div className="relative overflow-hidden border border-gold/20">
            <img
              src={masterTapes}
              alt="Vintage master tape reels on an archival shelf"
              className="w-full h-64 md:h-[420px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

          </div>
        </div>


        {/* Proof points */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 pt-14 md:pt-16 border-t border-gold/10">
          {proofPoints.map((p, i) => (
            <div
              key={p.title}
              className="animate-fade-in"
              style={{ animationDelay: `${300 + i * 150}ms` }}
            >
              <div className="w-8 h-px bg-gold mb-6" />
              <h4 className="font-display text-2xl md:text-3xl mb-4 leading-tight tracking-tight text-balance">{p.title}</h4>
              <p className="text-foreground/60 leading-relaxed font-light">{p.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyPartner;
