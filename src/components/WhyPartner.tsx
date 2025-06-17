
import React from 'react';
import { Music2, Users, BarChart3, DollarSign, Globe2 } from 'lucide-react';

const WhyPartner = () => {
  return (
    <section id="why-partner" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Partner with Ecka</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're redefining music IP with a forward-thinking acquisition model, artist-first relationships, and data-driven asset selection.
          </p>
        </div>
        
        {/* Music Publishing Image */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&h=400" 
            alt="Music production and publishing workspace"
            className="w-full h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-4">Traditional Approach</h3>
              <p className="text-slate-400 mb-2">Harbor View & Others:</p>
              <p className="text-slate-300">Traditional asset managers focused on financial returns only</p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 p-6 rounded-xl border border-yellow-500/30">
              <h3 className="text-2xl font-semibold text-white mb-4">Ecka's Approach</h3>
              <p className="text-yellow-400 mb-2">Strategic Growth Partner:</p>
              <p className="text-slate-300">Artist-first relationships with culture-driven value creation</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">$2B+ Deal Experience</h4>
                <p className="text-slate-300">Leadership with proven track record across M&A, IP, and entertainment including Queen's $1.27B catalog sale</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Proprietary Access</h4>
                <p className="text-slate-300">Exclusive access to undervalued catalogs through artist-first terms and deep industry relationships</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Global Scalability</h4>
                <p className="text-slate-300">International expansion focus with cross-border capabilities in Asia and LATAM markets</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700">
            <Music2 className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Strategic Expertise</h4>
            <p className="text-slate-400 text-sm">Decades in entertainment, tech, and finance</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700">
            <Users className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Artist Relationships</h4>
            <p className="text-slate-400 text-sm">Artist-first acquisition and management</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700">
            <BarChart3 className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Data-Driven</h4>
            <p className="text-slate-400 text-sm">Tech-enabled forecasting and scoring</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700">
            <DollarSign className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Flexible Capital</h4>
            <p className="text-slate-400 text-sm">Joint ventures and creative structuring</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700">
            <Globe2 className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">Global Expansion</h4>
            <p className="text-slate-400 text-sm">International market focus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
