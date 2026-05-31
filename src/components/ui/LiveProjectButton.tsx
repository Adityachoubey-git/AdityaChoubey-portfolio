"use client";

import React from "react";
import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function LiveProjectButton({ onClick, className = "" }: LiveProjectButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04, backgroundColor: "rgba(215, 226, 234, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors cursor-pointer select-none ${className}`}
    >
      <span className="block px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base">
        Live Project
      </span>
    </motion.button>
  );
}
