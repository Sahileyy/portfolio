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

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = ["home", "work", "services", "experience", "skills", "hobbies", "faq", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - offset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#121211] text-[#141413] dark:text-[#EDEDEB] antialiased selection:bg-[#141413] selection:text-[#FAFAF8] dark:selection:bg-[#EDEDEB] dark:selection:text-[#121211] transition-colors duration-200">
      <div className="isolate mx-auto min-h-screen max-w-[712px] px-4 sm:px-6 pb-20 pt-6 md:pt-10">
        {/* Ephraim Duncan-styled Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Area */}
        <main className="space-y-12">
          <HeroSection />
          <ProjectsSection />
          <ServicesSection />
          <ExperienceSection />
          <SkillsSection />
          <HobbiesSection />
          <FAQSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
