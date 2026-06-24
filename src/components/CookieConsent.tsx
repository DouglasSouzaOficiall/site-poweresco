import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

interface CookieConsentProps {
  onOpenPrivacyPolicy: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenPrivacyPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('poweresco_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('poweresco_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-bar animate-fade-up">
      <div className="container cookie-consent-container">
        <div className="cookie-consent-content">
          <p>
            Utilizamos cookies para melhorar sua experiência em nosso site, personalizar conteúdo e anúncios. 
            Ao continuar navegando, você concorda com a nossa{' '}
            <a 
              href="#/" 
              onClick={(e) => { e.preventDefault(); onOpenPrivacyPolicy(); }} 
              className="cookie-policy-link"
            >
              Política de Privacidade
            </a>.
          </p>
        </div>
        <div className="cookie-consent-actions">
          <button className="btn-primary-orange cookie-accept-btn" onClick={handleAccept}>
            Entendi e concordo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
