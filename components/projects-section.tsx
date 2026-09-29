"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="work" className="mt-10 scroll-mt-24 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between pb-1">
        <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
          Projects
        </h2>
        <span className="text-xs font-mono text-[#84837E] dark:text-[#8E8D88] hidden sm:inline">
          {projects.length} featured
        </span>
      </div>

      <ul role="list" className="mt-3 flex flex-col gap-3.5">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`transition-all duration-200 ${
              index >= 2 && !showAll ? "hidden sm:block" : "block"
            }`}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full min-w-0 flex-col sm:flex-row items-center sm:items-baseline justify-center sm:justify-start gap-1 sm:gap-3 py-0.5 text-center sm:text-left"
            >
              <div className="flex min-w-0 items-center justify-center sm:justify-start gap-1 shrink-0">
                <span className="text-[15px] sm:text-base font-medium text-[#141413] dark:text-[#EDEDEB] group-hover:underline underline-offset-2">
                  {project.title}
                </span>
                <span className="text-[#84837E] dark:text-[#8E8D88] group-hover:text-[#141413] dark:group-hover:text-[#EDEDEB] transition-colors">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M3.65 11.35C3.45 11.16 3.45 10.84 3.65 10.65L10.29 4L6 4C5.72 4 5.5 3.78 5.5 3.5C5.5 3.22 5.72 3 6 3L11.5 3C11.63 3 11.76 3.05 11.85 3.15C11.95 3.24 12 3.37 12 3.5L12 9C12 9.28 11.78 9.5 11.5 9.5C11.22 9.5 11 9.28 11 9V4.71L4.35 11.35C4.16 11.55 3.84 11.55 3.65 11.35Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <span className="text-pretty text-xs sm:text-sm text-[#84837E] dark:text-[#8E8D88] sm:truncate sm:flex-1 leading-relaxed text-center sm:text-left">
                {project.tagline}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Minimal mobile toggle */}
      {projects.length > 2 && (
        <div className="sm:hidden mt-2 pt-1 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] py-1 px-2.5 rounded-full border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/50 dark:bg-[#1B1A19]/50 transition-all active:scale-95"
          >
            <span>{showAll ? "− Show fewer projects" : `+ View ${projects.length - 2} more projects`}</span>
          </button>
        </div>
      )}

      {/* Signature squiggly wave divider from the design */}
      <svg
        aria-hidden="true"
        width="80"
        height="16"
        viewBox="0 0 432 38"
        fill="none"
        className="mt-9 mb-2 text-[#141413] dark:text-[#EDEDEB] mx-auto sm:mx-0"
      >
        <path
          d="M402.74 37.59C390.19 37.59 374.77 21.31 374.11 20.62C367.07 12.43 359.94 5.15 349.46 5.15C337.98 5.15 324.48 20.41 324.34 20.56L323.17 21.83C315.73 29.93 308.7 37.59 296.19 37.59C283.64 37.59 268.21 21.31 267.56 20.62C260.51 12.43 253.39 5.15 242.91 5.15C231.42 5.15 217.93 20.41 217.78 20.56L216.68 21.72C208.19 30.58 201.48 37.59 189.64 37.59C177.09 37.59 161.66 21.31 161.01 20.62C153.96 12.43 146.83 5.15 136.36 5.15C124.87 5.15 111.38 20.4 111.23 20.56L110.05 21.84C102.62 29.94 95.59 37.58 83.08 37.58C70.53 37.58 55.1 21.31 54.45 20.62C47.4 12.43 40.27 5.14 29.8 5.14C19.37 5.14 9.87 10.87 4.99 20.1C4.38 21.25 2.94 21.7 1.78 21.09C0.63 20.47 0.19 19.04 0.8 17.88C6.5 7.11 17.61 0.4 29.8 0.4C42.27 0.4 50.55 8.83 57.96 17.45C61.94 21.68 74.36 32.84 83.07 32.84C93.51 32.84 99.26 26.57 106.56 18.63L107.7 17.39C108.27 16.74 122.73 0.4 136.35 0.4C148.82 0.4 157.1 8.83 164.52 17.45C168.49 21.68 180.91 32.84 189.63 32.84C199.45 32.84 204.94 27.11 213.26 18.44L214.29 17.35C214.83 16.73 229.29 0.4 242.91 0.4C255.39 0.4 263.67 8.82 271.08 17.44C275.05 21.67 287.47 32.84 296.19 32.84C306.62 32.84 312.39 26.56 319.69 18.61L320.82 17.38C321.39 16.73 335.85 0.39 349.46 0.39C361.94 0.39 370.23 8.82 377.63 17.44C381.61 21.66 394.02 32.83 402.74 32.83C412.74 32.83 422.06 27.44 427.06 18.76C427.72 17.63 429.16 17.23 430.3 17.89C431.44 18.54 431.82 19.99 431.17 21.13C425.32 31.29 414.43 37.59 402.74 37.59L402.74 37.59Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
