
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
      
      {/* YouTube Video Section */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <iframe 
                width="100%" 
                height="450" 
                src="https://www.youtube.com/embed/YcXk7-gk414?si=nZlWd0JKJkZKXlgI&autoplay=1&loop=1&playlist=YcXk7-gk414&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-2xl shadow-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <About />
      <WhyPartner />
      <Team />
      <Contact />
      
      <footer className="bg-black py-8 border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/ecka-logo.png" 
              alt="Ecka Holdings Logo" 
              className="h-8 w-auto mr-3"
              onError={(e) => {
                console.log('Footer logo failed to load:', e);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div>
              <span className="text-2xl font-bold text-white">ECKA</span>
              <span className="text-sm text-gray-400 ml-2">Holdings Corp</span>
            </div>
          </div>
          <p className="text-gray-400">
            © 2025 Ecka Holdings Corp. All rights reserved. | Turning Assets to Legacy.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
