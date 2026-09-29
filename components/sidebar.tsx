"use client";

import { useSyncExternalStore } from "react";
import { SketchGlobe } from "./sketch-icons";
import { Sun, Moon } from "lucide-react";

interface SidebarProps {
  activeSection?: string;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function getThemeSnapshot(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export default function Sidebar({ activeSection = "home" }: SidebarProps) {
  const isMounted = useIsMounted();
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "dark");

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <aside
      aria-label="Sidebar Navigation"
      className="hidden md:flex md:w-60 md:shrink-0 md:sticky md:top-0 md:h-screen md:flex-col pt-24 sm:pt-28 md:pt-32 pl-6 sm:pl-8 pr-4 select-none justify-between pb-12"
    >
      <div>
        <nav aria-label="Main Navigation" className="flex flex-col space-y-1.5">
          {navLinks.map((item) => {
            const isActive = activeSection.toLowerCase() === item.label.toLowerCase();
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-base transition-colors duration-150 ${
                  isActive
                    ? "text-[#141413] dark:text-[#EDEDEB] font-semibold"
                    : "text-[#6B6A67] dark:text-[#A3A29D] font-normal hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-8 w-full">
          <p className="text-base text-[#6B6A67] dark:text-[#A3A29D] leading-snug whitespace-pre-line w-full">
            Exploring ideas,{"\n"}building what feels right.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-base text-[#6B6A67] dark:text-[#A3A29D]">
          <SketchGlobe size={16} className="w-4 h-4 shrink-0 text-[#84837E] dark:text-[#8E8D88]" />
          <span>Kerala, India</span>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-6 border-t border-[#EAE8E2] dark:border-[#242321]">
        {/* Availability indicator */}
        <div className="flex items-center gap-1.5 text-xs text-[#84837E] dark:text-[#8E8D88] font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>available for work</span>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="ml-auto p-1.5 rounded-full hover:bg-[#F3F2EE] dark:hover:bg-[#1B1A19] text-[#6B6A67] dark:text-[#A3A29D] hover:text-[#141413] dark:hover:text-[#EDEDEB] transition-colors"
        >
          {isMounted ? (
            theme === "dark" ? (
              <Sun size={15} strokeWidth={1.8} />
            ) : (
              <Moon size={15} strokeWidth={1.8} />
            )
          ) : (
            <div className="w-[15px] h-[15px]" />
          )}
        </button>
      </div>
    </aside>
  );
}
