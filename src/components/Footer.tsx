import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ContactModal from './ContactModal';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import logoBranco from '../assets/logobranco.png';
import iconFb from '../assets/Group 2591.png';
import iconIg from '../assets/Group 2592.png';
import iconYt from '../assets/Group 2593.png';
import iconIn from '../assets/Group 2594.png';
import './Footer.css';

const Footer: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <footer id="contato" className="footer-section">
      
      {/* CTA Career Banner */}
      <div id="carreira" className="career-banner">
        <div className="container career-container">
          <div className="career-text">
            <h3>CARREIRA</h3>
            <h2>FAÇA PARTE DO <span className="text-neon">TIME</span></h2>
          </div>
          <button className="btn-dark" onClick={() => setIsContactModalOpen(true)}>
            Fale conosco <MessageCircle size={20} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </div>
      
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />

      <div className="footer-content-wrapper">
        <div className="container">
          <div className="footer-grid">
            
            {/* Logo & About */}
            <div className="footer-brand">
              <img src={logoBranco} alt="Poweresco" className="footer-logo" />
              <p className="footer-desc">
                Sua empresa socialmente<br />justa, Ambientalmente<br />Responsável e<br />financeiramente Viável
              </p>
            </div>

            {/* Menu */}
            <div className="footer-links">
              <h4 className="footer-title">CARREIRA</h4>
              <ul>
                <li><a href="#carreira">FAÇA PARTE DO TIME</a></li>
              </ul>
              
              <h4 className="footer-title mt-4">MENU</h4>
              <ul>
                <li><a href="#quem-somos">QUEM SOMOS</a></li>
                <li><a href="#projetos">PROJETOS</a></li>
                <li><a href="#contato" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }}>FALE CONOSCO</a></li>
                <li><a href="#carreira">TRABALHE COM A GENTE</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h4 className="footer-title">CONTATO</h4>
              <div className="contact-item">
                <span>SÃO PAULO: (11) 4883-2154</span>
                <strong>RUA DA GÁVEA, 229</strong>
              </div>
              <div className="contact-item mt-3">
                <span>GOIÂNIA: (11) 4883-2154</span>
                <strong>RUA DA GÁVEA, 229</strong>
              </div>
              <div className="contact-item mt-3">
                <span>CEARÁ: (11) 4883-2154</span>
                <strong>RUA DA GÁVEA, 229</strong>
              </div>
            </div>

            {/* Others */}
            <div className="footer-links">
              <h4 className="footer-title">OUTROS</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }}>POLÍTICA DE PRIVACIDADE</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="copyright">
            <strong>POWERESCO</strong> 2023 | TODOS OS DIREITOS RESERVADOS
          </div>
          
          <div className="social-links-wrapper">
            <span className="social-text">SIGA-NOS NAS REDES SOCIAIS</span>
            <div className="social-icons">
              <a href="#"><img src={iconFb} alt="Facebook" /></a>
              <a href="#"><img src={iconIg} alt="Instagram" /></a>
              <a href="#"><img src={iconYt} alt="YouTube" /></a>
              <a href="#"><img src={iconIn} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
