"use client";

import React from "react";
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

        {/* 1. New Elegant Categorized Tech Stack Grid */}
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
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#0C0C0C]/8 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#0C0C0C]/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] cursor-default transition-all duration-200"
                    >
                      <TechLogo name={skill} className="w-4.5 h-4.5 shrink-0" />
                      <span className="text-[11px] font-semibold text-[#0C0C0C]/85 tracking-wide">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
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
