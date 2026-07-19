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
    { name: "Tony Hansen", role: "Chief Marketing Officer", bio: "Music executive and entrepreneur with experience managing Grammy-nominated, platinum-selling artists. Has worked with major labels including Atlantic Records and Columbia Records, with expertise spanning artist development, brand partnerships, marketing, and music licensing.", image: "/lovable-uploads/0538ec46-6b86-4941-92b2-736699c6538e.png" },
    { name: "Alex Benton", role: "Chief Operating Officer", bio: "Howard University and Harvard Business School alum with experience spanning music, film, and entertainment investment. Has produced award-winning film projects and led creative campaigns for artists signed to Capitol Records and Atlantic Records.", image: "/lovable-uploads/4a46e31a-7f5b-4183-836a-bcbdcfc78e8e.png" },
    { name: "Brandon Jarnigan", role: "Finance and Royalties Director", bio: "Finance executive and UNC MBA with experience spanning financial services, technology, and high-growth companies. Former American Express executive who held a key leadership role at Built Technologies through major funding rounds backed by Index Ventures and Goldman Sachs.", image: "/lovable-uploads/fb3556b8-3b10-4a61-a12a-5a4656493367.png" },
    { name: "Christopher Meatto", role: "General Counsel", bio: "Attorney and financial executive with over 45 years of experience across law, finance, and business. Harvard Law School J.D. and Fordham University graduate with extensive experience advising companies, entrepreneurs, and investors on complex legal and financial matters.", image: "/lovable-uploads/eeeb763b-772e-4564-9a23-53b3a29029c3.png" },
    { name: "Sean Collins", role: "VP of A&R and M&A", bio: "25+ years music industry veteran. Collaborated with major artists including Jay-Z, Chris Brown, and 50 Cent. Successfully negotiated deals with Warner Chappell, Sony ATV, and Empire.", image: "/lovable-uploads/15691bfc-f7ef-42ae-96d3-ad4fd5f13a79.png" },
    { name: "Kate Hyman", role: "Acquisitions Lead", bio: "Veteran A&R executive who has helped discover and develop influential artists including Jeff Buckley, The Cranberries, The Flaming Lips, and Moby. Held A&R roles across major and independent labels, building a career identifying distinctive talent and guiding artist development.", image: "/lovable-uploads/a8d63e21-1a53-4f4c-8a42-150b7d4a88d9.png" },
    { name: "Erik Steigen", role: "VP Publishing", bio: "20+ years of experience in publishing and royalty administration. Has managed catalogs for artists including Lionel Richie, Brian Wilson, and Don Felder. Founder of USA Media Rights®.", image: "/lovable-uploads/387678dd-6e24-416b-bf4f-715083b5f5d0.png" },
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

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-16">
        <div className="mb-8 animate-fade-in">
          <Link to="/" className="gold-link">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-14 animate-fade-in animation-delay-200">
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
                    className="relative w-40 h-40 mx-auto mb-6 block rounded-full focus:outline-none"
                  >
                    <div className="w-40 h-40 rounded-full overflow-hidden ring-1 ring-gold/30 group-hover:ring-gold ring-offset-4 ring-offset-surface transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                        style={getImageStyle(member.name)}
                      />
                    </div>
                    <span className="absolute inset-0 rounded-full bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-1 ring-gold/40 ring-offset-4 ring-offset-surface">
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
