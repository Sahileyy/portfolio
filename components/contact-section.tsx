"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="mt-12 pt-2 scroll-mt-24" aria-label="Contact and Inquiry">
      <h2 className="text-base font-medium text-[#141413] dark:text-[#EDEDEB]">
        Have an idea worth building?
      </h2>
      <p className="mt-3 text-base text-[#5E5D59] dark:text-[#A3A29D] leading-relaxed">
        Have a project in mind, something that needs a better direction, or simply an idea you&#39;d like
        to explore? Tell me a little about it and let&#39;s see what we can make together.
      </p>

      {/* Social Media & Contact Buttons */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <a
          href="mailto:sahilkrishnacb@gmail.com"
          suppressHydrationWarning
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#141413] dark:bg-[#EDEDEB] text-[#FAFAF8] dark:text-[#121211] hover:opacity-90 transition-opacity"
        >
          <Mail size={13} />
          <span>Start a conversation</span>
        </a>
        <a
          href="https://github.com/Sahileyy"
          target="_blank"
          rel="noopener noreferrer"
          suppressHydrationWarning
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/60 dark:bg-[#1B1A19]/60 text-[#141413] dark:text-[#EDEDEB] hover:bg-[#EAE8E2] dark:hover:bg-[#242321] hover:border-[#D5D3CC] dark:hover:border-[#383734] transition-all"
        >
          <Github size={13} className="shrink-0 text-[#84837E] dark:text-[#8E8D88]" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-krishna-cb"
          target="_blank"
          rel="noopener noreferrer"
          suppressHydrationWarning
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/60 dark:bg-[#1B1A19]/60 text-[#141413] dark:text-[#EDEDEB] hover:bg-[#EAE8E2] dark:hover:bg-[#242321] hover:border-[#D5D3CC] dark:hover:border-[#383734] transition-all"
        >
          <Linkedin size={13} className="shrink-0 text-[#84837E] dark:text-[#8E8D88]" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/sahilkrishna.cb?igsh=MWpsdXR1MGJ2N2VqZw=="
          target="_blank"
          rel="noopener noreferrer"
          suppressHydrationWarning
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/60 dark:bg-[#1B1A19]/60 text-[#141413] dark:text-[#EDEDEB] hover:bg-[#EAE8E2] dark:hover:bg-[#242321] hover:border-[#D5D3CC] dark:hover:border-[#383734] transition-all"
        >
          <Instagram size={13} className="shrink-0 text-[#84837E] dark:text-[#8E8D88]" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
