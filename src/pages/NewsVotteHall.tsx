import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const highlights = [
  { value: '50%', label: 'Licensing Interest', note: 'Select master recordings' },
  { value: 'Billboard', label: 'Charting Artist', note: 'Collaborations with AZ & Bankroll Fresh' },
  { value: 'On Air', label: 'Commercial Visibility', note: 'Music currently receiving radio airplay' },
];

const NewsVotteHall = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Ecka Holdings Expands Music Rights Portfolio | Ecka Holdings</title>
      <meta name="description" content="Ecka Holdings secures a 50% licensing interest in select master recordings from Billboard-charting artist Votte Hall." />
      <link rel="canonical" href="https://eckaholdings.com/news/votte-hall" />
    </Helmet>
    <Navigation />
  <main id="main" className="pt-36 pb-20 md:pt-40 md:pb-28">
    <article className="max-w-7xl mx-auto px-6 md:px-8">
      <Link to="/#news" className="inline-block mb-10 text-xs tracking-[0.25em] uppercase text-foreground/60 hover:text-gold transition-colors">← Back to News</Link>
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Portfolio Briefing · Ecka Music Group</p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-6 max-w-5xl text-balance">
        Ecka Holdings Expands Its <span className="italic text-gold">Music Rights Portfolio.</span>
      </h2>
      <p className="text-foreground/60 italic text-base md:text-lg leading-relaxed max-w-3xl mb-12">
        Strategic licensing agreement adds Billboard-charting artist Votte Hall&rsquo;s music to a growing collection of enduring assets.
      </p>

      <div className="grid sm:grid-cols-3 border-y border-gold/20 mb-14">
        {highlights.map((h, i) => (
          <div key={h.label} className={`py-8 sm:px-6 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-gold/20' : ''}`}>
            <p className="font-display text-4xl md:text-5xl text-gold font-light mb-2">{h.value}</p>
            <p className="text-xs tracking-[0.2em] uppercase text-foreground mb-1">{h.label}</p>
            <p className="text-sm text-foreground/50">{h.note}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <blockquote className="md:col-span-4 font-display text-2xl md:text-3xl italic font-light leading-snug text-foreground/90 border-l border-gold pl-6 self-start">
          Like a rare vintage laid down for the decades ahead, great recordings gain their worth through careful stewardship.
        </blockquote>
        <div className="md:col-span-8 space-y-6 text-foreground/70 leading-relaxed text-base md:text-lg">
          <p>
            Ecka Holdings Corp. announces a significant milestone in its music investment strategy, securing a 50% licensing interest in select master recordings from Billboard-charting recording artist Votte Hall.
          </p>
          <p>
            With a recording history that includes collaborations with acclaimed hip-hop artist AZ and the late Bankroll Fresh, along with music currently receiving radio airplay, Votte Hall brings established industry experience and commercial visibility to Ecka Holdings&rsquo; expanding portfolio.
          </p>
          <p>
            Through its music division, Ecka Music Group, the company is building a portfolio of music intellectual property focused on strategic licensing, catalog acquisitions, rights management, and long-term monetization opportunities.
          </p>
          <p>
            This milestone reinforces Ecka Holdings&rsquo; commitment to developing a diversified portfolio of music assets while pursuing strategic partnerships and investment opportunities across the entertainment industry.
          </p>
          <div className="pt-6 border-t border-gold/20">
            <p className="font-display text-xl md:text-2xl italic text-gold mb-2">Building Assets. Expanding Opportunities. Creating Long-Term Value.</p>
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/50">Ecka Holdings Corp. | Music Investments &amp; Intellectual Property</p>
          </div>
          <a href="/#contact" className="inline-block mt-4 text-sm tracking-[0.2em] uppercase text-gold border-b border-gold/50 pb-1 hover:border-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            Inquire About Asset Opportunities →
          </a>
        </div>
      </div>
    </article>
  </main>
    <Footer />
  </div>
);

export default NewsVotteHall;
