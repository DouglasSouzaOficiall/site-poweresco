import React, { useState } from 'react';
import ContactModal from './ContactModal';
import manImg from '../assets/rebrand/hero/homem.png';
import shapeImg from '../assets/rebrand/hero/Shape1.png';
import './Hero.css';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content animate-fade-left">
            <h1 className="hero-title">
              <span className="hero-badge-orange">Sua Empresa</span> Justa,<br />
              <span className="hero-badge-white">Responsável</span> e<br />
              <span className="hero-text-white">Lucrativa.</span>
            </h1>
            <p className="hero-desc">
              Desenvolvemos projetos sob medida para reduzir a fatura de energia da sua empresa, 
              gerando impacto positivo em alinhamento com seus objetivos e metas financeiras reais.
            </p>
            <button className="btn-hero" onClick={() => setIsModalOpen(true)}>
              Fale com a gente! <span className="arrow-diagonal">↗</span>
            </button>
          </div>
          
          <div className="hero-image-container animate-fade-right">
            <div className="man-image-wrapper">
              <img src={manImg} alt="Profissional Poweresco" className="man-image" />
            </div>
            <img src={shapeImg} alt="Wave Decoration" className="hero-shape" />
          </div>
        </div>
      </section>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
