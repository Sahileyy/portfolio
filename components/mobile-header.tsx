"use client";

import { useState, useSyncExternalStore } from "react";
import { SketchMenu } from "./sketch-icons";
import { Sun, Moon, X } from "lucide-react";

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

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="md:hidden sticky top-0 z-40">
      <div className="flex items-center justify-between gap-2 w-full p-4 sm:p-6 bg-transparent">
        {/* Logo / Monogram */}
        <a
          href="#home"
          aria-label="Sahil Krishna - Home"
          className="w-10 h-10 rounded-full bg-white/70 dark:bg-[#121211]/60 backdrop-blur-xl border border-white/80 dark:border-neutral-800 flex items-center justify-center text-xs font-semibold text-[#141413] dark:text-[#EDEDEB] hover:bg-white/90 dark:hover:bg-[#121211]/80 transition-all cursor-pointer select-none"
        >
          SK
        </a>

        <div className="flex items-center gap-2">
          {/* "Let's Talk" CTA Pill */}
          <a
            href="#contact"
            className="h-10 px-3.5 rounded-full bg-white/70 dark:bg-[#121211]/60 backdrop-blur-xl border border-white/80 dark:border-neutral-800 flex items-center justify-center text-xs font-medium text-[#141413] dark:text-[#EDEDEB] hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/90 dark:hover:bg-[#121211]/80 transition-all"
          >
            Let&#39;s Talk
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full bg-white/70 dark:bg-[#121211]/60 backdrop-blur-xl border border-white/80 dark:border-neutral-800 flex items-center justify-center text-[#141413] dark:text-[#EDEDEB] hover:bg-white/90 dark:hover:bg-[#121211]/80 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
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

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="w-10 h-10 rounded-full bg-white/70 dark:bg-[#121211]/60 backdrop-blur-xl border border-white/80 dark:border-neutral-800 flex items-center justify-center text-[#141413] dark:text-[#EDEDEB] hover:bg-white/90 dark:hover:bg-[#121211]/80 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            {menuOpen ? <X size={18} /> : <SketchMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="px-4 pb-4">
          <nav className="rounded-2xl bg-white/90 dark:bg-[#1B1A19]/90 backdrop-blur-2xl border border-neutral-200/80 dark:border-neutral-800 p-4 space-y-2 shadow-lg">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-base text-[#5E5D59] dark:text-[#A3A29D] hover:text-[#141413] dark:hover:text-[#EDEDEB] font-medium rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
