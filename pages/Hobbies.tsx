import React from 'react';
import TerminalCard from '../components/TerminalCard';
import { Hobby } from '../types';

const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Cycling",
    description: "Exploring the city and mountains on two wheels. I love long-distance endurance rides. Whether it's a quick morning sprint or a century ride on the weekend, the freedom of cycling clears my mind and keeps me physically challenged.",
    images: [
      "./assets/hobby-cycling-1.jpg",
      "./assets/hobby-cycling-2.jpg",
      "./assets/hobby-cycling-3.jpg"
    ]
  },
  {
    id: 2,
    title: "Photography",
    description: "Capturing moments from my travels. Special interest in urban and street photography. I enjoy finding the beauty in mundane city life and playing with light and shadow composition.",
    images: [
      "./assets/hobby-photo-1.jpg",
      "./assets/hobby-photo-2.jpg",
      "./assets/hobby-photo-3.jpg"
    ]
  },
  {
    id: 3,
    title: "Mechanical Keyboards",
    description: "Building custom keyboards. Soldering switches, lubricating stabilizers, and finding the perfect keycap set to match my desk setup. It's a satisfying blend of engineering and aesthetics.",
    images: [
      "./assets/hobby-kb-1.jpg",
      "./assets/hobby-kb-2.jpg",
      "./assets/hobby-kb-3.jpg"
    ]
  }
];

const HobbiesPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold text-white">Hobbies & Interests</h1>
        <p className="text-accent">$ ls -R ./personal_life</p>
      </div>

      <div className="flex flex-col gap-8">
        {hobbies.map((hobby) => (
          <TerminalCard key={hobby.id} className="p-0 overflow-hidden">
            <div className="flex flex-col md:flex-row h-full md:h-80">
              
              {/* Left: Scrollable Images */}
              <div className="w-full md:w-5/12 h-64 md:h-full relative bg-black/40 border-b md:border-b-0 md:border-r border-border group">
                 <div className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
                    {hobby.images.map((img, idx) => (
                        <div key={idx} className="min-w-full h-full snap-center relative">
                            <img 
                                src={img} 
                                alt={`${hobby.title} ${idx + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                     e.currentTarget.style.display = 'none';
                                     if(e.currentTarget.parentElement) {
                                        e.currentTarget.parentElement.style.backgroundColor = '#0f172a';
                                        e.currentTarget.parentElement.innerText = 'Asset Missing';
                                        e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center', 'text-muted');
                                     }
                                }}
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded">
                                {idx + 1}/{hobby.images.length}
                            </div>
                        </div>
                    ))}
                 </div>
                 {/* Scroll hint overlay */}
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs pointer-events-none md:hidden">
                    Swipe for more &rarr;
                 </div>
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-center bg-card">
                 <h3 className="text-2xl font-bold text-white mb-4">{hobby.title}</h3>
                 <p className="text-muted leading-relaxed">{hobby.description}</p>
              </div>

            </div>
          </TerminalCard>
        ))}
      </div>
    </div>
  );
};

export default HobbiesPage;