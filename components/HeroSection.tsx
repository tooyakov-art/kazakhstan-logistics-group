import React from 'react';
import { MessageCircle, PhoneCall, ShieldCheck, Warehouse } from 'lucide-react';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';

export const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="relative bg-gradient-to-b from-blue-50 via-white to-white min-h-[750px] flex items-center pt-20 overflow-hidden">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-50 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-60 blur-3xl z-0"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0056b3 1px, transparent 1px), linear-gradient(90deg, #0056b3 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content Block */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-gray-600 text-xs font-bold tracking-widest uppercase">
                Свободные площади в наличии
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-tight">
              Складские помещения <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-600">Класса А и Б</span>
            </h1>
            
            <div className="text-lg text-gray-700 mb-10 leading-relaxed max-w-lg space-y-2 font-medium">
              <p>1. МОРОЗИЛЬНЫЕ КАМЕРЫ (0…–18°C) 6000 м² (камеры ОТ 172м² ДО 216м²)</p>
              <p>2. ХОЛОДИЛЬНЫЕ КАМЕРЫ (0…+8°C) 6000 м² (камеры ОТ 172м² ДО 216м²)</p>
              <p>3. СУХИЕ СКЛАДЫ 25 000 м²</p>
              <p>4. БЛОКИ ОТ 172 м² ДО 4000 м²</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, '')}`} className="w-full sm:w-auto">
                <Button className="w-full h-14 text-lg font-bold bg-brand-blue text-white shadow-xl hover:bg-blue-700 active:bg-blue-800 transition-colors" icon={<PhoneCall size={22} />}>
                   {CONTACT_INFO.phones[0]}
                </Button>
              </a>
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full h-14 px-8 text-lg font-bold bg-[#25D366] text-white rounded-xl shadow-xl hover:bg-[#1ebe57] active:bg-[#1aa84c] transition-all duration-300 flex items-center justify-center gap-3 group">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Оставить заявку
                </button>
              </a>
            </div>

            <div className="mt-16 flex items-center gap-8 text-gray-400">
               <div className="flex items-center gap-2">
                  <ShieldCheck className="text-brand-blue" /> <span>Охрана 24/7</span>
               </div>
               <div className="w-px h-6 bg-gray-300"></div>
               <div className="flex items-center gap-2">
                  <Warehouse className="text-brand-blue" /> <span>Ж/Д тупик</span>
               </div>
            </div>
          </div>

          {/* Right side visual */}
          <div className="hidden lg:block relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group aspect-[4/5] max-h-[650px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img 
                    src="https://framerusercontent.com/images/lrgYBml0VzMsoFF00qpWMuSQlw.png?scale-down-to=512&width=1536&height=1024" 
                    alt="Складской комплекс" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Info Card */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                        <div className="flex justify-between items-center mb-4">
                           <div>
                              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Общая площадь</p>
                              <p className="text-3xl font-black text-gray-900">25 000 м²</p>
                           </div>
                           <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                              <Warehouse size={20} />
                           </div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <div className="flex justify-between text-xs font-semibold text-gray-500">
                                <span>Заполняемость</span>
                                <span>85%</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Decorative Elements behind */}
             <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-brand-blue rounded-3xl opacity-5"></div>
             <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-brand-blue rounded-full opacity-10 blur-2xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};