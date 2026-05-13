"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Server,
  Database,
  GitBranch,
  Shield,
  Cloud,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechIcon } from "@/components/tech-icons";
import { SKILLS } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Smartphone,
  Server,
  Database,
  GitBranch,
  Shield,
  Cloud,
  Layers,
};

export function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="What I work with"
      pattern="dots"
    >
      <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SKILLS.map((category, i) => {
          const Icon = iconMap[category.icon];
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="group h-full border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-accent/30 hover:bg-accent/40 hover:shadow-lg hover:shadow-cyan-accent/5">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-sm font-semibold">
                    {Icon && (
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent transition-colors group-hover:bg-cyan-accent/10">
                        <Icon className="h-4 w-4 text-cyan-accent" />
                      </div>
                    )}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="gap-1.5 cursor-default border-border/30 bg-accent/60 text-xs font-normal text-muted-foreground transition-colors hover:bg-cyan-accent/10 hover:text-foreground"
                      >
                        <TechIcon name={skill} className="h-3.5 w-3.5" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
