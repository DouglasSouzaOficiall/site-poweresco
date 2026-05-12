import { Zap, TrendingUp, Heart, Globe } from 'lucide-react';
import imagemProjetos from '../assets/imagemprojetos.png';
import imagemQuemSomos from '../assets/imagemquemsomos.png';
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
  return (
    <section id="projetos" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">O QUE FAZEMOS</h2>
          <p className="services-desc">
            Criamos, implantamos e gerimos projetos de sustentabilidade para<br className="desktop-br" />
            empresas que precisam tornar realidade seus objetivos de impacto.
          </p>
        </div>

        <div className="services-content-layout">
          <div className="services-cards-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className="service-card-icon">
                    <Icon size={40} color="var(--color-primary)" strokeWidth={1.5} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <ul className="service-card-list">
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="services-image-column">
            <div className="services-image-wrapper">
              <img 
                src={imagemQuemSomos} 
                alt="Projetos de sustentabilidade Poweresco" 
                className="services-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Banner de Projetos em tela cheia */}
      <div className="projects-banner-container">
        <img 
          src={imagemProjetos} 
          alt="Nossos Projetos" 
          className="projects-banner-image" 
        />
        <div className="projects-banner-accent"></div>
      </div>

    </section>
  );
};

export default Services;
