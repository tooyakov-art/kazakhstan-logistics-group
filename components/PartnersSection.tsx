import React from 'react';
import { PARTNERS } from '../constants';

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
          Нам доверяют
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {PARTNERS.map((partner, index) => (
            <div 
              key={index} 
              className="group relative flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              title={partner.name}
            >
              {partner.logoUrl ? (
                <img 
                  src={partner.logoUrl} 
                  alt={`${partner.name} logo`} 
                  className="h-16 md:h-24 max-w-[200px] w-auto object-contain filter drop-shadow-sm hover:drop-shadow-md transition-all"
                />
              ) : (
                <span className="text-xl font-black text-gray-800 uppercase tracking-tight">
                  {partner.logoPlaceholder}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};