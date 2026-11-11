"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const pdfUrl = "/Sahil_Krishna_CB_Resume.pdf";

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col w-full max-w-4xl h-[92vh] sm:h-[88vh] bg-[#FAFAF8] dark:bg-[#161615] border border-[#EAE8E2] dark:border-[#282725] rounded-2xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Sahil Krishna CB — Curriculum Vitae"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#EAE8E2] dark:border-[#242321] bg-[#F5F4F0]/80 dark:bg-[#1B1A19]/80 backdrop-blur-xs shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="p-1.5 rounded-lg bg-[#EAE8E2]/60 dark:bg-[#282725]/60 text-[#141413] dark:text-[#EDEDEB]">
                  <FileText size={16} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-medium text-[#141413] dark:text-[#EDEDEB] truncate">
                    Sahil Krishna CB — CV
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#84837E] dark:text-[#8E8D88] truncate">
                    Full-Stack Developer &amp; Software Engineer
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download="Sahil_Krishna_CB_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#141413] dark:bg-[#EDEDEB] text-[#FAFAF8] dark:text-[#121211] hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
                >
                  <Download size={13} />
                  <span className="hidden xs:inline sm:inline">Download PDF</span>
                  <span className="xs:hidden sm:hidden">PDF</span>
                </a>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/60 dark:bg-[#1B1A19]/60 text-[#141413] dark:text-[#EDEDEB] hover:bg-[#EAE8E2] dark:hover:bg-[#242321] transition-all cursor-pointer"
                  title="Open in new tab"
                >
                  <ExternalLink size={13} />
                  <span>Open Tab</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close CV viewer"
                  className="p-1.5 rounded-full hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] transition-colors cursor-pointer"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Document Viewer */}
            <div className="relative flex-1 w-full bg-[#EAE8E2]/30 dark:bg-[#0E0E0D] overflow-hidden">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Sahil Krishna CB Resume PDF"
                className="w-full h-full border-0"
              />
            </div>

            {/* Footer Note */}
            <div className="px-4 sm:px-6 py-2 border-t border-[#EAE8E2] dark:border-[#242321] bg-[#F5F4F0]/60 dark:bg-[#1B1A19]/60 flex items-center justify-between text-[11px] text-[#84837E] dark:text-[#8E8D88]">
              <span>PDF format &middot; 1 page</span>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:sahilkrishnacb@gmail.com"
                  className="hover:text-[#141413] dark:hover:text-[#EDEDEB] underline underline-offset-2 transition-colors"
                >
                  sahilkrishnacb@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

