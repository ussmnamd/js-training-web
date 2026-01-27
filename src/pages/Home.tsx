import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProgramsSection } from '../components/ProgramsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProgramsSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
