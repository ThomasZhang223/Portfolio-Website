import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import TerminalCard from '../components/TerminalCard';
import GitHubCalendarBase from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';

// Cast the imported component to any to resolve TypeScript error:
// JSX element type 'GitHubCalendar' does not have any construct or call signatures.
const GitHubCalendar = GitHubCalendarBase as any;

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in w-full">
      <TerminalCard className="w-full mt-6 md:mt-10">
        <div className="flex flex-col gap-8">
          
          {/* Intro Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-medium text-lg">$ whoami</p>
              <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight">
                Thomas Zhang
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted font-light">
                Software Engineer
              </h2>
            </div>
          </div>

          {/* Actions Section */}
          <div className="space-y-4 pt-4 border-t border-border/50">
            <p className="text-accent font-medium text-lg">$ ls ./social-links</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/Portfolio-Website/assets/General_resume.pdf" 
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-accent text-bg font-bold rounded hover:bg-green-400 transition-colors"
              >
                <FileText size={20} />
                Download Resume
              </a>
              <a 
                href="https://github.com/ThomasZhang223" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded hover:border-text transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/thomas-zhang-022a9b21b/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded hover:border-text transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* GitHub Calendar Section */}
          <div className="pt-6 border-t border-border/50">
            <p className="text-accent font-medium text-lg mb-4">$ gh cal -y {new Date().getFullYear()}</p>
            {/* Added container query style wrapper to ensure it doesn't overflow */}
            <div className="w-full overflow-hidden flex justify-start md:justify-center overflow-x-auto pb-2">
              <div className="min-w-fit">
                <GitHubCalendar 
                  username="thomaszhang223" 
                  blockSize={10} 
                  blockMargin={4}
                  fontSize={12}
                  theme={{
                    light: ['#0f172a', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    dark: ['#0f172a', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
                  style={{ color: '#e2e8f0' }}
                  renderBlock={(block: any, activity: any) => (
                    React.cloneElement(block, {
                      'data-tooltip-id': 'github-tooltip',
                      'data-tooltip-content': `${activity.count} contributions on ${activity.date}`,
                    })
                  )}
                />
                <Tooltip 
                  id="github-tooltip" 
                  style={{ 
                    backgroundColor: '#1e293b', 
                    color: '#e2e8f0', 
                    borderRadius: '4px',
                    fontSize: '12px',
                    padding: '8px 12px'
                  }} 
                />
              </div>
            </div>
          </div>

        </div>
      </TerminalCard>
    </div>
  );
};

export default Home;