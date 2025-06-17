
import React from 'react';

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
    <section id="team" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Thought leaders with unparalleled access to capital, industry reach, and deep expertise across entertainment and finance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-yellow-500/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-yellow-400 mb-4 font-medium">{member.role}</p>
              <p className="text-slate-300">{member.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 p-8 rounded-xl border border-slate-600">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Board of Directors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              </div>
              <p className="text-white font-medium">Entertainment</p>
              <p className="text-slate-400 text-sm">Industry Veterans</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              </div>
              <p className="text-white font-medium">Finance</p>
              <p className="text-slate-400 text-sm">Capital Markets</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              </div>
              <p className="text-white font-medium">Technology</p>
              <p className="text-slate-400 text-sm">Innovation Leaders</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              </div>
              <p className="text-white font-medium">Legal</p>
              <p className="text-slate-400 text-sm">IP Specialists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
