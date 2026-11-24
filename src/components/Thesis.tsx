import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Music } from 'lucide-react';

const classes = [
  {
    icon: Film,
    title: 'Film & Television',
    body: 'Feature film libraries, episodic distribution rights, producer participations and global streaming licensing.',
  },
  {
    icon: Music,
    title: 'Music Catalogs',
    body: 'Master recordings, publishing rights, performance and mechanical royalties earning across every platform.',
  },
];

const pillars = [
  { title: 'Capital Preservation', body: 'Established, cash-flowing assets with low correlation to broader markets.' },
  { title: 'Cultural Stewardship', body: 'Keeping iconic works visible, protected and relevant for new generations.' },
  { title: 'Strategic Growth', body: 'Licensing, sync and cross-media partnerships that compound long-term value.' },
];

const Thesis = () => (
  <section id="about" className="py-24 md:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="max-w-4xl mb-16 md:mb-20">
        <span className="eyebrow-gold mb-6 block">Our Thesis</span>
        <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] tracking-tight text-balance">
          Two art forms. <span className="italic text-gold">One enduring asset class.</span>
        </h2>
        <p className="mt-6 text-foreground/60 leading-relaxed font-light max-w-2xl text-base md:text-lg">
          Great stories and great songs outlive the moment they were made. We invest where film and music meet capital — and manage each asset to keep earning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold/15 mb-20">
        {classes.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-background p-8 md:p-12">
            <Icon className="w-6 h-6 text-gold mb-8" strokeWidth={1.25} />
            <h3 className="font-display text-3xl md:text-4xl font-light mb-4">{title}</h3>
            <p className="text-foreground/65 leading-relaxed font-light max-w-md">{body}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-10 md:gap-14">
        {pillars.map((p, i) => (
          <div key={p.title}>
            <span className="font-display text-2xl text-gold/70">0{i + 1}</span>
            <h3 className="eyebrow-gold mt-4 mb-3">{p.title}</h3>
            <p className="text-foreground/65 leading-relaxed font-light">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-gold/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <p className="text-foreground/60 font-light max-w-2xl">
          Leadership with 10+ years of deal experience across M&A, IP and entertainment — including Queen’s $1.27B catalog sale.
        </p>
        <Link to="/team" className="gold-link shrink-0">Meet the team →</Link>
      </div>
    </div>
  </section>
);

export default Thesis;
