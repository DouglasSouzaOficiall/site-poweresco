import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import SolutionsAccordion from '../components/SolutionsAccordion';
import CasesCarousel from '../components/CasesCarousel';
import Partners from '../components/Partners';

interface HomeProps {
  onOpenContact: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenContact }) => {
  // Handle cross-page scrolling from solution subpage
  useEffect(() => {
    const scrollToSection = localStorage.getItem('scrollToSection');
    if (scrollToSection) {
      localStorage.removeItem('scrollToSection');
      // Wait for DOM to fully mount/render
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <About onOpenContact={onOpenContact} />
      <Stats />
      <SolutionsAccordion onOpenContact={onOpenContact} />
      <CasesCarousel />
      <Partners />
    </>
  );
};

export default Home;
