import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import ContactModal from './ContactModal';

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  decimalChar?: string;
}

const CountUp: React.FC<CountUpProps> = ({ 
  end, 
  prefix = '', 
  suffix = '', 
  separator = '', 
  decimals = 0, 
  decimalChar = ',' 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const duration = 2000;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(easeProgress * end);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const formatNumber = (num: number) => {
    let formatted = num.toFixed(decimals);
    if (decimals > 0 && decimalChar !== '.') {
      formatted = formatted.replace('.', decimalChar);
    }
    if (separator && decimals === 0) {
      formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    return prefix + formatted + suffix;
  };

  return <h3 className="about-stat-value" ref={ref}>{formatNumber(count)}</h3>;
};

const stats = [
  { end: 16, prefix: '+', label: 'projetos de alto impacto' },
  { end: 105, prefix: '+', label: 'GWh/ano economizados' },
  { end: 3500, prefix: '+', separator: '.', label: 'TRCO2/ano evitados de emissões' },
  { end: 2.7, prefix: '+', suffix: ' MM', decimals: 1, decimalChar: ',', label: 'pessoas impactadas diretamente' },
  { end: 6, label: 'Estados atendidos' },
];

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="quem-somos" className="about-section">
      <div className="container">
        
        {/* Section: SOBRE A POWER */}
        <div className="about-main-layout">
          <div className="about-text-column animate-fade-left">
            <h2 className="about-heading-title">
              SOBRE A <span className="about-badge-power">POWER</span>
            </h2>
            <p className="about-paragraph-text">
              A Poweresco é uma empresa especializada no desenvolvimento, implantação e gestão de projetos que unem eficiência energética, educação, sustentabilidade e transformação social.
            </p>
            <p className="about-paragraph-text">
              Há 16 anos no mercado, atuamos em parceria com concessionárias de energia, órgãos públicos, instituições de ensino e organizações da sociedade civil, promovendo resultados mensuráveis e alinhados às diretrizes da ANEEL e aos Objetivos de Desenvolvimento Sustentável da ONU.
            </p>
            <p className="about-paragraph-text">
              Com uma equipe multidisciplinar e processos estruturados, desenvolvemos soluções que geram impacto positivo para empresas, comunidades e territórios.
            </p>
          </div>

          <div className="about-image-column animate-fade-right">
            <div className="about-image-container">
              {/* Fallback to img_sobre.png if imagemquemsomos doesn't exist */}
              <img src="/site-poweresco/img/imagem01_quem_somos.png" alt="Sobre a Power" className="about-main-img" />
            </div>
          </div>
        </div>

        {/* Section: NOSSOS DIFERENCIAIS */}
        <div className="about-main-layout reverse-layout" style={{ marginTop: '40px' }}>
          <div className="about-image-column animate-fade-left">
            <div className="about-image-container">
              <img src="/site-poweresco/img/imagem02_quem_somos.png" alt="Diferenciais" className="about-main-img" />
            </div>
          </div>

          <div className="about-text-column animate-fade-right" style={{ paddingLeft: '40px' }}>
            <h2 className="about-heading-title">
              NOSSOS <span className="about-badge-power">DIFERENCIAIS</span>
            </h2>
            <ul className="diferenciais-list" style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
              <li>16 anos de experiência</li>
              <li>Atuação nacional</li>
              <li>Projetos regulados pela ANEEL</li>
              <li>Equipe multidisciplinar</li>
              <li>Gestão completa de projetos</li>
              <li>Certificação ISO 9001</li>
              <li>Especialistas em mobilização social</li>
              <li>Forte atuação em ESG e desenvolvimento sustentável</li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <button className="btn-orange-pill" onClick={() => setIsModalOpen(true)}>
                Fale conosco
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Stats Grid */}
      <div className="about-stats-container">
        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-item">
              <CountUp {...stat} />
              <p className="about-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default About;
