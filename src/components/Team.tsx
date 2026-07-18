import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl animate-fade-in mb-16">
          <span className="eyebrow-gold mb-6 block">Leadership</span>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8">
            The people behind <span className="italic text-gold">the legacy.</span>
          </h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light max-w-2xl">
            Thought leaders with unparalleled access to capital, industry reach, and deep expertise across entertainment, finance, and law.
          </p>
        </div>

        <Link
          to="/team"
          className="group relative block border border-gold/20 hover:border-gold/60 transition-colors duration-500 animate-fade-in animation-delay-300"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
              <img
                src="/lovable-uploads/8cbf983b-94cd-46e7-8d2b-4ab72a205152.png"
                alt="Atlanta skyline at dusk"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-[2500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background md:bg-gradient-to-r md:from-transparent md:to-background/40" />
            </div>

            <div className="p-10 md:p-14 flex flex-col justify-center bg-surface">
              <span className="eyebrow-gold mb-6">Executive Team</span>
              <h3 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
                Meet the leadership <br />
                <span className="italic text-gold-highlight">shaping Ecka.</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-10 font-light">
                Harvard Business School graduates, Billboard alumni, Grammy-nominated managers, and veterans of landmark deals including Queen&rsquo;s catalog sale.
              </p>
              <span className="gold-link">
                View leadership team
                <svg className="ml-3 w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Team;
