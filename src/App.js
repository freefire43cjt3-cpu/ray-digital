import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="sr" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}