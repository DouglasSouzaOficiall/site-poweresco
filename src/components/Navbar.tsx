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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#/">
            <img src={logo} alt="Poweresco" />
          </a>
        </div>

        <div className={`desktop-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#/" className="active" onClick={() => setIsMobileMenuOpen(false)}>HOME</a></li>
            <li><a href="#/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>QUEM SOMOS</a></li>
            <li><a href="#/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>SOLUÇÕES</a></li>
            <li><a href="#/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>CASES</a></li>
            <li><a href="#/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>CLIENTES</a></li>
            <li><a href="#/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('impacto')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>IMPACTO</a></li>
            <li><a href="#/" onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>CONTATO</a></li>
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
