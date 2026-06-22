import React, { useState } from 'react';
import { solutionsData } from '../data/solutionsData';
import './SolutionsAccordion.css';

const SolutionsAccordion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(solutionsData[0].id);

  const activeSolution = solutionsData.find(s => s.id === activeTab) || solutionsData[0];

  return (
    <section id="solucoes" className="solutions-accordion-section">
      <div className="container solutions-accordion-container">
        
        {/* Left Side: Accordion Tabs */}
        <div className="solutions-tabs-column">
          <h2 className="solutions-accordion-title">
            NOSSAS <span className="solutions-badge-white">SOLUÇÕES</span>
          </h2>
          
          <ul className="solutions-tabs-list">
            {solutionsData.map(solution => (
              <li key={solution.id}>
                <button 
                  className={`solution-tab-btn ${activeTab === solution.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(solution.id)}
                >
                  {solution.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Content Card */}
        <div className="solutions-content-column">
          <div className="solution-content-card">
            
            <div className="solution-card-left">
              <h3 className="solution-card-title">{activeSolution.title}</h3>
              <h4 className="solution-card-subtitle">{activeSolution.subtitle}</h4>
              <p className="solution-card-text">{activeSolution.text}</p>
              
              <button 
                className="btn-saiba-mais"
                onClick={() => { window.location.hash = `#/solucoes/${activeSolution.id}`; }}
              >
                Saiba mais sobre <span className="arrow-diagonal">↗</span>
              </button>
            </div>

            <div className="solution-card-right">
              {activeSolution.images.map((img, idx) => (
                <div key={idx} className="solution-mini-img-wrapper">
                  <img src={img} alt={`Imagem ${idx + 1}`} className="solution-mini-img" />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsAccordion;
