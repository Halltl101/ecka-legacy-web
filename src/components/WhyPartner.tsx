import React from 'react';

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
    <section id="why-partner" className="py-24 md:py-32 bg-surface border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header row: 1/3 + 2/3 */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-20">
          <div className="md:w-1/3 animate-fade-in">
            <span className="eyebrow-gold mb-6 block">Our Advantage</span>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-[1.05] mb-6">
              Why Partner with <span className="italic text-gold">Ecka.</span>
            </h2>
            <p className="text-foreground/60 italic leading-relaxed mb-8">
              We believe in the enduring value of artistic expression — and the financial potential of its lifecycle.
            </p>
            <a href="#team" className="gold-link">
              Meet the team
              <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-x-14 md:gap-y-12">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="animate-fade-in"
                style={{ animationDelay: `${200 + i * 120}ms` }}
              >
                <h3 className="eyebrow-gold mb-4" style={{ color: 'hsl(var(--gold-highlight))' }}>
                  {p.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed font-light">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial image */}
        <div className="mb-20 relative animate-fade-in animation-delay-500">
          <div className="relative overflow-hidden border border-gold/20">
            <img
              src="/lovable-uploads/1f9dfec4-2751-47bb-9d05-364c46207911.png"
              alt="Executive partnership handshake"
              className="w-full h-64 md:h-[420px] object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&h=600';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
          </div>
        </div>

        {/* Proof points */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-14 pt-16 border-t border-gold/10">
          {proofPoints.map((p, i) => (
            <div
              key={p.title}
              className="animate-fade-in"
              style={{ animationDelay: `${300 + i * 150}ms` }}
            >
              <div className="w-8 h-px bg-gold mb-6" />
              <h4 className="font-display text-2xl md:text-3xl mb-4 leading-tight">{p.title}</h4>
              <p className="text-foreground/60 leading-relaxed font-light">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
