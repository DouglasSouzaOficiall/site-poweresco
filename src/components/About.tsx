import React, { useState, useEffect, useRef } from 'react';
import { Target, Zap, Leaf, Users, MapPin } from 'lucide-react';
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
            // easeOutQuart
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

  return <h3 className="stat-value" ref={ref}>{formatNumber(count)}</h3>;
};

const stats = [
  { end: 16, prefix: '+', label: 'projetos de alto impacto', icon: <Target size={40} color="var(--color-primary)" /> },
  { end: 105, prefix: '+', label: 'Gwh/ano economizados', icon: <Zap size={40} color="var(--color-primary)" /> },
  { end: 3500, prefix: '+', separator: '.', label: 'TCO2/ano retirados da atmosfera', icon: <Leaf size={40} color="var(--color-primary)" /> },
  { end: 2.7, prefix: '+', suffix: ' MM', decimals: 1, decimalChar: ',', label: 'pessoas impactadas diretamente', icon: <Users size={40} color="var(--color-primary)" /> },
  { end: 6, label: 'Estados presentes', icon: <MapPin size={40} color="var(--color-primary)" /> },
];

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">QUEM SOMOS</h2>
          <div className="about-content">
            <p className="about-main-text">
              <strong>Nossa história completa 16 anos de impacto:</strong>
            </p>
            <p className="about-sub-text">
              criamos e materializamos soluções para empresas que, como nós, acreditam no equilíbrio entre desenvolvimento econômico e responsabilidade socioambiental para o futuro do país
            </p>
          </div>
        </div>

        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <CountUp {...stat} />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
