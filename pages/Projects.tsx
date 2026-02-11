import React, { useState } from 'react';
import TerminalCard from '../components/TerminalCard';
import { Github, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "JobFlow",
    description: "A job search automation platform with web scraping capabilities that bypasses anti-bot protections using Scrapy and Selenium middleware. Features asynchronous task processing with Celery, real-time WebSocket updates, and JWT authentication serving 15+ active users.",
    image: "/Portfolio-Website/assets/jobflow.png",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Celery", "Redis", "Scrapy", "Selenium", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/ThomasZhang223/JobFlow",
    demoUrl: "https://jobflow-ten.vercel.app"
  },
  {
    id: 2,
    title: "TradeStream",
    description: "A real-time market data platform that processes over 1 million tick updates daily, streaming live analytics through Kafka to deliver 50,000+ updates per second to dashboards. Combines TimescaleDB for persistent storage with Redis caching and a C++ analytics microservice achieving sub-100ms latency.",
    image: "/Portfolio-Website/assets/tradestream.png",
    technologies: ["C++", "Next.JS", "TypeScript", "FastAPI", "Kafka", "Redis", "TimescaleDB"],
    githubUrl: "https://github.com/ThomasZhang223/tradestream"
  },
  {
    id: 3,
    title: "Karaoke Generator",
    description: "A web application that automatically converts YouTube songs into karaoke videos with instrumental tracks and synchronized lyrics. Features AI vocal removal and optimized video rendering for fast, high-quality karaoke creation.",
    image: "/Portfolio-Website/assets/karaoke.png",
    technologies: ["FastAPI", "React.js", "Demucs", "FFmpeg", "yt-dlp", "LRClib"],
    githubUrl: "https://github.com/ThomasZhang223/karaoke_generator",
  },
  {
    id: 4,
    title: "Study Planner",
    description: "An AI study assistant that generates personalized study plans and guides from course textbooks and syllabi. Uses multi-agent architecture to create tailored learning schedules and comprehensive study materials based on curriculum content.",
    image: "/Portfolio-Website/assets/study.png",
    technologies: ["Python", "Google ADK", "Pinecone", "Gemini API", "Pydantic", "PyMuPDF"],
    githubUrl: "https://github.com/ThomasZhang223/b-x--takehome"
  },
  {
    id:5,
    title: "Haunted Harbour",
    description: "A 2D side-scrolling platformer developed using Win32 GDI with double-buffered rendering and a custom physics engine featuring AABB collision detection. Includes parallax scrolling, finite state machine player controls, and object pooling for optimized projectile management.",
    image: "/Portfolio-Website/assets/haunted_harbour.png",
    technologies: ["C++", "Win32 GDI"],
    githubUrl: "https://github.com/ThomasZhang223/HauntedHarbour"
  },
  {
    id: 6,
    title: "Maze Engine",
    description: "A comprehensive tile-based game engine built in C++ using SFML, featuring a hybrid ECS/OOP architecture for optimal performance. Includes a custom physics engine with AABB collision detection and a built-in tile map editor for level design.",
    image: "/Portfolio-Website/assets/maze.png",
    technologies: ["C++", "SFML"],
    githubUrl: "https://github.com/ThomasZhang223/Maze-game-engine"
  },
  {
    id: 7,
    title: "Handwritten digit classifier",
    description: "A deep learning application built with PyTorch that recognizes handwritten digits with 95% accuracy using a 4-layer neural network trained on the MNIST dataset. Features an interactive Pygame canvas for real-time digit prediction with OpenCV image processing.",
    image: "/Portfolio-Website/assets/digits.png",
    technologies: ["PyTorch", "OpenCV", "Numpy", "Python"],
    githubUrl: "https://github.com/ThomasZhang223/Digit-Recognition"
  },
  {
    id: 8,
    title: "Reseet",
    description: "A cross-platform mobile app for receipt scanning and budget tracking built with React Native and Flask. Uses OpenCV and pytesseract for OCR text extraction, integrated with Google Gemini API for expense categorization and personalized financial advice.",
    image: "/Portfolio-Website/assets/reseet.png",
    technologies: ["React Native", "Expo", "Flask", "PostgreSQL", "OpenCV", "Gemini API"],
    githubUrl: "https://github.com/ThomasZhang223/newhacks25",
    demoUrl: "https://devpost.com/software/reseet-owrm98"
  }
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.filter(p => p.id <= 4);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold text-white">System Architecture & Projects</h1>
        <p className="text-accent">$ ls -la ./projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project) => (
          <TerminalCard key={project.id} className="h-[620px] flex flex-col group relative">
             {/* Image */}
             <div className="aspect-video w-full overflow-hidden rounded-md mb-4 border border-border bg-black/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if asset missing
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'text-muted');
                    if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = 'Image Asset Missing';
                  }}
                />
             </div>
             
             {/* Content */}
             <div className="flex flex-col flex-grow pb-16">
               <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
               <p className="text-muted text-sm mb-4 flex-grow">{project.description}</p>
               
               {/* Tech Stack */}
               <div className="flex flex-wrap gap-2 mb-6">
                 {project.technologies.map(tech => (
                   <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                     {tech}
                   </span>
                 ))}
               </div>

               {/* Links */}
               <div className="flex items-center gap-4 border-t border-border pt-4 absolute left-0 right-0 bottom-4 px-6">
                  <a href={project.githubUrl} className="text-muted hover:text-white transition-colors" title="View Code" target="_blank" rel="noopener noreferrer">
                    <Github size={24} />
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="text-muted hover:text-white transition-colors" title="Live Demo" target="_blank" rel="noopener noreferrer">
                      <Globe size={24} />
                    </a>
                  )}
               </div>
             </div>
          </TerminalCard>
        ))}
      </div>

      {projects.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/30 bg-accent/5 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
          >
            {showAll ? (
              <>
                <ChevronUp size={20} />
                <span>Show Less</span>
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                <span>See More ({projects.length - 4} more projects)</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;