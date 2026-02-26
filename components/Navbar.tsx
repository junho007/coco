import React, { useEffect, useState } from 'react';
import { Language, Translation } from '../types';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'cn' : 'en');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-[#111827] shadow-lg py-0' : 'bg-transparent py-2'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. LEFT SIDE: Main Logo (Click to go top) */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={logo} alt="Cocopay Logo" className="h-10 w-auto" />
          </div>
          
          {/* CENTER: Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button onClick={() => scrollToSection('product-raft')} className="text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-semibold transition-all">
                {t.raft}
              </button>
              <button onClick={() => scrollToSection('product-tianxing')} className="text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-semibold transition-all">
                {t.tianxing}
              </button>
              <button onClick={() => scrollToSection('product-afl')} className="text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-semibold transition-all">
                {t.afl}
              </button>
              <button onClick={() => scrollToSection('product-alipay')} className="text-gray-200 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-semibold transition-all">
                {t.alipay}
              </button>
            </div>
          </div>

          {/* 2. RIGHT SIDE: Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleLang}
              className="flex items-center text-gray-200 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
            >
              <Globe className="w-5 h-5 mr-2" />
              <span className="uppercase text-sm font-bold">{lang === 'cn' ? '中文' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111827] border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('product-raft')} className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {t.raft}
            </button>
            <button onClick={() => scrollToSection('product-tianxing')} className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {t.tianxing}
            </button>
             <button onClick={() => scrollToSection('product-afl')} className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {t.afl}
            </button>
             <button onClick={() => scrollToSection('product-alipay')} className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              {t.alipay}
            </button>
            <button 
              onClick={toggleLang}
              className="w-full text-left flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              <Globe className="w-5 h-5 mr-2" />
              {lang === 'cn' ? '切换语言 (EN)' : 'Switch Language (中文)'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
