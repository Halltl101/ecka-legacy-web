import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Expand } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TeamDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const teamMembers = [
    { name: "T.V. Hall", role: "Chief Executive Officer", bio: "Founder with over $38B in M&A transaction experience. Former Billboard-charting artist with MBA and MSF. Minority owner of ECHL Allen Americans hockey team and VP of Harvard Business School Alumni Club of Atlanta.", image: "/lovable-uploads/c02206e8-f7ce-45f4-bc6c-14ed5c8b0c1c.png" },
    { name: "Tony Hansen", role: "Chief Marketing Officer", bio: "Seasoned entrepreneur managing Grammy-nominated platinum-selling artists. Proven track record with major labels including Atlantic Records and Columbia Records, specializing in brand promotion and artist development.", image: "/lovable-uploads/0538ec46-6b86-4941-92b2-736699c6538e.png" },
    { name: "Alex Benton", role: "Chief Operating Officer", bio: "A Harvard Business School and Howard University alum with over eight years of experience across film and music, he has led award-winning film projects from development to distribution and delivered acclaimed visual campaigns for Capitol Records and Atlantic Records.", image: "/lovable-uploads/4a46e31a-7f5b-4183-836a-bcbdcfc78e8e.png" },
    { name: "Brandon Jarnigan", role: "Finance and Royalties Director", bio: "MBA graduate from UNC and former American Express executive, Brandon played a key leadership role at Built Technologies, where he helped drive funding rounds with Index Ventures and Goldman Sachs.", image: "/lovable-uploads/fb3556b8-3b10-4a61-a12a-5a4656493367.png" },
    { name: "Christopher Meatto", role: "General Counsel", bio: "Over 45 years as attorney and financial executive. Harvard Law School J.D. and Fordham University graduate with distinguished career across diverse legal and financial sectors.", image: "/lovable-uploads/eeeb763b-772e-4564-9a23-53b3a29029c3.png" },
    { name: "Sean Collins", role: "VP of A&R and M&A", bio: "25+ years music industry veteran. Collaborated with major artists including Jay-Z, Chris Brown, and 50 Cent. Successfully negotiated deals with Warner Chappell, Sony ATV, and Empire.", image: "/lovable-uploads/15691bfc-f7ef-42ae-96d3-ad4fd5f13a79.png" },
    { name: "Kate Hyman", role: "Acquisitions Lead", bio: "Entertainment industry legacy with grandfather who bought Warner Brothers. Extensive experience in joint ventures and A&R across prestigious labels, merging creativity with commercial expertise.", image: "/lovable-uploads/a8d63e21-1a53-4f4c-8a42-150b7d4a88d9.png" },
    { name: "Ric Aliberte", role: "Acquisitions Lead", bio: "Music industry veteran who discovered Queen and worked at Elektra/Asylum Records. Managed major acts including Kiss and Billy Idol. Founded R.A.M. Inc. and contributed to Bohemian Rhapsody movie success.", image: "/lovable-uploads/518559b1-d3b2-4b65-8c84-f8cc2d6f9bf7.png" },
    { name: "Erik Steigen", role: "VP Publishing", bio: "20+ years in music publishing and royalty administration. Former LA business management firm executive managing catalogs for Lionel Richie, Brian Wilson, and Don Felder. Founder of USA Media Rights®.", image: "/lovable-uploads/387678dd-6e24-416b-bf4f-715083b5f5d0.png" },
  ];

  const getImageStyle = (memberName: string): React.CSSProperties => {
    if (memberName === "Alex Benton") return { objectPosition: 'center 35%' };
    if (memberName === "Ric Aliberte") return { objectPosition: 'center 15%', transform: 'scale(1.2)' };
    return {};
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">
        <div className="mb-12 animate-fade-in">
          <Link to="/" className="gold-link">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-20 animate-fade-in animation-delay-200">
          <span className="eyebrow-gold mb-6 block">Leadership</span>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-6">
            The <span className="italic text-gold">Ecka</span> Team.
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
            The experienced professionals driving Ecka Holdings&rsquo; vision, capital, and strategic growth.
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <Dialog key={member.name}>
              <div
                className="group bg-surface border border-gold/15 hover:border-gold/50 transition-all duration-500 p-8 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <DialogTrigger asChild>
                  <button
                    type="button"
                    aria-label={`View ${member.name} bio`}
                    className="relative w-36 h-36 mx-auto mb-6 block focus:outline-none"
                  >
                    <div className="w-36 h-36 overflow-hidden border border-gold/30 group-hover:border-gold transition-colors duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                        style={getImageStyle(member.name)}
                      />
                    </div>
                    <span className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Expand className="w-5 h-5 text-gold" />
                    </span>
                  </button>
                </DialogTrigger>

                <div className="text-center">
                  <DialogTrigger asChild>
                    <button type="button" className="focus:outline-none">
                      <h3 className="font-display text-2xl font-light mb-2 hover:text-gold transition-colors">
                        {member.name}
                      </h3>
                      <p className="eyebrow-gold">{member.role}</p>
                    </button>
                  </DialogTrigger>
                </div>
              </div>

              <DialogContent className="bg-surface border border-gold/30 rounded-none max-w-lg text-foreground">
                <DialogHeader>
                  <div className="w-40 h-40 mx-auto mb-6 overflow-hidden border border-gold/40">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" style={getImageStyle(member.name)} />
                  </div>
                  <DialogTitle className="font-display text-3xl font-light text-center">
                    {member.name}
                  </DialogTitle>
                  <DialogDescription className="text-center eyebrow-gold mt-2">
                    {member.role}
                  </DialogDescription>
                </DialogHeader>
                <div className="w-10 h-px bg-gold mx-auto my-4" />
                <p className="text-foreground/70 leading-relaxed font-light text-center">{member.bio}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamDetails;
