import Navbar from './common/Navbar.jsx';
import TechBackground from './common/TechBackground.jsx';
import CustomCursor from './common/CustomCursor.jsx';
import ScrollProgress from './common/ScrollProgress.jsx';
import Hero from './sections/Hero/index.jsx';
import Skills from './sections/Skills/index.jsx';
import Projects from './sections/Projects/index.jsx';
import Experience from './sections/Experience/index.jsx';
import Education from './sections/Education/index.jsx';
import Contact from './sections/Contact/index.jsx';
import Footer from './sections/Footer/index.jsx';

function App() {
  return (
    <div className="relative overflow-hidden w-full h-full min-h-screen bg-navy">
      {/* Global UI elements */}
      <CustomCursor />
      <ScrollProgress />
      <TechBackground />

      {/* Page content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;