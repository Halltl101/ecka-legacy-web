
import React from 'react';
import { Music, TrendingUp, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">About Ecka Holdings</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Positioned at the intersection of IP, technology, and culture, we redefine how music intellectual property creates lasting value.
          </p>
        </div>
        
        {/* Music Industry Image */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=400" 
            alt="Recording studio representing music IP investment"
            className="w-full h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-yellow-500/50 transition-all">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Mission Focus</h3>
            <p className="text-slate-300">
              Preserving the relevance of artists and culturally significant intellectual property for future generations.
            </p>
          </div>
          
          <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-yellow-500/50 transition-all">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
              <Music className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Legacy Management</h3>
            <p className="text-slate-300">
              Ensuring artistic endeavors remain active, revenue-generating assets that honor their cultural impact.
            </p>
          </div>
          
          <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-yellow-500/50 transition-all">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Strategic Growth</h3>
            <p className="text-slate-300">
              Brand and rights management that maximizes value through strategic partnerships and innovative monetization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
