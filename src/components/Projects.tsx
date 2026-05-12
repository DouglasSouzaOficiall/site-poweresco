import React from 'react';
import img6 from '../assets/image 6.png';
import img7 from '../assets/image 7.png';
import img8 from '../assets/image 8.png';
import img9 from '../assets/image 9.png';
import img10 from '../assets/image 10.png';
import img11 from '../assets/image 11.png';
import './Projects.css';

const projects = [
  {
    title: 'APAE - LARANJAL\nDO JARI - AMAPÁ',
    img: img6
  },
  {
    title: 'ESCOLAS\nMUNICIPAIS E\nESTADUAIS DE SP',
    img: img7
  },
  {
    title: 'HOSPITAL\nBENEFICÊNCIA\nPORTUGUESA',
    img: img8
  },
  {
    title: 'HOSPITAL AC\nCAMARGO',
    img: img9
  },
  {
    title: 'UNIDADES\nHABITACIONAIS - CDHU',
    img: img10
  },
  {
    title: 'PREFEITURAS',
    img: img11
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">PROJETOS POWER</h2>
          <p className="projects-subtitle">
            Alguns projetos realizados pela Poweresco, no brasil
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.img} 
                  alt={project.title.replace(/\n/g, ' ')} 
                  className="project-image" 
                />
                <div className="project-overlay">
                  <h3 className="project-card-title">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
