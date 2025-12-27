import Image from "next/image";
import { pressStart2P } from "@/app/layout";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  playLink: string;
  codeLink: string;
  image: string;
}

interface ThemeColors {
  bg: string;
  mainText: string;
  card: string;
  cardInner: string;
  skillHover: string;
  cardBorder: string;
}

interface ProjectCardProps {
  project: Project;
  theme: 'dmg' | 'gbc';
  currentTheme: ThemeColors;
}

export default function ProjectCard({ project, theme, currentTheme }: ProjectCardProps) {
  return (
    <div className={`border-8 ${currentTheme.cardBorder} ${currentTheme.card} p-4 flex flex-col gap-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all`}>
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
             <a 
               href={project.playLink} 
               target="_blank" 
               rel="noopener noreferrer" 
               className={`flex-1 border-4 ${currentTheme.cardBorder} p-2 ${currentTheme.cardInner} hover:brightness-90 text-black ${pressStart2P.className} text-[10px] text-center transition-all active:translate-y-1 block`}
             >
               PLAY
             </a>
           ) : (
             <button disabled className={`flex-1 border-4 ${currentTheme.cardBorder} p-2 bg-gray-400/50 opacity-50 cursor-not-allowed text-black ${pressStart2P.className} text-[10px] text-center`}>PLAY</button>
           )}
           
           {project.codeLink ? (
             <a 
               href={project.codeLink} 
               target="_blank" 
               rel="noopener noreferrer" 
               className={`flex-1 border-4 ${currentTheme.cardBorder} p-2 bg-white hover:bg-gray-100 text-black ${pressStart2P.className} text-[10px] text-center transition-all active:translate-y-1 block`}
             >
               CODE
             </a>
           ) : (
             <button disabled className={`flex-1 border-4 ${currentTheme.cardBorder} p-2 bg-gray-400/50 opacity-50 cursor-not-allowed text-black ${pressStart2P.className} text-[10px] text-center`}>CODE</button>
           )}
        </div>
      </div>
    </div>
  );
}
