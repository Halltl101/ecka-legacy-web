import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src="/lovable-uploads/ceb4005b-d633-46e4-a183-4c991c0095a2.png"
            alt="Ecka Holdings Logo"
            className="h-8 w-auto mr-3"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div>
            <span className="text-2xl font-bold text-white">ECKA</span>
            <span className="text-sm text-gray-400 ml-2">Holdings Corp</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="https://www.linkedin.com/company/eckaholdings/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ecka Holdings on LinkedIn"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/eckaholdings?igsh=YWR2Z3JwcDlxdDl5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ecka Holdings on Instagram"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p className="text-gray-400">
          © 2025 Ecka Holdings Corp. All rights reserved. | Turning Assets to Legacy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
