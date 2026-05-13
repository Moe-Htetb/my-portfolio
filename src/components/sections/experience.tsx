"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { EXPERIENCE, METRICS } from "@/constants/data";

const typeIcons: Record<string, React.ElementType> = {
  work: Briefcase,
  education: GraduationCap,
  teaching: Users,
};

export function Experience() {
  const { ref, isInView } = useScrollAnimation();
  const { ref: metricsRef, isInView: metricsInView } = useScrollAnimation();

  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="My journey"
      pattern="grid"
    >
      {/* Metrics */}
      <div
        ref={metricsRef}
        className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {METRICS.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              metricsInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-gradient">{metric.value}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  {metric.label}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div ref={ref} className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-4 top-4 bottom-4 hidden w-px bg-gradient-to-b from-cyan-accent/50 via-indigo-accent/30 to-transparent md:block" />

        {EXPERIENCE.map((item, i) => {
          const Icon = typeIcons[item.type] || Briefcase;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative md:pl-12"
            >
              {/* Dot */}
              <div className="absolute left-2.5 top-6 hidden h-3 w-3 rounded-full border-2 border-cyan-accent bg-background md:block" />

              <Card className="border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-accent/20">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                          <Icon className="h-5 w-5 text-cyan-accent" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold">
                            {item.role}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <ul className="mt-4 space-y-2">
                        {item.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-accent" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className="shrink-0 text-xs font-medium tracking-widest uppercase text-cyan-accent sm:text-right">
                      {item.period}
                    </span>
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
