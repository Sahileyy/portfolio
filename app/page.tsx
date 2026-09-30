"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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
import { FlickeringCatBackground } from "@/components/ui/flickering-cat-background";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const performScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    requestAnimationFrame(() => {
      performScroll();
    });
    setTimeout(performScroll, 60);
  }, []);

  const handleNavigate = useCallback(
    (id: string, href: string) => {
      isNavigatingRef.current = true;
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
      navTimeoutRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
      }, 900);

      setActiveSection(id);
      if (typeof window !== "undefined" && window.location.pathname !== href) {
        window.history.pushState(null, "", href);
      }

      scrollToSection(id);
    },
    [scrollToSection]
  );

  // Auto-scroll on initial load if path or hash is present, and strip '#'
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "").toLowerCase();
    const pathname = window.location.pathname.replace(/^\//, "").toLowerCase();

    const targetSection = hash || (pathname && pathname !== "home" ? pathname : "");

    if (targetSection) {
      const cleanPath = targetSection === "home" ? "/" : `/${targetSection}`;
      window.history.replaceState(null, "", cleanPath);
      setActiveSection(targetSection);

      const timer = setTimeout(() => {
        scrollToSection(targetSection);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [scrollToSection]);

  // Handle browser back/forward buttons and hashchange
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, "").toLowerCase();
      const targetId = path || "home";
      setActiveSection(targetId);
      scrollToSection(targetId);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, "").toLowerCase();
      if (hash) {
        const cleanPath = hash === "home" ? "/" : `/${hash}`;
        window.history.replaceState(null, "", cleanPath);
        setActiveSection(hash);
        scrollToSection(hash);
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [scrollToSection]);


  // Throttled scroll observer to update active section and sync clean URL
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
        if (window.location.pathname !== "/contact") {
          window.history.replaceState(null, "", "/contact");
        }
        isTicking = false;
        return;
      }

      // Top of page detection
      if (scrollY < 120) {
        setActiveSection("home");
        if (window.location.pathname !== "/") {
          window.history.replaceState(null, "", "/");
        }
        isTicking = false;
        return;
      }

      for (const sectionId of navSections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom > 100) {
            setActiveSection(sectionId);
            const targetPath = sectionId === "home" ? "/" : `/${sectionId}`;
            if (window.location.pathname !== targetPath) {
              window.history.replaceState(null, "", targetPath);
            }
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
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        </ScrollReveal>

        {/* Main Content Area with Bidirectional Scroll Reveal and Slow Initial Hero Fade */}
        <main className="space-y-10 sm:space-y-14 md:space-y-16">
          <ScrollReveal slowInitial={true} duration={1.2} delay={0.12} yOffset={22}>
            <HeroSection />
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
            <ContactSection />
          </ScrollReveal>
        </main>

        <ScrollReveal duration={0.8} yOffset={15} delay={0.05}>
          <Footer />
        </ScrollReveal>
      </div>
    </div>
  );
}
