import React from 'react';

const Navigation = () => {
  const handleInvestorLogin = () => {
    window.open('https://login.app.carta.com/credentials/login/?_gl=1*6wvs0v*_gcl_au*MTYyMTk5MjUwMi4xNzUwMzgzMDYy*_ga*MTAyMjQxNDk5MC4xNzUwMzgzMDYy*_ga_HB6KGNG78T*czE3NTAzODMwNjIkbzEkZzAkdDE3NTAzODMwNjIkajYwJGwwJGgw&_ga=2.175256101.62353039.1750383063-1022414990.1750383062', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#1A1A1A] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center group">
            <img 
              src="/ecka-logo.png" 
              alt="Ecka Holdings Logo" 
              className="h-10 w-auto mr-3 transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                console.log('Logo failed to load:', e);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="transition-all duration-300 group-hover:scale-105">
              <span className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#C9A34C]">ECKA</span>
              <span className="text-sm text-gray-400 ml-2 transition-colors duration-300">Holdings Corp</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-[#C9A34C] transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#C9A34C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
            <a href="#why-partner" className="text-gray-300 hover:text-[#C9A34C] transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#C9A34C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Why Partner</a>
            <a href="#team" className="text-gray-300 hover:text-[#C9A34C] transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#C9A34C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-[#C9A34C] transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#C9A34C] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a>
            <button 
              onClick={handleInvestorLogin}
              className="bg-[#C9A34C] hover:bg-[#B8923E] text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              Investor Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
