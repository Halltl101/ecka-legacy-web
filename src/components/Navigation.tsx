import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const links = [
  { href: '#about', label: 'About' },
  { href: '#why-partner', label: 'Why Partner' },
  { href: '/team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const CARTA_URL = 'https://login.app.carta.com/credentials/login/';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = (href: string) => href.startsWith('/') && pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/lovable-uploads/ceb4005b-d633-46e4-a183-4c991c0095a2.png"
              alt="Ecka Holdings"
              className="h-8 w-auto"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <span className="font-display text-xl md:text-2xl font-semibold tracking-[0.25em] text-gold group-hover:text-gold-highlight transition-colors">
              ECKA
            </span>
            <span className="hidden sm:inline-block text-[10px] tracking-[0.3em] uppercase text-foreground/50 border-l border-gold/20 pl-3">
              Holdings Corp
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase font-medium text-foreground/70">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-gold after:transition-transform after:duration-500 ${
                  isActive(l.href)
                    ? 'text-gold after:origin-left after:scale-x-100'
                    : 'hover:text-gold-highlight after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={CARTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.25em] uppercase text-foreground/80 hover:text-gold transition-colors"
            >
              Investor Login
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors"
            >
              Schedule Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground hover:text-gold transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden border-t border-gold/10 py-6 animate-fade-in">
            <div className="flex flex-col gap-5 text-xs tracking-[0.25em] uppercase">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`transition-colors ${
                    isActive(l.href) ? 'text-gold' : 'text-foreground/70 hover:text-gold'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CARTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-gold hover:text-gold-highlight transition-colors"
              >
                Investor Login
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block w-fit px-5 py-2 bg-gold text-background font-bold hover:bg-gold-highlight transition-colors"
              >
                Schedule Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
