import React from 'react';
import { MousePointerClick, Calculator, Building, FileSignature, PackageCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    { icon: MousePointerClick, title: 'Заявка', desc: 'Оставьте заявку на сайте' },
    { icon: Calculator, title: 'Расчет', desc: 'С Вами связывается менеджер и делает предварительный расчет по вашей заявке' },
    { icon: Building, title: 'Встреча', desc: 'Встреча и показ склада' },
    { icon: FileSignature, title: 'Договор', desc: 'Составление договора' },
    { icon: PackageCheck, title: 'Приемка', desc: 'Приемка груза' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em] bg-blue-50 px-4 py-2 rounded-full">Как мы работаем</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            5 шагов к надежному хранению
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-blue-100 via-brand-blue to-blue-100 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group flex flex-col items-center">
                <div className="flex flex-col items-center text-center relative z-10 w-full">
                  {/* Number Badge */}
                  <div className="absolute top-0 right-[calc(50%-3rem)] w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-20 -mt-3 -mr-3">
                    {idx + 1}
                  </div>
                  
                  {/* Icon Container */}
                  <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-blue-900/5 border border-blue-50 transform group-hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <step.icon size={36} className="text-brand-blue relative z-10" strokeWidth={1.5} />
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight group-hover:text-brand-blue transition-colors">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                </div>
                
                {/* Mobile connecting line */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-gradient-to-b from-blue-100 to-transparent mx-auto my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};