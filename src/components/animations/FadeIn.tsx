"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  staggerChildren?: number;
  parallaxOffset?: number;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  staggerChildren,
  parallaxOffset = 0,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxOffset]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1] as const, // Podium-style elegant ease-out
        ...(staggerChildren && {
          staggerChildren,
          delayChildren: delay,
        }),
      },
    },
  };

  const Component = motion.div;

  return (
    <Component
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(className)}
      style={parallaxOffset ? { y } : undefined}
    >
      {children}
    </Component>
  );
}

// Child component for staggering elements within a FadeIn parent
export function FadeInStaggerItem({ children, className }: { children: React.ReactNode, className?: string }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
