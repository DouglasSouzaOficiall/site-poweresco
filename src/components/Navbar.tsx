import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

import iconFb from '../assets/rebrand/Group 2591.png';
import iconIg from '../assets/rebrand/Group 2592.png';
import iconYt from '../assets/rebrand/Group 2593.png';
import iconIn from '../assets/rebrand/Group 2594.png';
import logo from '../assets/rebrand/logo.svg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // Check if we are currently on a subpage (hash starts with #/solucoes/)
    const isSubpage = window.location.hash.startsWith('#/solucoes/');
    
    if (isSubpage) {
      // Save section to scroll to in localStorage and redirect to Home
      localStorage.setItem('scrollToSection', sectionId);
      window.location.hash = '#/';
    } else {
      // Already on Home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHomeActive = !window.location.hash.startsWith('#/solucoes/');

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#/" onClick={() => navigateToSection('hero')}>
            <img src={logo} alt="Poweresco" />
          </a>
        </div>

        <div className={`desktop-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a 
                href="#/" 
                className={isHomeActive ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); navigateToSection('hero'); }}
              >
                HOME
              </a>
            </li>
            <span className="nav-separator">|</span>
            <li><a href="#/" onClick={(e) => { e.preventDefault(); navigateToSection('quem-somos'); }}>QUEM SOMOS</a></li>
            <span className="nav-separator">|</span>
            <li><a href="#/" onClick={(e) => { e.preventDefault(); navigateToSection('solucoes'); }}>SOLUÇÕES</a></li>
            <span className="nav-separator">|</span>
            <li><a href="#/" onClick={(e) => { e.preventDefault(); navigateToSection('cases'); }}>CASES</a></li>
            <span className="nav-separator">|</span>
            <li><a href="#/" onClick={(e) => { e.preventDefault(); navigateToSection('clientes'); }}>CLIENTES</a></li>
            <span className="nav-separator">|</span>
            <li><a href="#/" onClick={(e) => { e.preventDefault(); navigateToSection('impacto'); }}>IMPACTO</a></li>
            <span className="nav-separator">|</span>
            <li><a href="#/" onClick={(e) => { e.preventDefault(); navigateToSection('contato'); }}>CONTATO</a></li>
          </ul>

          <div className="social-icons mobile-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={iconFb} alt="Facebook" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={iconIg} alt="Instagram" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={iconYt} alt="YouTube" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={iconIn} alt="LinkedIn" /></a>
          </div>
        </div>

        <div className="social-icons nav-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={iconFb} alt="Facebook" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={iconIg} alt="Instagram" /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={iconYt} alt="YouTube" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={iconIn} alt="LinkedIn" /></a>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
