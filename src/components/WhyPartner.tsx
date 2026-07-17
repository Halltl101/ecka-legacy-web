import React from 'react';
import { Music2, Users, BarChart3, DollarSign, Globe2 } from 'lucide-react';

const differentiators = [
  {
    title: '$2B+ Deal Experience',
    body:
      'Leadership with a proven M&A and IP track record — including participation in landmark catalog transactions such as Queen\'s $1.27B sale.',
  },
  {
    title: 'Proprietary Access',
    body:
      'Direct access to under-marketed catalogs sourced through decades of trusted, artist-first relationships.',
  },
  {
    title: 'Global Scalability',
    body:
      'Domestic and international expansion across Europe, Africa, Asia, and LATAM with cross-border deal capability.',
  },
];

const capabilities = [
  { icon: Music2, title: 'Strategic Expertise', body: '10+ years across entertainment, technology, and finance.' },
  { icon: Users, title: 'Artist Relationships', body: 'Artist-first acquisition and stewardship.' },
  { icon: BarChart3, title: 'Data-Driven', body: 'Quantitative forecasting and catalog scoring.' },
  { icon: DollarSign, title: 'Flexible Capital', body: 'Joint ventures and bespoke deal structures.' },
  { icon: Globe2, title: 'Domestic & International', body: 'Multi-market rights and revenue capture.' },
];

const WhyPartner = () => {
  return (
    <section id="why-partner" className="relative py-28 lg:py-36 bg-navy border-t border-white/5">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-40 w-[480px] h-[480px] bg-purple/[0.10] blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20 items-end">
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div className="eyebrow">Investment Philosophy</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.1]">
              A forward-looking model for <span className="italic text-gold">enduring</span> music IP.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink-muted leading-relaxed animate-fade-in animation-delay-300">
            We identify catalogs with distinctive cultural staying power and pair them with disciplined
            capital, active administration, and global distribution intelligence.
          </p>
        </div>

        {/* Traditional vs Ecka */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 mb-24">
          <div className="surface p-10 animate-fade-in">
            <div className="text-[10px] uppercase tracking-[0.24em] text-ink-subtle mb-4">
              Traditional Approach
            </div>
            <h3 className="font-display text-2xl text-ink mb-4">Financial returns only</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Conventional asset managers optimize for yield without stewardship of the underlying
              cultural asset.
            </p>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="absolute -inset-px bg-gradient-to-br from-gold/40 to-purple/40 opacity-70" />
            <div className="relative bg-navy p-10 border border-transparent">
              <div className="text-[10px] uppercase tracking-[0.24em] text-gold mb-4">
                The Ecka Approach
              </div>
              <h3 className="font-display text-2xl text-ink mb-4">
                Strategic growth partner
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Artist-first relationships, culture-driven value creation, and institutional
                discipline in every transaction.
              </p>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-24">
          {differentiators.map((d, i) => (
            <div key={d.title} className="bg-navy p-10 animate-fade-in" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="font-display text-gold text-lg mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="font-display text-xl text-ink mb-3">{d.title}</h4>
              <p className="text-sm text-ink-muted leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        {/* Capabilities strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-navy p-6 lg:p-8">
              <Icon className="w-5 h-5 text-gold mb-4" strokeWidth={1.25} />
              <h4 className="text-sm font-semibold text-ink mb-2 tracking-wide">{title}</h4>
              <p className="text-xs text-ink-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
