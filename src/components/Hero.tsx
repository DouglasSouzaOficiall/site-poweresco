import React, { useState } from 'react';
import ContactModal from './ContactModal';
import './Hero.css';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-top-text">Impulsionando o amanhã, de forma sustentável</p>
          <h1 className="hero-title">
            Sua empresa socialmente justa,<br />
            Ambientalmente Responsável<br />
            e financeiramente Viável
          </h1>
          <button className="btn-green" onClick={() => setIsModalOpen(true)}>Fale conosco agora mesmo</button>
        </div>
      </div>
      </section>
      
      <div className="hero-image-wrapper">
        <div className="container">
          <img 
            src="/img/imagem_hero.png" 
            alt="Poweresco Sustentabilidade" 
            className="hero-main-image"
          />
        </div>
      </div>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
