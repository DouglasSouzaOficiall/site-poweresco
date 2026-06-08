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

      <div className="container footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Logo & Brand Info */}
          <div className="footer-column footer-brand">
            <img src={logoBranco} alt="Poweresco" className="footer-logo" />
            <p className="footer-brand-text">
              POWERESCO SUSTENTABILIDADE LTDA.<br />
              CNPJ: 10.458.632/0001-44
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="footer-column">
            <h4 className="footer-title">LINKS</h4>
            <ul className="footer-links-list">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }}>Termos de Uso</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }}>Política de Privacidade</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }}>LGPD</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-column">
            <h4 className="footer-title">CONTATO</h4>
            <ul className="footer-links-list">
              <li><a href="mailto:contato@poweresco.com.br">contato@poweresco.com.br</a></li>
              <li>São Paulo: (11) 4883-2154</li>
              <li>Goiânia: (11) 4883-2154</li>
            </ul>
          </div>

          {/* Column 4: About */}
          <div className="footer-column">
            <h4 className="footer-title">SOBRE</h4>
            <ul className="footer-links-list">
              <li><a href="#quem-somos">Quem Somos</a></li>
              <li><a href="#o-que-fazemos">O Que Fazemos</a></li>
              <li><a href="#projetos">Nossos Projetos</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="footer-copyright">
            © 2026 Poweresco. Todos os direitos reservados.
          </div>
          
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={iconFb} alt="Facebook" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={iconIg} alt="Instagram" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={iconYt} alt="YouTube" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={iconIn} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
