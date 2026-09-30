"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const sections = ["home", "work", "services", "experience", "skills", "hobbies", "faq", "contact"];
    let rafId: number | null = null;
    let isTicking = false;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const offset = 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - offset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection((prev) => (prev !== sectionId ? sectionId : prev));
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
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAFAF8] dark:bg-[#121211] text-[#141413] dark:text-[#EDEDEB] antialiased selection:bg-[#141413] selection:text-[#FAFAF8] dark:selection:bg-[#EDEDEB] dark:selection:text-[#121211] transition-colors duration-200">
      <FlickeringCatBackground />
      <div className="relative z-10 isolate mx-auto min-h-screen max-w-[712px] px-4 sm:px-6 md:px-8 pb-20 sm:pb-24 pt-3 sm:pt-8 md:pt-10">
        {/* Ephraim Duncan-styled Navbar with slow initial entrance */}
        <ScrollReveal duration={1.0} delay={0.05} yOffset={10}>
          <Navbar activeSection={activeSection} />
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
