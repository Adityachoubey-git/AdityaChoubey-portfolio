"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const totalChars = text.length;
  let charCounter = 0;

  return (
    <span ref={containerRef} className={`inline-block ${className}`} style={style}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split("");
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char) => {
              const start = charCounter / totalChars;
              const end = (charCounter + 1) / totalChars;
              charCounter++;

              return (
                <Character
                  key={charCounter}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {/* Account for the space between words in range calculation */}
            {wordIndex < words.length - 1 && (() => {
              charCounter++;
              return null;
            })()}
          </span>
        );
      })}
    </span>
  );
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Character({ char, progress, range }: CharacterProps) {
  // Map scroll progress to opacity from 0.2 to 1
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (char === " ") {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block select-none">
      <span className="invisible">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 h-full w-full"
      >
        {char}
      </motion.span>
    </span>
  );
}
