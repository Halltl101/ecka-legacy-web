import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const links = [
  { href: '#about', label: 'About' },
  { href: '#why-partner', label: 'Why Partner' },
  { href: '/team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const CARTA_URL = 'https://login.app.carta.com/credentials/login/';

// Consistent keyboard focus ring for all interactive nav elements
const focusRing =
  'focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  const resolveHref = (href: string) =>
    href.startsWith('#') && pathname !== '/' ? `/${href}` : href;
  const isActive = (href: string) => href.startsWith('/') && pathname === href;

  // Close the mobile sheet whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the mobile sheet and restores focus to the toggle
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      // Simple focus trap inside the open sheet
      if (e.key === 'Tab' && sheetRef.current && toggleRef.current) {
        const focusables = [
          toggleRef.current,
          ...Array.from(
            sheetRef.current.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled])'
            )
          ),
        ];
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-gold/10"
    >
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-gold focus:text-background focus:text-xs focus:font-bold focus:uppercase focus:tracking-[0.25em]"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark */}
          <a
            href="#"
            aria-label="Ecka Holdings — Home"
            className={`flex items-center gap-3 group rounded-sm ${focusRing}`}
          >
            <img
              src="/lovable-uploads/ceb4005b-d633-46e4-a183-4c991c0095a2.png"
              alt=""
              aria-hidden="true"
              className="h-8 w-auto"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <span className="font-display text-xl md:text-2xl font-semibold tracking-[0.25em] text-gold group-hover:text-gold-highlight transition-colors">
              ECKA
            </span>
            <span className="hidden xl:inline-block text-[10px] tracking-[0.3em] uppercase text-foreground/50 border-l border-gold/20 pl-3 whitespace-nowrap">
              Holdings Corp
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-medium text-foreground/70 list-none m-0 p-0">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={resolveHref(l.href)}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`relative whitespace-nowrap rounded-sm py-1 transition-colors ${focusRing} after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-px after:w-full after:bg-gold after:transition-transform after:duration-500 ${
                    isActive(l.href)
                      ? 'text-gold after:origin-left after:scale-x-100'
                      : 'hover:text-gold-highlight after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={CARTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`whitespace-nowrap text-xs tracking-[0.25em] uppercase text-foreground/80 hover:text-gold transition-colors rounded-sm py-1 ${focusRing}`}
            >
              Investor Login
            </a>
            <a
              href={resolveHref('#contact')}
              className={`whitespace-nowrap px-5 py-2.5 bg-gold text-background text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold-highlight transition-colors ${focusRing}`}
            >
              Schedule Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            className={`lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 text-foreground hover:text-gold transition-colors rounded-sm ${focusRing}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div
            id="mobile-nav"
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-gold/10 py-2 animate-fade-in"
          >
            <ul className="flex flex-col text-xs tracking-[0.25em] uppercase list-none m-0 p-0">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={resolveHref(l.href)}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.href) ? 'page' : undefined}
                    className={`py-3 min-h-11 flex items-center border-b border-gold/5 rounded-sm transition-colors ${focusRing} ${
                      isActive(l.href) ? 'text-gold' : 'text-foreground/70 hover:text-gold'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CARTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`py-3 min-h-11 flex items-center border-b border-gold/5 rounded-sm text-gold hover:text-gold-highlight transition-colors ${focusRing}`}
                >
                  Investor Login
                </a>
              </li>
              <li>
                <a
                  href={resolveHref('#contact')}
                  onClick={() => setOpen(false)}
                  className={`mt-4 mb-2 inline-flex items-center justify-center w-full min-h-11 px-5 py-3 bg-gold text-background font-bold hover:bg-gold-highlight transition-colors ${focusRing}`}
                >
                  Schedule Call
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
