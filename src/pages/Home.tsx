import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import CookieConsent from '../components/CookieConsent';
import Hero from '../components/Hero';
import About from '../components/About';
import SolutionsAccordion from '../components/SolutionsAccordion';
import CasesCarousel from '../components/CasesCarousel';
import Partners from '../components/Partners';

const Home: React.FC = () => {
  useEffect(() => {
    const targetSection = localStorage.getItem('scrollToSection');
    if (targetSection) {
      localStorage.removeItem('scrollToSection');
      // Wait for rendering to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SolutionsAccordion />
        <CasesCarousel />
        <Partners />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </>
  );
};

export default Home;
