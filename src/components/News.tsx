import React from 'react';
import { Link } from 'react-router-dom';

const News = () => (
  <section id="news" className="py-20 md:py-28 lg:py-32 bg-background border-t border-gold/20">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-12">
        Portfolio <span className="italic text-gold">Briefing.</span>
      </h2>
      <Link
        to="/news/votte-hall"
        className="group block border-y border-gold/20 py-10 md:py-12 transition-colors hover:bg-gold/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Ecka Music Group</p>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-4 max-w-4xl text-balance group-hover:text-gold transition-colors underline decoration-gold/40 underline-offset-8 group-hover:decoration-gold">
          Ecka Holdings Expands Its Music Rights Portfolio
        </h3>
        <p className="text-foreground/60 italic text-base md:text-lg leading-relaxed max-w-3xl mb-6">
          Strategic licensing agreement adds Billboard-charting artist Votte Hall&rsquo;s music to a growing collection of enduring assets.
        </p>
        <span className="text-sm tracking-[0.2em] uppercase text-gold">Read the Article →</span>
      </Link>
    </div>
  </section>
);

export default News;
