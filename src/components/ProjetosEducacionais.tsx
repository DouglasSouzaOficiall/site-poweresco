import React, { useState } from 'react';
import ContactModal from './ContactModal';
import img1 from '../assets/rebrand/educacional/WhatsApp Image 2026-04-08 at 07.54.24 (3) 1.png';
import img2 from '../assets/rebrand/educacional/WhatsApp Image 2026-04-08 at 07.54.24 (3) 2.png';
import img3 from '../assets/rebrand/educacional/WhatsApp Image 2026-04-08 at 07.54.24 (3) 3.png';
import ellipse3 from '../assets/rebrand/educacional/Ellipse 3.png';
import './ProjetosEducacionais.css';

const ProjetosEducacionais: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="projetos-educacionais" className="edu-section">
        <div className="container edu-container">
          
          {/* Left Column: Text & List */}
          <div className="edu-content animate-fade-left">
            <h2 className="edu-title">
              PROJETOS <span className="edu-badge-lime">EDUCACIONAIS</span>
            </h2>
            
            <p className="edu-paragraph">
              A Poweresco transforma o aprendizado sobre o uso seguro, eficiente e sustentável da energia em uma jornada instigante, colaborativa e inspiradora. Em parceria com escolas, feiras de ciência, mostras tecnológicas e comunidades, promovemos projetos de conscientização e capacitação energética para todas as faixas etárias.
            </p>
            
            <p className="edu-paragraph">
              Utilizamos metodologias ativas para engajar estudantes e comunidades, transformando-os em agentes transformadores de suas próprias realidades.
            </p>

            <h3 className="edu-list-title">Nossas principais iniciativas incluem:</h3>
            <ul className="edu-list">
              <li>Teatro, jogos educativos e dinâmicas interativas;</li>
              <li>Carreta da Ciência com tecnologias inovadoras;</li>
              <li>Formação de professores e lideranças comunitárias;</li>
              <li>Concursos e gincanas com premiação comunitária.</li>
            </ul>

            <button className="edu-btn" onClick={() => setIsModalOpen(true)}>
              Saiba Mais <span className="arrow-diagonal">↗</span>
            </button>
          </div>

          {/* Right Column: Staggered/Curved Images */}
          <div className="edu-images-column animate-fade-right">
            {/* Decorative curved ellipse */}
            <img src={ellipse3} alt="Decoration curve" className="edu-decor-ellipse" />
            
            <div className="edu-images-wrapper">
              <div className="edu-img-card top-img">
                <img src={img1} alt="Apresentação escolar" />
              </div>
              <div className="edu-img-card middle-img">
                <img src={img2} alt="Estudantes usando óculos VR" />
              </div>
              <div className="edu-img-card bottom-img">
                <img src={img3} alt="Crianças na biblioteca" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProjetosEducacionais;
