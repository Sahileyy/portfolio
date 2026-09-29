"use client";

import { SketchCamera } from "./sketch-icons";

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="mt-12 pt-2 scroll-mt-24">
      <div className="pb-2">
        <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
          Hobbies
        </h2>
      </div>

      <div className="pt-2">
        <div className="py-2 flex items-start gap-3">
          <div className="mt-0.5 text-[#141413] dark:text-[#EDEDEB] shrink-0">
            <SketchCamera size={18} className="text-rose-500 dark:text-rose-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-medium text-[#141413] dark:text-[#EDEDEB]">
              Videography
            </h3>
            <p className="text-sm leading-relaxed text-[#5E5D59] dark:text-[#A3A29D]">
              Capturing stories through the lens — visual storytelling, cinematic framing, color grading, and creative video editing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
