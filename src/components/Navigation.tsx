import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#1A1A1A] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center group mt-4">
            <img 
              src="/lovable-uploads/ceb4005b-d633-46e4-a183-4c991c0095a2.png" 
              alt="Ecka Holdings Logo" 
              className="h-10 w-auto mr-3 transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                console.log('Logo failed to load:', e);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="transition-all duration-300 group-hover:scale-105">
              <span className="text-5xl font-bold text-white transition-colors duration-300 group-hover:text-[#C9A34C]">ECKA</span>
              <span className="text-sm text-gray-400 ml-2 transition-colors duration-300">Holdings Corp</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-[#C9A34C] transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#C9A34C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
            <a href="#why-partner" className="text-gray-300 hover:text-[#C9A34C] transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#C9A34C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Why Partner</a>
            <a href="#team" className="text-gray-300 hover:text-[#C9A34C] transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#C9A34C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-[#C9A34C] transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#C9A34C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#C9A34C] transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-[#1A1A1A] py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-300 hover:text-[#C9A34C] transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#why-partner" 
                className="text-gray-300 hover:text-[#C9A34C] transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Partner
              </a>
              <a 
                href="#team" 
                className="text-gray-300 hover:text-[#C9A34C] transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-[#C9A34C] transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
