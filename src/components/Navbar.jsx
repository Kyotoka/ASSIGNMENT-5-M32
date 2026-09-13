import { useState } from 'react';
import logoText from '../assets/logo-text.png';
import hamburgerIcon from '../assets/hamburger.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100 w-full">
      {/* Side padding matched to px-2 sm:px-3 lg:px-4 */}
      <div className="w-full px-2 sm:px-3 lg:px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Left: Hamburger (Mobile) / Logo (Desktop) */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              className="lg:hidden p-1.5 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <img src={hamburgerIcon} alt="Menu" className="w-6 h-6 object-contain" />
            </button>
            <img 
              src={logoText} 
              alt="Dev Stack Logo" 
              className="hidden lg:block h-7 sm:h-8 object-contain" 
            />
          </div>

          {/* Center: Mobile Logo */}
          <div className="flex lg:hidden justify-center items-center min-w-0 flex-1 px-2">
            <img src={logoText} alt="Dev Stack Logo" className="h-6 sm:h-7 object-contain max-w-full" />
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex space-x-6 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button className="text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 px-1.5 py-1 whitespace-nowrap">
              Sign In
            </button>
            <button className="text-xs sm:text-sm font-medium text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 shadow-sm transition-opacity whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="lg:hidden px-2 sm:px-3 pt-3 pb-5 space-y-3 border-t border-slate-100 bg-white shadow-lg">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-600 hover:text-slate-900">Home</a>
          <a href="#technologies" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-600 hover:text-slate-900">Technologies</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-600 hover:text-slate-900">Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-600 hover:text-slate-900">About</a>
        </div>
      )}
    </nav>
  );
}