import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

import iconFb from '../assets/Group 2591.png';
import iconIg from '../assets/Group 2592.png';
import iconYt from '../assets/Group 2593.png';
import iconIn from '../assets/Group 2594.png';
import logo from '../assets/logo.svg';

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
    <>
      <div className="top-bar">
        <div className="container top-bar-container">
        </div>
      </div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <a href="#home">
              <img src={logo} alt="Poweresco" />
            </a>
          </div>

        <div className={`desktop-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" className="active" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#quem-somos" onClick={() => setIsMobileMenuOpen(false)}>Quem Somos</a></li>
            <li><a href="#o-que-fazemos" onClick={() => setIsMobileMenuOpen(false)}>O que fazemos</a></li>
            <li><a href="#projetos" onClick={() => setIsMobileMenuOpen(false)}>Projetos Power</a></li>
            <li><a href="#parceiros" onClick={() => setIsMobileMenuOpen(false)}>Parceiros</a></li>
            <li><a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Trabalhe Conosco</a></li>
          </ul>

          <div className="social-icons mobile-socials">
            <a href="#"><img src={iconFb} alt="Facebook" /></a>
            <a href="#"><img src={iconIg} alt="Instagram" /></a>
            <a href="#"><img src={iconYt} alt="YouTube" /></a>
            <a href="#"><img src={iconIn} alt="LinkedIn" /></a>
          </div>
        </div>

        <div className="social-icons nav-social">
          <a href="#"><img src={iconFb} alt="Facebook" /></a>
          <a href="#"><img src={iconIg} alt="Instagram" /></a>
          <a href="#"><img src={iconYt} alt="YouTube" /></a>
          <a href="#"><img src={iconIn} alt="LinkedIn" /></a>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
