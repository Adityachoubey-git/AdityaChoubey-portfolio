"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import TechLogo from "../ui/SvgLogos";

const techStackCategories = [
  {
    title: "Frontend & Languages",
    description: "Building responsive, modern user interfaces with type-safe state management.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend & Systems",
    description: "Designing scalable backend architectures, RESTful APIs, and telemetry pipelines.",
    skills: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "MongoDB", "InfluxDB"]
  },
  {
    title: "Tools & Utilities",
    description: "Integrating smart nodes with ESP32 microcontrollers and low-latency communication.",
    skills: ["ESP32", "WebSockets", "Git", "GitHub", "Postman"]
  }
];

// Technical skill level database
const skillLevels: Record<string, { level: number; label: string }> = {
  "react": { level: 92, label: "Expert // Component Architecture & Context Hooks" },
  "next.js": { level: 90, label: "Advanced // App Router, SSR, Hydration & ISR" },
  "typescript": { level: 88, label: "Advanced // Type Safety, Generics & Strict Checking" },
  "javascript": { level: 95, label: "Expert // Asynchronous Flow, Event Loop & Core Engine" },
  "tailwind css": { level: 93, label: "Expert // Responsive Utilities & Fluid Design Systems" },
  "html5": { level: 95, label: "Expert // Semantic DOM, SEO & Accessibility Standards" },
  "css3": { level: 90, label: "Advanced // Flexbox, Grid Layouts & Keyframe Animations" },
  "node.js": { level: 88, label: "Advanced // Non-Blocking I/O & Event-Driven Processors" },
  "express.js": { level: 87, label: "Advanced // Middleware Engineering & API Routing" },
  "prisma": { level: 85, label: "Proficient // Schema Relations & Complex Model Queries" },
  "postgresql": { level: 86, label: "Advanced // Relational Tables, Indexing & JSONB Storage" },
  "mongodb": { level: 84, label: "Proficient // Document Structures & Aggregation Frameworks" },
  "influxdb": { level: 80, label: "Proficient // Time-Series Analytics & Flux Query Language" },
  "esp32": { level: 85, label: "Proficient // Microcontrollers, Firmware & Real-time Telemetry" },
  "websockets": { level: 90, label: "Advanced // Low-Latency Duplex Connections (120ms)" },
  "git": { level: 88, label: "Advanced // Versioning, Branch Rebasing & PR Management" },
  "github": { level: 90, label: "Advanced // GitHub Actions, CI/CD Pipelines & Team Collaboration" },
  "postman": { level: 88, label: "Advanced // API Integration Testing & Collection Runs" }
};

const services = [
  {
    num: "01",
    name: "Frontend Development",
    desc: "Building modern, clean, and responsive user interfaces using HTML, CSS, Tailwind CSS, React.js, and Next.js with state management and optimized routing.",
  },
  {
    num: "02",
    name: "Backend & REST APIs",
    desc: "Designing secure, scalable backend architectures and RESTful APIs using Node.js, Express.js, and prisma client configurations.",
  },
  {
    num: "03",
    name: "Databases & Analytics",
    desc: "Implementing high-performance telemetry analytics and scalable storage using MongoDB, PostgreSQL, and InfluxDB for time-series data.",
  },
  {
    num: "04",
    name: "IoT & Hardware Integration",
    desc: "Integrating smart microcontrollers like ESP32 with low-latency device control, web sockets (120ms latency), and sensor communications.",
  },
  {
    num: "05",
    name: "Tools & Leadership",
    desc: "Curating problem statements, hosting events, managing team collaboration, and utilizing professional tools like Git, GitHub, Postman, and VS Code.",
  },
];

