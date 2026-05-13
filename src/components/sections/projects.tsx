"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PROJECTS } from "@/constants/data";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export function Projects() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="What I've built"
    >
      <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <Card className="group h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-accent/30 hover:shadow-xl hover:shadow-cyan-accent/5 hover:-translate-y-1">
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-accent/30">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/20 via-indigo-accent/10 to-emerald-accent/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5 backdrop-blur-sm">
                      <span className="text-lg font-bold text-cyan-accent">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground/60">
                      {project.techStack[0]}
                    </p>
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="gap-1 bg-cyan-accent/90 text-[10px] font-medium text-background">
                      <Star className="h-2.5 w-2.5" />
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="flex flex-col p-5">
                {/* Title */}
                <h3 className="text-base font-semibold tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-border/30 bg-accent/30 text-[10px] font-normal text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex items-center gap-2 border-t border-border/30 pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      Source
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
