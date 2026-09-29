"use client";

import { useState } from "react";
import { SketchChevron } from "./sketch-icons";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What technologies and stack do you specialize in?",
    answer:
      "I specialize in full-stack JavaScript and TypeScript ecosystems, primarily utilizing Next.js (App Router), React, and Tailwind CSS on the frontend, alongside Node.js, Express, and REST APIs on the backend. For databases, I work extensively with PostgreSQL and MongoDB, with deployment on AWS and Cloudflare.",
  },
  {
    question: "Do you take on freelance projects?",
    answer:
      "Yes, I take on select freelance projects for startups, founders, and businesses — ranging from custom web applications, SaaS MVPs, and dashboards to landing pages and API integrations.",
  },
  {
    question: "Can you handle both frontend and backend development?",
    answer:
      "Yes. I am experienced in end-to-end delivery: designing responsive, accessible user interfaces, structuring database schemas, writing performant API routes, implementing secure authentication, and configuring cloud deployments.",
  },
  {
    question: "How do we get started on a project?",
    answer:
      "The easiest way is to send me an email at sahilkrishnacb@gmail.com or reach out via LinkedIn with a brief description of your project scope, timeline, and goals. I usually reply within 24 hours to schedule an initial conversation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mt-12 pt-2 scroll-mt-24 text-center sm:text-left">
      <div className="pb-2">
        <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
          FAQ
        </h2>
      </div>

      <div className="divide-y divide-[#EAE8E2] dark:divide-[#242321] border-t border-[#EAE8E2] dark:border-[#242321]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="transition-colors duration-200">
              <h3>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between py-3.5 sm:py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded"
                >
                  <span
                    className={`text-sm sm:text-base font-medium pr-3 sm:pr-4 transition-colors flex-1 text-center sm:text-left ${
                      isOpen
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-[#141413] dark:text-[#EDEDEB] group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-200 text-[#84837E] dark:text-[#8E8D88] group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
                      isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                    }`}
                  >
                    <SketchChevron size={18} />
                  </span>
                </button>
              </h3>
              {isOpen && (
                <div className="pb-4 text-xs sm:text-sm leading-relaxed text-[#5E5D59] dark:text-[#A3A29D] text-center sm:text-left">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
