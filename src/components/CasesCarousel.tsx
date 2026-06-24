import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckSquare } from 'lucide-react';
import './CasesCarousel.css';

interface CaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: string;
}

const CasesCarousel: React.FC = () => {
  const casesData: CaseItem[] = [
    {
      id: 'enel-escola',
      title: 'Enel Compartilha Energia na Escola',
      category: 'Educação Energética',
      description: 'Programas de conscientização que disseminam hábitos inteligentes de consumo de energia, formação de multiplicadores e tecnologia imersiva nas redes de ensino.',
      image: '/site-poweresco/img/enel_compartilha_escola.jpeg',
      stats: '+800 escolas participantes'
    },
    {
      id: 'eficiencia-hospitalar',
      title: 'Eficiência Energética Hospitalar',
      category: 'Eficiência Técnica',
      description: 'Execução de diagnósticos detalhados, retrofit completo de iluminação para LED e instalação de sistemas fotovoltaicos para redução de despesas em saúde.',
      image: '/site-poweresco/img/eficiencia_hospitalar.png',
      stats: 'Até 40% de redução no consumo'
    },
    {
      id: 'e-profissional',
      title: 'E+ Profissional & Empregabilidade',
      category: 'Desenvolvimento Social',
      description: 'Formação profissional certificada de eletricistas residenciais e prediais de baixa renda, além de conexões diretas para mercado de trabalho regional.',
      image: '/site-poweresco/img/imagem01_casedesucessos.png',
      stats: '+10 mil profissionais formados'
    },
    {
      id: 'troca-geladeiras',
      title: 'Programas de Troca de Geladeiras',
      category: 'Eficiência Comunitária',
      description: 'Logística de substituição de geladeiras antigas e ineficientes por aparelhos novos com selo Procel A de economia, beneficiando milhares de famílias.',
      image: '/site-poweresco/img/programas_educacionais_comunitarios.jpeg',
      stats: '+350 mil geladeiras trocadas'
    },
    {
      id: 'prefeituras-iluminacao',
      title: 'Parcerias com Prefeituras',
      category: 'Gestão Integrada',
      description: 'Modernização de frotas, adequação tarifária e eficiência de prédios administrativos em dezenas de municípios integrando agendas ESG públicas.',
      image: '/site-poweresco/img/prefeituras.png',
      stats: '+250 cidades atendidas'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prevIdx) => (prevIdx + 1) % casesData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [casesData.length]);

  const handlePrev = () => {
    setActiveIdx((prevIdx) => (prevIdx - 1 + casesData.length) % casesData.length);
  };

  const handleNext = () => {
    setActiveIdx((prevIdx) => (prevIdx + 1) % casesData.length);
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIdx(index);
  };

  return (
    <section id="cases" className="cases-section">
      <div className="container cases-container">
        <div className="cases-header">
          <span className="badge-premium-orange">CASES DE SUCESSO</span>
          <h2 className="cases-title">Histórias reais de impacto e transformação</h2>
          <p className="cases-subtitle">
            Conheça alguns dos principais projetos que executamos e os resultados gerados em todo o território nacional.
          </p>
        </div>

        <div className="carousel-wrapper">
          {casesData.map((item, index) => {
            const isActive = index === activeIdx;
            return (
              <div 
                key={item.id} 
                className={`carousel-slide ${isActive ? 'active' : ''}`}
              >
                {isActive && (
                  <div className="slide-content-grid">
                    <div className="slide-image-area">
                      <img src={item.image} alt={item.title} className="slide-img" />
                      <div className="slide-badge-category">{item.category}</div>
                    </div>
                    
                    <div className="slide-info-area">
                      <h3 className="slide-title">{item.title}</h3>
                      <p className="slide-description">{item.description}</p>
                      
                      <div className="slide-stat-highlight">
                        <CheckSquare size={20} className="slide-stat-icon" />
                        <div>
                          <span className="stat-num">{item.stats}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Navigation Controls */}
          <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Anterior">
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Próximo">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators">
          {casesData.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${index === activeIdx ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesCarousel;
