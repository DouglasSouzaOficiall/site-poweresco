import React, { useState, useEffect, useRef } from 'react';
import { Award, Zap, ShieldAlert, Users, Globe } from 'lucide-react';
import './Stats.css';

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
            const easeProgress = 1 - Math.pow(1 - progress, 4); // EaseOutQuart
            
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

const Stats: React.FC = () => {
  const statsData = [
    {
      icon: <Award size={28} />,
      end: 16,
      prefix: '+',
      label: 'projetos de alto impacto'
    },
    {
      icon: <Zap size={28} />,
      end: 105,
      prefix: '+',
      suffix: ' GWh/ano',
      label: 'economizados'
    },
    {
      icon: <ShieldAlert size={28} />,
      end: 3500,
      prefix: '+',
      separator: '.',
      suffix: ' tCO₂/ano',
      label: 'evitados de emissões'
    },
    {
      icon: <Users size={28} />,
      end: 2.7,
      prefix: '+',
      suffix: ' M',
      decimals: 1,
      decimalChar: ',',
      label: 'pessoas impactadas'
    },
    {
      icon: <Globe size={28} />,
      end: 6,
      label: 'Estados atendidos'
    }
  ];

  return (
    <section id="impacto" className="stats-section">
      <div className="container stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-info">
                <CountUp 
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  separator={stat.separator}
                  decimals={stat.decimals}
                  decimalChar={stat.decimalChar}
                />
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
