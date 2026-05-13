"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  pattern?: "grid" | "dots" | "none";
}

export function SectionWrapper({
  id,
  children,
  className,
  title,
  subtitle,
  pattern = "none",
}: SectionWrapperProps) {
  const { ref, isInView } = useScrollAnimation();

  const patternClass =
    pattern === "grid"
      ? "pattern-grid"
      : pattern === "dots"
      ? "pattern-dots"
      : "";

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative scroll-mt-20 py-24 md:py-32",
        patternClass,
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            {subtitle && (
              <p className="mb-3 text-sm font-medium tracking-widest uppercase text-cyan-accent">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-accent to-indigo-accent" />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
