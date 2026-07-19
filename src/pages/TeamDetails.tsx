import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Expand } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SITE_URL = 'https://ecka-legacy-web.lovable.app';
const PAGE_URL = `${SITE_URL}/team`;
const OG_IMAGE = `${SITE_URL}/lovable-uploads/c1ce9ac2-cfcf-42dc-83b2-981a548ee073.png`;
const PAGE_TITLE = 'Leadership Team — Ecka Holdings';
const PAGE_DESC = 'Meet the Ecka Holdings leadership team — executives across investment, acquisitions, legal, finance, and publishing driving our music IP portfolio.';

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

  const employeeLd = teamMembers.map(m => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: PAGE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESC,
    mainEntity: {
      "@type": "Organization",
      name: "Ecka Holdings",
      url: SITE_URL,
      employee: employeeLd,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:url" content={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">
        <div className="mb-12 animate-fade-in">
          <Link to="/" className="gold-link">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-24 animate-fade-in animation-delay-200">
          <h1 className="font-display text-5xl md:text-6xl font-light text-gold mb-4">
            Leadership
          </h1>
          <div className="w-24 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-light">
            Stewards of Artistic Legacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {teamMembers.map((member, index) => (
            <Dialog key={member.name}>
              <div
                className="flex flex-col group animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <DialogTrigger asChild>
                  <button
                    type="button"
                    aria-label={`View ${member.name} bio`}
                    className="relative mb-8 block w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                  >
                    <div className="relative overflow-hidden aspect-[4/5] w-full bg-surface border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-[1.03]"
                        style={getImageStyle(member.name)}
                      />
                      <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/70 p-1.5 border border-gold/40">
                        <Expand className="w-3.5 h-3.5 text-gold" />
                      </span>
                    </div>
                    <div className="absolute inset-0 border border-gold/20 pointer-events-none translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500" />
                  </button>
                </DialogTrigger>

                <DialogTrigger asChild>
                  <button type="button" className="text-left focus:outline-none">
                    <h3 className="font-display text-2xl font-light text-gold mb-1 hover:opacity-80 transition-opacity">
                      {member.name}
                    </h3>
                  </button>
                </DialogTrigger>
                <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed font-light line-clamp-3">
                  {member.bio}
                </p>
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
