import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjetosEducacionais from './components/ProjetosEducacionais';
import ProjetosEficiencia from './components/ProjetosEficiencia';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjetosEducacionais />
        <ProjetosEficiencia />
        <Projects />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </>
  );
}

export default App;
