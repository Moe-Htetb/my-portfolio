"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Easing Tokens ───────────────────────────────────────────────────────────
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT_QUINT = [0.83, 0, 0.17, 1] as const;

// ─── SVG Wave Paths (bottom edge of curtain panel) ───────────────────────────
// flat → wavy → flat as the panel rides up
const WAVE_KEYFRAMES = [
  // 0 % — flat bottom edge flush with viewport bottom
  "M 0 100 L 0 0 L 100 0 L 100 100 Q 75 100 50 100 Q 25 100 0 100 Z",
  // 30% — first organic bulge
  "M 0 100 L 0 0 L 100 0 L 100 100 Q 75 112 50 96 Q 25 80 0 100 Z",
  // 60% — counter-wave
  "M 0 100 L 0 0 L 100 0 L 100 100 Q 75 85 50 102 Q 25 118 0 100 Z",
  // 100% — settles flat again as it exits
  "M 0 100 L 0 0 L 100 0 L 100 100 Q 75 100 50 100 Q 25 100 0 100 Z",
];

// ─── Loading counter numbers ──────────────────────────────────────────────────
const COUNT_STOPS = [0, 17, 34, 51, 68, 85, 100] as const;

// ─── Types ────────────────────────────────────────────────────────────────────
interface PreloaderProps {
  /** Called when the exit animation fully completes */
  onComplete?: () => void;
  /** Minimum display time in ms before exit can start (default: 2200) */
  minDuration?: number;
}

export function Preloader({ onComplete, minDuration = 2200 }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  // ── Drive the progress counter up ─────────────────────────────────────────
  useEffect(() => {
    const stops = [...COUNT_STOPS];
    let i = 0;

    const tick = () => {
      if (i >= stops.length) return;
      setCount(stops[i]);
      i++;
      if (i < stops.length) setTimeout(tick, minDuration / stops.length);
    };

    tick();
  }, [minDuration]);

  // ── Trigger exit after minDuration ────────────────────────────────────────
  useEffect(() => {
    const timer = setTimeout(() => setPhase("exit"), minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== "exit" && (
        <motion.div
          key="preloader"
          className="preloader-root"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, delay: 0.85 }}
          aria-hidden="true"
        >
          {/* ── Panel A — slides up (primary curtain) ── */}
          <motion.div
            className="preloader-panel preloader-panel--a"
            initial={{ y: "0%" }}
            exit={{ y: "-102%" }}
            transition={{
              duration: 0.9,
              ease: EASE_OUT_EXPO,
              delay: 0,
            }}
          >
            {/* Organic SVG wave on the trailing edge */}
            <motion.svg
              className="preloader-wave"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d={WAVE_KEYFRAMES[0]}
                animate={{ d: WAVE_KEYFRAMES }}
                transition={{
                  duration: (minDuration / 1000) * 0.8,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.6, 1],
                  repeat: 0,
                }}
                fill="var(--preloader-accent)"
              />
            </motion.svg>

            {/* Glowing accent line */}
            <div className="preloader-glow-line" />
          </motion.div>

          {/* ── Panel B — slides up with slight lag (layered depth) ── */}
          <motion.div
            className="preloader-panel preloader-panel--b"
            initial={{ y: "0%" }}
            exit={{ y: "-102%" }}
            transition={{
              duration: 0.9,
              ease: EASE_IN_OUT_QUINT,
              delay: 0.12,
            }}
          />

          {/* ── Central logo / identity mark ── */}
          <div className="preloader-content">
            {/* Animated monogram */}
            <motion.div
              className="preloader-monogram"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            >
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="MH monogram"
              >
                {/* Outer ring — draw-on stroke */}
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="url(#preloader-ring-gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.1 }}
                />
                {/* M letter */}
                <motion.path
                  d="M 16 42 L 16 22 L 24 35 L 32 22 L 32 42"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.3 }}
                />
                {/* H letter */}
                <motion.path
                  d="M 36 22 L 36 42 M 36 32 L 48 32 M 48 22 L 48 42"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.55 }}
                />
                <defs>
                  <linearGradient
                    id="preloader-ring-gradient"
                    x1="0"
                    y1="0"
                    x2="64"
                    y2="64"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="var(--preloader-cyan)" />
                    <stop offset="100%" stopColor="var(--preloader-indigo)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Progress counter */}
            <motion.div
              className="preloader-counter"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.4 }}
              aria-live="polite"
            >
              <motion.span
                key={count}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {String(count).padStart(3, "0")}
              </motion.span>
              <span className="preloader-counter__pct">%</span>
            </motion.div>

            {/* Loading label */}
            <motion.p
              className="preloader-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                Loading
              </motion.span>
            </motion.p>

            {/* Scanning line decoration */}
            <motion.div
              className="preloader-scan-line"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: EASE_OUT_EXPO, delay: 0.2 }}
            />
          </div>

          {/* ── Floating particle orbs ── */}
          {[
            { cx: "12%", cy: "25%", size: 280, color: "var(--preloader-cyan)", delay: 0 },
            { cx: "88%", cy: "70%", size: 350, color: "var(--preloader-indigo)", delay: 0.3 },
            { cx: "55%", cy: "10%", size: 180, color: "var(--preloader-emerald)", delay: 0.6 },
          ].map((orb, i) => (
            <motion.div
              key={i}
              className="preloader-orb"
              style={{
                left: orb.cx,
                top: orb.cy,
                width: orb.size,
                height: orb.size,
                background: orb.color,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{
                duration: 1.2,
                ease: EASE_OUT_EXPO,
                delay: orb.delay,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
