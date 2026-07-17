import React from 'react';
import LeadForm from './LeadForm';
import heroStage from '@/assets/hero-archive.jpg';

const CARTA_URL =
  'https://login.app.carta.com/credentials/login/?_gl=1*6wvs0v*_gcl_au*MTYyMTk5MjUwMi4xNzUwMzgzMDYy*_ga*MTAyMjQxNDk5MC4xNzUwMzgzMDYy*_ga_HB6KGNG78T*czE3NTAzODMwNjIkbzEkZzAkdDE3NTAzODMwNjIkajYwJGwwJGgw&_ga=2.175256101.62353039.1750383063-1022414990.1750383062';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Ambient depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-purple/25 to-transparent" />
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-gold/[0.06] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-purple/[0.12] blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-in">

            <h1 className="font-display text-[42px] sm:text-6xl lg:text-7xl leading-[1.05] text-ink">
              Preserving the{' '}
              <span className="italic text-gold">Architecture</span>
              <br className="hidden sm:block" /> of Sound.
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl font-light">
              Ecka Holdings deploys sophisticated capital structures for iconic music
              catalogs and industry-shaping creative enterprises — bridging artistic
              heritage with institutional-grade returns.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md">
              <LeadForm>
                <button className="btn-gold w-full">Partner With Us</button>
              </LeadForm>
              <a
                href={CARTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full"
              >
                Investor Login
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-in animation-delay-500">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/25 to-purple/30 blur-xl opacity-70" />
              <div className="relative surface overflow-hidden">
                <img
                  src={heroStage}
                  alt="Musician performing on a dark stage under a golden spotlight"
                  className="w-full h-[340px] lg:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              </div>

              <div className="mt-6 surface p-6 lg:p-8 grid grid-cols-2 divide-x divide-white/5">
                {[
                  { k: 'Experience', v: '15yr+' },
                  { k: 'Reach', v: 'Global' },
                ].map((s) => (
                  <div key={s.k} className="px-3 first:pl-0 last:pr-0 text-center">
                    <div className="font-display text-2xl lg:text-3xl text-gold">{s.v}</div>
                    <div className="mt-1 text-[9px] uppercase tracking-[0.24em] text-ink-subtle">
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
