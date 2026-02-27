import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const WAREHOUSE_TYPES = [
  { id: 'freezer', name: 'Морозильные камеры (0…–18°C)', price: 10000 },
  { id: 'cooler', name: 'Холодильные камеры (0…+8°C)', price: 8000 },
  { id: 'dry_topping', name: 'Сухие склады с топингом', price: 3500 },
  { id: 'dry_no_topping', name: 'Сухие склады без топинга', price: 3000 },
];

export const CalculatorSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState(WAREHOUSE_TYPES[0].id);
  const [area, setArea] = useState<number | ''>(172);

  const selectedWarehouse = WAREHOUSE_TYPES.find(w => w.id === selectedType);
  const pricePerSqm = selectedWarehouse?.price || 0;
  const totalCost = (typeof area === 'number' ? area : 0) * pricePerSqm;

  return (
    <section id="calculator" className="py-24 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em] bg-blue-50 px-4 py-2 rounded-full">Калькулятор</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Расчет стоимости аренды
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Узнайте предварительную стоимость аренды склада за месяц.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                  Тип помещения
                </label>
                <div className="space-y-3">
                  {WAREHOUSE_TYPES.map((type) => (
                    <label 
                      key={type.id} 
                      className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${selectedType === type.id ? 'border-brand-blue bg-blue-50/50 ring-1 ring-brand-blue' : 'border-gray-200 hover:border-blue-200'}`}
                    >
                      <input 
                        type="radio" 
                        name="warehouseType" 
                        value={type.id} 
                        checked={selectedType === type.id}
                        onChange={() => setSelectedType(type.id)}
                        className="w-5 h-5 text-brand-blue border-gray-300 focus:ring-brand-blue"
                      />
                      <div className="ml-4 flex-1">
                        <span className="block text-sm font-bold text-gray-900">{type.name}</span>
                        <span className="block text-sm text-gray-500">{type.price.toLocaleString('ru-RU')} ₸ / м²</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                  Площадь (м²)
                </label>
                <input 
                  type="number" 
                  min="0"
                  value={area}
                  onChange={(e) => setArea(e.target.value ? Number(e.target.value) : '')}
                  className="w-full px-5 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all"
                  placeholder="Введите площадь..."
                />
              </div>
            </div>

            <div className="bg-brand-blue rounded-3xl p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-20 rounded-full -ml-24 -mb-24"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-8 opacity-90">
                   <Calculator size={28} />
                   <span className="font-bold uppercase tracking-wider text-sm">Итоговая стоимость</span>
                 </div>
                 
                 <div className="mb-4">
                   <span className="text-5xl md:text-7xl font-black tracking-tight">
                     {totalCost.toLocaleString('ru-RU')}
                   </span>
                   <span className="text-2xl md:text-3xl ml-2 font-medium opacity-80">₸ / мес</span>
                 </div>
                 
                 <div className="mt-12 pt-8 border-t border-white/20">
                   <p className="text-sm opacity-80 leading-relaxed">
                     * Расчет является предварительным. Для получения точного коммерческого предложения, пожалуйста, свяжитесь с нашими менеджерами.
                   </p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
