"use client";

import { useState } from "react";
import { Preloader } from "@/components/preloader";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {/* Preloader runs on top while site pre-paints below */}
      <Preloader onComplete={() => setReady(true)} minDuration={2400} />

      {/*
        Site is ALWAYS mounted so the browser can layout + paint it while the
        preloader plays. The reveal is a single CSS opacity transition —
        GPU-composited, zero layout/paint cost, no jank.
      */}
      <div
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 0.65s ease-out",
          willChange: "opacity",
        }}
      >
        <ThemeProvider>
          <Navbar />
          <main>
            {/* Pass ready so Hero's stagger fires after reveal, not on mount */}
            <Hero ready={ready} />
            <About />
            <Skills />
            <Projects />
            {/* <Experience /> */}
            <Contact />
          </main>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}
