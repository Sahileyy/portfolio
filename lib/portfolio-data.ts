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
      title: "Storefront",
      tagline: "High-performance headless e-commerce platform you can deploy.",
      description:
        "Full-stack commerce engine featuring real-time inventory management, secure checkout with Stripe, dynamic server rendering, and optimized database queries.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      href: "https://github.com/Sahileyy",
      githubUrl: "https://github.com/Sahileyy",
      isExternal: true,
    },
    {
      title: "DevStream",
      tagline: "Real-time API monitoring, distributed request logs, and streaming metrics.",
      description:
        "Developer tool for tracking REST API latency, response metrics, and distributed request logs with WebSocket streaming and interactive charts.",
      tags: ["Node.js", "Express", "WebSocket", "MongoDB", "Tailwind CSS"],
      href: "https://github.com/Sahileyy",
      githubUrl: "https://github.com/Sahileyy",
      isExternal: true,
    },
    {
      title: "TaskFlow",
      tagline: "Minimalist collaborative workspace with Kanban boards and instant sync.",
      description:
        "Keyboard-first productivity suite supporting Kanban boards, markdown notes, real-time collaboration, and granular JWT-based permissions.",
      tags: ["React", "TypeScript", "Node.js", "Redis", "Cloudflare"],
      href: "https://github.com/Sahileyy",
      githubUrl: "https://github.com/Sahileyy",
      isExternal: true,
    },
    {
      title: "Cloud Vault",
      tagline: "Secure digital asset manager on AWS S3 with encrypted multi-part uploads.",
      description:
        "Fast media repository providing encrypted multi-part file uploads, instant thumbnail generation, and edge-cached distribution with Cloudflare CDN.",
      tags: ["AWS S3", "Express", "Next.js", "Nginx", "Sharp"],
      href: "https://github.com/Sahileyy",
      githubUrl: "https://github.com/Sahileyy",
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
        "Capturing stories through the lens — visual framing, cinematic composition, lighting, and creative post-production editing.",
    },
  ],

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
      items: ["React.js", "Next.js (App Router)", "React Native", "Tailwind CSS", "Framer Motion", "Figma"],
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
