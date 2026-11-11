"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Send, FileText, Linkedin, Github, MessageSquare } from "lucide-react";
import { useLenis } from "lenis/react";

interface FloatingChatbotProps {
  onOpenCv?: () => void;
}

export default function FloatingChatbot({ onOpenCv }: FloatingChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const lenis = useLenis();

  // Show greeting bubble after 1.8 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowGreeting(true);
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setShowGreeting(false);
    setHasInteracted(true);
  };

  const handleScrollToContact = () => {
    setIsOpen(false);
    if (lenis) {
      lenis.scrollTo("#contact", { duration: 1.2, offset: -20 });
    } else {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleOpenCvClick = () => {
    setIsOpen(false);
    if (onOpenCv) {
      onOpenCv();
    }
  };

  return (
    <aside
      aria-label="AI Assistant"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none flex flex-col items-end"
    >
      {/* Chat Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-[340px] bg-[#FAFAF8] dark:bg-[#181816] border border-[#EAE8E2] dark:border-[#282725] rounded-2xl shadow-2xl overflow-hidden text-[#141413] dark:text-[#EDEDEB]"
            role="dialog"
            aria-modal="true"
            aria-label="Chat with Sahil's AI assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F4F3EE]/80 dark:bg-[#20201D]/80 border-b border-[#EAE8E2] dark:border-[#282725] backdrop-blur-xs">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-200/50 dark:bg-neutral-800/50 flex items-center justify-center shrink-0">
                  <video
                    src="/robot.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-medium">Sahil&apos;s Assistant</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <p className="text-[10px] text-[#84837E] dark:text-[#8E8D88]">
                    Available for freelance &amp; roles
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="p-1 rounded-full text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Conversation Area */}
            <div className="p-3.5 space-y-3 max-h-[360px] overflow-y-auto">
              {/* Bot Greeting Bubble */}
              <div className="flex items-start gap-2">
                <div className="p-2.5 rounded-2xl rounded-tl-xs bg-[#F4F3EE] dark:bg-[#22211E] text-xs leading-relaxed text-[#41403D] dark:text-[#C5C4BF]">
                  Hey there! 👋 I&apos;m Sahil&apos;s assistant. How can I help you today?
                </div>
              </div>

              {/* Quick Actions List */}
              <div className="pt-1 flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-[#84837E] dark:text-[#8E8D88] uppercase tracking-wider px-1">
                  Quick options
                </span>

                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-left bg-neutral-100 hover:bg-neutral-200/70 dark:bg-[#242320] dark:hover:bg-[#2C2B27] transition-colors cursor-pointer"
                >
                  <MessageSquare size={13} className="text-blue-500 shrink-0" />
                  <span>Start a project or inquiry</span>
                </button>

                <a
                  href="mailto:sahilkrishnacb@gmail.com"
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-left bg-neutral-100 hover:bg-neutral-200/70 dark:bg-[#242320] dark:hover:bg-[#2C2B27] transition-colors cursor-pointer"
                >
                  <Mail size={13} className="text-emerald-500 shrink-0" />
                  <span>Send an email directly</span>
                </a>

                {onOpenCv && (
                  <button
                    type="button"
                    onClick={handleOpenCvClick}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-left bg-neutral-100 hover:bg-neutral-200/70 dark:bg-[#242320] dark:hover:bg-[#2C2B27] transition-colors cursor-pointer"
                  >
                    <FileText size={13} className="text-amber-500 shrink-0" />
                    <span>View &amp; Download CV</span>
                  </button>
                )}

                <div className="pt-1 flex items-center gap-1.5">
                  <a
                    href="https://www.linkedin.com/in/sahil-krishna-cb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg text-[11px] font-medium border border-[#EAE8E2] dark:border-[#282725] bg-[#F4F3EE]/50 dark:bg-[#20201D]/50 hover:bg-neutral-200/60 dark:hover:bg-[#2C2B27] transition-colors"
                  >
                    <Linkedin size={12} className="text-[#84837E] dark:text-[#8E8D88]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Sahileyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg text-[11px] font-medium border border-[#EAE8E2] dark:border-[#282725] bg-[#F4F3EE]/50 dark:bg-[#20201D]/50 hover:bg-neutral-200/60 dark:hover:bg-[#2C2B27] transition-colors"
                  >
                    <Github size={12} className="text-[#84837E] dark:text-[#8E8D88]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Email Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const input = form.elements.namedItem("message") as HTMLInputElement;
                if (input && input.value.trim()) {
                  window.location.href = `mailto:sahilkrishnacb@gmail.com?subject=Portfolio%20Inquiry&body=${encodeURIComponent(
                    input.value
                  )}`;
                  input.value = "";
                  setIsOpen(false);
                }
              }}
              className="p-2 border-t border-[#EAE8E2] dark:border-[#282725] bg-[#F4F3EE]/40 dark:bg-[#20201D]/40 flex items-center gap-1.5"
            >
              <input
                type="text"
                name="message"
                placeholder="Type a message to Sahil..."
                className="flex-1 px-3 py-1.5 rounded-full text-xs bg-white dark:bg-[#121211] border border-[#EAE8E2] dark:border-[#282725] focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="p-1.5 rounded-full bg-[#141413] dark:bg-[#EDEDEB] text-[#FAFAF8] dark:text-[#121211] hover:opacity-90 transition-opacity cursor-pointer shrink-0"
              >
                <Send size={12} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Greeting Bubble (when closed) */}
      <AnimatePresence>
        {!isOpen && showGreeting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.2 }}
            className="mb-2 mr-1 relative max-w-[200px] sm:max-w-[220px]"
          >
            <div
              onClick={handleToggle}
              className="group flex items-center gap-2 px-3 py-2 rounded-2xl rounded-br-xs bg-[#141413] text-[#FAFAF8] dark:bg-[#EDEDEB] dark:text-[#121211] shadow-xl text-xs font-medium cursor-pointer hover:scale-102 transition-transform"
            >
              <span className="truncate">Need a dev? Let&apos;s talk! 👋</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGreeting(false);
                  setHasInteracted(true);
                }}
                aria-label="Dismiss greeting"
                className="opacity-60 hover:opacity-100 transition-opacity ml-auto"
              >
                <X size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Robot Video Button */}
      <motion.button
        type="button"
        onClick={handleToggle}
        aria-label="Open assistant chat"
        aria-expanded={isOpen}
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3.2,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center cursor-pointer focus:outline-none"
      >
        {/* Transparent WebM Robot Video */}
        <video
          src="/robot.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] filter"
        />

        {/* Online Status Green Indicator */}
        <span
          className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 flex h-3 w-3 sm:h-3.5 sm:w-3.5 pointer-events-none"
          title="Online"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-500 border-2 border-[#FAFAF8] dark:border-[#121211]"></span>
        </span>
      </motion.button>
    </aside>
  );
}
