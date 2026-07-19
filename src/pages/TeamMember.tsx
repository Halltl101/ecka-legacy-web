import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SITE_URL, getTeamMember, getImageStyle, teamMembers } from '@/data/team';

const TeamMember = () => {
  const { slug = '' } = useParams();
  const member = getTeamMember(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!member) return <Navigate to="/team" replace />;

  const pageUrl = `${SITE_URL}/team/${member.slug}`;
  const imageUrl = `${SITE_URL}${member.image}`;
  const title = `${member.name} — ${member.role} | Ecka Holdings`;
  const description = member.bio;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#profilepage`,
        url: pageUrl,
        name: title,
        description,
        mainEntity: { '@id': `${pageUrl}#person` },
        isPartOf: { '@id': `${SITE_URL}#website` },
      },
      {
        '@type': 'Person',
        '@id': `${pageUrl}#person`,
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        image: imageUrl,
        url: pageUrl,
        worksFor: {
          '@type': 'Organization',
          name: 'Ecka Holdings',
          url: SITE_URL,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Leadership Team', item: `${SITE_URL}/team` },
          { '@type': 'ListItem', position: 3, name: member.name, item: pageUrl },
        ],
      },
    ],
  };

  const others = teamMembers.filter(m => m.slug !== member.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="profile:first_name" content={member.name.split(' ')[0]} />
        <meta property="profile:last_name" content={member.name.split(' ').slice(1).join(' ')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={pageUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navigation />

      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-24 pb-16">
        <div className="mb-8 animate-fade-in">
          <Link to="/team" className="gold-link">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Leadership
          </Link>
        </div>

        <article className="bg-surface border border-gold/15 p-8 md:p-14 animate-fade-in">
          <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start">
            <div className="w-48 h-48 md:w-60 md:h-60 mx-auto md:mx-0 rounded-full overflow-hidden ring-1 ring-gold/40 ring-offset-4 ring-offset-surface">
              <img
                src={member.image}
                alt={`${member.name}, ${member.role} at Ecka Holdings`}
                className="w-full h-full object-cover"
                style={getImageStyle(member.name)}
              />
            </div>
            <div>
              <span className="eyebrow-gold mb-4 block">{member.role}</span>
              <h1 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">
                {member.name}
              </h1>
              <div className="w-12 h-px bg-gold mb-6" />
              <p className="text-lg text-foreground/70 leading-relaxed font-light">
                {member.bio}
              </p>
            </div>
          </div>
        </article>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-light mb-6 text-center">Other Leadership</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {others.map(m => (
              <Link
                key={m.slug}
                to={`/team/${m.slug}`}
                className="group text-center focus:outline-none"
              >
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden ring-1 ring-gold/30 group-hover:ring-gold transition-all">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" style={getImageStyle(m.name)} />
                </div>
                <p className="font-display text-base group-hover:text-gold transition-colors">{m.name}</p>
                <p className="text-xs text-foreground/50">{m.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamMember;
