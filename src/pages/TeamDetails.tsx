
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TeamDetails = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Chief Executive Officer",
      bio: "Harvard Business School graduate with over 15 years of experience in entertainment industry M&A. Previously led landmark deals including major catalog acquisitions and has deep connections throughout the music industry.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Investment Officer",
      bio: "Former Goldman Sachs executive with extensive experience in entertainment finance and IP valuation. Grammy-nominated producer with Billboard chart success across multiple genres.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Chief Operating Officer",
      bio: "Technology and operations expert with background in scaling entertainment companies. Previously served as COO at major streaming platforms and music distribution companies.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Link 
          to="/" 
          className="inline-flex items-center text-[#C9A34C] hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Leadership Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experienced professionals driving Ecka Holdings' vision and strategic growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transform">
              <div className="w-32 h-32 bg-gradient-to-br from-[#C9A34C] to-[#B8923E] rounded-full mx-auto mb-6 flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-white font-bold text-2xl">${member.name.charAt(0)}</span>`;
                  }}
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2 text-center">{member.name}</h3>
              <p className="text-[#C9A34C] mb-4 font-medium text-center">{member.role}</p>
              <p className="text-gray-300 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
