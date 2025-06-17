
import React from 'react';
import { Music, TrendingUp, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Turning Assets to
                <span className="text-[#C9A34C] block">Legacy</span>
              </h1>
              <p className="text-xl text-white font-medium">
                Growing IP Value Year After Year
              </p>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Ecka Holdings is an intellectual property investment firm focused on music and entertainment assets, 
              with a mission to preserve and grow culturally significant works while delivering exceptional returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#C9A34C] hover:bg-[#B8923E] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
                Request Investor Overview
              </button>
              <button className="border-2 border-[#C9A34C] hover:bg-[#C9A34C] hover:text-black text-[#C9A34C] px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Schedule Intro Call
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Music Industry Visual */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571974599782-87624638275c?auto=format&fit=crop&w=800&h=600" 
                alt="Professional recording studio mixing board representing music IP investment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A34C]/20 to-[#C9A34C]/30 rounded-2xl"></div>
            </div>
            
            {/* Stats Card */}
            <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#C9A34C]/30">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Portfolio Value
                  </span>
                  <span className="text-2xl font-bold text-[#C9A34C]">$2B+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2">
                    <Music className="w-5 h-5" />
                    Deal Experience
                  </span>
                  <span className="text-2xl font-bold text-[#C9A34C]">Decades</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Global Reach
                  </span>
                  <span className="text-2xl font-bold text-[#C9A34C]">Worldwide</span>
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
