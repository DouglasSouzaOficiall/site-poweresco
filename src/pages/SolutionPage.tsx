import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, CheckSquare, ChevronRight, ChevronLeft, Phone } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';
import { carouselImages } from '../data/carouselImages';
import './SolutionPage.css';

interface SolutionPageProps {
  solutionId: string;
  onOpenContact: () => void;
}

const SolutionPage: React.FC<SolutionPageProps> = ({ solutionId, onOpenContact }) => {
  const solution = solutionsData.find((s) => s.id === solutionId);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Scroll to top when solution page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIdx(0);
  }, [solutionId]);

  if (!solution) {
    return (
      <div className="solution-error-container">
        <h2>Solução não encontrada</h2>
        <a href="#/" className="btn-primary-orange">
          <ArrowLeft size={18} /> Voltar para a Home
        </a>
      </div>
    );
  }

  const images = carouselImages[solutionId] || [];
  const displayImages = images.length > 0 ? images : solution.images;

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % displayImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [displayImages.length]);

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % displayImages.length);
  };

  const handleBackToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.setItem('scrollToSection', 'solucoes');
    window.location.hash = '#/';
  };

  return (
    <div className="solution-page-wrapper">
      {/* Editorial Header Banner */}
      <header className="solution-header-banner">
        <div className="solution-header-overlay"></div>
        <div className="container solution-header-container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <a href="#/" className="breadcrumb-link">Home</a>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <a href="#/" onClick={handleBackToSolutions} className="breadcrumb-link">Soluções</a>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">{solution.title}</span>
          </div>

          <h1 className="solution-page-title">{solution.title}</h1>
          <p className="solution-page-subtitle">{solution.subtitle}</p>
        </div>
      </header>

      {/* Main Grid Content */}
      <section className="solution-detail-section">
        <div className="container solution-detail-container">
          <div className="solution-detail-grid">
            {/* Left Content Area */}
            <div className="solution-main-content">
              <div className="solution-text-block">
                {solution.paragraphs.map((p, idx) => (
                  <p key={idx} className="solution-paragraph">{p}</p>
                ))}
              </div>

              {/* Image Carousel */}
              <div className="solution-carousel-wrapper">
                <h3 className="solution-carousel-title">Galeria de Imagens</h3>
                <div className="solution-carousel-container">
                  <div className="solution-carousel-slide">
                    <img 
                      src={displayImages[activeImageIdx]} 
                      alt={`${solution.title} - Imagem ${activeImageIdx + 1}`} 
                      className="solution-carousel-img" 
                    />
                    <div className="solution-carousel-counter">
                      {activeImageIdx + 1} / {displayImages.length}
                    </div>
                  </div>

                  {displayImages.length > 1 && (
                    <>
                      <button 
                        className="sol-carousel-btn prev" 
                        onClick={handlePrevImage} 
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        className="sol-carousel-btn next" 
                        onClick={handleNextImage} 
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {displayImages.length > 1 && (
                  <div className="solution-carousel-indicators">
                    {displayImages.slice(0, 15).map((_, idx) => (
                      <button
                        key={idx}
                        className={`sol-indicator-dot ${idx === activeImageIdx ? 'active' : ''}`}
                        onClick={() => setActiveImageIdx(idx)}
                        aria-label={`Ir para imagem ${idx + 1}`}
                      />
                    ))}
                    {displayImages.length > 15 && (
                      <span className="sol-indicators-more">...</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar Area: Core Activities & Projects */}
            <aside className="solution-sidebar">
              {solution.sections.map((section, secIdx) => (
                <div key={secIdx} className="sidebar-card">
                  <h3 className="sidebar-card-title">{section.title}</h3>
                  {section.description && (
                    <p className="sidebar-card-description">{section.description}</p>
                  )}
                  <ul className="sidebar-list">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="sidebar-list-item">
                        <CheckSquare size={16} className="sidebar-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="solution-cta-section">
        <div className="container solution-cta-container">
          <div className="solution-cta-card">
            <h2 className="solution-cta-title">Quer implementar esta solução no seu território?</h2>
            <p className="solution-cta-text">
              Nossa equipe técnica e especialistas comunitários estão prontos para planejar e executar o seu projeto.
            </p>
            <div className="solution-cta-buttons">
              <button className="btn-primary-orange" onClick={onOpenContact}>
                Falar com Especialista <Phone size={18} />
              </button>
              <a href="#/" onClick={handleBackToSolutions} className="btn-outline-white">
                Ver outras soluções <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;
