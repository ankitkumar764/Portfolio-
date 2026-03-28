import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LiveActivity from './components/LiveActivity';
import Profiles from './components/Profiles';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MouseSpotlight from './components/MouseSpotlight';
import AmbientBackground from './components/AmbientBackground';
import EasterEggs from './components/EasterEggs';

function App() {
  return (
    <div className="min-h-screen text-textPrimary font-sans">
      <EasterEggs />
      <AmbientBackground />
      <CustomCursor />
      <MouseSpotlight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LiveActivity />
        <Profiles />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
