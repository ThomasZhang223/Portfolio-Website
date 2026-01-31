import React from 'react';
import TerminalCard from '../components/TerminalCard';

const About: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
       <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-white">About Me</h1>
        <p className="text-accent">$ cat ./profile/readme.md</p>
      </div>

      <TerminalCard>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left: Image */}
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-border relative group">
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="./assets/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-2/3 space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">About Me</h3>
            </div>
            
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                Hiya, I'm Thomas! Currently a Bachelor's of Software Engineering student at the University of Waterloo, 
                I have a strong aptitude for learning and deep passion for computer science. 
                Since the first line of Visual Basic I wrote to build my own Frogger game, I've now branched out into everything from 
                competive programming, full-stack web dev, AI/ML, and much more.
              </p>
              <p>
                I specialize in backend development, systems architecture, and performance optimization. 
                When I'm not coding, you can find me drinking coffee and pursuing my various hobbies.
              </p>
            </div>
            {/* Skills section removed as requested */}
          </div>
        </div>
      </TerminalCard>
    </div>
  );
};

export default About;