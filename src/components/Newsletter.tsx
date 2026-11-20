import React, { useState } from 'react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const emailSchema = z.string().trim().email().max(255);

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) { setStatus('error'); setMessage('Please enter a valid email address.'); return; }
    setStatus('saving');
    const { error } = await supabase.from('newsletter_subscribers').insert({ email: parsed.data.toLowerCase() });
    if (error && error.code !== '23505') { setStatus('error'); setMessage('Something went wrong. Please try again.'); return; }
    setStatus('done');
    if (!error) window.__lovableEvents?.track?.("project.newsletter_signup", {});
    setMessage(error ? "You're already on the list — thank you." : "Thank you. You're subscribed to the Ecka Newsletter.");
    setEmail('');
  };

  return (
    <section id="newsletter" aria-labelledby="newsletter-heading" className="bg-surface border-t border-gold/10 py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="eyebrow-gold mb-4 block">Ecka Newsletter</span>
        <h2 id="newsletter-heading" className="font-display text-4xl md:text-5xl font-light leading-tight mb-4">
          Stay <span className="italic text-gold">Informed.</span>
        </h2>
        <p className="text-foreground/60 font-light leading-relaxed mb-8 max-w-xl mx-auto">
          Portfolio briefings, market perspective, and select opportunities — delivered to your inbox.
        </p>
        {status === 'done' ? (
          <p role="status" className="font-display text-2xl italic text-gold">{message}</p>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input id="newsletter-email" type="email" required maxLength={255} value={email}
              onChange={e => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
              placeholder="you@company.com"
              className="flex-1 h-12 px-4 bg-background border border-gold/20 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold" />
            <button type="submit" disabled={status === 'saving'}
              className="h-12 px-8 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors disabled:opacity-60">
              {status === 'saving' ? 'Joining…' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && <p role="alert" className="text-sm text-destructive mt-3">{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
