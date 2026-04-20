import type { SiteContent } from "./types";

export const pt: SiteContent = {
  nav: {
    items: [
      { label: "Sobre", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experiência", href: "#experience" },
      { label: "Projetos", href: "#projects" },
      { label: "Contato", href: "#contact" },
    ],
    languageToggle: "EN",
  },
  hero: {
    greeting: "Olá, eu sou",
    name: "Pedro Hilário",
    title: "Engenheiro de Software",
    description:
      "Construo aplicações web modernas e escaláveis com PHP, Laravel, Node.js, React e Next.js. Focado em entregar produtos com qualidade, performance e experiência de usuário impecável.",
    cta: {
      projects: "Ver Projetos",
      contact: "Fale Comigo",
    },
  },
  about: {
    sectionTitle: "Sobre",
    heading: "Transformando ideias em produtos digitais",
    paragraphs: [
      "Sou engenheiro de software full-stack com experiência sólida na construção de aplicações web que escalam. Minha stack principal combina o poder do ecossistema PHP/Laravel no backend com a flexibilidade do React/Next.js no frontend.",
      "Trabalho com Filament para criar painéis administrativos robustos, NestJS para microsserviços, e tenho forte experiência em arquitetura de software, DX e entrega contínua.",
      "Meu foco é criar soluções que unem engenharia de qualidade com impacto real no negócio.",
    ],
    highlights: [
      { label: "Anos de experiência", value: "5+" },
      { label: "Projetos entregues", value: "30+" },
      { label: "Tecnologias dominadas", value: "15+" },
    ],
  },
  skills: {
    sectionTitle: "Skills",
    heading: "Stack & Tecnologias",
    groups: [
      {
        title: "Backend",
        description: "APIs robustas e escaláveis",
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
        description: "Interfaces modernas e performáticas",
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
        title: "DevOps & Ferramentas",
        description: "Infraestrutura e fluxo de trabalho",
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
    sectionTitle: "Experiência",
    heading: "Trajetória Profissional",
    items: [
      {
        role: "Engenheiro de Software Full-Stack",
        company: "Empresa Atual",
        period: "2023 — Presente",
        description:
          "Desenvolvimento de aplicações web completas utilizando Laravel e React/Next.js. Responsável pela arquitetura de sistemas, implementação de features críticas e mentoria de desenvolvedores juniores.",
        stack: ["Laravel", "React", "Next.js", "PostgreSQL", "Docker"],
      },
      {
        role: "Desenvolvedor Backend",
        company: "Empresa Anterior",
        period: "2021 — 2023",
        description:
          "Construção de APIs RESTful com Laravel e Node.js. Implementação de painéis administrativos com Filament e integração com serviços de terceiros.",
        stack: ["PHP", "Laravel", "Filament", "Node.js", "MySQL"],
      },
      {
        role: "Desenvolvedor Web",
        company: "Início de Carreira",
        period: "2019 — 2021",
        description:
          "Desenvolvimento de sites e sistemas web com PHP e JavaScript. Primeiros projetos com React e aprendizado acelerado em arquitetura de software.",
        stack: ["PHP", "JavaScript", "React", "MySQL", "HTML/CSS"],
      },
    ],
  },
  projects: {
    sectionTitle: "Projetos",
    heading: "Trabalhos Selecionados",
    items: [
      {
        slug: "projeto-saas",
        title: "Plataforma SaaS",
        description:
          "Sistema SaaS multi-tenant com painel administrativo completo, gestão de usuários, billing e dashboards analíticos.",
        stack: ["Laravel", "Filament", "React", "PostgreSQL", "Stripe"],
      },
      {
        slug: "ecommerce-api",
        title: "E-commerce API",
        description:
          "API RESTful de alta performance para e-commerce com sistema de cache avançado, filas de processamento e integração com múltiplos gateways de pagamento.",
        stack: ["NestJS", "PostgreSQL", "Redis", "Docker"],
      },
      {
        slug: "dashboard-analytics",
        title: "Dashboard de Analytics",
        description:
          "Dashboard em tempo real com visualização de dados complexos, filtros avançados e exportação de relatórios.",
        stack: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
      },
    ],
  },
  contact: {
    sectionTitle: "Contato",
    heading: "Vamos construir algo juntos?",
    description:
      "Estou sempre aberto a novos desafios e oportunidades. Se você tem um projeto em mente ou quer trocar uma ideia, entre em contato.",
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
