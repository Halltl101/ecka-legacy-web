
import React from 'react';
import { Music, TrendingUp, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#E8D8B9] transition-all duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6 transition-all duration-300 hover:text-[#C9A34C]">About Ecka Holdings</h2>
          <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Positioned at the intersection of IP, technology, and culture, we redefine how music intellectual property creates lasting value.
          </p>
        </div>
        
        {/* Music Performance Image */}
        <div className="mb-16 animate-fade-in animation-delay-500">
          <img 
            src="/lovable-uploads/ff2dfd68-f3d2-42c2-9860-7a314de0771f.png" 
            alt="Female performer on stage with microphone in dramatic lighting showcasing live music performance"
            className="w-full h-96 object-cover object-[center_top_5%] rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transform animate-fade-in animation-delay-700">
            <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-[#C9A34C]/40 hover:scale-110">
              <Target className="w-6 h-6 text-[#C9A34C] transition-transform duration-300 hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 transition-colors duration-300 hover:text-[#C9A34C]">Mission Focus</h3>
            <p className="text-[#1A1A1A] transition-colors duration-300">
              Preserving the relevance of artists and culturally significant intellectual property for future generations.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transform animate-fade-in animation-delay-900">
            <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-[#C9A34C]/40 hover:scale-110">
              <Music className="w-6 h-6 text-[#C9A34C] transition-transform duration-300 hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 transition-colors duration-300 hover:text-[#C9A34C]">Legacy Management</h3>
            <p className="text-[#1A1A1A] transition-colors duration-300">
              Ensuring artistic endeavors remain active, revenue-generating assets that honor their cultural impact.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transform animate-fade-in animation-delay-1100">
            <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:bg-[#C9A34C]/40 hover:scale-110">
              <TrendingUp className="w-6 h-6 text-[#C9A34C] transition-transform duration-300 hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 transition-colors duration-300 hover:text-[#C9A34C]">Strategic Growth</h3>
            <p className="text-[#1A1A1A] transition-colors duration-300">
              Brand and rights management that maximizes value through strategic partnerships and innovative monetization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
