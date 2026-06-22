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
              <p className="footer-brand-text">
                SEU PARCEIRO EM EFICIÊNCIA ENERGÉTICA E<br />
                TRANSFORMAÇÃO SOCIAL.
              </p>
            </div>

            {/* Column 2: Menu */}
            <div className="footer-column">
              <h4 className="footer-title-green">MENU</h4>
              <ul className="footer-nav">
                <li><a href="#/">HOME</a></li>
                <li><a href="#/#quem-somos">QUEM SOMOS</a></li>
                <li><a href="#/#solucoes">SOLUÇÕES</a></li>
                <li><a href="#/#cases">CASES</a></li>
                <li><a href="#/#clientes">CLIENTES</a></li>
                <li><a href="#/#impacto">IMPACTO</a></li>
                <li><a href="#/#contato">CONTATO</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="footer-column">
              <h4 className="footer-title-green">CONTATO</h4>
              <ul className="footer-nav">
                <li>
                  <span className="bold-address">MATRIZ:</span> AV. ANDRÉ ARAÚJO, 1924,<br />
                  ALEIXO - MANAUS/AM
                </li>
                <li className="mt-2">
                  <span className="bold-address">FILIAL:</span> AV. PAULISTA, 171,<br />
                  BELA VISTA - SÃO PAULO/SP
                </li>
                <li className="mt-2">
                  (11) 4883-2154
                </li>
                <li className="mt-2">
                  contato@poweresco.com.br
                </li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div className="footer-column">
              <h4 className="footer-title-green">SOCIAL</h4>
              <ul className="footer-nav">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar (Lime Green) */}
      <div className="footer-bottom-lime">
        <div className="container footer-bottom-container">
          <div className="footer-copyright">
            <strong>POWERESCO 2024.</strong> TODOS OS DIREITOS RESERVADOS
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
