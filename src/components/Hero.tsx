
import React from 'react';
import { Music, TrendingUp, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 hover:scale-105">
                Turning Assets to
                <span className="text-[#C9A34C] block animate-fade-in animation-delay-300">Legacy</span>
              </h1>
              <p className="text-xl text-white font-medium animate-fade-in animation-delay-500">
                Growing IP Value Year After Year
              </p>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl animate-fade-in animation-delay-700">
              Ecka Holdings is an intellectual property investment firm focused on music and entertainment assets, 
              with a mission to preserve and grow culturally significant works while delivering exceptional returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-1000">
              <a 
                href="https://login.app.carta.com/credentials/login/?_gl=1*6wvs0v*_gcl_au*MTYyMTk5MjUwMi4xNzUwMzgzMDYy*_ga*MTAyMjQxNDk5MC4xNzUwMzgzMDYy*_ga_HB6KGNG78T*czE3NTAzODMwNjIkbzEkZzAkdDE3NTAzODMwNjIkajYwJGwwJGgw&_ga=2.175256101.62353039.1750383063-1022414990.1750383062"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A34C] hover:bg-[#B8923E] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                Investor Login
              </a>
              <button className="border-2 border-[#C9A34C] hover:bg-[#C9A34C] hover:text-black text-[#C9A34C] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                Schedule Intro Call
              </button>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in animation-delay-500">
            {/* Music Legacy Visual */}
            <div className="relative group">
              <img 
                src="/lovable-uploads/27248f9f-a898-4a2c-95a0-4d468e8478e9.png" 
                alt="Professional female performer on stage with microphone and dramatic lighting"
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A34C]/20 to-[#C9A34C]/30 rounded-2xl transition-opacity duration-300 group-hover:opacity-75"></div>
            </div>
            
            {/* Stats Card */}
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C9A34C]/30 hover:border-[#C9A34C]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A34C]/20 transform hover:-translate-y-2">
              <div className="space-y-6">
                <div className="flex items-center justify-between group">
                  <span className="text-gray-300 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                    <TrendingUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    Portfolio Value
                  </span>
                  <span className="text-2xl font-bold text-[#C9A34C] transition-all duration-300 group-hover:scale-110">$2B+</span>
                </div>
                <div className="flex items-center justify-between group">
                  <span className="text-gray-300 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                    <Music className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    Deal Experience
                  </span>
                  <span className="text-2xl font-bold text-[#C9A34C] transition-all duration-300 group-hover:scale-110">15 years +</span>
                </div>
                <div className="flex items-center justify-between group">
                  <span className="text-gray-300 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                    <Globe className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    Global Reach
                  </span>
                  <span className="text-2xl font-bold text-[#C9A34C] transition-all duration-300 group-hover:scale-110">Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
