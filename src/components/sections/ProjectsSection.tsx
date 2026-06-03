"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import LiveProjectButton from "../ui/LiveProjectButton";

const projects = [
  {
    num: "01",
    category: "Employee Management System -Full stack(in progress)",
    name: "Staff Connect",
    images: {
      col1_1: "staff1.png",
      col1_2: "staff2.png",
      col2: "staff3.png",
    },
    liveUrl: "https://staff-connect-odd8.vercel.app/", // Grayed out unclickable
    githubUrl: "https://github.com/Adityachoubey-git/StaffConnect",
  },
  {
    num: "02",
    category: "AI & Full Stack",
    name: "Soulspace",
    images: {
      col1_1: "/soulspace1.png",
      col1_2: "soulspace3.jpeg",
      col2: "/soulspace2.png",
    },
    liveUrl: "https://drive.google.com/file/d/18E5g-p6B0bS2hI10966G0_RV1ILRgAUF/view?usp=sharing",
    githubUrl: "https://github.com/manavgarg-source3/Soulspace",
  },
  {
    num: "03",
    category: "Full Stack Developer Intern- IIT Delhi IAFSM",
    name: "CMF - IITD",
    images: {
      col1_1: "/cmf3.png",
      col1_2: "/cmf2.png",
      col2: "/cmf1.png",
    },
    liveUrl: "https://cmf.iitd.ac.in/", // Grayed out unclickable
    githubUrl: "",
  },
  {
    num: "04",
    category: "IoT & Full Stack",
    name: "Lab Autonomy",
    images: {
      col1_1: "lab2.png",
      col1_2: "lab3.png",
      col2: "lab1.png",
    },
    liveUrl: "", // Grayed out unclickable
    githubUrl: "https://github.com/Adityachoubey-git/minor_project",
  },


];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 pb-28 -mt-10 sm:-mt-12 md:-mt-14 z-20"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col">

        {/* Section Heading */}
        <div className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Project
            </h2>
          </FadeIn>
        </div>

        {/* Sticky Stacking Deck of Project Cards */}
        <div className="w-full flex flex-col gap-12 relative">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - 1 - i) * 0.03;
            return (
              <ProjectCard
                key={project.num}
                index={i}
                num={project.num}
                category={project.category}
                name={project.name}
                images={project.images}
                targetScale={targetScale}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

interface ProjectCardProps {
  index: number;
  num: string;
  category: string;
  name: string;
  images: {
    col1_1: string;
    col1_2: string;
    col2: string;
  };
  targetScale: number;
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectCard({
  index,
  num,
  category,
  name,
  images,
  targetScale,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of this card's container to scale it down as you scroll past
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale,
        top: `calc(5.5rem + ${index * 36}px)`, // Sticky stacking offset
        willChange: "transform",
      }}
      className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden h-[70vh] sm:h-[75vh] md:h-[80vh] mb-[12vh] last:mb-0"
    >
      {/* Top Row: Info and Live Project button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#D7E2EA]/15 pb-4 sm:pb-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <span
            className="font-black leading-none select-none text-[#D7E2EA]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}
          >
            {num}
          </span>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/60">
              {category}
            </span>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold uppercase text-[#D7E2EA] tracking-tight">
              {name}
            </h3>
          </div>
        </div>

        {/* Buttons Action Group */}
        <div className="flex items-center gap-3">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <LiveProjectButton />
            </a>
          ) : (
            <LiveProjectButton className="opacity-30 cursor-not-allowed pointer-events-none border-[#D7E2EA]/20 text-[#D7E2EA]/40" />
          )}

          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "rgba(215, 226, 234, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border-2 border-[#D7E2EA]/60 text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors cursor-pointer select-none px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>Repo</span>
              </motion.button>
            </a>
          )}
        </div>
      </div>

      {/* Bottom Row: Responsive Image Grid */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full flex-grow overflow-hidden min-h-0">

        {/* Left Column (40% width stacked images) - hidden on mobile/tablet for clean scaling */}
        <div className="hidden md:flex w-full md:w-[40%] flex-col gap-4 sm:gap-6 justify-between shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.col1_1}
            alt={`${name} - Details 1`}
            className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] pointer-events-none select-none"
            style={{ height: "clamp(100px, 12vw, 180px)" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.col1_2}
            alt={`${name} - Details 2`}
            className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] pointer-events-none select-none"
            style={{ height: "clamp(120px, 15vw, 240px)" }}
          />
        </div>

        {/* Right Column (60% width tall image on desktop, 100% width full render on mobile) */}
        <div className="w-full md:w-[60%] flex flex-grow min-h-0 overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[50px] justify-center items-center bg-[#0C0C0C]/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.col2}
            alt={`${name} - Render Showcase`}
            className="w-full h-full object-contain md:object-cover pointer-events-none select-none"
            style={{ minHeight: "100%" }}
          />
        </div>

      </div>

    </motion.div>
  );
}
