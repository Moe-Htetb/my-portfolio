import type { NavLink, Project, SkillCategory, ExperienceItem, TimelineItem, SocialLink } from "@/types";

/* ── Navigation ── */
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ── Personal Info ── */
export const PERSONAL = {
  name: "Moe Htet",
  title: "Full-Stack Developer",
  tagline:
    "Building robust, scalable applications and empowering the next generation of developers. I craft clean architectures with modern technologies and share knowledge.",
  email: "moehtet.dev@gmail.com",
  github: "https://github.com/Moe-Htetb",
  linkedin: "https://linkedin.com/in/moehtet",
  location: "Available Worldwide",
} as const;

/* ── About / Bio ── */
export const ABOUT = {
  bio: [
    "I'm a full-stack developer and technical instructor with deep expertise in the modern JavaScript ecosystem. I specialize in building production-grade web applications using React, Next.js, Node.js, and TypeScript — with a strong focus on clean architecture, security, and performance.",

  ],
  philosophy:
    "Code should be written for humans first, machines second. Clean architecture is not a luxury — it's a responsibility.",
};

/* ── Timeline / Education ── */
export const TIMELINE: TimelineItem[] = [
  {
    id: "t1",
    year: "2026 - Present",
    title: "Full-Stack Developer",
    subtitle: "Freelance & Community",
    description:
      "Building full-stack applications with Next.js, Node.js, and PostgreSQL.",
  },
  // {
  //   id: "t2",
  //   year: "2023 - 2024",
  //   title: "Software Engineering Studies",
  //   subtitle: "IT & Software Engineering",
  //   description:
  //     "Advanced studies in software engineering principles, data structures, algorithms, cybersecurity fundamentals, and network defense strategies.",
  // },
  {
    id: "t3",
    year: "2022 - 2027",
    title: "University of Computer Studies (Hpa-An)",
    subtitle: "Self-Directed Learning",
    description:
      "Intensive self-study in full-stack web development, starting with HTML/CSS/JavaScript and progressing through React, Node.js, and database technologies.",
  },
];

/* ── Skills ── */
export const SKILLS: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: "Smartphone",
    skills: ["React Native", "Expo"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    id: "state",
    title: "State Management",
    icon: "GitBranch",
    skills: ["Zustand", "Redux Toolkit", "RTK Query", "SWR"],
  },
  {
    id: "validation",
    title: "Validation & Security",
    icon: "Shield",
    skills: ["Zod", "React Hook Form", "JWT", "OAuth", "CORS", "Rate Limiting", "XSS Protection"],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    icon: "Cloud",
    skills: ["Docker", "Nginx", "Cloudflare", "DigitalOcean", "Cron Jobs", "Queue Workers"],
  },
  {
    id: "orm",
    title: "ORM / ODM",
    icon: "Layers",
    skills: ["Prisma", "Mongoose"],
  },
];

/* ── Projects ── */
export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "TaskFlow Pro",
    description:
      "A full-stack project management platform with real-time collaboration, Kanban boards, and team analytics. Built with a focus on clean architecture and security.",
    image: "/projects/taskflow.webp",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zustand", "Docker"],
    githubUrl: "https://github.com/Moe-Htetb",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "p2",
    title: "SecureAuth API",
    description:
      "A production-ready authentication and authorization service with JWT, OAuth 2.0, rate limiting, and comprehensive security middleware.",
    image: "/projects/secureauth.webp",
    techStack: ["Node.js", "Express.js", "JWT", "OAuth", "MongoDB", "Redis"],
    githubUrl: "https://github.com/Moe-Htetb",
    featured: true,
  },
  {
    id: "p3",
    title: "DevConnect Mobile",
    description:
      "A cross-platform mobile app for developers to network, share projects, and collaborate. Features real-time chat and push notifications.",
    image: "/projects/devconnect.webp",
    techStack: ["React Native", "Expo", "Redux Toolkit", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Moe-Htetb",
  },
  {
    id: "p4",
    title: "NetShield Scanner",
    description:
      "A network defense and vulnerability scanning tool with automated reporting, traffic analysis, and SQL injection detection.",
    image: "/projects/netshield.webp",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Docker", "Nginx"],
    githubUrl: "https://github.com/Moe-Htetb",
  },
  {
    id: "p5",
    title: "EduPlatform LMS",
    description:
      "A learning management system for online courses with video streaming, progress tracking, quizzes, and instructor dashboards.",
    image: "/projects/eduplatform.webp",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "SWR", "Zod"],
    githubUrl: "https://github.com/Moe-Htetb",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "p6",
    title: "CloudDeploy CLI",
    description:
      "A CLI tool that simplifies deployment to DigitalOcean with Docker, automated Nginx configuration, and SSL certificate management.",
    image: "/projects/clouddeploy.webp",
    techStack: ["Node.js", "Docker", "Nginx", "Cloudflare", "DigitalOcean"],
    githubUrl: "https://github.com/Moe-Htetb",
  },
];

/* ── Experience ── */
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "e1",
    role: "Technical Instructor",
    organization: "Web Development Academy",
    period: "2024 – Present",
    description:
      "Leading intensive full-stack web development bootcamps and workshops. Designing curriculum covering React, Next.js, Node.js, and database technologies.",
    achievements: [
      "Mentored 50+ aspiring developers",
      "Created 10+ comprehensive course modules",
      "Maintained 95% student satisfaction rating",
      "Built custom learning management platform",
    ],
    type: "teaching",
  },
  {
    id: "e2",
    role: "Full-Stack Developer",
    organization: "Freelance & Contract",
    period: "2023 – Present",
    description:
      "Designing and building production-grade web applications for clients. Specializing in scalable architectures with modern security practices.",
    achievements: [
      "Delivered 15+ production applications",
      "Reduced API response times by 40%",
      "Implemented zero-downtime deployments",
      "Established CI/CD pipelines with Docker",
    ],
    type: "work",
  },
  {
    id: "e3",
    role: "Community Contributor",
    organization: "Open Source & Dev Community",
    period: "2022 – Present",
    description:
      "Active contributor to developer communities through code reviews, technical writing, and open-source contributions.",
    achievements: [
      "Contributed to open-source projects",
      "Published technical articles and tutorials",
      "Organized local developer meetups",
      "Peer code review mentor",
    ],
    type: "work",
  },
];

/* ── Social Links ── */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Moe-Htetb", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/moehtet", icon: "Linkedin" },
  { label: "Email", href: "mailto:moehtet.dev@gmail.com", icon: "Mail" },
];

/* ── Metrics ── */
export const METRICS = [
  { label: "Students Mentored", value: "50+" },
  { label: "Projects Delivered", value: "15+" },
  { label: "Courses Created", value: "10+" },
  { label: "Satisfaction Rate", value: "95%" },
] as const;
