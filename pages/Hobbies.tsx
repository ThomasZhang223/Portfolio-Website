import React from 'react';
import TerminalCard from '../components/TerminalCard';
import { Hobby } from '../types';

const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Music",
    description: "Ever since I picked up my first pair of drumsticks at age six, I’ve been inseparable from my instruments. In its rhythms I find both calm and connection; music grounds me, eases my mind, and weaves people together across cultures and languages in a way few other forms of expression can. For the past decade of my life, I've been a percussionist in ensembles including the Toronto Youth Wind Orchestra, Toronto Symphony Youth Orchestra, and currently Orchestra@UWaterloo.",
    images: [
      "/Portfolio-Website/assets/music1.JPEG",
      "/Portfolio-Website/assets/music2.JPEG",
      "/Portfolio-Website/assets/music3.JPEG",
      "/Portfolio-Website/assets/music4.JPEG",
      "/Portfolio-Website/assets/music5.JPG",
      "/Portfolio-Website/assets/music6.JPEG",
      "/Portfolio-Website/assets/music7.JPEG",
    ]
  },
  {
    id: 2,
    title: "Stargazing",
    description: "I've always been fascinated by the great beyond, and what lies in our endless dark cosmos. In clear nights I find solace in seeing the constellations, watching them return and recede with the seasons. With my telescope I can see far beyond what my eyesight grants me-the shifting phases of Venus, mountain ranges and craters on the Moon, storms and moons of Jupiter, and the rings and divisions of Saturn. In those quiet moments beneath the stars, time slows, and I feel peacefully anchored within the vastness of the universe.",
    images: [
      "/Portfolio-Website/assets/star1.jpg",
      "/Portfolio-Website/assets/star2.JPG",
      "/Portfolio-Website/assets/star3.jpg",
      "/Portfolio-Website/assets/star4.jpg",
      "/Portfolio-Website/assets/star5.jpg",
      "/Portfolio-Website/assets/star6.jpg",
      "/Portfolio-Website/assets/star7.jpg"
    ]
  },
  {
    id: 3,
    title: "Cycling",
    description: "My escape from everything in the world. Hours on end with nothing but me, my bike, and the endless road ahead. Not only great for exercise, it importantly allows me to venture beyond my desk, explore new places, and have spontaneous adventures.",
    images: [
      "/Portfolio-Website/assets/bike1.jpg",
      "/Portfolio-Website/assets/bike2.jpg",
      "/Portfolio-Website/assets/bike3.jpg",
      "/Portfolio-Website/assets/bike4.jpg"
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
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs pointer-events-none tracking-wide bg-black/40 px-3 py-1 rounded-full">
                    scroll to see more
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