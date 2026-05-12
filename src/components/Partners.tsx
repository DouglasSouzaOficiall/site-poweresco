import React from 'react';
import { Shield, Zap, TrendingUp, Sun, Wind, Droplet } from 'lucide-react';
import './Partners.css';

const Partners: React.FC = () => {
  const partners = [
    { icon: <Shield size={48} />, name: "EcoShield" },
    { icon: <Zap size={48} />, name: "PowerTech" },
    { icon: <TrendingUp size={48} />, name: "GreenGrowth" },
    { icon: <Sun size={48} />, name: "Solaris" },
    { icon: <Wind size={48} />, name: "AeroGen" },
    { icon: <Droplet size={48} />, name: "HydroFlow" },
  ];

  return (
    <section id="parceiros" className="partners-section">
      <div className="container">
        <h2 className="section-title">Nossos Parceiros</h2>
        <div className="section-divider"></div>
        <p className="partners-subtitle">Empresas que acreditam e constroem um futuro sustentável conosco.</p>
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {/* Double the list to create infinite seamless scrolling */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-icon">
                {partner.icon}
              </div>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
