import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface ScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, once = true } = options;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once,
  });
  
  return { ref, isInView };
};
