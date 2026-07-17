import React from 'react';
import { Music2, Users, BarChart3, DollarSign, Globe2 } from 'lucide-react';

const capabilities = [
  { icon: Music2, title: 'Strategic Expertise' },
  { icon: Users, title: 'Artist Relationships' },
  { icon: BarChart3, title: 'Data-Driven' },
  { icon: DollarSign, title: 'Flexible Capital' },
  { icon: Globe2, title: 'Global Reach' },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="relative py-20 lg:py-28 bg-navy border-t border-white/5">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] bg-purple/[0.10] blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Intro */}
        <div className="grid lg:grid-cols-12 gap-16 mb-16 items-end">
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div className="eyebrow">The Firm & Philosophy</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.1]">
              At the intersection of <span className="italic text-gold">capital</span>, culture,
              and catalog.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink-muted leading-relaxed animate-fade-in animation-delay-300">
            Ecka Holdings acquires and manages distinctive music intellectual property with the
            rigor of institutional finance and the sensibility of industry insiders — building
            enduring value for artists, sellers, and capital partners.
          </p>
        </div>

        {/* Traditional vs Ecka */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 mb-16">
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

        {/* Capabilities strip — quiet footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
          {capabilities.map(({ icon: Icon, title }) => (
            <div key={title} className="bg-navy p-6 flex items-center gap-3">
              <Icon className="w-4 h-4 text-gold shrink-0" strokeWidth={1.25} />
              <span className="text-xs font-semibold text-ink tracking-wide">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
