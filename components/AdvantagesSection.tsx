import React, { useState, useEffect } from 'react';
import { INFRASTRUCTURE_FEATURES } from '../constants';

const SLIDESHOW_IMAGES = [
  {
    src: 'https://framerusercontent.com/images/j5rjVsEmt5ltpYu0t3nJG6hQBYM.png?scale-down-to=512&width=1536&height=1024',
    label: 'Современный офис',
    sub: 'Комфортные условия для работы'
  },
  {
    src: 'https://framerusercontent.com/images/sKFI5lulQ39G1Fy2nT1C8CU.png?scale-down-to=512&width=1024&height=1024',
    label: 'Спецтехника',
    sub: 'Всегда в наличии'
  },
  {
    src: 'https://framerusercontent.com/images/aq43lPbaMhE2HtTXygvLshgkzAs.png?scale-down-to=512&width=1024&height=1024',
    label: 'Складские помещения',
    sub: 'Просторные и чистые'
  },
  {
    src: 'https://framerusercontent.com/images/lrgYBml0VzMsoFF00qpWMuSQlw.png?scale-down-to=512&width=1536&height=1024',
    label: 'Территория комплекса',
    sub: 'Охраняемая парковка'
  },
  {
    src: 'https://framerusercontent.com/images/blvRWvV1G9djdYcUqRdfPH1pRA.png?scale-down-to=512&width=1536&height=1024',
    label: 'Стеллажные склады',
    sub: 'Оптимизированное хранение'
  },
];

export const AdvantagesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="infrastructure" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">

          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
              Развитая инфраструктура для вашего удобства
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Мы предоставляем не просто склад, а полноценный логистический комплекс с офисами и техникой.
            </p>
            <div className="space-y-8">
              {INFRASTRUCTURE_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <feature.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors">{feature.title}</h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              {/* Slideshow */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-lg h-64 group">
                {SLIDESHOW_IMAGES.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <p className="font-bold text-lg">{slide.label}</p>
                      <p className="text-xs opacity-80">{slide.sub}</p>
                    </div>
                  </div>
                ))}
                {/* Dots */}
                <div className="absolute bottom-4 right-6 flex gap-2 z-10">
                  {SLIDESHOW_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="col-span-1 relative rounded-3xl overflow-hidden shadow-lg h-48 group">
                <img
                  src="https://framerusercontent.com/images/sKFI5lulQ39G1Fy2nT1C8CU.png?scale-down-to=512&width=1024&height=1024"
                  alt="Спецтехника"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold">Спецтехника</p>
                  <p className="text-xs opacity-80">Всегда в наличии</p>
                </div>
              </div>

              <div className="col-span-1 bg-brand-blue rounded-3xl p-6 text-white flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-4xl font-black mb-1 relative z-10">24/7</span>
                <span className="text-sm opacity-90 relative z-10 font-medium">Охрана и видеонаблюдение по всей территории</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
