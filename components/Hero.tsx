import React from 'react';
import { Translation } from '../types';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

interface HeroProps {
  t: Translation['hero'];
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <div className="relative bg-[#111827] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 mb-8 transform hover:scale-105 transition-transform duration-300 cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-orange-200 tracking-wide uppercase">
            {t.badge}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          {t.title} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
             
          </span>
          <span className="text-primary">{t.titleHighlight}</span>
        </h1>

        <p className="mt-4 max-w-2xl text-xl text-gray-400 mb-10 leading-relaxed">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transform transition-all hover:-translate-y-1 text-center">
            {t.ctaPrimary}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-400 text-sm font-semibold tracking-wide uppercase">
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>{t.features.pci}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
             <Zap className="w-5 h-5 text-primary" />
            <span>{t.features.payouts}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
             <Globe className="w-5 h-5 text-primary" />
            <span>{t.features.global}</span>
          </div>
        </div>
      </div>
    </div>
  );
};