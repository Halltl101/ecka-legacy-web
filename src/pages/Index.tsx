
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyPartner from '../components/WhyPartner';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <WhyPartner />
      <Team />
      <Contact />
      
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">ECKA</span>
            <span className="text-sm text-slate-400 ml-2">Holdings Corp</span>
          </div>
          <p className="text-slate-400">
            © 2024 Ecka Holdings Corp. All rights reserved. | Turning Assets to Legacy.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
