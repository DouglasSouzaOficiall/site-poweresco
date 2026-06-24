import React from 'react';
import './Partners.css';

const Partners: React.FC = () => {
  const partners = [
    { name: 'Enel Brasil', logo: '/site-poweresco/img/Logo_Enel.png' },
    { name: 'Equatorial Energia', logo: '/site-poweresco/img/logo_equatorial.png' },
    { name: 'Governo de São Paulo', logo: '/site-poweresco/img/logo_do_governo_de_sao_paulo.png' },
    { name: 'ANEEL', logo: '/site-poweresco/img/logo_aneel.png' },
    { name: 'CDHU', logo: '/site-poweresco/img/logo_cdhu.png' },
    { name: 'A.C. Camargo', logo: '/site-poweresco/img/logo_ac_camargo.png' },
    { name: 'Beneficência Portuguesa', logo: '/site-poweresco/img/logo_benefiencia_portuguesa.png' },
    { name: 'G10 Favelas', logo: '/site-poweresco/img/logo_g10_favelas.png' },
    { name: 'APAE', logo: '/site-poweresco/img/logo_apae.png' },
    { name: 'Doutores da Alegria', logo: '/site-poweresco/img/logo_doutor_da_alegria.png' },
    { name: 'DIEESE', logo: '/site-poweresco/img/logo_dieese.png' }
  ];

  return (
    <section id="clientes" className="partners-section">
      <div className="container partners-container">
        <div className="partners-header">
          <span className="badge-premium-orange">CLIENTES E PARCEIROS</span>
          <h2 className="partners-title">Confiança que gera resultados</h2>
          <p className="partners-subtitle">
            Trabalhamos ao lado das maiores distribuidoras de energia e instituições públicas e privadas do país.
          </p>
        </div>

        <div className="partners-ticker">
          <div className="partners-ticker-inner">
            {/* Double the list for infinite smooth loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="partner-logo-card">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  title={partner.name} 
                  className="partner-logo-img" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
