export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  type: "work" | "education" | "teaching";
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
