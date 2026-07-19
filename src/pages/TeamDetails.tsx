import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Expand } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SITE_URL, teamMembers, getImageStyle } from '@/data/team';

const PAGE_URL = `${SITE_URL}/team`;
const OG_IMAGE = `${SITE_URL}/lovable-uploads/c1ce9ac2-cfcf-42dc-83b2-981a548ee073.png`;
const PAGE_TITLE = 'Leadership Team — Ecka Holdings';
const PAGE_DESC = 'Meet the Ecka Holdings leadership team — executives across investment, acquisitions, legal, finance, and publishing driving our music IP portfolio.';

const TeamDetails = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const employeeLd = teamMembers.map(m => ({
    "@type": "Person",
    "@id": `${SITE_URL}/team/${m.slug}#person`,
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    image: `${SITE_URL}${m.image}`,
    url: `${SITE_URL}/team/${m.slug}`,
    worksFor: {
      "@type": "Organization",
      name: "Ecka Holdings",
      url: SITE_URL,
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${PAGE_URL}#aboutpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESC,
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@id": `${SITE_URL}#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "Ecka Holdings",
        url: SITE_URL,
        employee: employeeLd,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Leadership Team", item: PAGE_URL },
        ],
      },
    ],
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <Dialog key={member.name}>
              <div
                className="group bg-surface border border-gold/15 hover:border-gold/50 transition-all duration-500 p-6 sm:p-8 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <DialogTrigger asChild>
                  <button
                    type="button"
                    aria-label={`View ${member.name} bio`}
                    className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto mb-5 sm:mb-6 block rounded-full focus:outline-none"
                  >
                    <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-gold/30 group-hover:ring-gold ring-offset-4 ring-offset-surface transition-all duration-500">
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
                <div className="text-center mt-6">
                  <Link to={`/team/${member.slug}`} className="gold-link text-sm">
                    View full profile →
                  </Link>
                </div>
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
