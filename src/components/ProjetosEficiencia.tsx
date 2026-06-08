import React, { useState } from 'react';
import ContactModal from './ContactModal';
import img1 from '../assets/rebrand/eficiencia/WhatsApp Image 2026-05-08 at 13.26.31 (1) 1.png';
import img2 from '../assets/rebrand/eficiencia/WhatsApp Image 2026-05-20 at 11.31.30 1.png';
import img3 from '../assets/rebrand/eficiencia/WhatsApp Image 2026-05-29 at 10.12.15 1.png';
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
            </div>
          </div>

          {/* Right Column: Title and CTA */}
          <div className="efi-content animate-fade-right">
            <h2 className="efi-title">
              PROJETOS DE <span className="efi-badge-orange">EFICIÊNCIA ENERGÉTICA</span> <br />
              E IMPACTO SOCIAL
            </h2>
            
            <p className="efi-paragraph">
              A Poweresco transforma comunidades por meio de projetos integrados. Nossa atuação vai do planejamento à execução em campo, oferecendo:
            </p>

            <ul className="efi-list">
              <li><strong>Sustentabilidade:</strong> Substituição de equipamentos por tecnologias econômicas.</li>
              <li><strong>Educação:</strong> Conscientização sobre o consumo de energia consciente.</li>
              <li><strong>Excelência:</strong> Gestão logística, segurança operacional e rastreabilidade total.</li>
            </ul>

            <p className="efi-paragraph">
              Nosso compromisso vai além da operação: unimos sustentabilidade, educação e impacto social. Atuando em vários estados do Brasil, desenvolvemos projetos alinhados aos Programas de Eficiência Energética das concessionárias, reduzindo o desperdício de energia e levando inovação e consciência ambiental para milhares de famílias.
            </p>
            
            <div className="efi-cta-wrapper">
              <button className="efi-btn" onClick={() => setIsModalOpen(true)}>
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
