"use client";

import React from "react";
import FadeIn from "../ui/FadeIn";
import FluidCursorFollow from "../ui/FluidCursorFollow";
import ContactButton from "../ui/ContactButton";
import { File, FileBox, FileUser } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">

      {/* 1. Navbar - Floating Glassmorphic Header */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl  ">
        <FadeIn delay={0.1} y={-20} className="w-full">
          <div className="flex justify-between items-center px-6 py-3 rounded-full border border-[#D7E2EA]/10 bg-[#0C0C0C]/60 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" >
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1VeMk8hNIOptcFX3thB6bv7kVgVkyqGhe/view?usp=sharing", "_blank")}
              className="text-[#D7E2EA] font-extrabold uppercase tracking-widest text-xs sm:text-base select-none hover:opacity-80 transition-opacity cursor-pointer hero-heading"
              title="View Resume"
            >
              <span className="inline md:hidden">ADITYA </span>
              <span className="hidden md:inline">ADITYA KUMAR CHOUBEY  </span>
            </button>
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#D7E2EA]/75 hover:text-[#D7E2EA] font-medium uppercase tracking-wider text-[9px] sm:text-xs md:text-sm transition-colors duration-200 cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-[#D7E2EA]/75 hover:text-[#D7E2EA] font-medium uppercase tracking-wider text-[9px] sm:text-xs md:text-sm transition-colors duration-200 cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-[#D7E2EA]/75 hover:text-[#D7E2EA] font-medium uppercase tracking-wider text-[9px] sm:text-xs md:text-sm transition-colors duration-200 cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-[#D7E2EA]/75 hover:text-[#D7E2EA] font-medium uppercase tracking-wider text-[9px] sm:text-xs md:text-sm transition-colors duration-200 cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#D7E2EA]/75 hover:text-[#D7E2EA] font-medium uppercase tracking-wider text-[9px] sm:text-xs md:text-sm transition-colors duration-200 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 2. Hero Heading (Centered/Middle) */}
      <div className="flex-grow flex items-center justify-center z-20 relative w-full px-6 md:px-10 overflow-hidden">
        <div className="w-full overflow-hidden">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center select-none text-[8vw] sm:text-[10vw] md:text-[11vw] lg:text-[12.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m aditya
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 3. Hero Portrait (Positioned Absolutely under Heading) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn
          delay={0.6}
          y={30}
          className="w-full h-full flex justify-center items-end"
        >
          <FluidCursorFollow className="w-full h-full flex justify-center items-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image.png"
              alt="Aditya's Portrait"
              className="w-full h-auto object-contain select-none pointer-events-none"
              style={{ maxHeight: "75vh" }}
            />
          </FluidCursorFollow>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end z-20 relative px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        {/* Left Sub-heading */}
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
            a full stack developer experienced in scalable web platforms
          </p>
        </FadeIn>

        {/* Right Action */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => scrollToSection("contact")} />
        </FadeIn>
      </div>

    </section>
  );
}
