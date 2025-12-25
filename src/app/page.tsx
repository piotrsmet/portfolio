"use client";

import Image from "next/image";
import {pressStart2P} from "./layout";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<'dmg' | 'gbc'>('dmg');

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

      <div className="mt-8 md:mt-0">
        <span className={`${pressStart2P.className} text-2xl md:text-4xl ${currentTheme.mainText} text-center block`}>Portfolio</span>
      </div>
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-center">
          <span className={`${pressStart2P.className} text-3xl ${currentTheme.mainText}`}>
            Player 1
          </span>
        </div>
      <div className={`w-full max-w-5xl flex flex-col-reverse md:flex-row items-center md:items-stretch gap-6 border-8 ${currentTheme.cardBorder} ${currentTheme.card} p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
        <div className={`flex-1 border-4 ${currentTheme.cardBorder} border-dashed p-4 md:p-6 ${currentTheme.cardInner}`}>
          <span className={`${pressStart2P.className} text-xs md:text-sm leading-relaxed block text-black`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
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
          <span className={`${pressStart2P.className} text-3xl ${currentTheme.mainText}`}>Skills</span>
        </div>
        <div className={`w-full max-w-5xl border-8 ${currentTheme.cardBorder} ${currentTheme.card} p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["React", "Vue", "Next.js", "TypeScript", "Tailwind", "Node.js", "Git", "Python", "SQL", "Kotlin", "Jetpack Compose", "RestAPI"].map((skill) => (
              <div key={skill} className={`border-4 ${currentTheme.cardBorder} bg-white p-4 text-center ${currentTheme.skillHover} transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center`}>
                <span className={`${pressStart2P.className} ${skill.length > 10 ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'} text-black`}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-6 pb-20">
        <div className="flex items-center justify-center">
          <span className={`${pressStart2P.className} text-3xl ${currentTheme.mainText}`}>Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {[
            { title: "Lublinalia 2025 Website", desc: "Website for event Lublinalia 2025", tags: ["Wordpress", "SEO", "JavaScript", "HTML+CSS"], playLink: "https://lublinalia.pl", codeLink: "", image: "/lublinalia/lublinalia1.JPG" },
            { title: "Gameswiper", desc: "App for browsing games inspired by applications like Tinder or Swipefy", tags: ["Kotlin", "Jetpack Compose", "Firebase"], playLink: "", codeLink: "https://github.com/piotrsmet/gameswiper", image: "" },
            { title: "AptekON", desc: "Team leader and backend engineer at a pharmacies map prototype", tags: ["Node.js", "Express.js", "RestAPI"], playLink: "", codeLink: "https://github.com/piotrsmet/aptekon", image: "" },
            { title: "Wordlike", desc: "Wordle inspired app made in React", tags: ["React", "Tailwind"], playLink: "", codeLink: "https://github.com/piotrsmet/wordlike", image: "" }
          ].map((project, i) => (
            <div key={i} className={`border-8 ${currentTheme.cardBorder} ${currentTheme.card} p-4 flex flex-col gap-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all`}>
              <div className={`w-full h-64 border-4 ${currentTheme.cardBorder} bg-black relative overflow-hidden group`}>
                 {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover ${theme === 'dmg' ? 'grayscale contrast-125' : ''}`}
                      />
                      {theme === 'dmg' && (
                        <div className="absolute inset-0 bg-[#CADC9F] mix-blend-multiply opacity-80" />
                      )}
                    </>
                 ) : (
                   <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white">
                      <span className={pressStart2P.className}>IMG</span>
                   </div>
                 )}
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className={`${pressStart2P.className} text-lg md:text-xl text-black`}>{project.title}</h3>
                <p className={`${pressStart2P.className} text-3xs md:text-sm font-mono text-black leading-relaxed`}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-[10px] border-2 ${currentTheme.cardBorder} px-2 py-1 bg-white text-black ${pressStart2P.className}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                   {project.playLink ? (
                     <a href={project.playLink} target="_blank" rel="noopener noreferrer" className={`flex-1 border-4 ${currentTheme.cardBorder} p-2 ${currentTheme.cardInner} hover:brightness-90 text-black ${pressStart2P.className} text-[10px] text-center transition-all active:translate-y-1 block`}>PLAY</a>
                   ) : (
                     <button disabled className={`flex-1 border-4 ${currentTheme.cardBorder} p-2 bg-gray-400/50 opacity-50 cursor-not-allowed text-black ${pressStart2P.className} text-[10px] text-center`}>PLAY</button>
                   )}
                   
                   {project.codeLink ? (
                     <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={`flex-1 border-4 ${currentTheme.cardBorder} p-2 bg-white hover:bg-gray-100 text-black ${pressStart2P.className} text-[10px] text-center transition-all active:translate-y-1 block`}>CODE</a>
                   ) : (
                     <button disabled className={`flex-1 border-4 ${currentTheme.cardBorder} p-2 bg-gray-400/50 opacity-50 cursor-not-allowed text-black ${pressStart2P.className} text-[10px] text-center`}>CODE</button>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
