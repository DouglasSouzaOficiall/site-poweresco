import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import './Awards.css';

const Awards: React.FC = () => {
  return (
    <section id="premios" className="awards-section">
      <div className="awards-overlay"></div>
      <div className="container awards-container">
        <div className="awards-header">
          <h2 className="awards-title">Reconhecimento COBEE 2025</h2>
          <p className="awards-desc">
            A Poweresco Soluções foi reconhecida com duas premiações no Congresso Brasileiro de Eficiência Energética, promovido pela ABESCO.
          </p>
        </div>

        <div className="awards-grid">
          <div className="award-item">
            <div className="award-icon">
              <Award size={32} />
            </div>
            <div className="award-content">
              <h3>Categoria 8 – Calamidade Pública</h3>
              <p>Projeto executado pela Poweresco Soluções, levando eficiência energética a comunidades atingidas por calamidades.</p>
            </div>
          </div>

          <div className="award-item">
            <div className="award-icon">
              <BookOpen size={32} />
            </div>
            <div className="award-content">
              <h3>Categoria 10 – Pesquisa e Sustentabilidade</h3>
              <p>Projeto educacional financiado pela Enel SP, demonstrando como energia e educação transformam o futuro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
