import { Snowflake, Truck, Box, Thermometer, Warehouse, Building2, TrainFront } from 'lucide-react';
import { ServiceItem, Partner, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  phones: [
    '+7 778 001 1417'
  ],
  email: 'kazakhstanlogisticsgroup@gmail.com',
  telegramLink: 'https://t.me/Kazakhstan_Logistics_Group',
  whatsappLink: 'https://wa.me/77780011417',
  instagramLink: 'https://www.instagram.com/kazakhstan_logistics_group',
  locations: [
    {
      title: 'ТЛЦ "Онтустик"',
      address: 'Район аэропорта, напротив таможни',
      description: 'Основной логистический хаб с удобным таможенным оформлением.',
      mapLink: 'https://2gis.kz/shymkent/geo/70000001079230732'
    },
    {
      title: 'Склад на Алматинской трассе',
      address: 'Рядом с ТРЦ Shymkent City Mall',
      description: 'Удобная городская логистика и доступность.',
      mapLink: 'https://2gis.kz/shymkent/geo/70000001026157056'
    }
  ]
};

export const NAV_LINKS = [
  { label: 'Главная', href: '#hero' },
  { label: 'Инфраструктура', href: '#infrastructure' },
  { label: 'Услуги', href: '#services' },
  { label: 'Калькулятор', href: '#calculator' },
  { label: 'Коллектив', href: '#team' },
  { label: 'Контакты', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Сухие склады',
    description: '25 000 м² сухих складов. Хранение товаров без особого температурного режима.',
    details: 'Блоки от 172 м² до 4 000 м²',
    icon: Box
  },
  {
    title: 'Холодильные камеры',
    description: '6 000 м² холодильных камер. Температурный режим от 0 до +8°C.',
    details: 'Камеры от 172 м² до 216 м²',
    icon: Thermometer
  },
  {
    title: 'Морозильные камеры',
    description: '6 000 м² морозильных камер. Глубокая заморозка от 0 до –18°C.',
    details: 'Камеры от 172 м² до 216 м²',
    icon: Snowflake
  },
  {
    title: 'Стеллажные склады',
    description: '2 000 м² стеллажных складов. Оптимизированное хранение на высоте.',
    details: 'Система WMS хранения',
    icon: Warehouse
  },
  {
    title: 'Железнодорожный тупик',
    description: 'Собственная Ж/Д ветка вместимостью 14 вагонов.',
    details: 'Прямая выгрузка на склад',
    icon: TrainFront
  }
];

export const INFRASTRUCTURE_FEATURES = [
  {
    title: 'Собственный автопарк',
    description: '10-тонный Hyundai, Газели и 4 автокары для оперативной логистики.',
    icon: Truck
  },
  {
    title: 'Современный офис',
    description: '2-этажный офис со всеми удобствами для вашей команды на территории склада.',
    icon: Building2
  },
  {
    title: 'Паркинг',
    description: 'Просторный паркинг для грузовых и легковых автомобилей.',
    icon: Truck
  }
];

export const PARTNERS: Partner[] = [
  { 
    name: 'АО Авиакомпания Scat', 
    logoPlaceholder: 'SCAT',
    logoUrl: 'https://astana.invest.gov.kz/upload/iblock/9dd/9dd5fa9fc0ea7135fd2e2f76b09840ae.jpg'
  },
  { 
    name: 'ТОО СП Кока Кола Алматы Боттлерс', 
    logoPlaceholder: 'Coca-Cola',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png'
  },
  { 
    name: 'ТОО Freedom Telecom', 
    logoPlaceholder: 'Freedom Telecom',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPnG9_6YX0kuvLzqBA1JsF1cxussoBw9InA&s'
  },
  { 
    name: 'Narlen', 
    logoPlaceholder: 'Narlen',
    logoUrl: 'https://narlen.kz/storage/app/media/logo.svg'
  },
  {
    name: 'Royal Petrol',
    logoPlaceholder: 'Royal Petrol',
    logoUrl: 'https://static.tildacdn.pro/tild6438-6134-4462-b764-656637663937/RP_5_1.svg'
  }
];
