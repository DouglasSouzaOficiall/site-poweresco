import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';
import './SolutionsAccordion.css';

interface SolutionsAccordionProps {
  onOpenContact: () => void;
}

const SolutionsAccordion: React.FC<SolutionsAccordionProps> = ({ onOpenContact }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSolution = solutionsData[activeIdx];

  // Simplified tab names to avoid layout wrapping issues in the sidebar
  const tabNames = [
    'Educação e Conscientização',
    'Eficiência Energética',
    'Engajamento Comunitário',
    'Desenvolvimento Social',
    'Economia Circular',
    'Desenvolvimento Humano',
    'Sustentabilidade e ESG',
    'Gestão de Projetos'
  ];

  // Tailored subtitles with highlighted parts for 3e Soluções aesthetic
  const solutionSubtitles = [
    {
      title: 'Educação e Conscientização Energética promovendo a ',
      highlight: 'sustentabilidade nas escolas'
    },
    {
      title: 'Eficiência Energética beneficiando a ',
      highlight: 'comunidade e o meio ambiente'
    },
    {
      title: 'Engajamento Comunitário construindo ',
      highlight: 'relações de confiança'
    },
    {
      title: 'Desenvolvimento Social gerando ',
      highlight: 'oportunidades e qualificação'
    },
    {
      title: 'Economia Circular transformando potencial em ',
      highlight: 'negócios de impacto'
    },
    {
      title: 'Desenvolvimento Humano colocando as ',
      highlight: 'pessoas no centro'
    },
    {
      title: 'Sustentabilidade e ESG agregando valor às ',
      highlight: 'empresas e territórios'
    },
    {
      title: 'Gestão Integrada garantindo ',
      highlight: 'transparência e resultados'
    }
  ];

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
        <div className="solutions-3e-layout">
          
          {/* Left Column: Vertical Navigation Sidebar */}
          <div className="solutions-sidebar-3e">
            <h2 className="sidebar-title-3e">
              Soluções<br />da Power:
            </h2>
            <ul className="sidebar-tabs-3e">
              {tabNames.map((name, index) => {
                const isActive = index === activeIdx;
                return (
                  <li 
                    key={index} 
                    className={`sidebar-tab-item-3e ${isActive ? 'active' : ''}`}
                    onClick={() => handleSolutionClick(index)}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Active Card Display (Integrated split grid) */}
          <div className="solutions-content-card-3e animate-scale-in" key={activeSolution.id}>
            
            {/* Left Card Info */}
            <div className="card-info-side-3e">
              <h3 className="card-headline-3e">
                {solutionSubtitles[activeIdx].title}
                <span className="orange-highlight-3e">{solutionSubtitles[activeIdx].highlight}</span>
              </h3>
              
              <ul className="checkbox-list-3e">
                {activeSolution.sections[0]?.items.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="checkbox-item-3e">
                    {/* SVG Checkbox Icon */}
                    <svg 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      stroke="var(--color-accent)" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="svg-checkbox-3e"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="card-actions-3e">
                <button className="btn-primary-orange speak-expert-btn" onClick={onOpenContact}>
                  Fale com um especialista
                </button>
                <button 
                  className="btn-learn-more-3e"
                  onClick={() => handleLearnMore(activeSolution.id)}
                >
                  Saiba mais <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Card Image */}
            <div className="card-image-side-3e">
              <img 
                src={activeSolution.images[0] || '/site-poweresco/img/imagem01_nossassolucoes.png'} 
                alt={activeSolution.title} 
                className="card-preview-img-3e"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsAccordion;
