import React from "react";
import { Mail, Phone, Github } from "lucide-react";

interface AboutMeProps {
  isDark?: boolean;
  onBack?: () => void;
}

export default function AboutMe({ isDark = true, onBack }: AboutMeProps) {
  const theme = {
    text: isDark ? "text-gray-200" : "text-gray-800",
    textMuted: isDark ? "text-gray-400" : "text-gray-600",
    accent: isDark ? "text-yellow-500" : "text-yellow-600",
    bg: isDark ? "bg-black/40" : "bg-white/60",
    border: isDark ? "border-yellow-500/20" : "border-gray-200",
    cardBg: isDark ? "bg-zinc-900/50" : "bg-white/80",
    heading: isDark ? "text-white" : "text-gray-900",
    buttonBg: isDark ? "bg-zinc-800 hover:bg-zinc-700" : "bg-gray-100 hover:bg-gray-200",
  };

  return (
    <div className={`w-full max-w-3xl mx-auto p-6 md:p-12 ${theme.text} animate-fade-in relative font-light`}>
      {/* Back Button */}
      {onBack && (
        <button 
            onClick={onBack}
            className={`absolute top-6 left-6 p-2 rounded-full ${theme.buttonBg} transition-colors z-50`}
            aria-label="Go back"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"/>
                <path d="M12 19l-7-7 7-7"/>
            </svg>
        </button>
      )}

      {/* Header Section */}
      <div className="flex flex-col items-start space-y-2 mb-16 mt-12">
        <h1 className={`text-5xl md:text-6xl font-black tracking-tighter uppercase ${theme.heading}`}>
          Sahil Krishna CB
        </h1>
        <p className={`text-lg md:text-xl tracking-wide uppercase ${theme.accent}`}>
          Full Stack Developer
        </p>
        
      </div>

      {/* Summary - Clean Text */}
      <div className="mb-16">
        <p className="leading-loose text-lg opacity-90 max-w-2xl">
          Full stack developer with 2+ years of coding experience and almost 1 year in professional development. 
          Led, developed and delivered 2+ projects from scratch, handling both frontend and backend with a focus on clean, reliable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {/* Skills Section - Minimal List */}
        <div className="space-y-8">
           <h2 className={`text-sm font-bold uppercase tracking-[0.2em] opacity-60 ${theme.heading}`}>
             Skills
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillGroup title="Programming" skills={["Javascript", "Typescript", "C++"]} theme={theme} />
                <SkillGroup title="Frontend" skills={["React.js","React Native", "Next.js", "Tailwind CSS", "Figma"]} theme={theme} />
                <SkillGroup title="Backend & API" skills={["Node.js", "Express.js", "REST APIs", "JWT"]} theme={theme} />
                <SkillGroup title="Databases & Cloud" skills={["MongoDB", "PostgreSQL", "MySQL", "AWS (EC2, S3)", "Nginx", "Cloudflare"]} theme={theme} />
                <SkillGroup title="Tools" skills={["Git", "Github", "Postman"]} theme={theme} />
           </div>
        </div>

        {/* Experience - Minimal Timeline */}
        <div className="space-y-8">
             <h2 className={`text-sm font-bold uppercase tracking-[0.2em] opacity-60 ${theme.heading}`}>
                Experience
            </h2>
            <div className="space-y-12">
                <ExperienceCard 
                    title="Intern"
                    company="Devxtra"
                    period="From JUNE 2025 - Present"
                    points={[
                       "Gained problem solving skills through consistently practicing pattern printing problems and array manipulation problems.",
                       "Transformed my thinking from a general perspective to a developer-oriented mindset focused on logic, analysis, and efficient problem-solving.",
                       "Prioritized building real-world, production-oriented applications over basic learning projects.",
                       "Gained adaptability to emerging technologies by actively integrating new tools and frameworks."
                    ]}
                    theme={theme}
                />
            </div>
        </div>

        {/* Education - Minimal */}
        <div className="space-y-8">
             <h2 className={`text-sm font-bold uppercase tracking-[0.2em] opacity-60 ${theme.heading}`}>
                Education
            </h2>
            <div className="grid grid-cols-1 gap-8">
                <div>
                    <h3 className={`text-lg font-bold ${theme.heading}`}>University of Calicut</h3>
                    <p className={`text-sm mt-1 opacity-70`}>Bachelor of Computer Application</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ title, skills, theme }: { title: string, skills: string[], theme: any }) {
    return (
        <div>
            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-4 opacity-50`}>
                {title}
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                {skills.map(skill => (
                    <span key={skill} className={`text-sm font-medium ${theme.heading}`}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ExperienceCard({ title, company, period, points, theme }: { title: string, company: string, period: string, points: string[], theme: any }) {
    return (
        <div className="group">
             <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className={`text-xl font-bold ${theme.heading}`}>{title}</h3>
                <span className={`text-xs font-mono opacity-60`}>{period}</span>
            </div>
            {company && <p className={`text-md font-medium mb-4 opacity-80`}>{company}</p>}
            <ul className="space-y-2 mt-4">
                {points.map((point, i) => (
                    <li key={i} className="text-sm leading-relaxed opacity-80 pl-4 border-l border-gray-700/30">
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
}
