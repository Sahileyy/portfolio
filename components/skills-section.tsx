"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="skills" className="mt-12 pt-2 scroll-mt-24 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between pb-1">
        <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
          Stack
        </h2>
        <span className="text-xs font-mono text-[#84837E] dark:text-[#8E8D88] hidden sm:inline">
          {skills.length} domains
        </span>
      </div>

      <div className="pt-3 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 sm:gap-y-6 text-center sm:text-left">
        {skills.map((category, index) => (
          <div
            key={index}
            className={`space-y-1.5 transition-all duration-200 ${
              index >= 2 && !showAll ? "hidden sm:block" : "block"
            }`}
          >
            <h3 className="text-xs sm:text-sm font-mono text-[#84837E] dark:text-[#8E8D88]">
              {category.title}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#5E5D59] dark:text-[#A3A29D]">
              {category.items.map((item, i) => (
                <span key={i}>
                  <span className="hover:text-[#141413] dark:hover:text-[#EDEDEB] transition-colors">
                    {item}
                  </span>
                  {i < category.items.length - 1 && (
                    <span className="text-[#D5D3CC] dark:text-[#383734] mx-1 sm:mx-1.5 select-none">
                      /
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      {/* Minimal mobile toggle */}
      {skills.length > 2 && (
        <div className="sm:hidden mt-3 pt-1 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] py-1 px-2.5 rounded-full border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/50 dark:bg-[#1B1A19]/50 transition-all active:scale-95"
          >
            <span>{showAll ? "− Show less stack" : `+ View ${skills.length - 2} more stack categories`}</span>
          </button>
        </div>
      )}
    </section>
  );
}
