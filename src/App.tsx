import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import CookieConsent from './components/CookieConsent';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import SolutionPage from './pages/SolutionPage';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  // Listen to hash changes for simple routing
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set fallback hash on load if not set
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const openPrivacy = () => setIsPrivacyOpen(true);
  const closePrivacy = () => setIsPrivacyOpen(false);

  // Render correct page view based on hash routing
  const renderContent = () => {
    if (currentHash.startsWith('#/solucoes/')) {
      const parts = currentHash.split('/');
      const solutionId = parts[parts.length - 1];
      return <SolutionPage solutionId={solutionId} onOpenContact={openContact} />;
    }
    // Default to Home
    return <Home onOpenContact={openContact} />;
  };

  return (
    <>
      <Navbar />
      
      <main className="main-content-area">
        {renderContent()}
      </main>

      <Footer onOpenContact={openContact} />

      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={closePrivacy} />

      <CookieConsent onOpenPrivacyPolicy={openPrivacy} />

      <FloatingWhatsApp />
    </>
  );
}

export default App;
