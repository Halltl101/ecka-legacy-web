
import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/337120fa-d457-4de5-9025-24045ffd0228.png" 
              alt="Ecka Holdings Logo" 
              className="h-10 w-auto mr-3"
            />
            <div>
              <span className="text-2xl font-bold text-white">ECKA</span>
              <span className="text-sm text-gray-400 ml-2">Holdings Corp</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-[#C9A34C] transition-colors">About</a>
            <a href="#why-partner" className="text-gray-300 hover:text-[#C9A34C] transition-colors">Why Partner</a>
            <a href="#team" className="text-gray-300 hover:text-[#C9A34C] transition-colors">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-[#C9A34C] transition-colors">Contact</a>
            <button className="bg-[#C9A34C] hover:bg-[#B8923E] text-black px-6 py-2 rounded-lg font-semibold transition-colors">
              Request Overview
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
