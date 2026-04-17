import Loader from '../components/effects/Loader';
import ScrollProgress from '../components/effects/ScrollProgress';
import Snowfall from '../components/effects/Snowfall';
import Navbar from '../components/layout/Navbar';
import WhatsAppFloat from '../components/layout/WhatsAppFloat';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Values from '../components/sections/Values';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <ScrollProgress />

      <Hero>
        <Snowfall />
      </Hero>

      <About />
      <Services />
      <Values />
      <Contact />
      <Footer />

      <WhatsAppFloat />
    </>
  );
}
