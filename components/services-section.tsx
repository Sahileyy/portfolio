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

export default function ServicesSection() {
  return (
    <section id="services" className="mt-12 pt-2 scroll-mt-24">
      <div className="pb-2">
        <h2 className="text-sm text-[#84837E] dark:text-[#8E8D88] text-balance font-normal">
          Services
        </h2>
      </div>

      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
        {services.map((service) => (
          <div
            key={service.number}
            className="group block py-1 transition-transform duration-150 ease-out hover:translate-x-0.5"
          >
            <span className="block text-xs font-mono text-[#84837E] dark:text-[#8E8D88] mb-1.5 transition-colors group-hover:text-[#141413] dark:group-hover:text-[#EDEDEB]">
              {service.number}
            </span>
            <div className="flex items-center gap-1.5 mb-1">
              <h3 className="text-base font-medium text-[#141413] dark:text-[#EDEDEB] tracking-tight group-hover:underline underline-offset-2 transition-colors">
                {service.title}
              </h3>
            </div>
            <p className="text-sm text-[#5E5D59] dark:text-[#A3A29D] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
