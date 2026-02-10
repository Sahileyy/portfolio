/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Folder from "@/components/folder-component";
import AboutMe from "@/components/aboutme";
import ScrollReveal from "@/components/scroll-reveal";
import { SocialLinks } from "@/components/ui/social-links";
import { useEffect, useState, useRef } from "react";

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
    url: "https://www.instagram.com/sahilkrishna.cb?igsh=MWpsdXR1MGJ2N2VqZw==",
  },
  {
    name: "LinkedIn",
    image: "https://link-hover-lndev.vercel.app/linkedin.png",
    url: "https://www.linkedin.com/in/sahil-krishna-cb",
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(true);
  const [view, setView] = useState<"home" | "about">("home");
  const hireMeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden no-scrollbar transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-100"
      }`}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-20 right-6 lg:right-20 z-50 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border ${
          isDark
            ? "bg-black border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            : "bg-white border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
        }`}
      >
        <span className="text-lg">{isDark ? "☀️" : "🦇"}</span>
      </button>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float ${
              isDark ? "bg-yellow-500/20" : "bg-gray-600/20"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Parallax icons */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${
            mousePosition.y * 0.015
          }px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 text-7xl">🦇</div>
        <div className="absolute bottom-1/4 right-1/4 text-6xl">🌙</div>
      </div>

      {view === "about" ? (
        <div className="relative z-20 w-full min-h-screen flex items-center justify-center py-20 overflow-y-auto">
             <AboutMe isDark={isDark} onBack={() => setView("home")} />
        </div>
      ) : (
      /* Main Content Wrapper */
      <div className="relative z-10 w-full">
          
          {/* Section 1: Portfolio (Now Top) */}
          <div 
            ref={portfolioRef} 
            className="relative flex flex-col justify-between items-center min-h-screen py-12 md:py-20 px-6 overflow-hidden"
          >
            {/* Background Pattern */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-5 transition-opacity duration-500"
                style={{
                    backgroundImage: `url('/mini_folder_pattern.png')`,
                    backgroundSize: '300px',
                    filter: isDark ? 'invert(1)' : 'none'
                }}
            />

            <ScrollReveal>
            {/* Heading - Top */}
            <div
            className={`relative z-10 text-center mt-10 md:mt-16 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
            >
            <h1
                className={`text-6xl md:text-8xl font-bold mb-4 tracking-tighter ${
                isDark ? "text-white" : "text-gray-900"
                }`}
            >
                Portfolio
            </h1>
            <p
                className={`text-xs md:text-sm font-medium uppercase tracking-[0.4em] ${
                isDark ? "text-zinc-500" : "text-gray-400"
                }`}
            >
                FULL-STACK Developer
            </p>
            </div>
            </ScrollReveal>

            {/* Folder - True Center (Flex Grow) */}
            <ScrollReveal delay={200} className="flex-1 flex items-center justify-center w-full relative z-10">
                <div
                className={`transition-all duration-700 ${
                    mounted
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                }`}
                >
                <div className="relative group">
                    {/* Subtle Glow */}
                    <div
                    className={`absolute -inset-8 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition duration-1000 ${
                        isDark ? "bg-white" : "bg-black"
                    }`}
                    />
                    <div className="relative transform hover:scale-105 transition duration-500">
                    <Folder
                        color={isDark ? "#EAB308" : "#2563EB"}
                        items={[
                        // Card 1: Resume - Minimal
                        <div key="1" className="w-full h-full flex flex-col items-center justify-center bg-white p-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Doc</span>
                            <span className="text-sm font-bold uppercase tracking-wider text-zinc-900">Resume</span>
                        </div>,
                        // Card 2: Projects - With Image Background
                        <div key="2" className="w-full h-full flex items-center justify-end bg-white p-2 overflow-hidden">
                            <img 
                                src="/projects_bg.jpg" 
                                alt="Projects" 
                                className="absolute left-0 top-0 h-full w-auto object-cover object-left"
                            />
                            <span className="relative z-10 text-sm font-bold uppercase tracking-wider text-black">My Project</span>
                        </div>,
                        // Card 3: About Me - With Image Background
                        <div 
                            key="3" 
                            onClick={(e) => {
                                e.stopPropagation();
                                setView("about");
                            }}
                            className="w-full h-full flex flex-col items-center justify-center p-4 cursor-pointer transition-all group/card bg-cover bg-center"
                            style={{ backgroundImage: `url('/about_me_bg.jpg')` }}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-black mb-1 group-hover/card:text-yellow-600 transition-colors">ME</span>
                            <span className="text-base font-bold uppercase tracking-wider text-black group-hover/card:text-yellow-700 transition-colors">About</span>
                        </div>,
                        ]}
                    />           
                    </div>
                </div>
                </div>
            </ScrollReveal>

            {/* Scroll Indicator - Bottom */}
            <ScrollReveal delay={400}>
            <div
            className={`relative z-10 flex flex-col items-center transition-all duration-700 cursor-pointer hover:opacity-80 active:scale-95 ${
                mounted ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => hireMeRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span
                className={`text-xs uppercase tracking-widest mb-2 ${
                    isDark ? "text-gray-600" : "text-gray-400"
                }`}
                >
                Hire Me
                </span>
                <svg
                    className={`w-6 h-6 animate-bounce ${isDark ? "text-yellow-600" : "text-gray-600"}`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
            </ScrollReveal>
          </div>

          {/* Section 2: Hire Me (Now Bottom) */}
          <div ref={hireMeRef} className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center p-12 md:p-24 text-center">
            <ScrollReveal>
                <h2 className={`text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter ${isDark ? "text-white" : "text-gray-900"}`}>
                    HIRE ME
                </h2>
                <div className="space-y-16">
                    <a 
                    href="mailto:sahilkrishnacb@gmail.com"
                    className={`text-xl md:text-3xl font-light hover:underline underline-offset-8 transition-all leading-relaxed ${isDark ? "text-yellow-500" : "text-yellow-600"}`}
                    >
                        sahilkrishnacb@gmail.com
                    </a>

                    
                    <div 
                        className={`flex flex-col items-center justify-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <span className="text-xs uppercase tracking-[0.2em] mb-2">Back to Top</span>
                        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </div>

                    <div className="flex justify-center mt-6">
                        <SocialLinks 
                            socials={socials} 
                            className={isDark ? "text-white/40" : "text-gray-400"} 
                        />
                    </div>
                </div>
            </ScrollReveal>
          </div>
      </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
      `}</style>
    </div>
  );
}
