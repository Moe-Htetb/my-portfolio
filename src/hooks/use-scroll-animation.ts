"use client";

import { useRef } from "react";
import { useInView, type UseInViewOptions } from "framer-motion";

interface UseScrollAnimationOptions {
  once?: boolean;
  margin?: any;
  amount?: "some" | "all" | number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { once = true, margin = "-80px", amount = "some" } = options;
  const ref = useRef<HTMLDivElement>(null);

  const inViewOptions: UseInViewOptions = {
    once,
    margin,
    amount,
  };

  const isInView = useInView(ref, inViewOptions);

  return { ref, isInView };
}
