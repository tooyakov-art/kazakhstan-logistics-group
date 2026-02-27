import React from 'react';
import { CONTACT_INFO } from '../constants';
import { PhoneCall } from 'lucide-react';

export const SpaceFeatureSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-black/40 z-10"></div>
           <img 
            src="https://framerusercontent.com/images/aq43lPbaMhE2HtTXygvLshgkzAs.png?scale-down-to=512&width=1024&height=1024" 
            alt="РџСЂРѕСЃС‚РѕСЂРЅРѕРµ СЃРєР»Р°РґСЃРєРѕРµ РїРѕРјРµС‰РµРЅРёРµ" 
            className="w-full h-[500px] md:h-[600px] object-cover"
           />
           <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/30">
                  Р“РѕС‚РѕРІС‹ Рє Р·Р°СЃРµР»РµРЅРёСЋ
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg leading-tight">
                РРґРµР°Р»СЊРЅРѕРµ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ<br/>РґР»СЏ РІР°С€РµРіРѕ Р±РёР·РЅРµСЃР°
              </h2>
              <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl drop-shadow-md">
                 РџСЂРѕСЃС‚РѕСЂРЅС‹Рµ, СЃРІРµС‚Р»С‹Рµ Рё С‡РёСЃС‚С‹Рµ СЃРєР»Р°РґС‹ СЃ Р°РЅС‚РёРїС‹Р»РµРІС‹Рј РїРѕРєСЂС‹С‚РёРµРј.
                 <br className="hidden md:block" />РџРѕР»РЅРѕСЃС‚СЊСЋ РіРѕС‚РѕРІС‹ Рє РїСЂРёРµРјСѓ РіСЂСѓР·РѕРІ Р»СЋР±РѕРіРѕ РіР°Р±Р°СЂРёС‚Р°.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold border border-white/30">3РџР› СѓСЃР»СѓРіРё</span>
                <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold border border-white/30">WMS СѓСЃР»СѓРіРё</span>
                <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold border border-white/30">РЎС‚РµР»Р»Р°Р¶Рё</span>
              </div>
              <a href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, '')}`}>
                 <button className="bg-white text-brand-blue px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 flex items-center justify-center gap-3 shadow-lg">
                    <PhoneCall size={24} />
                    <span>РђСЂРµРЅРґРѕРІР°С‚СЊ СЃРµР№С‡Р°СЃ</span>
                 </button>
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};
