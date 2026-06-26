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

  // 8 Solutions mapping tailored simplified titles and inline SVG icons
  const solutionsList = [
    { 
      id: 'educacao', 
      name: 'Educação e Conscientização',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="dropdown-item-icon-3e">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    { 
      id: 'eficiencia', 
      name: 'Eficiência Energética',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="dropdown-item-icon-3e">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    { 
      id: 'engajamento', 
      name: 'Engajamento Comunitário',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="dropdown-item-icon-3e">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    { 
      id: 'desenvolvimento-social', 
      name: 'Desenvolvimento Social',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="dropdown-item-icon-3e">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    { 
      id: 'economia-circular', 
      name: 'Economia Circular',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="dropdown-item-icon-3e">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      )
    },
    { 
      id: 'desenvolvimento-humano', 
      name: 'Desenvolvimento Humano',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="dropdown-item-icon-3e">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    { 
      id: 'sustentabilidade-esg', 
      name: 'Sustentabilidade e ESG',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="dropdown-item-icon-3e">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    { 
      id: 'gestao-projetos', 
      name: 'Gestão de Projetos',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="dropdown-item-icon-3e">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    }
  ];

  const branchesList = [
    { name: 'Matriz (SP)', target: 'impacto' },
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
            
            {/* SOLUTIONS DROPDOWN MENU (Mega Menu layout on desktop) */}
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
              
              {/* Dropdown Mega Menu Box */}
              <ul className={`nav-dropdown-menu solutions-mega-menu ${mobileSolutionsOpen ? 'mobile-expanded' : ''}`}>
                {solutionsList.map((sol) => (
                  <li key={sol.id}>
                    <a 
                      href="#/" 
                      onClick={(e) => { e.preventDefault(); handleSolutionLinkClick(sol.id); }}
                      className="mega-menu-item-link"
                    >
                      {sol.icon}
                      <span className="mega-menu-item-text">{sol.name}</span>
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
