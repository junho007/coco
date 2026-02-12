import React from 'react';
import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Logo Image */}
          <img 
            src={logo} 
            alt="Cocopay Logo" 
            className="h-8 w-auto"
          />
          <p className="mt-4 text-sm text-gray-500">© 2026 COCOPAY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
