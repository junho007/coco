import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../types';
import qrCodeImg from '../assets/qr.png'; 

interface TelegramWidgetProps {
  lang: Language;
}

export const TelegramWidget: React.FC<TelegramWidgetProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show widget after a short delay to not distract from initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Content */}
      <div 
        className={`mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ width: '280px' }}
      >
        <div className="bg-primary p-4 text-white flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">
              {lang === 'en' ? 'Contact Support' : '联系客服'}
            </span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 flex flex-col items-center">
          {/* 👇 2. Text updated to remove the "click below" instruction */}
          <p className="text-gray-600 text-sm text-center mb-4">
            {lang === 'en' 
              ? 'Scan QR code to chat with us on Telegram' 
              : '扫描二维码在 Telegram 上与我们联系'}
          </p>
          
          {/* 👇 3. Your custom QR code image is used here */}
          <div className="w-40 h-40 bg-gray-100 rounded-xl p-2 mb-4 border border-gray-200 flex items-center justify-center">
            <img 
              src={qrCodeImg} 
              alt="Telegram QR Code" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* The link button has been completely removed from here */}
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative ${
          isOpen ? 'bg-primary animate-pulse' : 'bg-primary hover:bg-primary/90'
        }`}
        aria-label="Contact Support"
      >
        {isOpen ? (
          <X className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <MessageCircle className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
        )}
        
        {/* Tooltip for un-opened state */}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {lang === 'en' ? 'Chat with us' : '联系我们'}
          </span>
        )}
      </button>
    </div>
  );
};
