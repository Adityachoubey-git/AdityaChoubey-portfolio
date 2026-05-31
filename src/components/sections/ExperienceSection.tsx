"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const experiences = [
  {
    role: "Software Developer Intern — IAFSM",
    company: "Indian Institute of Technology Delhi",
    location: "Delhi",
    duration: "Mar 2025 – Dec 2025",
    image: "/fsm.png",
    bgClass: "from-[#131E29] to-[#0A1016] border-[#1F3346]",
    tags: ["IIT Delhi", "Internship", "Full Stack", "IoT Systems"],
    bullets: [
      "Built a full-stack Facility Management System used by 700–800 active users.",
      "Designed booking workflow handling 100+ bookings per day.",
      "Implemented Role Based Access Control (RBAC) for multiple user roles.",
      "Developed an IoT-based Lab Autonomy system integrating ESP32 microcontrollers.",
      "Enabled a single microcontroller to control 20+ electrical devices remotely."
    ],
    metric1: {
      num: "700+",
      label: "Active Users Served"
    },
    metric2: {
      num: "20+",
      label: "IoT Device Nodes Controlled"
    }
  },
  {
    role: "Area Manager",
    company: "Innovatiview India Ltd.",
    location: "Noida",
    duration: "Jun 2024 – Jul 2024",
    image: "/innovatiview.png",
    bgClass: "from-[#291211] to-[#140808] border-[#441C1A]",
    tags: ["Innovatiview", "Operations", "Biometrics", "Management"],
    bullets: [
      "Supervised biometric verification operations for exams including CTET, BPSC, NTA, and UGC NET.",
      "Resolved technical issues for staff during verification processes.",
      "Ensured accuracy and validation of applicant data during exam operations."
    ],
    metric1: {
      num: "4+",
      label: "National Exams Supervised"
    },
    metric2: {
      num: "100%",
      label: "Biometric Data Validation"
    }
  }
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden select-none z-20"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col">

        {/* Section Heading */}
        <div className="w-full text-center mb-20 sm:mb-24 md:mb-28">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Experience
            </h2>
          </FadeIn>
        </div>

        {/* Experience Blocks Stacking List */}
        <div className="flex flex-col gap-24 sm:gap-32 w-full relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} index={i} {...exp} />
          ))}
        </div>

      </div>
    </section>
  );
}

interface ExperienceCardProps {
  index: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  image: string;
  bgClass: string;
  tags: string[];
  bullets: string[];
  metric1: { num: string; label: string };
  metric2: { num: string; label: string };
}

function ExperienceCard({
  index,
  role,
  company,
  location,
  duration,
  image,
  bgClass,
  tags,
  bullets,
  metric1,
  metric2,
}: ExperienceCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth entry transitions on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-stretch w-full max-w-6xl mx-auto"
    >
      {/* 1. Left Side: Tilted 3D-effect Image Mockup Panel */}
      <div className="w-full lg:w-[42%] flex justify-center items-center relative overflow-visible py-4">
        <div
          className="w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-[30px] sm:rounded-[40px] border border-white/10 bg-[#161616]/40 p-3 sm:p-4 shadow-2xl backdrop-blur-sm flex items-center justify-center transition-transform duration-500 hover:scale-[1.03] overflow-hidden"
          style={{
            transform: "perspective(1200px) rotateY(-8deg) rotateX(4deg)",
            willChange: "transform",
          }}
        >
          <img
            src={image}
            alt={`${company} Mockup`}
            className="w-full h-full object-cover rounded-[22px] sm:rounded-[30px] shadow-lg pointer-events-none select-none"
          />
        </div>
      </div>

      {/* 2. Right Side: Experience Layout Card */}
      <div
        className={`w-full lg:w-[58%] rounded-[40px] sm:rounded-[50px] border bg-gradient-to-br ${bgClass} p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl`}
      >
        <div>
          {/* Top Row: Pill Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1 text-[9px] sm:text-xs rounded-full uppercase font-semibold bg-white/10 text-white/80 border border-white/5 tracking-wider select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Heading Role */}
          <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight uppercase leading-snug">
            {role}
          </h3>

          {/* Company details and dates */}
          <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 mt-2 mb-8">
            {company} &nbsp;•&nbsp; {location} &nbsp;•&nbsp; {duration}
          </p>

          {/* Accomplishment Bullet List */}
          <ul className="flex flex-col gap-4 text-left">
            {bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex gap-3 text-sm sm:text-base font-light leading-relaxed text-[#D7E2EA]/85"
              >
                <span className="text-[#D7E2EA]/30 select-none">—</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dual Metrics status boxes */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-3 sm:gap-4 p-4 rounded-3xl bg-[#0C0C0C]/40 border border-white/5 backdrop-blur-sm text-center sm:text-left">
            <span
              className="font-black text-2xl sm:text-4xl text-[#E8C580] tracking-tight leading-none select-none font-sans"
              style={{ fontFamily: "var(--font-kanit), sans-serif" }}
            >
              {metric1.num}
            </span>
            <span className="text-[10px] sm:text-xs font-light leading-snug text-[#D7E2EA]/50 uppercase tracking-wider">
              {metric1.label}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-3 sm:gap-4 p-4 rounded-3xl bg-[#0C0C0C]/40 border border-white/5 backdrop-blur-sm text-center sm:text-left">
            <span
              className="font-black text-2xl sm:text-4xl text-[#E8C580] tracking-tight leading-none select-none font-sans"
              style={{ fontFamily: "var(--font-kanit), sans-serif" }}
            >
              {metric2.num}
            </span>
            <span className="text-[10px] sm:text-xs font-light leading-snug text-[#D7E2EA]/50 uppercase tracking-wider">
              {metric2.label}
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
