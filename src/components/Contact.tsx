import React from 'react';
import LeadForm from './LeadForm';

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 bg-surface border-t border-gold/10">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <span className="eyebrow-gold mb-6 block">Partnership Inquiries</span>
      <h2 className="font-display text-4xl md:text-6xl font-light leading-tight mb-8 text-balance">
        Begin a <span className="italic text-gold">confidential conversation.</span>
      </h2>
      <p className="text-foreground/60 mb-12 max-w-xl mx-auto leading-relaxed font-light">
        Discuss an asset, a partnership or our investment thesis directly with our executive team.
      </p>
      <LeadForm>
        <button className="px-10 py-4 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors">
          Schedule Intro Call
        </button>
      </LeadForm>
      <p className="mt-10 text-sm text-foreground/50">
        Or email <a href="mailto:info@eckaholdings.com" className="text-gold hover:text-gold-highlight">info@eckaholdings.com</a>
      </p>
    </div>
  </section>
);

export default Contact;
