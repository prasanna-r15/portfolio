import { lazy, Suspense } from 'react';
import { useLenis } from '@/hooks';
import { ThemeProvider } from '@/context/ThemeContext';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import '@/styles/global.scss';

const About = lazy(() => import('@/components/sections/About'));
const Domains = lazy(() => import('@/components/sections/Domains'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Certifications = lazy(() => import('@/components/sections/Certifications'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const WhyHireMe = lazy(() => import('@/components/sections/WhyHireMe'));
const Achievements = lazy(() => import('@/components/sections/Achievements'));
const Contact = lazy(() => import('@/components/sections/Contact'));

function AppContent() {
  useLenis();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="noise-overlay" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<div className="section-placeholder" aria-hidden="true" />}>
          <About />
          <Domains />
          <Experience />
          <Certifications />
          <Projects />
          <Skills />
          <WhyHireMe />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
