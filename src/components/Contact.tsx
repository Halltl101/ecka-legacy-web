import React from 'react';
import LeadForm from './LeadForm';

const audiences = [
  {
    tag: 'Catalog Sellers',
    body: 'Explore liquidity and stewardship options for your catalog with a discreet, artist-first partner.',
  },
  {
    tag: 'Capital Partners',
    body: 'Institutional co-investment opportunities across acquisition, growth, and structured credit.',
  },
  {
    tag: 'Label & Industry',
    body: 'Joint ventures, publishing partnerships, and long-term catalog collaborations.',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-navy border-t border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-purple/[0.10] blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="eyebrow justify-center inline-flex mb-8 animate-fade-in">Get In Touch</div>
        <h2 className="font-display text-4xl lg:text-6xl text-ink leading-[1.05] mb-6 animate-fade-in animation-delay-300">
          Let's build the next <span className="italic text-gold">legacy</span>.
        </h2>
        <p className="text-ink-muted max-w-2xl mx-auto mb-16 animate-fade-in animation-delay-500">
          Confidential introductions for catalog sellers, capital partners, and industry
          collaborators. Every inquiry is reviewed by a principal.
        </p>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-16 text-left">
          {audiences.map((a) => (
            <div key={a.tag} className="bg-navy p-8">
              <div className="text-[10px] uppercase tracking-[0.24em] text-gold mb-3">{a.tag}</div>
              <p className="text-sm text-ink-muted leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 animate-fade-in animation-delay-700">
          <LeadForm>
            <button className="btn-gold">Schedule Intro Call</button>
          </LeadForm>
          <div className="text-[10px] uppercase tracking-[0.24em] text-ink-subtle">Direct inquiries</div>
          <a
            href="mailto:info@eckaholdings.com"
            className="font-display text-xl text-ink hover:text-gold transition-colors"
          >
            info@eckaholdings.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
