import React from 'react';
import img6 from '../assets/rebrand/image 6.png';
import img7 from '../assets/rebrand/image 7.png';
import img8 from '../assets/rebrand/image 8.png';
import img9 from '../assets/rebrand/image 9.png';
import img10 from '../assets/rebrand/image 10.png';
import img11 from '../assets/rebrand/image 11.png';
import './Projects.css';

const projects = [
  {
    title: 'APAE - LARANJAL DO JARI - AMAPÁ',
    img: img6
  },
  {
    title: 'ESCOLA MUNICIPAL ESTELITA ROCHA',
    img: img7
  },
  {
    title: 'HOSPITAL BENEFICÊNCIA PORTUGUESA',
    img: img8
  },
  {
    title: 'HOSPITAL DO CÂNCER',
    img: img9
  },
  {
    title: 'UNIDADE BÁSICA DE SAÚDE - UBS 2',
    img: img10
  },
  {
    title: 'PREFEITURAS',
    img: img11
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="projects-section">
      <div className="container">
        
        <div className="projects-header animate-fade-up">
          <h2 className="projects-title">PROJETOS POWER</h2>
          <p className="projects-subtitle">
            Alguns projetos realizados pela Poweresco, no brasil
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card-rebrand animate-fade-up">
              <div className="project-image-wrapper-rebrand">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="project-image-rebrand" 
                />
              </div>
              <h3 className="project-card-title-rebrand">{project.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
