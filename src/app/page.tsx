"use client";

import Image from "next/image";
import {pressStart2P} from "./layout";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [theme, setTheme] = useState<'dmg' | 'gbc'>('dmg');
  const [started, setStarted] = useState(false);
  
  const skills = [
    { name: "React", desc: "Component-based UI library. +10 to Frontend Speed." },
    { name: "Vue", desc: "Progressive framework. +8 to Flexibility." },
    { name: "Next.js", desc: "React framework. +15 to SEO & Performance." },
    { name: "TypeScript", desc: "Typed JavaScript. +20 to Code Safety." },
    { name: "Tailwind", desc: "Utility-first CSS. +12 to Styling Speed." },
    { name: "Node.js", desc: "JS runtime. +10 to Backend Capability." },
    { name: "Git", desc: "Version control. +100 to Time Travel." },
    { name: "Python", desc: "Versatile language. +10 to Data Science." },
    { name: "SQL", desc: "Database language. +10 to Data Management." },
    { name: "Kotlin", desc: "Modern Android language. +10 to Mobile Dev." },
    { name: "Jetpack Compose", desc: "Modern toolkit for native UI. +10 to UI." },
    { name: "RestAPI", desc: "Architectural style. +10 to Communication." },
    { name: "Firebase", desc: "Backend-as-a-Service. +10 to Real-time DB." },
    { name: "WordPress", desc: "CMS platform. +10 to Website Management." },
    { name: "English B2", desc: "Proficient in English. +10 to Communication Skills." }
  ];

  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);

  if (!started) {
    return <LoadingScreen onStart={() => setStarted(true)} fontClassName={pressStart2P.className} />;
  }

  const toggleTheme = () => {
    setTheme(prev => prev === 'dmg' ? 'gbc' : 'dmg');
  };

  const currentTheme = {
    dmg: {
      bg: "bg-[#CADC9F]",
      mainText: "text-black",
      card: "bg-green-300",
      cardInner: "bg-green-200",
      skillHover: "hover:bg-green-100",
      cardBorder: "border-black",
    },
    gbc: {
      bg: "bg-[#652A95]",
      mainText: "text-white",
      card: "bg-[#D1D5DB]",
      cardInner: "bg-[#9CA3AF]",
      skillHover: "hover:bg-purple-200",
      cardBorder: "border-black",
    }
  }[theme];

  return (
    <div className={`${currentTheme.bg} flex flex-col w-full p-4 min-h-screen items-center gap-10 transition-colors duration-300`}>
      <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
        <button 
          onClick={toggleTheme}
          className={`border-2 md:border-4 border-black p-1 md:p-2 ${theme === 'dmg' ? 'bg-[#652A95] text-white' : 'bg-[#CADC9F] text-black'} ${pressStart2P.className} text-[10px] md:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all`}
        >
          <span className="md:hidden">{theme === 'dmg' ? 'GBC' : 'DMG'}</span>
          <span className="hidden md:inline">{theme === 'dmg' ? 'Switch to GBC' : 'Switch to DMG'}</span>
        </button>
      </div>

      <div className="mt-12 md:mt-8 mb-8 flex flex-col items-center gap-4">
        <h1 
          className={`${pressStart2P.className} text-4xl md:text-6xl ${currentTheme.mainText} tracking-widest uppercase transform hover:scale-105 transition-transform duration-300 cursor-default`}
          style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.25)' }}
        >
          PORTFOLIO
        </h1>
        <div className="flex gap-2 opacity-50">
           <div className={`w-2 h-2 md:w-3 md:h-3 ${theme === 'dmg' ? 'bg-black' : 'bg-white'} animate-bounce`}></div>
           <div className={`w-2 h-2 md:w-3 md:h-3 ${theme === 'dmg' ? 'bg-black' : 'bg-white'} animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
           <div className={`w-2 h-2 md:w-3 md:h-3 ${theme === 'dmg' ? 'bg-black' : 'bg-white'} animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-center">
          <span className={`${pressStart2P.className} text-3xl ${currentTheme.mainText}`} style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.25)' }}>
            Player 1
          </span>
        </div>
      <div className={`w-full max-w-5xl flex flex-col-reverse md:flex-row items-center md:items-stretch gap-6 border-8 ${currentTheme.cardBorder} ${currentTheme.card} p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
        <div className={`flex-1 border-4 ${currentTheme.cardBorder} border-dashed p-4 md:p-6 ${currentTheme.cardInner} flex flex-col justify-center`}>
          <div className={`${pressStart2P.className} text-xs md:text-sm text-black flex flex-col gap-4`}>
            <div className="flex flex-col gap-1">
              <span className="opacity-60">NAME:</span>
              <span>PIOTR SMET</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-60">AGE:</span>
              <span>22</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-60">STATUS:</span>
              <span className="animate-pulse">STUDENT (READY TO WORK)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="opacity-60">DESCRIPTION:</span>
              <span className="leading-relaxed">
                I am a third-year Computer Science student with a coding background dating back to 2017.
                Currently, I am honing my skills as a Fullstack Developer and seeking opportunities in this field.
                My preferred tech stack includes React for the frontend and Express.js for the backend.
              </span>
            </div>
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src={ currentTheme.bg === "bg-[#CADC9F]" ? "/profile.jpg" : "/profile_color.jpg" }
            alt="Profile"
            width={500}
            height={500}
            className={`w-48 h-48 md:w-72 md:h-72 object-cover border-4 ${currentTheme.cardBorder} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
          />
        </div>
      </div>
      </div>

      <div className="flex flex-col w-full items-center gap-6">
        <div className="flex items-center justify-center">
          <span className={`${pressStart2P.className} text-3xl ${currentTheme.mainText}`} style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.25)' }}>Inventory</span>
        </div>
        <div className={`w-full max-w-5xl border-8 ${currentTheme.cardBorder} ${currentTheme.card} p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-8`}>
          
          {/* Skills Grid */}
          <div className="flex-1">
             <h3 className={`${pressStart2P.className} text-sm mb-4 text-black`}>ITEMS:</h3>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    onMouseEnter={() => setSelectedSkill(skill)}
                    className={`cursor-pointer border-4 ${currentTheme.cardBorder} bg-white p-2 text-center ${currentTheme.skillHover} transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center min-h-[60px] ${selectedSkill?.name === skill.name ? 'bg-yellow-200' : ''}`}
                  >
                    <span className={`${pressStart2P.className} ${skill.name.length > 10 ? 'text-[8px]' : 'text-[10px]'} text-black`}>{skill.name}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Description Box */}
          <div className={`w-full md:w-1/3 border-4 ${currentTheme.cardBorder} ${currentTheme.cardInner} p-4 flex flex-col`}>
             <h3 className={`${pressStart2P.className} text-sm mb-4 text-black border-b-4 ${currentTheme.cardBorder} pb-2`}>INFO:</h3>
             <div className="flex-1 flex flex-col justify-center items-center text-center gap-4 min-h-[150px]">
                {selectedSkill ? (
                  <>
                    <span className={`${pressStart2P.className} text-lg text-black`}>{selectedSkill.name}</span>
                    <p className={`${pressStart2P.className} text-xs leading-relaxed text-black`}>{selectedSkill.desc}</p>
                  </>
                ) : (
                  <p className={`${pressStart2P.className} text-xs text-black opacity-50`}>HOVER OVER AN ITEM TO SEE DETAILS</p>
                )}
             </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-6 pb-20">
        <div className="flex items-center justify-center">
          <span className={`${pressStart2P.className} text-3xl ${currentTheme.mainText}`} style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.25)' }}>Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {[
            { title: "Lublinalia 2025 Website", desc: "Website for event Lublinalia 2025", tags: ["Wordpress", "SEO", "JavaScript", "HTML+CSS"], playLink: "https://lublinalia.pl", codeLink: "", image: "/lublinalia/lublinalia1.JPG" },
            { title: "Gameswiper", desc: "App for browsing games inspired by applications like Tinder or Swipefy", tags: ["Kotlin", "Jetpack Compose", "Firebase"], playLink: "", codeLink: "https://github.com/piotrsmet/gameswiper", image: "" },
            { title: "AptekON", desc: "Team leader and backend engineer at a pharmacies map prototype", tags: ["Node.js", "Express.js", "RestAPI"], playLink: "", codeLink: "https://github.com/piotrsmet/aptekon", image: "/aptekon/aptekon1.JPG" },
            { title: "Wordlike", desc: "Wordle inspired app made in React", tags: ["React", "Tailwind"], playLink: "https://piotrsmet.github.io/Wordlike/", codeLink: "https://github.com/piotrsmet/wordlike", image: "/wordlike/wordlike1.JPG" }
          ].map((project, i) => (
            <ProjectCard key={i} project={project} theme={theme} currentTheme={currentTheme} />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-6 pb-20">
         <div className={`w-full max-w-3xl border-8 ${currentTheme.cardBorder} ${currentTheme.card} p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
            <h2 className={`${pressStart2P.className} text-2xl md:text-4xl text-black mb-8 animate-pulse`}>GAME OVER</h2>
            <div className={`${pressStart2P.className} text-black text-sm md:text-xl mb-8`}>CONTINUE?</div>
            
            <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
               {[
                 { label: "EMAIL", value: "smet.piotr@gmail.com", href: "mailto:smet.piotr@gmail.com" },
                 { label: "GITHUB", value: "github.com/piotrsmet", href: "https://github.com/piotrsmet" },
                 { label: "LINKEDIN", value: "linkedin.com/in/piotrsmet", href: "https://linkedin.com/in/piotrsmet" }
               ].map((item) => (
                 <a 
                   key={item.label}
                   href={item.href}
                   target={item.href.startsWith('http') ? "_blank" : undefined}
                   rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                   className="group w-full flex items-center gap-4"
                 >
                    <div className="hidden md:flex w-8 justify-end shrink-0">
                      <span className={`${pressStart2P.className} text-black text-xl opacity-0 group-hover:opacity-100 transition-opacity`}>
                        {'>'}
                      </span>
                    </div>
                    <div className={`flex-1 min-w-0 border-4 ${currentTheme.cardBorder} ${currentTheme.cardInner} p-4 flex flex-col md:flex-row justify-between items-center gap-2 transition-colors ${pressStart2P.className} text-xs md:text-sm text-black`}>
                       <span className="shrink-0">{item.label}</span>
                       <span className="text-[10px] md:text-xs opacity-80 truncate max-w-full">{item.value}</span>
                    </div>
                 </a>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
