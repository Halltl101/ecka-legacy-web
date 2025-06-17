
import React from 'react';
import { Music2, Users, BarChart3, DollarSign, Globe2 } from 'lucide-react';

const WhyPartner = () => {
  return (
    <section id="why-partner" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Partner with Ecka</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're redefining music IP with a forward-thinking acquisition model, artist-first relationships, and data-driven asset selection.
          </p>
        </div>
        
        {/* Business Partnership Image */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=400" 
            alt="Diverse executives in a professional boardroom meeting discussing strategic partnerships and business collaboration"
            className="w-full h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-4">Traditional Approach</h3>
              <p className="text-gray-300">Traditional asset managers focused on financial returns only</p>
            </div>
            
            <div className="bg-[#C9A34C]/10 p-6 rounded-xl border border-[#C9A34C]/30">
              <h3 className="text-2xl font-semibold text-white mb-4">Ecka's Approach</h3>
              <p className="text-[#C9A34C] mb-2">Strategic Growth Partner:</p>
              <p className="text-gray-300">Artist-first relationships with culture-driven value creation</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#C9A34C] rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">$2B+ Deal Experience</h4>
                <p className="text-gray-300">Leadership with proven track record across M&A, IP, and entertainment including Queen's $1.27B catalog sale</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#C9A34C] rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Proprietary Access</h4>
                <p className="text-gray-300">Exclusive access to undervalued catalogs through artist-first terms and deep industry relationships</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#C9A34C] rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Global Scalability</h4>
                <p className="text-gray-300">International expansion focus with cross-border capabilities in Asia and LATAM markets</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center border border-gray-700 hover:border-[#C9A34C]/50 transition-all">
            <Music2 className="w-8 h-8 text-[#C9A34C] mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Strategic Expertise</h4>
            <p className="text-gray-400 text-sm">Decades in entertainment, tech, and finance</p>
          </div>
          
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center border border-gray-700 hover:border-[#C9A34C]/50 transition-all">
            <Users className="w-8 h-8 text-[#C9A34C] mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Artist Relationships</h4>
            <p className="text-gray-400 text-sm">Artist-first acquisition and management</p>
          </div>
          
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center border border-gray-700 hover:border-[#C9A34C]/50 transition-all">
            <BarChart3 className="w-8 h-8 text-[#C9A34C] mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Data-Driven</h4>
            <p className="text-gray-400 text-sm">Tech-enabled forecasting and scoring</p>
          </div>
          
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center border border-gray-700 hover:border-[#C9A34C]/50 transition-all">
            <DollarSign className="w-8 h-8 text-[#C9A34C] mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Flexible Capital</h4>
            <p className="text-gray-400 text-sm">Joint ventures and creative structuring</p>
          </div>
          
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center border border-gray-700 hover:border-[#C9A34C]/50 transition-all">
            <Globe2 className="w-8 h-8 text-[#C9A34C] mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Global Expansion</h4>
            <p className="text-gray-400 text-sm">International market focus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
