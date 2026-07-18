import React from 'react';
import LeadForm from './LeadForm';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface border-t border-gold/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="eyebrow-gold mb-6 block animate-fade-in">Partnership Inquiries</span>
        <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8 animate-fade-in animation-delay-200">
          Inquire for <span className="italic text-gold">Partnership.</span>
        </h2>
        <p className="text-lg text-foreground/60 mb-14 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in animation-delay-300">
          Explore our portfolio strategies or discuss institutional partnership opportunities with our executive team — every inquiry is handled with strict confidentiality.
        </p>

        <div className="flex justify-center mb-16 animate-fade-in animation-delay-500">
          <div className="bg-background border border-gold/30 p-10 md:p-12 max-w-md w-full">
            <h3 className="font-display text-3xl font-light mb-4">Schedule a Call</h3>
            <p className="text-foreground/60 leading-relaxed mb-8 font-light">
              Book a confidential discussion about our current opportunities and investment thesis.
            </p>
            <LeadForm>
              <button className="w-full px-8 py-4 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors">
                Schedule Intro Call
              </button>
            </LeadForm>
          </div>
        </div>

        <div className="animate-fade-in animation-delay-700">
          <p className="eyebrow mb-3">Direct Inquiries</p>
          <a
            href="mailto:info@eckaholdings.com"
            className="font-display text-2xl md:text-3xl italic text-gold hover:text-gold-highlight transition-colors"
          >
            info@eckaholdings.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
