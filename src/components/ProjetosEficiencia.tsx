import React, { useState } from 'react';
import ContactModal from './ContactModal';
import img1 from '../assets/rebrand/eficiencia/WhatsApp Image 2026-05-08 at 13.26.31 (1) 1.png';
import img2 from '../assets/rebrand/eficiencia/WhatsApp Image 2026-05-20 at 11.31.30 1.png';
import img3 from '../assets/rebrand/eficiencia/WhatsApp Image 2026-05-29 at 10.12.15 1.png';
import ellipse4 from '../assets/rebrand/eficiencia/Ellipse 4.png';
import './ProjetosEficiencia.css';

const ProjetosEficiencia: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="projetos-eficiencia" className="efi-section">
        <div className="container efi-container">
          
          {/* Left Column: Stacked Images */}
          <div className="efi-images-column animate-fade-left">
            <div className="efi-images-wrapper">
              <div className="efi-img-card top-img">
                <img src={img1} alt="Galpão com estande azul" />
              </div>
              <div className="efi-img-card middle-img">
                <img src={img2} alt="Workshop com cadeiras vermelhas" />
              </div>
              <div className="efi-img-card bottom-img">
                <img src={img3} alt="Carregando veículo" />
              </div>
              
              {/* Decorative curved ellipse */}
              <img src={ellipse4} alt="Decoration curve" className="efi-decor-ellipse" />
            </div>
          </div>

          {/* Right Column: Title and CTA */}
          <div className="efi-content animate-fade-right">
            <h2 className="efi-title">
              PROJETOS DE <br />
              <span className="efi-badge-orange">EFICIÊNCIA ENERGÉTICA</span> <br />
              E IMPACTO SOCIAL
            </h2>
            
            <div className="efi-cta-wrapper">
              <button className="btn-hero" onClick={() => setIsModalOpen(true)}>
                Fale com a gente! <span className="arrow-diagonal">↗</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProjetosEficiencia;
