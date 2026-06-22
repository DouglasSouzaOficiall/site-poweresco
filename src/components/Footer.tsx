import React, { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import logoBranco from '../assets/rebrand/logobranco.png';
import iconFb from '../assets/rebrand/Group 2591.png';
import iconIg from '../assets/rebrand/Group 2592.png';
import iconYt from '../assets/rebrand/Group 2593.png';
import iconIn from '../assets/rebrand/Group 2594.png';
import './Footer.css';

const Footer: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <footer className="footer-section">
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />

      <div className="footer-top-dark">
        <div className="container footer-container">
          <div className="footer-grid">
            
            {/* Column 1: Logo & Slogan */}
            <div className="footer-column footer-brand">
              <img src={logoBranco} alt="Poweresco" className="footer-logo" />
              <p className="footer-brand-text italic-slogan">
                Sua empresa socialmente justa,<br />
                Ambientalmente Responsável e<br />
                financeiramente Viável.
              </p>
            </div>

            {/* Column 2: Menu / Carreira */}
            <div className="footer-column">
              <h4 className="footer-title-green">CARREIRA</h4>
              <ul className="footer-links-list mb-3">
                <li><a href="#/#trabalhe">FAÇA PARTE DO TIME</a></li>
              </ul>
              
              <h4 className="footer-title-green">MENU</h4>
              <ul className="footer-links-list">
                <li><a href="#/#quem-somos">QUEM SOMOS</a></li>
                <li><a href="#/#projetos">PROJETOS</a></li>
                <li><a href="#/#contato">FALE CONOSCO</a></li>
                <li><a href="#/#trabalhe">TRABALHE COM A GENTE</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="footer-column">
              <h4 className="footer-title-green">CONTATO</h4>
              <ul className="footer-links-list">
                <li>
                  SÃO PAULO: (11) 4883-2154<br />
                  <span className="bold-address">RUA DA GÁVEA, 229</span>
                </li>
                <li className="mt-2">
                  GOIÂNIA: (11) 4883-2154<br />
                  <span className="bold-address">RUA DA GÁVEA, 229</span>
                </li>
                <li className="mt-2">
                  CEARÁ: (11) 4883-2154<br />
                  <span className="bold-address">RUA DA GÁVEA, 229</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Outros */}
            <div className="footer-column">
              <h4 className="footer-title-green">OUTROS</h4>
              <ul className="footer-links-list">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }}>POLÍTICA DE PRIVACIDADE</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); }}>CÓDIGO DE ÉTICA E CONDUTA</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar (Lime Green) */}
      <div className="footer-bottom-lime">
        <div className="container footer-bottom-container">
          <div className="footer-copyright">
            <strong>POWERESCO</strong> &nbsp;&nbsp;|&nbsp;&nbsp; 2023 | TODOS OS DIREITOS RESERVADOS
          </div>
          
          <div className="footer-social-wrapper">
            <span className="siga-nos">SIGA-NOS NAS REDES SOCIAIS</span>
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle"><img src={iconFb} alt="Facebook" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle"><img src={iconIg} alt="Instagram" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-circle"><img src={iconYt} alt="YouTube" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle"><img src={iconIn} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
