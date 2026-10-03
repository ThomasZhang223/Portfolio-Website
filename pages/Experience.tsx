import React from 'react';
import TerminalCard from '../components/TerminalCard';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: 1,
    company: "Stealth Startup",
    logo: "/Portfolio-Website/assets/stealth_startup_logo.jpeg",
    title: "Software Engineer Intern",
    period: "Jun. 2026 - Sep. 2026",
    description: [
      "Built an autonomous agent that turns a filed ticket into a tested, mergeable PR, running a headless Claude agent in a real checkout against a live replica of the production stack",
      "Designed the pipeline to fail closed: tests report pass, fail, or unverified, so a broken toolchain is never read as a green result, and an ambiguous request is stopped instead of guessed",
      "Cut the cost per issue 6x by measuring real runs and A/B testing turn limits and context trimming, while resolving 40+ tickets at a 90%+ success rate"
    ]
  },
  {
    id: 2,
    company: "Watonomous",
    logo: "/Portfolio-Website/assets/watonomous_logo.jpeg",
    title: "Rover Autonomy Developer",
    period: "Jan. 2026 - Present",
    description: [
      "Work on autonomous navigation for a student Mars rover, using A* pathfinding on occupancy grids",
      "Cut the obstacle costmap input about 20x by downsampling depth camera point clouds, keeping obstacle avoidance real time",
      "Integrated YOLOv8 object detection through ONNX Runtime to classify obstacles from simulated camera feeds"
    ]
  },
  {
    id: 3,
    company: "Triple J Canada Consulting Inc.",
    logo: "/Portfolio-Website/assets/triple_j_canada_consulting_inc_logo.jpeg",
    title: "Freelance Software Developer",
    period: "Jun. 2025 - Aug. 2025",
    description: [
      "Built a full-stack tax platform serving 2,000+ clients and 5,000+ returns, replacing paper intake and office visits with online forms",
      "Delivered the Flask backend that cut staff prep work by over 30% and automated client verification and admin access, saving 20+ hours a week",
      "Ran live SQLite migrations with Alembic, with zero data loss or downtime"
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