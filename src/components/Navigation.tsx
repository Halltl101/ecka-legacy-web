
import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">ECKA</span>
            <span className="text-sm text-slate-400 ml-2">Holdings Corp</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#why-partner" className="text-slate-300 hover:text-white transition-colors">Why Partner</a>
            <a href="#team" className="text-slate-300 hover:text-white transition-colors">Team</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Request Overview
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
