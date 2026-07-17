import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Link2, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const TeamDetails = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) window.scrollTo(0, 0);
  }, [slug]);

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
      bio: "A Harvard Business School and Howard University alum with over eight years of experience across film and music, he has led award-winning film projects from development to distribution and delivered acclaimed visual campaigns for Capitol Records and Atlantic Records.",
      image: "/lovable-uploads/4a46e31a-7f5b-4183-836a-bcbdcfc78e8e.png"
    },
    {
      name: "Brandon Jarnigan",
      role: "Finance and Royalties Director",
      bio: "MBA graduate from UNC and former American Express executive, Brandon played a key leadership role at Built Technologies, where he helped drive funding rounds with Index Ventures and Goldman Sachs.",
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
      image: "/lovable-uploads/518559b1-d3b2-4b65-8c84-f8cc2d6f9bf7.png"
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
    if (memberName === "Ric Aliberte") {
      return { objectPosition: 'center 15%', transform: 'scale(1.2)' };
    }
    return {};
  };

  return (
    <div className="min-h-screen bg-navy text-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-[10px] uppercase tracking-[0.24em] text-gold hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-3xl mb-20 animate-fade-in">
          <div className="eyebrow mb-6">Leadership</div>
          <h1 className="font-display text-4xl lg:text-6xl text-ink leading-[1.05] mb-6">
            The principals behind <span className="italic text-gold">Ecka</span>.
          </h1>
          <p className="text-ink-muted leading-relaxed">
            Operators, dealmakers, and industry veterans stewarding capital and catalogs with
            institutional rigor.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-navy p-8 group animate-fade-in flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border border-gold/30 bg-gradient-to-br from-gold/20 to-purple/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={getImageStyle(member.name)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-ink font-display text-2xl flex items-center justify-center h-full">${member.name.charAt(0)}</span>`;
                  }}
                />
              </div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-gold mb-2">{member.role}</div>
              <h3 className="font-display text-xl text-ink mb-5">{member.name}</h3>
              <button
                type="button"
                onClick={() => setSelected(index)}
                className="mt-auto text-[10px] font-semibold uppercase tracking-[0.22em] text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-navy transition-all"
              >
                Read Bio
              </button>
              <div className="mt-6 h-px w-8 bg-gold/60 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="bg-navy-800 border-gold/30 text-ink sm:max-w-[560px]">
          {selected !== null && (
            <>
              <div className="flex flex-col items-center text-center mb-2">
                <div className="w-28 h-28 mb-5 rounded-full overflow-hidden border border-gold/30 bg-gradient-to-br from-gold/20 to-purple/20">
                  <img
                    src={teamMembers[selected].image}
                    alt={teamMembers[selected].name}
                    className="w-full h-full object-cover"
                    style={getImageStyle(teamMembers[selected].name)}
                  />
                </div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-gold mb-2">
                  {teamMembers[selected].role}
                </div>
                <DialogHeader className="items-center">
                  <DialogTitle className="font-display text-2xl text-ink">
                    {teamMembers[selected].name}
                  </DialogTitle>
                </DialogHeader>
              </div>
              <DialogDescription className="text-ink-muted text-sm leading-relaxed text-center">
                {teamMembers[selected].bio}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamDetails;
