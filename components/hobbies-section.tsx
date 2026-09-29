"use client";

import { SketchCamera } from "./sketch-icons";
import { Instagram } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function HobbiesSection() {
  const { hobbies } = PORTFOLIO_DATA;

  return (
    <section id="hobbies" className="mt-12 pt-2 scroll-mt-24">
      <div className="pb-2">
        <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
          Hobbies
        </h2>
      </div>

      <div className="pt-2">
        {hobbies.map((hobby, index) => (
          <div key={index} className="py-2 flex items-start gap-3">
            <div className="mt-0.5 text-[#141413] dark:text-[#EDEDEB] shrink-0">
              <SketchCamera size={18} className="text-rose-500 dark:text-rose-400" />
            </div>
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-medium text-[#141413] dark:text-[#EDEDEB]">
                  {hobby.title}
                </h3>
                {hobby.instagramUrl && (
                  <a
                    href={hobby.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    suppressHydrationWarning
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/60 dark:bg-[#1B1A19]/60 text-[#141413] dark:text-[#EDEDEB] hover:bg-[#EAE8E2] dark:hover:bg-[#242321] hover:border-[#D5D3CC] dark:hover:border-[#383734] transition-all group"
                  >
                    <Instagram size={12} className="shrink-0 text-[#84837E] dark:text-[#8E8D88] group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors" />
                    <span>{hobby.instagramHandle || "sahilnte.profile"}</span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="text-[#84837E] dark:text-[#8E8D88] group-hover:text-[#141413] dark:group-hover:text-[#EDEDEB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        d="M3.65 11.35C3.45 11.16 3.45 10.84 3.65 10.65L10.29 4L6 4C5.72 4 5.5 3.78 5.5 3.5C5.5 3.22 5.72 3 6 3L11.5 3C11.63 3 11.76 3.05 11.85 3.15C11.95 3.24 12 3.37 12 3.5L12 9C12 9.28 11.78 9.5 11.5 9.5C11.22 9.5 11 9.28 11 9V4.71L4.35 11.35C4.16 11.55 3.84 11.55 3.65 11.35Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-sm leading-relaxed text-[#5E5D59] dark:text-[#A3A29D]">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
