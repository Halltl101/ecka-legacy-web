import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Link2, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
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

  const teamMembers: {
    name: string;
    role: string;
    bio: string;
    image: string;
    highlights: string[];
    links?: { label: string; href: string }[];
  }[] = [
    {
      name: "T.V. Hall",
      role: "Chief Executive Officer",
      bio: "Founder with over $38B in M&A transaction experience. Former Billboard-charting artist with MBA and MSF. Minority owner of ECHL Allen Americans hockey team and VP of Harvard Business School Alumni Club of Atlanta.",
      image: "/lovable-uploads/c02206e8-f7ce-45f4-bc6c-14ed5c8b0c1c.png",
      highlights: ["$38B+ M&A", "MBA · MSF", "Billboard Artist"],
    },
    {
      name: "Tony Hansen",
      role: "Chief Marketing Officer",
      bio: "Seasoned entrepreneur managing Grammy-nominated platinum-selling artists. Proven track record with major labels including Atlantic Records and Columbia Records, specializing in brand promotion and artist development.",
      image: "/lovable-uploads/0538ec46-6b86-4941-92b2-736699c6538e.png",
      highlights: ["Grammy-Nominated", "Atlantic · Columbia", "Artist Development"],
    },
    {
      name: "Alex Benton",
      role: "Chief Operating Officer",
      bio: "A Harvard Business School and Howard University alum with over eight years of experience across film and music, he has led award-winning film projects from development to distribution and delivered acclaimed visual campaigns for Capitol Records and Atlantic Records.",
      image: "/lovable-uploads/4a46e31a-7f5b-4183-836a-bcbdcfc78e8e.png",
      highlights: ["Harvard MBA", "Howard University", "Capitol · Atlantic"],
    },
    {
      name: "Brandon Jarnigan",
      role: "Finance and Royalties Director",
      bio: "MBA graduate from UNC and former American Express executive, Brandon played a key leadership role at Built Technologies, where he helped drive funding rounds with Index Ventures and Goldman Sachs.",
      image: "/lovable-uploads/fb3556b8-3b10-4a61-a12a-5a4656493367.png",
      highlights: ["UNC MBA", "AmEx Alum", "Index · Goldman"],
    },
    {
      name: "Christopher Meatto",
      role: "General Counsel",
      bio: "Over 45 years as attorney and financial executive. Harvard Law School J.D. and Fordham University graduate with distinguished career across diverse legal and financial sectors.",
      image: "/lovable-uploads/eeeb763b-772e-4564-9a23-53b3a29029c3.png",
      highlights: ["45+ Years", "Harvard Law J.D.", "Fordham"],
    },
    {
      name: "Sean Collins",
      role: "VP of A&R and M&A",
      bio: "25+ years music industry veteran. Collaborated with major artists including Jay-Z, Chris Brown, and 50 Cent. Successfully negotiated deals with Warner Chappell, Sony ATV, and Empire.",
      image: "/lovable-uploads/15691bfc-f7ef-42ae-96d3-ad4fd5f13a79.png",
      highlights: ["25+ Years", "Jay-Z · 50 Cent", "Warner · Sony ATV"],
    },
    {
      name: "Kate Hyman",
      role: "Acquisitions Lead",
      bio: "Entertainment industry legacy with grandfather who bought Warner Brothers. Extensive experience in joint ventures and A&R across prestigious labels, merging creativity with commercial expertise.",
      image: "/lovable-uploads/a8d63e21-1a53-4f4c-8a42-150b7d4a88d9.png",
      highlights: ["Warner Bros Legacy", "Joint Ventures", "A&R Veteran"],
    },
    {
      name: "Erik Steigen",
      role: "VP Publishing",
      bio: "20+ years in music publishing and royalty administration. Former LA business management firm executive managing catalogs for Lionel Richie, Brian Wilson, and Don Felder. Founder of USA Media Rights®.",
      image: "/lovable-uploads/387678dd-6e24-416b-bf4f-715083b5f5d0.png",
      highlights: ["20+ Years", "Lionel Richie · Brian Wilson", "USA Media Rights®"],
    }
  ];

  const getImageStyle = (memberName: string) => {
    if (memberName === "Alex Benton") {
      return { objectPosition: 'center 35%' };
    }
    return {};
  };

  const membersWithSlug = useMemo(
    () => teamMembers.map((m) => ({ ...m, slug: slugify(m.name) })),
    []
  );

  const selectedMember = slug
    ? membersWithSlug.find((m) => m.slug === slug) ?? null
    : null;

  const openMember = (s: string) => navigate(`/team/${s}`);
  const closeMember = () => navigate('/team');

  const copyLink = async () => {
    if (!selectedMember) return;
    const url = `${window.location.origin}/team/${selectedMember.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const SITE_URL = 'https://ecka-legacy-web.lovable.app';
  const pageUrl = selectedMember
    ? `${SITE_URL}/team/${selectedMember.slug}`
    : `${SITE_URL}/team`;
  const pageTitle = selectedMember
    ? `${selectedMember.name} — ${selectedMember.role} · Ecka Holdings`
    : 'Leadership Team · Ecka Holdings';
  const pageDescription = selectedMember
    ? selectedMember.bio
    : 'Meet the operators, dealmakers, and industry veterans stewarding capital and catalogs at Ecka Holdings.';
  const pageImage = selectedMember
    ? `${SITE_URL}${selectedMember.image}`
    : undefined;

  return (
    <div className="min-h-screen bg-navy text-ink">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content={selectedMember ? 'profile' : 'website'} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        {pageImage && <meta property="og:image" content={pageImage} />}
        {selectedMember && (
          <meta property="profile:username" content={selectedMember.slug} />
        )}
        <meta name="twitter:card" content={pageImage ? 'summary_large_image' : 'summary'} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {pageImage && <meta name="twitter:image" content={pageImage} />}
        {selectedMember && (
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: selectedMember.name,
              jobTitle: selectedMember.role,
              description: selectedMember.bio,
              image: pageImage,
              url: pageUrl,
              worksFor: {
                '@type': 'Organization',
                name: 'Ecka Holdings',
                url: SITE_URL,
              },
            })}
          </script>
        )}
      </Helmet>

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
          {membersWithSlug.map((member, index) => (
            <div
              key={member.slug}
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
                onClick={() => openMember(member.slug)}
                className="mt-auto text-[10px] font-semibold uppercase tracking-[0.22em] text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-navy transition-all"
              >
                Read Bio
              </button>
              <div className="mt-6 h-px w-8 bg-gold/60 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedMember !== null} onOpenChange={(o) => !o && closeMember()}>
        <DialogContent className="bg-navy-800 border border-gold/30 text-ink sm:max-w-[600px] p-0 overflow-hidden">
          {selectedMember && (
            <>
              {/* Header */}
              <div className="relative px-8 pt-10 pb-8 border-b border-white/10 bg-gradient-to-b from-gold/[0.06] via-transparent to-transparent">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden border border-gold/40 bg-gradient-to-br from-gold/20 to-purple/20">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                      style={getImageStyle(selectedMember.name)}
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <div className="eyebrow mb-2 text-gold">{selectedMember.role}</div>
                    <DialogHeader className="space-y-0">
                      <DialogTitle className="font-display text-3xl text-ink leading-tight">
                        {selectedMember.name}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-3 h-px w-10 bg-gold/60" />
                  </div>
                </div>

                {selectedMember.highlights?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedMember.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] uppercase tracking-[0.22em] text-gold-soft border border-gold/30 bg-gold/5 px-2.5 py-1.5"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="px-8 py-7">
                <div className="eyebrow mb-3">Biography</div>
                <DialogDescription className="text-ink-muted text-[15px] leading-[1.75]">
                  {selectedMember.bio}
                </DialogDescription>

                {selectedMember.links && selectedMember.links.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="eyebrow mb-3">Links</div>
                    <ul className="flex flex-col gap-1.5">
                      {selectedMember.links.map((l) => (
                        <li key={l.href}>
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-gold hover:text-ink underline decoration-gold/40 hover:decoration-ink underline-offset-4 transition-colors"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-8 py-5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.24em] text-ink-muted truncate">
                  ecka.holdings/team/{selectedMember.slug}
                </span>
                <button
                  type="button"
                  onClick={copyLink}
                  className="shrink-0 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold border border-gold/40 px-3.5 py-2 hover:bg-gold hover:text-navy transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
                  {copied ? 'Link Copied' : 'Copy Link'}
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamDetails;
