
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TeamDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "T.V. Hall",
      role: "Chief Executive Officer",
      bio: "Founder with over $38B in M&A transaction experience. Former Billboard-charting artist with MBA and MSF. Minority owner of ECHL Allen Americans hockey team and VP of Harvard Business School Alumni Club of Atlanta.",
      image: "/lovable-uploads/c02206e8-f7ce-45f4-bc6c-14ed5c8b0c1c.png"
    },
    {
      name: "Tony Hansen",
      role: "Chief Marketing Officer",
      bio: "Seasoned entrepreneur managing Grammy-nominated platinum-selling artists. Proven track record with major labels including Atlantic Records and Columbia Records, specializing in brand promotion and artist development.",
      image: "/lovable-uploads/0538ec46-6b86-4941-92b2-736699c6538e.png"
    },
    {
      name: "Alex Benton",
      role: "Chief Operating Officer",
      bio: "Entrepreneur with extensive experience scaling businesses in entertainment and real estate. Award-winning project leader for Capitol Records and Atlantic Records, excelling in operations and strategic leadership.",
      image: "/lovable-uploads/4a46e31a-7f5b-4183-836a-bcbdcfc78e8e.png"
    },
    {
      name: "Brandon Jarnigan",
      role: "Chief Financial Officer",
      bio: "Master's in Finance from UNC. Former American Express executive and key leader at Built Technologies through successful funding rounds with Goldman Sachs and Google Ventures, achieving $1.5B valuation.",
      image: "/lovable-uploads/fb3556b8-3b10-4a61-a12a-5a4656493367.png"
    },
    {
      name: "Christopher Meatto",
      role: "General Counsel",
      bio: "Over 45 years as attorney and financial executive. Harvard Law School J.D. and Fordham University graduate with distinguished career across diverse legal and financial sectors.",
      image: "/lovable-uploads/eeeb763b-772e-4564-9a23-53b3a29029c3.png"
    },
    {
      name: "Sean Collins",
      role: "VP of A&R and M&A",
      bio: "25+ years music industry veteran. Collaborated with major artists including Jay-Z, Chris Brown, and 50 Cent. Successfully negotiated deals with Warner Chappell, Sony ATV, and Empire.",
      image: "/lovable-uploads/15691bfc-f7ef-42ae-96d3-ad4fd5f13a79.png"
    },
    {
      name: "Kate Hyman",
      role: "Acquisitions Lead",
      bio: "Entertainment industry legacy with grandfather who bought Warner Brothers. Extensive experience in joint ventures and A&R across prestigious labels, merging creativity with commercial expertise.",
      image: "/lovable-uploads/a8d63e21-1a53-4f4c-8a42-150b7d4a88d9.png"
    },
    {
      name: "Ric Aliberte",
      role: "Acquisitions Lead",
      bio: "Music industry veteran who discovered Queen and worked at Elektra/Asylum Records. Managed major acts including Kiss and Billy Idol. Founded R.A.M. Inc. and contributed to Bohemian Rhapsody movie success.",
      image: "/placeholder.svg"
    },
    {
      name: "Erik Steigen",
      role: "VP Publishing",
      bio: "20+ years in music publishing and royalty administration. Former LA business management firm executive managing catalogs for Lionel Richie, Brian Wilson, and Don Felder. Founder of USA Media Rights®.",
      image: "/lovable-uploads/387678dd-6e24-416b-bf4f-715083b5f5d0.png"
    }
  ];

  const getImageStyle = (memberName: string) => {
    if (memberName === "Alex Benton") {
      return { objectPosition: 'center 35%' };
    }
    return {};
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#C9A34C] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Leadership Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experienced professionals driving Ecka Holdings' vision and strategic growth.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/cec0a1cb-f9ec-4e08-98b2-5ff6290c6eea.png" 
            alt="Concert performer on stage with dramatic lighting"
            className="w-full h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 rounded-xl border border-[#C9A34C]/20 hover:border-[#C9A34C]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 transform">
              <div className="w-32 h-32 bg-gradient-to-br from-[#C9A34C] to-[#B8923E] rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                  style={getImageStyle(member.name)}
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
