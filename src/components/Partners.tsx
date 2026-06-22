import React from 'react';
import './Partners.css';

const partners = [
  { name: 'Enel Brasil', img: '/site-poweresco/img/Logo_Enel.png' },
  { name: 'ANEEL', img: '/site-poweresco/img/logo_aneel.png' },
  { name: 'Equatorial', img: '/site-poweresco/img/logo_equatorial.png' },
  { name: 'São Paulo Gov', img: '/site-poweresco/img/logo_do_governo_de_sao_paulo.png' },
  { name: 'A.C. Camargo', img: '/site-poweresco/img/logo_ac_camargo.png' },
  { name: 'CDHU', img: '/site-poweresco/img/logo_cdhu.png' },
  { name: 'DIEESE', img: '/site-poweresco/img/logo_dieese.png' },
  { name: 'G10 Favelas', img: '/site-poweresco/img/logo_g10_favelas.png' },
  { name: 'Beneficiência Portuguesa', img: '/site-poweresco/img/logo_benefiencia_portuguesa.png' },
  { name: 'APAE', img: '/site-poweresco/img/logo_apae.png' }
];

const Partners: React.FC = () => {
  return (
    <section id="clientes" className="partners-section">
      <div className="container">
        <h2 className="partners-title">NOSSOS PARCEIROS</h2>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo-wrapper">
              <img src={partner.img} alt={partner.name} className="partner-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
