"use client";

import React from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import AnimatedText from "../ui/AnimatedText";
import ContactButton from "../ui/ContactButton";

export default function AboutSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      
      {/* --- Corner Decorative 3D Images --- */}
      
      {/* Top-Left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 w-[70px] sm:w-[160px] md:w-[210px] opacity-20 sm:opacity-100 pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D Asset"
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-Left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 w-[60px] sm:w-[140px] md:w-[180px] opacity-20 sm:opacity-100 pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Abstract Object"
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Top-Right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 w-[70px] sm:w-[160px] md:w-[210px] opacity-20 sm:opacity-100 pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D Asset"
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-Right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 w-[80px] sm:w-[170px] md:w-[220px] opacity-20 sm:opacity-100 pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Sphere Group"
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* --- Main Content Block --- */}
      <div className="flex flex-col items-center text-center max-w-[560px] z-20 relative px-4">
        
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated Paragraph (Scroll Reveal character by character) */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center">
          <AnimatedText
            text="Full Stack Developer experienced in building scalable web platforms and IoT-enabled systems using React, Next.js, Node.js, and PostgreSQL. Developed production systems deployed at IIT Delhi serving 700+ users with real-time booking workflows. Published research in IoT-based laboratory automation and experienced in integrating hardware and software systems."
            className="text-[#D7E2EA] font-medium justify-center leading-relaxed text-center"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)" }}
          />
        </div>

        {/* Contact & Download Resume Buttons */}
        <div className="mt-16 sm:mt-20 md:mt-24 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
          <FadeIn delay={0.4} y={20}>
            <ContactButton onClick={() => scrollToSection("contact")} />
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <motion.a
              href="https://drive.google.com/file/d/1VeMk8hNIOptcFX3thB6bv7kVgVkyqGhe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(215, 226, 234, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-block rounded-full font-medium uppercase tracking-widest text-[#D7E2EA] border-2 border-[#D7E2EA]/85 transition-all cursor-pointer select-none px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
            >
              Download Resume
            </motion.a>
          </FadeIn>
        </div>

      </div>

    </section>
  );
}
