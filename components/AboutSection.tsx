import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Button } from './Button';

export const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-gray-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
                <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em]">Локации</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-black text-gray-900">Где мы находимся</h2>
                <p className="mt-4 text-gray-500 text-lg">
                    Стратегически выгодное расположение для быстрой логистики.
                </p>
            </div>
            <div className="hidden md:block">
                <ArrowRight className="text-gray-300 w-12 h-12" />
            </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg mb-12 group">
            <img 
                src="https://framerusercontent.com/images/blvRWvV1G9djdYcUqRdfPH1pRA.png?scale-down-to=512&width=1536&height=1024" 
                alt="Внешний вид складов" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
                <p className="text-lg font-bold">Удобные подъездные пути</p>
                <p className="text-sm opacity-80">Асфальтированная территория и парковка</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTACT_INFO.locations.map((loc, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                    
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                         <span className="text-9xl font-black text-brand-blue -mr-10 -mt-10 block">0{idx + 1}</span>
                    </div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                            <MapPin className="text-white" size={24} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{loc.title}</h3>
                        <p className="text-gray-600 mb-6 text-lg">{loc.address}</p>
                        
                        <p className="text-sm text-gray-500 mb-8 border-l-4 border-brand-blue pl-4 py-1 italic">
                            {loc.description}
                        </p>
                        
                        <a href={loc.mapLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full md:w-auto border-gray-200 text-gray-700 hover:border-brand-blue hover:bg-brand-blue hover:text-white" icon={<Navigation size={18} />}>
                                Открыть карту
                            </Button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};