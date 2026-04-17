import { BrandProvider } from './context/BrandContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrandProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <About />
        <Services />
        <Values />
        <Contact />
        <Footer />
      </div>
    </BrandProvider>
  );
}

export default App;
