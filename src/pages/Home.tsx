import React from 'react';
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
