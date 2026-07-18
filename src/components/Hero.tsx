import React from 'react';
import LeadForm from './LeadForm';

const CARTA_URL = 'https://login.app.carta.com/credentials/login/';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 pt-32 pb-24 text-center overflow-hidden bg-background">
        {/* Soft radial gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--gold)/0.06)_0%,_transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto animate-fade-in">
          <span className="block eyebrow-gold mb-10">Intellectual Property Investment Firm</span>

          <h1 className="font-display font-light italic leading-[0.95] text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-12">
            Turning Assets to<br />
            <span className="text-gold-highlight not-italic">Legacy.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/70 font-light leading-relaxed mb-14">
            Ecka Holdings is an intellectual property investment firm focused on music and entertainment assets — preserving culturally significant works while delivering exceptional returns through strategic stewardship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <LeadForm>
              <button className="w-full sm:w-auto min-w-[240px] px-10 py-4 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors shadow-lg shadow-gold/10">
                Schedule Intro Call
              </button>
            </LeadForm>
            <a
              href={CARTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[240px] px-10 py-4 border border-gold text-gold text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold/5 transition-colors text-center"
            >
              Investor Login
            </a>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="border-y border-gold/20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {[
            { value: '$400M+', label: 'Portfolio Value' },
            { value: '15 Years+', label: 'Deal Experience' },
            { value: 'Worldwide', label: 'Global Reach' },
          ].map((s) => (
            <div key={s.label} className="py-14 flex flex-col items-center">
              <span className="font-display text-5xl md:text-6xl font-light text-gold-highlight mb-3">
                {s.value}
              </span>
              <span className="eyebrow">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
