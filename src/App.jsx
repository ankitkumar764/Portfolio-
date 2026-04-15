import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import CourseCertificates from './components/CourseCertificates';
import LiveActivity from './components/LiveActivity';
import Profiles from './components/Profiles';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseSpotlight from './components/MouseSpotlight';
import AmbientBackground from './components/AmbientBackground';
import EasterEggs from './components/EasterEggs';
import Certificates from './components/Certificates';
import PremiumFrame from './components/PremiumFrame';
import RoboticWelcome from './components/RoboticWelcome';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <Helmet>
      <title>Ankit Kumar | Full Stack Developer & AI Enthusiast</title>
      <meta name="description" content="Portfolio of Ankit Kumar, a Full Stack Developer specializing in React, Node.js, and AI-driven solutions." />
      <meta name="keywords" content="Ankit Kumar, Portfolio, Developer, Full Stack, React, Node.js, AI, Swaminarayan University" />
    </Helmet>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Hackathons />
    <CourseCertificates />
    <LiveActivity />
    <Profiles />
    <Experience />
    <Contact />
  </>
);

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const handleComplete = useCallback(() => {
    setIsIntroComplete(true);
  }, []);

  return (
    <div className="min-h-screen text-textPrimary font-sans">
      <AnimatePresence mode="wait">
        {!isIntroComplete ? (
          <RoboticWelcome key="welcome" onComplete={handleComplete} />
        ) : (
          <div key="content">
            <ScrollToTop />
            <EasterEggs />
            <AmbientBackground />
            <MouseSpotlight />
            <PremiumFrame />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certificates" element={<Certificates />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

