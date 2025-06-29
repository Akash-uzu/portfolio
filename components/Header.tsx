import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItemClasses = "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
             <a href="#hero" className="text-xl font-bold text-emerald-400">Akash E</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className={navItemClasses}>About</a>
              <a href="#skills" className={navItemClasses}>Skills</a>
              <a href="#experience" className={navItemClasses}>Experience</a>
              <a href="#projects" className={navItemClasses}>Projects</a>
              <a href="#contact" className={navItemClasses}>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;