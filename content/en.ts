import type { SiteContent } from "./types";

export const en: SiteContent = {
  nav: {
    items: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    languageToggle: "PT",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Pedro Hilário",
    title: "Software Engineer",
    description:
      "I build modern, scalable web applications with PHP, Laravel, Node.js, React, and Next.js. Focused on delivering products with quality, performance, and seamless user experience.",
    cta: {
      projects: "View Projects",
      contact: "Get in Touch",
    },
  },
  about: {
    sectionTitle: "About",
    heading: "Turning ideas into digital products",
    paragraphs: [
      "I'm a full-stack software engineer with solid experience building web applications that scale. My core stack combines the power of the PHP/Laravel ecosystem on the backend with the flexibility of React/Next.js on the frontend.",
      "I work with Filament to build robust admin panels, NestJS for microservices, and have strong experience in software architecture, DX, and continuous delivery.",
      "My focus is crafting solutions that combine quality engineering with real business impact.",
    ],
    highlights: [
      { label: "Years of experience", value: "5+" },
      { label: "Projects delivered", value: "30+" },
      { label: "Technologies mastered", value: "15+" },
    ],
  },
  skills: {
    sectionTitle: "Skills",
    heading: "Stack & Technologies",
    groups: [
      {
        title: "Backend",
        description: "Robust and scalable APIs",
        skills: [
          { name: "PHP" },
          { name: "Laravel" },
          { name: "Filament" },
          { name: "Node.js" },
          { name: "NestJS" },
          { name: "REST APIs" },
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "Redis" },
        ],
      },
      {
        title: "Frontend",
        description: "Modern and performant interfaces",
        skills: [
          { name: "React" },
          { name: "Next.js" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "HTML/CSS" },
          { name: "GSAP" },
        ],
      },
      {
        title: "DevOps & Tooling",
        description: "Infrastructure and workflow",
        skills: [
          { name: "Docker" },
          { name: "Git" },
          { name: "CI/CD" },
          { name: "Linux" },
          { name: "Nginx" },
          { name: "Vercel" },
        ],
      },
    ],
  },
  experience: {
    sectionTitle: "Experience",
    heading: "Professional Journey",
    items: [
      {
        role: "Full-Stack Software Engineer",
        company: "Current Company",
        period: "2023 — Present",
        description:
          "Building complete web applications using Laravel and React/Next.js. Responsible for system architecture, critical feature implementation, and mentoring junior developers.",
        stack: ["Laravel", "React", "Next.js", "PostgreSQL", "Docker"],
      },
      {
        role: "Backend Developer",
        company: "Previous Company",
        period: "2021 — 2023",
        description:
          "Building RESTful APIs with Laravel and Node.js. Implementing admin panels with Filament and integrating with third-party services.",
        stack: ["PHP", "Laravel", "Filament", "Node.js", "MySQL"],
      },
      {
        role: "Web Developer",
        company: "Early Career",
        period: "2019 — 2021",
        description:
          "Developing websites and web systems with PHP and JavaScript. First projects with React and accelerated learning in software architecture.",
        stack: ["PHP", "JavaScript", "React", "MySQL", "HTML/CSS"],
      },
    ],
  },
  projects: {
    sectionTitle: "Projects",
    heading: "Selected Work",
    items: [
      {
        slug: "saas-platform",
        title: "SaaS Platform",
        description:
          "Multi-tenant SaaS system with full admin panel, user management, billing, and analytics dashboards.",
        stack: ["Laravel", "Filament", "React", "PostgreSQL", "Stripe"],
      },
      {
        slug: "ecommerce-api",
        title: "E-commerce API",
        description:
          "High-performance RESTful API for e-commerce with advanced caching, queue processing, and multi-gateway payment integration.",
        stack: ["NestJS", "PostgreSQL", "Redis", "Docker"],
      },
      {
        slug: "analytics-dashboard",
        title: "Analytics Dashboard",
        description:
          "Real-time dashboard with complex data visualization, advanced filters, and report exports.",
        stack: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
      },
    ],
  },
  contact: {
    sectionTitle: "Contact",
    heading: "Let's build something together?",
    description:
      "I'm always open to new challenges and opportunities. If you have a project in mind or just want to chat, get in touch.",
    email: "flygames1214@gmail.com",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/pedrohilario",
        icon: "github",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/pedrohilario",
        icon: "linkedin",
      },
    ],
  },
};
