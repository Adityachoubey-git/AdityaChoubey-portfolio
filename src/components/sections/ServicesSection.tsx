"use client";

import React from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const techStack = [
  { name: "React", x: "left-[1vw] xl:left-[5vw]", y: "top-[8%]", color: "hover:border-[#61DAFB] hover:text-[#61DAFB] hover:shadow-[0_0_15px_rgba(97,218,251,0.2)]" },
  { name: "Next.js", x: "left-[4vw] xl:left-[9vw]", y: "top-[18%]", color: "hover:border-[#0C0C0C] hover:text-[#0C0C0C] hover:shadow-[0_0_15px_rgba(12,12,12,0.15)]" },
  { name: "TypeScript", x: "left-[2vw] xl:left-[6vw]", y: "top-[28%]", color: "hover:border-[#3178C6] hover:text-[#3178C6] hover:shadow-[0_0_15px_rgba(49,120,198,0.2)]" },
  { name: "Node.js", x: "left-[5vw] xl:left-[10vw]", y: "top-[38%]", color: "hover:border-[#339933] hover:text-[#339933] hover:shadow-[0_0_15px_rgba(51,153,51,0.2)]" },
  { name: "PostgreSQL", x: "left-[1vw] xl:left-[5vw]", y: "top-[48%]", color: "hover:border-[#4169E1] hover:text-[#4169E1] hover:shadow-[0_0_15px_rgba(65,105,225,0.2)]" },
  { name: "MongoDB", x: "left-[4vw] xl:left-[8vw]", y: "top-[58%]", color: "hover:border-[#47A248] hover:text-[#47A248] hover:shadow-[0_0_15px_rgba(71,162,72,0.2)]" },
  { name: "ESP32", x: "left-[2vw] xl:left-[7vw]", y: "top-[68%]", color: "hover:border-[#E7352C] hover:text-[#E7352C] hover:shadow-[0_0_15px_rgba(231,53,44,0.2)]" },
  { name: "Tailwind CSS", x: "left-[5vw] xl:left-[10vw]", y: "top-[78%]", color: "hover:border-[#06B6D4] hover:text-[#06B6D4] hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]" },
  { name: "HTML5", x: "left-[3vw] xl:left-[6vw]", y: "top-[88%]", color: "hover:border-[#E34F26] hover:text-[#E34F26] hover:shadow-[0_0_15px_rgba(227,79,38,0.2)]" },

  { name: "CSS3", x: "right-[1vw] xl:right-[5vw]", y: "top-[10%]", color: "hover:border-[#1572B6] hover:text-[#1572B6] hover:shadow-[0_0_15px_rgba(21,114,182,0.2)]" },
  { name: "Git", x: "right-[4vw] xl:right-[9vw]", y: "top-[20%]", color: "hover:border-[#F05032] hover:text-[#F05032] hover:shadow-[0_0_15px_rgba(240,80,50,0.2)]" },
  { name: "GitHub", x: "right-[2vw] xl:right-[6vw]", y: "top-[30%]", color: "hover:border-[#0C0C0C] hover:text-[#0C0C0C] hover:shadow-[0_0_15px_rgba(12,12,12,0.15)]" },
  { name: "Prisma", x: "right-[5vw] xl:right-[10vw]", y: "top-[40%]", color: "hover:border-[#5A67D8] hover:text-[#5A67D8] hover:shadow-[0_0_15px_rgba(90,103,216,0.2)]" },
  { name: "WebSockets", x: "right-[1vw] xl:right-[5vw]", y: "top-[50%]", color: "hover:border-amber-600 hover:text-amber-600 hover:shadow-[0_0_15px_rgba(217,119,6,0.2)]" },
  { name: "Express.js", x: "right-[4vw] xl:right-[8vw]", y: "top-[60%]", color: "hover:border-[#0C0C0C] hover:text-[#0C0C0C] hover:shadow-[0_0_15px_rgba(12,12,12,0.15)]" },
  { name: "Postman", x: "right-[2vw] xl:right-[7vw]", y: "top-[70%]", color: "hover:border-[#FF6C37] hover:text-[#FF6C37] hover:shadow-[0_0_15px_rgba(255,108,55,0.2)]" },
  { name: "InfluxDB", x: "right-[5vw] xl:right-[10vw]", y: "top-[80%]", color: "hover:border-[#22ADF6] hover:text-[#22ADF6] hover:shadow-[0_0_15px_rgba(34,173,246,0.2)]" },
  { name: "JavaScript", x: "right-[3vw] xl:right-[6vw]", y: "top-[90%]", color: "hover:border-[#E8A51C] hover:text-[#E8A51C] hover:shadow-[0_0_15px_rgba(232,165,28,0.2)]" }
];

const dropVariants = {
  hidden: { y: -500, opacity: 0, scale: 0.4, rotate: -20 },
  visible: (i: number) => ({
    y: 0,
    opacity: 0.85,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.6,      // Ultra bouncy gravity drop
      stiffness: 75,
      damping: 6.5,     // Satisfying spring oscillations
      delay: i * 0.04,  // Rainfall stagger
    }
  })
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
  return (
    <section
      id="skills"
      className="relative w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 overflow-hidden"
    >
      
      {/* Absolute Section-Wide Tech Stack Gravity Rainfall */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="absolute inset-0 z-0 pointer-events-none sm:pointer-events-auto overflow-hidden w-full h-full"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            custom={index}
            variants={dropVariants}
            whileHover={{ 
              scale: 1.08, 
              y: -5,
              rotate: [0, -3, 3, -3, 0],
              transition: { duration: 0.3 }
            }}
            className={`absolute px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[rgba(12,12,12,0.15)] bg-white text-[9px] sm:text-xs font-semibold text-[#0C0C0C] tracking-wider shadow-[0_4px_10px_rgba(0,0,0,0.03)] cursor-grab active:cursor-grabbing transition-colors duration-300 ${tech.x} ${tech.y} ${tech.color} opacity-25 sm:opacity-90 select-none z-0`}
          >
            {tech.name}
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-5xl mx-auto w-full flex flex-col relative z-10">
        
        {/* Section Heading */}
        <div className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn delay={0} y={40}>
            <h2
              className="font-black uppercase leading-none tracking-tight text-[#0C0C0C] select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Skills
            </h2>
          </FadeIn>
        </div>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {services.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 0.1}
              y={30}
              className="w-full border-b border-[rgba(12,12,12,0.15)] first:border-t"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 items-start md:items-center py-8 sm:py-10 md:py-12 w-full text-left">
                
                {/* Large Number ID */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none md:min-w-[160px] lg:min-w-[200px]"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {service.num}
                </div>

                {/* Service Details Group */}
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
        </div>

      </div>
    </section>
  );
}
