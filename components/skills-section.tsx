"use client";

import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="mt-12 pt-2 scroll-mt-24">
      <div className="pb-2">
        <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
          Stack
        </h2>
      </div>

      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {skills.map((category, index) => (
          <div key={index} className="space-y-1.5">
            <h3 className="text-sm font-mono text-[#84837E] dark:text-[#8E8D88]">
              {category.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#5E5D59] dark:text-[#A3A29D]">
              {category.items.map((item, i) => (
                <span key={i}>
                  <span className="hover:text-[#141413] dark:hover:text-[#EDEDEB] transition-colors">
                    {item}
                  </span>
                  {i < category.items.length - 1 && (
                    <span className="text-[#D5D3CC] dark:text-[#383734] mx-1.5 select-none">
                      /
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
