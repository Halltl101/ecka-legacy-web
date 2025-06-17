
import React from 'react';
import { Music, TrendingUp, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#E8D8B9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">About Ecka Holdings</h2>
          <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto">
            Positioned at the intersection of IP, technology, and culture, we redefine how music intellectual property creates lasting value.
          </p>
        </div>
        
        {/* Music Industry Image */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=1200&h=400" 
            alt="Music production studio with professional audio equipment"
            className="w-full h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[#C9A34C]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Mission Focus</h3>
            <p className="text-[#1A1A1A]">
              Preserving the relevance of artists and culturally significant intellectual property for future generations.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg flex items-center justify-center mb-6">
              <Music className="w-6 h-6 text-[#C9A34C]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Legacy Management</h3>
            <p className="text-[#1A1A1A]">
              Ensuring artistic endeavors remain active, revenue-generating assets that honor their cultural impact.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all hover:shadow-lg">
            <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-[#C9A34C]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Strategic Growth</h3>
            <p className="text-[#1A1A1A]">
              Brand and rights management that maximizes value through strategic partnerships and innovative monetization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
