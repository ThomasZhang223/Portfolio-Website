import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import ParticleBackground from './components/ParticleBackground';

// BootLoader Component
const BootLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [lines, setLines] = useState<string[]>([]);
  
  const fullCommand = "npm run dev";
  
  useEffect(() => {
    let typeInterval: any;
    let lineInterval: any;
    let startTimeout: any;
    let finishTimeout: any;

    let currentIndex = 0;
    
    // Typing animation for the command
    typeInterval = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setText(fullCommand.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        
        // After typing, show boot lines
        startTimeout = setTimeout(() => {
          const bootLines = [
            "> devfolio@2.0.0 dev",
            "> vite",
            "[vite] optimizing dependencies...",
            "[vite] connected.",
            "[INFO] Loading modules...",
            "[OK] Components mounted",
            "[OK] Ready in 842ms."
          ];
          
          let lineIndex = 0;
          lineInterval = setInterval(() => {
            if (lineIndex < bootLines.length) {
              // Capture the value synchronously to avoid closure reference issues in the state updater
              const currentLine = bootLines[lineIndex];
              setLines(prev => [...prev, currentLine]);
              lineIndex++;
            } else {
              clearInterval(lineInterval);
              finishTimeout = setTimeout(onComplete, 800);
            }
          }, 150);
          
        }, 300);
      }
    }, 50);

    return () => {
      clearInterval(typeInterval);
      clearInterval(lineInterval);
      clearTimeout(startTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#020617] text-[#e2e8f0] font-mono z-[100] p-8 md:p-12 overflow-hidden flex flex-col justify-end md:justify-start">
      <div className="max-w-3xl w-full">
        <div className="text-accent mb-4">Welcome to DevFolio v2.0.0</div>
        
        <div className="space-y-1">
          <div className="flex">
            <span className="text-accent mr-2">user@devfolio:~$</span>
            <span>{text}</span>
            <span className="w-2.5 h-5 bg-accent ml-1 animate-pulse"></span>
          </div>
          
          {lines.map((line, index) => (
            <div key={index} className={`${line && line.includes("[OK]") ? "text-green-400" : "text-muted"}`}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#preview') {
        setShowPreview(true);
        setLoading(false); // Skip loader for preview
      } else {
        setShowPreview(false);
      }
    };

    // Check on mount
    handleHashChange();

    // Default to #home if no hash is present and not previewing
    if (!window.location.hash && window.location.hash !== '#preview') {
      window.location.hash = '#home';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen text-text font-mono selection:bg-accent selection:text-bg">
      {!loading && <ParticleBackground />}
      
      {loading ? (
        <BootLoader onComplete={() => setLoading(false)} />
      ) : (
        <div className="flex flex-col animate-fade-in relative">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 max-w-5xl relative z-10">
            <section id="home" className="min-h-screen flex items-center pt-16 scroll-mt-16">
              <Home />
            </section>
            
            <section id="about" className="py-12 border-t border-border/50 scroll-mt-16">
              <About />
            </section>

            <section id="experience" className="py-12 border-t border-border/50 scroll-mt-16">
              <Experience />
            </section>

            <section id="projects" className="py-12 border-t border-border/50 scroll-mt-16">
              <Projects />
            </section>

            <section id="hobbies" className="py-12 border-t border-border/50 scroll-mt-16">
              <Hobbies />
            </section>

            <section id="contact" className="py-12 border-t border-border/50 min-h-[80vh] scroll-mt-16">
              <Contact />
            </section>
          </main>
          
          <footer className="border-t border-border/50 py-8 text-center text-muted text-sm bg-black/80 backdrop-blur-sm relative z-10">
            <div className="flex flex-col gap-2">
              <p>© {new Date().getFullYear()} Thomas Zhang. All rights reserved.</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;