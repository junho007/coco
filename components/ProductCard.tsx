import React from 'react';
import { Play } from 'lucide-react';
import { Language, Translation } from '../types';

interface ProductCardProps {
  id: string;
  lang: Language;
  content: {
    name: string;
    type: string;
    desc: string;
  };
  details: {
    fees: string;
    settlement: string;
    settlement_method: string;
    channels: string;
    denominations: string[];
  };
  labels: Translation['products'];
  imageSrc?: string;
  videoSrc?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, lang, content, details, labels, imageSrc, videoSrc }) => {
  return (
    <div id={id} className="scroll-mt-24 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row">
      
      {/* Content Side */}
      <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mb-8">
            {/* Square Image Placeholder */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-2xl border border-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden mb-6 md:mb-0 shadow-sm">
                {imageSrc ? (
                    <img src={imageSrc} alt={content.name} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-400 text-sm font-bold uppercase text-center p-2">Product<br/>Image</span>
                )}
            </div>

            <div className="flex-1">
                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-primary text-sm font-bold tracking-wider uppercase mb-4">
                    {content.type}
                </span>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">{content.name}</h3>
                <p className="text-gray-500 text-xl leading-relaxed">{content.desc}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
          <div className="space-y-6">
             <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{labels.fees}</h4>
                <p className="text-3xl font-bold text-gray-900">{details.fees}</p>
             </div>
             <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{labels.settlement}</h4>
                <p className="text-lg font-semibold text-gray-900">{details.settlement}</p>
                <p className="text-base text-gray-500 mt-1">{details.settlement_method}</p>
             </div>
             <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{labels.channels}</h4>
                <p className="text-lg font-medium text-gray-900 leading-snug">{details.channels}</p>
             </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{labels.denominations}</h4>
            <div className="flex flex-wrap gap-3">
              {details.denominations.map((denom, idx) => (
                <span key={idx} className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white text-gray-700 border border-gray-200 shadow-sm">
                  {denom}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Side - Enforce 9:16 Aspect Ratio */}
      <div className="lg:w-[360px] bg-gray-900 relative group overflow-hidden flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
         <div className="w-full aspect-[9/16] relative bg-black">
            {videoSrc ? (
               // Video Player
                <video 
                    key={videoSrc}
                    controls 
                    className="w-full h-full object-cover" 
                    playsInline
                    preload="metadata"
                    poster={imageSrc}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                // Video Placeholder / Call to Action
                <div className="w-full h-full relative bg-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black opacity-90 z-10"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-transform duration-500 cursor-default">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl mb-6">
                            <Play className="w-8 h-8 text-white/50 fill-white/50 ml-1" />
                        </div>
                        <div className="text-center px-8">
                             <p className="text-white/80 font-bold text-xl mb-2">{labels.videoGuide}</p>
                             <p className="text-gray-500 text-sm leading-relaxed">Coming soon</p>
                        </div>
                    </div>
                </div>
            )}
         </div>
      </div>
    </div>
  );
};
