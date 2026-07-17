import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const leads = [
  { name: 'T.V. Hall', role: 'CEO', image: '/lovable-uploads/c02206e8-f7ce-45f4-bc6c-14ed5c8b0c1c.png' },
  { name: 'Tony Hansen', role: 'CMO', image: '/lovable-uploads/0538ec46-6b86-4941-92b2-736699c6538e.png' },
  { name: 'Alex Benton', role: 'COO', image: '/lovable-uploads/4a46e31a-7f5b-4183-836a-bcbdcfc78e8e.png', pos: 'center 35%' },
  { name: 'Brandon Jarnigan', role: 'Finance', image: '/lovable-uploads/fb3556b8-3b10-4a61-a12a-5a4656493367.png' },
  { name: 'Christopher Meatto', role: 'General Counsel', image: '/lovable-uploads/eeeb763b-772e-4564-9a23-53b3a29029c3.png' },
  { name: 'Sean Collins', role: 'A&R / M&A', image: '/lovable-uploads/15691bfc-f7ef-42ae-96d3-ad4fd5f13a79.png' },
];

const TeamTeaser = () => {
  return (
    <section id="team" className="relative py-20 lg:py-28 bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-14 items-end">
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div className="eyebrow">Leadership</div>
            <h2 className="font-display text-4xl lg:text-5xl text-ink leading-[1.1]">
              Operators and dealmakers with unparalleled <span className="italic text-gold">reach</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink-muted leading-relaxed animate-fade-in animation-delay-300">
            A team of industry veterans stewarding capital and catalogs with institutional rigor.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 lg:gap-8 mb-12">
          {leads.map((m, i) => (
            <div
              key={m.name}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-full overflow-hidden border border-gold/30 bg-gradient-to-br from-gold/20 to-purple/20">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  style={m.pos ? { objectPosition: m.pos } : undefined}
                />
              </div>
              <div className="font-display text-sm text-ink leading-tight">{m.name}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold mt-1">{m.role}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold border border-gold/40 px-6 py-3 hover:bg-gold hover:text-navy transition-all"
          >
            Meet the full team
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamTeaser;
