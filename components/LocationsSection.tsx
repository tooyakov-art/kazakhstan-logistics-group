import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const YANDEX_MAPS = [
  'https://yandex.ru/map-widget/v1/?ll=68.72%2C42.28&z=15&pt=68.72%2C42.28%2Cpm2rdm',
  'https://yandex.ru/map-widget/v1/?ll=69.63%2C42.32&z=15&pt=69.63%2C42.32%2Cpm2rdm'
];

export const LocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em] bg-blue-50 px-4 py-2 rounded-full">Локации</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Наши адреса
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Два стратегических объекта в Шымкенте для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CONTACT_INFO.locations.map((loc, idx) => (
            <div key={idx} className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-[300px] w-full">
                <iframe
                  src={YANDEX_MAPS[idx]}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title={loc.title}
                />
              </div>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                    <MapPin size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-gray-900 mb-1">{loc.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{loc.address}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{loc.description}</p>
                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-blue-700 transition-colors group"
                    >
                      Открыть в 2GIS
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
