import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { CalculatorSection } from './components/CalculatorSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { SpaceFeatureSection } from './components/SpaceFeatureSection';
import { GallerySection } from './components/GallerySection';
import { LocationsSection } from './components/LocationsSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <SpaceFeatureSection />
        <ServicesSection />
        <CalculatorSection />
        <GallerySection />
        <PartnersSection />
        <LocationsSection />
      </main>
      <ContactSection />
    </div>
  );
};

export default App;
