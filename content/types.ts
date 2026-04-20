export type Locale = "pt" | "en";

export interface HeroContent {
  greeting: string;
  name: string;
  title: string;
  description: string;
  cta: {
    projects: string;
    contact: string;
  };
}

export interface AboutContent {
  sectionTitle: string;
  heading: string;
  paragraphs: string[];
  highlights: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

export interface SkillsContent {
  sectionTitle: string;
  heading: string;
  groups: SkillGroup[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
}

export interface ExperienceContent {
  sectionTitle: string;
  heading: string;
  items: Experience[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  url?: string;
  github?: string;
}

export interface ProjectsContent {
  sectionTitle: string;
  heading: string;
  items: Project[];
}

export interface ContactContent {
  sectionTitle: string;
  heading: string;
  description: string;
  email: string;
  links: {
    label: string;
    url: string;
    icon: string;
  }[];
}

export interface NavContent {
  items: {
    label: string;
    href: string;
  }[];
  languageToggle: string;
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  contact: ContactContent;
}
