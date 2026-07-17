import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import LeadForm from './LeadForm';

const links = [
  { href: '#about', label: 'Approach' },
  { href: '#why-partner', label: 'Portfolio' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'bg-navy/85 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src="/lovable-uploads/ceb4005b-d633-46e4-a183-4c991c0095a2.png"
              alt="Ecka Holdings"
              className="h-8 w-auto opacity-90 group-hover:opacity-100 transition"
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />
            <span className="font-display text-xl tracking-tight text-ink">
              Ecka<span className="text-gold">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.22em] text-ink-muted hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="h-4 w-px bg-white/10" />
            <LeadForm>
              <button className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-navy transition-all">
                Partner With Us
              </button>
            </LeadForm>
          </div>

          <button
            className="md:hidden text-ink hover:text-gold transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2 animate-fade-in">
            <div className="flex flex-col gap-1 border-t border-white/5 pt-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3">
                <LeadForm>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-full text-[10px] font-semibold uppercase tracking-[0.22em] text-navy bg-gold px-4 py-3"
                  >
                    Partner With Us
                  </button>
                </LeadForm>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
