'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParallaxToggle from '@/components/ParallaxToggle';
import { ParallaxProvider, useParallax } from '@/contexts/ParallaxContext';

const HomeContent = () => {
  const { parallaxEnabled, setParallaxEnabled } = useParallax();

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <ParallaxToggle 
        onToggle={setParallaxEnabled} 
        enabled={parallaxEnabled} 
      />
    </main>
  );
};

export default function Home() {
  return (
    <ParallaxProvider>
      <HomeContent />
    </ParallaxProvider>
  );
}
