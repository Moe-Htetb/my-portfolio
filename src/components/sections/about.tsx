"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ABOUT, TIMELINE } from "@/constants/data";

export function About() {
  const { ref: timelineRef, isInView: timelineInView } = useScrollAnimation();

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Get to know me">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Bio */}
        <div className="space-y-6">
          {ABOUT.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}

          {/* Philosophy Quote */}
          <Card className="border-border/40 bg-accent/30">
            <CardContent className="flex gap-4 p-6">
              <Quote className="mt-0.5 h-6 w-6 shrink-0 text-cyan-accent" />
              <blockquote className="text-sm italic leading-relaxed text-muted-foreground">
                {ABOUT.philosophy}
              </blockquote>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-accent/50 via-indigo-accent/30 to-transparent" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={
                  timelineInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-accent bg-background" />

                <div className="space-y-1.5">
                  <span className="text-xs font-medium tracking-widest uppercase text-cyan-accent">
                    {item.year}
                  </span>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground/80">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
