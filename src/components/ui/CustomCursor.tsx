"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Core coordinates of the cursor
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for outer circle
  const ringConfig = { damping: 28, stiffness: 180, mass: 0.5 };
  const ringX = useSpring(mouseX, ringConfig);
  const ringY = useSpring(mouseY, ringConfig);

  useEffect(() => {
    // 1. Detect if touch device or mobile screen to prevent custom cursor on touches
    const checkDevice = () => {
      const touchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(window.innerWidth < 768 || touchSupport);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    // 2. Mouse position listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // 3. Global hover scanner for interactive items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Scan standard interactive tags, parent controls, or pointer stylings
      const isInteractive =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer");

      setIsHovering(!!isInteractive);
    };

    // Hide or show when cursor enters/leaves viewport window
    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isVisible]);

  // Disable on mobile/touch screen or before cursor initiates first movement
  if (isMobile) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[99999] mix-blend-difference hidden md:block"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.25s ease" }}
    >
      {/* Dynamic Trailing Spring Ring */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-1.5 border-white bg-transparent pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          width: isHovering ? 56 : 28,
          height: isHovering ? 56 : 28,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
      {/* High-speed Core Dot */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          width: isHovering ? 0 : 6,
          height: isHovering ? 0 : 6,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
}
