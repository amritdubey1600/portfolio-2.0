'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experiences' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to section
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg shadow-orange-500/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo/Brand */}
            <div className="flex-shrink-0 relative group">
              <a 
                href="#home" 
                className="text-xl lg:text-2xl font-bold text-white hover:text-orange-400 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="relative bottom-0.5">
                  Amrit Dubey
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/0 via-orange-400/20 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="group relative flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="relative">
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300" />
                  </span>
                </button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <button 
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 border border-slate-600/50 hover:border-orange-400/50 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm bg-slate-900/20 hover:bg-slate-900/40 overflow-hidden"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ExternalLink className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Resume</span>
              </button>
              
              <button 
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30 overflow-hidden"
                onClick={() => handleNavClick('#contact')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Mail className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Contact</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative inline-flex items-center justify-center p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-400/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {isOpen ? (
                  <X className="w-6 h-6 relative z-10" />
                ) : (
                  <Menu className="w-6 h-6 relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="relative bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-orange-600/5" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
            
            <div className="relative px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="group w-full flex items-center justify-between px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/30 transition-all duration-300 border-b border-slate-800/30 last:border-b-0"
                >
                  <span className="text-base font-medium">{item.name}</span>
                  <div className="w-2 h-2 bg-orange-400/40 group-hover:bg-orange-400 rounded-full transition-colors duration-300" />
                </button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <button 
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-600/50 hover:border-orange-400/50 text-slate-300 hover:text-white font-medium transition-all duration-300 backdrop-blur-sm bg-slate-900/20 hover:bg-slate-900/40 overflow-hidden"
                  onClick={() => {
                    setIsOpen(false);
                    window.open('/resume.pdf', '_blank');
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ExternalLink className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">View Resume</span>
                </button>
                
                <button 
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 overflow-hidden"
                  onClick={() => handleNavClick('#contact')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Mail className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Get In Touch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}