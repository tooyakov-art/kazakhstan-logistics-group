import React from 'react';
import { SERVICES } from '../constants';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em] bg-blue-50 px-4 py-2 rounded-full">Услуги</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Складские решения
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Полный спектр услуг от ответственного хранения до аренды офисов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-blue transition-all duration-300">
                <service.icon className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>
              {service.details && (
                <div className="pt-6 border-t border-gray-50">
                  <span className="inline-block bg-gray-50 text-gray-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">
                    {service.details}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};