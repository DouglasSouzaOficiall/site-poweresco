import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

// Inline SVGs to avoid version conflicts in lucide-react
const FacebookIcon = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const YoutubeIcon = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);
const LinkedinIcon = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

interface FooterProps {
  onOpenContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    const isSubpage = window.location.hash.startsWith('#/solucoes/');
    if (isSubpage) {
      localStorage.setItem('scrollToSection', sectionId);
      window.location.hash = '#/';
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-column">
            <img src="/site-poweresco/img/logo.svg" alt="Poweresco Logo" className="footer-logo" />
            <p className="footer-brand-desc">
              Há 16 anos desenvolvendo projetos de eficiência energética, 
              educação e sustentabilidade que geram valor para empresas, 
              comunidades e territórios.
            </p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/PowerEsco/" target="_blank" rel="noopener noreferrer"><FacebookIcon size={18} /></a>
              <a href="https://www.instagram.com/poweresco/" target="_blank" rel="noopener noreferrer"><InstagramIcon size={18} /></a>
              <a href="https://www.youtube.com/@canalpoweresco9650" target="_blank" rel="noopener noreferrer"><YoutubeIcon size={18} /></a>
              <a href="https://br.linkedin.com/company/poweresco" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h3>Navegação</h3>
            <ul>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavClick('quem-somos'); }}>Quem Somos</a></li>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavClick('solucoes'); }}>Soluções</a></li>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavClick('cases'); }}>Cases de Sucesso</a></li>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavClick('clientes'); }}>Parceiros</a></li>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); handleNavClick('impacto'); }}>Indicadores</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="footer-links-column">
            <h3>Fale Conosco</h3>
            <ul className="footer-contact-list">
              <li>
                <span>E-mail:</span>
                <a href="mailto:contato@poweresco.com.br">contato@poweresco.com.br</a>
              </li>
              <li>
                <span>Telefone:</span>
                <a href="tel:+551935710000">(19) 3571-0000</a>
              </li>
            </ul>
            <button className="btn-primary-orange footer-cta" onClick={onOpenContact}>
              Solicitar Contato
            </button>
          </div>
        </div>

        {/* Corporate Branches Section */}
        <div className="footer-branches-section">
          <h3 className="branches-section-title">Matriz e Filiais</h3>
          <div className="branches-grid">
            <div className="branch-card">
              <h4>Matriz</h4>
              <p>Rua Federação Paulista de Futebol, 799 - São Paulo/SP</p>
            </div>
            <div className="branch-card">
              <h4>Filial CE</h4>
              <p>Rua Barra Nova, nº 1000, Bairro Jardim das Oliveiras, CEP 60.820-160 - Fortaleza/CE</p>
            </div>
            <div className="branch-card">
              <h4>Filial GO</h4>
              <p>R OM01, 1969, Quadra 03 Lote 26, Bairro Res. Antônio Carlos Pires, CEP 74.693-168 - Goiânia/GO</p>
            </div>
            <div className="branch-card">
              <h4>Filial RS</h4>
              <p>Rua Doutor Barcelos, 1380, Sala 502, Centro, CEP 92.310-200 - Canoas/RS</p>
            </div>
            <div className="branch-card">
              <h4>Filial AP</h4>
              <p>Av. Mendonça Júnior, 1917, Bairro Central, CEP 68.900-020 - Macapá/AP</p>
            </div>
            <div className="branch-card">
              <h4>Filial PA</h4>
              <p>Rodovia BR 316, 411, Galpão G (Te Eurosono), Bairro Centro, CEP 67.030-000 - Ananindeua/PA</p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Poweresco. Todos os direitos reservados.
          </p>
          <div className="footer-ods-logos">
            <span className="ods-badge">Alinhado com ODS ONU</span>
            <span className="aneel-badge">Regulado pela ANEEL</span>
          </div>
          <button className="btn-scroll-top" onClick={scrollToTop} aria-label="Voltar ao topo">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
