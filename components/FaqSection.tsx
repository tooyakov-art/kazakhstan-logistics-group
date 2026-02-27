import React from 'react';
import { Plus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black text-center mb-12 uppercase">FAQ</h2>
        
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white border-2 border-black p-4 cursor-pointer hover:bg-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-bold text-black uppercase text-sm">Вопрос №{item}</span>
                <Plus className="text-black h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};