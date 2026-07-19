import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/lovable-uploads/ceb4005b-d633-46e4-a183-4c991c0095a2.png"
                alt="Ecka Holdings"
                className="h-7 w-auto"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span className="font-display text-xl font-semibold tracking-[0.25em] text-gold">ECKA</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/50 border-l border-gold/20 pl-3">
                Holdings Corp
              </span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed font-light">
              Premier investment management specializing in the acquisition and stewardship of culturally significant intellectual property assets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="eyebrow-gold mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#why-partner" className="hover:text-gold transition-colors">Why Partner</a></li>
              <li><a href="#team" className="hover:text-gold transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="eyebrow-gold mb-6">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/eckaholdings/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ecka Holdings on LinkedIn"
                className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:border-gold hover:bg-gold hover:text-background transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/eckaholdings?igsh=YWR2Z3JwcDlxdDl5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ecka Holdings on Instagram"
                className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:border-gold hover:bg-gold hover:text-background transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-foreground/40">
          <span>&copy; 2025 Ecka Holdings Corp. All rights reserved.</span>
          <span className="italic tracking-normal font-display text-sm text-gold/70 normal-case">Turning Assets to Legacy.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
