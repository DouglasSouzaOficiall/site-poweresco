import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solucoes');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">

          
          <h1 className="hero-title animate-reveal">
            16 anos transformando <br className="desktop-only" />
            energia em <span className="highlight-gradient">desenvolvimento sustentável</span>.
          </h1>
          
          <p className="hero-description animate-fade-up">
            Projetamos, executamos e gerenciamos iniciativas de eficiência energética, 
            educação, sustentabilidade, desenvolvimento social e impacto comunitário 
            para concessionárias de energia e instituições em todo o Brasil.
          </p>
          
          <div className="hero-actions animate-fade-up">
            <button className="btn-primary-orange" onClick={scrollToSolutions}>
              Conheça nossas soluções <ArrowRight size={18} />
            </button>
            <button className="btn-outline-white" onClick={onOpenContact}>
              Fale Conosco <MessageSquare size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Dynamic Wave Decorator at the bottom */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" fill="var(--color-bg-light)"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
