"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/ui/loader-11";

interface PreloaderProps {
  minDuration?: number;
}

export default function Preloader({ minDuration = 1000 }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Allow page to mount, then cleanly fade out preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="app-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAF8] dark:bg-[#121211] pointer-events-auto"
          aria-label="Loading portfolio"
          role="status"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="scale-90 sm:scale-100 md:scale-110"
            >
              <Loader size={18} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

