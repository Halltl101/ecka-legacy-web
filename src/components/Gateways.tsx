import React from 'react';
import LeadForm from './LeadForm';

const Gateways = () => (
  <section id="rights-holders" className="py-24 md:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="max-w-3xl mb-16">
        <span className="eyebrow-gold mb-6 block">Work With Ecka</span>
        <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] tracking-tight text-balance">
          You built the value. <span className="italic text-gold">Let’s unlock it.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold/15">
        <div className="bg-surface p-8 md:p-12 flex flex-col">
          <span className="eyebrow mb-6">For rights holders</span>
          <h3 className="font-display text-3xl md:text-4xl font-light mb-5">Filmmakers, artists & estates</h3>
          <p className="text-foreground/65 leading-relaxed font-light mb-10 flex-1">
            Producers, studios, songwriters, artists and publishers exploring a full or partial sale, liquidity, or simply what their film or music assets are worth. Every evaluation is confidential.
          </p>
          <LeadForm mode="rights">
            <button className="self-start px-8 py-4 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors">
              Evaluate My Assets
            </button>
          </LeadForm>
        </div>
        <div className="bg-surface p-8 md:p-12 flex flex-col">
          <span className="eyebrow mb-6">For capital partners</span>
          <h3 className="font-display text-3xl md:text-4xl font-light mb-5">Institutions & private capital</h3>
          <p className="text-foreground/65 leading-relaxed font-light mb-10 flex-1">
            Access to qualified film and music opportunities through a strategic capital network deploying $5M–$50M+ per transaction.
          </p>
          <LeadForm>
            <button className="self-start px-8 py-4 border border-gold/50 text-gold text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold/5 transition-colors">
              Schedule Intro Call
            </button>
          </LeadForm>
        </div>
      </div>
    </div>
  </section>
);

export default Gateways;
