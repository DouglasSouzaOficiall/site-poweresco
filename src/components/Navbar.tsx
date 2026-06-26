import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

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

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setMobileContactOpen(false);
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

  const handleSolutionLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    window.location.hash = `#/solucoes/${id}`;
    window.scrollTo(0, 0);
  };

  const isHomeActive = !window.location.hash.startsWith('#/solucoes/');

  const solutionsList = [
    { id: 'educacao', name: 'Educação e Conscientização' },
    { id: 'eficiencia', name: 'Eficiência Energética' },
    { id: 'engajamento', name: 'Engajamento Comunitário' },
    { id: 'desenvolvimento-social', name: 'Desenvolvimento Social' },
    { id: 'economia-circular', name: 'Economia Circular' },
    { id: 'desenvolvimento-humano', name: 'Desenvolvimento Humano' },
    { id: 'sustentabilidade-esg', name: 'Sustentabilidade e ESG' },
    { id: 'gestao-projetos', name: 'Gestão de Projetos' }
  ];

  const branchesList = [
    { name: 'Matriz (SP)', target: 'impacto' }, // Matriz is in SP, can scroll to branches grid in footer
    { name: 'Filial Ceará (CE)', target: 'impacto' },
    { name: 'Filial Goiás (GO)', target: 'impacto' },
    { name: 'Filial Rio Grande do Sul (RS)', target: 'impacto' },
    { name: 'Filial Amapá (AP)', target: 'impacto' },
    { name: 'Filial Pará (PA)', target: 'impacto' }
  ];

  return (
    <nav className={`navbar-rebrand ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container-rebrand">
        <div className="logo-rebrand">
          <a href="#/" onClick={() => navigateToSection('home')}>
            <img src="/site-poweresco/img/logo.svg" alt="Poweresco Logo" />
          </a>
        </div>

        {/* Desktop and Mobile Menu Container */}
        <div className={`desktop-nav-rebrand ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a 
                href="#/" 
                className={isHomeActive ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); navigateToSection('home'); }}
              >
                HOME
              </a>
            </li>
            <li>
              <a 
                href="#/" 
                onClick={(e) => { e.preventDefault(); navigateToSection('quem-somos'); }}
              >
                QUEM SOMOS
              </a>
            </li>
            
            {/* SOLUTIONS DROPDOWN MENU */}
            <li className="nav-item-dropdown-container">
              <a 
                href="#/" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  if (window.innerWidth <= 992) {
                    setMobileSolutionsOpen(!mobileSolutionsOpen);
                  } else {
                    navigateToSection('solucoes');
                  }
                }}
                className="dropdown-trigger-link"
              >
                SOLUÇÕES <ChevronDown size={14} className="dropdown-arrow-icon" />
              </a>
              
              {/* Dropdown Box */}
              <ul className={`nav-dropdown-menu ${mobileSolutionsOpen ? 'mobile-expanded' : ''}`}>
                {solutionsList.map((sol) => (
                  <li key={sol.id}>
                    <a 
                      href="#/" 
                      onClick={(e) => { e.preventDefault(); handleSolutionLinkClick(sol.id); }}
                    >
                      {sol.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a 
                href="#/" 
                onClick={(e) => { e.preventDefault(); navigateToSection('cases'); }}
              >
                CASES
              </a>
            </li>
            <li>
              <a 
                href="#/" 
                onClick={(e) => { e.preventDefault(); navigateToSection('clientes'); }}
              >
                PARCEIROS
              </a>
            </li>
            <li>
              <a 
                href="#/" 
                onClick={(e) => { e.preventDefault(); navigateToSection('impacto'); }}
              >
                IMPACTO
              </a>
            </li>

            {/* CONTACTS DROPDOWN MENU */}
            <li className="nav-item-dropdown-container">
              <a 
                href="#/" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  if (window.innerWidth <= 992) {
                    setMobileContactOpen(!mobileContactOpen);
                  } else {
                    navigateToSection('contato');
                  }
                }}
                className="dropdown-trigger-link"
              >
                CONTATO <ChevronDown size={14} className="dropdown-arrow-icon" />
              </a>
              
              {/* Dropdown Box */}
              <ul className={`nav-dropdown-menu contact-dropdown ${mobileContactOpen ? 'mobile-expanded' : ''}`}>
                <li className="dropdown-section-header">Matriz & Filiais</li>
                {branchesList.map((branch, idx) => (
                  <li key={idx}>
                    <a 
                      href="#/" 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        navigateToSection(branch.target); 
                        // Delay scroll to branches grid at bottom
                        setTimeout(() => {
                          const branchesEl = document.querySelector('.footer-branches-section');
                          if (branchesEl) {
                            branchesEl.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 300);
                      }}
                    >
                      {branch.name}
                    </a>
                  </li>
                ))}
                <li className="dropdown-divider"></li>
                <li>
                  <a 
                    href="#/" 
                    className="dropdown-cta-link"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setIsMobileMenuOpen(false);
                      onOpenContact(); 
                    }}
                  >
                    Fale Conosco
                  </a>
                </li>
              </ul>
            </li>

          </ul>

          <div className="social-icons-rebrand mobile-only-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon size={20} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><YoutubeIcon size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={20} /></a>
          </div>
        </div>

        <div className="social-icons-rebrand desktop-only-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon size={18} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon size={18} /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><YoutubeIcon size={18} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={18} /></a>
        </div>
        
        <button 
          className={`mobile-menu-btn-rebrand ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setMobileSolutionsOpen(false);
            setMobileContactOpen(false);
          }} 
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={26} color="#fff" /> : <Menu size={26} color={isScrolled ? '#122119' : '#fff'} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
