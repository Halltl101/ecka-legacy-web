
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyPartner from '../components/WhyPartner';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <WhyPartner />
      <Team />
      <Contact />
      
      <footer className="bg-black py-8 border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/337120fa-d457-4de5-9025-24045ffd0228.png" 
              alt="Ecka Holdings Logo" 
              className="h-8 w-auto mr-3"
            />
            <div>
              <span className="text-2xl font-bold text-white">ECKA</span>
              <span className="text-sm text-gray-400 ml-2">Holdings Corp</span>
            </div>
          </div>
          <p className="text-gray-400">
            © 2024 Ecka Holdings Corp. All rights reserved. | Turning Assets to Legacy.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
