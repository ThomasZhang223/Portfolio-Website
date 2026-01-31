import React, { useEffect, useState } from 'react';
import { Terminal, Code, Briefcase, Coffee, Mail, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: "home", icon: <Terminal size={18} />, label: "~/home" },
    { id: "about", icon: <User size={18} />, label: "~/about" },
    { id: "experience", icon: <Briefcase size={18} />, label: "~/experience" },
    { id: "projects", icon: <Code size={18} />, label: "~/projects" },
    { id: "hobbies", icon: <Coffee size={18} />, label: "~/hobbies" },
    { id: "contact", icon: <Mail size={18} />, label: "~/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Changed justify-between to justify-center to center icons */}
        <div className="flex items-center justify-center h-16 overflow-x-auto no-scrollbar">
          <div className="flex space-x-1 md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-3 py-2 rounded transition-all whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-accent bg-accent/10 border border-accent/20' 
                    : 'text-muted hover:text-text hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium hidden md:inline">{item.label}</span>
                <span className="text-sm font-medium md:hidden">{item.label.replace('~/', '')}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;