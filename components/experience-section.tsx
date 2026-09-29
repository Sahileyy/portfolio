"use client";

import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function ExperienceSection() {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="mt-12 pt-2 scroll-mt-24 space-y-10">
      {/* Experience */}
      <div>
        <div className="pb-2">
          <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
            Experience
          </h2>
        </div>

        <div className="divide-y divide-[#EAE8E2] dark:divide-[#242321]">
          {experience.map((item, index) => (
            <div key={index} className="py-4 first:pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base font-medium text-[#141413] dark:text-[#EDEDEB]">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[#666561] dark:text-[#8E8D88]">
                    {item.company} &middot; {item.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#84837E] dark:text-[#8E8D88] shrink-0">
                  {item.period}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5 pl-3 border-l-2 border-[#EAE8E2] dark:border-[#242321]">
                {item.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="text-sm leading-relaxed text-[#5E5D59] dark:text-[#A3A29D]"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="pb-2">
          <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
            Education
          </h2>
        </div>

        <div className="divide-y divide-[#EAE8E2] dark:divide-[#242321]">
          {education.map((item, index) => (
            <div
              key={index}
              className="py-3.5 first:pt-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
            >
              <div>
                <h3 className="text-base font-medium text-[#141413] dark:text-[#EDEDEB]">
                  {item.institution}
                </h3>
                <p className="text-sm text-[#5E5D59] dark:text-[#A3A29D] mt-0.5">
                  {item.degree}
                </p>
                {item.details && (
                  <p className="text-xs text-[#84837E] dark:text-[#8E8D88] mt-1 max-w-lg">
                    {item.details}
                  </p>
                )}
              </div>
              {item.period && (
                <span className="text-xs font-mono text-[#84837E] dark:text-[#8E8D88] shrink-0">
                  {item.period}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
