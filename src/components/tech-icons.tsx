/* Devicon SVG icons for each technology skill
 * Uses pure SVGs from https://devicon.dev via CDN
 */

/** Map skill display names → devicon icon slugs (name/variant) */
const DEVICON_MAP: Record<string, string> = {
  // Frontend
  "React": "react/react-original",
  "Next.js": "nextjs/nextjs-original",
  "TypeScript": "typescript/typescript-original",
  "Tailwind CSS": "tailwindcss/tailwindcss-original",
  "Framer Motion": "framermotion/framermotion-original",
  "HTML5": "html5/html5-original",
  "CSS3": "css3/css3-original",
  // Mobile
  "React Native": "react/react-original",
  "Expo": "expo/expo-original",
  // Backend
  "Node.js": "nodejs/nodejs-original",
  "Express.js": "express/express-original",
  // Databases
  "MongoDB": "mongodb/mongodb-original",
  "PostgreSQL": "postgresql/postgresql-original",
  "SQL": "azuresqldatabase/azuresqldatabase-original",
  // State Management
  "Redux Toolkit": "redux/redux-original",
  "RTK Query": "redux/redux-original",
  // DevOps
  "Docker": "docker/docker-original",
  "Nginx": "nginx/nginx-original",
  "Cloudflare": "cloudflare/cloudflare-original",
  "DigitalOcean": "digitalocean/digitalocean-original",
  // ORM / ODM
  "Prisma": "prisma/prisma-original",
  "Mongoose": "mongoose/mongoose-original",
  // Auth & Validation
  // "Zod": "zod/zod-original",
  "OAuth": "oauth/oauth-original",
  "JWT": "json/json-original",
};

const DEVICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/** Fallback colored-dot colors for skills without a devicon entry */
const SKILL_COLORS: Record<string, string> = {
  "Shadcn/ui": "#ffffff",
  "SWR": "#ffffff",
  "Zustand": "#453F39",
  "React Hook Form": "#EC5990",
  "CORS": "#61DAFB",
  "Rate Limiting": "#F59E0B",
  "XSS Protection": "#EF4444",
  "Cron Jobs": "#8B5CF6",
  "Queue Workers": "#10B981",
};

export function getSkillColor(skill: string): string {
  return SKILL_COLORS[skill] || "#888888";
}

export function TechIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const slug = DEVICON_MAP[name];

  if (slug) {
    return (
      <img
        src={`${DEVICON_CDN}/${slug}.svg`}
        alt={name}
        className={className}
        loading="lazy"
        width={16}
        height={16}
      />
    );
  }

  // Fallback: colored dot for skills without a devicon icon
  const color = getSkillColor(name);
  return (
    <span
      className="inline-block h-2.5 w-2.5 rounded-full shrink-0"
      style={{ backgroundColor: color }}
    />
  );
}
