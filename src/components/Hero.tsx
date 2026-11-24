import React from 'react';
import LeadForm from './LeadForm';

const CARTA_URL = 'https://login.app.carta.com/credentials/login/';

const metrics = [
  { value: '$400M+', label: 'Portfolio track record' },
  { value: '$5M–$50M+', label: 'Deployment capacity' },
  { value: 'Film & Music', label: 'Entertainment IP focus' },
];

const Hero = () => (
  <section id="main" className="relative min-h-[92vh] flex flex-col justify-between px-6 md:px-8 pt-32 pb-0 overflow-hidden bg-background">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--gold)/0.08)_0%,_transparent_60%)] pointer-events-none" />
    <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center animate-fade-in">
      <span className="eyebrow-gold mb-8 block">Entertainment IP Investment · Film & Music</span>
      <h1 className="font-display font-light leading-[0.95] tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] mb-10 text-balance max-w-6xl">
        Turning assets <span className="italic">to</span> <span className="italic text-gold-highlight">legacy.</span>
      </h1>
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <p className="md:col-span-6 text-base md:text-lg text-foreground/70 font-light leading-relaxed text-balance">
          Ecka Holdings is an investment firm specializing in entertainment intellectual property — acquiring and stewarding film, television and music assets for enduring cultural and financial value.
        </p>
        <div className="md:col-span-6 flex flex-col sm:flex-row gap-4 md:justify-end">
          <LeadForm>
            <button className="whitespace-nowrap px-10 py-4 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors">
              Schedule Intro Call
            </button>
          </LeadForm>
          <a href={CARTA_URL} target="_blank" rel="noopener noreferrer"
            className="whitespace-nowrap px-10 py-4 border border-gold/50 text-gold text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold/5 transition-colors text-center">
            Investor Login
          </a>
        </div>
      </div>
    </div>
    <div className="relative z-10 w-full max-w-7xl mx-auto mt-20 border-t border-gold/20 grid grid-cols-1 sm:grid-cols-3">
      {metrics.map((m, i) => (
        <div key={m.label} className={`py-8 sm:px-8 first:sm:pl-0 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-gold/15' : ''}`}>
          <p className="font-display text-3xl md:text-4xl font-light text-gold-highlight">{m.value}</p>
          <p className="eyebrow mt-2">{m.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Hero;
