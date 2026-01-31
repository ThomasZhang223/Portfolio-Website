import React from 'react';
import TerminalCard from '../components/TerminalCard';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: 1,
    company: "Watonomous",
    logo: "./assets/watonomous_logo.jpeg",
    title: "Rover Autonomy Developer",
    period: "Jan. 2026 - Present",
    description: [
      "Developing navigation costmap and object detection for a Mars Rover’s autonomy subsystem.",
    ]
  },
  {
    id: 2,
    company: "Triple J Canada Consulting Inc.",
    logo: "./assets/triple_j_canada_consulting_inc_logo.jpeg",
    title: "Freelance Software Developer",
    period: "Jun. 2025 - Aug. 2025",
    description: [
      "Built client-side and admin-side tax filing platform used by 2000+ clients with Python Flask.",
      "Developed REST API with POST/GET endpoints on SQLite database with SQLAlchemy.",
      "Created user sessions and authentication with cookies and automated email verification with Flask Mail.",
      "Collaborated with a team using GitHub and Obsidian for project management."
    ]
  }
];

const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold text-white">Professional Experience</h1>
        <p className="text-accent">$ cat ./work_history.txt</p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <TerminalCard key={exp.id}>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded bg-white/5 border border-border overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full object-cover rounded-sm"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div>
                    {/* Swapped Hierarchy: Company is now H3, Title is p */}
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <p className="text-accent text-sm font-medium">{exp.title}</p>
                  </div>
                  <span className="text-muted text-sm mt-1 md:mt-0 font-mono bg-white/5 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-muted mt-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TerminalCard>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;