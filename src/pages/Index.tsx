import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyPartner from '../components/WhyPartner';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-ink">
      <Navigation />
      <Hero />
      <About />
      <WhyPartner />
      <Team />
      <Contact />

      <footer className="bg-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/ceb4005b-d633-46e4-a183-4c991c0095a2.png"
              alt="Ecka Holdings"
              className="h-7 w-auto opacity-80"
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />
            <span className="font-display text-lg text-ink">
              Ecka<span className="text-gold">.</span>
              <span className="text-ink-subtle text-xs uppercase tracking-[0.24em] ml-3">
                Holdings Corp
              </span>
            </span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-subtle text-center">
            © 2025 Ecka Holdings Corp · Institutional Music IP
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
