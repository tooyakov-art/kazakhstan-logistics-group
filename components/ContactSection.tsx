import React from 'react';
import { Instagram, MapPin, Phone, Mail, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">KAZAKHSTAN<br/><span className="text-brand-blue">Logistics Group</span></h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Ваш надежный партнер в мире складской логистики. Современные решения, безопасность и профессиональный подход.
            </p>
            <div className="flex space-x-4">
              <a 
                href={CONTACT_INFO.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-xl text-gray-600 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={CONTACT_INFO.telegramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-xl text-gray-600 hover:bg-[#0088cc] hover:text-white transition-all duration-300"
              >
                <Send size={24} />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="md:col-span-1"></div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">Меню</h4>
            <ul className="space-y-4 text-gray-600 text-sm font-medium">
              <li><a href="#hero" className="hover:text-brand-blue transition-colors">Главная</a></li>
              <li><a href="#services" className="hover:text-brand-blue transition-colors">Услуги</a></li>
              <li><a href="#locations" className="hover:text-brand-blue transition-colors">Локации</a></li>
              <li><a href="#contact" className="hover:text-brand-blue transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">Контакты</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Phones & Email */}
                <div className="space-y-4">
                    <ul className="space-y-4">
                        {CONTACT_INFO.phones.map((phone, idx) => (
                            <li key={idx}>
                                <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-gray-700 hover:text-brand-blue transition-colors group">
                                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                                        <Phone size={14} />
                                    </span>
                                    <span className="font-semibold">{phone}</span>
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-gray-700 hover:text-brand-blue transition-colors group">
                                <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                                    <Mail size={14} />
                                </span>
                                <span className="font-semibold text-xs whitespace-nowrap">{CONTACT_INFO.email}</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Quick Links to Locations */}
                <div className="space-y-4">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">Адреса</h5>
                    <ul className="space-y-4">
                        {CONTACT_INFO.locations.map((loc, idx) => (
                             <li key={idx}>
                                <a href="#locations" className="flex items-start gap-3 group">
                                    <MapPin className="shrink-0 text-brand-blue mt-1 group-hover:scale-110 transition-transform" size={18} />
                                    <div>
                                        <span className="block font-bold text-gray-900 text-sm mb-1 group-hover:text-brand-blue transition-colors">{loc.title}</span>
                                        <span className="text-gray-500 text-xs leading-relaxed block">{loc.address}</span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kazakhstan Logistics Group.</p>
          <p>Designed for Business</p>
        </div>
      </div>
    </footer>
  );
};