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
    title: "NITE",
    description:
      "A full-stack web application with a TypeScript-based client and server architecture. Features a modern monorepo structure with dedicated frontend and backend.",
    image: "/projects/nite.webp",
    techStack: ["TypeScript", "React", "Node.js", "Express.js", "MongoDb"],
    githubUrl: "https://github.com/Moe-Htetb/NITE",
    featured: true,
  },
  {
    id: "p2",
    title: "MMSIT Voucher App",
    description:
      "A POS (Point of Sale) UI application built progressively — from useState to Zustand for state management, with a Next.js frontend and Laravel API backend.",
    image: "/projects/mmsit.webp",
    techStack: ["React", "Next.js", "Zustand", "JavaScript", "Laravel", "CSS"],
    githubUrl: "https://github.com/Moe-Htetb/mmsit",
    liveUrl: "https://voucher-app-nu.vercel.app",
    featured: true,
  },
  {
    id: "p3",
    title: "Developer Portfolio",
    description:
      "A modern, minimalist developer portfolio built with Next.js and TypeScript. Features dark mode, smooth animations with Framer Motion, and responsive design.",
    image: "/projects/portfolio.webp",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/ui"],
    githubUrl: "https://github.com/Moe-Htetb/my-portfolio",
    liveUrl: "https://my-portfolio-omega-seven-58.vercel.app",
    featured: true,
  },
  {
    id: "p4",
    title: "DoS Rate Limiter Demo",
    description:
      "A demo application showcasing rate limiting and API hardening techniques. Send requests from a browser frontend to a Node.js/Express backend to see rate limiting in action.",
    image: "/projects/dos.webp",
    techStack: ["Node.js", "Express.js", "express-rate-limit", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Moe-Htetb/dos",
  },
  {
    id: "p5",
    title: "Learn Fullstack",
    description:
      "A comprehensive fullstack learning repository covering React, Shadcn UI, React Router, Prisma, and backend development with practical project-based exercises.",
    image: "/projects/fullstack.webp",
    techStack: ["React", "TypeScript", "Shadcn/ui", "React Router", "Prisma", "Node.js"],
    githubUrl: "https://github.com/Moe-Htetb/Learn-Fullstack",
  },
  {
    id: "p6",
    title: "Learn React Native",
    description:
      "A React Native learning project featuring multiple mobile apps including a shop app, built with Expo and TypeScript for cross-platform development.",
    image: "/projects/reactnative.webp",
    techStack: ["React Native", "Expo", "TypeScript"],
    githubUrl: "https://github.com/Moe-Htetb/Learn-ReactNative",
  },
  {
    id: "p7",
    title: "Student Grading System",
    description:
      "A university project for managing student grades across multiple semesters and specializations (CS/CT). Features admin management, CRUD operations, and authentication.",
    image: "/projects/grading.webp",
    techStack: ["PHP", "MySQL", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Moe-Htetb/StudentGradingSystem",
  },
  {
    id: "p8",
    title: "Kid's Quiz Zone",
    description:
      "An interactive quiz application designed for children, built with Java. Features a quiz database, engaging UI, and educational content for young learners.",
    image: "/projects/quizzone.webp",
    techStack: ["Java", "MySQL", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Moe-Htetb/Kid-s-Quiz-Zone",
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