export default function ServicesSection() {
  const [selectedSkill, setSelectedSkill] = useState<string>("React");

  const currentSkillInfo = skillLevels[selectedSkill.toLowerCase()] || {
    level: 85,
    label: "Proficient // Practical Industry Experience"
  };

  return (
    <section
      id="skills"
      className="relative w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col relative z-10">

        {/* Section Heading */}
        <div className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={40}>
            <h2
              className="font-black uppercase leading-none tracking-tight text-[#0C0C0C] select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Skills
            </h2>
          </FadeIn>
        </div>

        {/* 1. Sleek Interactive Skill Progress Bar Radar Panel */}
        <FadeIn delay={0.1} y={20} className="w-full mb-12 sm:mb-16">
          <div className="w-full bg-[#FAFBFD] border border-[#0C0C0C]/10 rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] select-none">
            
            {/* Left Brand Logo & Heading info */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#0C0C0C]/10 flex items-center justify-center p-2.5 shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                <TechLogo name={selectedSkill} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#0C0C0C]/40 leading-none">
                  Skill Proficiency scanner
                </span>
                <h4 className="text-xl font-black uppercase tracking-tight text-[#0C0C0C] leading-none mt-2">
                  {selectedSkill}
                </h4>
              </div>
            </div>

            {/* Center Spring Progress Bar */}
            <div className="flex-grow max-w-lg w-full flex flex-col text-left justify-center">
              <div className="flex justify-between items-end mb-2 px-0.5">
                <span className="text-[10px] font-bold tracking-[0.1em] text-[#0C0C0C]/50 uppercase truncate max-w-[75%] sm:max-w-none">
                  {currentSkillInfo.label}
                </span>
                <span className="font-mono font-black text-sm text-[#0C0C0C]/80 leading-none">
                  {currentSkillInfo.level}%
                </span>
              </div>
              
              {/* Progress Track Container */}
              <div className="w-full h-2 bg-[#0C0C0C]/5 rounded-full overflow-hidden relative">
                <motion.div
                  key={selectedSkill} // Forces re-mount and animation trigger on skill change
                  initial={{ width: 0 }}
                  animate={{ width: `${currentSkillInfo.level}%` }}
                  transition={{ type: "spring", stiffness: 70, damping: 14, mass: 0.8 }}
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#646973] to-[#0c0c0c] rounded-full shadow-[0_0_8px_rgba(12,12,12,0.1)]"
                />
              </div>
            </div>

            {/* Right Callout instruction */}
            <div className="hidden lg:flex flex-col text-right shrink-0">
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#0C0C0C]/40 uppercase leading-none">
                Interactive Radar
              </span>
              <span className="text-xs font-semibold text-[#0C0C0C]/75 mt-2 leading-none">
                Click Pills to Scan
              </span>
            </div>

          </div>
        </FadeIn>

        {/* 2. Elegant Categorized Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 md:mb-28 w-full text-left">
          {techStackCategories.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} y={30} className="flex">
              <div className="w-full bg-[#FAFBFD] border border-[#0C0C0C]/10 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-[#0C0C0C]/20 hover:-translate-y-1 transition-all duration-300">
                <div>
                  {/* Category Pill Tag */}
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#0C0C0C]/40">
                    Category {idx + 1}
                  </span>
                  {/* Category Title */}
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#0C0C0C] mt-1.5 mb-2">
                    {category.title}
                  </h3>
                  {/* Short Description */}
                  <p className="text-xs sm:text-sm font-light text-[#0C0C0C]/65 leading-relaxed mb-8">
                    {category.description}
                  </p>
                </div>

                {/* Flexible wrap pill list of technology items */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-auto">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill.toLowerCase() === skill.toLowerCase();
                    return (
                      <motion.button
                        key={skill}
                        onClick={() => setSelectedSkill(skill)}
                        whileHover={{ scale: 1.04, y: -2 }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                          isSelected
                            ? "border-[#0C0C0C] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] scale-[1.03] font-bold"
                            : "border-[#0C0C0C]/8 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#0C0C0C]/25 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                        }`}
                      >
                        <TechLogo name={skill} className="w-4.5 h-4.5 shrink-0" />
                        <span className={`text-[11px] tracking-wide ${isSelected ? "text-[#0C0C0C] font-bold" : "text-[#0C0C0C]/85 font-semibold"}`}>
                          {skill}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 2. Headline Divider for Services
        <div className="w-full text-left mb-12 sm:mb-16">
          <FadeIn delay={0.1} y={20}>
            <h3 className="font-extrabold text-xs sm:text-sm tracking-[0.35em] uppercase text-[#0C0C0C]/40">
              Core Capabilities // What I Do
            </h3>
          </FadeIn>
        </div>

        {/* Services List 
        <div className="w-full flex flex-col">
          {services.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 0.1}
              y={30}
              className="w-full border-b border-[rgba(12,12,12,0.15)] first:border-t"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 items-start md:items-center py-8 sm:py-10 md:py-12 w-full text-left">
                
                {/* Large Number ID
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none md:min-w-[160px] lg:min-w-[200px]"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {service.num}
                </div>

                {/* Service Details Group 
                <div className="flex flex-col gap-2 sm:gap-3 flex-grow">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-75"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {service.desc}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div> */}

      </div>
    </section>
  );
}
