import React from 'react';

interface TerminalCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const TerminalCard: React.FC<TerminalCardProps> = ({ children, title, className = '' }) => {
  return (
    <div className={`bg-card border border-border rounded-lg overflow-hidden shadow-xl hover:border-accent hover:shadow-[0_0_20px_rgba(46,160,67,0.15)] hover:-translate-y-1 transition-all duration-300 ease-out ${className}`}>
      {/* Terminal Header */}
      <div className="bg-[#050a14] border-b border-border px-4 py-2 flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {title && <div className="text-muted text-xs font-semibold select-none">{title}</div>}
      </div>
      {/* Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default TerminalCard;