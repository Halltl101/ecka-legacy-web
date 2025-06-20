

import React from 'react';
import { Music, Briefcase, Users, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    {
      name: "Leadership Team",
      role: "Executive Leadership",
      description: "Harvard Business School graduates with Billboard success, Grammy experience, and involvement in landmark deals including Queen's catalog sale.",
      isClickable: true
    },
    {
      name: "Investment Committee",
      role: "Strategic Oversight",
      description: "Decades of combined experience in entertainment M&A, IP valuation, and international market expansion.",
      isClickable: false
    },
    {
      name: "Advisory Board",
      role: "Industry Expertise",
      description: "Diverse experience across telecom, entertainment, sports, law, technology, and finance sectors.",
      isClickable: false
    }
  ];

  return (
    <section id="team" className="py-20 bg-[#E8D8B9] transition-all duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6 transition-all duration-300 hover:text-[#C9A34C]">Our Team</h2>
          <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Thought leaders with unparalleled access to capital, industry reach, and deep expertise across entertainment and finance.
          </p>
        </div>
        
        {/* Concert Performer Image */}
        <div className="mb-16 animate-fade-in animation-delay-500">
          <img 
            src="/lovable-uploads/cec0a1cb-f9ec-4e08-98b2-5ff6290c6eea.png" 
            alt="Concert performer on stage with dramatic lighting"
            className="w-full h-64 object-cover object-[center_50%] rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className={`${member.isClickable 
              ? 'bg-gradient-to-br from-white to-[#F5F5F5] border-2 border-[#C9A34C] shadow-lg cursor-pointer hover:shadow-2xl hover:border-[#B8923E] hover:-translate-y-4 hover:scale-105 relative overflow-hidden' 
              : 'bg-white border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 hover:-translate-y-2'
            } p-8 rounded-xl transition-all duration-300 hover:shadow-lg transform animate-fade-in group`} style={{animationDelay: `${700 + index * 200}ms`}}>
              {member.isClickable && (
                <div className="absolute top-4 right-4 text-[#C9A34C] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
              {member.isClickable ? (
                <Link to="/team" className="block">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C9A34C] to-[#B8923E] rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 transform">
                    <Users className="w-8 h-8 text-white transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2 transition-colors duration-300 group-hover:text-[#C9A34C]">{member.name}</h3>
                  <p className="text-[#C9A34C] mb-4 font-medium transition-all duration-300 group-hover:font-bold">{member.role}</p>
                  <p className="text-[#1A1A1A] transition-colors duration-300">{member.description}</p>
                  <div className="mt-4 text-[#C9A34C] font-semibold transition-opacity duration-300">
                    Click to view team details →
                  </div>
                </Link>
              ) : (
                <>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C9A34C] to-[#B8923E] rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 transform">
                    <span className="text-white font-bold text-xl transition-transform duration-300">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2 transition-colors duration-300 group-hover:text-[#C9A34C]">{member.name}</h3>
                  <p className="text-[#C9A34C] mb-4 font-medium transition-all duration-300">{member.role}</p>
                  <p className="text-[#1A1A1A] transition-colors duration-300">{member.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#C9A34C]/30 hover:border-[#C9A34C]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A34C]/20 animate-fade-in animation-delay-1300">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center transition-colors duration-300 hover:text-[#C9A34C]">Board of Directors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A34C]/40 group-hover:scale-110">
                <Music className="w-6 h-6 text-[#C9A34C] transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <p className="text-white font-medium transition-colors duration-300 group-hover:text-[#C9A34C]">Entertainment</p>
              <p className="text-gray-400 text-sm transition-colors duration-300">Industry Veterans</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A34C]/40 group-hover:scale-110">
                <Briefcase className="w-6 h-6 text-[#C9A34C] transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <p className="text-white font-medium transition-colors duration-300 group-hover:text-[#C9A34C]">Finance</p>
              <p className="text-gray-400 text-sm transition-colors duration-300">Capital Markets</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A34C]/40 group-hover:scale-110">
                <Users className="w-6 h-6 text-[#C9A34C] transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <p className="text-white font-medium transition-colors duration-300 group-hover:text-[#C9A34C]">Technology</p>
              <p className="text-gray-400 text-sm transition-colors duration-300">Innovation Leaders</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A34C]/40 group-hover:scale-110">
                <Scale className="w-6 h-6 text-[#C9A34C] transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <p className="text-white font-medium transition-colors duration-300 group-hover:text-[#C9A34C]">Legal</p>
              <p className="text-gray-400 text-sm transition-colors duration-300">IP Specialists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

