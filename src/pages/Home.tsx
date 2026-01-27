import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProgramsSection } from '../components/ProgramsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="JS Training & Development Ltd offers high-quality training, qualifications, and professional development services across the UK."
      />
      <HeroSection />
      <ServicesSection />
      <ProgramsSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
