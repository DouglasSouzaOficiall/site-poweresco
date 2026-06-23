import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import CookieConsent from '../components/CookieConsent';
import { solutionsData } from '../data/solutionsData';
import './SolutionPage.css';

const SolutionPage: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHash = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHash);
    
    // Scroll to top on initial render
    window.scrollTo(0, 0);
    
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const solutionId = currentHash.split('/').pop() || '';
  const solution = solutionsData.find(s => s.id === solutionId) || solutionsData[0];

  // Helper function to dynamically add highlights to key terms in the title
  const renderTitle = (title: string) => {
    const words = title.split(' ');
    if (words.length <= 1) return title;
    
    // Key words that we want to style with the orange background badge
    const highlightWords = ['Conscientização', 'Eficiência', 'Comunitário', 'Empregabilidade', 'Circular', 'Transformação', 'ESG', 'Integrada'];
    
    return (
      <>
        {words.map((word, idx) => {
          // Remove punctuation to check the word
          const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
          const shouldHighlight = highlightWords.includes(cleanWord);
          
          return (
            <React.Fragment key={idx}>
              {shouldHighlight ? (
                <>
                  <br />
                  <span className="bg-orange-highlight">{word}</span>
                  <br />
                </>
              ) : (
                word
              )}
              {idx < words.length - 1 ? ' ' : ''}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Navbar />
      
      <main className="solution-page-main animate-fade-up">
        {/* Header Hero */}
        <div className="solution-hero">
          <div className="container">
            <h1 className="solution-hero-title">
              {renderTitle(solution.title)}
            </h1>
          </div>
        </div>

        {/* Content Card (Overlapping the hero) */}
        <div className="solution-content-wrapper">
          <div className="container">
            <div className="solution-white-card">
              
              <h2 className="solution-main-heading">
                {solution.subtitle}
              </h2>
              
              {solution.paragraphs && solution.paragraphs.map((p, idx) => (
                <p key={idx} className={`solution-main-text ${idx === 0 ? 'bold-text' : ''}`}>
                  {p}
                </p>
              ))}

              <div className="solution-sections-grid">
                {solution.sections && solution.sections.map((section, idx) => (
                  <div key={idx} className="solution-section-card">
                    <h3 className="solution-col-title">{section.title}</h3>
                    {section.description && (
                      <p className="solution-section-description">{section.description}</p>
                    )}
                    <ul className="solution-list">
                      {section.items && section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Image Carousel (Static representation with correct images) */}
              {solution.images && solution.images.length > 0 && (
                <div className="solution-carousel-section">
                  <button className="solution-nav-btn prev" aria-label="Anterior">&#10094;</button>
                  <div className="solution-images-container">
                    {solution.images.map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt={`Galeria ${idx + 1}`} 
                        className={`solution-gallery-img ${idx === 1 ? 'center-img' : ''}`} 
                      />
                    ))}
                  </div>
                  <button className="solution-nav-btn next" aria-label="Próxima">&#10095;</button>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </>
  );
};

export default SolutionPage;
