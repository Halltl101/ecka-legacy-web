import React from 'react';

const pillars = [
  {
    num: '01',
    title: 'Mission Focus',
    body: 'Preserving the relevance of artists and culturally significant intellectual property for future generations.',
  },
  {
    num: '02',
    title: 'Legacy Management',
    body: 'Ensuring artistic endeavors remain active, revenue-generating assets that honor their cultural impact.',
  },
  {
    num: '03',
    title: 'Strategic Growth',
    body: 'Brand and rights management that maximizes value through strategic partnerships and innovative monetization.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left: heading */}
          <div className="md:col-span-5 animate-fade-in">
            <span className="eyebrow-gold mb-6 block">The Firm</span>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8">
              About <span className="italic text-gold">Ecka.</span>
            </h2>
            <p className="text-foreground/60 italic leading-relaxed max-w-md">
              Positioned at the intersection of IP, technology, and culture — we redefine how music intellectual property creates lasting value.
            </p>
          </div>

          {/* Right: numbered pillars */}
          <div className="md:col-span-7 space-y-10">
            {pillars.map((p, i) => (
              <div
                key={p.num}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 pb-10 border-b border-gold/10 last:border-b-0 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                <span className="font-display text-3xl md:text-4xl text-gold/70 leading-none">{p.num}</span>
                <div>
                  <h3 className="eyebrow-gold mb-3">{p.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-base md:text-lg font-light">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial image band */}
        <div className="mt-20 relative animate-fade-in animation-delay-500">
          <div className="relative overflow-hidden border border-gold/20">
            <img
              src="/lovable-uploads/ff2dfd68-f3d2-42c2-9860-7a314de0771f.png"
              alt="Cultural venue at night"
              className="w-full h-64 md:h-96 object-cover object-[center_top_10%] transition-transform duration-[3000ms] hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1600&h=600';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
              <p className="font-display text-2xl md:text-4xl italic text-foreground max-w-xl leading-snug">
                &ldquo;Preserving the heartbeat of culture.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
