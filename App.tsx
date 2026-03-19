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
                imageSrc="/gdc.png" // 👇 Direct path to your public folder
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
                imageSrc="/ark2.png" // 👇 Direct path to your public folder
                details={{
                    fees: getLangString(PRODUCT_DETAILS.ark2, 'fees'),
                    settlement: getLangString(PRODUCT_DETAILS.ark2, 'settlement'),
                    settlement_method: getLangString(PRODUCT_DETAILS.ark2, 'settlement_method'),
                    channels: getLangString(PRODUCT_DETAILS.ark2, 'channels'),
                    denominations: PRODUCT_DETAILS.ark2.denominations
                }}
            />

            {/* Product 3: Tianxing */}
            <ProductCard 
                id="product-tianxing"
                lang={lang}
                content={t.cards.tianxing}
                labels={t.products}
                imageSrc="/tianxing.jpeg" // 👇 Make sure this isn't .jpg in your folder!
                details={{
                    fees: getLangString(PRODUCT_DETAILS.tianxing, 'fees'),
                    settlement: getLangString(PRODUCT_DETAILS.tianxing, 'settlement'),
                    settlement_method: getLangString(PRODUCT_DETAILS.tianxing, 'settlement_method'),
                    channels: getLangString(PRODUCT_DETAILS.tianxing, 'channels'),
                    denominations: PRODUCT_DETAILS.tianxing.denominations
                }}
            />

            {/* Product 4: Alipay */}
            <AlipaySection 
                id="product-alipay"
                lang={lang}
                content={t.cards.alipay}
                labels={t.products}
                imageSrc="/alipay.jpg" // 👇 Added the missing prop here!
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
