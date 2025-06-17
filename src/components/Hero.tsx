
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Turning Assets to
                <span className="text-yellow-500 block">Legacy</span>
              </h1>
              <p className="text-xl text-slate-300 font-medium">
                Growing IP Value Year After Year
              </p>
            </div>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Ecka Holdings is an intellectual property investment firm focused on music and entertainment assets, 
              with a mission to preserve and grow culturally significant works while delivering exceptional returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
                Request Investor Overview
              </button>
              <button className="border-2 border-slate-600 hover:border-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule Intro Call
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 p-8 rounded-2xl backdrop-blur-sm border border-yellow-500/30">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Portfolio Value</span>
                  <span className="text-2xl font-bold text-white">$2B+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Deal Experience</span>
                  <span className="text-2xl font-bold text-white">Decades</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Global Reach</span>
                  <span className="text-2xl font-bold text-white">Worldwide</span>
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
