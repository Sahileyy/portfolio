export interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  githubUrl?: string;
  isExternal?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface HobbyItem {
  title: string;
  description: string;
  instagramUrl?: string;
  instagramHandle?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sahil Krishna CB",
    role: "Full-Stack Developer",
    location: "Kerala, India",
    availability: "Available for freelance & full-time roles",
    email: "sahilkrishnacb@gmail.com",
    bioIntro:
      "I'm a full-stack developer building clean, reliable, and high-performance web applications with thoughtful details. Focused on modern web architecture with TypeScript, Next.js, and scalable Node.js services.",
    bioExtended:
      "With over 2 years of hands-on coding and production development experience, I take ideas from concept to deployment. I enjoy tackling end-to-end challenges — from crafting responsive, accessible user interfaces to structuring robust database schemas and deploying on cloud infrastructure.",
  },

  projects: [
    {
      title: "maskanbuilder",
      tagline: "Dynamic CMS-connected platform for Kerala's leading construction firm.",
      description:
        "Modern architectural and construction web application built with Next.js and integrated with a dynamic CMS for real-time project showcasing and portfolio management.",
      tags: ["Next.js", "Dynamic CMS", "TypeScript", "Tailwind CSS", "Vercel"],
      href: "https://www.maskanbuilder.com/",
      githubUrl: "",
      isExternal: true,
    },
    {
      title: "gulfsouq",
      tagline: "Full-featured e-commerce storefront powered by Shopify platform.",
      description:
        "High-performance e-commerce platform for authentic imported goods and confectionery with custom Shopify Liquid architecture, responsive checkout, and catalog sync.",
      tags: ["Shopify", "E-Commerce", "Liquid", "Tailwind CSS", "Storefront"],
      href: "https://www.gulfsouq.in/",
      githubUrl: "",
      isExternal: true,
    },
    {
      title: "components-ui",
      tagline: "Accessible and customizable UI blocks and components registry for Next.js.",
      description:
        "Open-source registry of accessible, copy-paste React components and layout blocks built for Next.js and compatible with the shadcn CLI ecosystem.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Bun"],
      href: "https://github.com/Sahileyy/components-ui",
      githubUrl: "https://github.com/Sahileyy/components-ui",
      isExternal: true,
    },
    {
      title: "car-cleaning-service",
      tagline: "Multi-app automotive care platform with mobile apps, web admin, and unified API.",
      description:
        "Monorepo architecture powering an end-to-end doorstep automotive care platform, featuring customer mobile apps, administrative operations dashboard, accountant portal, and unified REST backend.",
      tags: ["TypeScript", "React Native", "Next.js", "Node.js", "Express", "Monorepo"],
      href: "https://github.com/devxtra-community/car-cleaning-service",
      githubUrl: "https://github.com/devxtra-community/car-cleaning-service",
      isExternal: true,
    },
  ] as Project[],

  experience: [
    {
      role: "Full-Stack Developer",
      company: "CK Creatives",
      location: "Kerala, India",
      period: "Jun 2025 — Present",
      highlights: [
        "Build and maintain full-stack web applications using modern frontend and backend technologies.",
        "Develop responsive UIs and scalable REST APIs.",
        "Design database structures and optimize queries for performance.",
        "Deploy and maintain production applications.",
      ],
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Devxtra",
      location: "Kerala, India",
      period: "Nov 2024 — May 2025",
      highlights: [
        "Gained deep problem-solving and analytical skills through consistent practice in data structures and algorithmic efficiency.",
        "Engineered full-stack web applications with disciplined error handling, clean architecture, and responsive interfaces.",
        "Prioritized real-world production development and reliable RESTful API services.",
        "Adopted modern developer tooling, version control workflows, and frameworks.",
      ],
    },
  ] as ExperienceItem[],

  hobbies: [
    {
      title: "Videography",
      description:
        "Capturing stories through the lens — visual storytelling, cinematic framing, color grading, and creative video editing.",
      instagramUrl: "https://www.instagram.com/sahilnte.profile/",
      instagramHandle: "sahilnte.profile",
    },
  ] as HobbyItem[],

  education: [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "University of Calicut",
      period: "2022 — 2025",
      details:
        "Core coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering.",
    },
  ] as EducationItem[],

  skills: [
    {
      title: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "C++", "HTML5 & CSS3", "SQL"],
    },
    {
      title: "Frontend",
      items: ["React.js", "Next.js (App Router)", "React Native", "Shopify", "Tailwind CSS", "Framer Motion", "Figma"],
    },
    {
      title: "Backend & APIs",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "WebSockets"],
    },
    {
      title: "Databases & Cloud",
      items: ["PostgreSQL", "MongoDB", "MySQL", "AWS (EC2, S3)", "Cloudflare", "Nginx"],
    },
    {
      title: "Dev Tools",
      items: ["Git & GitHub", "Postman", "Linux", "VS Code", "Vercel"],
    },
  ] as SkillCategory[],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Sahileyy",
      label: "collaborate on github",
      username: "@Sahileyy",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sahil-krishna-cb",
      label: "connect on linkedin",
      username: "sahil-krishna-cb",
    },
    {
      name: "Email",
      url: "mailto:sahilkrishnacb@gmail.com",
      label: "send an email",
      username: "sahilkrishnacb@gmail.com",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sahilkrishna.cb?igsh=MWpsdXR1MGJ2N2VqZw==",
      label: "follow on instagram",
      username: "@sahilkrishna.cb",
    },
  ],
};
