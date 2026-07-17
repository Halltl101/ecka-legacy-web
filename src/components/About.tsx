import React from 'react';
import { Music, TrendingUp, Target } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Mission Focus',
    body:
      'We preserve and extend the cultural relevance of artist-driven intellectual property across generations.',
  },
  {
    icon: Music,
    title: 'Legacy Stewardship',
    body:
      'Active management ensures each catalog remains a living, revenue-generating cultural asset.',
  },
  {
    icon: TrendingUp,
    title: 'Strategic Growth',
    body:
      'Disciplined rights administration and partnerships maximize long-term catalog value.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-end mb-20">
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div className="eyebrow">The Firm</div>
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

        <div className="relative mb-20 animate-fade-in animation-delay-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/15 to-purple/20 blur-lg opacity-60" />
          <div className="relative overflow-hidden border border-white/5">
            <img
              src="/lovable-uploads/8ac990a4-a3ee-420a-9326-b9322d10b9c0.png"
              alt="Live audience under stage light"
              className="w-full h-72 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="bg-navy p-10 group animate-fade-in"
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              <div className="text-gold mb-6">
                <Icon className="w-6 h-6" strokeWidth={1.25} />
              </div>
              <h3 className="font-display text-2xl text-ink mb-4">{title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{body}</p>
              <div className="mt-8 h-px w-8 bg-gold/60 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
