import React, { useState } from 'react';
import ContactModal from './ContactModal';
import manImg from '../assets/rebrand/hero/homem.png';
import backHero from '../assets/rebrand/hero/back_hero.png';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-left">
          <h1 className="hero-title">
            16 anos transformando<br />
            energia em desenvolvimento<br />
            sustentável.
          </h1>
          <p className="hero-desc">
            Projetamos, executamos e gerenciamos iniciativas de eficiência energética, educação, sustentabilidade, desenvolvimento social e impacto comunitário para concessionárias de energia e instituições em todo o Brasil.
          </p>
          <button className="btn-hero" onClick={() => {
            document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Conheça nossas soluções <span className="arrow-diagonal">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
