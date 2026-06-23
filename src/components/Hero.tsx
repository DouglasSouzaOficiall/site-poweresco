import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-left">
          <h1 className="hero-title">
            16 anos transformando energia<br />
            em desenvolvimento sustentável.
          </h1>
          <p className="hero-desc">
            Projetamos, executamos e gerenciamos iniciativas de eficiência energética, educação, sustentabilidade, desenvolvimento social e impacto comunitário para concessionárias de energia e instituições em todo o Brasil.
          </p>
          <button className="btn-hero animate-fade-up" style={{ animationDelay: '0.4s' }} onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}>
            Conheça nossas soluções ↗
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
