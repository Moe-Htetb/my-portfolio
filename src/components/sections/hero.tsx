"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL } from "@/constants/data";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pattern-grid"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 h-48 w-48 sm:h-72 sm:w-72 gradient-orb bg-cyan-accent/20 animate-float" />
      <div className="absolute bottom-1/4 -right-32 h-56 w-56 sm:h-96 sm:w-96 gradient-orb bg-indigo-accent/15 animate-float [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 h-32 w-32 sm:h-48 sm:w-48 -translate-x-1/2 -translate-y-1/2 gradient-orb bg-emerald-accent/10 animate-pulse-slow" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-6 px-4 py-20 sm:gap-10 sm:px-6 sm:py-0 lg:flex-row lg:gap-16">
        {/* Left — Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-accent/50 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-accent animate-pulse-slow" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {PERSONAL.name}
            <span className="text-cyan-accent">.</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="mt-2 text-base font-medium text-muted-foreground sm:mt-4 sm:text-lg md:text-xl"
          >
            {PERSONAL.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground/80 sm:mt-6 sm:text-base lg:mx-0"
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-start"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group w-full gap-2 rounded-full bg-foreground px-8 text-background hover:bg-foreground/90 sm:w-auto"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
            <div className="flex items-center gap-3">
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="gap-2 rounded-full border-border/60 px-6 hover:bg-accent sm:px-8"
              >
                <Send className="h-4 w-4" />
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="gap-2 rounded-full px-6 hover:bg-accent sm:px-8"
              >
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative shrink-0"
        >
          <div className="relative h-44 w-44 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
            {/* Glow ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-accent/30 via-indigo-accent/20 to-emerald-accent/10 blur-xl" />
            {/* Border ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-accent/50 via-indigo-accent/30 to-transparent" />
            {/* Image */}
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-border/20">
              <Image
                src="/profile.JPG"
                alt="Moe Htet — Full-Stack Developer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 176px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 sm:block sm:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
