import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import LiveActivity from './components/LiveActivity';
import Profiles from './components/Profiles';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MouseSpotlight from './components/MouseSpotlight';
import AmbientBackground from './components/AmbientBackground';
import EasterEggs from './components/EasterEggs';
import Certificates from './components/Certificates';

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
    <LiveActivity />
    <Profiles />
    <Experience />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen text-textPrimary font-sans">
      <ScrollToTop />
      <EasterEggs />
      <AmbientBackground />
      <CustomCursor />
      <MouseSpotlight />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

