import React from 'react';
import { Music, Briefcase, Users, Scale, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const groups = [
  {
    name: 'Leadership Team',
    role: 'Executive Leadership',
    description:
      'Operators with Harvard Business School credentials, Billboard-charting history, Grammy involvement, and participation in landmark IP transactions.',
    to: '/team',
  },
  {
    name: 'Investment Committee',
    role: 'Strategic Oversight',
    description:
      'Combined decades in entertainment M&A, IP valuation, and international market expansion.',
  },
  {
    name: 'Advisory Board',
    role: 'Industry Expertise',
    description:
      'Cross-sector counsel spanning telecom, entertainment, sports, law, technology, and finance.',
  },
];

const board = [
  { icon: Music, label: 'Entertainment', sub: 'Industry Veterans' },
  { icon: Briefcase, label: 'Finance', sub: 'Capital Markets' },
  { icon: Users, label: 'Technology', sub: 'Innovation Leaders' },
  { icon: Scale, label: 'Legal', sub: 'IP Specialists' },
];

const Team = () => {
  return (
    <section id="team" className="relative py-28 lg:py-36 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20 items-end">
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div className="eyebrow">Our Team</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.1]">
              Thought leaders with unparalleled <span className="italic text-gold">reach</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink-muted leading-relaxed animate-fade-in animation-delay-300">
            A bench of principals with credentialed capital-markets pedigree and lived experience
            inside the music industry's most consequential deals.
          </p>
        </div>

        <div className="relative mb-20 animate-fade-in animation-delay-500">
          <div className="relative overflow-hidden border border-white/5">
            <img
              src="/lovable-uploads/db05f0c1-c57b-4168-a659-3323abdaffa5.png"
              alt="Concert stage in performance"
              className="w-full h-72 lg:h-[420px] object-cover object-[center_60%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-24">
          {groups.map((g, i) => {
            const inner = (
              <div className="h-full bg-navy p-10 group relative">
                {g.to && (
                  <div className="absolute top-6 right-6 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                )}
                <div className="text-[10px] uppercase tracking-[0.24em] text-gold mb-4">{g.role}</div>
                <h3 className="font-display text-2xl text-ink mb-4">{g.name}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{g.description}</p>
                {g.to && (
                  <div className="mt-8 text-[10px] uppercase tracking-[0.24em] text-gold font-semibold">
                    View Bios →
                  </div>
                )}
                <div className="mt-8 h-px w-8 bg-gold/60 group-hover:w-16 transition-all duration-500" />
              </div>
            );
            return (
              <div key={g.name} className="animate-fade-in" style={{ animationDelay: `${i * 120}ms` }}>
                {g.to ? <Link to={g.to}>{inner}</Link> : inner}
              </div>
            );
          })}
        </div>

        <div className="surface p-10 lg:p-12">
          <div className="text-[10px] uppercase tracking-[0.24em] text-gold mb-3">Board of Directors</div>
          <h3 className="font-display text-2xl lg:text-3xl text-ink mb-10">
            A multi-disciplinary bench.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {board.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="bg-navy p-6 text-center">
                <Icon className="w-5 h-5 text-gold mx-auto mb-4" strokeWidth={1.25} />
                <p className="text-sm text-ink font-medium">{label}</p>
                <p className="text-xs text-ink-subtle mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
