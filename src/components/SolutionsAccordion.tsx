import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';
import './SolutionsAccordion.css';

const SolutionsAccordion: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSolution = solutionsData[activeIdx];

  const handleSolutionClick = (index: number) => {
    setActiveIdx(index);
  };

  const handleLearnMore = (id: string) => {
    window.location.hash = `#/solucoes/${id}`;
    window.scrollTo(0, 0);
  };

  return (
    <section id="solucoes" className="solutions-section">
      <div className="container solutions-container">
        <div className="solutions-header">
          <span className="badge-premium-orange">NOSSAS SOLUÇÕES</span>
          <h2 className="solutions-title">
            Oito pilares estratégicos para o desenvolvimento sustentável
          </h2>
          <p className="solutions-subtitle">
            Unimos inovação técnica, mobilização social e inteligência de projeto para entregar resultados reais.
          </p>
        </div>

        <div className="solutions-interactive-grid">
          {/* Left Side: Accordion Tabs */}
          <div className="solutions-tabs">
            {solutionsData.map((sol, index) => {
              const isActive = index === activeIdx;
              return (
                <div 
                  key={sol.id} 
                  className={`sol-tab-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleSolutionClick(index)}
                >
                  <div className="tab-number">{(index + 1).toString().padStart(2, '0')}</div>
                  <div className="tab-info">
                    <h3 className="tab-title">{sol.title}</h3>
                    <p className="tab-desc-short">{sol.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Active Solution Panel Preview */}
          <div className="solution-preview-panel animate-scale-in" key={activeSolution.id}>
            <div className="preview-image-container">
              <img 
                src={activeSolution.images[0] || '/site-poweresco/img/imagem01_nossassolucoes.png'} 
                alt={activeSolution.title} 
                className="preview-image"
              />
              <div className="preview-image-overlay"></div>
              <button 
                className="btn-diagonal-arrow" 
                onClick={() => handleLearnMore(activeSolution.id)}
                title="Saiba Mais"
              >
                <ArrowUpRight size={24} />
              </button>
            </div>

            <div className="preview-content">
              <h3 className="preview-title">{activeSolution.title}</h3>
              <p className="preview-text">{activeSolution.text || activeSolution.paragraphs[0]}</p>
              
              <div className="preview-highlights">
                <h4>Principais Frentes</h4>
                <ul>
                  {activeSolution.sections[0]?.items.slice(0, 4).map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className="btn-learn-more"
                onClick={() => handleLearnMore(activeSolution.id)}
              >
                Saiba mais sobre essa solução <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsAccordion;
