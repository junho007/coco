import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { AlipaySection } from './components/AlipaySection';
import { Footer } from './components/Footer';
import { TelegramWidget } from './components/TelegramWidget';
import { CONTENT, PRODUCT_DETAILS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = CONTENT[lang];
  
  // Helper to pick correct language string from details
  const getLangString = (obj: any, keyPrefix: string) => {
    return obj[`${keyPrefix}_${lang}`];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} />

        {/* Pricing/Products Header */}
        <section id="products" className="bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-base font-bold text-primary tracking-wide uppercase">{t.products.title}</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {t.products.subtitle}
                </p>
            </div>
        </section>

        {/* Products List */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 pb-32">
            
            {/* Product 1: Raft */}
            <ProductCard 
                id="product-raft"
                lang={lang}
                content={t.cards.raft}
                labels={t.products}
                // videoSrc="/raft-guide.mp4"  <-- To add video: Uncomment and set path to file in public folder
                details={{
                    fees: getLangString(PRODUCT_DETAILS.raft, 'fees'),
                    settlement: getLangString(PRODUCT_DETAILS.raft, 'settlement'),
                    settlement_method: getLangString(PRODUCT_DETAILS.raft, 'settlement_method'),
                    channels: getLangString(PRODUCT_DETAILS.raft, 'channels'),
                    denominations: PRODUCT_DETAILS.raft.denominations
                }}
            />

            {/* Product 2: Tianxing */}
            <ProductCard 
                id="product-tianxing"
                lang={lang}
                content={t.cards.tianxing}
                labels={t.products}
                // videoSrc="/tianxing-guide.mp4" <-- To add video: Uncomment and set path to file in public folder
                details={{
                    fees: getLangString(PRODUCT_DETAILS.tianxing, 'fees'),
                    settlement: getLangString(PRODUCT_DETAILS.tianxing, 'settlement'),
                    settlement_method: getLangString(PRODUCT_DETAILS.tianxing, 'settlement_method'),
                    channels: getLangString(PRODUCT_DETAILS.tianxing, 'channels'),
                    denominations: PRODUCT_DETAILS.tianxing.denominations
                }}
            />

             {/* Product 3: AFL */}
             <ProductCard 
                id="product-afl"
                lang={lang}
                content={t.cards.afl}
                labels={t.products}
                // videoSrc="/afl-guide.mp4" <-- To add video: Uncomment and set path to file in public folder
                details={{
                    fees: getLangString(PRODUCT_DETAILS.afl, 'fees'),
                    settlement: getLangString(PRODUCT_DETAILS.afl, 'settlement'),
                    settlement_method: getLangString(PRODUCT_DETAILS.afl, 'settlement_method'),
                    channels: getLangString(PRODUCT_DETAILS.afl, 'channels'),
                    denominations: PRODUCT_DETAILS.afl.denominations
                }}
            />

            {/* Product 4: Alipay */}
            <AlipaySection 
                id="product-alipay"
                lang={lang}
                content={t.cards.alipay}
                labels={t.products}
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
