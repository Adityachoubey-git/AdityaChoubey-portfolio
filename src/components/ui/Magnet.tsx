"use client";

import React, { useState, useEffect, useRef } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState(inactiveTransition);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const mx = e.clientX;
      const my = e.clientY;

      const dx = mx - cx;
      const dy = my - cy;

      // Check if cursor is within expanded bounding box including padding
      const isWithinPadding =
        mx >= rect.left - padding &&
        mx <= rect.right + padding &&
        my >= rect.top - padding &&
        my <= rect.bottom + padding;

      if (isWithinPadding) {
        // Apply magnetic translate3d transform divided by strength factor
        setPosition({ x: dx / strength, y: dy / strength });
        setTransition(activeTransition);
      } else {
        // Reset to original position
        setPosition({ x: 0, y: 0 });
        setTransition(inactiveTransition);
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setTransition(inactiveTransition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={elementRef}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        transition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
