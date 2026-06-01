"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const IMAGES_TO_PRELOAD = [
  "/image.png",
  "/fsm.png",
  "/innovatiview.png",
  "/soulspace1.png",
  "/soulspace2.png",
  "/soulspace3.jpeg",
  "/cmf1.png",
  "/cmf2.png",
  "/cmf3.png",
  "/lab1.png",
  "/lab2.png",
  "/lab3.png",
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
];

interface CustomLoaderProps {
  onComplete: () => void;
}

export default function CustomLoader({ onComplete }: CustomLoaderProps) {
  const [actualProgress, setActualProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. Mouse Follow Glow Effect inside preloader
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 2. Programmatic Asset Preloading
  useEffect(() => {
    let loadedCount = 0;
    const total = IMAGES_TO_PRELOAD.length;

    if (total === 0) {
      setActualProgress(100);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      const percent = Math.round((loadedCount / total) * 100);
      setActualProgress(percent);
    };

    const handleImageError = () => {
      // Treat errors as loaded so the loading screen never hangs indefinitely
      handleImageLoad();
    };

    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
    });

    // Fallback: Force loader to finish after 8 seconds in case of slow network/stuck requests
    const timeout = setTimeout(() => {
      setActualProgress(100);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  // 3. Smooth Numerical Ticker Interpolation
  useEffect(() => {
    if (displayedProgress >= 100) {
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 600); // Small pause at 100% for satisfying visual feedback
      return () => clearTimeout(finishTimeout);
    }

    const interval = setInterval(() => {
      setDisplayedProgress((prev) => {
        if (prev < actualProgress) {
          return prev + 1;
        }
        return prev;
      });
    }, 15); // smooth tick up speed

    return () => clearInterval(interval);
  }, [actualProgress, displayedProgress, onComplete]);

  // Determine current system status string based on progress percentage
  const getStatusText = (progress: number) => {
    if (progress < 25) return "INITIALIZING CORE DATA SYSTEMS...";
    if (progress < 55) return "FETCHING BIO-PORTRAITS & MOCKUPS...";
    if (progress < 80) return "CACHING SCALABLE WEB ELEMENTS...";
    if (progress < 100) return "OPTIMIZING HIGH-FIDELITY GRAPHICS...";
    return "ASSET CACHE COMPLETE // READY";
  };

  const nameLetters = "ADITYA  CHOUBEY".split("");

  // Stagger configurations for name letters
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    initial: { y: 24, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] w-screen h-screen flex flex-col justify-center items-center bg-[#0C0C0C] select-none overflow-hidden"
      exit={{
        y: "-100%",
        transition: { duration: 1.1, ease: [0.85, 0, 0.15, 1] as const },
      }}
    >
      {/* 3D Ambient Mouse spotlight */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-500 ease-out opacity-40 blur-[130px] w-[50vw] h-[50vw] min-w-[320px] bg-gradient-to-r from-[#646973]/30 via-[#BBCCD7]/10 to-transparent"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      <div className="relative flex flex-col items-center z-10 px-6 max-w-xl w-full text-center">
        {/* Animated Headline: User's Name */}
        <motion.h1
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="hero-heading font-black tracking-[0.18em] uppercase leading-none text-2xl sm:text-3xl md:text-4xl mb-3 flex flex-wrap justify-center items-center"
        >
          {nameLetters.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              style={{ marginRight: char === " " ? "0.45em" : "0px" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Small subtitle indicator */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[#D7E2EA]/50 font-light tracking-[0.35em] text-[9px] uppercase mb-16"
        >
          Full Stack & IoT Developer • Portfolio
        </motion.p>

        {/* Premium visual progress bar */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[1.5px] bg-[#D7E2EA]/10 rounded-full overflow-hidden mb-3">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#646973] to-[#BBCCD7]"
            style={{ width: `${displayedProgress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Digital percentage and current status tag */}
        <div className="flex justify-between items-center w-full max-w-[340px] sm:max-w-[420px] px-0.5">
          <motion.span
            key={displayedProgress < 100 ? "loading" : "done"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[9px] font-medium tracking-[0.15em] text-[#D7E2EA]/40 uppercase select-none text-left"
          >
            {getStatusText(displayedProgress)}
          </motion.span>

          <span
            className="font-black text-xs sm:text-sm text-[#BBCCD7] tracking-widest font-mono"
            style={{ minWidth: "3.5em", textAlign: "right" }}
          >
            {String(displayedProgress).padStart(3, "0")}%
          </span>
        </div>
      </div>

      {/* Decorative digital layout grid corners */}
      <div className="absolute top-8 left-8 border-t border-l border-white/5 w-6 h-6 pointer-events-none" />
      <div className="absolute top-8 right-8 border-t border-r border-white/5 w-6 h-6 pointer-events-none" />
      <div className="absolute bottom-8 left-8 border-b border-l border-white/5 w-6 h-6 pointer-events-none" />
      <div className="absolute bottom-8 right-8 border-b border-r border-white/5 w-6 h-6 pointer-events-none" />
    </motion.div>
  );
}
