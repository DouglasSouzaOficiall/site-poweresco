import React, { useState } from 'react';
import './CasesCarousel.css';

const casesData = [
  {
    id: 'enel-compartilha',
    title: 'Enel Compartilha Energia na Escola',
    img: '/site-poweresco/img/imagem01_casedesucessos.png'
  },
  {
    id: 'e-educacao',
    title: 'E+ Educação',
    img: '/site-poweresco/img/imagem01_casedesucessos.png'
  },
  {
    id: 'programas-comunitarios',
    title: 'Programas Educacionais Comunitários',
    img: '/site-poweresco/img/imagem01_casedesucessos.png'
  },
  {
    id: 'case-4',
    title: 'Eficiência Hospitalar',
    img: '/site-poweresco/img/imagem01_casedesucessos.png'
  },
  {
    id: 'case-5',
    title: 'Prefeituras Sustentáveis',
    img: '/img/imagemprojetos.png'
  }
];

const CasesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : casesData.length - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < casesData.length - 3 ? prev + 1 : 0));
  };

  // Only display 3 items at a time
  const visibleCases = casesData.slice(currentIndex, currentIndex + 3);

  // If there's not enough items for the end, append from the beginning for a loop effect
  if (visibleCases.length < 3) {
    visibleCases.push(...casesData.slice(0, 3 - visibleCases.length));
  }

  return (
    <section id="cases" className="cases-carousel-section">
      <div className="container">
        
        <div className="cases-carousel-box">
          <div className="cases-header">
            <h2 className="cases-title">
              Cases de <span className="cases-badge-white">Sucesso</span>
            </h2>
            <p className="cases-subtitle">
              Projetos de alto impacto construídos junto com a Poweresco
            </p>
          </div>

          <div className="carousel-wrapper">
            <button className="carousel-nav-btn prev" onClick={handlePrev}>
              &#10094;
            </button>

            <div className="carousel-track-container">
              <div className="carousel-track">
                {visibleCases.map((caseItem, idx) => (
                  <div key={idx} className="case-card">
                    <div className="case-img-wrapper">
                      <img src={caseItem.img} alt={caseItem.title} className="case-img" />
                    </div>
                    <div className="case-content">
                      <h3 className="case-card-title">{caseItem.title}</h3>
                      <button 
                        className="btn-ver-case"
                        onClick={() => { window.location.hash = `#/cases/${caseItem.id}`; }}
                      >
                        VER CASE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-nav-btn next" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CasesCarousel;
