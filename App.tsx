import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { AlipaySection } from './components/AlipaySection';
import { Footer } from './components/Footer';
import { TelegramWidget } from './components/TelegramWidget';
import { CONTENT, PRODUCT_DETAILS } from './constants';
import { Language } from './types';

import gdcImg from './assets/gdc.png';
import ark2Img from './assets/ark2.png';
import tianxingImg from './assets/tianxing.jpeg';
import alipayImg from './assets/alipay.jpg';
import raftImg from './assets/raft.jpeg';

import gdcVideo from './assets/gdc.mp4';
import raftVideo from './assets/raft.mp4';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = CONTENT[lang];
  
  const getLangString = (obj: any, keyPrefix: string) => {
    return obj[`${keyPrefix}_${lang}`];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />

        <section id="products" className="bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-base font-bold text-primary tracking-wide uppercase">{t.products.title}</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {t.products.subtitle}
                </p>
                {t.products.description && (
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
                    {t.products.description}
                  </p>
                )}
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 pb-32">
            
            {/* Product 1: GDC */}
            <ProductCard 
                id="product-gdc"
                lang={lang}
                content={t.cards.gdc}
                labels={t.products}
                imageSrc={gdcImg} 
                videoSrc={gdcVideo}
                details={{
                    fees: getLangString(PRODUCT_DETAILS.gdc, 'fees'),
                    settlement: getLangString(PRODUCT_DETAILS.gdc, 'settlement'),
                    settlement_method: getLangString(PRODUCT_DETAILS.gdc, 'settlement_method'),
                    channels: getLangString(PRODUCT_DETAILS.gdc, 'channels'),
                    denominations: PRODUCT_DETAILS.gdc.denominations
                }}
            />

             {/* Product 2: Ark2 */}
             <ProductCard 
                id="product-ark2"
                lang={lang}
                content={t.cards.ark2}
                labels={t.products}
                imageSrc={ark2Img} 
                details={{
                    fees: getLangString(PRODUCT_DETAILS.ark2, 'fees'),
                    settlement: getLangString(PRODUCT_DETAILS.ark2, 'settlement'),
                    settlement_method: getLangString(PRODUCT_DETAILS.ark2, 'settlement_method'),
                    channels: getLangString(PRODUCT_DETAILS.ark2, 'channels'),
                    denominations: PRODUCT_DETAILS.ark2.denominations
                }}
            />

            {/* Product 3: Raft Card */}
            <ProductCard 
                id="product-raft-card"
                lang={lang}
                content={t.cards.raft_card}
                labels={t.products}
                imageSrc={raftImg} 
                videoSrc={raftVideo}
                details={{
                    fees: getLangString(PRODUCT_DETAILS.raft_card, 'fees'),
                    settlement: getLangString(PRODUCT_DETAILS.raft_card, 'settlement'),
                    settlement_method: getLangString(PRODUCT_DETAILS.raft_card, 'settlement_method'),
                    channels: getLangString(PRODUCT_DETAILS.raft_card, 'channels'),
                    denominations: PRODUCT_DETAILS.raft_card.denominations
                }}
            />
          
            {/* Product 4: Alipay */}
            <AlipaySection 
                id="product-alipay"
                lang={lang}
                content={t.cards.alipay}
                labels={t.products}
                imageSrc={alipayImg} 
                details={{
                    tiers: PRODUCT_DETAILS.alipay.tiers,
                    rules: getLangString(PRODUCT_DETAILS.alipay, 'rules')
                }}
            />

        </section>
      </main>

      <Footer />
      <TelegramWidget lang={lang} />
    </div>
  );
};

export default App;
