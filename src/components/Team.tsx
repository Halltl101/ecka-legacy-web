
import React from 'react';
import { Music, Briefcase, Users, Scale } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Leadership Team",
      role: "Executive Leadership",
      description: "Harvard Business School graduates with Billboard success, Grammy experience, and involvement in landmark deals including Queen's catalog sale."
    },
    {
      name: "Investment Committee",
      role: "Strategic Oversight",
      description: "Decades of combined experience in entertainment M&A, IP valuation, and international market expansion."
    },
    {
      name: "Advisory Board",
      role: "Industry Expertise",
      description: "Diverse experience across telecom, entertainment, sports, law, technology, and finance sectors."
    }
  ];

  return (
    <section id="team" className="py-20 bg-[#E8D8B9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">Our Team</h2>
          <p className="text-xl text-[#1A1A1A] max-w-3xl mx-auto">
            Thought leaders with unparalleled access to capital, industry reach, and deep expertise across entertainment and finance.
          </p>
        </div>
        
        {/* Team Photo */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&h=400" 
            alt="Music industry professionals and investors"
            className="w-full h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C9A34C] to-[#B8923E] rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{member.name}</h3>
              <p className="text-[#C9A34C] mb-4 font-medium">{member.role}</p>
              <p className="text-[#1A1A1A]">{member.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-[#C9A34C]/30">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Board of Directors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Music className="w-6 h-6 text-[#C9A34C]" />
              </div>
              <p className="text-white font-medium">Entertainment</p>
              <p className="text-gray-400 text-sm">Industry Veterans</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#C9A34C]" />
              </div>
              <p className="text-white font-medium">Finance</p>
              <p className="text-gray-400 text-sm">Capital Markets</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#C9A34C]" />
              </div>
              <p className="text-white font-medium">Technology</p>
              <p className="text-gray-400 text-sm">Innovation Leaders</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C9A34C]/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Scale className="w-6 h-6 text-[#C9A34C]" />
              </div>
              <p className="text-white font-medium">Legal</p>
              <p className="text-gray-400 text-sm">IP Specialists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
