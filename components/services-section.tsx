"use client";

const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description: "End-to-end applications built with Next.js, React, Node.js, and TypeScript with clean architecture.",
  },
  {
    number: "02",
    title: "App Development (Android & iOS)",
    description: "Cross-platform mobile applications for Android and iOS built with React Native, delivering native performance and fluid UX.",
  },
  {
    number: "03",
    title: "Backend & RESTful APIs",
    description: "Scalable API services, microservices, database schemas, and secure authentication systems.",
  },
  {
    number: "04",
    title: "Database Engineering",
    description: "Robust data modeling, index optimization, and reliable storage with PostgreSQL, MongoDB, and MySQL.",
  },
  {
    number: "05",
    title: "Cloud & DevOps Infrastructure",
    description: "Fast, resilient deployment pipelines across AWS S3/EC2, Cloudflare CDN, Nginx, and modern edge networks.",
  },
];

import { useState } from "react";

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="mt-12 pt-2 scroll-mt-24 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between pb-1">
        <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
          Services
        </h2>
        <span className="text-xs font-mono text-[#84837E] dark:text-[#8E8D88] hidden sm:inline">
          {services.length} offerings
        </span>
      </div>

      <div className="pt-3 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 sm:gap-y-7 text-center sm:text-left">
        {services.map((service, index) => (
          <div
            key={service.number}
            className={`group block py-1 transition-all duration-200 hover:translate-x-0.5 ${
              index >= 3 && !showAll ? "hidden sm:block" : "block"
            }`}
          >
            <span className="block text-xs font-mono text-[#84837E] dark:text-[#8E8D88] mb-1 transition-colors group-hover:text-[#141413] dark:group-hover:text-[#EDEDEB]">
              {service.number}
            </span>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
              <h3 className="text-[15px] sm:text-base font-medium text-[#141413] dark:text-[#EDEDEB] tracking-tight group-hover:underline underline-offset-2 transition-colors">
                {service.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5E5D59] dark:text-[#A3A29D] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Minimal mobile toggle */}
      {services.length > 3 && (
        <div className="sm:hidden mt-4 pt-1 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] py-1 px-2.5 rounded-full border border-[#EAE8E2] dark:border-[#242321] bg-[#F3F2EE]/50 dark:bg-[#1B1A19]/50 transition-all active:scale-95"
          >
            <span>{showAll ? "− Show fewer services" : `+ View ${services.length - 3} more services`}</span>
          </button>
        </div>
      )}
    </section>
  );
}
