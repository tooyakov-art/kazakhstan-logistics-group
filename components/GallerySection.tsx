import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const TEAM_IMAGES = [
  // Фото 22: Оператор автокара за работой
  'https://i.wfolio.ru/x/KfN2JhbB89-m6UeUSQ-43b-4LTDPyZVn/q6sVLUvjujnOk6mXbO2srbIKpPlcOqy0/t7rVx8PT5NFW95R5iPfYgEbcz9T9DM03/mjHu5nb3MiY0pLaVSfnIEvvsgGTLYWd3/DB3ADSLxnrANMZCME7ysO31NwYV8D-39/l-Fmayvm6qMLUznBXizzOTsPjYSS-Set/ecdTsdzsbsEvtLKLYd8Fwo-cVSKCPynO/17vDiTDofMRaaUw7pBYbnkDjYX_cko4L/8znn3Fv2aECH8kWj8ByUz6B7MRA24P4S/NFJIM23e2p1rEaYeI-8a-cEE5fMpjkeW/ZGKJIWcunCzddnRnrJXD0pdkHEy4NFox/DudKb4BI5xmPYQijdZVL-HMWU60LXH9y/yjygQWcbMkc_A_BNZPFyQzpoS_ayBPdn/Cn4vOpKN9eWV0h9LuCLeea6uF__X9QGO/ZWZHRwGfEwwA3TZYKCqMavMjufYIjZK0/RFi_V5mYuvVuGKI7HZx2nQARJZRUH60a/bhV1Z7qi97vr3yv2woFgHjkigyxHneg0/oTMVheSP5NI.jpg',
  // Фото 23: Работники с автокарами в куртках KLG
  'https://i.wfolio.ru/x/KfN2JhbB89-m6UeUSQ-43b-4LTDPyZVn/q6sVLUvjujnOk6mXbO2srbIKpPlcOqy0/t7rVx8PT5NFW95R5iPfYgEbcz9T9DM03/mjHu5nb3MiY0pLaVSfnIEvvsgGTLYWd3/DB3ADSLxnrANMZCME7ysO31NwYV8D-39/l-Fmayvm6qMLUznBXizzOTsPjYSS-Set/ecdTsdzsbsEvtLKLYd8Fwo-cVSKCPynO/17vDiTDofMRaaUw7pBYbnkDjYX_cko4L/8znn3Fv2aECH8kWj8ByUz_rxOHj9DHEF/tF7Ty5M1uStEMincP6O35ppfwOsaAFOw/DdbLaHeIH1vFTlxyayDdwuqTqFjc6eWL/F2vg9v5mz8L2PvW9Ta1Ml69YkIeQ6Jtw/SC0apYTHP3yv6ALHQ8_Ab_w1cueWb3o-/9c72feg4JvPVfWHwj6Mdw7tsGzSVb6Zs/phQv8yVU-2Hp9WhdnYWDHlj7PnY-v-o3/rX-YYsQWMAXwUpFbCYQsm9iSTSuvYm5_/WUtxE8zQjuS3WGAvqy8j2Gw72bl8h7Gs/fXN6Mn-CV1g.jpg',
  // Фото 24: Водитель автокара Hangcha
  'https://i.wfolio.ru/x/KfN2JhbB89-m6UeUSQ-43b-4LTDPyZVn/q6sVLUvjujnOk6mXbO2srbIKpPlcOqy0/t7rVx8PT5NFW95R5iPfYgEbcz9T9DM03/mjHu5nb3MiY0pLaVSfnIEvvsgGTLYWd3/DB3ADSLxnrANMZCME7ysO31NwYV8D-39/l-Fmayvm6qMLUznBXizzOTsPjYSS-Set/ecdTsdzsbsEvtLKLYd8Fwo-cVSKCPynO/17vDiTDofMRaaUw7pBYbnkDjYX_cko4L/8znn3Fv2aECH8kWj8ByUz5j01lDxE3za/-8D7RehLlUE-uwvIePVvuWc0TUhuukf_/PqronR5QOLIE7wDBoEQ6Qg3ROHhKdx63/EBvkj6oufUat3tGlqpIvAoBLdbiJA6f1/g8HIRODG0yM7qLQgJjusw41s0PcXTDNQ/l00L2vD_X6rzJlLaxuFYru2pn5cbBUgD/Ry9ubAc4-Rkd7jLFsYrB3B9bLD-ER370/zvmD9yna4TKaxZ9oiY9MPBvpE6mTSSQe/iaUiMSYOO9Ol3LBjxVVllWhQBu8HoqFW/WO6_fzDqvdQ.jpg',
  // Фото 25: Работник в куртке KLG на территории
  'https://i.wfolio.ru/x/KfN2JhbB89-m6UeUSQ-43b-4LTDPyZVn/q6sVLUvjujnOk6mXbO2srbIKpPlcOqy0/t7rVx8PT5NFW95R5iPfYgEbcz9T9DM03/mjHu5nb3MiY0pLaVSfnIEvvsgGTLYWd3/DB3ADSLxnrANMZCME7ysO31NwYV8D-39/l-Fmayvm6qMLUznBXizzOTsPjYSS-Set/ecdTsdzsbsEvtLKLYd8Fwo-cVSKCPynO/17vDiTDofMRaaUw7pBYbnkDjYX_cko4L/8znn3Fv2aECH8kWj8ByUz3iU9Rpv-uJG/ALkGhy2VL8DaD9DhsAT4LU2lZLJ8SCjT/kiIazt_qf--0rByVm-t54Eu9LbIgNhgb/-wAoFsKmTrEs8C7wmTh__LcPbvpJfLpU/y77pC2mX5N6cs4Cxa7UImLwlLiEha7wO/SAtdftzcAtMRI9QVSZyDOm1yTGGCPbVk/C89wulBQJpRjiJPdfVEkix_C6D5pAdPL/WF3ChGLllyYHVfhUolnOb-dchJjpgEqB/71g_-nuivouH-hXMT-hKZa16RaY5UeD0/yCfTc4acm3s.jpg',
  // Фото 26: Погрузка с автокаром и работник в куртке KLG
  'https://i.wfolio.ru/x/KfN2JhbB89-m6UeUSQ-43b-4LTDPyZVn/q6sVLUvjujnOk6mXbO2srbIKpPlcOqy0/t7rVx8PT5NFW95R5iPfYgEbcz9T9DM03/mjHu5nb3MiY0pLaVSfnIEvvsgGTLYWd3/DB3ADSLxnrANMZCME7ysO31NwYV8D-39/l-Fmayvm6qMLUznBXizzOTsPjYSS-Set/ecdTsdzsbsEvtLKLYd8Fwo-cVSKCPynO/17vDiTDofMRaaUw7pBYbnkDjYX_cko4L/8znn3Fv2aECH8kWj8ByUz3c56TNe7H8P/tlGzk55_5cxWgp5hA64R0jJlBfLr-A1i/AEYl1vlgfrsKiKT81IaEXc9a9MmvQjtA/pCBj8DDFVqPjlvvvyEwQiyFgL3i_SJqf/PNjcw224X_sxHRvXuzEh_npq5a-d60Vz/kpF-LnRwKGc0cnNxaOeaX-daASG0S1D1/WjFCPs1S32SnfLZPUUBSRltFcT0-mmjP/ILXjQng36yZLfO1-drq5dB30WapW1Qq0/e_kVW6eKJX1E3qdT7uBQKfmMoLG77I1R/lZhV7TmCb1Y.jpg',
  // Фото 27: Загрузка грузовика на складе
  'https://i.wfolio.ru/x/KfN2JhbB89-m6UeUSQ-43b-4LTDPyZVn/q6sVLUvjujnOk6mXbO2srbIKpPlcOqy0/t7rVx8PT5NFW95R5iPfYgEbcz9T9DM03/mjHu5nb3MiY0pLaVSfnIEvvsgGTLYWd3/DB3ADSLxnrANMZCME7ysO31NwYV8D-39/l-Fmayvm6qMLUznBXizzOTsPjYSS-Set/ecdTsdzsbsEvtLKLYd8Fwo-cVSKCPynO/17vDiTDofMRaaUw7pBYbnkDjYX_cko4L/8znn3Fv2aECH8kWj8ByUzzrpcQJUvgdE/v8qwnbgynURXz3JZKf9d6Ng3kcFUWV0v/-rIm4rnPRDA8KGDLEX_hvEmggQZMtYVf/VWf77GAF7FQ1ZZ_pdxIWQyx50L0OkNfS/cCP7j0zjOPmqSG9MJ9UuTErajZgPX1pp/pqy2E85TvpGEHQSE9XgHMxpl5TJC6AHj/IPeH0dBA53SG5lLOItslBQmJcjWuKErf/W3rP_P1Ootj5-bqmhd2AA1uVSKYYq2EP/n04Yz29fPCzcnXXuxEo_PLL5k13jde26/A0PiI68FUc0.jpg',
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em] bg-blue-50 px-4 py-2 rounded-full">Команда</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Наш коллектив
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            За каждым успешным проектом стоят люди. Наша команда — это профессионалы, которые делают логистику простой и надёжной для вашего бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Коллектив фото ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={28} />
          </button>
          <img
            src={selectedImage}
            alt="Увеличенное фото"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
