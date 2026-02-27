import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Warehouse } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const mainPhone = CONTACT_INFO.phones[0];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors ${scrolled ? 'bg-brand-blue' : 'bg-brand-blue shadow-lg'}`}>
                 <Warehouse className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className={`font-extrabold text-lg leading-none tracking-tight ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>KAZAKHSTAN</span>
                <span className="text-brand-blue text-xs uppercase tracking-wider font-bold">Logistics Group</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-6 xl:ml-10 flex items-baseline space-x-4 xl:space-x-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-600 hover:text-brand-blue px-2 xl:px-3 py-2 text-sm font-semibold transition-colors relative group whitespace-nowrap"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
              <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500 font-medium">Связаться с нами</span>
                  <a href={`tel:${mainPhone.replace(/\s/g, '')}`} className="text-base xl:text-lg font-bold text-gray-900 hover:text-brand-blue transition-colors flex items-center gap-2 whitespace-nowrap">
                      <Phone size={18} className="text-brand-blue animate-pulse" />
                      {mainPhone}
                  </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex lg:hidden items-center gap-4">
               <a href={`tel:${mainPhone.replace(/\s/g, '')}`} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 animate-pulse">
                  <Phone size={20} />
               </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-28 px-6 pb-6 space-y-2 h-full flex flex-col overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-900 block px-3 py-4 text-2xl font-bold border-b border-gray-100 active:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
            
            <div className="mt-auto pb-8 space-y-4">
                <div className="bg-gray-50 p-6 rounded-2xl text-center">
                    <p className="text-sm text-gray-500 mb-2">Наш телефон</p>
                    <a href={`tel:${mainPhone.replace(/\s/g, '')}`} className="text-2xl font-black text-brand-blue block mb-4">
                        {mainPhone}
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};