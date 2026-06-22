import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import CookieConsent from '../components/CookieConsent';
import './SolutionPage.css';

const SolutionPage: React.FC = () => {
  // Extract solution ID from hash URL if needed (e.g. #/solucoes/educacao)
  // For this implementation, we map the exact text provided in Image 1.

  return (
    <>
      <Navbar />
      
      <main className="solution-page-main">
        {/* Header Hero */}
        <div className="solution-hero">
          <div className="container">
            <h1 className="solution-hero-title">
              Educação e<br/>
              <span className="bg-orange-highlight">Conscientização</span><br/>
              Energética
            </h1>
          </div>
        </div>

        {/* Content Card (Overlapping the hero) */}
        <div className="solution-content-wrapper">
          <div className="container">
            <div className="solution-white-card">
              
              <h2 className="solution-main-heading">
                Formando cidadãos mais conscientes para um futuro sustentável
              </h2>
              <p className="solution-main-text bold-text">
                Desenvolvemos programas educacionais que promovem o uso consciente da energia elétrica, sustentabilidade, economia circular e cidadania ambiental.
              </p>
              <p className="solution-main-text">
                Nossas metodologias utilizam capacitação de professores, formação de alunos, experiências imersivas, gamificação, realidade virtual, teatro educativo e tecnologias interativas para estimular mudanças de comportamento e a construção de uma cultura sustentável.
              </p>

              <div className="solution-columns">
                <div className="solution-col">
                  <h3 className="solution-col-title">Principais Atividades</h3>
                  <ul className="solution-list">
                    <li>Programas educacionais em escolas</li>
                    <li>Formação de professores</li>
                    <li>Oficinas e palestras educativas</li>
                    <li>Teatro educativo</li>
                    <li>Realidade virtual</li>
                    <li>Jogos e atividades interativas</li>
                    <li>Educação ambiental</li>
                    <li>Consumo consciente de energia</li>
                  </ul>
                </div>

                <div className="solution-col">
                  <h3 className="solution-col-title">Projetos Desenvolvidos</h3>
                  <ul className="solution-list">
                    <li>Enel Compartilha Energia na Escola</li>
                    <li>E+ Educação</li>
                    <li>Programas Educacionais Comunitários</li>
                  </ul>
                </div>
              </div>

              {/* Bottom Image Carousel (Static representation) */}
              <div className="solution-carousel-section">
                <button className="solution-nav-btn prev">&#10094;</button>
                <div className="solution-images-container">
                  <img src="/site-poweresco/img/imagem01_nossassolucoes.png" alt="Galeria 1" className="solution-gallery-img" />
                  <img src="/site-poweresco/img/imagem01_nossassolucoes.png" alt="Galeria 2" className="solution-gallery-img center-img" />
                  <img src="/site-poweresco/img/imagem01_nossassolucoes.png" alt="Galeria 3" className="solution-gallery-img" />
                </div>
                <button className="solution-nav-btn next">&#10095;</button>
              </div>

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
