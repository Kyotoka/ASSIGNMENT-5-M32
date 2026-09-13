import React, { useState } from 'react';
import logoText from '../assets/logo-text.png';
import hamburgerIcon from '../assets/hamburger.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 w-full">
      <div className="w-full px-[72.5px]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button 
              className="sm:hidden p-1 text-slate-600 hover:bg-slate-100 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={hamburgerIcon} alt="Menu" className="w-6 h-6 object-contain" />
            </button>
            <img src={logoText} alt="Dev Stack Logo" className="h-8 object-contain" />
          </div>

          <div className="hidden sm:flex space-x-6 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900">Sign In</button>
            <button className="text-sm font-medium text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="sm:hidden px-[72.5px] pt-2 pb-4 space-y-2 border-t border-slate-100 bg-white">
          <a href="#home" className="block text-sm text-slate-600 py-1">Home</a>
          <a href="#technologies" className="block text-sm text-slate-600 py-1">Technologies</a>
          <a href="#projects" className="block text-sm text-slate-600 py-1">Projects</a>
          <a href="#about" className="block text-sm text-slate-600 py-1">About</a>
        </div>
      )}
    </nav>
  );
}