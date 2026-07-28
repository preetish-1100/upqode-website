import React from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Process from './components/Process';
import Services from './components/Services';
import FAQ from './components/FAQ';
import StartProject from './components/StartProject';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ReactLenis root>
      <main className="flex min-h-screen flex-col font-sans bg-bg-primary text-text-primary selection:bg-accent selection:text-white" id="top">
        <Navigation />
        <Hero />
        <About />
        <Work />
        <Process />
        <Services />
        <FAQ />
        <StartProject />
        <Footer />
        <ScrollToTop />
      </main>
    </ReactLenis>
  );
}

export default App;
