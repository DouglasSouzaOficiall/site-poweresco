import React, { useState } from 'react';
import ContactModal from './ContactModal';
import manImg from '../assets/rebrand/hero/homem.png';
import backHero from '../assets/rebrand/hero/back_hero.png';
import './Hero.css';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="hero-section" style={{ backgroundImage: `url(${backHero})` }}>
        <div className="container hero-container">
          <div className="hero-content animate-fade-left">
            <h1 className="hero-title">
              <span className="hero-badge-orange">Sua Empresa</span> Justa,<br />
              Responsável e<br />
              Lucrativa.
            </h1>
            <p className="hero-desc">
              Desenvolvemos projetos sob medida para adequar o seu negócio ao mercado.<br/>
              Unimos impacto positivo na sociedade com resultados financeiros reais.
            </p>
            <button className="btn-hero" onClick={() => setIsModalOpen(true)}>
              Fale com a gente! <span className="arrow-diagonal">↗</span>
            </button>
          </div>
          
          <div className="hero-image-container animate-fade-right">
            <div className="man-image-wrapper">
              <img src={manImg} alt="Profissional Poweresco" className="man-image" />
            </div>
          </div>
        </div>
      </section>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
