import React from 'react';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import './About.css';

interface AboutProps {
  onOpenContact: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const differentials = [
    '16 anos de experiência',
    'Atuação nacional',
    'Projetos regulados pela ANEEL',
    'Equipe multidisciplinar',
    'Gestão completa de projetos',
    'Certificação ISO 9001',
    'Especialistas em mobilização social',
    'Forte atuação em ESG e desenvolvimento sustentável'
  ];

  return (
    <section id="quem-somos" className="about-section">
      <div className="container about-container">
        <div className="about-grid">
          {/* Text Content Area */}
          <div className="about-text-content">
            <span className="badge-premium-orange mb-2">QUEM SOMOS</span>
            <h2 className="section-title">
              Unindo eficiência, educação e transformação social
            </h2>
            <div className="section-description">
              <p>
                A <strong>Power Esco</strong> é uma empresa especializada no desenvolvimento, 
                implantação e gestão de projetos que unem eficiência energética, educação, 
                sustentabilidade e transformação social.
              </p>
              <p>
                Há 16 anos no mercado, atuamos em parceria com concessionárias de energia, 
                órgãos públicos, instituições de ensino e organizações da sociedade civil, 
                promovendo resultados mensuráveis e alinhados às diretrizes da ANEEL e aos 
                Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
              </p>
              <p>
                Com uma equipe multidisciplinar e processos estruturados, desenvolvemos soluções 
                que geram impacto positivo para empresas, comunidades e territórios.
              </p>
            </div>

            <div className="differentials-block">
              <h3>Nossos Diferenciais</h3>
              <div className="differentials-grid">
                {differentials.map((diff, index) => (
                  <div key={index} className="diff-item">
                    <CheckCircle2 size={18} className="diff-icon" />
                    <span>{diff}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn-primary-orange mt-4" onClick={onOpenContact}>
              Fale Conosco <PhoneCall size={18} />
            </button>
          </div>

          {/* Visual Images Grid */}
          <div className="about-visuals">
            <div className="image-wrapper main-img-wrapper animate-float">
              <img 
                src="/site-poweresco/img/imagem01_quem_somos.png" 
                alt="Equipe Poweresco" 
                className="about-image main-img"
              />
            </div>
            <div className="image-wrapper sub-img-wrapper">
              <img 
                src="/site-poweresco/img/imagem02_quem_somos.png" 
                alt="Ação de Mobilização" 
                className="about-image sub-img"
              />
              <div className="experience-badge">
                <h4>16+</h4>
                <p>Anos de Sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
