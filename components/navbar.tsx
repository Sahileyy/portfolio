"use client";

import { useState, useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SketchChevron } from "./sketch-icons";

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

const primaryNavLinks = navLinks.slice(0, 3);
const secondaryNavLinks = navLinks.slice(3);

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
  const [isExpanded, setIsExpanded] = useState(false);
  const isMounted = useIsMounted();
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "dark");

  const isSecondaryActive = secondaryNavLinks.some(
    (item) => item.label.toLowerCase() === activeSection.toLowerCase()
  );

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
      className="-mx-2 mb-10 sm:mb-12 mt-4 sm:mt-6 md:mt-10 flex flex-col justify-start"
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4 w-full">
        {/* Desktop Navigation: all links displayed inline */}
        <div className="hidden sm:flex min-w-max items-center pr-2 sm:pr-6">
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

        {/* Mobile Navigation: primary links + minimal view more arrow toggle */}
        <div className="flex sm:hidden items-center">
          {primaryNavLinks.map((item) => {
            const isActive = activeSection.toLowerCase() === item.label.toLowerCase();
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsExpanded(false)}
                aria-current={isActive ? "page" : undefined}
                data-status={isActive ? "active" : undefined}
                className={`relative flex items-center px-1.5 py-1 text-sm transition-colors ${
                  isActive
                    ? "text-[#141413] dark:text-[#EDEDEB] underline underline-offset-4"
                    : "text-[#5E5D59] dark:text-[#A3A29D] hover:text-[#141413] dark:hover:text-[#EDEDEB]"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse navigation links" : "View more navigation links"}
            className={`relative flex items-center gap-0.5 px-1.5 py-1 text-sm transition-colors rounded ${
              isSecondaryActive
                ? "text-[#141413] dark:text-[#EDEDEB] font-medium"
                : "text-[#5E5D59] dark:text-[#A3A29D] hover:text-[#141413] dark:hover:text-[#EDEDEB]"
            }`}
          >
            <span>{isExpanded ? "less" : "more"}</span>
            <span
              className={`inline-flex transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <SketchChevron size={13} />
            </span>
            {isSecondaryActive && !isExpanded && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 ml-0.5" />
            )}
          </button>
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
      </div>

      {/* Mobile Collapsible Secondary Links */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden sm:hidden w-full"
          >
            <div className="flex items-center gap-1 pt-1.5 pb-0.5 border-t border-[#EAE8E2]/60 dark:border-[#242321]/60 mt-1.5">
              {secondaryNavLinks.map((item) => {
                const isActive = activeSection.toLowerCase() === item.label.toLowerCase();
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsExpanded(false)}
                    aria-current={isActive ? "page" : undefined}
                    data-status={isActive ? "active" : undefined}
                    className={`relative flex items-center px-1.5 py-1 text-sm transition-colors ${
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
