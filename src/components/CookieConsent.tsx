import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('poweresco_cookie_consent');
    if (!consent) {
      // Show the banner after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('poweresco_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-container">
        <div className="cookie-consent-content">
          <p>
            Utilizamos cookies para melhorar sua experiência em nosso site, personalizar conteúdo e anúncios. 
            Ao continuar navegando, você concorda com a nossa Política de Privacidade.
          </p>
        </div>
        <div className="cookie-consent-actions">
          <button className="btn-cookie-accept" onClick={handleAccept}>
            Entendi e concordo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
