import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  details?: string;
  icon: LucideIcon;
}

export interface Partner {
  name: string;
  logoPlaceholder: string;
  logoUrl?: string;
}

export interface Location {
  title: string;
  address: string;
  description: string;
  mapLink: string;
}

export interface ContactInfo {
  phones: string[];
  email: string;
  telegramLink: string;
  whatsappLink: string;
  instagramLink: string;
  locations: Location[];
}