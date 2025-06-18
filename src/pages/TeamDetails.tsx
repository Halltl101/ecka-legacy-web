import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TeamDetails = () => {
  const teamMembers = [
    {
      name: "T.V. Hall",
      role: "Chief Executive Officer",
      bio: "I am the Founder and a seasoned M&A executive with over $38B in transaction experience. As a former Billboard-charting artist, I am also a minority owner of the ECHL Allen Americans hockey team and serve as Vice President of the Harvard Business School Alumni Club of Atlanta. I hold an MBA and MSF.",
      image: "/lovable-uploads/f436b027-f96d-47ac-8f8a-581352ab83cb.png"
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
    },
    {
      name: "Brandon Jarnigan",
      role: "Chief Financial Officer",
      bio: "I'm Brandon Jarnigan. I hold a master's degree in finance from the University of North Carolina and began my career at American Express in New York. About a decade ago, I moved with my family to Nashville, where I took on a key pricing role at Asurion. I later helped scale Built Technologies, leading successful funding rounds with Goldman Sachs and Google Ventures that brought the company to a $1.5 billion valuation. As a Nashville native, I'm passionate about finance, NIL rights, and music royalties—and I'm proud to help bridge the worlds of tech, entertainment, and capital.",
      image: "/lovable-uploads/fb3556b8-3b10-4a61-a12a-5a4656493367.png"
    },
    {
      name: "Christopher Meatto",
      role: "General Counsel",
      bio: "With over 45 years of experience as both an attorney and financial executive, I am celebrated for my sharp legal acumen. Graduating from Fordham University, I embarked on a distinguished career path. Earning my J.D. from Harvard Law School in 1974, I have since offered invaluable counsel and leadership across diverse legal arenas.",
      image: "/placeholder.svg"
    },
    {
      name: "Sean Collins",
      role: "VP of A&R and M&A",
      bio: "I am a seasoned music industry professional with over 25 years of experience, excelling as a music executive. My career spans from collaborating with artists like Wyclef Jean and Canibus to placing records for industry giants such as Jay-Z, Chris Brown, and 50 Cent. I have successfully negotiated publishing and artist deals with major players like Warner Chappell, Sony ATV, and Empire, showcasing my versatile expertise in both artistic and business domains.",
      image: "/placeholder.svg"
    },
    {
      name: "Kate Hyman",
      role: "Acquisitions Lead",
      bio: "Kate comes from a family deeply entrenched in entertainment; her grandfather bought Warner Brothers, and her father led the studio. With a career spanning successful joint ventures and A&R roles across prestigious labels, Kate is a visionary in the industry. Her innovative approach merges creativity with commercial savvy. From crafting film soundtracks to pioneering tributes, Kate's influence reverberates worldwide.",
      image: "/placeholder.svg"
    },
    {
      name: "Ric Aliberte",
      role: "Acquisitions Lead",
      bio: "Ric, a seasoned music industry veteran, opened Boston's first full-line record store while at Harvard. His early career saw him discover Queen and work with legends at Elektra/Asylum Records. Managing acts like Kiss and Billy Idol, he later founded R.A.M. Inc., representing top producers. Ric's consultancy with Queen members contributed to the success of the Bohemian Rhapsody movie.",
      image: "/placeholder.svg"
    },
    {
      name: "Erik Steigen",
      role: "VP Publishing",
      bio: "Erik Steigen brings over two decades of experience in music publishing, royalty administration, and catalog management to his role leading publishing at Ecka. He previously oversaw publishing and royalties for a major business management firm in Los Angeles, administered catalogs for iconic artists like Lionel Richie, Brian Wilson, and Don Felder, and co-founded an independent publishing administration company representing Grammy and Emmy-winning talent. Erik is also the founder of USA Media Rights® and has led financial and legal due diligence for high-value entertainment asset sales.",
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
