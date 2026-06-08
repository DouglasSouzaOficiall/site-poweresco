import React, { useState } from 'react';
import { Zap, TrendingUp, Heart, Globe } from 'lucide-react';
import ContactModal from './ContactModal';
import backOquefazemos from '../assets/rebrand/o que fazemos/back_oquefazemos.png';
import './Services.css';

const services = [
  {
    title: 'Eficiência\nEnergética',
    icon: Zap,
    items: [
      'Geração solar fotovoltaica',
      'Aquecimento solar de água',
      'Iluminação e ar-condicionado',
      'Motores e geradores',
      'Automação residencial'
    ]
  },
  {
    title: 'Desenvolvimento\ne Expansão',
    icon: TrendingUp,
    items: [
      'Relacionamento estratégico',
      'Posicionamento de marca',
      'Expansão de mercado',
      'Desenvolvimento de produto'
    ]
  },
  {
    title: 'Projetos\nSociais',
    icon: Heart,
    items: [
      'Oficinas comunitárias',
      'Cursos de capacitação',
      'Treinamentos técnicos',
      'Imersões e eventos sociais'
    ]
  },
  {
    title: 'Projetos\nAmbientais',
    icon: Globe,
    items: [
      'Troca de equipamentos',
      'Ciclo reverso / Logística',
      'Upcycling e reciclagem',
      'Capacitação de grupos'
    ]
  }
];

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="o-que-fazemos" className="services-section">
        {/* Background Image with Green Tint Overlay */}
        <div className="services-bg-overlay" style={{ backgroundImage: `url(${backOquefazemos})` }}></div>
        <div className="services-green-mask"></div>

        <div className="container services-container">
          
          <div className="services-header animate-fade-up">
            <h2 className="services-title">
              O QUE <span className="services-badge-orange">FAZEMOS</span>
            </h2>
          </div>

          <div className="services-cards-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-rebrand-card animate-fade-up">
                  <div className="service-rebrand-icon-wrapper">
                    <Icon size={28} className="service-rebrand-icon" />
                  </div>
                  <h3 className="service-rebrand-title">{service.title}</h3>
                  <ul className="service-rebrand-list">
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="services-cta animate-fade-up">
            <button className="btn-hero" onClick={() => setIsModalOpen(true)}>
              Fale com a gente! <span className="arrow-diagonal">↗</span>
            </button>
          </div>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Services;
