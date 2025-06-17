
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TeamDetails = () => {
  const teamMembers = [
    {
      name: "T.V. Hall",
      role: "Chief Executive Officer",
      bio: "I am the Founder and a seasoned M&A executive with over $38B in transaction experience. As a former Billboard-charting artist, I am also a minority owner of the ECHL Allen Americans hockey team and serve as Vice President of the Harvard Business School Alumni Club of Atlanta. I hold an MBA and MSF.",
      image: "/placeholder.svg"
    },
    {
      name: "Tony Hansen",
      role: "Chief Marketing Officer",
      bio: "I am a seasoned entrepreneur and music expert who manages Grammy-nominated platinum-selling artists and successful tours. With my track record in launching and marketing projects for major labels, including GDE/ATLANTIC RECORDS, BUVISION ENTERTAINMENT/COLUMBIA RECORDS, and NUVISION ENTERTAINMENT, I excel in brand promotion.",
      image: "/placeholder.svg"
    },
    {
      name: "Alex Benton",
      role: "Chief Operating Officer",
      bio: "I am an entrepreneur who has scaled businesses in both the entertainment and real estate industry. With over six years in the music industry, I have contributed to award-winning visual projects for Capitol Records and Atlantic Records, excelling in leadership and operations.",
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
