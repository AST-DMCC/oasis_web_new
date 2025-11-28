"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 30,
  className = "",
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: false, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
