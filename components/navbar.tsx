"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
}

const navLinks = [
  { label: "home", href: "#home" },
  { label: "work", href: "#work" },
  { label: "services", href: "#services" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
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

export default function Navbar({ activeSection = "home" }: NavbarProps) {
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
    <nav
      id="nav"
      aria-label="Main Navigation"
      className="-mx-2 mb-10 sm:mb-12 mt-4 sm:mt-6 md:mt-10 flex items-center justify-between gap-3 sm:gap-4"
    >
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex min-w-max items-center pr-2 sm:pr-6">
          {navLinks.map((item) => {
            const isActive = activeSection.toLowerCase() === item.label.toLowerCase();
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                data-status={isActive ? "active" : undefined}
                className={`relative flex items-center px-1.5 sm:px-2 py-1 text-sm sm:text-base transition-colors ${
                  isActive
                    ? "text-[#141413] dark:text-[#EDEDEB] underline underline-offset-4"
                    : "text-[#5E5D59] dark:text-[#A3A29D] hover:text-[#141413] dark:hover:text-[#EDEDEB]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="shrink-0 p-1.5 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] transition-colors"
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
    </nav>
  );
}
