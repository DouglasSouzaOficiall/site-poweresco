import React, { useState, useEffect, useRef } from 'react';
import imgSobre from '../assets/rebrand/sobre a power/img_sobre.png';
import ellipse1 from '../assets/rebrand/sobre a power/Ellipse 1.png';
import './About.css';

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
          const duration = 2000; // 2 seconds

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
  { end: 105, prefix: '+', label: 'Gwh/ano economizados' },
  { end: 3500, prefix: '+', separator: '.', label: 'TCO2/ano retirados da atmosfera' },
  { end: 2.7, prefix: '+', suffix: ' MM', decimals: 1, decimalChar: ',', label: 'pessoas impactadas diretamente' },
  { end: 6, label: 'Estados presentes' },
];

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="about-section">
      <div className="container">
        
        {/* Main Content Layout */}
        <div className="about-main-layout">
          <div className="about-text-column animate-fade-left">
            <div className="about-subtitle-tag">
              SOBRE A <span className="about-badge-power">POWER</span>
            </div>
            <h2 className="about-heading-title">
              Nossa história completa 16 anos de impacto:
            </h2>
            <p className="about-paragraph-text">
              criamos e materializamos soluções para empresas que, como nós, acreditam no equilíbrio entre desenvolvimento econômico e responsabilidade socioambiental para o futuro do país
            </p>
          </div>

          <div className="about-image-column animate-fade-right">
            <div className="about-image-container">
              <img src={imgSobre} alt="Impacto Poweresco" className="about-main-img" />
              <img src={ellipse1} alt="Decoration" className="about-ellipse-decor" />
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

      </div>
    </section>
  );
};

export default About;
