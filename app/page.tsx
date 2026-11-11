"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useLenis } from "lenis/react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import HobbiesSection from "@/components/hobbies-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";
import CVModal from "@/components/cv-modal";
import { FlickeringCatBackground } from "@/components/ui/flickering-cat-background";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isCvOpen, setIsCvOpen] = useState(false);
  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lenis = useLenis();

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (sectionId === "home") {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      if (lenis) {
        lenis.scrollTo(`#${sectionId}`, { duration: 1.2, offset: -20 });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [lenis]
  );

  const handleNavigate = useCallback(
    (id: string) => {
      isNavigatingRef.current = true;
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
      navTimeoutRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
      }, 1000);

      setActiveSection(id);

      // Keep single page URL strictly clean at '/' without hash or path changes
      if (typeof window !== "undefined") {
        if (window.location.pathname !== "/" || window.location.hash) {
          window.history.replaceState(null, "", "/");
        }
      }

      scrollToSection(id);
    },
    [scrollToSection]
  );

  // Clean any initial hash or path and keep URL at '/' without redirection
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash.replace(/^#/, "").toLowerCase();
    const pathname = window.location.pathname.replace(/^\//, "").toLowerCase();

    const knownSections = ["home", "work", "services", "experience", "skills", "contact", "hobbies", "faq"];

    const targetSection = hash || (knownSections.includes(pathname) ? pathname : "");

    // Immediately clean URL to '/' without any hash or subroute
    if (window.location.pathname !== "/" || window.location.hash) {
      window.history.replaceState(null, "", "/");
    }

    if (targetSection && targetSection !== "home") {
      const timer = setTimeout(() => {
        setActiveSection(targetSection);
        scrollToSection(targetSection);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [scrollToSection]);

// Scroll observer to update active section indicator without modifying URL on scroll
useEffect(() => {
  const navSections = ["home", "work", "services", "experience", "skills", "contact"];
  let rafId: number | null = null;
  let isTicking = false;

  const updateActiveSection = () => {
    if (isNavigatingRef.current) {
      isTicking = false;
      return;
    }

    const scrollY = window.scrollY;

    // Bottom of page detection
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
      setActiveSection("contact");
      isTicking = false;
      return;
    }

    // Top of page detection
    if (scrollY < 120) {
      setActiveSection("home");
      isTicking = false;
      return;
    }

    for (const sectionId of navSections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom > 100) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
    isTicking = false;
  };

  const handleScroll = () => {
    if (!isTicking) {
      isTicking = true;
      rafId = requestAnimationFrame(updateActiveSection);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  updateActiveSection();

  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (rafId) cancelAnimationFrame(rafId);
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
  };
}, []);

return (
  <div className="relative min-h-screen bg-[#FAFAF8] dark:bg-[#121211] text-[#141413] dark:text-[#EDEDEB] antialiased selection:bg-[#141413] selection:text-[#FAFAF8] dark:selection:bg-[#EDEDEB] dark:selection:text-[#121211] transition-colors duration-200">
    <FlickeringCatBackground />
    <div className="relative z-10 isolate mx-auto min-h-screen max-w-[712px] px-4 sm:px-6 md:px-8 pb-20 sm:pb-24 pt-3 sm:pt-8 md:pt-10">
      {/* Ephraim Duncan-styled Navbar with slow initial entrance */}
      <ScrollReveal duration={1.0} delay={0.05} yOffset={10}>
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      </ScrollReveal>

      {/* Main Content Area with Bidirectional Scroll Reveal and Slow Initial Hero Fade */}
      <main className="space-y-10 sm:space-y-14 md:space-y-16">
        <ScrollReveal slowInitial={true} duration={1.2} delay={0.12} yOffset={22}>
          <HeroSection onOpenCv={() => setIsCvOpen(true)} />
        </ScrollReveal>

        <ScrollReveal duration={0.9} delay={0.05} yOffset={22}>
          <ProjectsSection />
        </ScrollReveal>

        <ScrollReveal duration={0.9} yOffset={22}>
          <ServicesSection />
        </ScrollReveal>

        <ScrollReveal duration={0.9} yOffset={22}>
          <ExperienceSection />
        </ScrollReveal>

        <ScrollReveal duration={0.9} yOffset={22}>
          <SkillsSection />
        </ScrollReveal>

        <ScrollReveal duration={0.9} yOffset={22}>
          <HobbiesSection />
        </ScrollReveal>

        <ScrollReveal duration={0.9} yOffset={22}>
          <FAQSection />
        </ScrollReveal>

        <ScrollReveal duration={0.9} yOffset={22}>
          <ContactSection onOpenCv={() => setIsCvOpen(true)} />
        </ScrollReveal>
      </main>

      <ScrollReveal duration={0.8} yOffset={15} delay={0.05}>
        <Footer />
      </ScrollReveal>

      {/* CV / Resume Viewer & Download Modal */}
      <CVModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  </div>
);
}
