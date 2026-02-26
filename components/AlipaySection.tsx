import React from 'react';
import { Language, Translation } from '../types';
import { CheckCircle2, QrCode } from 'lucide-react';

interface AlipaySectionProps {
  id: string;
  lang: Language;
  content: Translation['cards']['alipay'];
  details: {
    tiers: Array<{key: string, code: string, amount: string}>;
    rules: string[];
  };
  labels: Translation['products'];
  imageSrc?: string;
}

export const AlipaySection: React.FC<AlipaySectionProps> = ({ id, lang, content, details, labels, imageSrc }) => {
  return (
    <div id={id} className="scroll-mt-24 rounded-2xl border border-transparent overflow-hidden text-white relative" style={{ backgroundColor: '#0e9dec' }}>
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <QrCode className="w-64 h-64 text-white" />
      </div>

      <div className="p-8 lg:p-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-10">
             {/* Square Image Placeholder */}
             <div className="w-32 h-32 bg-white/20 backdrop-blur rounded-xl border border-white/30 flex-shrink-0 flex items-center justify-center overflow-hidden mb-4 md:mb-0 shadow-lg">
                {imageSrc ? (
                    <img src={imageSrc} alt={content.name} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-white/80 text-xs font-medium uppercase text-center p-2">Product Image<br/>(Square)</span>
                )}
            </div>

            <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-wider uppercase mb-3 border border-white/30">
                Direct Collection
                </span>
                <h3 className="text-3xl font-bold mb-2 text-white">{content.name}</h3>
                <p className="text-blue-50 text-lg">{content.desc}</p>
            </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {details.tiers.map((tier) => {
                // @ts-ignore - dynamic key access
                const tierName = content.tiers[tier.key];
                return (
                    <div key={tier.key} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-colors">
                        <h4 className="text-xl font-bold text-white mb-2 min-h-[40px]">{tierName}</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm text-blue-100 uppercase font-semibold">
                                <span>{lang === 'cn' ? '编号' : 'Code'}</span>
                                <span className="text-white font-mono text-lg">{tier.code}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-blue-100 uppercase font-semibold">
                                <span>{lang === 'cn' ? '限额' : 'Limit'}</span>
                                <span className="text-white font-mono font-bold text-lg">{tier.amount}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Rules Section */}
        <div className="bg-black/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                {labels.rules}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {details.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2.5 mr-3 flex-shrink-0"></div>
                        <p className="text-base text-blue-50 leading-relaxed">{rule}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
