import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import SolutionPage from './pages/SolutionPage';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };
    
    // Set initial hash if empty
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (route.startsWith('#/solucoes/')) {
      return <SolutionPage />;
    }
    
    // Default to Home for '#/' or any unknown route
    return <Home />;
  };

  return renderPage();
}

export default App;
