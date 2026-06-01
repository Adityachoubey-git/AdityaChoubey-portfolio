"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface FluidCursorFollowProps {
  children: React.ReactNode;
  className?: string;
}

export default function FluidCursorFollow({
  children,
  className = "",
}: FluidCursorFollowProps) {
  // Motion values to track mouse coordinate offsets (-1 to 1)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out coordinate tracking using spring physics
  // Damping: controls bounce, Stiffness: controls speed/rigidity, Mass: controls heavy/light feel
  const springConfig = { damping: 28, stiffness: 70, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map spring smoothed offsets to actual pixel translations
  // Constrained to a highly elegant boundary so it follows the mouse screen-wide without flying off
  const translateX = useTransform(smoothX, [-1, 1], [-55, 55]);
  const translateY = useTransform(smoothY, [-1, 1], [-35, 35]);

  // Map spring smoothed offsets to perspective rotation angles for beautiful 3D tilt
  // When cursor is at top-right, the image tilts so it faces slightly towards the cursor
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [-1, 1], [-12, 12]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      if (!innerWidth || !innerHeight) return;

      // Calculate cursor position offset normalized from -1 to 1 relative to viewport center
      const normX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const normY = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      x.set(normX);
      y.set(normY);
    };

    const handleMouseLeave = () => {
      // Return gently to center when cursor leaves the viewport
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      className={className}
      style={{
        x: translateX,
        y: translateY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}
