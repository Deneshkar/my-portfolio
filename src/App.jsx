import { useState, useEffect } from 'react';
import Navbar from './common/Navbar.jsx';
import TechBackground from './common/TechBackground.jsx';
import CustomCursor from './common/CustomCursor.jsx';
import ScrollProgress from './common/ScrollProgress.jsx';
import LoadingScreen from './common/LoadingScreen.jsx';
import Hero from './sections/Hero/index.jsx';
import About from './sections/About/index.jsx';
import Skills from './sections/Skills/index.jsx';
import Projects from './sections/Projects/index.jsx';
import Education from './sections/Education/index.jsx';
import Contact from './sections/Contact/index.jsx';
import Footer from './sections/Footer/index.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="relative overflow-hidden w-full h-full min-h-screen bg-[#0a0806] text-[#f5e6c8]">
        {/* Global UI elements */}
        <CustomCursor />
        <ScrollProgress />
        <TechBackground />

        {/* Page content */}
        <div className="relative z-10 w-full">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;