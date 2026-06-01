"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomLoader from "@/components/ui/CustomLoader";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock body scroll while assets are loading, then restore it and reset scroll position to top
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <CustomLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.main
        className="main-wrapper w-full bg-[#0C0C0C]"
        style={{ overflowX: "clip" }}
        initial={{ opacity: 0, y: 50 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Custom easeOutExpo for fluid parallax rise
      >
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </motion.main>
    </>
  );
}

